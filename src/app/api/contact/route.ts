import { NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/schemas";
import {
  generateReference,
  sendContactNotification,
  sendContactAutoReply,
} from "@/lib/email";
import { rateLimit } from "@/lib/rate-limit";

export async function POST(request: Request) {
  try {
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      "unknown";
    if (!rateLimit(ip, 5)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const body = await request.json();

    const result = contactFormSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(
        { error: "Invalid form data", details: result.error.flatten() },
        { status: 400 }
      );
    }

    const data = result.data;

    if (data.website && data.website.length > 0) {
      return NextResponse.json({ success: true });
    }

    const reference = generateReference("MH");

    // Log the lead (always works, even if email fails)
    console.log("=== NEW CONTACT LEAD ===", {
      reference,
      name: data.name,
      email: data.email,
      phone: data.phone,
      company: data.company,
      service: data.service,
      budget: data.budget,
      message: data.message,
    });

    // Send emails
    try {
      console.log(`[EMAIL] Sending team notification to ${process.env.CONTACT_EMAIL}...`);
      console.log(`[EMAIL] Sending auto-reply to ${data.email}...`);

      const [teamResult, customerResult] = await Promise.allSettled([
        sendContactNotification({
          reference,
          name: data.name,
          email: data.email,
          phone: data.phone,
          company: data.company,
          service: data.service,
          budget: data.budget,
          referralSource: data.referralSource,
          message: data.message,
        }),
        sendContactAutoReply({
          reference,
          name: data.name,
          email: data.email,
          service: data.service,
        }),
      ]);

      if (teamResult.status === "fulfilled") {
        console.log("[EMAIL] Team notification sent successfully");
      } else {
        console.error("[EMAIL] Team notification FAILED:", teamResult.reason);
      }

      if (customerResult.status === "fulfilled") {
        console.log("[EMAIL] Customer auto-reply sent successfully");
      } else {
        console.error("[EMAIL] Customer auto-reply FAILED:", customerResult.reason);
      }
    } catch (emailError) {
      console.error("[EMAIL] Email sending crashed:", emailError);
    }

    return NextResponse.json({
      success: true,
      reference,
      message: "Thank you! We'll get back to you within 24 hours.",
    });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}

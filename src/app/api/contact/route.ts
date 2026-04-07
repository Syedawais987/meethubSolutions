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
    // Rate limiting: 5 submissions per hour per IP
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

    // Server-side validation
    const result = contactFormSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(
        { error: "Invalid form data", details: result.error.flatten() },
        { status: 400 }
      );
    }

    const data = result.data;

    // Honeypot check — silently reject spam
    if (data.website && data.website.length > 0) {
      return NextResponse.json({ success: true });
    }

    const reference = generateReference("MH");

    // Send emails in parallel
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

    // Log any email failures but still return success to user
    if (teamResult.status === "rejected") {
      console.error("Failed to send team notification:", teamResult.reason);
    }
    if (customerResult.status === "rejected") {
      console.error("Failed to send customer auto-reply:", customerResult.reason);
    }

    return NextResponse.json({
      success: true,
      reference,
      message: "Thank you! We'll get back to you within 24 hours.",
    });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

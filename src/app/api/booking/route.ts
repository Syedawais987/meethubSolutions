import { NextResponse } from "next/server";
import { bookingFormSchema } from "@/lib/schemas";
import {
  generateReference,
  sendBookingNotification,
  sendBookingAutoReply,
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

    const result = bookingFormSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(
        { error: "Invalid form data", details: result.error.flatten() },
        { status: 400 }
      );
    }

    const data = result.data;
    const reference = generateReference("MH-T");

    console.log("=== NEW BOOKING LEAD ===", {
      reference,
      name: data.name,
      email: data.email,
      phone: data.phone,
      package: data.package,
      travelDate: data.travelDate,
      travelers: data.travelers,
    });

    try {
      console.log(`[EMAIL] Sending booking team notification to ${process.env.CONTACT_EMAIL}...`);
      console.log(`[EMAIL] Sending booking auto-reply to ${data.email}...`);

      const [teamResult, customerResult] = await Promise.allSettled([
        sendBookingNotification({
          reference,
          name: data.name,
          email: data.email,
          phone: data.phone,
          package: data.package,
          travelDate: data.travelDate,
          travelers: data.travelers,
          requirements: data.requirements,
          referralSource: data.referralSource,
        }),
        sendBookingAutoReply({
          reference,
          name: data.name,
          email: data.email,
          package: data.package,
          travelDate: data.travelDate,
        }),
      ]);

      if (teamResult.status === "fulfilled") {
        console.log("[EMAIL] Booking team notification sent successfully");
      } else {
        console.error("[EMAIL] Booking team notification FAILED:", teamResult.reason);
      }

      if (customerResult.status === "fulfilled") {
        console.log("[EMAIL] Booking customer auto-reply sent successfully");
      } else {
        console.error("[EMAIL] Booking customer auto-reply FAILED:", customerResult.reason);
      }
    } catch (emailError) {
      console.error("[EMAIL] Booking email sending crashed:", emailError);
    }

    return NextResponse.json({
      success: true,
      reference,
      message:
        "Thank you! Our travel team will contact you within 24 hours with a customized quote.",
    });
  } catch (error) {
    console.error("Booking form error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}

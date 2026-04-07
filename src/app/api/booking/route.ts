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

    // Send emails in parallel
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

    if (teamResult.status === "rejected") {
      console.error("Failed to send team notification:", teamResult.reason);
    }
    if (customerResult.status === "rejected") {
      console.error("Failed to send customer auto-reply:", customerResult.reason);
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
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

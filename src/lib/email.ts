import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const FROM_EMAIL = "Meet Hub Financial Services <onboarding@resend.dev>";
const TEAM_EMAIL = process.env.CONTACT_EMAIL || "meethub101@gmail.com";

export function generateReference(prefix = "MH"): string {
  const year = new Date().getFullYear();
  const rand = String(Math.floor(Math.random() * 9999)).padStart(4, "0");
  return `${prefix}-${year}-${rand}`;
}

// ── Contact Form: Team Notification ──
export async function sendContactNotification(data: {
  reference: string;
  name: string;
  email: string;
  phone: string;
  company?: string;
  service: string;
  budget?: string;
  referralSource?: string;
  message: string;
}) {
  return resend.emails.send({
    from: FROM_EMAIL,
    to: TEAM_EMAIL,
    subject: `New Lead — ${data.service} — ${data.name}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <table style="border-collapse:collapse;width:100%;max-width:600px;">
        <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Reference</td><td style="padding:8px;border-bottom:1px solid #eee;">${data.reference}</td></tr>
        <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Name</td><td style="padding:8px;border-bottom:1px solid #eee;">${data.name}</td></tr>
        <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Email</td><td style="padding:8px;border-bottom:1px solid #eee;">${data.email}</td></tr>
        <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Phone</td><td style="padding:8px;border-bottom:1px solid #eee;">${data.phone}</td></tr>
        ${data.company ? `<tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Company</td><td style="padding:8px;border-bottom:1px solid #eee;">${data.company}</td></tr>` : ""}
        <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Service</td><td style="padding:8px;border-bottom:1px solid #eee;">${data.service}</td></tr>
        ${data.budget ? `<tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Budget</td><td style="padding:8px;border-bottom:1px solid #eee;">${data.budget}</td></tr>` : ""}
        ${data.referralSource ? `<tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Referral Source</td><td style="padding:8px;border-bottom:1px solid #eee;">${data.referralSource}</td></tr>` : ""}
        <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Message</td><td style="padding:8px;border-bottom:1px solid #eee;">${data.message}</td></tr>
      </table>
    `,
  });
}

// ── Contact Form: Customer Auto-Reply ──
export async function sendContactAutoReply(data: {
  reference: string;
  name: string;
  email: string;
  service: string;
}) {
  const firstName = data.name.split(" ")[0];

  return resend.emails.send({
    from: FROM_EMAIL,
    to: data.email,
    subject: `We received your inquiry — Meet Hub Financial Services`,
    html: `
      <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;">
        <h2 style="color:#1B2A4A;">Thank you, ${firstName}!</h2>
        <p>We've received your inquiry about <strong>${data.service}</strong> services. A member of our team will contact you within <strong>24 hours</strong>.</p>
        <p style="background:#f4f4f4;padding:12px 16px;border-radius:8px;font-size:14px;">
          Your reference number: <strong>${data.reference}</strong>
        </p>
        <p>In the meantime, feel free to reach us on WhatsApp for instant responses:</p>
        <p><a href="https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}" style="color:#25D366;font-weight:bold;">Chat on WhatsApp</a></p>
        <hr style="border:none;border-top:1px solid #eee;margin:24px 0;" />
        <p style="font-size:12px;color:#888;">
          Best regards,<br/>
          <strong>Meet Hub Financial Services Team</strong><br/>
          meethub101@gmail.com
        </p>
      </div>
    `,
  });
}

// ── Booking Form: Team Notification ──
export async function sendBookingNotification(data: {
  reference: string;
  name: string;
  email: string;
  phone: string;
  package: string;
  travelDate: string;
  travelers: number;
  requirements?: string;
  referralSource?: string;
}) {
  return resend.emails.send({
    from: FROM_EMAIL,
    to: TEAM_EMAIL,
    subject: `New Booking Inquiry — ${data.package} — ${data.name}`,
    html: `
      <h2>New Travel Booking Inquiry</h2>
      <table style="border-collapse:collapse;width:100%;max-width:600px;">
        <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Reference</td><td style="padding:8px;border-bottom:1px solid #eee;">${data.reference}</td></tr>
        <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Name</td><td style="padding:8px;border-bottom:1px solid #eee;">${data.name}</td></tr>
        <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Email</td><td style="padding:8px;border-bottom:1px solid #eee;">${data.email}</td></tr>
        <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Phone</td><td style="padding:8px;border-bottom:1px solid #eee;">${data.phone}</td></tr>
        <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Package</td><td style="padding:8px;border-bottom:1px solid #eee;">${data.package}</td></tr>
        <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Travel Date</td><td style="padding:8px;border-bottom:1px solid #eee;">${data.travelDate}</td></tr>
        <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Travelers</td><td style="padding:8px;border-bottom:1px solid #eee;">${data.travelers}</td></tr>
        ${data.requirements ? `<tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Requirements</td><td style="padding:8px;border-bottom:1px solid #eee;">${data.requirements}</td></tr>` : ""}
        ${data.referralSource ? `<tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Referral</td><td style="padding:8px;border-bottom:1px solid #eee;">${data.referralSource}</td></tr>` : ""}
      </table>
    `,
  });
}

// ── Booking Form: Customer Auto-Reply ──
export async function sendBookingAutoReply(data: {
  reference: string;
  name: string;
  email: string;
  package: string;
  travelDate: string;
}) {
  const firstName = data.name.split(" ")[0];

  return resend.emails.send({
    from: FROM_EMAIL,
    to: data.email,
    subject: `Booking Inquiry Received — ${data.package} — Meet Hub Financial Services`,
    html: `
      <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;">
        <h2 style="color:#1B2A4A;">Thank you, ${firstName}!</h2>
        <p>We've received your booking inquiry for <strong>${data.package}</strong> on <strong>${data.travelDate}</strong>.</p>
        <p>Our travel team will contact you within <strong>24 hours</strong> with availability and a customized quote.</p>
        <p style="background:#f4f4f4;padding:12px 16px;border-radius:8px;font-size:14px;">
          Your reference number: <strong>${data.reference}</strong>
        </p>
        <p>Have questions? Reach us instantly on WhatsApp:</p>
        <p><a href="https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}" style="color:#25D366;font-weight:bold;">Chat on WhatsApp</a></p>
        <hr style="border:none;border-top:1px solid #eee;margin:24px 0;" />
        <p style="font-size:12px;color:#888;">
          Best regards,<br/>
          <strong>Meet Hub Financial Services — Travel Team</strong><br/>
          meethub101@gmail.com
        </p>
      </div>
    `,
  });
}

import type { Metadata } from "next";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Headphones,
  Handshake,
  Zap,
} from "lucide-react";
import { PageHeader } from "@/components/shared/page-header";
import { ContactForm } from "@/components/shared/contact-form";

import { FaqAccordion } from "@/components/sections/faq-accordion";
import { getWhatsAppUrl, whatsappMessages } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Meet Hub Financial Services. Office address, phone, email, WhatsApp — we're here to help with all your business needs.",
};

const contactFaqs = [
  {
    question: "What services does Meet Hub Financial Services offer?",
    answer:
      "We offer comprehensive business services including accounting & bookkeeping, tax consultancy, corporate advisory (SECP registration), ERP solutions, department outsourcing, internal audit, audit & assurance, data archiving, training & development, fixed asset management, and travel & tour packages.",
  },
  {
    question: "What industries do you serve?",
    answer:
      "We serve businesses across all industries including manufacturing, IT, retail, healthcare, education, real estate, import/export, NGOs, and startups. Our team adapts our services to the specific requirements of each sector.",
  },
  {
    question: "Do you offer monthly retainer packages?",
    answer:
      "Yes! We offer flexible engagement models including monthly retainers for ongoing services like accounting, tax compliance, and outsourced departments. Retainer packages offer cost savings compared to project-based pricing.",
  },
  {
    question: "How does the Visiting CFO service work?",
    answer:
      "Our Visiting CFO service provides your business with strategic financial leadership on a part-time or project basis. An experienced CFO-level professional works with your team on financial planning, budgeting, investor relations, and board presentations — without the cost of a full-time hire.",
  },
  {
    question: "Can you handle both individual and business tax filing?",
    answer:
      "Absolutely. We serve individuals, sole proprietors, partnerships, and corporations. Our tax services cover income tax returns, sales tax registration and returns, withholding tax compliance, and FBR audit support.",
  },
  {
    question: "What areas do your travel packages cover?",
    answer:
      "We offer corporate day-out packages near Islamabad, northern adventure tours (Skardu, Hunza, Naran), and custom corporate retreats. All packages include transport, accommodation, meals, and professional coordination.",
  },
  {
    question: "How quickly can you help register a company with SECP?",
    answer:
      "We typically complete SECP company registration within 5-10 business days from submission of complete documentation. We handle everything from name reservation to post-incorporation compliance.",
  },
  {
    question: "What is your typical response time after inquiry?",
    answer:
      "We respond to all inquiries within 24 hours during business days. For urgent matters, we recommend reaching out via WhatsApp or phone for immediate assistance.",
  },
];

const whyPartner = [
  {
    title: "Responsive Communication",
    description: "We respond to every inquiry within 24 hours — guaranteed.",
    icon: Zap,
  },
  {
    title: "No Lock-In Contracts",
    description:
      "Flexible engagement models that grow with your business needs.",
    icon: Handshake,
  },
  {
    title: "Multi-Channel Support",
    description:
      "Reach us via phone, email, WhatsApp, or book a consultation.",
    icon: Headphones,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Get in Touch"
        description="We're here to help. Reach out through any channel that works for you."
        breadcrumbs={[{ label: "Contact" }]}
      />

      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Form & Booking (2 cols) */}
            <div className="lg:col-span-2 space-y-8">
              <ContactForm />
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Contact Info Card */}
              <div className="rounded-2xl border border-border bg-card p-6">
                <h3 className="font-heading text-lg font-semibold text-foreground">
                  Contact Information
                </h3>
                <ul className="mt-4 space-y-4 text-sm">
                  <li className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span className="text-muted-foreground">
                      DHA 2, Islamabad
                    </span>
                  </li>
                  <li>
                    <a
                      href="tel:+923345444107"
                      className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-primary"
                    >
                      <Phone className="h-5 w-5 shrink-0 text-primary" />
                      +92 334 5444107
                    </a>
                  </li>
                  <li>
                    <a
                      href="mailto:meethub101@gmail.com"
                      className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-primary"
                    >
                      <Mail className="h-5 w-5 shrink-0 text-primary" />
                      meethub101@gmail.com
                    </a>
                  </li>
                  <li className="flex items-center gap-3">
                    <Clock className="h-5 w-5 shrink-0 text-primary" />
                    <span className="text-muted-foreground">
                      Mon–Fri 9am–6pm
                      <br />
                      Sat 10am–2pm
                    </span>
                  </li>
                </ul>
              </div>

              {/* WhatsApp Card */}
              <a
                href={getWhatsAppUrl(whatsappMessages.general)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-2xl border border-[#25D366]/30 bg-[#25D366]/10 p-6 transition-colors hover:bg-[#25D366]/20"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366]">
                  <MessageCircle className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-foreground">
                    Chat on WhatsApp
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Get instant responses
                  </p>
                </div>
              </a>

              {/* Social Media */}
              <div className="rounded-2xl border border-border bg-card p-6">
                <h3 className="font-heading text-lg font-semibold text-foreground">
                  Follow Us
                </h3>
                <div className="mt-4 flex gap-3">
                  <a
                    href="https://www.facebook.com/profile.php?id=61574347864306"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#1877F2]/10 text-[#1877F2] transition-colors hover:bg-[#1877F2] hover:text-white"
                    aria-label="Facebook"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                  </a>
                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#E4405F]/10 text-[#E4405F] transition-colors hover:bg-[#E4405F] hover:text-white"
                    aria-label="Instagram"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Google Map */}
      <section className="border-y border-border">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13278.952622953498!2d73.0800!3d33.5200!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df95c5b1c1b5b1%3A0x1234567890abcdef!2sDHA%20Phase%202%2C%20Islamabad%2C%20Pakistan!5e0!3m2!1sen!2s!4v1712400000000!5m2!1sen!2s"
          width="100%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Meet Hub Financial Services Office Location"
          className="grayscale transition-all hover:grayscale-0"
        />
      </section>

      {/* FAQ */}
      <FaqAccordion items={contactFaqs} showViewAll={false} />

      {/* Why Partner */}
      <section className="section-padding bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
              Why Partner With Us
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {whyPartner.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-border bg-card p-6 text-center transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mt-4 font-heading text-lg font-semibold">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

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
    "Get in touch with MeetHub Solutions. Office address, phone, email, WhatsApp — we're here to help with all your business needs.",
};

const contactFaqs = [
  {
    question: "What services does MeetHub Solutions offer?",
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
                      Razia Sharif Plaza, Blue Area, Islamabad
                    </span>
                  </li>
                  <li>
                    <a
                      href="tel:+923333551164"
                      className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-primary"
                    >
                      <Phone className="h-5 w-5 shrink-0 text-primary" />
                      +92 333 3551164
                    </a>
                  </li>
                  <li>
                    <a
                      href="mailto:info@meethubsolutions.com"
                      className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-primary"
                    >
                      <Mail className="h-5 w-5 shrink-0 text-primary" />
                      info@meethubsolutions.com
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

            </div>
          </div>
        </div>
      </section>

      {/* Google Map */}
      <section className="border-y border-border">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13278.952622953498!2d73.0400!3d33.7100!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbf11b4383b01%3A0x4f0e3c0b4b0e2b0a!2sRazia%20Sharif%20Plaza%2C%20Blue%20Area%2C%20Islamabad!5e0!3m2!1sen!2s!4v1712400000000!5m2!1sen!2s"
          width="100%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="MeetHub Solutions Office Location"
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

import type { Metadata } from "next";
import Link from "next/link";
import { MessageCircle, CheckCircle } from "lucide-react";
import { PageHeader } from "@/components/shared/page-header";
import { CtaBanner } from "@/components/sections/cta-banner";
import { getWhatsAppUrl, whatsappMessages } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Flexible pricing for accounting, tax, corporate advisory, ERP, and travel services. Contact us for a custom quote tailored to your needs.",
};

const plans = [
  {
    name: "Starter",
    description: "For startups and small businesses getting started",
    startingFrom: "PKR 30,000",
    features: [
      "Monthly bookkeeping",
      "Income tax return filing",
      "Basic financial statements",
      "Email support",
      "Quarterly review meeting",
    ],
    cta: "Get a Quote",
    highlighted: false,
  },
  {
    name: "Growth",
    description: "For growing businesses needing comprehensive support",
    startingFrom: "PKR 75,000",
    features: [
      "Full accounting & bookkeeping",
      "Monthly tax compliance (income + sales + WHT)",
      "Financial statements & forecasts",
      "Dedicated accountant",
      "Monthly review meetings",
      "ERP support",
      "Priority email & phone support",
    ],
    cta: "Get a Quote",
    highlighted: true,
  },
  {
    name: "Enterprise",
    description: "For established companies needing full-service partnership",
    startingFrom: "PKR 150,000",
    features: [
      "Everything in Growth",
      "Department outsourcing (Finance / HR)",
      "Visiting CFO service",
      "Internal audit",
      "Corporate advisory & governance",
      "Staff training programs",
      "Dedicated relationship manager",
      "24/7 support",
    ],
    cta: "Get a Quote",
    highlighted: false,
  },
];

export default function PricingPage() {
  return (
    <>
      <PageHeader
        title="Pricing"
        description="Transparent, flexible pricing tailored to your business size and needs. Every engagement starts with a free consultation."
        breadcrumbs={[{ label: "Pricing" }]}
      />

      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 md:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-2xl border p-8 transition-all hover:-translate-y-1 hover:shadow-lg ${
                  plan.highlighted
                    ? "border-primary bg-primary/5 shadow-md"
                    : "border-border bg-card"
                }`}
              >
                {plan.highlighted && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-semibold text-primary-foreground">
                    Most Popular
                  </span>
                )}
                <h3 className="font-heading text-2xl font-bold text-foreground">
                  {plan.name}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {plan.description}
                </p>
                <div className="mt-6">
                  <span className="text-sm text-muted-foreground">
                    Starting from
                  </span>
                  <div className="mt-1">
                    <span className="font-heading text-2xl font-bold text-foreground">
                      {plan.startingFrom}
                    </span>
                    <span className="ml-1 text-sm text-muted-foreground">
                      / month
                    </span>
                  </div>
                </div>
                <ul className="mt-6 space-y-3">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-brand-teal" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`mt-8 flex h-10 w-full items-center justify-center rounded-lg text-sm font-medium transition-colors ${
                    plan.highlighted
                      ? "bg-primary text-primary-foreground hover:bg-primary/80"
                      : "border border-border bg-background text-foreground hover:bg-muted"
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>

          {/* Custom pricing note */}
          <div className="mt-16 rounded-2xl border border-border bg-muted/30 p-8 text-center">
            <h3 className="font-heading text-2xl font-bold text-foreground">
              Need a Custom Package?
            </h3>
            <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
              Every business is unique. Tell us about your requirements and
              we&apos;ll put together a package that fits your size, industry,
              and budget.
            </p>
            <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Link
                href="/contact"
                className="inline-flex h-10 items-center justify-center rounded-lg bg-primary px-6 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/80"
              >
                Request a Custom Quote
              </Link>
              <a
                href={getWhatsAppUrl(whatsappMessages.quote("custom package"))}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 items-center justify-center gap-2 rounded-lg border border-border px-6 text-sm font-medium text-foreground transition-colors hover:bg-muted"
              >
                <MessageCircle className="h-4 w-4" />
                Discuss on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner
        title="Every Engagement Starts with a Free Consultation"
        description="No commitment, no pressure — just a conversation about how we can help your business."
      />
    </>
  );
}

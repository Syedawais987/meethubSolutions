import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd, serviceSchema, breadcrumbSchema } from "@/components/shared/json-ld";
import {
  Calculator,
  Building2,
  Monitor,
  FileText,
  Archive,
  Landmark,
  GraduationCap,
  SearchCheck,
  ShieldCheck,
  BarChart3,
  Banknote,
  ArrowRight,
  CheckCircle,
  MessageCircle,
  Play,
  TrendingUp,
  Users,
} from "lucide-react";
import { services, getServiceBySlug, getAllServiceSlugs } from "@/data/services";
import { PageHeader } from "@/components/shared/page-header";
import { FaqAccordion } from "@/components/sections/faq-accordion";
import { buttonVariants } from "@/components/ui/button";
import { getWhatsAppUrl } from "@/lib/whatsapp";

const iconMap: Record<string, React.ElementType> = {
  Calculator,
  Building2,
  Monitor,
  FileText,
  Archive,
  Landmark,
  GraduationCap,
  SearchCheck,
  ShieldCheck,
  BarChart3,
  Banknote,
};

export async function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: service.seo.title,
    description: service.seo.description,
    keywords: service.seo.keywords,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) notFound();

  const Icon = iconMap[service.icon] || Calculator;
  const relatedServices = service.relatedServices
    .map((s) => services.find((svc) => svc.slug === s))
    .filter(Boolean);

  return (
    <>
      <JsonLd
        data={serviceSchema({
          title: service.title,
          description: service.description,
          slug: service.slug,
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "https://meethubsolutions.com" },
          { name: "Services", url: "https://meethubsolutions.com/services" },
          {
            name: service.shortTitle,
            url: `https://meethubsolutions.com/services/${service.slug}`,
          },
        ])}
      />

      {/* ── 1. Page Header with Breadcrumb ── */}
      <PageHeader
        title={service.title}
        description={service.tagline}
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: service.shortTitle },
        ]}
      />

      {/* ── 2. Service Hero / CTA ── */}
      <section className="border-b border-border bg-primary/5 py-10">
        <div className="container mx-auto flex flex-col items-center gap-6 px-4 md:flex-row md:justify-between">
          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
              <Icon className="h-8 w-8 text-primary" />
            </div>
            <div>
              <h2 className="font-heading text-2xl font-bold text-foreground">
                {service.ctaText}
              </h2>
              <p className="text-muted-foreground">
                Let&apos;s discuss how we can help your business.
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <Link
              href="/contact"
              className={buttonVariants({ size: "lg" })}
            >
              {service.ctaText}
            </Link>
            <a
              href={getWhatsAppUrl(service.whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonVariants({ variant: "outline", size: "lg" })}
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ── 3. Problem Statement ── */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-wider text-secondary">
              The Challenge
            </span>
            <h2 className="mt-3 font-heading text-2xl font-bold text-foreground md:text-3xl">
              Why businesses need this service
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              {service.problemStatement}
            </p>
          </div>
        </div>
      </section>

      {/* ── 4. Video Explainer Placeholder ── */}
      {service.videoUrl && (
        <section className="container mx-auto px-4 pb-16">
          <div className="mx-auto max-w-3xl overflow-hidden rounded-2xl bg-muted">
            <div className="flex aspect-video items-center justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/20">
                <Play className="h-8 w-8 text-primary" />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── 5. What We Offer — Service Items ── */}
      <section className="section-padding bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="mb-10 text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-secondary">
              What We Offer
            </span>
            <h2 className="mt-3 font-heading text-2xl font-bold text-foreground md:text-3xl">
              {service.shortTitle} Services
            </h2>
          </div>
          <div className="mx-auto grid max-w-5xl gap-4 md:grid-cols-2">
            {service.items.map((item, i) => (
              <div
                key={i}
                className="rounded-xl border border-border bg-card p-5 transition-all hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="flex items-start gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-sm font-bold text-primary">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-heading font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. Case Study Snippet ── */}
      {service.caseStudy && (
        <section className="section-padding">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl rounded-2xl border border-border bg-card p-8">
              <span className="text-sm font-semibold uppercase tracking-wider text-secondary">
                Case Study
              </span>
              <span className="ml-3 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                {service.caseStudy.industry}
              </span>

              <div className="mt-4 space-y-3">
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                    Challenge
                  </h4>
                  <p className="mt-1 text-foreground">
                    {service.caseStudy.challenge}
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                    Outcome
                  </h4>
                  <p className="mt-1 text-foreground">
                    {service.caseStudy.outcome}
                  </p>
                </div>
              </div>

              <div className="mt-6 flex items-center gap-2 border-t border-border pt-4">
                <TrendingUp className="h-5 w-5 text-brand-teal" />
                <span className="text-xl font-bold text-brand-teal">
                  {service.caseStudy.metric}
                </span>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── 7. Why Choose Us — Benefits ── */}
      <section className="section-padding bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="mb-10 text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-secondary">
              Why MeetHub
            </span>
            <h2 className="mt-3 font-heading text-2xl font-bold text-foreground md:text-3xl">
              Why Choose Us for {service.shortTitle}
            </h2>
          </div>
          <div className="mx-auto grid max-w-4xl gap-4 md:grid-cols-2">
            {service.benefits.map((benefit, i) => (
              <div key={i} className="flex items-start gap-3 rounded-xl bg-card p-4">
                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-brand-teal" />
                <p className="text-foreground">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. Ideal For ── */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-secondary">
              Ideal For
            </span>
            <div className="mt-4 flex flex-wrap justify-center gap-2">
              {service.idealFor.map((audience) => (
                <span
                  key={audience}
                  className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-4 py-2 text-sm text-foreground"
                >
                  <Users className="h-3.5 w-3.5 text-primary" />
                  {audience}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 9. Service-specific FAQ ── */}
      {service.faqs.length > 0 && (
        <FaqAccordion
          items={service.faqs}
          showHeader={true}
          showViewAll={false}
          className="bg-muted/30"
        />
      )}

      {/* ── 10. Related Services ── */}
      {relatedServices.length > 0 && (
        <section className="section-padding">
          <div className="container mx-auto px-4">
            <div className="mb-10 text-center">
              <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
                Related Services
              </h2>
            </div>
            <div className="mx-auto grid max-w-4xl gap-4 md:grid-cols-3">
              {relatedServices.map((related) => {
                if (!related) return null;
                const RelIcon = iconMap[related.icon] || Calculator;
                return (
                  <Link
                    key={related.slug}
                    href={`/services/${related.slug}`}
                    className="group rounded-xl border border-border bg-card p-5 transition-all hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <RelIcon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="mt-3 font-heading font-semibold text-foreground group-hover:text-primary">
                      {related.shortTitle}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {related.tagline}
                    </p>
                    <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-primary">
                      Learn More
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ── 11. Bottom CTA ── */}
      <section className="relative overflow-hidden bg-gradient-to-r from-brand-navy to-brand-navy-light py-16 md:py-20">
        <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-brand-teal/10 blur-3xl" />
        <div className="container relative mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl font-bold text-white md:text-4xl">
            Ready to {service.ctaText}?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/70">
            Get started with a free consultation. We&apos;ll assess your needs
            and recommend the right approach.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/contact"
              className={buttonVariants({
                size: "lg",
                className:
                  "bg-brand-teal text-white hover:bg-brand-teal-dark px-8 py-3 text-base font-semibold",
              })}
            >
              Book a Free Consultation
            </Link>
            <a
              href={getWhatsAppUrl(service.whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonVariants({
                variant: "outline",
                size: "lg",
                className: "border-white/30 text-white hover:bg-white/10 px-8 py-3",
              })}
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Ask on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

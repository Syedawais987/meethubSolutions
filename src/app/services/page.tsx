"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
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
  MessageCircle,
} from "lucide-react";
import { PageHeader } from "@/components/shared/page-header";
import { CtaBanner } from "@/components/sections/cta-banner";
import { services, type Service } from "@/data/services";
import { buttonVariants } from "@/components/ui/button";
import { getWhatsAppUrl, whatsappMessages } from "@/lib/whatsapp";

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

const categories = [
  { key: "all", label: "All Services" },
  { key: "financial", label: "Financial" },
  { key: "advisory", label: "Advisory" },
  { key: "assurance", label: "Assurance" },
  { key: "specialized", label: "Specialized" },
] as const;

function ServiceCard({ service }: { service: Service }) {
  const Icon = iconMap[service.icon] || Calculator;
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="group cursor-pointer rounded-xl border border-border bg-card p-6 transition-shadow hover:shadow-lg"
      whileHover={{ y: -4 }}
      onClick={() => setExpanded(!expanded)}
    >
      <div className="flex items-start gap-4">
        <motion.div
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300, damping: 24 }}
        >
          <Icon className="h-6 w-6 text-primary" />
        </motion.div>
        <div className="min-w-0">
          <h3 className="font-heading text-lg font-semibold text-foreground">
            {service.shortTitle}
          </h3>
          <AnimatePresence>
            {expanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 24 }}
              >
                <p className="mt-2 text-sm font-medium text-foreground">
                  {service.tagline}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {service.description}
                </p>
                <Link
                  href={`/services/${service.slug}`}
                  className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
                  onClick={(e) => e.stopPropagation()}
                >
                  View Full Details
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filtered =
    activeCategory === "all"
      ? services
      : services.filter((s) => s.category === activeCategory);

  return (
    <>
      <PageHeader
        title="Our Services"
        description="Comprehensive business solutions — from financial management to corporate travel."
        breadcrumbs={[{ label: "Services" }]}
      />

      <section className="section-padding">
        <div className="container mx-auto px-4">
          {/* Filter tabs */}
          <div className="mb-10 flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`relative rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                  activeCategory === cat.key
                    ? "text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {activeCategory === cat.key && (
                  <motion.span
                    layoutId="activeCategory"
                    className="absolute inset-0 rounded-full bg-primary"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{cat.label}</span>
              </button>
            ))}
          </div>

          {/* Service grid */}
          <motion.div
            layout
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((service) => (
                <ServiceCard key={service.slug} service={service} />
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Bottom CTA */}
          <div className="mt-16 rounded-2xl border border-border bg-muted/30 p-8 text-center">
            <h3 className="font-heading text-2xl font-bold text-foreground">
              Not sure which service you need?
            </h3>
            <p className="mt-2 text-muted-foreground">
              Tell us about your business challenges and we&apos;ll recommend the
              right solution.
            </p>
            <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <a
                href={getWhatsAppUrl(whatsappMessages.general)}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonVariants({
                  variant: "outline",
                  size: "lg",
                })}
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Talk to Us on WhatsApp
              </a>
              <Link
                href="/contact"
                className={buttonVariants({ size: "lg" })}
              >
                Book a Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}

"use client";

import { motion } from "framer-motion";
import { ClipboardList, Settings, Play, ShieldCheck, BarChart3, RefreshCw } from "lucide-react";
import { SectionHeader } from "@/components/shared/section-header";

const steps = [
  {
    step: 1,
    title: "Consultation",
    description:
      "Assessing your business needs, compliance requirements, and financial landscape.",
    icon: ClipboardList,
  },
  {
    step: 2,
    title: "Setup",
    description:
      "Designing chart of accounts, systems, reporting frameworks, and governance structures.",
    icon: Settings,
  },
  {
    step: 3,
    title: "Execution",
    description:
      "Recording transactions, reconciliations, payroll processing, and tax filings.",
    icon: Play,
  },
  {
    step: 4,
    title: "Compliance",
    description:
      "Managing tax filings, statutory returns, SECP requirements, and audit support.",
    icon: ShieldCheck,
  },
  {
    step: 5,
    title: "Reporting",
    description:
      "Delivering management accounts, financial insights, and variance analysis.",
    icon: BarChart3,
  },
  {
    step: 6,
    title: "Continuous Advisory",
    description:
      "Offering ongoing improvements, updates, and strategic financial guidance.",
    icon: RefreshCw,
  },
];

export function WorkingProcess() {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container mx-auto px-4">
        <SectionHeader
          subtitle="Our Process"
          title="How We Work"
          description="A proven six-step approach that ensures quality, compliance, and continuous improvement."
        />

        {/* Desktop: horizontal timeline */}
        <div className="hidden md:block">
          <div className="relative">
            {/* Connector line */}
            <div className="absolute left-0 right-0 top-12 h-0.5 bg-border" />

            <div className="grid grid-cols-3 gap-6 lg:grid-cols-6">
              {steps.map((step, i) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className="relative text-center"
                >
                  {/* Step circle */}
                  <div className="relative z-10 mx-auto flex h-24 w-24 items-center justify-center rounded-full border-2 border-primary bg-background transition-colors group-hover:bg-primary">
                    <step.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="mt-1 text-xs font-bold text-primary">
                    STEP {step.step}
                  </div>
                  <h3 className="mt-3 font-heading text-lg font-semibold">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile: vertical timeline */}
        <div className="space-y-8 md:hidden">
          {steps.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex gap-4"
            >
              <div className="flex shrink-0 flex-col items-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-primary bg-background">
                  <step.icon className="h-6 w-6 text-primary" />
                </div>
                {i < steps.length - 1 && (
                  <div className="mt-2 h-full w-0.5 bg-border" />
                )}
              </div>
              <div className="pb-8">
                <div className="text-xs font-bold text-primary">
                  STEP {step.step}
                </div>
                <h3 className="mt-1 font-heading text-lg font-semibold">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

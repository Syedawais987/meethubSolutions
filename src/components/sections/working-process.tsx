"use client";

import { motion } from "framer-motion";
import { UserPlus, Search, Rocket, HeartHandshake } from "lucide-react";
import { SectionHeader } from "@/components/shared/section-header";

const steps = [
  {
    step: 1,
    title: "Client Onboarding",
    description:
      "We start by understanding your business, goals, and regulatory landscape through a detailed discovery session.",
    icon: UserPlus,
  },
  {
    step: 2,
    title: "Research & Analysis",
    description:
      "Our team analyzes your financial, tax, and compliance requirements to build a tailored service plan.",
    icon: Search,
  },
  {
    step: 3,
    title: "Service Execution",
    description:
      "We deliver — from company registration to tax filing to audit support — with regular progress updates.",
    icon: Rocket,
  },
  {
    step: 4,
    title: "Ongoing Support",
    description:
      "Continuous advisory, proactive compliance monitoring, and a dedicated point of contact for your business.",
    icon: HeartHandshake,
  },
];

export function WorkingProcess() {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container mx-auto px-4">
        <SectionHeader
          subtitle="Our Process"
          title="How We Work"
          description="A proven four-step approach that ensures quality, transparency, and results."
        />

        {/* Desktop: horizontal timeline */}
        <div className="hidden md:block">
          <div className="relative">
            {/* Connector line */}
            <div className="absolute left-0 right-0 top-12 h-0.5 bg-border" />

            <div className="grid grid-cols-4 gap-6">
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

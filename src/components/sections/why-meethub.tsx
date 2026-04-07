"use client";

import { motion } from "framer-motion";
import { Layers, UserCog, Cpu, BadgePercent } from "lucide-react";
import { SectionHeader } from "@/components/shared/section-header";

const benefits = [
  {
    title: "One Partner, Every Service",
    description:
      "Stop juggling multiple vendors. Get accounting, tax, audit, HR, and more from a single trusted team.",
    icon: Layers,
    size: "large" as const,
  },
  {
    title: "Visiting CFO Model",
    description:
      "Strategic financial leadership without the full-time salary. Perfect for growing SMEs who need expert guidance.",
    icon: UserCog,
    size: "large" as const,
  },
  {
    title: "Technology-Driven",
    description:
      "From ERP implementation to WhatsApp automation, we bring modern tools to traditional services.",
    icon: Cpu,
    size: "small" as const,
  },
  {
    title: "SECP at Half the Cost",
    description:
      "Online company registration at half the standard fee through direct filing.",
    icon: BadgePercent,
    size: "small" as const,
  },
];

export function WhyMeetHub() {
  return (
    <section className="section-padding">
      <div className="container mx-auto px-4">
        <SectionHeader
          subtitle="Why Choose Us"
          title="The MeetHub Advantage"
          description="We're not just accountants — we're your integrated business growth partner."
        />

        {/* Bento grid layout */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, i) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`group rounded-2xl border border-border bg-card p-6 transition-all hover:shadow-lg ${
                benefit.size === "large" ? "lg:col-span-2" : ""
              }`}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                <benefit.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mt-4 font-heading text-xl font-semibold text-foreground">
                {benefit.title}
              </h3>
              <p className="mt-2 text-muted-foreground">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

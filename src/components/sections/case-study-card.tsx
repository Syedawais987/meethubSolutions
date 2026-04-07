"use client";

import { motion } from "framer-motion";
import { ArrowRight, TrendingUp } from "lucide-react";
import { SectionHeader } from "@/components/shared/section-header";

const caseStudies = [
  {
    industry: "Manufacturing",
    challenge:
      "A mid-size manufacturer was paying excessive taxes due to misclassified expenses and missed deductions.",
    outcome:
      "Our tax team restructured their filings and recovered PKR 4.2M in overpaid taxes within 6 months.",
    metric: "40% Tax Savings",
  },
  {
    industry: "IT Startup",
    challenge:
      "A growing SaaS company needed SECP registration and a full finance department setup, but lacked in-house expertise.",
    outcome:
      "We registered the company in 5 days and deployed an outsourced finance team within 2 weeks.",
    metric: "SECP in 5 Days",
  },
];

export function CaseStudySpotlight() {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container mx-auto px-4">
        <SectionHeader
          subtitle="Real Results"
          title="Case Study Spotlight"
          description="How we've helped businesses like yours achieve measurable outcomes."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {caseStudies.map((study, i) => (
            <motion.div
              key={study.industry}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-lg"
            >
              <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                {study.industry}
              </span>

              <div className="mt-4">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                  Challenge
                </h4>
                <p className="mt-1 text-foreground">{study.challenge}</p>
              </div>

              <div className="mt-4">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                  Outcome
                </h4>
                <p className="mt-1 text-foreground">{study.outcome}</p>
              </div>

              <div className="mt-6 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-brand-teal" />
                  <span className="text-xl font-bold text-brand-teal">
                    {study.metric}
                  </span>
                </div>
                <button className="inline-flex items-center gap-1 text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                  Read Full Story
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

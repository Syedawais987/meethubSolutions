"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionHeader } from "@/components/shared/section-header";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  items?: FaqItem[];
  showHeader?: boolean;
  showViewAll?: boolean;
  className?: string;
}

const defaultFaqs: FaqItem[] = [
  {
    question: "What services does Meet Hub Financial Services offer?",
    answer:
      "We offer comprehensive business services including accounting & bookkeeping, tax consultancy, corporate advisory (SECP registration), ERP solutions, department outsourcing, internal audit, audit & assurance, data archiving, training & development, fixed asset management, and travel & tour packages.",
  },
  {
    question: "How does the Visiting CFO service work?",
    answer:
      "Our Visiting CFO service provides your business with strategic financial leadership on a part-time or project basis. An experienced CFO-level professional works with your team on financial planning, budgeting, investor relations, and board presentations — without the cost of a full-time hire.",
  },
  {
    question: "Can you help register a company with SECP?",
    answer:
      "Yes! We handle the complete SECP registration process — from company name reservation to incorporation. We support Private Limited, Single Member, Public Limited, and LLP structures. The process typically takes 5-10 business days.",
  },
  {
    question: "Do you handle both individual and business tax filing?",
    answer:
      "Absolutely. We serve individuals, sole proprietors, partnerships, and corporations. Our tax services cover income tax returns, sales tax registration and returns, withholding tax compliance, and FBR audit support.",
  },
];

export function FaqAccordion({
  items = defaultFaqs,
  showHeader = true,
  showViewAll = true,
  className = "",
}: FaqAccordionProps) {
  return (
    <section className={`section-padding ${className}`}>
      <div className="container mx-auto px-4">
        {showHeader && (
          <SectionHeader
            subtitle="FAQs"
            title="Frequently Asked Questions"
            description="Quick answers to common questions about our services."
          />
        )}

        <div className="mx-auto max-w-3xl">
          <Accordion className="w-full">
            {items.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`}>
                <AccordionTrigger className="text-left font-heading text-base font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {showViewAll && (
          <div className="mt-8 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/80"
            >
              View All FAQs
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

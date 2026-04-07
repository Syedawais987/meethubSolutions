"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { SectionHeader } from "@/components/shared/section-header";

// Placeholder testimonials — replace with real data
const testimonialData = [
  {
    name: "Ahmed Khan",
    role: "CEO",
    company: "Tech Innovations Pvt Ltd",
    content:
      "MeetHub transformed our accounting processes. Their team is responsive, knowledgeable, and treats our business like their own.",
    rating: 5,
  },
  {
    name: "Sara Malik",
    role: "Director Finance",
    company: "Crescent Industries",
    content:
      "The Visiting CFO service was exactly what we needed. Strategic financial guidance without the full-time overhead.",
    rating: 5,
  },
  {
    name: "Hassan Ali",
    role: "Founder",
    company: "GreenLeaf Exports",
    content:
      "From SECP registration to ongoing tax compliance, MeetHub has been our one-stop partner. Highly recommend their corporate advisory.",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="section-padding">
      <div className="container mx-auto px-4">
        <SectionHeader
          subtitle="What Our Clients Say"
          title="Trusted by Businesses Across Pakistan"
          description="Real feedback from companies we've helped grow, comply, and succeed."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonialData.map((testimonial, i) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl border border-border bg-card p-6"
            >
              <Quote className="h-8 w-8 text-primary/20" />
              <p className="mt-4 text-muted-foreground">
                &ldquo;{testimonial.content}&rdquo;
              </p>
              <div className="mt-4 flex items-center gap-1">
                {Array.from({ length: testimonial.rating }).map((_, j) => (
                  <Star
                    key={j}
                    className="h-4 w-4 fill-brand-gold text-brand-gold"
                  />
                ))}
              </div>
              <div className="mt-4 border-t border-border pt-4">
                <p className="font-semibold text-foreground">
                  {testimonial.name}
                </p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.role}, {testimonial.company}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

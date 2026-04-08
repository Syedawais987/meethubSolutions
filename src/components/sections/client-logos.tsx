"use client";

import { motion } from "framer-motion";

// Placeholder logos — replace with real client logos
const clientLogos = [
  "Client A",
  "Client B",
  "Client C",
  "Client D",
  "Client E",
  "Client F",
  "Client G",
  "Client H",
];

export function ClientLogos() {
  return (
    <section className="border-y border-border bg-muted/30 py-10">
      <div className="container mx-auto px-4">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-8 text-center text-sm font-medium uppercase tracking-wider text-muted-foreground"
        >
          Trusted by 50+ businesses across Pakistan
        </motion.p>

        {/* Infinite scroll container */}
        <div className="relative overflow-hidden">
          <div className="flex animate-[scroll_30s_linear_infinite] gap-12">
            {[...clientLogos, ...clientLogos].map((logo, i) => (
              <div
                key={i}
                className="flex h-10 w-28 shrink-0 items-center justify-center rounded-md bg-muted px-4 grayscale transition-all hover:grayscale-0"
              >
                <span className="text-xs font-semibold text-muted-foreground">
                  {logo}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

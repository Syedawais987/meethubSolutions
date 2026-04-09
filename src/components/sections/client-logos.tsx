"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const clientLogos = [
  { name: "Geoscientific Research Institute", src: "/images/client-companies-logo/Geoscientific.png" },
  { name: "ConnecTech Pvt Ltd", src: "/images/client-companies-logo/connecttech.png" },
  { name: "Jabal Omer Development Co.", src: "/images/client-companies-logo/jabalomar.png" },
  { name: "Sahat Property Management", src: "/images/client-companies-logo/sahat.png" },
  { name: "ALJ Real Estate Co. Ltd", src: "/images/client-companies-logo/alj.jpg" },
];

// Text-only clients (no logo yet)
const textClients = [
  "Frontier Logistics Pvt Ltd",
  "Karakoram Industries",
  "Pak Gulf Construction",
  "Margalla Tech Solutions",
  "Islamabad Capital Group",
];

export function ClientLogos() {
  const allLogos = [...clientLogos, ...clientLogos];

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

        {/* Infinite scroll with real logos */}
        <div className="relative overflow-hidden">
          <div className="flex animate-[scroll_35s_linear_infinite] items-center gap-12">
            {allLogos.map((logo, i) => (
              <div
                key={i}
                className="flex h-14 w-32 shrink-0 items-center justify-center rounded-lg border border-border/50 px-3"
                title={logo.name}
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={120}
                  height={50}
                  className="h-auto max-h-10 w-auto object-contain"
                />
              </div>
            ))}
            {textClients.map((name, i) => (
              <div
                key={`text-${i}`}
                className="flex h-14 shrink-0 items-center justify-center rounded-lg border border-border bg-card px-5"
              >
                <span className="whitespace-nowrap text-xs font-semibold text-muted-foreground">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

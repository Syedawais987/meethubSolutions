"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MessageCircle, Phone } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { getWhatsAppUrl, whatsappMessages } from "@/lib/whatsapp";

interface CtaBannerProps {
  title?: string;
  description?: string;
  className?: string;
}

export function CtaBanner({
  title = "Ready to Simplify Your Business Operations?",
  description = "Let's talk about how Meet Hub Financial Services can help you focus on what matters most.",
  className = "",
}: CtaBannerProps) {
  return (
    <section
      className={`relative overflow-hidden bg-gradient-to-r from-brand-navy to-brand-navy-light py-16 md:py-20 ${className}`}
    >
      {/* Decorative elements */}
      <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-brand-teal/10 blur-3xl" />
      <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-brand-gold/10 blur-3xl" />

      <div className="container relative mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-3xl font-bold text-white md:text-4xl"
        >
          {title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mx-auto mt-4 max-w-xl text-lg text-white/70"
        >
          {description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
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
            href="tel:+923345444107"
            className="inline-flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-white"
          >
            <Phone className="h-4 w-4" />
            Or call us: +92 334 5444107
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-4"
        >
          <a
            href={getWhatsAppUrl(whatsappMessages.general)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-white/40 transition-colors hover:text-white/70"
          >
            <MessageCircle className="h-4 w-4" />
            Chat on WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}

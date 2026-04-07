"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MessageCircle, ChevronDown } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { getWhatsAppUrl, whatsappMessages } from "@/lib/whatsapp";

export function Hero() {
  return (
    <section className="relative flex min-h-[calc(100dvh-5rem)] items-center overflow-hidden">
      {/* Animated gradient mesh background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-navy via-brand-navy-light to-brand-navy" />
        <div className="animate-pulse absolute -left-1/4 top-0 h-[600px] w-[600px] rounded-full bg-brand-teal/10 blur-3xl" />
        <div className="animate-pulse absolute -right-1/4 bottom-0 h-[500px] w-[500px] rounded-full bg-brand-gold/10 blur-3xl [animation-delay:2s]" />
        <div className="animate-pulse absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-teal/5 blur-3xl [animation-delay:4s]" />
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="mx-auto max-w-4xl text-center">
          {/* Headline with staggered animation */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="font-heading text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl"
          >
            Your Complete Business Partner —{" "}
            <span className="bg-gradient-to-r from-brand-teal to-brand-sky bg-clip-text text-transparent">
              From Books to Boardrooms
            </span>{" "}
            to Beyond
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-lg text-white/70 md:text-xl"
          >
            Accounting, tax consultancy, corporate advisory, ERP solutions,
            training, and travel — all under one roof. Trusted by businesses
            across Pakistan.
          </motion.p>

          {/* Triple CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
          >
            <Link
              href="/contact"
              className={buttonVariants({
                size: "lg",
                className:
                  "bg-brand-teal text-white hover:bg-brand-teal-dark px-8 py-3 text-base font-semibold",
              })}
            >
              Get a Free Consultation
            </Link>
            <a
              href={getWhatsAppUrl(whatsappMessages.general)}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonVariants({
                variant: "outline",
                size: "lg",
                className:
                  "border-white/30 text-white hover:bg-white/10 px-8 py-3 text-base",
              })}
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Talk to Us on WhatsApp
            </a>
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{
          opacity: { delay: 1, duration: 0.5 },
          y: { delay: 1, duration: 1.5, repeat: Infinity },
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ChevronDown className="h-6 w-6 text-white/40" />
      </motion.div>
    </section>
  );
}

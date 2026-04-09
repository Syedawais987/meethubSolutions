"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, ChevronDown } from "lucide-react";
import { getWhatsAppUrl, whatsappMessages } from "@/lib/whatsapp";

const slides = [
  {
    image: "/images/home-hero.jpg",
    headline: "Your Complete Business Partner",
    highlight: "From Books to Boardrooms",
    description:
      "Accounting, tax consultancy, corporate advisory, ERP solutions, training, and travel — all under one roof.",
    primaryCta: { label: "Get a Free Consultation", href: "/contact" },
  },
  {
    image: "/images/office-team.jpg",
    headline: "IFRS-Compliant Accounting",
    highlight: "& Tax Solutions",
    description:
      "SECP-ready books, FBR compliance, payroll management, and Virtual CFO services for growing businesses across Pakistan.",
    primaryCta: { label: "Explore Services", href: "/services" },
  },
  {
    image: "/images/travel/Hero-cover.jpg",
    headline: "Corporate Retreats",
    highlight: "& Adventure Tours",
    description:
      "Day-out packages, Skardu adventures, and custom corporate retreats — professionally coordinated and hassle-free.",
    primaryCta: { label: "View Travel Packages", href: "/travel" },
  },
];

const INTERVAL = 5000;

export function Hero() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(next, INTERVAL);
    return () => clearInterval(timer);
  }, [paused, next]);

  const slide = slides[current];

  return (
    <section
      className="relative flex min-h-[calc(100dvh-5rem)] items-center overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Background images with crossfade */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <Image
            src={slide.image}
            alt={slide.headline}
            fill
            className="object-cover"
            priority={current === 0}
          />
          <div className="absolute inset-0 bg-brand-navy/75" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="font-heading text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
                {slide.headline}{" "}
                <span className="bg-gradient-to-r from-brand-teal to-brand-sky bg-clip-text text-transparent">
                  {slide.highlight}
                </span>
              </h1>

              <p className="mx-auto mt-6 max-w-2xl text-lg text-white/70 md:text-xl">
                {slide.description}
              </p>

              <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Link
                  href={slide.primaryCta.href}
                  className="inline-flex h-10 items-center justify-center rounded-lg bg-brand-teal px-8 py-3 text-base font-semibold text-white transition-colors hover:bg-brand-teal-dark"
                >
                  {slide.primaryCta.label}
                </Link>
                <a
                  href={getWhatsAppUrl(whatsappMessages.general)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 items-center justify-center gap-2 rounded-lg border border-white/30 bg-white/10 px-8 py-3 text-base font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/20"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Talk to Us on WhatsApp
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-16 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === current ? "w-8 bg-brand-teal" : "w-2 bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{
          opacity: { delay: 1, duration: 0.5 },
          y: { delay: 1, duration: 1.5, repeat: Infinity },
        }}
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2"
      >
        <ChevronDown className="h-6 w-6 text-white/40" />
      </motion.div>
    </section>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Clock,
  Users,
  ArrowRight,
  MessageCircle,
  MapPin,
  Shield,
  Compass,
  HeartHandshake,
} from "lucide-react";
import { PageHeader } from "@/components/shared/page-header";
import { buttonVariants } from "@/components/ui/button";
import { travelPackages, type TravelPackage } from "@/data/travel-packages";
import { getWhatsAppUrl, whatsappMessages } from "@/lib/whatsapp";

const categories = [
  { key: "all", label: "All Packages" },
  { key: "day-trip", label: "Day Trips" },
  { key: "adventure", label: "Adventure" },
  { key: "corporate-retreat", label: "Corporate Retreats" },
] as const;

const whyTravel = [
  {
    title: "Safety First",
    description:
      "All trips include experienced local guides, vetted accommodations, and 24/7 trip coordination.",
    icon: Shield,
  },
  {
    title: "Local Expertise",
    description:
      "We know Pakistan's northern areas inside out — from hidden viewpoints to the best local food stops.",
    icon: Compass,
  },
  {
    title: "Corporate Friendly",
    description:
      "Invoiced billing, group coordination, team-building activities, and event photography included.",
    icon: HeartHandshake,
  },
  {
    title: "Custom Itineraries",
    description:
      "Every package can be tailored to your group size, budget, dates, and specific interests.",
    icon: MapPin,
  },
];

function TravelCard({ pkg }: { pkg: TravelPackage }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
    >
      <Link
        href={`/travel/${pkg.slug}`}
        className="group block overflow-hidden rounded-2xl border border-border bg-card transition-shadow hover:shadow-lg"
      >
        <div className="relative aspect-[4/3] overflow-hidden bg-muted">
          <Image
            src={pkg.coverImage}
            alt={pkg.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <span className="absolute left-3 top-3 rounded-full bg-brand-sky/90 px-3 py-1 text-xs font-semibold text-white">
            {pkg.category === "day-trip"
              ? "Day Trip"
              : pkg.category === "adventure"
                ? "Adventure"
                : "Corporate Retreat"}
          </span>
          <span className="absolute right-3 top-3 rounded-full bg-black/50 px-3 py-1 text-xs text-white backdrop-blur-sm">
            {pkg.duration}
          </span>
          {pkg.difficulty && (
            <span className="absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-foreground dark:bg-black/60 dark:text-white">
              {pkg.difficulty.charAt(0).toUpperCase() + pkg.difficulty.slice(1)}
            </span>
          )}
        </div>

        <div className="p-5">
          <h3 className="font-heading text-lg font-semibold text-foreground group-hover:text-brand-sky">
            {pkg.title}
          </h3>
          <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
            {pkg.subtitle}
          </p>
          <div className="mt-3 flex items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" />
              {pkg.duration}
            </span>
            <span className="flex items-center gap-1">
              <Users className="h-3.5 w-3.5" />
              {pkg.groupSize}
            </span>
          </div>
          <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
            <div>
              <span className="text-sm text-muted-foreground">From </span>
              <span className="text-xl font-bold text-foreground">
                PKR {pkg.startingPrice.toLocaleString()}
              </span>
              <span className="text-sm text-muted-foreground">/person</span>
            </div>
            <span className="flex items-center gap-1 text-sm font-medium text-brand-sky">
              View Details
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default function TravelPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filtered =
    activeCategory === "all"
      ? travelPackages
      : travelPackages.filter((p) => p.category === activeCategory);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden py-20 md:py-28">
        {/* Background image */}
        <Image
          src="/images/travel/Hero-cover.jpg"
          alt="Northern Pakistan mountains"
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-brand-navy/70" />
        <div className="container relative mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading text-4xl font-bold text-white md:text-5xl lg:text-6xl"
          >
            Explore Pakistan with{" "}
            <span className="text-brand-sky">MeetHub</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mx-auto mt-4 max-w-2xl text-lg text-white/70"
          >
            Day trips, northern adventures, and custom corporate retreats —
            professionally coordinated and hassle-free.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-8"
          >
            <a
              href="#packages"
              className={buttonVariants({
                size: "lg",
                className:
                  "bg-brand-sky text-white hover:bg-brand-sky/80 px-8 py-3 text-base font-semibold",
              })}
            >
              View Packages
            </a>
          </motion.div>
        </div>
      </section>

      {/* Filter + Package Grid */}
      <section id="packages" className="section-padding">
        <div className="container mx-auto px-4">
          {/* Filter tabs */}
          <div className="mb-10 flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`relative rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                  activeCategory === cat.key
                    ? "text-white"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {activeCategory === cat.key && (
                  <motion.span
                    layoutId="activeTravelCategory"
                    className="absolute inset-0 rounded-full bg-brand-sky"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{cat.label}</span>
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div
            layout
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((pkg) => (
                <TravelCard key={pkg.slug} pkg={pkg} />
              ))}
            </AnimatePresence>
          </motion.div>

          {filtered.length === 0 && (
            <div className="py-16 text-center">
              <p className="text-muted-foreground">
                No packages in this category yet. Contact us for custom options.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Custom Trips CTA */}
      <section className="border-y border-border bg-muted/30 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
            Need a Custom Corporate Retreat?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            We&apos;ll design a tailor-made package for your team — choose the
            destination, activities, dates, and budget.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/contact"
              className={buttonVariants({ size: "lg" })}
            >
              Contact Us
            </Link>
            <a
              href={getWhatsAppUrl(whatsappMessages.travel)}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonVariants({ variant: "outline", size: "lg" })}
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* Why Travel With Us */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-brand-sky">
              Why MeetHub Travel
            </span>
            <h2 className="mt-3 font-heading text-3xl font-bold text-foreground md:text-4xl">
              Travel with Confidence
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyTravel.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-border bg-card p-6 text-center transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-brand-sky/10">
                  <item.icon className="h-6 w-6 text-brand-sky" />
                </div>
                <h3 className="mt-4 font-heading text-lg font-semibold">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

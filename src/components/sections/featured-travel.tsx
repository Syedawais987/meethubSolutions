"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Clock, Users, ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/shared/section-header";
import { travelPackages } from "@/data/travel-packages";

export function FeaturedTravel() {
  const featured = travelPackages.filter((p) => p.featured);

  return (
    <section className="section-padding bg-muted/30">
      <div className="container mx-auto px-4">
        <SectionHeader
          subtitle="Explore Pakistan"
          title="Travel & Adventure Packages"
          description="Team-building day outs, northern adventures, and custom corporate retreats."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((pkg, i) => (
            <motion.div
              key={pkg.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
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
                  {/* Category badge */}
                  <span className="absolute left-3 top-3 rounded-full bg-brand-sky/90 px-3 py-1 text-xs font-semibold text-white">
                    {pkg.category === "day-trip"
                      ? "Day Trip"
                      : pkg.category === "adventure"
                        ? "Adventure"
                        : "Corporate"}
                  </span>
                  {/* Duration badge */}
                  <span className="absolute right-3 top-3 rounded-full bg-black/50 px-3 py-1 text-xs text-white backdrop-blur-sm">
                    {pkg.duration}
                  </span>
                </div>

                <div className="p-5">
                  <h3 className="font-heading text-lg font-semibold text-foreground group-hover:text-primary">
                    {pkg.title}
                  </h3>
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
                  <div className="mt-4 flex items-center justify-between">
                    <div>
                      <span className="text-xl font-bold text-foreground">
                        PKR {pkg.startingPrice.toLocaleString()}
                      </span>
                      {pkg.priceNote && (
                        <span className="ml-1 text-xs text-muted-foreground">
                          /{pkg.priceNote.split(",")[0]}
                        </span>
                      )}
                    </div>
                    <span className="flex items-center gap-1 text-sm font-medium text-primary">
                      Details
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/travel"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/80"
          >
            View All Packages
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

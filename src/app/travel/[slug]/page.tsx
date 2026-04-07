import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Clock,
  Users,
  Mountain,
  Calendar,
  MapPin,
  CheckCircle,
  XCircle,
  AlertTriangle,
  ArrowRight,
  MessageCircle,
  Share2,
  ChevronDown,
} from "lucide-react";
import {
  travelPackages,
  getTravelPackageBySlug,
} from "@/data/travel-packages";
import { PageHeader } from "@/components/shared/page-header";
import { BookingForm } from "@/components/shared/booking-form";
import { buttonVariants } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { getWhatsAppUrl, whatsappMessages } from "@/lib/whatsapp";

export async function generateStaticParams() {
  return travelPackages.map((pkg) => ({ slug: pkg.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const pkg = getTravelPackageBySlug(slug);
  if (!pkg) return {};
  return {
    title: pkg.seo.title,
    description: pkg.seo.description,
    keywords: pkg.seo.keywords,
  };
}

export default async function TravelDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const pkg = getTravelPackageBySlug(slug);

  if (!pkg) notFound();

  const relatedPackages = travelPackages
    .filter((p) => p.slug !== pkg.slug)
    .slice(0, 3);

  const mealEmoji: Record<string, string> = {
    breakfast: "Breakfast",
    lunch: "Lunch",
    dinner: "Dinner",
  };

  return (
    <>
      {/* Breadcrumb + Header */}
      <PageHeader
        title={pkg.title}
        description={pkg.subtitle}
        breadcrumbs={[
          { label: "Travel & Tours", href: "/travel" },
          { label: pkg.title },
        ]}
      />

      {/* Image Gallery */}
      <section className="border-b border-border">
        <div className="container mx-auto px-4 py-6">
          <div className="grid gap-2 md:grid-cols-4 md:grid-rows-2">
            <div className="relative col-span-2 row-span-2 aspect-[4/3] overflow-hidden rounded-xl bg-muted md:aspect-auto">
              <Image
                src={pkg.coverImage}
                alt={pkg.title}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            {pkg.gallery.slice(0, 4).map((img, i) => (
              <div
                key={i}
                className="relative hidden aspect-[4/3] overflow-hidden rounded-xl bg-muted md:block"
              >
                <Image
                  src={img}
                  alt={`${pkg.title} gallery ${i + 1}`}
                  fill
                  className="object-cover"
                  sizes="25vw"
                />
                {i === 3 && pkg.gallery.length > 4 && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                    <span className="text-lg font-semibold text-white">
                      +{pkg.gallery.length - 4} more
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content + Sidebar */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 lg:grid-cols-3">
            {/* ── Left: Package Content (2 cols) ── */}
            <div className="lg:col-span-2 space-y-12">
              {/* Overview */}
              <div>
                <h2 className="font-heading text-2xl font-bold text-foreground">
                  Overview
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                  {pkg.overview}
                </p>

                {/* Highlights */}
                <div className="mt-6 grid gap-2 sm:grid-cols-2">
                  {pkg.highlights.map((highlight) => (
                    <div
                      key={highlight}
                      className="flex items-start gap-2 rounded-lg bg-brand-sky/5 p-3"
                    >
                      <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-brand-sky" />
                      <span className="text-sm text-foreground">
                        {highlight}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Day-by-Day Itinerary */}
              <div>
                <h2 className="mb-6 font-heading text-2xl font-bold text-foreground">
                  Day-by-Day Itinerary
                </h2>
                <Accordion className="w-full">
                  {pkg.itinerary.map((day) => (
                    <AccordionItem key={day.day} value={`day-${day.day}`}>
                      <AccordionTrigger className="text-left">
                        <div className="flex items-center gap-3">
                          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-sky/10 text-sm font-bold text-brand-sky">
                            {day.day}
                          </span>
                          <span className="font-heading font-semibold">
                            Day {day.day}: {day.title}
                          </span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="ml-11 space-y-3">
                          <p className="text-muted-foreground">
                            {day.description}
                          </p>

                          {day.highlights.length > 0 && (
                            <div>
                              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                                Highlights
                              </span>
                              <ul className="mt-1 space-y-1">
                                {day.highlights.map((h) => (
                                  <li
                                    key={h}
                                    className="flex items-center gap-2 text-sm text-foreground"
                                  >
                                    <CheckCircle className="h-3 w-3 text-brand-sky" />
                                    {h}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                            {day.meals && day.meals.length > 0 && (
                              <span>
                                Meals: {day.meals.map((m) => mealEmoji[m]).join(", ")}
                              </span>
                            )}
                            {day.accommodation && (
                              <span>Stay: {day.accommodation}</span>
                            )}
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>

              {/* Includes / Excludes */}
              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-xl border border-border bg-card p-6">
                  <h3 className="flex items-center gap-2 font-heading text-lg font-semibold text-foreground">
                    <CheckCircle className="h-5 w-5 text-brand-teal" />
                    What&apos;s Included
                  </h3>
                  <ul className="mt-4 space-y-2">
                    {pkg.includes.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <CheckCircle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand-teal" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-xl border border-border bg-card p-6">
                  <h3 className="flex items-center gap-2 font-heading text-lg font-semibold text-foreground">
                    <XCircle className="h-5 w-5 text-destructive" />
                    What&apos;s Not Included
                  </h3>
                  <ul className="mt-4 space-y-2">
                    {pkg.excludes.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <XCircle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-muted-foreground/50" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Important Notes */}
              {pkg.importantNotes.length > 0 && (
                <div className="rounded-xl border border-brand-gold/30 bg-brand-gold/5 p-6">
                  <h3 className="flex items-center gap-2 font-heading text-lg font-semibold text-foreground">
                    <AlertTriangle className="h-5 w-5 text-brand-gold" />
                    Important Notes
                  </h3>
                  <ul className="mt-4 space-y-2">
                    {pkg.importantNotes.map((note) => (
                      <li
                        key={note}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-gold" />
                        {note}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* ── Right: Sticky Sidebar ── */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Price Card */}
                <div className="rounded-2xl border border-border bg-card p-6">
                  <div className="text-center">
                    <span className="text-sm text-muted-foreground">
                      Starting from
                    </span>
                    <div className="mt-1">
                      <span className="font-heading text-3xl font-bold text-foreground">
                        PKR {pkg.startingPrice.toLocaleString()}
                      </span>
                    </div>
                    {pkg.priceNote && (
                      <p className="mt-1 text-xs text-muted-foreground">
                        {pkg.priceNote}
                      </p>
                    )}
                  </div>

                  {/* Quick stats */}
                  <div className="mt-6 space-y-3 border-t border-border pt-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="flex items-center gap-2 text-muted-foreground">
                        <Clock className="h-4 w-4" /> Duration
                      </span>
                      <span className="font-medium text-foreground">
                        {pkg.duration}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="flex items-center gap-2 text-muted-foreground">
                        <Users className="h-4 w-4" /> Group Size
                      </span>
                      <span className="font-medium text-foreground">
                        {pkg.groupSize}
                      </span>
                    </div>
                    {pkg.difficulty && (
                      <div className="flex items-center justify-between text-sm">
                        <span className="flex items-center gap-2 text-muted-foreground">
                          <Mountain className="h-4 w-4" /> Difficulty
                        </span>
                        <span className="font-medium capitalize text-foreground">
                          {pkg.difficulty}
                        </span>
                      </div>
                    )}
                    {pkg.bestSeason && (
                      <div className="flex items-center justify-between text-sm">
                        <span className="flex items-center gap-2 text-muted-foreground">
                          <Calendar className="h-4 w-4" /> Best Season
                        </span>
                        <span className="font-medium text-foreground">
                          {pkg.bestSeason}
                        </span>
                      </div>
                    )}
                    {pkg.departureCity && (
                      <div className="flex items-center justify-between text-sm">
                        <span className="flex items-center gap-2 text-muted-foreground">
                          <MapPin className="h-4 w-4" /> Departure
                        </span>
                        <span className="font-medium text-foreground">
                          {pkg.departureCity}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* CTAs */}
                  <div className="mt-6 space-y-3">
                    <a
                      href="#booking"
                      className={buttonVariants({
                        className:
                          "w-full bg-brand-sky text-white hover:bg-brand-sky/80",
                        size: "lg",
                      })}
                    >
                      Book This Package
                    </a>
                    <a
                      href={getWhatsAppUrl(
                        whatsappMessages.travelBooking(pkg.title)
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={buttonVariants({
                        variant: "outline",
                        className: "w-full",
                        size: "lg",
                      })}
                    >
                      <MessageCircle className="mr-2 h-5 w-5" />
                      Ask on WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section id="booking" className="section-padding bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl">
            <div className="mb-8 text-center">
              <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
                Book {pkg.title}
              </h2>
              <p className="mt-2 text-muted-foreground">
                Fill in your details and our travel team will get back to you
                within 24 hours with a customized quote.
              </p>
            </div>
            <BookingForm packageName={pkg.title} />
          </div>
        </div>
      </section>

      {/* Related Packages */}
      {relatedPackages.length > 0 && (
        <section className="section-padding">
          <div className="container mx-auto px-4">
            <div className="mb-10 text-center">
              <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
                Other Packages You May Like
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {relatedPackages.map((related) => (
                <Link
                  key={related.slug}
                  href={`/travel/${related.slug}`}
                  className="group overflow-hidden rounded-2xl border border-border bg-card transition-shadow hover:shadow-lg"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                    <Image
                      src={related.coverImage}
                      alt={related.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-heading font-semibold text-foreground group-hover:text-brand-sky">
                      {related.title}
                    </h3>
                    <div className="mt-2 flex items-center gap-3 text-sm text-muted-foreground">
                      <span>{related.duration}</span>
                      <span>
                        From PKR {related.startingPrice.toLocaleString()}
                      </span>
                    </div>
                    <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-brand-sky">
                      View Details
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Bottom CTA */}
      <section className="relative overflow-hidden bg-gradient-to-r from-brand-navy to-brand-sky/30 py-16">
        <div className="container relative mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl font-bold text-white md:text-4xl">
            Ready for Your Next Adventure?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/70">
            Whether it&apos;s a team day out or a northern expedition, we make it
            happen — hassle-free.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/travel"
              className={buttonVariants({
                size: "lg",
                className:
                  "bg-brand-sky text-white hover:bg-brand-sky/80 px-8 py-3 text-base font-semibold",
              })}
            >
              View All Packages
            </Link>
            <Link
              href="/contact"
              className={buttonVariants({
                variant: "outline",
                size: "lg",
                className:
                  "border-white/30 text-white hover:bg-white/10 px-8 py-3",
              })}
            >
              Plan a Custom Trip
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

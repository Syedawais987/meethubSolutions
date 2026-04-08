import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Shield,
  Award,
  Lightbulb,
  Heart,
  ArrowRight,
  Users,
} from "lucide-react";
import { PageHeader } from "@/components/shared/page-header";

import { CtaBanner } from "@/components/sections/cta-banner";
import { StatsBar } from "@/components/sections/stats-bar";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Meet Hub Financial Services — our team, mission, and commitment to delivering comprehensive business services across Pakistan.",
};

const values = [
  {
    title: "Integrity",
    description:
      "We uphold the highest ethical standards in every engagement, ensuring transparency and trust.",
    icon: Shield,
  },
  {
    title: "Excellence",
    description:
      "We deliver exceptional quality through rigorous standards, continuous learning, and attention to detail.",
    icon: Award,
  },
  {
    title: "Innovation",
    description:
      "We embrace technology and modern methodologies to bring efficient, forward-thinking solutions.",
    icon: Lightbulb,
  },
  {
    title: "Client-First",
    description:
      "Every decision we make is guided by what creates the most value for our clients and their growth.",
    icon: Heart,
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About Meet Hub Financial Services"
        description="Pakistan's integrated professional services firm — delivering comprehensive business solutions since day one."
        breadcrumbs={[{ label: "About" }]}
      />

      {/* Company Story */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="text-sm font-semibold uppercase tracking-wider text-secondary">
                Our Story
              </span>
              <h2 className="mt-3 font-heading text-3xl font-bold text-foreground md:text-4xl">
                Built to Simplify Business in Pakistan
              </h2>
              <div className="mt-6 space-y-4 text-muted-foreground">
                <p>
                  Meet Hub Financial Services was founded with a simple belief: businesses
                  in Pakistan deserve access to world-class professional services
                  without the complexity of managing multiple vendors.
                </p>
                <p>
                  We bring together accounting, tax consultancy, corporate
                  advisory, ERP solutions, training, and even travel — all under
                  one roof. Our team of qualified chartered accountants, tax
                  experts, and business advisors works as an extension of your
                  team.
                </p>
                <p>
                  Whether you&apos;re a startup registering with SECP, an SME
                  needing a Visiting CFO, or a corporation outsourcing an entire
                  department — we&apos;re your one call for every business need.
                </p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-2xl">
              <Image
                src="/images/office-team.jpg"
                alt="Meet Hub Financial Services team at work"
                width={600}
                height={400}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-border bg-card p-8">
              <span className="text-sm font-semibold uppercase tracking-wider text-secondary">
                Our Mission
              </span>
              <h3 className="mt-3 font-heading text-2xl font-bold">
                Empower Businesses to Thrive
              </h3>
              <p className="mt-4 text-muted-foreground">
                To provide integrated, technology-driven professional services
                that help Pakistani businesses comply, grow, and compete — all
                from a single trusted partner.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-8">
              <span className="text-sm font-semibold uppercase tracking-wider text-secondary">
                Our Vision
              </span>
              <h3 className="mt-3 font-heading text-2xl font-bold">
                Pakistan&apos;s Most Trusted Services Firm
              </h3>
              <p className="mt-4 text-muted-foreground">
                To become the go-to professional services firm for businesses
                across Pakistan — recognized for quality, innovation, and the
                breadth of our service offering.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-secondary">
              What Drives Us
            </span>
            <h2 className="mt-3 font-heading text-3xl font-bold text-foreground md:text-4xl">
              Our Core Values
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div
                key={value.title}
                className="group rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                  <value.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mt-4 font-heading text-lg font-semibold">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Preview */}
      <section className="section-padding">
        <div className="container mx-auto px-4 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-secondary">
            Our People
          </span>
          <h2 className="mt-3 font-heading text-3xl font-bold text-foreground md:text-4xl">
            Meet the Team Behind MeetHub
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Qualified chartered accountants, tax experts, ERP consultants, and
            business advisors working together as your integrated partner.
          </p>
          <div className="mt-8">
            <Link
              href="/about/team"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/80"
            >
              Meet the Full Team
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <StatsBar />
      <CtaBanner
        title="Let's Work Together"
        description="Ready to simplify your business operations? Let's start a conversation."
      />
    </>
  );
}

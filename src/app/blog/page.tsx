import type { Metadata } from "next";
import Link from "next/link";
import { Newspaper, ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/shared/page-header";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights on accounting, tax compliance, corporate governance, ERP, and travel in Pakistan — from the MeetHub Solutions team.",
};

export default function BlogPage() {
  return (
    <>
      <PageHeader
        title="Blog"
        description="Insights, guides, and updates from the MeetHub Solutions team."
        breadcrumbs={[{ label: "Blog" }]}
      />

      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-primary/10">
              <Newspaper className="h-10 w-10 text-primary" />
            </div>
            <h2 className="mt-6 font-heading text-2xl font-bold text-foreground">
              Coming Soon
            </h2>
            <p className="mt-3 text-muted-foreground">
              We&apos;re working on insightful articles about tax filing guides,
              SECP registration tips, ERP best practices, and travel stories
              from northern Pakistan. Stay tuned!
            </p>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/80"
              >
                Explore Our Services
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/80"
              >
                Get in Touch
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

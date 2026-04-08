import type { Metadata } from "next";
import { User } from "lucide-react";
import { PageHeader } from "@/components/shared/page-header";
import { CtaBanner } from "@/components/sections/cta-banner";

export const metadata: Metadata = {
  title: "CEO Message",
  description:
    "A message from our CEO on Meet Hub Financial Services' vision for integrated business services in Pakistan.",
};

export default function CeoMessagePage() {
  return (
    <>
      <PageHeader
        title="Message from the CEO"
        breadcrumbs={[
          { label: "About", href: "/about" },
          { label: "CEO Message" },
        ]}
      />

      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid items-start gap-12 lg:grid-cols-5">
            {/* CEO Photo */}
            <div className="lg:col-span-2">
              <div className="sticky top-28 overflow-hidden rounded-2xl border border-border bg-muted p-12 text-center">
                <User className="mx-auto h-24 w-24 text-muted-foreground/30" />
                <p className="mt-4 text-sm text-muted-foreground">
                  
                </p>
                <div className="mt-6 border-t border-border pt-6">
                  <h3 className="font-heading text-xl font-bold text-foreground">
                    M. Noman
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Founder &amp; CEO, Meet Hub Financial Services
                  </p>
                </div>
              </div>
            </div>

            {/* Letter */}
            <div className="lg:col-span-3">
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="text-xl leading-relaxed">Dear Partners and Friends,</p>

                <p>
                  When I founded Meet Hub Financial Services, I envisioned a firm that
                  would redefine how businesses in Pakistan access professional
                  services. Too often, companies — especially SMEs — struggle
                  with the complexity and cost of managing multiple service
                  providers for their accounting, tax, legal, and operational
                  needs.
                </p>

                <p>
                  MeetHub was built to solve that problem. We bring together a
                  team of qualified chartered accountants, tax experts, ERP
                  consultants, corporate advisors, and even travel professionals
                  — all under one roof. Our goal is simple: to be the one call
                  you make for every business need.
                </p>

                <p>
                  We believe in technology-driven solutions, transparent pricing,
                  and genuine partnerships. Whether you&apos;re a startup taking
                  your first steps with SECP registration, or an established
                  corporation looking to outsource your entire finance department
                  — we treat every client with the same level of dedication and
                  professionalism.
                </p>

                <p>
                  As we continue to grow, our commitment remains unchanged: to
                  empower Pakistani businesses to comply, grow, and compete in an
                  increasingly complex landscape.
                </p>

                <p>
                  Thank you for trusting Meet Hub Financial Services. We look forward to
                  being part of your success story.
                </p>

                <p className="mt-8 font-semibold text-foreground">
                  Warm regards,
                  <br />
                  <span className="text-primary">M. Noman</span>
                  <br />
                  <span className="text-sm font-normal">
                    Founder &amp; CEO, Meet Hub Financial Services
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}

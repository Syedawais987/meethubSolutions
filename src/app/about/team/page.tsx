import type { Metadata } from "next";
import { Users } from "lucide-react";
import { PageHeader } from "@/components/shared/page-header";
import { CtaBanner } from "@/components/sections/cta-banner";

export const metadata: Metadata = {
  title: "Our Team",
  description:
    "Meet the qualified professionals behind Meet Hub Financial Services — chartered accountants, tax consultants, and business advisors.",
};

const teamMembers = [
  {
    name: "Noman Ali",
    role: "CEO",
    qualifications: ["CA"],
  },
  {
    name: "Muhammad Kalim",
    role: "Head of Tax",
    qualifications: ["LLB"],
  },
  {
    name: "Syed Muzammil",
    role: "ERP Consultant",
    qualifications: ["Authorized Odoo Consultant"],
  },
  {
    name: "Tarik Azeem",
    role: "Accounting Consultancy Head",
    qualifications: ["ACCA"],
  },
  {
    name: "Mahwish Mir",
    role: "HR & Outsourcing Lead",
    qualifications: ["MPA HR"],
  },
  {
    name: "Sherif",
    role: "Travel Operations North",
    qualifications: ["Engineer"],
  },
];

export default function TeamPage() {
  return (
    <>
      <PageHeader
        title="Our Team"
        description="The qualified professionals driving results for our clients every day."
        breadcrumbs={[
          { label: "About", href: "/about" },
          { label: "Our Team" },
        ]}
      />

      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="group rounded-2xl border border-border bg-card p-6 text-center transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                {/* Photo placeholder */}
                <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-muted">
                  <Users className="h-10 w-10 text-muted-foreground/50" />
                </div>
                <h3 className="mt-4 font-heading text-lg font-semibold text-foreground">
                  {member.name}
                </h3>
                <p className="text-sm text-muted-foreground">{member.role}</p>
                {member.qualifications.length > 0 && (
                  <div className="mt-3 flex flex-wrap justify-center gap-1.5">
                    {member.qualifications.map((q) => (
                      <span
                        key={q}
                        className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary"
                      >
                        {q}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Join Our Team"
        description="We're always looking for talented professionals to join Meet Hub Financial Services."
      />
    </>
  );
}

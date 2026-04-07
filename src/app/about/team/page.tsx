import type { Metadata } from "next";
import { Users } from "lucide-react";
import { PageHeader } from "@/components/shared/page-header";
import { CtaBanner } from "@/components/sections/cta-banner";

export const metadata: Metadata = {
  title: "Our Team",
  description:
    "Meet the qualified professionals behind MeetHub Solutions — chartered accountants, tax consultants, and business advisors.",
};

// Placeholder team data — replace with data from Excel file
const teamMembers = [
  {
    name: "Team Member 1",
    role: "Managing Partner",
    qualifications: ["ACCA", "FCMA"],
  },
  {
    name: "Team Member 2",
    role: "Head of Tax",
    qualifications: ["CA", "LLB"],
  },
  {
    name: "Team Member 3",
    role: "ERP Consultant",
    qualifications: ["SAP Certified"],
  },
  {
    name: "Team Member 4",
    role: "Senior Auditor",
    qualifications: ["ACCA"],
  },
  {
    name: "Team Member 5",
    role: "HR & Outsourcing Lead",
    qualifications: ["MBA"],
  },
  {
    name: "Team Member 6",
    role: "Travel Operations",
    qualifications: [],
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
        description="We're always looking for talented professionals to join MeetHub Solutions."
      />
    </>
  );
}

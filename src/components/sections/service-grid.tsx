"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calculator,
  Building2,
  Monitor,
  FileText,
  Archive,
  Landmark,
  GraduationCap,
  SearchCheck,
  ShieldCheck,
  BarChart3,
  Banknote,
  Plane,
  ArrowRight,
} from "lucide-react";
import { SectionHeader } from "@/components/shared/section-header";

const iconMap: Record<string, React.ElementType> = {
  Calculator,
  Building2,
  Monitor,
  FileText,
  Archive,
  Landmark,
  GraduationCap,
  SearchCheck,
  ShieldCheck,
  BarChart3,
  Banknote,
  Plane,
};

interface ServiceItem {
  title: string;
  icon: string;
  description: string;
  href: string;
}

const serviceItems: ServiceItem[] = [
  {
    title: "Accounting",
    icon: "Calculator",
    description:
      "Financial statements, bookkeeping, and budget preparation",
    href: "/services/accounting",
  },
  {
    title: "Outsourcing",
    icon: "Building2",
    description:
      "Complete department outsourcing — Accounts, HR, Payroll",
    href: "/services/outsourcing",
  },
  {
    title: "ERP Solutions",
    icon: "Monitor",
    description: "Implementation, data migration, and process optimization",
    href: "/services/erp-solutions",
  },
  {
    title: "Tax Consultancy",
    icon: "FileText",
    description: "Income tax, sales tax, and withholding tax compliance",
    href: "/services/tax-consultancy",
  },
  {
    title: "Payroll & Compliance",
    icon: "Banknote",
    description: "Salary sheets, tax deductions, EOBI, and payroll compliance",
    href: "/services/payroll",
  },
  {
    title: "Data Archiving",
    icon: "Archive",
    description:
      "Cloud archiving, off-site storage, and certified shredding",
    href: "/services/data-archiving",
  },
  {
    title: "Governance & Compliance",
    icon: "Landmark",
    description:
      "SECP registration, governance frameworks, and policy development",
    href: "/services/governance-compliance",
  },
  {
    title: "Training",
    icon: "GraduationCap",
    description:
      "Professional development for accountants, managers, and staff",
    href: "/services/training-development",
  },
  {
    title: "Internal Audit",
    icon: "SearchCheck",
    description: "Internal audit execution and pre-payment audit",
    href: "/services/internal-audit",
  },
  {
    title: "Audit & Assurance",
    icon: "ShieldCheck",
    description: "External audit sourcing and liaison support",
    href: "/services/audit-assurance",
  },
  {
    title: "Fixed Assets",
    icon: "BarChart3",
    description: "Asset tagging, register maintenance, and year-end count",
    href: "/services/fixed-asset-management",
  },
  {
    title: "Travel & Tours",
    icon: "Plane",
    description: "Day-out packages, adventure tours, and corporate retreats",
    href: "/travel",
  },
];

function ServiceCard({
  item,
  isExpanded,
  onToggle,
}: {
  item: ServiceItem;
  isExpanded: boolean;
  onToggle: () => void;
}) {
  const Icon = iconMap[item.icon] || Calculator;

  return (
    <motion.div
      layout
      className="group cursor-pointer rounded-xl border border-border bg-card p-6 transition-shadow hover:shadow-lg"
      whileHover={{ y: -4 }}
      onClick={onToggle}
    >
      <div className="flex items-start gap-4">
        <motion.div
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300, damping: 24 }}
        >
          <Icon className="h-6 w-6 text-primary" />
        </motion.div>
        <div className="min-w-0">
          <h3 className="font-heading text-lg font-semibold text-foreground">
            {item.title}
          </h3>
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 24 }}
              >
                <p className="mt-2 text-sm text-muted-foreground">
                  {item.description}
                </p>
                <Link
                  href={item.href}
                  className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-primary transition-colors hover:text-primary/80"
                  onClick={(e) => e.stopPropagation()}
                >
                  Learn More
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}

export function ServiceGrid() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section className="section-padding">
      <div className="container mx-auto px-4">
        <SectionHeader
          subtitle="What We Do"
          title="Comprehensive Business Services"
          description="From accounting to adventure tours — everything your business needs under one roof."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {serviceItems.map((item, i) => (
            <ServiceCard
              key={item.href}
              item={item}
              isExpanded={expandedIndex === i}
              onToggle={() =>
                setExpandedIndex(expandedIndex === i ? null : i)
              }
            />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/80"
          >
            View All Services
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

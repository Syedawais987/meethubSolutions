export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export const navigation = {
  main: [
    { label: "Home", href: "/" },
    {
      label: "About",
      href: "/about",
      children: [
        { label: "Who We Are", href: "/about" },
        { label: "Our Team", href: "/about/team" },
        { label: "CEO Message", href: "/about/ceo-message" },
      ],
    },
    {
      label: "Services",
      href: "/services",
      children: [
        { label: "Accounting Services", href: "/services/accounting" },
        { label: "Outsourcing", href: "/services/outsourcing" },
        { label: "ERP Solutions", href: "/services/erp-solutions" },
        { label: "Tax Consultancy", href: "/services/tax-consultancy" },
        { label: "Payroll & Compliance", href: "/services/payroll" },
        { label: "Data Archiving", href: "/services/data-archiving" },
        { label: "Governance & Compliance", href: "/services/governance-compliance" },
        {
          label: "Training & Development",
          href: "/services/training-development",
        },
        { label: "Internal Audit", href: "/services/internal-audit" },
        { label: "Audit & Assurance", href: "/services/audit-assurance" },
        {
          label: "Fixed Asset Management",
          href: "/services/fixed-asset-management",
        },
      ],
    },
    { label: "Travel & Tours", href: "/travel" },
    { label: "Pricing", href: "/pricing" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ] as NavItem[],
  cta: {
    label: "Get a Quote",
    href: "/contact",
  },
} as const;

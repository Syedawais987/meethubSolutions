export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface ServiceCategory {
  label: string;
  services: { label: string; href: string }[];
}

export const serviceCategories: ServiceCategory[] = [
  {
    label: "Financial",
    services: [
      { label: "Accounting Services", href: "/services/accounting" },
      { label: "Outsourcing & Virtual CFO", href: "/services/outsourcing" },
      { label: "ERP Solutions", href: "/services/erp-solutions" },
      { label: "Payroll & Compliance", href: "/services/payroll" },
    ],
  },
  {
    label: "Advisory",
    services: [
      { label: "Tax Consultancy", href: "/services/tax-consultancy" },
      { label: "Governance & Compliance", href: "/services/governance-compliance" },
      { label: "Training & Development", href: "/services/training-development" },
    ],
  },
  {
    label: "Assurance",
    services: [
      { label: "Internal Audit", href: "/services/internal-audit" },
      { label: "Audit & Assurance", href: "/services/audit-assurance" },
      { label: "Fixed Asset Management", href: "/services/fixed-asset-management" },
    ],
  },
  {
    label: "Specialized",
    services: [
      { label: "Data Archiving", href: "/services/data-archiving" },
    ],
  },
];

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

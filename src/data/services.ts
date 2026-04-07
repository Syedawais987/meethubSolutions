export interface ServiceItem {
  title: string;
  description: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface CaseStudySnippet {
  industry: string;
  challenge: string;
  outcome: string;
  metric: string;
}

export interface Service {
  slug: string;
  title: string;
  shortTitle: string;
  icon: string;
  category: "financial" | "advisory" | "assurance" | "specialized";
  tagline: string;
  description: string;
  problemStatement: string;
  items: ServiceItem[];
  benefits: string[];
  idealFor: string[];
  faqs: FaqItem[];
  caseStudy?: CaseStudySnippet;
  videoUrl?: string;
  relatedServices: string[];
  ctaText: string;
  whatsappMessage: string;
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
}

export const services: Service[] = [
  // ── 1. Accounting ──
  {
    slug: "accounting",
    title: "Accounting & Bookkeeping Services",
    shortTitle: "Accounting",
    icon: "Calculator",
    category: "financial",
    tagline: "Complete financial management — from daily bookkeeping to annual budgets",
    description:
      "Comprehensive accounting and bookkeeping solutions to keep your finances accurate, compliant, and transparent. From daily transaction recording to monthly financial reporting, our accounting team ensures your books are always audit-ready.",
    problemStatement:
      "Many growing businesses in Pakistan operate without structured financial processes. Transactions go unrecorded, bank reconciliations fall behind, and financial statements are prepared reactively — usually only when an auditor demands them. This lack of visibility leads to poor decisions, missed tax deadlines, and lost revenue.",
    items: [
      { title: "Bookkeeping", description: "Day-to-day recording and classification of all financial transactions" },
      { title: "Voucher Maintenance", description: "Preparation, organization, and filing of payment and receipt vouchers" },
      { title: "Bank Statement Upload & Reconciliation", description: "Importing bank transactions into your ERP and reconciling against records" },
      { title: "Trial Balance Preparation", description: "Periodic generation of trial balance to verify the accuracy of your books" },
      { title: "Financial Statement Preparation", description: "Full preparation of P&L, balance sheet, and cash flow statements" },
      { title: "Forecast Preparation", description: "Revenue and expense forecasting to support strategic planning" },
      { title: "Budget Preparation", description: "Annual and project-level budget development with variance tracking" },
      { title: "Inventory Management Support", description: "Stock valuation, tracking, reconciliation, and reporting" },
    ],
    benefits: [
      "Dedicated accountant assigned to your business",
      "Real-time financial visibility through ERP integration",
      "Compliance-ready books for tax and audit purposes",
      "Cost-effective alternative to hiring a full-time accounting team",
    ],
    idealFor: ["SMEs without a finance department", "Startups establishing financial processes", "Businesses preparing for audit"],
    faqs: [
      { question: "What accounting software do you support?", answer: "We work with all major platforms including QuickBooks, Xero, Sage, and custom ERP systems. We can also work within your existing system." },
      { question: "How often will I receive financial reports?", answer: "Monthly as standard, with weekly or daily reporting available on request. All reports are delivered digitally and can be accessed through your ERP." },
      { question: "Can you handle multi-currency transactions?", answer: "Yes, we manage multi-currency bookkeeping for import/export businesses regularly. We handle currency conversion, exchange gain/loss accounting, and compliance." },
      { question: "What's the difference between bookkeeping and accounting?", answer: "Bookkeeping is the recording of transactions. Accounting includes analysis, reporting, and strategic advice based on those records. We provide both." },
    ],
    caseStudy: {
      industry: "Manufacturing",
      challenge: "A mid-size manufacturer had no structured financial processes — books were 6 months behind and audit season was approaching.",
      outcome: "We deployed a 2-person team, cleared the backlog in 3 weeks, and established monthly reporting that continues to this day.",
      metric: "6 months of backlog cleared in 3 weeks",
    },
    relatedServices: ["outsourcing", "erp-solutions", "tax-consultancy"],
    ctaText: "Get Your Books in Order",
    whatsappMessage: "Hi, I'm interested in your accounting services. Can you share details and pricing?",
    seo: {
      title: "Accounting & Bookkeeping Services in Pakistan",
      description: "Professional accounting and bookkeeping services. Daily transactions, financial reporting, payroll, and audit-ready books for Pakistani businesses.",
      keywords: ["accounting services Pakistan", "bookkeeping Pakistan", "financial reporting", "payroll services"],
    },
  },

  // ── 2. Outsourcing ──
  {
    slug: "outsourcing",
    title: "Department Outsourcing",
    shortTitle: "Outsourcing",
    icon: "Building2",
    category: "financial",
    tagline: "Entire departments, outsourced — Accounts, HR, Payroll, and more",
    description:
      "Outsource your entire finance, HR, or admin department to our expert team and focus on your core business. We provide dedicated professionals who integrate with your workflow.",
    problemStatement:
      "Hiring, training, and retaining specialized staff for accounts, HR, and payroll is expensive and time-consuming — especially for small and mid-sized businesses. High turnover rates, compliance risks, and management overhead drain resources that should be focused on growth.",
    items: [
      { title: "Complete Accounts & Tax Department", description: "A fully managed finance team operating as your in-house department" },
      { title: "HR Department & Payroll", description: "End-to-end HR operations including payroll processing, leave management, and statutory compliance" },
      { title: "Data Archiving", description: "Ongoing management of physical and digital records" },
      { title: "Data Shredding", description: "Secure, certified destruction of confidential documents" },
      { title: "Recruitment Support", description: "Sourcing and screening candidates for support departments" },
      { title: "Visiting CFO", description: "A senior finance professional providing strategic oversight on a fractional/part-time basis" },
    ],
    benefits: [
      "Eliminate hiring, training, and retention costs",
      "Get a complete department, not just a freelancer",
      "The Visiting CFO model brings C-level expertise at a fraction of the cost",
      "Seamless integration with your existing team and systems",
    ],
    idealFor: ["SMEs scaling operations", "Companies with high staff turnover", "Businesses needing CFO-level guidance without full-time commitment"],
    faqs: [
      { question: "How do outsourced teams integrate with our workflows?", answer: "Our teams work within your existing tools, attend your meetings, and follow your processes — like an in-house team without the overhead." },
      { question: "What is the minimum engagement period?", answer: "We recommend a minimum 3-month engagement for meaningful results, though contracts are flexible." },
      { question: "Can we scale the team up or down?", answer: "Absolutely. One of the biggest advantages of outsourcing is the ability to scale resources based on your current needs without the complexity of hiring or layoffs." },
    ],
    caseStudy: {
      industry: "IT Startup",
      challenge: "A 40-person tech company was spending 25% of management time on HR and finance operations instead of product development.",
      outcome: "We deployed a 3-person outsourced team (accountant, HR officer, payroll specialist) who took over completely within 2 weeks.",
      metric: "25% management time freed up",
    },
    relatedServices: ["accounting", "corporate-advisory", "training-development"],
    ctaText: "Outsource Your Department",
    whatsappMessage: "Hi, I'd like to know more about your department outsourcing services.",
    seo: {
      title: "Department Outsourcing Services in Pakistan",
      description: "Outsource your finance, HR, or admin departments. Dedicated teams, cost savings, and seamless integration for Pakistani businesses.",
      keywords: ["department outsourcing Pakistan", "finance outsourcing", "HR outsourcing", "visiting CFO"],
    },
  },

  // ── 3. ERP Solutions ──
  {
    slug: "erp-solutions",
    title: "ERP Implementation & Support",
    shortTitle: "ERP Solutions",
    icon: "Monitor",
    category: "financial",
    tagline: "From selection to go-live — we make your ERP actually work",
    description:
      "End-to-end ERP implementation, customization, and ongoing support to digitize your operations. We take a process-first approach to ensure actual adoption.",
    problemStatement:
      "ERP implementations in Pakistan have a high failure rate. Companies invest millions in software licenses only to see projects stall due to poor planning, inadequate training, and misaligned business processes. The result: expensive shelf-ware and teams reverting to spreadsheets.",
    items: [
      { title: "ERP Implementation", description: "End-to-end implementation including system selection, configuration, testing, and go-live" },
      { title: "Implementation Support", description: "Post-go-live stabilization, issue resolution, and user hand-holding" },
      { title: "Business Process Development", description: "Mapping, documenting, and optimizing business processes before ERP configuration" },
      { title: "Data Migration", description: "Secure migration of data from legacy systems, spreadsheets, or manual records" },
      { title: "Document Management System (DMS)", description: "Setup and configuration of digital document management linked to ERP" },
    ],
    benefits: [
      "Process-first approach — we fix your workflows before touching software",
      "Vendor-agnostic guidance (not tied to any single ERP vendor)",
      "Post-go-live support to ensure actual adoption, not just installation",
      "Data migration expertise to bring your history into the new system cleanly",
    ],
    idealFor: ["Companies replacing manual/spreadsheet processes", "Businesses with failed previous ERP attempts", "Growing firms ready to systematize operations"],
    faqs: [
      { question: "Which ERP systems do you implement?", answer: "We work with SAP Business One, Oracle NetSuite, Microsoft Dynamics, and several industry-specific solutions. We're vendor-agnostic and recommend what's best for your size and needs." },
      { question: "How long does a typical ERP implementation take?", answer: "Depending on complexity, implementations typically take 3-6 months from assessment to go-live. We provide a detailed timeline during the discovery phase." },
      { question: "What if our previous ERP implementation failed?", answer: "We specialize in recovery. We'll assess what went wrong, salvage what's usable, and rebuild with a process-first approach to ensure success this time." },
    ],
    caseStudy: {
      industry: "Distribution",
      challenge: "A distribution company had invested PKR 5M in an ERP that nobody used — staff reverted to Excel within 3 months of go-live.",
      outcome: "We re-mapped their processes, reconfigured the ERP, and conducted hands-on training. Adoption reached 95% within 6 weeks.",
      metric: "95% ERP adoption in 6 weeks",
    },
    relatedServices: ["accounting", "outsourcing", "data-archiving"],
    ctaText: "Fix Your ERP",
    whatsappMessage: "Hello, I need help with ERP implementation. Can we discuss?",
    seo: {
      title: "ERP Implementation & Support in Pakistan",
      description: "End-to-end ERP solutions — implementation, customization, training, and ongoing support for Pakistani businesses.",
      keywords: ["ERP implementation Pakistan", "ERP solutions", "SAP Business One Pakistan", "business software"],
    },
  },

  // ── 4. Tax Consultancy ──
  {
    slug: "tax-consultancy",
    title: "Tax Consultancy & Compliance",
    shortTitle: "Tax Consultancy",
    icon: "FileText",
    category: "advisory",
    tagline: "Income tax, sales tax, withholding tax — filed correctly, filed on time",
    description:
      "Expert tax planning, filing, and compliance services to minimize liabilities and stay on the right side of FBR. We handle income tax, sales tax, and withholding tax for individuals and businesses.",
    problemStatement:
      "Pakistan's tax landscape is complex and constantly evolving. Missing filing deadlines means penalties. Incorrect returns trigger notices. And most small businesses don't have the in-house expertise to navigate FBR requirements, resulting in overpayment or compliance risk.",
    items: [
      { title: "Income Tax Return Filing", description: "Annual income tax return preparation and filing for individuals and businesses" },
      { title: "Sales Tax Registration", description: "NTN and sales tax registration with FBR" },
      { title: "Monthly Sales Tax Return Filing", description: "Preparation and timely submission of monthly sales tax returns" },
      { title: "Monthly Withholding Tax Return Filing", description: "Calculation, preparation, and filing of withholding tax statements" },
    ],
    benefits: [
      "Never miss a filing deadline — we track and manage all due dates",
      "Minimize tax liability through legitimate planning",
      "Handle FBR correspondence and notices on your behalf",
      "Both individual and business tax expertise",
    ],
    idealFor: ["Individuals needing annual tax filing", "Businesses requiring monthly tax compliance", "New businesses needing tax registration guidance"],
    faqs: [
      { question: "Can you help with FBR notices and audits?", answer: "Yes, we provide full FBR audit support including documentation, representation, and resolution. We handle the entire process on your behalf." },
      { question: "Do you handle both individual and corporate tax?", answer: "Absolutely — we serve individuals, sole proprietors, partnerships, and corporations of all sizes." },
      { question: "What are the penalties for late tax filing?", answer: "Penalties vary — income tax late filing can result in PKR 40,000+ in penalties plus additional surcharge. We ensure you never face these by managing all deadlines proactively." },
    ],
    caseStudy: {
      industry: "Import/Export",
      challenge: "A mid-size importer was paying excessive taxes due to misclassified expenses and missed deductions across 3 years of filings.",
      outcome: "Our tax team restructured their filings, corrected misclassifications, and recovered PKR 4.2M in overpaid taxes within 6 months.",
      metric: "PKR 4.2M recovered in overpaid taxes",
    },
    relatedServices: ["accounting", "corporate-advisory", "audit-assurance"],
    ctaText: "File Your Tax Returns",
    whatsappMessage: "Hi, I need assistance with tax filing / registration. What are your rates?",
    seo: {
      title: "Tax Consultancy & Compliance Services in Pakistan",
      description: "Expert tax planning, FBR compliance, income tax filing, and sales tax services for Pakistani businesses and individuals.",
      keywords: ["tax consultancy Pakistan", "FBR tax filing", "income tax return Pakistan", "sales tax registration"],
    },
  },

  // ── 5. Data Archiving ──
  {
    slug: "data-archiving",
    title: "Data Archiving & Shredding",
    shortTitle: "Data Archiving",
    icon: "Archive",
    category: "specialized",
    tagline: "Secure storage, organized access, certified destruction",
    description:
      "Transform your physical records into secure digital archives with our data archiving and digitization services. Plus certified destruction when documents reach end of life.",
    problemStatement:
      "Businesses accumulate years of physical documents — invoices, contracts, employee records — but rarely have the space, organization, or security protocols to manage them properly. Sensitive documents end up in unsecured storage rooms, and retrieval becomes a hours-long exercise.",
    items: [
      { title: "Cloud-Based & LAN Archiving", description: "Digital archiving of hard copy documents with cloud and local network access" },
      { title: "Off-Site Physical Storage", description: "Secure off-site warehousing of physical documents with indexed retrieval" },
      { title: "Confidential Data Shredding", description: "Certified destruction of sensitive documents with chain-of-custody documentation" },
    ],
    benefits: [
      "Indexed storage with rapid retrieval capabilities",
      "Dual access: cloud for remote teams, LAN for on-premise speed",
      "Compliance with document retention requirements",
      "Certified shredding with destruction certificates",
    ],
    idealFor: ["Companies with large physical archives", "Regulated industries requiring document retention", "Businesses relocating or downsizing office space"],
    faqs: [
      { question: "How quickly can documents be retrieved from archives?", answer: "Digital archives are searchable and retrievable instantly. Physical off-site documents can be delivered within 24-48 hours of request." },
      { question: "Is the shredding service certified?", answer: "Yes, we provide a Certificate of Destruction for every shredding engagement, including chain-of-custody documentation for compliance purposes." },
    ],
    relatedServices: ["outsourcing", "erp-solutions", "fixed-asset-management"],
    ctaText: "Secure Your Documents",
    whatsappMessage: "Hi, I'd like to inquire about your data archiving services.",
    seo: {
      title: "Data Archiving & Shredding Services in Pakistan",
      description: "Professional document archiving, digitization, and certified shredding services for businesses in Pakistan.",
      keywords: ["data archiving Pakistan", "document digitization", "data shredding", "secure document storage"],
    },
  },

  // ── 6. Corporate Advisory ──
  {
    slug: "corporate-advisory",
    title: "Corporate Advisory & SECP Registration",
    shortTitle: "Corporate Advisory",
    icon: "Landmark",
    category: "advisory",
    tagline: "SECP registration, governance frameworks, and policy development",
    description:
      "Company formation, SECP registration, corporate structuring, governance frameworks, and ongoing compliance advisory — from startup to boardroom.",
    problemStatement:
      "New companies struggle with SECP registration procedures and compliance requirements. Established companies often lack formal governance structures — no documented Rules of Business, unclear Delegation of Powers, and policies that exist only as tribal knowledge. This creates risk, inefficiency, and regulatory exposure.",
    items: [
      { title: "Company Registration with SECP", description: "Online filing for company incorporation — at half the standard fee through direct electronic submission" },
      { title: "Corporate Governance", description: "Development of Rules of Business (ROB) and Delegation of Powers (DOP) frameworks" },
      { title: "Policy & Procedure Development", description: "Creation of documented policies and procedures for core business cycles (procurement, finance, HR, etc.)" },
      { title: "Actuarial Sourcing", description: "Support in identifying and engaging qualified actuarial service providers" },
      { title: "Visiting CFO", description: "Strategic corporate finance advisory and board-level financial oversight on a fractional basis" },
    ],
    benefits: [
      "SECP registration at 50% reduced cost through online filing expertise",
      "Governance frameworks that satisfy regulatory requirements and board expectations",
      "Policies tailored to your industry and size, not generic templates",
      "Experienced advisory without long-term retainer commitments",
    ],
    idealFor: ["Entrepreneurs starting new companies", "Businesses needing governance overhaul", "Companies preparing for investment or IPO"],
    faqs: [
      { question: "How long does SECP registration take?", answer: "Typically 5-10 business days from submission of complete documentation. We handle everything from name reservation to post-incorporation compliance." },
      { question: "What types of companies can you register?", answer: "Private Limited, Single Member, Public Limited, LLP, and Not-for-Profit companies. We advise on the best structure for your situation." },
      { question: "Why is your SECP registration cheaper?", answer: "We file directly through SECP's electronic portal, cutting out intermediary fees. This allows us to pass the savings to you — typically 50% less than traditional agents." },
    ],
    caseStudy: {
      industry: "Tech Startup",
      challenge: "A SaaS company needed to incorporate quickly to close a seed funding round, but had no idea where to start with SECP.",
      outcome: "We registered the company in 5 days, set up the governance framework, and had them investor-ready within 2 weeks.",
      metric: "SECP registered in 5 days",
    },
    relatedServices: ["tax-consultancy", "outsourcing", "audit-assurance"],
    ctaText: "Register Your Company",
    whatsappMessage: "Hello, I'd like to register a company with SECP. Can you guide me on the process and fees?",
    seo: {
      title: "SECP Company Registration & Corporate Advisory in Pakistan",
      description: "Company registration, SECP filings, corporate governance, and compliance advisory for Pakistani businesses. Registration at half the cost.",
      keywords: ["SECP registration", "company registration Pakistan", "corporate advisory", "business incorporation Pakistan"],
    },
  },

  // ── 7. Training & Development ──
  {
    slug: "training-development",
    title: "Training & Development",
    shortTitle: "Training",
    icon: "GraduationCap",
    category: "advisory",
    tagline: "Practical skills for your team — accounting, ERP, Excel, and leadership",
    description:
      "Custom corporate training programs in finance, accounting, ERP, advanced Excel, and professional development. Hands-on, practical training — not just theory.",
    problemStatement:
      "Staff training in Pakistan is often limited to one-off workshops with no follow-up or practical application. Accountants learn theory but can't operate the ERP. Managers understand strategy but can't read a financial statement. The gap between knowledge and execution costs businesses daily.",
    items: [
      { title: "Accountant Training", description: "Practical accounting, ERP operations, financial reporting, and compliance" },
      { title: "Manager Training", description: "Financial literacy for non-finance managers, leadership, and decision-making" },
      { title: "HR Professional Training", description: "HR compliance, payroll systems, and labor law fundamentals" },
      { title: "Advanced Excel", description: "Pivot tables, VLOOKUP/XLOOKUP, data analysis, dashboards, and macros" },
      { title: "PowerPoint Mastery", description: "Professional presentations, data visualization, and storytelling" },
      { title: "ERP Basics", description: "Navigation, data entry, reporting, and common workflows for new ERP users" },
    ],
    benefits: [
      "Hands-on, practical training — not just theory",
      "Customizable to your company's actual systems and processes",
      "On-site or virtual delivery options",
      "Post-training support and Q&A sessions",
    ],
    idealFor: ["Companies onboarding new staff", "Teams adopting new ERP systems", "Managers transitioning to financial oversight roles"],
    faqs: [
      { question: "Can training be customized to our specific systems?", answer: "Absolutely. We tailor all training to use your actual ERP, your chart of accounts, and your real business scenarios — not generic textbook examples." },
      { question: "Do you offer virtual training?", answer: "Yes, we offer both on-site and virtual training sessions. Virtual sessions use screen-sharing and interactive exercises to maintain engagement." },
      { question: "What is the typical training duration?", answer: "Programs range from 1-day workshops to multi-week bootcamps depending on the topic depth. We'll recommend the right format after understanding your needs." },
    ],
    relatedServices: ["erp-solutions", "outsourcing", "accounting"],
    ctaText: "Train Your Team",
    whatsappMessage: "Hello, I'd like to inquire about corporate training programs.",
    seo: {
      title: "Corporate Training & Development Programs in Pakistan",
      description: "Custom corporate training in accounting, ERP, Excel, and leadership for Pakistani organizations. Practical, hands-on learning.",
      keywords: ["corporate training Pakistan", "ERP training", "advanced Excel training", "professional development"],
    },
  },

  // ── 8. Internal Audit ──
  {
    slug: "internal-audit",
    title: "Internal Audit Services",
    shortTitle: "Internal Audit",
    icon: "SearchCheck",
    category: "assurance",
    tagline: "Independent assurance on your controls and processes",
    description:
      "Independent internal audit services to strengthen controls, detect risks, and ensure operational efficiency. We provide risk-based audits and pre-payment verification.",
    problemStatement:
      "Many Pakistani companies treat internal audit as a box-ticking exercise — or skip it entirely until an external auditor raises concerns. Without proactive internal audit, control weaknesses go undetected, fraud risk increases, and management lacks assurance over operational effectiveness.",
    items: [
      { title: "Internal Audit Execution", description: "Conduct internal audits per an agreed framework (risk-based, compliance, operational)" },
      { title: "Pre-Payment Audit", description: "Review and verify payments before they are processed to prevent errors and fraud" },
    ],
    benefits: [
      "Independent, objective assessment of your controls",
      "Pre-payment audit catches errors before money leaves the account",
      "Risk-based approach focused on high-impact areas",
      "Actionable findings with practical recommendations",
    ],
    idealFor: ["Companies without an internal audit function", "Organizations needing pre-payment controls", "Businesses preparing for external audit"],
    faqs: [
      { question: "What's the difference between internal and external audit?", answer: "Internal audit is an ongoing assurance function focused on controls and processes. External audit is a periodic independent review of financial statements. We provide internal audit — but can also help coordinate with your external auditors." },
      { question: "How does pre-payment audit work?", answer: "Our team reviews supporting documentation for payments above a defined threshold before they are released. This catches duplicate payments, unauthorized expenses, and documentation gaps." },
    ],
    relatedServices: ["audit-assurance", "accounting", "fixed-asset-management"],
    ctaText: "Strengthen Your Controls",
    whatsappMessage: "Hi, I'd like to discuss internal audit services for my organization.",
    seo: {
      title: "Internal Audit Services in Pakistan",
      description: "Professional internal audit services — risk assessment, pre-payment audit, and operational reviews for Pakistani organizations.",
      keywords: ["internal audit Pakistan", "risk assessment", "pre-payment audit", "operational audit"],
    },
  },

  // ── 9. Audit & Assurance ──
  {
    slug: "audit-assurance",
    title: "Audit & Assurance",
    shortTitle: "Audit & Assurance",
    icon: "ShieldCheck",
    category: "assurance",
    tagline: "We help you find the right auditors and work with them seamlessly",
    description:
      "We source qualified external audit firms matched to your size and industry, then manage the entire audit process as your liaison — reducing management burden.",
    problemStatement:
      "Finding a qualified, appropriately-sized external auditor in Pakistan can be challenging — especially for mid-tier companies too large for sole practitioners but too small for Big 4 firms. Once engaged, managing the audit process internally consumes significant management time.",
    items: [
      { title: "External Audit Sourcing", description: "Identify, evaluate, and recommend appropriate external audit firms based on your size, industry, and requirements" },
      { title: "External Audit Liaison", description: "Serve as your point of contact with external auditors — coordinating schedules, managing information requests, resolving queries" },
    ],
    benefits: [
      "Access to our network of vetted audit firms across Pakistan",
      "Significant reduction in management time spent on audit coordination",
      "Better audit outcomes through professional liaison",
      "Smooth audit process with fewer surprises",
    ],
    idealFor: ["Companies changing auditors", "Businesses needing audit for the first time", "Organizations wanting to reduce audit-related disruption"],
    faqs: [
      { question: "Can you recommend an audit firm for my industry?", answer: "Yes — we maintain relationships with audit firms across Pakistan specializing in various sectors. We'll match you based on your size, industry, and specific requirements." },
      { question: "What does the liaison service include?", answer: "We handle all communication with auditors, prepare requested documentation, coordinate schedules, respond to queries, and manage the entire process so your management team stays focused." },
    ],
    relatedServices: ["internal-audit", "accounting", "tax-consultancy"],
    ctaText: "Find the Right Auditor",
    whatsappMessage: "Hi, I need audit & assurance services. Can you share your approach and fees?",
    seo: {
      title: "Audit & Assurance Services in Pakistan",
      description: "External audit sourcing and audit liaison services. We find the right auditors and manage the process for you.",
      keywords: ["audit services Pakistan", "external audit sourcing", "audit liaison", "assurance services"],
    },
  },

  // ── 10. Fixed Asset Management ──
  {
    slug: "fixed-asset-management",
    title: "Fixed Asset Management",
    shortTitle: "Fixed Assets",
    icon: "BarChart3",
    category: "assurance",
    tagline: "Tag it, track it, count it — complete asset lifecycle management",
    description:
      "Physical verification, tagging, depreciation management, and fixed asset register maintenance. We eliminate ghost assets and bring your register up to date.",
    problemStatement:
      "Fixed assets represent a major investment on the balance sheet, yet many companies have incomplete registers, untagged assets, and year-end counts that are chaotic and inaccurate. This leads to ghost assets, incorrect depreciation, and audit qualifications.",
    items: [
      { title: "Fixed Asset Tagging", description: "Physical tagging of all assets with unique identifiers linked to the asset register" },
      { title: "Year-End Asset Count Support", description: "Planning, execution, and reconciliation of physical asset verification at year-end" },
    ],
    benefits: [
      "Eliminate ghost assets and bring your register up to date",
      "Standardized tagging system linked to your ERP/accounting system",
      "Professional count procedures that satisfy auditor requirements",
      "Clear reconciliation between physical assets and book values",
    ],
    idealFor: ["Companies with large asset bases (manufacturing, construction)", "Organizations preparing for audit", "Businesses that have never conducted a formal asset count"],
    faqs: [
      { question: "What tagging system do you use?", answer: "We use barcode or QR code tags linked to your asset register. Tags are durable, tamper-evident, and designed for your operating environment (office, warehouse, factory floor)." },
      { question: "Can you integrate with our existing asset register?", answer: "Yes — we work with Excel-based registers, ERP asset modules, and dedicated asset management systems. We can also help migrate from manual to digital tracking." },
    ],
    relatedServices: ["internal-audit", "accounting", "erp-solutions"],
    ctaText: "Get Your Assets Counted",
    whatsappMessage: "Hi, I need help with fixed asset management. Can we discuss?",
    seo: {
      title: "Fixed Asset Management Services in Pakistan",
      description: "Fixed asset tagging, verification, and year-end count support. Eliminate ghost assets and satisfy auditor requirements.",
      keywords: ["fixed asset management Pakistan", "asset tagging", "asset verification", "year-end asset count"],
    },
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getServicesByCategory(category: Service["category"]): Service[] {
  return services.filter((s) => s.category === category);
}

export function getAllServiceSlugs(): string[] {
  return services.map((s) => s.slug);
}

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
    title: "Accounting Services (IFRS-Compliant & SECP Ready)",
    shortTitle: "Accounting",
    icon: "Calculator",
    category: "financial",
    tagline: "IFRS-compliant accounting for statutory compliance and strategic decision-making",
    description:
      "Proper accounting ensures compliance with SECP, FBR, and international reporting standards. MHFS delivers full-scope accounting services designed for both statutory compliance and strategic decision-making.",
    problemStatement:
      "Many businesses in Pakistan face challenges with incomplete ledgers, inconsistent reconciliations, and lack of IFRS alignment. This leads to poor decisions, missed tax deadlines, audit qualifications, and lost investor confidence.",
    items: [
      { title: "Financial Transaction Recording", description: "Recording financial transactions in accordance with IFRS standards" },
      { title: "General Ledger Maintenance", description: "Preparing and maintaining general ledgers with accurate classifications" },
      { title: "Accounts Reconciliation", description: "Reconciling accounts payable, receivable, and bank statements" },
      { title: "Companies Act 2017 Compliance", description: "Ensuring compliance with Companies Act 2017 requirements" },
      { title: "Management Accounts & Financial Statements", description: "Preparing periodic management accounts and financial statements" },
      { title: "Forecast Preparation", description: "Support in preparation of quarterly forecasts for strategic planning" },
      { title: "Budget Preparation", description: "Support in preparation of annual budgets with variance tracking" },
      { title: "Actual vs Budget vs Forecast Reporting", description: "Preparing reports comparing actual vs budgets vs forecast vs last year" },
      { title: "Inventory Management Support", description: "Support in inventory valuation, tracking, and reconciliation" },
    ],
    benefits: [
      "Accurate, compliant accounts that strengthen investor trust",
      "Audit-ready books at all times",
      "Informed decision-making through reliable financial data",
      "IFRS-aligned reporting for international credibility",
    ],
    idealFor: ["SMEs without a finance department", "Startups establishing financial processes", "Companies preparing for audit or investment"],
    faqs: [
      { question: "Do you follow IFRS standards?", answer: "Yes, all our accounting services are fully IFRS-compliant, ensuring your financial statements meet international reporting standards required by SECP and investors." },
      { question: "What ERP/software do you support?", answer: "We work with Odoo, Xero, Zoho, SAP, QuickBooks, and any other ERP system your business uses." },
      { question: "How often will I receive financial reports?", answer: "Monthly as standard, with weekly reporting available on request. We also prepare quarterly forecasts and annual budgets." },
    ],
    caseStudy: {
      industry: "Manufacturing",
      challenge: "A mid-size manufacturer had incomplete ledgers and no IFRS alignment — books were 6 months behind and audit season was approaching.",
      outcome: "We deployed a team, cleared the backlog in 3 weeks, aligned all records to IFRS, and established monthly reporting.",
      metric: "6 months of backlog cleared in 3 weeks",
    },
    relatedServices: ["outsourcing", "erp-solutions", "tax-consultancy"],
    ctaText: "Get Your Books in Order",
    whatsappMessage: "Hi, I'm interested in your accounting services. Can you share details and pricing?",
    seo: {
      title: "Accounting Services in Pakistan — IFRS Compliant | MHFS",
      description: "IFRS-compliant accounting services in Pakistan. Financial statements, budgets, forecasts, and SECP-ready books by Meet Hub Financial Services.",
      keywords: ["accounting services Pakistan", "IFRS accounting", "bookkeeping Pakistan", "SECP compliant accounting"],
    },
  },

  // ── 2. Outsourcing (Bookkeeping & Department Outsourcing) ──
  {
    slug: "outsourcing",
    title: "Outsourced Bookkeeping & Department Services",
    shortTitle: "Outsourcing",
    icon: "Building2",
    category: "financial",
    tagline: "Complete bookkeeping, Virtual CFO, and full department outsourcing",
    description:
      "Bookkeeping is the foundation of all financial reporting. MHFS provides comprehensive bookkeeping and department outsourcing services — from daily transaction recording to Virtual CFO-level strategic oversight.",
    problemStatement:
      "Errors or gaps in record-keeping cascade into compliance failures and financial misstatements. Hiring, training, and retaining specialized staff for accounts, HR, and payroll is expensive — especially for SMEs and NGOs that lack in-house finance departments.",
    items: [
      { title: "Daily Bookkeeping", description: "Recording daily sales, purchases, and expenses with accuracy" },
      { title: "Journals & Cashbooks", description: "Maintaining journals, cashbooks, and petty cash records" },
      { title: "Bank Reconciliation", description: "Monthly bank account reconciliation against your records" },
      { title: "Complete Accounts & Tax Department", description: "A fully managed finance team operating as your in-house department" },
      { title: "HR Department & Payroll", description: "End-to-end HR operations including payroll processing and compliance" },
      { title: "Tax Workings & Returns", description: "Preparing tax workings and filing returns as part of ongoing bookkeeping" },
      { title: "Data Archiving & Shredding", description: "Ongoing management and certified destruction of records" },
      { title: "Recruitment Support", description: "Sourcing and screening candidates for finance department roles" },
      { title: "Virtual CFO Services", description: "Senior finance professional providing strategic oversight, attending board meetings, and liaising with banks and auditors" },
    ],
    benefits: [
      "Clean, up-to-date books that provide the basis for compliance and reporting",
      "Eliminate hiring, training, and retention costs",
      "Virtual CFO brings C-level expertise at a fraction of the cost",
      "Works with Odoo, Xero, Zoho, SAP, and any other ERP",
    ],
    idealFor: ["SMEs and NGOs without in-house finance", "Companies scaling operations", "Businesses needing CFO-level guidance without full-time commitment"],
    faqs: [
      { question: "What does a Virtual CFO do?", answer: "Our Virtual CFO provides strategic financial management — budgeting, financial planning, investor communication, attending board meetings, and coordinating with banks and external auditors — all on a fractional basis." },
      { question: "Can you integrate with our existing ERP?", answer: "Yes, we use technology platforms including Odoo, Xero, Zoho, SAP, and any other ERP your business runs on." },
      { question: "What is the minimum engagement period?", answer: "We recommend a minimum 3-month engagement for meaningful results, though contracts are flexible." },
    ],
    caseStudy: {
      industry: "NGO",
      challenge: "An NGO with 50+ staff had no in-house finance team — donor reporting was delayed and compliance was at risk.",
      outcome: "We deployed a 3-person outsourced team (accountant, bookkeeper, Virtual CFO) who took over completely within 2 weeks.",
      metric: "Donor reporting turnaround reduced to 5 days",
    },
    relatedServices: ["accounting", "payroll", "erp-solutions"],
    ctaText: "Outsource Your Finance",
    whatsappMessage: "Hi, I'd like to know more about your outsourcing and Virtual CFO services.",
    seo: {
      title: "Outsourced Bookkeeping & Virtual CFO Services in Pakistan | MHFS",
      description: "Outsource your bookkeeping, finance department, or hire a Virtual CFO. Meet Hub Financial Services — your dedicated finance partner.",
      keywords: ["outsourced bookkeeping Pakistan", "virtual CFO Pakistan", "finance outsourcing", "department outsourcing"],
    },
  },

  // ── 3. ERP Solutions ──
  {
    slug: "erp-solutions",
    title: "ERP Solutions & Business Process Development",
    shortTitle: "ERP Solutions",
    icon: "Monitor",
    category: "financial",
    tagline: "From business process mapping to ERP go-live — we make your systems work",
    description:
      "We integrate bookkeeping and operations with Odoo ERP, Xero Accounting, and other platforms. We determine business processes based on existing operations, share best practices, and implement them in ERP.",
    problemStatement:
      "ERP implementations in Pakistan have a high failure rate. Companies invest millions in software licenses only to see projects stall due to poor planning, inadequate training, and misaligned business processes. The result: expensive shelf-ware and teams reverting to spreadsheets.",
    items: [
      { title: "ERP Implementation", description: "End-to-end implementation including system selection, configuration, testing, and go-live" },
      { title: "Implementation Support", description: "Post-go-live stabilization, issue resolution, and user hand-holding" },
      { title: "Business Process Development", description: "Determining business processes based on existing operations and implementing best practices" },
      { title: "Data Migration", description: "Secure migration of data from legacy systems, spreadsheets, or manual records" },
      { title: "Document Management System", description: "Setup and configuration of digital document management linked to ERP" },
    ],
    benefits: [
      "Process-first approach — we fix workflows before touching software",
      "Works with Odoo, Xero, SAP, and other platforms",
      "Best practices developed from existing operations, not generic templates",
      "Post-go-live support to ensure actual adoption",
    ],
    idealFor: ["Companies replacing manual/spreadsheet processes", "Businesses with failed previous ERP attempts", "Growing firms ready to systematize operations"],
    faqs: [
      { question: "Which ERP systems do you implement?", answer: "We work with Odoo, Xero, SAP Business One, Microsoft Dynamics, and other industry-specific solutions. We're vendor-agnostic and recommend what's best for your needs." },
      { question: "How long does a typical implementation take?", answer: "Depending on complexity, 3-6 months from assessment to go-live. We provide a detailed timeline during the discovery phase." },
      { question: "Do you develop business processes first?", answer: "Yes — we determine business processes based on your existing operations, share best practices, and then implement the optimized processes in ERP. This is key to successful adoption." },
    ],
    caseStudy: {
      industry: "Distribution",
      challenge: "A distribution company invested PKR 5M in an ERP that nobody used — staff reverted to Excel within 3 months.",
      outcome: "We re-mapped their processes, reconfigured the ERP based on best practices, and conducted hands-on training. Adoption reached 95% within 6 weeks.",
      metric: "95% ERP adoption in 6 weeks",
    },
    relatedServices: ["accounting", "outsourcing", "data-archiving"],
    ctaText: "Fix Your ERP",
    whatsappMessage: "Hello, I need help with ERP implementation. Can we discuss?",
    seo: {
      title: "ERP Implementation & Business Process Development in Pakistan | MHFS",
      description: "ERP solutions with Odoo, Xero, SAP — implementation, business process development, and data migration by Meet Hub Financial Services.",
      keywords: ["ERP implementation Pakistan", "Odoo ERP Pakistan", "Xero accounting", "business process development"],
    },
  },

  // ── 4. Tax Consultancy ──
  {
    slug: "tax-consultancy",
    title: "Tax Compliance & Regulatory Support",
    shortTitle: "Tax Consultancy",
    icon: "FileText",
    category: "advisory",
    tagline: "Income tax, sales tax, withholding tax — filed correctly, filed on time",
    description:
      "Tax compliance is one of the most complex aspects of financial management in Pakistan. MHFS integrates tax compliance services directly into accounting and bookkeeping workflows to ensure year-round compliance.",
    problemStatement:
      "With constantly changing FBR regulations, businesses risk penalties for late or inaccurate filings. Most small businesses don't have the in-house expertise to navigate FBR requirements, resulting in overpayment, penalties, or compliance risk.",
    items: [
      { title: "Corporate Tax Return Filing", description: "Preparing and filing corporate income tax returns" },
      { title: "Sales Tax & WHT Statements", description: "Filing sales tax and withholding tax statements" },
      { title: "Compliance Calendar Management", description: "Maintaining compliance calendars for monthly and annual deadlines" },
      { title: "Tax-Accounting Reconciliation", description: "Reconciling accounting records with filed tax data" },
      { title: "SECP Annual Filings", description: "Supporting SECP annual filings and statutory returns" },
    ],
    benefits: [
      "Stay compliant year-round and avoid penalties",
      "Maintain credibility with regulators and stakeholders",
      "Tax compliance integrated directly into your accounting workflow",
      "Both individual and business tax expertise",
    ],
    idealFor: ["Businesses requiring monthly tax compliance", "Individuals needing annual tax filing", "New businesses needing tax registration guidance"],
    faqs: [
      { question: "Can you handle FBR notices and audits?", answer: "Yes, we provide full FBR audit support including documentation, representation, and resolution." },
      { question: "Do you integrate tax work with bookkeeping?", answer: "Absolutely — our tax compliance services are integrated directly into accounting and bookkeeping workflows, ensuring records are always aligned with filings." },
      { question: "What are the penalties for late filing?", answer: "Penalties vary — income tax late filing can result in PKR 40,000+ in penalties plus additional surcharge. We ensure you never face these by managing all deadlines proactively." },
    ],
    caseStudy: {
      industry: "Import/Export",
      challenge: "A mid-size importer was paying excessive taxes due to misclassified expenses across 3 years of filings.",
      outcome: "We restructured their filings, corrected misclassifications, and recovered PKR 4.2M in overpaid taxes within 6 months.",
      metric: "PKR 4.2M recovered in overpaid taxes",
    },
    relatedServices: ["accounting", "payroll", "governance-compliance"],
    ctaText: "File Your Tax Returns",
    whatsappMessage: "Hi, I need assistance with tax filing / registration. What are your rates?",
    seo: {
      title: "Tax Compliance & Regulatory Support in Pakistan | MHFS",
      description: "Corporate tax returns, sales tax, withholding tax, and FBR compliance services by Meet Hub Financial Services.",
      keywords: ["tax consultancy Pakistan", "FBR tax filing", "income tax return Pakistan", "sales tax registration"],
    },
  },

  // ── 5. Payroll Accounting & Employee Compliance (NEW) ──
  {
    slug: "payroll",
    title: "Payroll Accounting & Employee Compliance Services",
    shortTitle: "Payroll",
    icon: "Banknote",
    category: "financial",
    tagline: "Salary sheets, tax deductions, EOBI, and full payroll compliance",
    description:
      "Payroll involves more than salary calculations. In Pakistan, payroll must align with tax regulations, labor laws, and employee benefit requirements such as EOBI and social security. MHFS delivers end-to-end payroll accounting that reduces compliance risks.",
    problemStatement:
      "Payroll errors lead to employee disputes, regulatory penalties, and tax complications. Many businesses struggle with accurate tax deductions, EOBI contributions, and maintaining statutory registers — especially as labor laws evolve.",
    items: [
      { title: "Salary Sheets Preparation", description: "Preparing payroll ledgers and detailed salary sheets" },
      { title: "Income Tax Deductions", description: "Calculating income tax deductions and employee benefits accurately" },
      { title: "EOBI & Social Security", description: "Managing EOBI and social security contributions and filings" },
      { title: "Pay Slips & Statutory Registers", description: "Preparing pay slips and maintaining statutory registers" },
      { title: "ERP & Accounting Integration", description: "Integrating payroll data into ERP and accounting systems" },
    ],
    benefits: [
      "Compliant payroll processes aligned with Pakistani labor laws",
      "Accurate tax deductions and benefit calculations",
      "Protect employee rights and minimize dispute risks",
      "Seamless integration with your ERP and accounting systems",
    ],
    idealFor: ["Companies with 20+ employees", "Businesses without dedicated HR/payroll staff", "Organizations needing EOBI and social security compliance"],
    faqs: [
      { question: "Do you handle EOBI filings?", answer: "Yes, we manage EOBI and social security contributions end-to-end, including calculations, filings, and compliance tracking." },
      { question: "Can you integrate with our existing HR system?", answer: "Absolutely — we integrate payroll data into your ERP, accounting system, or HR platform to ensure everything is synchronized." },
      { question: "Do you prepare individual employee tax certificates?", answer: "Yes, we prepare salary certificates, tax deduction certificates, and all statutory documentation required by employees for their personal tax filings." },
    ],
    relatedServices: ["outsourcing", "accounting", "tax-consultancy"],
    ctaText: "Streamline Your Payroll",
    whatsappMessage: "Hi, I need payroll accounting and employee compliance services. Can you share details?",
    seo: {
      title: "Payroll Accounting & Employee Compliance Services in Pakistan | MHFS",
      description: "End-to-end payroll services — salary sheets, tax deductions, EOBI, social security, and labor law compliance by MHFS.",
      keywords: ["payroll services Pakistan", "EOBI compliance", "salary processing", "employee payroll Pakistan"],
    },
  },

  // ── 6. Data Archiving ──
  {
    slug: "data-archiving",
    title: "Data Archiving & Shredding Services",
    shortTitle: "Data Archiving",
    icon: "Archive",
    category: "specialized",
    tagline: "Cloud archiving, off-site storage, and certified destruction",
    description:
      "Data archiving is a need of the modern era. Box files with vouchers need proper storage as well as proper archiving to retrieve information in soft copy whenever required. We offer cloud-based, on-premises, and hybrid solutions.",
    problemStatement:
      "Businesses accumulate years of physical documents but rarely have the space, organization, or security protocols to manage them properly. Sensitive documents end up in unsecured storage rooms, and retrieval becomes a hours-long exercise.",
    items: [
      { title: "Cloud-Based & LAN Archiving", description: "Hard copy data archiving on cloud base as well as LAN for instant retrieval" },
      { title: "Off-Site Physical Storage", description: "Hard copy data storage services off-site with indexed retrieval" },
      { title: "Confidential Data Shredding", description: "Shredding services of confidential data with certified destruction" },
    ],
    benefits: [
      "Multiple options: cloud-based, on-premises, or hybrid archiving",
      "Instant retrieval of archived documents in digital format",
      "Compliance with document retention requirements",
      "Certified shredding with destruction certificates",
    ],
    idealFor: ["Companies with large physical archives", "Regulated industries requiring document retention", "Businesses relocating or downsizing"],
    faqs: [
      { question: "What archiving options do you offer?", answer: "We offer three options: Cloud-Based (remote storage with automatic scaling), On-Premises (physical servers with complete data control), and Hybrid (blending on-premise security with cloud flexibility)." },
      { question: "Is the shredding service certified?", answer: "Yes, we provide a Certificate of Destruction for every shredding engagement, including chain-of-custody documentation." },
    ],
    relatedServices: ["outsourcing", "erp-solutions", "fixed-asset-management"],
    ctaText: "Secure Your Documents",
    whatsappMessage: "Hi, I'd like to inquire about your data archiving services.",
    seo: {
      title: "Data Archiving & Shredding Services in Pakistan | MHFS",
      description: "Cloud-based archiving, off-site storage, and certified data shredding services by Meet Hub Financial Services.",
      keywords: ["data archiving Pakistan", "document digitization", "data shredding", "cloud archiving"],
    },
  },

  // ── 7. Governance & Compliance (renamed from Corporate Advisory) ──
  {
    slug: "governance-compliance",
    title: "Governance & Compliance (GRC)",
    shortTitle: "Governance & Compliance",
    icon: "Landmark",
    category: "advisory",
    tagline: "SECP registration, corporate governance, policy development, and Virtual CFO",
    description:
      "From company registration to governance frameworks and policy development — we provide comprehensive governance and compliance services for businesses at every stage.",
    problemStatement:
      "New companies struggle with SECP registration procedures and compliance requirements. Established companies often lack formal governance structures — no documented Rules of Business, unclear Delegation of Powers, and policies that exist only as tribal knowledge. This creates risk, inefficiency, and regulatory exposure.",
    items: [
      { title: "Company Registration with SECP", description: "Online filing for company incorporation — registration fee is half through direct electronic submission" },
      { title: "Corporate Governance", description: "Development of Rules of Business (ROB) and Delegation of Powers (DOP) frameworks" },
      { title: "Policy & Procedure Development", description: "Development of policies and procedures for core business cycles" },
      { title: "Actuarial Sourcing", description: "Support in sourcing of qualified actuarial service providers" },
      { title: "Virtual CFO Services", description: "Strategic corporate finance advisory and board-level financial oversight" },
    ],
    benefits: [
      "SECP registration at 50% reduced cost through online filing",
      "Governance frameworks that satisfy regulatory and board expectations",
      "Policies tailored to your industry and size, not generic templates",
      "Virtual CFO for strategy and investor communication",
    ],
    idealFor: ["Entrepreneurs starting new companies", "Businesses needing governance overhaul", "Companies preparing for investment or IPO"],
    faqs: [
      { question: "How long does SECP registration take?", answer: "Typically 5-10 business days from submission of complete documentation. We handle everything from name reservation to post-incorporation compliance." },
      { question: "Why is your SECP registration cheaper?", answer: "We file directly through SECP's online portal, cutting out intermediary fees. The registration fee is half compared to traditional agents." },
      { question: "What types of companies can you register?", answer: "Private Limited, Single Member, Public Limited, LLP, and Not-for-Profit companies." },
    ],
    caseStudy: {
      industry: "Tech Startup",
      challenge: "A SaaS company needed to incorporate quickly to close a seed funding round.",
      outcome: "We registered the company in 5 days, set up ROB and DOP frameworks, and had them investor-ready within 2 weeks.",
      metric: "SECP registered in 5 days",
    },
    relatedServices: ["tax-consultancy", "outsourcing", "audit-assurance"],
    ctaText: "Register Your Company",
    whatsappMessage: "Hello, I'd like to register a company with SECP. Can you guide me on the process and fees?",
    seo: {
      title: "Governance & Compliance Services in Pakistan | MHFS",
      description: "SECP registration, corporate governance, policy development, and Virtual CFO services by Meet Hub Financial Services.",
      keywords: ["SECP registration", "corporate governance Pakistan", "company registration Pakistan", "GRC services"],
    },
  },

  // ── 8. Training & Development ──
  {
    slug: "training-development",
    title: "Training & Development",
    shortTitle: "Training",
    icon: "GraduationCap",
    category: "advisory",
    tagline: "Accounting knowledge, IFRS, Excel, Companies Act 2017, and ERP training",
    description:
      "We arrange and provide training to accounts and finance department employees. From IFRS fundamentals to advanced Excel and ERP systems — practical, hands-on training customized to your team.",
    problemStatement:
      "Staff training in Pakistan is often limited to one-off workshops with no follow-up. Accountants learn theory but can't operate the ERP. Managers understand strategy but can't read a financial statement. The gap between knowledge and execution costs businesses daily.",
    items: [
      { title: "Accounting Knowledge", description: "Practical accounting fundamentals and best practices for finance teams" },
      { title: "IFRS Training", description: "International Financial Reporting Standards training for compliance" },
      { title: "Advanced Excel", description: "Pivot tables, VLOOKUP/XLOOKUP, data analysis, dashboards, and macros" },
      { title: "Companies Act 2017", description: "Understanding compliance requirements under Pakistan's Companies Act 2017" },
      { title: "Executive Presentations", description: "How to prepare professional presentations for executives and board meetings" },
      { title: "ERP Systems", description: "Hands-on training for Odoo, Xero, SAP, and other ERP platforms" },
    ],
    benefits: [
      "Hands-on, practical training — not just theory",
      "Customizable to your company's actual systems and processes",
      "On-site or virtual delivery options",
      "Covers latest regulatory requirements including Companies Act 2017",
    ],
    idealFor: ["Finance department employees", "Companies onboarding new staff", "Teams adopting new ERP systems"],
    faqs: [
      { question: "Can training be customized to our systems?", answer: "Yes — we tailor all training to use your actual ERP, chart of accounts, and real business scenarios." },
      { question: "Do you cover Companies Act 2017?", answer: "Yes, we provide dedicated training on compliance requirements under the Companies Act 2017, including reporting obligations and governance standards." },
      { question: "Do you offer virtual training?", answer: "Yes, both on-site and virtual sessions with interactive exercises and hands-on practice." },
    ],
    relatedServices: ["erp-solutions", "outsourcing", "accounting"],
    ctaText: "Train Your Team",
    whatsappMessage: "Hello, I'd like to inquire about corporate training programs.",
    seo: {
      title: "Corporate Training & Development in Pakistan | MHFS",
      description: "Training in accounting, IFRS, Excel, Companies Act 2017, and ERP systems by Meet Hub Financial Services.",
      keywords: ["corporate training Pakistan", "IFRS training", "advanced Excel training", "Companies Act 2017"],
    },
  },

  // ── 9. Internal Audit ──
  {
    slug: "internal-audit",
    title: "Internal Audit Services",
    shortTitle: "Internal Audit",
    icon: "SearchCheck",
    category: "assurance",
    tagline: "Full-fledge internal audit, pre-payment audit, and agreed-upon procedures",
    description:
      "We provide comprehensive internal audit services including full departmental audits, pre-payment verification, and agreed-upon procedures — ensuring controls are effective and risks are managed.",
    problemStatement:
      "Many Pakistani companies treat internal audit as a box-ticking exercise — or skip it entirely until an external auditor raises concerns. Without proactive internal audit, control weaknesses go undetected and fraud risk increases.",
    items: [
      { title: "Full Internal Audit", description: "Full-fledge internal audit of all departments — risk-based, compliance, and operational" },
      { title: "Pre-Payment Audit", description: "Review and verify payments before they are processed to prevent errors and fraud" },
      { title: "Agreed-Upon Procedures", description: "Performing specific procedures as agreed with management on targeted areas" },
    ],
    benefits: [
      "Independent, objective assessment of all departments",
      "Pre-payment audit catches errors before money leaves the account",
      "Agreed-upon procedures for targeted risk areas",
      "Actionable findings with practical recommendations",
    ],
    idealFor: ["Companies without an internal audit function", "Organizations needing pre-payment controls", "Businesses preparing for external audit"],
    faqs: [
      { question: "What are agreed-upon procedures?", answer: "These are specific audit procedures agreed between MHFS and your management, targeting particular areas of concern — such as cash handling, procurement, or expense claims." },
      { question: "How does pre-payment audit work?", answer: "Our team reviews supporting documentation for payments above a defined threshold before they are released, catching duplicate payments, unauthorized expenses, and documentation gaps." },
    ],
    relatedServices: ["audit-assurance", "accounting", "fixed-asset-management"],
    ctaText: "Strengthen Your Controls",
    whatsappMessage: "Hi, I'd like to discuss internal audit services for my organization.",
    seo: {
      title: "Internal Audit Services in Pakistan | MHFS",
      description: "Full internal audit, pre-payment audit, and agreed-upon procedures by Meet Hub Financial Services.",
      keywords: ["internal audit Pakistan", "pre-payment audit", "agreed upon procedures", "operational audit"],
    },
  },

  // ── 10. Audit & Assurance ──
  {
    slug: "audit-assurance",
    title: "Audit & Assurance",
    shortTitle: "Audit & Assurance",
    icon: "ShieldCheck",
    category: "assurance",
    tagline: "Support in sourcing of external auditors and liaison",
    description:
      "We provide support in sourcing of external auditors matched to your size and industry, then manage the entire audit process as your liaison — reducing management burden significantly.",
    problemStatement:
      "Finding a qualified, appropriately-sized external auditor in Pakistan is challenging — especially for mid-tier companies. Once engaged, managing the audit process internally consumes significant management time.",
    items: [
      { title: "External Audit Sourcing", description: "Support in sourcing of external auditors based on your size, industry, and requirements" },
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
      { question: "Can you recommend an audit firm for my industry?", answer: "Yes — we maintain relationships with audit firms across Pakistan specializing in various sectors." },
      { question: "What does the liaison service include?", answer: "We handle all communication with auditors, prepare requested documentation, coordinate schedules, and manage the entire process." },
    ],
    relatedServices: ["internal-audit", "accounting", "tax-consultancy"],
    ctaText: "Find the Right Auditor",
    whatsappMessage: "Hi, I need audit & assurance services. Can you share your approach?",
    seo: {
      title: "Audit & Assurance Services in Pakistan | MHFS",
      description: "External audit sourcing and audit liaison services by Meet Hub Financial Services.",
      keywords: ["audit services Pakistan", "external audit sourcing", "audit liaison"],
    },
  },

  // ── 11. Fixed Asset Management ──
  {
    slug: "fixed-asset-management",
    title: "Fixed Asset Management",
    shortTitle: "Fixed Assets",
    icon: "BarChart3",
    category: "assurance",
    tagline: "Asset verification, tagging, FAR maintenance, reconciliation, and depreciation",
    description:
      "Complete fixed asset lifecycle management — from physical verification and tagging to register maintenance, reconciliation, and depreciation tracking for accurate financial reporting.",
    problemStatement:
      "Fixed assets represent a major investment on the balance sheet, yet many companies have incomplete registers, untagged assets, and year-end counts that are chaotic and inaccurate. This leads to ghost assets, incorrect depreciation, and audit qualifications.",
    items: [
      { title: "Physical Asset Verification & Tagging", description: "Physical verification and tagging of all assets with unique identifiers" },
      { title: "FAR Maintenance", description: "Fixed Asset Register (FAR) maintenance with complete lifecycle tracking" },
      { title: "Asset Reconciliation", description: "Reconciling physical assets with book values and resolving discrepancies" },
      { title: "Depreciation Tracking", description: "Calculating and tracking depreciation for accurate financial reporting and tax compliance" },
    ],
    benefits: [
      "Eliminate ghost assets and bring your register up to date",
      "Accurate depreciation for financial reporting and tax compliance",
      "Professional count procedures that satisfy auditor requirements",
      "Clear reconciliation between physical assets and book values",
    ],
    idealFor: ["Companies with large asset bases", "Organizations preparing for audit", "Businesses needing accurate depreciation calculations"],
    faqs: [
      { question: "Do you maintain the Fixed Asset Register?", answer: "Yes — we provide full FAR maintenance including additions, disposals, transfers, depreciation calculations, and periodic reconciliation." },
      { question: "Can you integrate with our ERP asset module?", answer: "Yes — we work with ERP asset modules, Excel-based registers, and dedicated asset management systems." },
    ],
    relatedServices: ["internal-audit", "accounting", "erp-solutions"],
    ctaText: "Get Your Assets Counted",
    whatsappMessage: "Hi, I need help with fixed asset management. Can we discuss?",
    seo: {
      title: "Fixed Asset Management Services in Pakistan | MHFS",
      description: "Asset verification, tagging, FAR maintenance, reconciliation, and depreciation tracking by MHFS.",
      keywords: ["fixed asset management Pakistan", "asset tagging", "FAR maintenance", "depreciation tracking"],
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

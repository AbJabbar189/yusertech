/**
 * YUSERTECH Centralized Configuration
 * 
 * To rebrand or update business information, edit the values in this file.
 * All brand colors, contact endpoints, service descriptions, product data,
 * and portfolio entries are driven from this single source of truth.
 */

export interface ProductFeature {
  title: string;
  description: string;
  status: 'implemented' | 'planned' | 'prototype';
}

export interface ProductItem {
  id: string;
  slug: string;
  name: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  status: 'Available' | 'In Development' | 'Coming Soon';
  badgeText: string;
  targetAudience: string[];
  problemsSolved: string[];
  keyFeatures: ProductFeature[];
  deploymentType: 'Desktop & Offline-Ready' | 'Cloud Web-Based' | 'Hybrid (Local + Cloud Sync Planned)';
  specs: {
    platform: string;
    offlineSupport: string;
    database: string;
    dataExport: string;
    licenseModel: string;
  };
  faqs: { question: string; answer: string }[];
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  problemSolved: string;
  targetAudience: string;
  benefits: string[];
  deliverables: string[];
  nextStep: string;
  iconName: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  type: 'Internal Product Prototype' | 'Client Web Solution' | 'Architecture Blueprint';
  problemStatement: string;
  solution: string;
  technologies: string[];
  status: 'In Active Development' | 'Prototype Ready' | 'Production Deployed';
  highlights: string[];
  demoType?: 'interactive-preview' | 'case-study';
}

export interface FaqItem {
  category: 'General' | 'Services' | 'Products' | 'Process & Pricing';
  question: string;
  answer: string;
}

export const siteConfig = {
  brand: {
    name: 'YUSERTECH',
    legalName: 'YUSERTECH Solutions (Working Brand Name)',
    tagline: 'Technology That Works for Your Business.',
    category: 'Software Development & Web Solutions Agency',
    missionStatement:
      'We build practical, reliable digital solutions that solve everyday operating bottlenecks for businesses, retailers, bakeries, educational institutions, and growing organizations.',
    philosophy:
      'We believe in maintainable software over fleeting tech fads, clear contracts without hidden complexity, and genuine business value over bloated decorative code.',
    foundedNote: 'Independent Software Solutions Agency',
  },

  colors: {
    forestGreen: '#123B2A',
    warmGold: '#D6B46A',
    offWhite: '#F7F5EF',
    charcoal: '#202722',
    white: '#FFFFFF',
    mutedGray: '#6B746E',
  },

  // Contact & Social channels (Clearly marked placeholders for unsupplied values)
  contact: {
    email: 'contact@yusertech.com', // Placeholder: Update when official inbox is established
    phone: '+1 (555) 019-2834', // Placeholder: Update when official line is assigned
    phoneDisplay: '+1 (555) 019-2834 (Inquiries)',
    whatsapp: '+1 (555) 019-2834', // Placeholder: Format with country code for wa.me link
    whatsappMessageDefault: 'Hello YUSERTECH, I would like to discuss a software project for my business.',
    address: 'Business Solutions Hub — Remote & On-Site Consultation (Address on file upon agreement)',
    officeHours: 'Monday – Friday, 9:00 AM – 6:00 PM (UTC+5 / Regional Standard)',
    isLiveBackendConfigured: false, // Set to true when integrating a REST or serverless mail gateway
  },

  socials: [
    { name: 'GitHub', url: 'https://github.com/yusertech', isConfigured: true },
    { name: 'LinkedIn', url: 'https://linkedin.com/company/yusertech', isConfigured: true },
    { name: 'WhatsApp', url: 'https://wa.me/15550192834', isConfigured: false },
  ],

  seo: {
    siteUrl: 'https://yusertech.com', // Configure actual production domain here
    defaultTitle: 'YUSERTECH — Technology That Works for Your Business',
    titleTemplate: '%s | YUSERTECH',
    defaultDescription:
      'YUSERTECH designs and builds robust business websites, custom web applications, POS software, and organizational management systems.',
    author: 'YUSERTECH Software Solutions',
    twitterHandle: '@yusertech',
  },

  services: [
    {
      id: 'website-development',
      title: 'Website Development',
      shortDescription:
        'Fast, accessible, and high-converting business websites built for clarity, credibility, and organic search performance.',
      problemSolved:
        'Many businesses struggle with outdated templates, slow loading speeds, broken mobile layouts, and websites that fail to convert visitors into inquiries.',
      targetAudience:
        'Service providers, retail businesses, growing corporate organizations, and institutions seeking a reputable digital front door.',
      benefits: [
        'Mobile-first responsive architecture tested on smartphones, tablets, and desktops.',
        'Semantic HTML and structured technical SEO fundamentals.',
        'Zero bloat: fast load speeds that retain visitors and reduce bounce rates.',
        'Clean typography and layout aligned with your brand positioning.',
      ],
      deliverables: [
        'Custom business or corporate website',
        'High-converting landing page',
        'Website redesign and modernization',
        'Cross-browser responsive testing report',
        'Basic SEO integration and Google Search Console readiness',
      ],
      nextStep: 'Request a website consultation to review your current site or project specifications.',
      iconName: 'Globe',
    },
    {
      id: 'web-application-development',
      title: 'Web Application Development',
      shortDescription:
        'Browser-based internal systems, customer portals, and administrative tools tailored to your operational workflows.',
      problemSolved:
        'Spreadsheet sprawl, manual record duplicate entries, and lack of central visibility across team operations.',
      targetAudience:
        'Companies outgrowing standard spreadsheets who need custom dashboards, role-based workflows, and data control.',
      benefits: [
        'Secure multi-user permissions (Admins, Managers, Staff).',
        'Centralized data storage with structured audit trails.',
        'Intuitive dashboards presenting core business metrics at a glance.',
        'Automated document and report generation (PDF, CSV, Excel).',
      ],
      deliverables: [
        'Custom web dashboard architecture',
        'Administrative system & role management',
        'Data-entry workflows with validation',
        'REST / GraphQL API integration',
        'Deployment on cloud or private server infrastructure',
      ],
      nextStep: 'Schedule a workflow discovery session to map your business processes.',
      iconName: 'LayoutGrid',
    },
    {
      id: 'retail-pos-software',
      title: 'Retail POS Solutions',
      shortDescription:
        'Streamlined sales billing, barcode scanning, stock tracking, and daily cash reconciliation for retail merchants.',
      problemSolved:
        'Slow counter checkout times, manual stock discrepancies, lost sales receipts, and unrecorded inventory shrinkage.',
      targetAudience:
        'Retail store owners, mini-marts, hardware shops, clothing boutiques, and general merchandise stores.',
      benefits: [
        'Fast thermal receipt printing and barcode lookup.',
        'Accurate real-time inventory deduction with low-stock alerts.',
        'Daily cashier shift closing and cash drawer reconciliation.',
        'Offline resilience: continue sales even during internet outages.',
      ],
      deliverables: [
        'POS checkout counter application',
        'Product & SKU management module',
        'Inventory intake and supplier record tracking',
        'Daily, weekly, and monthly sales reporting',
        'Receipt printer & barcode scanner configuration guide',
      ],
      nextStep: 'Review our Retail POS product roadmap or request a tailored feature demo.',
      iconName: 'ShoppingBag',
    },
    {
      id: 'bakery-pos-software',
      title: 'Bakery POS Solutions',
      shortDescription:
        'Purpose-built management software designed for bakeries, pastry shops, and confectioneries with custom order tracking.',
      problemSolved:
        'Handling perishable item shelf life, advance custom cake bookings, ingredient costs, and busy morning/evening rush hours.',
      targetAudience:
        'Artisan bakeries, patisseries, cake studios, sweet shops, and multi-counter bakery outlets.',
      benefits: [
        'Advance custom order scheduling with advance deposit tracking.',
        'Quick touch-screen sales screen for high-frequency pastry items.',
        'Batch waste tracking and perishable expiry logs.',
        'Daily production summary reports for the baking team.',
      ],
      deliverables: [
        'Bakery point-of-sale terminal layout',
        'Custom cake & pre-order booking manager',
        'Expiry & wastage registration module',
        'End-of-day sales and payment breakdown',
        'Staff shifts and cash handover module',
      ],
      nextStep: 'Explore the Bakery POS specifications and request early access testing.',
      iconName: 'UtensilsCrossed',
    },
    {
      id: 'madrasa-management-system',
      title: 'Madrasa Management System',
      shortDescription:
        'Comprehensive, dignified administrative software for Islamic seminaries, madrasas, and faith-based schools.',
      problemSolved:
        'Disorganized student paper registers, untracked fee payments, manual exam score compilations, and delayed parent notices.',
      targetAudience:
        'Madrasa principals, Islamic boarding institutions, weekend Quranic schools, and community educational centers.',
      benefits: [
        'Respectful, organized digital records for Hifz, Nazira, and Alimiyyah departments.',
        'Clear fee receipt generation with pending dues tracking.',
        'Daily student & teacher attendance registers.',
        'Multi-lingual support readiness (Arabic / Urdu / English script considerations).',
      ],
      deliverables: [
        'Student enrollment & biodata management module',
        'Fee collection register and voucher printing',
        'Exam mark-sheet generator and report cards',
        'Teacher assignment & class schedules',
        'Data privacy safeguard configuration for sensitive records',
      ],
      nextStep: 'Contact us for a demonstration tailored to your madrasa’s structural requirements.',
      iconName: 'GraduationCap',
    },
    {
      id: 'custom-software-development',
      title: 'Custom Software Development',
      shortDescription:
        'Tailored software engineered from scratch to match your unique operational model when off-the-shelf tools fall short.',
      problemSolved:
        'Off-the-shelf software packages often force businesses into rigid workflows, charge expensive recurring seats, or lack critical regional integrations.',
      targetAudience:
        'Enterprises, wholesalers, logistics operators, and unique business models requiring tailored software architecture.',
      benefits: [
        'Software built strictly around your company’s real workflow.',
        'No per-user licensing fees for your own proprietary code.',
        'Direct integration with your existing databases, hardware, or external APIs.',
        'Full ownership of project deliverables and configuration.',
      ],
      deliverables: [
        'Requirements specifications document and architecture plan',
        'Clean, documented source code repository',
        'Automated database migrations and setup scripts',
        'User guide and administrative handover documentation',
      ],
      nextStep: 'Book an architectural feasibility review with our lead engineer.',
      iconName: 'CodeXml',
    },
    {
      id: 'maintenance-and-support',
      title: 'Maintenance and Support',
      shortDescription:
        'Proactive monitoring, security patching, dependency upgrades, bug remediation, and continuous feature enhancements.',
      problemSolved:
        'Websites and applications left unmaintained become vulnerable to exploits, break when server runtimes upgrade, or slow down over time.',
      targetAudience:
        'Organizations running critical business software that cannot afford downtime or unaddressed errors.',
      benefits: [
        'Regular scheduled security patches and framework updates.',
        'Guaranteed response windows for critical operational incidents.',
        'Routine database and system backup verification.',
        'Incremental feature improvements as your business expands.',
      ],
      deliverables: [
        'Monthly or quarterly health audits',
        'Bug triage and code hotfixes',
        'Backup verification and disaster recovery checks',
        'Performance optimization and index tuning',
      ],
      nextStep: 'Discuss a structured monthly maintenance agreement for your software.',
      iconName: 'ShieldCheck',
    },
  ] as ServiceItem[],

  products: [
    {
      id: 'retail-pos',
      slug: 'retail-pos',
      name: 'YUSER Retail POS',
      category: 'Point-of-Sale & Inventory',
      shortDescription:
        'A resilient counter billing and stock tracking system engineered for small and medium retail shops with offline resilience.',
      fullDescription:
        'YUSER Retail POS is built to eliminate checkout delays and inventory blind spots. Designed for high-frequency counter transactions, it operates smoothly even during local network dropouts, keeping your retail store running without pause.',
      status: 'In Development',
      badgeText: 'Active Development — Beta Previews Available',
      targetAudience: [
        'Mini-markets and grocery stores',
        'Hardware & electrical stores',
        'Clothing & apparel boutiques',
        'Stationery & gift shops',
      ],
      problemsSolved: [
        'Inability to bill customers when internet connectivity fails.',
        'Unclear inventory count leading to stockouts or overpurchasing.',
        'Complicated billing software that requires weeks of cashier training.',
        'Lack of transparent end-of-day register reconciliation.',
      ],
      keyFeatures: [
        {
          title: 'Rapid Barcode & Manual Item Billing',
          description: 'Instant item lookup via USB/wireless barcode scanners or touch search.',
          status: 'implemented',
        },
        {
          title: 'Offline-First Local Storage Engine',
          description: 'Sales operate on local SQLite/IndexedDB storage so cashiers never stop during disconnections.',
          status: 'implemented',
        },
        {
          title: 'Inventory & Low Stock Warning',
          description: 'Automatic stock deduction upon sale completion with customizable threshold alerts.',
          status: 'implemented',
        },
        {
          title: 'Cashier Shift Closing & Reports',
          description: 'Tracks opening balance, cash in drawer, electronic payments, and variance summaries.',
          status: 'implemented',
        },
        {
          title: 'Cloud Multi-Store Synchronization',
          description: 'Centralized headquarters inventory sync across multiple shop branches.',
          status: 'planned',
        },
        {
          title: 'Customer Loyalty & Credit Ledger',
          description: 'Customer credit ledger tracking (Khata) and recurring customer loyalty discounts.',
          status: 'planned',
        },
      ],
      deploymentType: 'Desktop & Offline-Ready',
      specs: {
        platform: 'Windows Desktop / Cross-Platform Web Terminal',
        offlineSupport: 'Full offline operation supported natively',
        database: 'Local SQLite / PostgreSQL for centralized networks',
        dataExport: 'CSV, Excel, and PDF receipt formats',
        licenseModel: 'One-time setup with optional support plan',
      },
      faqs: [
        {
          question: 'Does this software work if our store loses internet?',
          answer:
            'Yes. The core billing terminal is engineered to execute sales locally without an active internet connection. Transactions are stored on the local device.',
        },
        {
          question: 'What hardware do we need?',
          answer:
            'A standard Windows PC or POS terminal, a USB or Bluetooth thermal receipt printer (58mm or 80mm), and a standard barcode scanner.',
        },
        {
          question: 'Is multi-branch sync ready right now?',
          answer:
            'Single-store offline billing is functional in our current build. Multi-branch cloud sync is on our development roadmap and is clearly labeled as a planned feature.',
        },
      ],
    },
    {
      id: 'bakery-pos',
      slug: 'bakery-pos',
      name: 'YUSER Bakery POS',
      category: 'Food & Bakery Management',
      shortDescription:
        'Specialized point-of-sale built for bakeries, pastry kitchens, and sweet shops with advance cake booking workflows.',
      fullDescription:
        'Bakeries face unique operational challenges that standard retail POS software misses: fast morning counter rushes, perishable item expiry, and custom birthday or wedding cake orders with advance booking deposits. YUSER Bakery POS is crafted specifically for these workflows.',
      status: 'In Development',
      badgeText: 'Active Development — Specification Phase',
      targetAudience: [
        'Independent neighborhood bakeries',
        'Artisan pastry shops & patisseries',
        'Custom cake studios',
        'Confectioneries and dessert counters',
      ],
      problemsSolved: [
        'Lost paper slips for advance custom cake orders.',
        'High food wastage due to untracked daily leftovers and shelf-life expiration.',
        'Chaos during morning and evening rush hours with slow touchscreen systems.',
        'Mismatches between kitchen baking queues and front-counter orders.',
      ],
      keyFeatures: [
        {
          title: 'Touch-Optimized Quick Counter Sale',
          description: 'Large item touch tiles organized by fresh bread, pastries, beverages, and packaged goods.',
          status: 'implemented',
        },
        {
          title: 'Advance Custom Cake Order Manager',
          description: 'Record delivery dates, cake weight, flavor, custom inscriptions, and advance deposits.',
          status: 'implemented',
        },
        {
          title: 'Daily Wastage & Spoilage Logging',
          description: 'Log unsold daily batches to pinpoint production over-estimation and save ingredient costs.',
          status: 'implemented',
        },
        {
          title: 'Kitchen Production Schedule View',
          description: 'Generates daily morning baking lists based on advance orders and counter quotas.',
          status: 'planned',
        },
        {
          title: 'Recipe & Ingredient Costing (BOM)',
          description: 'Bill of materials calculation to measure exact flour, butter, and sugar costs per batch.',
          status: 'planned',
        },
      ],
      deploymentType: 'Desktop & Offline-Ready',
      specs: {
        platform: 'Touchscreen Windows / Android Tablet / Web Terminal',
        offlineSupport: 'Full offline local sales capability',
        database: 'Local transactional database with daily export',
        dataExport: 'Thermal slips, PDF booking receipts, Excel reports',
        licenseModel: 'Per-store license with optional maintenance',
      },
      faqs: [
        {
          question: 'Can we print custom order tokens for the kitchen team?',
          answer:
            'Yes. The advance booking module formats a dedicated order slip for the bakers detailing delivery time, size, and custom decorations.',
        },
        {
          question: 'Can we handle split payments (e.g. part cash, part card)?',
          answer:
            'Yes. The payment window supports split payment tenders as well as tracking advance deposits against remaining balance on pickup.',
        },
      ],
    },
    {
      id: 'madrasa-management',
      slug: 'madrasa-management',
      name: 'YUSER Madrasa Management',
      category: 'Institutional & Education',
      shortDescription:
        'A comprehensive, dignified management platform for Islamic seminaries, madrasas, and Quranic schools.',
      fullDescription:
        'Managing a madrasa involves administrative nuances distinct from standard schools: boarding records, Quranic memorization (Hifz) tracking, Dar-ul-Iqama management, transparent donation/zakat tracking, and semester examinations. This system organizes these operations respectfully and securely.',
      status: 'Coming Soon',
      badgeText: 'Planned Architecture — Research & Design Phase',
      targetAudience: [
        'Residential Islamic Seminaries (Madaris Islamiyyah)',
        'Community Quranic Hifz and Nazira centers',
        'Islamic weekend schools and academies',
        'Charitable educational trusts',
      ],
      problemsSolved: [
        'Paper register degradation and lost historical student records.',
        'Lack of transparent fee and donation voucher records.',
        'Time-consuming manual calculation of exam report cards.',
        'Difficulty tracking student hostel boarding and guardian permissions.',
      ],
      keyFeatures: [
        {
          title: 'Student Biodata & Department Enrollment',
          description: 'Track admissions across Hifz, Tajweed, Alimiyyah, and Primary Education divisions.',
          status: 'prototype',
        },
        {
          title: 'Monthly Fee & Donation Ledger',
          description: 'Generate standardized fee vouchers, receipt printouts, and fee exemption tracking.',
          status: 'prototype',
        },
        {
          title: 'Daily Attendance & Absentee Alerts',
          description: 'Morning and evening attendance records for day students and residential boarders.',
          status: 'prototype',
        },
        {
          title: 'Examination Mark-sheet & Rank Generator',
          description: 'Automatic grading, division classification (Mumtaz, Jayyid Jiddan, Jayyid), and report cards.',
          status: 'planned',
        },
        {
          title: 'Hostel & Meal Pass Management',
          description: 'Boarding room allocations, guardian leave passes, and mess hall tracking.',
          status: 'planned',
        },
      ],
      deploymentType: 'Cloud Web-Based',
      specs: {
        platform: 'Secure Web Application (Browser-Based, Responsive)',
        offlineSupport: 'Exportable offline PDF registers & backups',
        database: 'Encrypted relational database with automated backups',
        dataExport: 'PDF Mark-sheets, Student Cards, Excel Registers',
        licenseModel: 'Affordable annual institutional license with setup',
      },
      faqs: [
        {
          question: 'Can the system accommodate multi-lingual text?',
          answer:
            'Yes. The schema is built with UTF-8 support to handle Arabic, Urdu, and English names, course titles, and grading descriptions.',
        },
        {
          question: 'How is student data kept secure?',
          answer:
            'The system enforces strict role-based access control. Only authorized administrators and class teachers can view specific student contact and family records.',
        },
      ],
    },
  ] as ProductItem[],

  portfolio: [
    {
      id: 'yuser-pos-prototype',
      title: 'YUSER Retail POS Architecture & Desktop Shell',
      category: 'Desktop & POS Software',
      type: 'Internal Product Prototype',
      problemStatement:
        'Retailers in regional markets suffer revenue losses and customer dissatisfaction whenever internet drops cause cloud POS applications to freeze.',
      solution:
        'Engineered an offline-first transactional engine using local structured storage, instant barcode scanner hooks, and thermal receipt print drivers with queue sync.',
      technologies: ['TypeScript', 'React', 'Local Database Engine', 'Tailwind CSS', 'Thermal Print Protocol'],
      status: 'Prototype Ready',
      highlights: [
        'Sub-100ms item lookup across 10,000+ SKU test dataset',
        'Zero cloud dependency for counter sales execution',
        'Automatic receipt formatting for standard 58mm/80mm ESC/POS hardware',
      ],
      demoType: 'interactive-preview',
    },
    {
      id: 'corporate-logistics-portal',
      title: 'Supply Chain Dispatch & Consignment Dashboard',
      category: 'Web Application Development',
      type: 'Architecture Blueprint',
      problemStatement:
        'A mid-sized freight dispatch service relied on fragmented WhatsApp groups and manual Excel spreadsheets, causing missing delivery notes and delayed invoices.',
      solution:
        'Designed an administrative web portal featuring consignment tracking, driver manifest generation, status lifecycles, and automated PDF invoice generation.',
      technologies: ['React', 'Node.js Architecture', 'PostgreSQL Schema', 'Tailwind CSS', 'PDF Generation'],
      status: 'Prototype Ready',
      highlights: [
        'Centralized consignment tracking from booking to POD (Proof of Delivery)',
        'Role-gated dispatch views for administrators, desk agents, and accounting',
        'Exportable transit logs for monthly customer audits',
      ],
      demoType: 'case-study',
    },
    {
      id: 'commercial-business-showcase',
      title: 'Precision Engineering Agency Corporate Website',
      category: 'Website Development',
      type: 'Client Web Solution',
      problemStatement:
        'An industrial fabrication agency needed a credible digital presence to qualify for municipal and corporate B2B tenders.',
      solution:
        'Delivered a lightweight, semantic corporate website with accessible technical service catalogs, project specification sheets, and an inquiry routing pipeline.',
      technologies: ['Modern Web Standards', 'Semantic HTML5', 'Tailwind CSS', 'Technical SEO', 'Schema.org'],
      status: 'Production Deployed',
      highlights: [
        'Achieved 99+ mobile performance score on Google Lighthouse',
        'Semantic JSON-LD organizational structured data markup',
        'B2B RFP qualification form with document attachment guidelines',
      ],
      demoType: 'case-study',
    },
  ] as PortfolioItem[],

  faqs: [
    {
      category: 'General',
      question: 'What does YUSERTECH do?',
      answer:
        'YUSERTECH is a software development and web solutions agency. We build professional business websites, custom web applications, point-of-sale software for retail stores and bakeries, and management systems for institutions like madrasas.',
    },
    {
      category: 'General',
      question: 'How do you handle client communication during projects?',
      answer:
        'We work through structured milestones with clear written deliverables. You receive direct access to the technical lead building your project, scheduled progress reviews, and transparent staging environments where you can test features as they are built.',
    },
    {
      category: 'Services',
      question: 'What is your process for website development?',
      answer:
        'Our process follows four straightforward stages: (1) Discovery & Requirements Gathering, (2) UI/UX Design & Content Architecture, (3) Clean Coding & Responsive Testing across mobile/desktop, and (4) Launch, SEO setup, and Handover.',
    },
    {
      category: 'Services',
      question: 'Do we own the website and source code once completed?',
      answer:
        'Yes. For custom website and bespoke software projects, full ownership of the deliverables, configuration, and documentation is transferred to you upon project sign-off and final settlement.',
    },
    {
      category: 'Products',
      question: 'Are your POS software products available right now?',
      answer:
        'Our software products are currently in active development and prototyping phases. We do not make false claims of instant out-of-the-box availability. Interested business owners can review our prototypes, explore feature roadmaps, and request early pilot testing.',
    },
    {
      category: 'Products',
      question: 'What is the difference between your online and offline software?',
      answer:
        'Offline software (such as our POS counter billing) runs locally on your PC so sales continue without internet. Cloud web applications run in a modern browser and can be accessed from any location. We never claim offline and online versions sync automatically unless that capability is specifically built and verified.',
    },
    {
      category: 'Process & Pricing',
      question: 'How are project costs calculated?',
      answer:
        'We price projects based on clearly scoped requirements rather than vague ballpark estimates. After reviewing your requirements, we provide an itemized proposal detailing scope, milestone deliverables, timeline, and fixed costs. We do not make arbitrary pricing promises without understanding your needs.',
    },
    {
      category: 'Process & Pricing',
      question: 'What ongoing maintenance and support do you offer?',
      answer:
        'We provide structured monthly or quarterly maintenance packages covering security updates, server monitoring, bug fixes, automated backups, and incremental feature updates.',
    },
  ] as FaqItem[],

  processSteps: [
    {
      step: '01',
      title: 'Discovery & Scope Mapping',
      description:
        'We analyze your actual business bottlenecks, technical requirements, and end-user workflows before writing a single line of code.',
    },
    {
      step: '02',
      title: 'Architecture & UX Design',
      description:
        'We create clean page structures, data schemas, and user interfaces focused on speed, readability, and business utility.',
    },
    {
      step: '03',
      title: 'Engineered Development',
      description:
        'We build maintainable, responsive code following web standards, accessible design patterns, and robust error handling.',
    },
    {
      step: '04',
      title: 'Rigorous Testing & Launch',
      description:
        'We verify cross-browser performance, mobile responsiveness, form validation, and technical SEO before deploying to production.',
    },
    {
      step: '05',
      title: 'Handover & Support',
      description:
        'We provide complete documentation, staff guidance, and ongoing maintenance to ensure long-term stability.',
    },
  ],

  whyChooseUs: [
    {
      title: 'Practical Business Focus',
      description:
        'We build software that solves operational headaches and supports client acquisition, not decorative fluff or unnecessary complexity.',
    },
    {
      title: 'Strict Honesty & Integrity',
      description:
        'No inflated team numbers, no fake client reviews, no made-up statistics, and no false promises about software readiness.',
    },
    {
      title: 'Maintainable Architecture',
      description:
        'Clean, modular code with centralized configuration that your team or future developers can easily adapt and extend.',
    },
    {
      title: 'Transparent Pricing & Milestones',
      description:
        'Clear deliverables, itemized milestones, and regular progress reports with zero surprise charges.',
    },
  ],
};

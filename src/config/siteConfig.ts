/**
 * YUSERTECH Centralized Configuration
 * 
 * Single source of truth for brand, founders, contact channels,
 * services, products, and operational parameters.
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
  deploymentType: string;
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
    name: 'FAYJEXTECH',
    legalName: 'FAYJEXTECH Software & IT Solutions',
    tagline: 'Your Ideas. Our Technology.',
    category: 'Software Development & Business Technology Agency',
    missionStatement:
      'FAYJEXTECH brings your ideas to reality through cutting-edge technology: custom POS software, business management systems, workflow automation, and high-performance web applications built for Pakistani businesses and beyond.',
    philosophy:
      'Your Ideas. Our Technology. We believe in crafting robust, reliable software and PC hardware-ready solutions that solve actual business challenges with zero recurring subscription burdens.',
    locationSummary: 'Based in Orangi Town, Karachi (Remote & On-Site Client Consultations Across Karachi)',
  },

  founders: [
    {
      name: 'Fayyaz Khan',
      role: 'Founder',
      phone: '0342 2643761',
      phoneClean: '923422643761',
      whatsappUrl: 'https://wa.me/923422643761?text=Salam%20Fayyaz%20bhai%2C%20mujhe%20FAYJEXTECH%20se%20software%20k%20baare%20mein%20baat%20karni%20hai.',
      bio: 'Visionary leadership, project scoping, client strategy, and business solution architecture.',
    },
    {
      name: 'Abdul Jabbar',
      role: 'Co-Founder',
      phone: '0346 7366879',
      phoneClean: '923467366879',
      whatsappUrl: 'https://wa.me/923467366879?text=Salam%20Abdul%20Jabbar%20bhai%2C%20mujhe%20FAYJEXTECH%20se%20software%20k%20baare%20mein%20baat%20karni%20hai.',
      bio: 'Technical development, system engineering, POS software customization, PC hardware setup, and workflow automation.',
    },
  ],

  colors: {
    primaryBlue: '#0056D2',
    primaryBlueDark: '#003E9A',
    emeraldGreen: '#00B050',
    emeraldGreenDark: '#00873D',
    cyanAccent: '#00C4FF',
    offWhite: '#F8FAFC',
    charcoal: '#0F172A',
    white: '#FFFFFF',
    mutedGray: '#64748B',
  },

  contact: {
    email: 'contact@fayjextech.com',
    primaryPhone: '0346 7366879 (Abdul Jabbar) / 0342 2643761 (Fayyaz Khan)',
    abdulJabbarPhone: '0346 7366879',
    fayyazKhanPhone: '0342 2643761',
    address: 'Orangi Town, Karachi, Pakistan (Currently Remote & On-Site Client Operations; Physical Office Coming Soon)',
    officeHours: 'Monday – Thursday & Saturday: 9:00 AM – 5:00 PM (PKT)',
    offDays: 'Friday & Sunday: Closed (Jumma & Itwar Off)',
    whatsapp: '923467366879',
    whatsappMessageDefault: 'Salam FAYJEXTECH, mujhe apne business k liye software / PC setup / website k baare mein baat karni hai.',
    isLiveBackendConfigured: false,
  },

  socials: [
    { name: 'WhatsApp (Abdul Jabbar)', url: 'https://wa.me/923467366879', isConfigured: true },
    { name: 'WhatsApp (Fayyaz Khan)', url: 'https://wa.me/923422643761', isConfigured: true },
    { name: 'GitHub', url: 'https://github.com/AbJabbar189/yusertech', isConfigured: true },
  ],

  seo: {
    siteUrl: 'https://abjabbar189.github.io/yusertech',
    defaultTitle: 'FAYJEXTECH — Your Ideas. Our Technology.',
    titleTemplate: '%s | FAYJEXTECH',
    defaultDescription:
      'Founded by Fayyaz Khan & Abdul Jabbar. We build custom POS software for all business types, PC setups, management systems, workflow automation, and websites.',
    author: 'FAYJEXTECH (Fayyaz Khan & Abdul Jabbar)',
  },

  services: [
    {
      id: 'custom-pos-systems',
      title: 'Custom POS Systems (All Business Types)',
      shortDescription:
        'Custom point-of-sale software tailored for your exact trade: Retail Stores, Mini-Marts, Bakeries, Restaurants, Pharmacies, Hardware, and Wholesalers.',
      problemSolved:
        'Standard off-the-shelf POS software either forces unnecessary features, crashes when internet drops, or charges expensive monthly fees without local hardware support.',
      targetAudience:
        'Retail shops, grocery marts, bakeries, sweet shops, cafes, wholesale distributors, and independent traders.',
      benefits: [
        'Works completely offline: Cashiers never stop during power or internet outages.',
        'Thermal receipt printing (58mm/80mm), barcode scanning, and electronic cash drawer triggers.',
        'Accurate real-time inventory deduction with low-stock alerts.',
        'Custom order workflows (e.g. advance cake bookings for bakeries, prescription tags for pharmacies, unit splits for wholesalers).',
      ],
      deliverables: [
        'Custom POS software installed on your PC or touch terminal',
        'Item catalog setup and barcode label configuration',
        'Cashier shift closing and daily cash reconciliation reports',
        'Staff training and on-site testing in Karachi',
      ],
      nextStep: 'Contact Abdul Jabbar (0346-7366879) or Fayyaz Khan (0342-2643761) to demo a POS customized for your shop.',
      iconName: 'ShoppingBag',
    },
    {
      id: 'management-systems',
      title: 'Business Management Systems & ERP',
      shortDescription:
        'Comprehensive administrative systems for Madrasas, Schools, Warehouses, Accounts & Ledgers, and Multi-Branch Businesses.',
      problemSolved:
        'Disorganized paperwork, missing fee receipts, untracked inventory across godowns, and errors in manual ledger (Khata) calculations.',
      targetAudience:
        'Madrasas, Islamic seminaries, schools, wholesale godowns, clinics, and businesses managing accounts and records.',
      benefits: [
        'Student/Employee records, monthly fee/salary vouchers, and attendance registers.',
        'Structured customer and vendor credit ledgers (Khata) with payment history.',
        'Examination marks tabulation, division rankings, and printable report cards.',
        'Multi-user roles with secure access permissions for admin, accountant, and staff.',
      ],
      deliverables: [
        'Full management system configured for your organization',
        'Printable vouchers, fee slips, student cards, and ledger statements',
        'Automated database backups to prevent data loss',
        'User handbook and staff walkthrough',
      ],
      nextStep: 'Share your institution or business register requirements for a tailored system blueprint.',
      iconName: 'LayoutGrid',
    },
    {
      id: 'workflow-automation',
      title: 'Workflow & Process Automation',
      shortDescription:
        'Eliminate repetitive daily tasks by digitizing manual forms, auto-generating invoices, and automating data synchronization.',
      problemSolved:
        'Hours wasted every day retyping receipts, manually calculating totals in Excel, and following up on pending client balances via phone.',
      targetAudience:
        'Growing businesses looking to reduce human error and speed up daily operations without hiring extra administrative staff.',
      benefits: [
        'Automated PDF invoice generation and balance due reminders.',
        'Single-click daily and monthly sales summaries sent via WhatsApp or Email.',
        'Barcode-driven stock entry and automated purchase order creation.',
        'Centralized dashboards giving owners live visibility into profit and stock.',
      ],
      deliverables: [
        'Custom automated workflows and data-entry forms',
        'Auto-reporting scripts and scheduled summaries',
        'Integration with your existing spreadsheets or databases',
        'Full handover and testing',
      ],
      nextStep: 'Tell us which repetitive task takes the most time in your business every day.',
      iconName: 'Cpu',
    },
    {
      id: 'website-development',
      title: 'Modern Website & Web Application Development',
      shortDescription:
        'Ultra-fast, mobile-friendly websites and customer portals designed to build corporate trust and generate genuine client inquiries.',
      problemSolved:
        'Outdated, broken websites that look generic, load slowly on smartphones, and fail to convince corporate clients or tender boards.',
      targetAudience:
        'Service companies, corporate businesses, manufacturers, and agencies requiring a distinguished digital presence.',
      benefits: [
        'Clean modern aesthetic with elegant typography and fast loading times.',
        '100% responsive design tested across iPhones, Android phones, and desktops.',
        'Search engine optimization (SEO) setup for Google Search visibility.',
        'Direct inquiry forms linked directly to your WhatsApp and Email.',
      ],
      deliverables: [
        'Custom business or corporate website',
        'Hosting and domain setup assistance',
        'Mobile optimization and fast loading verification',
        'Content updates guide and technical handover',
      ],
      nextStep: 'Request a website consultation to review your project scope.',
      iconName: 'Globe',
    },
    {
      id: 'maintenance-and-support',
      title: 'Maintenance, Support & System Upgrades',
      shortDescription:
        'On-going technical assistance, hardware printer configuration, bug fixes, and feature additions for your deployed systems.',
      problemSolved:
        'Software left unmaintained breaks when computers update or printer hardware changes, halting day-to-day business.',
      targetAudience:
        'Businesses using YUSERTECH software or existing systems that need dependable technical support on call.',
      benefits: [
        'Direct phone and WhatsApp access to Abdul Jabbar and Fayyaz Khan.',
        'Fast turnaround on urgent billing counter hardware or database issues.',
        'Regular database backup checks to safeguard sales records.',
        'Continuous feature additions as your business grows.',
      ],
      deliverables: [
        'Monthly or on-call maintenance support',
        'Hardware printer & scanner re-calibrations',
        'Database health checks and disaster recovery plan',
      ],
      nextStep: 'Discuss a straightforward support agreement for your business.',
      iconName: 'ShieldCheck',
    },
  ] as ServiceItem[],

  products: [
    {
      id: 'yuser-pos-suite',
      slug: 'pos-systems',
      name: 'YUSER All-Trade POS Suite',
      category: 'Point-of-Sale & Inventory',
      shortDescription:
        'An offline-first, high-speed billing and inventory system customizable for Retail, Bakeries, Marts, Wholesale, and Pharmacies.',
      fullDescription:
        'YUSER All-Trade POS Suite is designed specifically for local operating conditions. It runs 100% offline so counter billing never freezes during internet or power interruptions, supports instant barcode scanning, handles thermal receipt printing, and manages stock automatically.',
      status: 'In Development',
      badgeText: 'Active Development — Custom Builds Available',
      targetAudience: [
        'Supermarkets & Grocery Mini-Marts',
        'Bakeries, Confectioneries & Pastry Shops',
        'Retail Boutiques & Garment Stores',
        'Pharmacies & Medical Stores',
        'Wholesale Godowns & Distribution Counters',
      ],
      problemsSolved: [
        'Counter billing stops when internet is down.',
        'Stock counts are inaccurate, leading to unexpected shortages.',
        'Cashier shift handover lacks transparent cash-in-drawer audit.',
        'Complicated software that takes weeks for new staff to learn.',
      ],
      keyFeatures: [
        {
          title: 'Offline Local Engine',
          description: 'All transactions operate directly on local storage — zero internet dependency for checkout.',
          status: 'implemented',
        },
        {
          title: 'High-Speed Barcode Billing',
          description: 'Instant lookup with standard USB/Wireless barcode scanners and quick-touch product tiles.',
          status: 'implemented',
        },
        {
          title: 'Thermal Slip & Invoice Printing',
          description: 'Auto-formatted receipts for 58mm & 80mm ESC/POS thermal printers with shop logo and contact.',
          status: 'implemented',
        },
        {
          title: 'Inventory & Low Stock Warning',
          description: 'Automatic deduction upon bill completion with customizable minimum-stock alert thresholds.',
          status: 'implemented',
        },
        {
          title: 'Shift Reconciliation Report',
          description: 'End-of-day cash drawer balancing, cash received, online payments, and cashier variance.',
          status: 'implemented',
        },
        {
          title: 'Trade-Specific Custom Modules',
          description: 'Advance cake booking slips for bakeries, batch expiry tracking for pharmacies, Khata ledger for retail.',
          status: 'planned',
        },
      ],
      deploymentType: 'Desktop PC / Touch POS Terminal (Offline)',
      specs: {
        platform: 'Windows Desktop / Touchscreen POS Terminal',
        offlineSupport: 'Full offline local sales execution',
        database: 'Local transactional database with automated export',
        dataExport: 'Thermal receipts, PDF statements, Excel/CSV reports',
        licenseModel: 'One-time setup with optional maintenance support',
      },
      faqs: [
        {
          question: 'Does this software require internet to bill customers?',
          answer: 'No. The counter billing terminal runs locally on your computer. Sales continue smoothly even without internet.',
        },
        {
          question: 'Can you customize it for my specific shop?',
          answer: 'Yes! Abdul Jabbar and Fayyaz Khan customize the item categories, receipt header, and billing options to match your exact shop setup.',
        },
      ],
    },
    {
      id: 'yuser-madrasa-system',
      slug: 'madrasa-management',
      name: 'YUSER Madrasa & School Management',
      category: 'Institutional & Education',
      shortDescription:
        'A dignified, respectful administrative platform for Islamic seminaries, madrasas, and schools.',
      fullDescription:
        'Specially crafted to manage student admissions across Hifz, Tajweed, and Alimiyyah departments, monthly fee vouchers, boarding hostel records, and semester examination mark-sheet tabulation.',
      status: 'In Development',
      badgeText: 'Active Development — Pilot Deployments Available',
      targetAudience: [
        'Residential Madaris (Madrasas with Boarding/Hostels)',
        'Quranic Hifz & Nazira Academies',
        'Community Schools & Tuition Centers',
      ],
      problemsSolved: [
        'Damaged or lost paper registers for student admissions and family contacts.',
        'Untracked monthly fee payments and lack of standardized bank vouchers.',
        'Manual, time-consuming calculation of exam mark-sheets and division ranks.',
      ],
      keyFeatures: [
        {
          title: 'Student Biodata & Department Registers',
          description: 'Complete admissions database across Hifz, Tajweed, Primary, and Alimiyyah classes.',
          status: 'implemented',
        },
        {
          title: 'Fee Voucher & Slip Generator',
          description: 'Standardized monthly fee slips with tracking for paid, pending, and zakat/scholarship cases.',
          status: 'implemented',
        },
        {
          title: 'Daily Attendance Register',
          description: 'Morning and evening attendance for residential boarders and day students.',
          status: 'implemented',
        },
        {
          title: 'Exam Tabulation & Report Cards',
          description: 'Automated percentage calculations, division awards (Mumtaz, Jayyid Jiddan, Jayyid), and printable certificates.',
          status: 'planned',
        },
      ],
      deploymentType: 'Desktop / Local Network / Secure Web',
      specs: {
        platform: 'Windows PC / Local Network Server / Web Browser',
        offlineSupport: 'Full offline data storage with backup export',
        database: 'Relational database with automated daily backups',
        dataExport: 'Printable fee vouchers, student ID cards, PDF mark-sheets',
        licenseModel: 'Affordable one-time setup with local support',
      },
      faqs: [
        {
          question: 'Does it support Urdu or Arabic student names?',
          answer: 'Yes, the system is fully configured with Unicode UTF-8 support for Urdu, Arabic, and English text.',
        },
      ],
    },
    {
      id: 'yuser-business-automation',
      slug: 'business-automation',
      name: 'YUSER Business ERP & Automation',
      category: 'Enterprise & Automation',
      shortDescription:
        'Custom internal business software, customer Khata ledgers, warehouse inventory, and automated reporting.',
      fullDescription:
        'When off-the-shelf software doesn’t fit how your business actually runs, we build tailored software around your real workflow: multi-godown stock transfers, supplier purchase ledgers, and automated business summaries.',
      status: 'Available',
      badgeText: 'Custom Built On-Demand',
      targetAudience: [
        'Wholesalers & Distributors',
        'Importers & Traders',
        'Contractors & Service Firms',
      ],
      problemsSolved: [
        'Scattered Excel spreadsheets causing accounting errors.',
        'No centralized visibility into multi-godown stock levels.',
        'Delay in recovering receivables due to lack of ledger statements.',
      ],
      keyFeatures: [
        {
          title: 'Customer & Vendor Khata Ledgers',
          description: 'Clear running balance ledger with debit/credit entries, invoice numbers, and payment receipts.',
          status: 'implemented',
        },
        {
          title: 'Multi-Warehouse Stock Tracking',
          description: 'Track items across multiple shops and godowns with inter-branch transfer notes.',
          status: 'implemented',
        },
        {
          title: 'One-Click WhatsApp / PDF Invoicing',
          description: 'Send professional PDF invoices and ledger statements directly to customers.',
          status: 'implemented',
        },
      ],
      deploymentType: 'Cloud Web-Based or Local Office Server',
      specs: {
        platform: 'Responsive Web Application / Local Network',
        offlineSupport: 'Offline exportable statements & reports',
        database: 'PostgreSQL / SQLite with automated backups',
        dataExport: 'PDF Statements, Excel Books, CSV',
        licenseModel: 'Custom project contract with full code ownership',
      },
      faqs: [
        {
          question: 'Can we access this system from our phone?',
          answer: 'Yes! Cloud-deployed versions are fully responsive and can be accessed from any smartphone, tablet, or laptop.',
        },
      ],
    },
  ] as ProductItem[],

  portfolio: [
    {
      id: 'yuser-pos-suite-build',
      title: 'YUSER All-Trade POS Architecture',
      category: 'POS Software',
      type: 'Internal Product Prototype',
      problemStatement:
        'Local merchants face constant counter delays and lost sales whenever cloud-only POS tools disconnect during internet outages.',
      solution:
        'Engineered an offline-first POS architecture running on local database storage with sub-100ms item lookup, barcode scanner hooks, and thermal receipt print protocols.',
      technologies: ['TypeScript', 'React', 'Local Database Engine', 'Thermal Print Protocol', 'Tailwind CSS'],
      status: 'Prototype Ready',
      highlights: [
        'Zero cloud dependency for counter sales billing',
        'Instant barcode scan handling and cash drawer kicks',
        'Custom receipt layouts with business logo and Urdu/English text',
      ],
      demoType: 'case-study',
    },
    {
      id: 'madrasa-student-portal',
      title: 'Madrasa Admissions & Fee Voucher System',
      category: 'Management System',
      type: 'Internal Product Prototype',
      problemStatement:
        'Islamic seminaries struggle with handwritten student registers that degrade over time and manual fee calculations that cause reconciliation discrepancies.',
      solution:
        'Developed a structured administrative system managing student biodata, three-copy bank fee vouchers, and exam marks calculation.',
      technologies: ['React', 'Unicode UTF-8 Support', 'PDF Voucher Generation', 'Database Backup Engine'],
      status: 'Prototype Ready',
      highlights: [
        'Complete Hifz, Tajweed, and Alimiyyah department registries',
        'Standardized fee vouchers with pending dues tracking',
        'Offline backup exports ensuring zero data loss',
      ],
      demoType: 'case-study',
    },
    {
      id: 'distribution-khata-portal',
      title: 'Wholesale Distribution & Customer Khata Portal',
      category: 'Business Automation',
      type: 'Architecture Blueprint',
      problemStatement:
        'Wholesalers tracking credit on paper note pads frequently experience disputed balances and delayed recoveries.',
      solution:
        'Created a streamlined Khata ledger interface with automated balance aging, PDF invoice generation, and running statement downloads.',
      technologies: ['TypeScript', 'Modern Web Standards', 'Tailwind CSS', 'Financial Ledger Engine'],
      status: 'Prototype Ready',
      highlights: [
        'Automated running customer balances',
        'Detailed payment history and invoice cross-referencing',
        'Exportable ledger books for monthly client audits',
      ],
      demoType: 'case-study',
    },
  ] as PortfolioItem[],

  faqs: [
    {
      category: 'General',
      question: 'Who are the founders of YUSERTECH?',
      answer:
        'YUSERTECH is founded by Fayyaz Khan (Founder) and Abdul Jabbar (Co-Founder). We are based in Orangi Town, Karachi, and provide personalized software, POS, and web development services.',
    },
    {
      category: 'General',
      question: 'Where is your office located and what are your operating hours?',
      answer:
        'We are based in Orangi Town, Karachi. We currently operate through on-site visits to client premises across Karachi as well as remote consultations (physical office is in active development). Our operating hours are Monday to Thursday & Saturday from 9:00 AM to 5:00 PM (PKT). We are closed on Friday and Sunday (Jumma & Itwar Off).',
    },
    {
      category: 'Services',
      question: 'What types of POS software do you develop?',
      answer:
        'We develop customized POS software for all types of businesses: Retail stores, Mini-marts, Bakeries, Sweet shops, Restaurants, Pharmacies, and Wholesale traders. Each system is customized to your trade workflow and works 100% offline.',
    },
    {
      category: 'Services',
      question: 'How do you handle hardware setup (printers, barcode scanners)?',
      answer:
        'For clients in Karachi, we assist on-site with thermal printer setup (58mm/80mm), barcode scanner connections, cash drawer triggers, and cashier training so your counter is ready to bill on day one.',
    },
    {
      category: 'Process & Pricing',
      question: 'How can we contact the founders directly?',
      answer:
        'You can call or WhatsApp Abdul Jabbar (Co-Founder) at 0346-7366879 or Fayyaz Khan (Founder) at 0342-2643761 during working hours (9:00 AM – 5:00 PM).',
    },
    {
      category: 'Process & Pricing',
      question: 'How is project pricing determined?',
      answer:
        'We do not believe in hidden costs. After understanding your exact requirements, we provide a transparent, itemized proposal detailing the features, milestone deliverables, and fixed project cost.',
    },
  ] as FaqItem[],

  processSteps: [
    {
      step: '01',
      title: 'Discovery & Consultation',
      description:
        'Fayyaz Khan and Abdul Jabbar meet or consult with you to map your daily business workflow and hardware needs.',
    },
    {
      step: '02',
      title: 'Custom Blueprint',
      description:
        'We design the system interface, database schema, and receipt/report layouts tailored strictly to your business.',
    },
    {
      step: '03',
      title: 'Development & Testing',
      description:
        'We build your software with offline resilience, error checking, and fast performance.',
    },
    {
      step: '04',
      title: 'On-Site Setup & Training',
      description:
        'We install the system on your machines, configure receipt printers and scanners, and train your staff.',
    },
    {
      step: '05',
      title: 'Continuous Support',
      description:
        'Direct phone and WhatsApp support from our founders whenever you need adjustments or assistance.',
    },
  ],

  whyChooseUs: [
    {
      title: 'Direct Founder Access',
      description:
        'You deal directly with Fayyaz Khan and Abdul Jabbar. No corporate middlemen, no delayed customer support tickets.',
    },
    {
      title: 'Built for Local Realities',
      description:
        'Our software works 100% offline without freezing during internet outages, with full thermal printer and local ledger support.',
    },
    {
      title: 'Zero Hidden Subscriptions',
      description:
        'Transparent project pricing with complete ownership of your software setup and database.',
    },
    {
      title: 'Tailored for Your Exact Trade',
      description:
        'Whether retail, bakery, school, madrasa, or wholesale godown, every feature is customized to your trade.',
    },
  ],
};

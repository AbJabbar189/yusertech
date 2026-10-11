# YUSERTECH — Professional Software Agency Website

Official website and digital solutions showcase for **YUSERTECH**, a software development and web solutions agency delivering practical digital solutions for businesses, retailers, bakeries, educational institutions, and organizations.

> **Tagline:** Technology That Works for Your Business.  
> **Brand Colors:** Primary Forest Green (`#123B2A`), Warm Gold (`#D6B46A`), Off-White (`#F7F5EF`), Charcoal (`#202722`), White (`#FFFFFF`), Muted Gray (`#6B746E`).

---

## 1. Key Highlights & Features

- **Centralized Brand Configuration:** All company details, product information, service catalogs, brand colors, contact channels, and portfolio items are managed in [`src/config/siteConfig.ts`](file:///d:/YUSERTEch/src/config/siteConfig.ts).
- **Engineered Services Catalog:** Comprehensive business-oriented documentation for:
  - Website Development
  - Web Application Development
  - Retail POS Solutions
  - Bakery POS Solutions
  - Madrasa Management System
  - Custom Software Development
  - Maintenance & Support
- **Dedicated Software Products:** 
  - **YUSER Retail POS** (Offline-capable billing, barcode scanning, stock tracking)
  - **YUSER Bakery POS** (Advance custom cake bookings, wastage logging, touch tiles)
  - **YUSER Madrasa Management** (Student register, monthly fee vouchers, exam tabulation)
  - Reusable dynamic product specifications route (`/products/:slug`).
- **Live Interactive Software Sandboxes:** Built-in interactive browser mockups allowing visitors to simulate counter cashier transactions, advance bakery cake reservations, and student registry management.
- **Transparent Portfolio & Engineering Blueprints:** Real internal prototypes and architecture blueprints with honest status badges (`Prototype Ready`, `In Development`, `Production Deployed`).
- **Accessible, Honest Contact Flow:** Client-side validation for required fields and email formats. Transparent handoff options (direct email client `mailto:` and WhatsApp with structured project details) when no automated server is configured.
- **Starter Legal Policies:** Starter Privacy Policy and Terms of Service with highlighted placeholders for jurisdictional legal review.
- **Technical SEO & Metadata:** Semantic HTML5, accessible ARIA attributes, [`robots.txt`](file:///d:/YUSERTEch/public/robots.txt), [`sitemap.xml`](file:///d:/YUSERTEch/public/sitemap.xml), and SVG favicon.

---

## 2. Technology Stack

- **Framework:** React 19 + TypeScript + Vite
- **Routing:** React Router v7
- **Styling:** Tailwind CSS v4 with custom CSS design tokens
- **Icons:** Lucide React
- **Linter & Test Framework:** Oxlint + Vitest + JSDOM + Testing Library

---

## 3. Project Structure

```text
d:/YUSERTEch/
├── public/
│   ├── favicon.svg              # Brand geometric emblem favicon
│   ├── robots.txt               # Search engine crawl directives
│   └── sitemap.xml              # XML sitemap with all core routes
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   ├── Badge.tsx        # Status indicators (In Development, Prototype Ready, etc.)
│   │   │   ├── Button.tsx       # Accessible button with primary, gold, and outline styles
│   │   │   ├── Logo.tsx         # Brand logo (geometric mark + wordmark)
│   │   │   ├── ScrollToTop.tsx  # Automatic scroll handling on page navigation
│   │   │   └── SectionHeader.tsx# Reusable section header with overline and subtitles
│   │   ├── layout/
│   │   │   ├── Footer.tsx       # Global footer with contact info & quick links
│   │   │   ├── Layout.tsx       # Master layout wrapper
│   │   │   └── Navbar.tsx       # Responsive navigation with mobile menu drawer
│   │   └── products/
│   │       ├── BakeryMockup.tsx # Interactive bakery booking & wastage sandbox
│   │       ├── MadrasaMockup.tsx# Interactive seminary administration sandbox
│   │       └── POSMockup.tsx    # Interactive offline retail billing terminal
│   ├── config/
│   │   └── siteConfig.ts        # Centralized source of truth for rebranding & data
│   ├── pages/
│   │   ├── AboutPage.tsx        # Company mission, philosophy, and audiences served
│   │   ├── ContactPage.tsx      # Project inquiry form with validation & direct handoffs
│   │   ├── FaqPage.tsx          # Practical client questions with category filters
│   │   ├── HomePage.tsx         # Conversion-focused homepage with 11 core sections
│   │   ├── NotFoundPage.tsx     # 404 error page
│   │   ├── PortfolioPage.tsx    # Technical case studies & prototype blueprints
│   │   ├── PrivacyPage.tsx      # Starter privacy policy with legal placeholders
│   │   ├── ProductDetailPage.tsx# Dynamic product specifications & offline details
│   │   ├── ProductsPage.tsx     # Software products catalog & sandbox selector
│   │   ├── ServicesPage.tsx     # 7 business service offerings with deliverables
│   │   └── TermsPage.tsx        # Starter terms of service & contract guidelines
│   ├── test/
│   │   ├── components.test.tsx  # Unit tests for Logo and Button components
│   │   ├── interactions.test.tsx# Integration tests for Contact form & POSMockup
│   │   ├── setup.ts             # JSDOM test environment setup
│   │   └── siteConfig.test.ts   # Configuration integrity tests
│   ├── App.tsx                  # Application routing definitions
│   ├── index.css                # Base Tailwind styles & CSS custom properties
│   └── main.tsx                 # React application entry point
├── package.json                 # Dependency definitions & scripts
└── vite.config.ts               # Vite & Vitest configuration
```

---

## 4. Setup and Run Instructions

### Prerequisites
- Node.js (v18 or higher recommended; verified on v24.19)
- npm (v9 or higher recommended; verified on v11.17)

### Local Development Server
```bash
npm install
npm run dev
```
Open `http://localhost:5173` in your browser.

### Run Automated Tests
```bash
npm test
```
Executes all 15 Vitest automated unit and interaction tests.

### Code Linting
```bash
npm run lint
```
Runs Oxlint across the repository with zero warnings or errors.

### Production Build
```bash
npm run build
```
Generates optimized, minified production assets in the `dist/` directory.

### Preview Production Build
```bash
npm run preview
```

---

## 5. Rebranding & Future Customization Guide

To update the agency brand name, contact coordinates, or product specifications without modifying UI layout code:

1. Open [`src/config/siteConfig.ts`](file:///d:/YUSERTEch/src/config/siteConfig.ts).
2. Modify the corresponding fields:
   - **`siteConfig.brand.name`**: Changes the brand name across the entire website, footer, navbar, metadata, and form templates.
   - **`siteConfig.brand.tagline`**: Modifies the primary tagline.
   - **`siteConfig.colors`**: Modifies the color palette tokens.
   - **`siteConfig.contact.email`**: Updates email recipient for inquiries and mailto links.
   - **`siteConfig.contact.whatsapp`**: Updates the WhatsApp telephone number for direct messaging.
   - **`siteConfig.contact.isLiveBackendConfigured`**: Toggle to `true` when a serverless mail gateway or REST endpoint is connected.
   - **`siteConfig.products`**: Add or modify software products and their readiness statuses (`Available`, `In Development`, `Coming Soon`).
   - **`siteConfig.services`**: Add or modify service offerings.

---

## 6. Testing & Quality Assurance Summary

The following test suites were executed and verified:
1. **TypeScript Static Typecheck (`tsc -b`)**: 0 errors.
2. **Production Bundle Build (`vite build`)**: Clean build output with code-splitting and asset compression.
3. **Lint Verification (`oxlint`)**: 0 errors, 0 warnings across 26 files.
4. **Automated Unit & Integration Tests (`vitest run`)**: 15 passed tests across 3 test suites:
   - Config integrity (brand name, color hex codes, 7 services, 3 products, offline flags).
   - Component rendering (`Logo`, `Button` loading states, link variants).
   - Interaction testing (Contact form required field checks, invalid email detection, inquiry compilation, `POSMockup` item additions and total price calculation).

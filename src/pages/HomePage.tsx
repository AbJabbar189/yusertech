import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
  Phone,
  MessageSquare,
  Clock,
  MapPin,
  ShoppingBag,
  LayoutGrid,
  Cpu,
  Globe,
  Monitor,
  Printer,
  HardDrive,
  Zap,
} from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { Button } from '../components/common/Button';
import { Badge } from '../components/common/Badge';
import { SectionHeader } from '../components/common/SectionHeader';

export const HomePage: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShoppingBag':
        return <ShoppingBag className="w-5 h-5" />;
      case 'LayoutGrid':
        return <LayoutGrid className="w-5 h-5" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5" />;
      case 'Globe':
        return <Globe className="w-5 h-5" />;
      default:
        return <ShieldCheck className="w-5 h-5" />;
    }
  };

  return (
    <div className="flex flex-col font-sans">
      {/* HERO SECTION WITH FAYJEXTECH BRANDING & HARDWARE VISUAL */}
      <section className="relative bg-gradient-to-b from-[#EEF4FF] via-white to-[#F8FAFC] pt-12 pb-20 md:pt-20 md:pb-28 border-b border-slate-200 overflow-hidden">
        {/* Subtle Decorative Ambient Glows */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/3 left-10 w-80 h-80 bg-green-400/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Brand, Tagline, Value Proposition */}
            <div className="lg:col-span-7 flex flex-col items-start space-y-6">
              {/* Badge with Logo Tagline */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-blue-200 shadow-xs shimmer-badge">
                <Sparkles className="w-4 h-4 text-[#0056D2]" />
                <span className="text-xs font-bold text-[#0056D2]">
                  {siteConfig.brand.name} • <span className="text-[#00B050]">{siteConfig.brand.tagline}</span>
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-5.5xl font-extrabold tracking-tight leading-[1.15] text-[#0F172A]">
                Your Ideas. <br className="hidden sm:inline" />
                <span className="text-[#0056D2]">Our Technology</span> &amp;{' '}
                <span className="text-[#00B050]">PC Setups</span>.
              </h1>

              <p className="text-base sm:text-lg text-[#64748B] leading-relaxed max-w-2xl">
                FAYJEXTECH builds customized point-of-sale software, complete PC hardware counter setups, and automated management systems across Karachi. Tailored specifically for Pakistani retail, marts, bakeries, pharmacies, and wholesale businesses.
              </p>

              {/* Direct Founder Contact Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-1 w-full sm:w-auto">
                <a
                  href={`https://wa.me/${siteConfig.founders[1].phoneClean}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#0056D2] text-white text-xs sm:text-sm font-bold shadow-md shadow-blue-600/20 hover:bg-[#0047B3] hover:-translate-y-0.5 transition-all"
                >
                  <MessageSquare className="w-4 h-4 text-[#00C4FF]" />
                  <span>WhatsApp: Abdul Jabbar (0346 7366879)</span>
                </a>
                <a
                  href={`https://wa.me/${siteConfig.founders[0].phoneClean}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white text-[#00873D] border border-emerald-300 text-xs sm:text-sm font-bold hover:bg-emerald-50 hover:-translate-y-0.5 transition-all shadow-xs"
                >
                  <MessageSquare className="w-4 h-4 text-[#00B050]" />
                  <span>WhatsApp: Fayyaz Khan (0342 2643761)</span>
                </a>
              </div>

              {/* Quick Trust Highlights */}
              <div className="pt-4 border-t border-slate-200 w-full grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-[#334155]">
                <div className="flex items-center gap-2 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#00B050] shrink-0" />
                  <span>Custom POS + PC Hardware</span>
                </div>
                <div className="flex items-center gap-2 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#00B050] shrink-0" />
                  <span>100% Offline Resilience</span>
                </div>
                <div className="flex items-center gap-2 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#00B050] shrink-0" />
                  <span>Direct Founders Support</span>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive PC Showcase Card with Real Hardware Image & Micro-Animations */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-5 shadow-xl hover-lift relative overflow-hidden">
                {/* Visual Header Ribbon */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#00B050] animate-ping" />
                    <span className="text-xs font-extrabold uppercase tracking-wider text-[#0056D2]">
                      Complete POS &amp; PC Setup
                    </span>
                  </div>
                  <span className="text-[11px] font-bold text-[#00B050] bg-emerald-50 px-2.5 py-0.5 rounded-md border border-emerald-200">
                    Karachi On-Site Ready
                  </span>
                </div>

                {/* Real PC Setup Image */}
                <div className="relative mt-3 rounded-xl overflow-hidden group">
                  <img
                    src="./images/pc_setup.jpg"
                    alt="FAYJEXTECH PC Counter POS Setup"
                    className="w-full h-52 sm:h-56 object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/85 via-transparent to-transparent flex flex-col justify-end p-4 text-white">
                    <span className="text-xs font-bold text-[#00C4FF] uppercase tracking-wider">
                      Turnkey Counter Solution
                    </span>
                    <h3 className="text-base font-bold text-white">
                      Core i3/i5 PC • Thermal Printer • Barcode Scanner
                    </h3>
                  </div>
                </div>

                {/* Feature Highlights Grid */}
                <div className="grid grid-cols-2 gap-2 mt-4">
                  <div className="p-2.5 rounded-lg bg-blue-50/60 border border-blue-100 flex items-center gap-2 text-xs">
                    <Monitor className="w-4 h-4 text-[#0056D2] shrink-0" />
                    <div>
                      <span className="font-bold text-[#0F172A] block text-[11px]">Desktop &amp; POS Screen</span>
                      <span className="text-[10px] text-slate-500">Fast Urdu &amp; English UI</span>
                    </div>
                  </div>

                  <div className="p-2.5 rounded-lg bg-emerald-50/60 border border-emerald-100 flex items-center gap-2 text-xs">
                    <Printer className="w-4 h-4 text-[#00B050] shrink-0" />
                    <div>
                      <span className="font-bold text-[#0F172A] block text-[11px]">Thermal Bill Receipt</span>
                      <span className="text-[10px] text-slate-500">58mm &amp; 80mm ESC/POS</span>
                    </div>
                  </div>

                  <div className="p-2.5 rounded-lg bg-emerald-50/60 border border-emerald-100 flex items-center gap-2 text-xs">
                    <HardDrive className="w-4 h-4 text-[#00B050] shrink-0" />
                    <div>
                      <span className="font-bold text-[#0F172A] block text-[11px]">100% Offline Local DB</span>
                      <span className="text-[10px] text-slate-500">Loads without Internet</span>
                    </div>
                  </div>

                  <div className="p-2.5 rounded-lg bg-blue-50/60 border border-blue-100 flex items-center gap-2 text-xs">
                    <Zap className="w-4 h-4 text-[#0056D2] shrink-0" />
                    <div>
                      <span className="font-bold text-[#0F172A] block text-[11px]">Instant Daily Khata</span>
                      <span className="text-[10px] text-slate-500">WhatsApp &amp; PDF reports</span>
                    </div>
                  </div>
                </div>

                {/* Founder direct call bar */}
                <div className="mt-4 p-3 rounded-xl bg-gradient-to-r from-blue-50 to-emerald-50 border border-blue-200 flex items-center justify-between text-xs">
                  <div>
                    <span className="font-bold text-[#0056D2] block">Book Free On-Site Inspection</span>
                    <span className="text-[11px] text-slate-600">Orangi Town, North Nazimabad &amp; Karachi wide</span>
                  </div>
                  <Button to="/contact" variant="primary" size="sm">
                    Book Visit
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: PAKISTANI BUSINESS SECTORS WITH REAL IMAGES */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Tailored for Your Market"
            title="Custom Software &amp; PC Setups for Pakistani Trades"
            subtitle="Har market aur dukan ki apni zaroorat hoti hai. Hum har business k mutabiq custom software aur PC hardware install karte hain."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1: Mart & Superstore */}
            <div className="bg-[#F8FAFC] rounded-2xl overflow-hidden border border-slate-200 hover-lift flex flex-col justify-between">
              <div>
                <div className="relative h-44 overflow-hidden">
                  <img
                    src="./images/mart_pos.jpg"
                    alt="Mart and General Store POS"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <span className="absolute top-3 left-3 bg-[#0056D2] text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md shadow-xs">
                    Marts &amp; Stores
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="text-base font-bold text-[#0F172A] mb-1.5">
                    Super Marts &amp; Grocery
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-3">
                    Fast barcode scanning, stock expiry alerts, multiple cash counters, wholesale rate calculation, aur daily sales reports.
                  </p>
                  <div className="space-y-1.5 text-xs text-slate-700">
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#00B050]" />
                      <span>Barcode Scanner &amp; Cash Drawer</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#00B050]" />
                      <span>Wholesale vs Retail Pricing</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-5 pt-0">
                <Link
                  to="/products/al-tijarah-pos"
                  className="text-xs font-bold text-[#0056D2] hover:text-[#00B050] inline-flex items-center gap-1 transition-colors"
                >
                  <span>Explore Mart Solution</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Card 2: Bakery & Sweets */}
            <div className="bg-[#F8FAFC] rounded-2xl overflow-hidden border border-slate-200 hover-lift flex flex-col justify-between">
              <div>
                <div className="relative h-44 overflow-hidden">
                  <img
                    src="./images/bakery_pos.jpg"
                    alt="Bakery and Sweets POS"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <span className="absolute top-3 left-3 bg-[#00B050] text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md shadow-xs">
                    Bakeries &amp; Cafes
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="text-base font-bold text-[#0F172A] mb-1.5">
                    Bakeries, Sweets &amp; Cafes
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-3">
                    Weighing scale machine integration, advance cake booking orders, quick thermal slip printing, and ingredient costing.
                  </p>
                  <div className="space-y-1.5 text-xs text-slate-700">
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#00B050]" />
                      <span>Electronic Scale Support</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#00B050]" />
                      <span>Advance Order Slip with Token</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-5 pt-0">
                <Link
                  to="/products/al-tijarah-pos"
                  className="text-xs font-bold text-[#0056D2] hover:text-[#00B050] inline-flex items-center gap-1 transition-colors"
                >
                  <span>Explore Bakery Solution</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Card 3: Pharmacy & Medical Stores */}
            <div className="bg-[#F8FAFC] rounded-2xl overflow-hidden border border-slate-200 hover-lift flex flex-col justify-between">
              <div>
                <div className="relative h-44 overflow-hidden">
                  <img
                    src="./images/pharmacy_pos.jpg"
                    alt="Pharmacy and Medical Store POS"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <span className="absolute top-3 left-3 bg-[#0056D2] text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md shadow-xs">
                    Medical &amp; Pharmacy
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="text-base font-bold text-[#0F172A] mb-1.5">
                    Pharmacies &amp; Clinics
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-3">
                    Batch number and expiry tracking, formula search, supplier credit khata, and instant medicine stock lookup.
                  </p>
                  <div className="space-y-1.5 text-xs text-slate-700">
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#00B050]" />
                      <span>Expiry &amp; Batch Control</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#00B050]" />
                      <span>Formula &amp; Generic Alternatives</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-5 pt-0">
                <Link
                  to="/products/al-tijarah-pos"
                  className="text-xs font-bold text-[#0056D2] hover:text-[#00B050] inline-flex items-center gap-1 transition-colors"
                >
                  <span>Explore Pharmacy Solution</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Card 4: Wholesale & Distribution */}
            <div className="bg-[#F8FAFC] rounded-2xl overflow-hidden border border-slate-200 hover-lift flex flex-col justify-between">
              <div>
                <div className="relative h-44 overflow-hidden">
                  <img
                    src="./images/wholesale_inventory.jpg"
                    alt="Wholesale and Distribution Inventory"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <span className="absolute top-3 left-3 bg-[#00B050] text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md shadow-xs">
                    Wholesale &amp; Khata
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="text-base font-bold text-[#0F172A] mb-1.5">
                    Wholesale &amp; Warehouses
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-3">
                    Party-wise ledger (khata), bulk rate discounts, delivery challans, and recovery agent commission tracking.
                  </p>
                  <div className="space-y-1.5 text-xs text-slate-700">
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#00B050]" />
                      <span>Party Ledger &amp; Khata Statements</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#00B050]" />
                      <span>Multi-Warehouse Stock Sync</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-5 pt-0">
                <Link
                  to="/services#custom-pos-systems"
                  className="text-xs font-bold text-[#0056D2] hover:text-[#00B050] inline-flex items-center gap-1 transition-colors"
                >
                  <span>Explore Wholesale System</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: SERVICES OVERVIEW */}
      <section className="py-20 bg-[#F8FAFC] border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Core Services"
            title="Practical Software Services Built for Daily Operations"
            subtitle="We don't sell bloated templates or monthly locked subscriptions. We build clear, custom tools that automate your workflow and secure your cash counter."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {siteConfig.services.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 hover:border-[#0056D2]/50 hover-lift transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0056D2] flex items-center justify-center mb-4 border border-blue-200 font-bold">
                    {getIcon(service.iconName)}
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-[#0F172A] mb-2">{service.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {service.shortDescription}
                  </p>
                  <div className="pt-3 border-t border-slate-100">
                    <span className="text-[11px] font-bold text-[#0056D2] uppercase tracking-wider block mb-1">
                      Key Benefit
                    </span>
                    <p className="text-xs text-slate-700">{service.benefits[0]}</p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100">
                  <Link
                    to={`/services#${service.id}`}
                    className="text-xs font-bold text-[#0056D2] hover:text-[#00B050] inline-flex items-center gap-1 transition-colors"
                  >
                    <span>Read Details &amp; Deliverables</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Button to="/services" variant="primary" size="md">
              View All Services &amp; Hardware Support
            </Button>
          </div>
        </div>
      </section>

      {/* SECTION 4: FOUNDERS & LEADERSHIP */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Company Leadership"
            title="Meet the Founders Behind FAYJEXTECH"
            subtitle="Direct communication with the actual minds engineering your software and setting up your hardware. No middlemen."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Fayyaz Khan */}
            <div className="bg-[#F8FAFC] rounded-2xl border border-slate-200 p-6 sm:p-8 flex flex-col justify-between hover-lift">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-[#EEF4FF] text-[#0056D2] border border-blue-200 flex items-center justify-center font-extrabold text-xl shadow-xs">
                    FK
                  </div>
                  <Badge variant="primary">Founder</Badge>
                </div>
                <h3 className="text-xl font-bold text-[#0F172A]">Fayyaz Khan</h3>
                <span className="text-xs text-[#0056D2] font-bold block mb-3">Founder &amp; Business Strategist</span>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  {siteConfig.founders[0].bio} Fayyaz leads client consultations across Karachi, working with shop owners and institutional heads to define business workflows and delivery plans.
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200 space-y-2.5">
                <a
                  href={`tel:${siteConfig.founders[0].phoneClean}`}
                  className="flex items-center gap-2 text-xs font-semibold text-[#0F172A] hover:text-[#0056D2]"
                >
                  <Phone className="w-4 h-4 text-[#0056D2]" />
                  <span>Call: {siteConfig.founders[0].phone}</span>
                </a>
                <a
                  href={siteConfig.founders[0].whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#00873D] hover:underline"
                >
                  <MessageSquare className="w-4 h-4 text-[#00B050]" />
                  <span>Message on WhatsApp →</span>
                </a>
              </div>
            </div>

            {/* Abdul Jabbar */}
            <div className="bg-[#F8FAFC] rounded-2xl border border-slate-200 p-6 sm:p-8 flex flex-col justify-between hover-lift">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-[#00873D] border border-emerald-200 flex items-center justify-center font-extrabold text-xl shadow-xs">
                    AJ
                  </div>
                  <Badge variant="accent">Co-Founder</Badge>
                </div>
                <h3 className="text-xl font-bold text-[#0F172A]">Abdul Jabbar</h3>
                <span className="text-xs text-[#00873D] font-bold block mb-3">Co-Founder &amp; Lead Systems Engineer</span>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  {siteConfig.founders[1].bio} Abdul Jabbar engineers the offline databases, POS desktop software, thermal printer integration, PC hardware configuration, and automation scripts.
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200 space-y-2.5">
                <a
                  href={`tel:${siteConfig.founders[1].phoneClean}`}
                  className="flex items-center gap-2 text-xs font-semibold text-[#0F172A] hover:text-[#00873D]"
                >
                  <Phone className="w-4 h-4 text-[#00B050]" />
                  <span>Call: {siteConfig.founders[1].phone}</span>
                </a>
                <a
                  href={siteConfig.founders[1].whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#00873D] hover:underline"
                >
                  <MessageSquare className="w-4 h-4 text-[#00B050]" />
                  <span>Message on WhatsApp →</span>
                </a>
              </div>
            </div>
          </div>

          {/* Operating hours & location notice */}
          <div className="mt-8 p-4 rounded-xl bg-slate-50 border border-slate-200 max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#0056D2] shrink-0" />
              <span>Based in <strong>Orangi Town, Karachi</strong> (Remote &amp; Client On-Site Operations).</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#0056D2] shrink-0" />
              <span><strong>9:00 AM – 5:00 PM</strong> (Mon–Thu &amp; Sat) • <em className="text-rose-600 font-semibold">Friday &amp; Sunday Off</em></span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: INQUIRY BANNER */}
      <section className="py-16 bg-[#002B66] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-green-500/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
            Want to Automate Your Shop or Organization?
          </h2>
          <p className="text-xs sm:text-sm text-slate-200 max-w-xl mx-auto mb-6 leading-relaxed">
            Contact Abdul Jabbar or Fayyaz Khan directly to review your shop counter setup, PC hardware, thermal printer requirements, or software specifications.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={`https://wa.me/${siteConfig.founders[1].phoneClean}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#00B050] hover:bg-[#009644] text-white text-xs sm:text-sm font-bold shadow-lg shadow-green-600/30 transition-all transform hover:-translate-y-0.5"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Abdul Jabbar (0346 7366879)</span>
            </a>
            <a
              href={`https://wa.me/${siteConfig.founders[0].phoneClean}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-bold border border-white/20 transition-all transform hover:-translate-y-0.5"
            >
              <Phone className="w-4 h-4 text-[#00C4FF]" />
              <span>Call Fayyaz Khan (0342 2643761)</span>
            </a>
          </div>

          <p className="text-[11px] text-slate-300 mt-4">
            Office Timing: 9:00 AM – 5:00 PM (Monday to Thursday &amp; Saturday • Friday &amp; Sunday Off)
          </p>
        </div>
      </section>
    </div>
  );
};

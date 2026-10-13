import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Phone,
  MessageSquare,
  ShoppingBag,
  Cpu,
  Monitor,
  Printer,
  HardDrive,
  Zap,
  Layers,
  Users,
  Star,
  Quote,
} from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { Button } from '../components/common/Button';
import { SectionHeader } from '../components/common/SectionHeader';

export const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const [quickEmail, setQuickEmail] = useState('');
  const [quickService, setQuickService] = useState('Custom POS Systems (All Business Types)');
  const [activeIndustryTab, setActiveIndustryTab] = useState(0);

  const handleHeroFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const query = new URLSearchParams({
      email: quickEmail,
      service: quickService,
    }).toString();
    navigate(`/contact?${query}`);
  };

  const techStacksRow1 = [
    { name: 'POS Desktop Systems', tag: 'C# / .NET' },
    { name: 'Offline ACID Database', tag: 'SQLite / PostgreSQL' },
    { name: 'React UI Counters', tag: 'React 19 & Tailwind' },
    { name: 'Thermal ESC/POS Slip', tag: 'USB / Serial 80mm' },
    { name: 'Barcode Scanner Protocol', tag: 'HID / Virtual COM' },
    { name: 'Khata Automation Scripts', tag: 'Python / Node.js' },
  ];

  const techStacksRow2 = [
    { name: 'Super Marts & Grocery', tag: 'Multi-Counter Billing' },
    { name: 'Bakeries & Sweet Shops', tag: 'Weighing Scale Sync' },
    { name: 'Medical & Pharmacies', tag: 'Batch & Expiry Control' },
    { name: 'Wholesale Godown Ledgers', tag: 'Party Credit Khata' },
    { name: 'Institutional School/Madrasa', tag: 'Fee Vouchers & Tabulation' },
    { name: 'WhatsApp Daily Reporting', tag: 'Instant Management Sync' },
  ];

  const industriesList = [
    {
      id: 'retail-marts',
      title: 'Marts & Superstores',
      icon: ShoppingBag,
      desc: 'High-speed barcode checkout, inventory stock threshold alerts, multi-counter till reconciliation, and wholesale pricing tiers.',
      stat: '5000+ Daily Items Scanned',
    },
    {
      id: 'bakeries-sweets',
      title: 'Bakeries & Sweets',
      icon: Layers,
      desc: 'Direct electronic weighing scale machine integration, advance cake bookings, token receipt printing, and daily batch costing.',
      stat: '0.1s Slip Printing Speed',
    },
    {
      id: 'pharmacies',
      title: 'Pharmacies & Clinics',
      icon: ShieldCheck,
      desc: 'Batch number expiry enforcement, generic formula replacement lookup, supplier purchase returns, and controlled medicine logs.',
      stat: '100% Expiry Safeguard',
    },
    {
      id: 'wholesale-godowns',
      title: 'Wholesale & Ledgers',
      icon: HardDrive,
      desc: 'Party-wise Khata ledger debit/credit balances, auto-generated PDF delivery invoices, recovery salesman commission, and godown dispatch.',
      stat: 'Zero Paper Ledger Loss',
    },
    {
      id: 'education-madrasa',
      title: 'Madrasas & Academies',
      icon: Users,
      desc: 'Student admission registers, monthly fee voucher generator with bank challans, exam marks tabulation, and teacher attendance.',
      stat: 'Complete Student Records',
    },
    {
      id: 'corporate-automation',
      title: 'Business Automation',
      icon: Cpu,
      desc: 'Automated WhatsApp daily turnover reports, daily profit summary PDFs, and custom workflow scripts that eliminate manual data entry.',
      stat: '100% Offline Independence',
    },
  ];

  const testimonials = [
    {
      name: 'Haji Muhammad Rizwan',
      role: 'Owner, Al-Madina Super Mart (Karachi)',
      quote:
        'FAYJEXTECH installed our 2 billing PC counters with barcode scanners and thermal printers in Orangi Town. When the internet flickered, our sales never stopped even for a single second. Abdul Jabbar and Fayyaz Khan provided honest on-site support!',
      rating: 5,
    },
    {
      name: 'Tariq Mehmood',
      role: 'Managing Director, Royal Bakers & Confectionery',
      quote:
        'Our previous POS software was charging us heavy monthly rental fees and freezing during busy evening rush hours. FAYJEXTECH gave us our own permanent software with weighing scale integration. Highly recommended for Karachi business owners!',
      rating: 5,
    },
    {
      name: 'Maulana Hafiz Bilal',
      role: 'Administrator, Jamia Faiz-ul-Quran',
      quote:
        'Managing hundreds of student fee slips and exam tabulations on paper was a headache. FAYJEXTECH built a clean desktop system that prints vouchers in one click. Both founders are trustworthy and punctual.',
      rating: 5,
    },
  ];

  return (
    <div className="flex flex-col font-sans overflow-hidden">
      {/* ==============================================================
          SECTION 1: TOP BANNER (Nanosoft Style with Floating Objects & Quick Hire Form)
          ============================================================== */}
      <section className="relative bg-gradient-to-b from-[#EEF4FF] via-white to-[#F8FAFC] pt-14 pb-20 md:pt-24 md:pb-32 border-b border-slate-200 overflow-hidden">
        {/* Pulsing Nanosoft Ellipse Ambient Backgrounds */}
        <div className="nanosoft-ellipse-blue w-[500px] h-[500px] -top-32 -left-20" />
        <div className="nanosoft-ellipse-green w-[550px] h-[550px] -top-20 -right-24" />

        {/* Floating Geometric Decorative Badges (Nanosoft .objectss icons) */}
        <div className="hidden lg:block pointer-events-none select-none">
          <div className="absolute top-20 left-12 animate-float-1 p-3 rounded-2xl bg-white/90 backdrop-blur-md border border-blue-200 shadow-lg text-xs font-bold text-[#0056D2] flex items-center gap-2">
            <Monitor className="w-4 h-4 text-[#0056D2]" />
            <span>Turnkey PC Setups</span>
          </div>

          <div className="absolute bottom-28 left-8 animate-float-2 p-3 rounded-2xl bg-white/90 backdrop-blur-md border border-emerald-200 shadow-lg text-xs font-bold text-[#00B050] flex items-center gap-2">
            <HardDrive className="w-4 h-4 text-[#00B050]" />
            <span>100% Offline Local DB</span>
          </div>

          <div className="absolute top-24 right-12 animate-float-3 p-3 rounded-2xl bg-white/90 backdrop-blur-md border border-cyan-200 shadow-lg text-xs font-bold text-[#0056D2] flex items-center gap-2">
            <Printer className="w-4 h-4 text-[#00C4FF]" />
            <span>ESC/POS Thermal Slips</span>
          </div>

          <div className="absolute bottom-24 right-10 animate-float-1 p-3 rounded-2xl bg-white/90 backdrop-blur-md border border-blue-200 shadow-lg text-xs font-bold text-[#0056D2] flex items-center gap-2">
            <Zap className="w-4 h-4 text-[#00B050]" />
            <span>Zero Monthly Rent Traps</span>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          {/* Top Pill / Shimmer Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-blue-200 shadow-xs shimmer-badge mb-6">
            <Sparkles className="w-4 h-4 text-[#0056D2]" />
            <span className="text-xs font-bold text-[#0056D2]">
              {siteConfig.brand.name} • <span className="text-[#00B050]">{siteConfig.brand.tagline}</span>
            </span>
          </div>

          {/* Headline (Nanosoft Inspired Headline Structure) */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.12] text-[#0B132B]">
            Hire Dedicated Software Engineers &amp; <br />
            <span className="shimmer-gradient-text">Complete PC Counter Setups</span> in Karachi
          </h1>

          {/* Subtitle */}
          <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
            <strong>SKIP THE MONTHLY CLUTTER!</strong> Partner directly with founders <strong>Fayyaz Khan</strong> &amp; <strong>Abdul Jabbar</strong> for customized Point-of-Sale (POS) systems, PC billing counters, thermal printing, and workflow automation. 100% offline-ready across Karachi.
          </p>

          {/* Interactive Fast Scoping Form (Nanosoft Style Top Banner Form) */}
          <form
            onSubmit={handleHeroFormSubmit}
            className="mt-8 bg-white/95 backdrop-blur-md p-3 sm:p-4 rounded-2xl border border-slate-200 shadow-2xl max-w-3xl mx-auto"
          >
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-center">
              <div className="sm:col-span-4 text-left">
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1 ml-1">
                  Your Phone / WhatsApp
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. 0345 1234567"
                  value={quickEmail}
                  onChange={(e) => setQuickEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl bg-slate-50 border border-slate-200 text-[#0F172A] focus:bg-white focus:border-[#0056D2] focus:outline-none transition-colors"
                />
              </div>

              <div className="sm:col-span-5 text-left">
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1 ml-1">
                  What Solution Do You Need?
                </label>
                <select
                  value={quickService}
                  onChange={(e) => setQuickService(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl bg-slate-50 border border-slate-200 text-[#0F172A] focus:bg-white focus:border-[#0056D2] focus:outline-none transition-colors font-medium"
                >
                  <option value="Custom POS Systems (All Business Types)">Custom POS Systems (Marts, Retail, Bakeries)</option>
                  <option value="Complete PC Counter Hardware Setup">Complete PC Counter Hardware (PC + Thermal + Scanner)</option>
                  <option value="Management Systems & Ledgers">Institutional / Madrasa & Khata Ledgers</option>
                  <option value="Workflow Automation & Web">Workflow Automation & High-Performance Web</option>
                  <option value="System Maintenance & Hardware Setup">System Maintenance & On-Site Karachi Visit</option>
                </select>
              </div>

              <div className="sm:col-span-3 pt-4 sm:pt-4">
                <button
                  type="submit"
                  className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-[#0056D2] to-[#00388F] text-white text-xs sm:text-sm font-bold shadow-md shadow-blue-500/25 hover:shadow-lg hover:shadow-blue-500/35 hover:scale-[1.02] transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>Hire Pro Team</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </form>

          {/* Direct Founders Contact Ribbon */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`https://wa.me/${siteConfig.founders[1].phoneClean}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#00B050] hover:bg-[#009644] text-white text-xs sm:text-sm font-bold shadow-md shadow-green-600/20 hover:-translate-y-0.5 transition-all"
            >
              <MessageSquare className="w-4 h-4 text-white" />
              <span>WhatsApp Abdul Jabbar (0346 7366879)</span>
            </a>

            <a
              href={`https://wa.me/${siteConfig.founders[0].phoneClean}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-[#0056D2] border border-blue-200 text-xs sm:text-sm font-bold hover:bg-blue-50 hover:-translate-y-0.5 transition-all shadow-xs"
            >
              <Phone className="w-4 h-4 text-[#0056D2]" />
              <span>Call Fayyaz Khan (0342 2643761)</span>
            </a>
          </div>
        </div>
      </section>

      {/* ==============================================================
          SECTION 2: INFINITE SCROLLING TECH STACK MARQUEE (Nanosoft Slick / Owl effect)
          ============================================================== */}
      <section className="py-6 bg-[#002B66] text-white border-y border-[#003E9A] overflow-hidden select-none">
        <div className="mb-2 text-center text-xs font-bold uppercase tracking-widest text-[#00C4FF]">
          Technologies &amp; Systems We Engineer
        </div>

        {/* Marquee Row 1 */}
        <div className="flex overflow-hidden py-2">
          <div className="animate-marquee gap-6 items-center">
            {[...techStacksRow1, ...techStacksRow1, ...techStacksRow1].map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 px-5 py-2 rounded-xl bg-white/10 border border-white/15 backdrop-blur-sm whitespace-nowrap text-xs font-semibold text-white"
              >
                <span className="w-2 h-2 rounded-full bg-[#00B050]" />
                <span className="font-bold">{item.name}</span>
                <span className="text-[11px] text-blue-200 font-mono">({item.tag})</span>
              </div>
            ))}
          </div>
        </div>

        {/* Marquee Row 2 (Reverse) */}
        <div className="flex overflow-hidden py-2">
          <div className="animate-marquee-reverse gap-6 items-center">
            {[...techStacksRow2, ...techStacksRow2, ...techStacksRow2].map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 px-5 py-2 rounded-xl bg-white/10 border border-white/15 backdrop-blur-sm whitespace-nowrap text-xs font-semibold text-white"
              >
                <span className="w-2 h-2 rounded-full bg-[#00C4FF]" />
                <span className="font-bold">{item.name}</span>
                <span className="text-[11px] text-emerald-300 font-mono">({item.tag})</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==============================================================
          SECTION 3: THREE STEPS TO ACQUIRE YOUR SYSTEM (Nanosoft .steps-away)
          ============================================================== */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeader
            badge="Simple 3-Step Process"
            title="You Are Three Steps Away From Modernizing Your Shop"
            subtitle="No lengthy agency bureaucracy. Connect directly with the founders, inspect real hardware counters, and deploy in hours."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            {/* Step 1 */}
            <div className="bg-[#F8FAFC] rounded-2xl p-8 border border-slate-200 hover-lift flex flex-col items-center text-center relative">
              <div className="w-16 h-16 rounded-2xl bg-blue-50 text-[#0056D2] border border-blue-200 flex items-center justify-center font-extrabold text-2xl mb-5 shadow-xs">
                01
              </div>
              <h3 className="text-lg font-bold text-[#0F172A] mb-2">
                1. Talk to Our Founders
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Contact Fayyaz Khan or Abdul Jabbar directly on WhatsApp. Explain your shop counter, items volume, thermal printer requirements, and current bottlenecks.
              </p>
              <div className="mt-5 pt-4 border-t border-slate-200 w-full text-xs font-bold text-[#0056D2]">
                Instant Response Guaranteed
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-[#F8FAFC] rounded-2xl p-8 border border-slate-200 hover-lift flex flex-col items-center text-center relative">
              <div className="w-16 h-16 rounded-2xl bg-emerald-50 text-[#00873D] border border-emerald-200 flex items-center justify-center font-extrabold text-2xl mb-5 shadow-xs">
                02
              </div>
              <h3 className="text-lg font-bold text-[#0F172A] mb-2">
                2. On-Site Hardware &amp; Demo
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                We inspect your counter in Karachi, calibrate the thermal receipt printer, configure barcode scanners, and tailor Urdu/English billing software to your trade.
              </p>
              <div className="mt-5 pt-4 border-t border-slate-200 w-full text-xs font-bold text-[#00B050]">
                Karachi-Wide On-Site Visits
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-[#F8FAFC] rounded-2xl p-8 border border-slate-200 hover-lift flex flex-col items-center text-center relative">
              <div className="w-16 h-16 rounded-2xl bg-blue-50 text-[#0056D2] border border-blue-200 flex items-center justify-center font-extrabold text-2xl mb-5 shadow-xs">
                03
              </div>
              <h3 className="text-lg font-bold text-[#0F172A] mb-2">
                3. Go Live &amp; Staff Training
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Your cashiers are trained within hours. You receive lifetime ownership without recurring monthly subscriptions, plus direct WhatsApp support anytime.
              </p>
              <div className="mt-5 pt-4 border-t border-slate-200 w-full text-xs font-bold text-[#0056D2]">
                Permanent Software Ownership
              </div>
            </div>
          </div>

          <div className="mt-12">
            <Button to="/contact" variant="primary" size="lg">
              Start Step 1: Talk With Founders
            </Button>
          </div>
        </div>
      </section>

      {/* ==============================================================
          SECTION 4: REAL PC & COUNTER SHOWCASE WITH LIVE STATS (Nanosoft .multiple_tech)
          ============================================================== */}
      <section className="py-20 bg-[#F8FAFC] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content & Stats Counters */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0056D2] bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200 inline-block">
                Turnkey Hardware &amp; Software
              </span>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B132B] tracking-tight leading-tight">
                Complete PC Billing Counters &amp; Systems Engineered for Daily Rigor
              </h2>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                FAYJEXTECH pairs customized offline POS software with dependable PC hardware. From Core i3/i5 desktop units to high-speed 80mm thermal receipt printers and heavy-duty cash drawers, we make sure your cash counter runs uninterrupted during power cuts and load shedding.
              </p>

              {/* Nanosoft Style 4 Stat Counters */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-slate-200">
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
                  <span className="text-2xl sm:text-3xl font-extrabold text-[#0056D2] block">100%</span>
                  <span className="text-xs font-bold text-[#0F172A] mt-1 block">Offline Guarantee</span>
                  <span className="text-[11px] text-slate-500">Zero Cloud Freeze</span>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
                  <span className="text-2xl sm:text-3xl font-extrabold text-[#00B050] block">0.1s</span>
                  <span className="text-xs font-bold text-[#0F172A] mt-1 block">Thermal Print</span>
                  <span className="text-[11px] text-slate-500">Urdu &amp; English</span>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
                  <span className="text-2xl sm:text-3xl font-extrabold text-[#0056D2] block">24/7</span>
                  <span className="text-xs font-bold text-[#0F172A] mt-1 block">Founder Line</span>
                  <span className="text-[11px] text-slate-500">No Call Center</span>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
                  <span className="text-2xl sm:text-3xl font-extrabold text-[#00B050] block">Rs. 0</span>
                  <span className="text-xs font-bold text-[#0F172A] mt-1 block">Monthly Rental</span>
                  <span className="text-[11px] text-slate-500">You Own System</span>
                </div>
              </div>

              <div className="pt-2">
                <Button to="/products/al-tijarah-pos" variant="primary" size="md">
                  View Full POS Hardware Specifications
                </Button>
              </div>
            </div>

            {/* Right Interactive Image Card */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-3xl border border-slate-200 p-5 shadow-2xl hover-lift relative overflow-hidden">
                <div className="relative rounded-2xl overflow-hidden group">
                  <img
                    src="./images/pc_setup.jpg"
                    alt="FAYJEXTECH Real PC Hardware Setup"
                    className="w-full h-72 object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B132B]/90 via-[#0B132B]/20 to-transparent flex flex-col justify-end p-5 text-white">
                    <span className="text-xs font-bold text-[#00C4FF] uppercase tracking-wider">
                      Turnkey Counter Hardware
                    </span>
                    <h3 className="text-lg font-bold text-white mt-1">
                      Complete Desktop Unit + Thermal Printer + Scanner
                    </h3>
                    <p className="text-xs text-slate-200 mt-1">
                      On-site installation and testing across Karachi.
                    </p>
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
                  <div className="p-2.5 rounded-xl bg-blue-50/70 border border-blue-100 flex items-center gap-2">
                    <Monitor className="w-4 h-4 text-[#0056D2]" />
                    <span className="font-bold text-[#0F172A]">Core i3/i5 Desktops</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-emerald-50/70 border border-emerald-100 flex items-center gap-2">
                    <Printer className="w-4 h-4 text-[#00B050]" />
                    <span className="font-bold text-[#0F172A]">58/80mm Thermal</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==============================================================
          SECTION 5: ACROSS NUMEROUS INDUSTRY VERTICALS (Nanosoft .industrialarea)
          ============================================================== */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Industry Verticals"
            title="Across Pakistani Business Verticals"
            subtitle="From local supermarts to wholesale godowns and faith-based institutions, each trade requires exact features. Select a vertical to see how we solve it:"
          />

          {/* Industry Vertical Interactive Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industriesList.map((ind, index) => {
              const IconComp = ind.icon;
              const isSelected = activeIndustryTab === index;
              return (
                <div
                  key={ind.id}
                  onClick={() => setActiveIndustryTab(index)}
                  className={`p-6 rounded-2xl border transition-all cursor-pointer industry-node-card flex flex-col justify-between ${
                    isSelected
                      ? 'bg-blue-50/60 border-[#0056D2] shadow-lg ring-2 ring-[#0056D2]/20'
                      : 'bg-[#F8FAFC] border-slate-200 hover:border-[#0056D2]/40'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold transition-colors ${
                          isSelected
                            ? 'bg-[#0056D2] text-white shadow-md'
                            : 'bg-white text-[#0056D2] border border-slate-200'
                        }`}
                      >
                        <IconComp className="w-6 h-6" />
                      </div>
                      <span className="text-[11px] font-bold text-[#00873D] bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
                        {ind.stat}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-[#0F172A] mb-2">{ind.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                      {ind.desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-200/60 flex items-center justify-between text-xs font-bold text-[#0056D2]">
                    <span>Inquire for {ind.title}</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==============================================================
          SECTION 6: WHY FUTURISTIC TRADES CHOOSE FAYJEXTECH (Nanosoft .futuristic with Sticky Left)
          ============================================================== */}
      <section className="py-20 bg-[#F8FAFC] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Sticky Column (Nanosoft .sticky-top) */}
            <div className="lg:col-span-5">
              <div className="lg:sticky lg:top-28 space-y-5">
                <span className="text-xs font-bold uppercase tracking-wider text-[#0056D2] bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200 inline-block">
                  Why Work With Us
                </span>

                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B132B] tracking-tight leading-tight">
                  Why Karachi Businesses Choose FAYJEXTECH Over Generic Agencies
                </h2>

                <p className="text-sm text-slate-600 leading-relaxed">
                  We don&apos;t just sell you software and vanish. Our founders visit your shop, configure your counter cables, test print receipt slips with your phone number, and provide direct emergency assistance.
                </p>

                <div className="p-5 rounded-2xl bg-[#002B66] text-white space-y-3">
                  <h4 className="text-sm font-bold text-[#00C4FF] flex items-center gap-2">
                    <Sparkles className="w-4 h-4" />
                    <span>Direct Accountability</span>
                  </h4>
                  <p className="text-xs text-slate-200 leading-relaxed">
                    You have direct phone numbers for Abdul Jabbar (Co-Founder) and Fayyaz Khan (Founder). No call tickets or automated replies.
                  </p>
                  <Button to="/contact" variant="accent" size="sm" className="w-full justify-center">
                    Speak Directly With Us
                  </Button>
                </div>
              </div>
            </div>

            {/* Right Detailed Feature Breakdown (Nanosoft .remote_description) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200 hover-lift shadow-xs">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0056D2] flex items-center justify-center font-bold mb-4 border border-blue-200">
                  <Monitor className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[#0F172A] mb-2">
                  1. Zero Monthly Subscriptions — Permanent Ownership
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Standard SaaS systems lock your shop data behind heavy monthly or yearly subscription fees. If you miss a payment, your register is locked. With FAYJEXTECH, you own your software permanently on your local hardware.
                </p>
              </div>

              <div className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200 hover-lift shadow-xs">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#00873D] flex items-center justify-center font-bold mb-4 border border-emerald-200">
                  <HardDrive className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[#0F172A] mb-2">
                  2. 100% Offline Fault Tolerance
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Local internet connections in Karachi can drop due to line cuts or weather. Our software runs on local high-performance ACID databases that execute instant barcode scans and thermal receipts with zero dependency on the internet.
                </p>
              </div>

              <div className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200 hover-lift shadow-xs">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0056D2] flex items-center justify-center font-bold mb-4 border border-blue-200">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[#0F172A] mb-2">
                  3. Tailored to Local Market Norms (Urdu &amp; English)
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Whether you need thermal receipts in Urdu, custom product short codes for fast typing, or integration with weighing scales for sweets and meat, we customize the software specifically for your counters.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==============================================================
          SECTION 7: CLIENT TESTIMONIALS (Nanosoft .happy_customers)
          ============================================================== */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeader
            badge="Customer Testimonials"
            title="Trusted by Local Business Owners Across Karachi"
            subtitle="Here is what shopkeepers and institutional heads have to say about our software and counter hardware installations:"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="bg-[#F8FAFC] rounded-2xl p-6 sm:p-7 border border-slate-200 hover-lift text-left flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 text-amber-400 mb-3">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>

                  <Quote className="w-8 h-8 text-blue-200 mb-2" />

                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic mb-6">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200">
                  <h4 className="text-xs sm:text-sm font-bold text-[#0F172A]">{t.name}</h4>
                  <span className="text-[11px] text-[#0056D2] font-semibold">{t.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==============================================================
          SECTION 8: FIND TALENT. YOUR WAY. (Nanosoft .find_talent Banner)
          ============================================================== */}
      <section className="py-20 bg-gradient-to-r from-[#002B66] via-[#00388F] to-[#002B66] text-white relative overflow-hidden">
        <div className="nanosoft-ellipse-blue w-96 h-96 -top-20 -left-10" />
        <div className="nanosoft-ellipse-green w-96 h-96 -bottom-20 -right-10" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Find Technology. Your Way.
          </h2>

          <p className="text-sm sm:text-base text-slate-200 max-w-2xl mx-auto leading-relaxed">
            Join growing retailers, bakeries, pharmacies, and institutions across Karachi. Work directly with <strong>FAYJEXTECH</strong> to scale your shop billing counters with zero headache.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#00B050] hover:bg-[#009644] text-white text-sm sm:text-base font-bold shadow-xl shadow-green-600/30 hover:scale-105 transition-all cursor-pointer"
            >
              <span>Hire Top Talent Now</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href={`https://wa.me/${siteConfig.founders[1].phoneClean}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-sm sm:text-base font-bold border border-white/20 hover:scale-105 transition-all"
            >
              <MessageSquare className="w-4 h-4 text-[#00C4FF]" />
              <span>WhatsApp Us Directly</span>
            </a>
          </div>

          <p className="text-xs text-slate-400 pt-2">
            Based in Orangi Town, Karachi • 9:00 AM – 5:00 PM (Monday–Thursday &amp; Saturday • Friday &amp; Sunday Off)
          </p>
        </div>
      </section>
    </div>
  );
};

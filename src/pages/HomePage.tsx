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
  CheckCircle2,
} from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { Button } from '../components/common/Button';
import { SectionHeader } from '../components/common/SectionHeader';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

export const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const { lang, isUrdu } = useLanguage();
  const t = translations[lang];
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
    { name: 'Core POS Engine', tag: 'Python (Custom Core Engine)' },
    { name: 'POS Desktop Systems', tag: 'Python / C# Desktop' },
    { name: 'Offline ACID Database', tag: 'SQLite / PostgreSQL' },
    { name: 'React UI Counters', tag: 'React 19 & Tailwind' },
    { name: 'Thermal ESC/POS Slip', tag: 'Python Serial / USB 80mm' },
    { name: 'Barcode Scanner Protocol', tag: 'HID / Virtual COM' },
    { name: 'Khata Automation Scripts', tag: 'Python Scripts' },
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
            <Cpu className="w-4 h-4 text-[#0056D2]" />
            <span>Python Powered POS Core</span>
          </div>

          <div className="absolute bottom-28 left-8 animate-float-2 p-3 rounded-2xl bg-white/90 backdrop-blur-md border border-emerald-200 shadow-lg text-xs font-bold text-[#00B050] flex items-center gap-2">
            <HardDrive className="w-4 h-4 text-[#00B050]" />
            <span>100% Offline Python + SQLite</span>
          </div>

          <div className="absolute top-24 right-12 animate-float-3 p-3 rounded-2xl bg-white/90 backdrop-blur-md border border-cyan-200 shadow-lg text-xs font-bold text-[#0056D2] flex items-center gap-2">
            <Printer className="w-4 h-4 text-[#00C4FF]" />
            <span>Python Thermal ESC/POS Driver</span>
          </div>

          <div className="absolute bottom-24 right-10 animate-float-1 p-3 rounded-2xl bg-white/90 backdrop-blur-md border border-blue-200 shadow-lg text-xs font-bold text-[#0056D2] flex items-center gap-2">
            <Zap className="w-4 h-4 text-[#00B050]" />
            <span>Fast Native Performance</span>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          {/* Top Pill / Shimmer Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-blue-200 shadow-xs shimmer-badge mb-6">
            <Sparkles className="w-4 h-4 text-[#0056D2]" />
            <span className="text-xs font-bold text-[#0056D2]">
              {siteConfig.brand.name} • <span className="text-[#00B050]">{t.tagline}</span>
            </span>
          </div>

          {/* Headline (Nanosoft Inspired Headline Structure) */}
          <h1 className={`text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.2] text-[#0B132B] ${isUrdu ? 'font-nastaliq' : ''}`}>
            {t.heroTitleLead} <br />
            <span className="shimmer-gradient-text">{t.heroTitleHighlight}</span> {t.heroTitleEnd}
          </h1>

          {/* Subtitle */}
          <p className={`mt-5 text-base sm:text-lg text-slate-700 leading-relaxed max-w-3xl mx-auto ${isUrdu ? 'font-nastaliq' : ''}`}>
            {t.heroDescription}
          </p>

          {/* Key Quick Guarantees Pill Badges */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-xs font-semibold text-slate-700">
            <span className="px-3 py-1.5 rounded-full bg-blue-50 text-[#0056D2] border border-blue-200 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#00B050]" />
              <span>{t.heroOfflineGuarantee}</span>
            </span>
            <span className="px-3 py-1.5 rounded-full bg-emerald-50 text-[#00873D] border border-emerald-200 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#00B050]" />
              <span>{t.heroLocalHardware}</span>
            </span>
            <span className="px-3 py-1.5 rounded-full bg-amber-50 text-amber-800 border border-amber-200 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-amber-600" />
              <span>{t.heroFreeConsult}</span>
            </span>
          </div>

          {/* Interactive Fast Scoping Form (Nanosoft Style Top Banner Form) */}
          <form
            onSubmit={handleHeroFormSubmit}
            className="mt-8 bg-white/95 backdrop-blur-md p-3 sm:p-4 rounded-2xl border border-slate-200 shadow-2xl max-w-3xl mx-auto"
          >
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-center">
              <div className="sm:col-span-4 text-left">
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1 ml-1">
                  {isUrdu ? 'آپ کا موبائل / واٹس ایپ نمبر' : 'Phone / WhatsApp Number'}
                </label>
                <input
                  type="text"
                  required
                  placeholder={isUrdu ? 'مثلاً: 03451234567' : '0345 1234567'}
                  value={quickEmail}
                  onChange={(e) => setQuickEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl bg-slate-50 border border-slate-200 text-[#0F172A] focus:bg-white focus:border-[#0056D2] focus:outline-none transition-colors"
                />
              </div>

              <div className="sm:col-span-5 text-left">
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1 ml-1">
                  {isUrdu ? 'آپ کو کس چیز کی ضرورت ہے؟' : 'Select Solution / Service'}
                </label>
                <select
                  value={quickService}
                  onChange={(e) => setQuickService(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl bg-slate-50 border border-slate-200 text-[#0F172A] focus:bg-white focus:border-[#0056D2] focus:outline-none transition-colors font-medium"
                >
                  <option value="Custom POS Systems (All Business Types)">
                    {isUrdu ? 'ہر قسم کا پی او ایس (مارٹ، جنرل اسٹور، بیکری)' : 'Custom POS (Retail Marts, Bakeries, Medical)'}
                  </option>
                  <option value="Complete PC Counter Hardware Setup">
                    {isUrdu ? 'مکمل کمپیوٹر کاؤنٹر سیٹ اپ (پی سی + پرنٹر + اسکینر)' : 'Complete PC Counter Setup (PC + Thermal + Scanner)'}
                  </option>
                  <option value="Management Systems & Ledgers">
                    {isUrdu ? 'ادارہ جاتی / مدرسہ و اسکول کھاتہ مینجمنٹ' : 'Institutional / Madrasa & Khata Ledgers'}
                  </option>
                  <option value="Workflow Automation & Web">
                    {isUrdu ? 'ورک فلو آٹومیشن اور جدید ویب سائٹ' : 'Workflow Automation & Fast Business Website'}
                  </option>
                  <option value="System Maintenance & Hardware Setup">
                    {isUrdu ? 'موجودہ سسٹم کی مرمت اور دکان پر وزٹ' : 'On-Site Karachi Shop Visit & Maintenance'}
                  </option>
                </select>
              </div>

              <div className="sm:col-span-3 pt-2 sm:pt-4">
                <button
                  type="submit"
                  className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-[#0056D2] to-[#00388F] text-white text-xs sm:text-sm font-bold shadow-md shadow-blue-500/25 hover:shadow-lg hover:shadow-blue-500/35 hover:scale-[1.02] transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>{t.heroPrimaryCta}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </form>

          {/* Direct Founders Contact Ribbon */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href={siteConfig.contact.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#00B050] hover:bg-[#009644] text-white text-xs sm:text-sm font-bold shadow-md shadow-green-600/20 hover:-translate-y-0.5 transition-all"
            >
              <MessageSquare className="w-4 h-4 text-white" />
              <span>{t.heroSecondaryCta}</span>
            </a>

            <a
              href={`tel:${siteConfig.contact.phoneClean}`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-[#0056D2] border border-blue-200 text-xs sm:text-sm font-bold hover:bg-blue-50 hover:-translate-y-0.5 transition-all shadow-xs"
            >
              <Phone className="w-4 h-4 text-[#0056D2]" />
              <span>{isUrdu ? `کال ہیلپ لائن: ${siteConfig.contact.phone}` : `Call Helpline: ${siteConfig.contact.phone}`}</span>
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
            badge={t.processBadge}
            title={t.processTitle}
            subtitle={t.processSubtitle}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            {/* Step 1 */}
            <div className="bg-[#F8FAFC] rounded-2xl p-8 border border-slate-200 hover-lift flex flex-col items-center text-center relative">
              <div className="w-16 h-16 rounded-2xl bg-blue-50 text-[#0056D2] border border-blue-200 flex items-center justify-center font-extrabold text-2xl mb-5 shadow-xs">
                01
              </div>
              <h3 className="text-lg font-bold text-[#0F172A] mb-2">
                {t.step1Title}
              </h3>
              <p className={`text-xs sm:text-sm text-slate-600 leading-relaxed ${isUrdu ? 'font-nastaliq' : ''}`}>
                {t.step1Desc}
              </p>
              <div className="mt-5 pt-4 border-t border-slate-200 w-full text-xs font-bold text-[#0056D2]">
                {isUrdu ? 'فوری رابطہ اور مشورہ' : 'Instant Response Guaranteed'}
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-[#F8FAFC] rounded-2xl p-8 border border-slate-200 hover-lift flex flex-col items-center text-center relative">
              <div className="w-16 h-16 rounded-2xl bg-emerald-50 text-[#00873D] border border-emerald-200 flex items-center justify-center font-extrabold text-2xl mb-5 shadow-xs">
                02
              </div>
              <h3 className="text-lg font-bold text-[#0F172A] mb-2">
                {t.step2Title}
              </h3>
              <p className={`text-xs sm:text-sm text-slate-600 leading-relaxed ${isUrdu ? 'font-nastaliq' : ''}`}>
                {t.step2Desc}
              </p>
              <div className="mt-5 pt-4 border-t border-slate-200 w-full text-xs font-bold text-[#00B050]">
                {isUrdu ? 'پورے کراچی میں وزٹ کی سہولت' : 'Karachi-Wide On-Site Visits'}
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-[#F8FAFC] rounded-2xl p-8 border border-slate-200 hover-lift flex flex-col items-center text-center relative">
              <div className="w-16 h-16 rounded-2xl bg-blue-50 text-[#0056D2] border border-blue-200 flex items-center justify-center font-extrabold text-2xl mb-5 shadow-xs">
                03
              </div>
              <h3 className="text-lg font-bold text-[#0F172A] mb-2">
                {t.step3Title}
              </h3>
              <p className={`text-xs sm:text-sm text-slate-600 leading-relaxed ${isUrdu ? 'font-nastaliq' : ''}`}>
                {t.step3Desc}
              </p>
              <div className="mt-5 pt-4 border-t border-slate-200 w-full text-xs font-bold text-[#0056D2]">
                {isUrdu ? 'لائف ٹائم ملکیت — زیرو منتھلی فیس' : 'Permanent Software Ownership'}
              </div>
            </div>
          </div>

          <div className="mt-12">
            <Button to="/contact" variant="primary" size="lg">
              {isUrdu ? 'پہلا مرحلہ شروع کریں: بانیان سے رابطہ' : 'Start Step 1: Talk With Founders'}
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
                {isUrdu ? 'مکمل کمپیوٹر و کاؤنٹر ہارڈ ویئر' : 'Turnkey Hardware & Software'}
              </span>

              <h2 className={`text-3xl sm:text-4xl font-extrabold text-[#0B132B] tracking-tight leading-tight ${isUrdu ? 'font-nastaliq' : ''}`}>
                {isUrdu
                  ? 'دکان کے روزمرہ رش کے لیے خاص تیار کردہ کمپیوٹر بلنگ کاؤنٹر'
                  : 'Complete PC Billing Counters & Systems Engineered for Daily Rigor'}
              </h2>

              <p className={`text-sm sm:text-base text-slate-600 leading-relaxed ${isUrdu ? 'font-nastaliq' : ''}`}>
                {isUrdu
                  ? 'فایجیکس ٹیک آپ کی دکان کے لیے آف لائن پی او ایس سافٹ ویئر اور مضبوط کمپیوٹر ہارڈ ویئر کا مکمل سیٹ اپ لگاتی ہے۔ کور آئی ۳ یا آئی ۵ ڈیسک ٹاپ، تیز رفتار تھرمل رسید پرنٹر اور کیش دراز کے ساتھ آپ کا کاؤنٹر لائٹ یا نیٹ کے بغیر بھی بلا تعطل چلتا ہے۔'
                  : 'FAYJEXTECH pairs customized offline POS software with dependable PC hardware. From Core i3/i5 desktop units to high-speed 80mm thermal receipt printers and heavy-duty cash drawers, we make sure your cash counter runs uninterrupted during power cuts and load shedding.'}
              </p>

              {/* Nanosoft Style 4 Stat Counters */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-slate-200">
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
                  <span className="text-2xl sm:text-3xl font-extrabold text-[#0056D2] block">{t.metric1Label}</span>
                  <span className="text-xs font-bold text-[#0F172A] mt-1 block">{isUrdu ? 'آف لائن گارنٹی' : 'Offline Guarantee'}</span>
                  <span className="text-[11px] text-slate-500">{t.metric1Sub}</span>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
                  <span className="text-2xl sm:text-3xl font-extrabold text-[#00B050] block">{t.metric2Label}</span>
                  <span className="text-xs font-bold text-[#0F172A] mt-1 block">{isUrdu ? 'ماہانہ فیس صفر' : 'Zero Monthly Fee'}</span>
                  <span className="text-[11px] text-slate-500">{t.metric2Sub}</span>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
                  <span className="text-2xl sm:text-3xl font-extrabold text-[#0056D2] block">{t.metric3Label}</span>
                  <span className="text-xs font-bold text-[#0F172A] mt-1 block">{isUrdu ? 'تیز رفتار بلنگ' : 'Ultra Fast Billing'}</span>
                  <span className="text-[11px] text-slate-500">{t.metric3Sub}</span>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
                  <span className="text-2xl sm:text-3xl font-extrabold text-[#00B050] block">{t.metric4Label}</span>
                  <span className="text-xs font-bold text-[#0F172A] mt-1 block">{isUrdu ? 'لوکل سپورٹ' : 'Local Support'}</span>
                  <span className="text-[11px] text-slate-500">{t.metric4Sub}</span>
                </div>
              </div>

              <div className="pt-2">
                <Button to="/products/al-tijarah-pos" variant="primary" size="md">
                  {isUrdu ? 'پی او ایس ہارڈ ویئر اور تفصیلات دیکھیں' : 'View Full POS Hardware Specifications'}
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
                    <Cpu className="w-4 h-4 text-[#0056D2]" />
                    <span className="font-bold text-[#0F172A]">Python POS Engine</span>
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
          SECTION 5.5: REAL INSTALLATIONS & FOUNDERS IN ACTION (Rich Photo Gallery)
          ============================================================== */}
      <section className="py-20 bg-gradient-to-b from-white via-slate-50 to-white border-b border-slate-200 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge={t.galleryBadge}
            title={t.galleryTitle}
            subtitle={t.gallerySubtitle}
          />

          {/* Founders Spotlight Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
            {siteConfig.founders.map((founder, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xl shadow-slate-200/50 hover-lift flex flex-col sm:flex-row items-center gap-6 relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full blur-2xl group-hover:bg-emerald-50 transition-colors pointer-events-none" />

                <div className="relative shrink-0">
                  <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-2xl overflow-hidden border-4 border-white shadow-lg ring-2 ring-blue-500/20 group-hover:ring-[#00B050] transition-all">
                    <img
                      src={founder.image}
                      alt={founder.name}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-[#00B050] text-white p-1.5 rounded-lg shadow-md">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                </div>

                <div className="flex-1 text-center sm:text-left space-y-2">
                  <span className="inline-block text-[11px] font-extrabold uppercase tracking-wider text-[#0056D2] bg-blue-50 px-3 py-1 rounded-full border border-blue-200/60">
                    {idx === 0 ? t.founder1Role : t.founder2Role}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-[#0F172A] tracking-tight">
                    {founder.name}
                  </h3>
                  <p className={`text-xs sm:text-sm text-slate-600 leading-relaxed ${isUrdu ? 'font-nastaliq' : ''}`}>
                    {idx === 0 ? t.founder1Bio : t.founder2Bio}
                  </p>
                  <div className="pt-2 flex flex-wrap items-center justify-center sm:justify-start gap-2">
                    <a
                      href={`mailto:${founder.email}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 bg-slate-100 hover:bg-[#0056D2] hover:text-white px-3 py-1.5 rounded-lg transition-colors border border-slate-200"
                    >
                      <span>{founder.email}</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Visual Grid: Real Retail Counters, Touch POS & Modern Workstations */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="group relative rounded-2xl overflow-hidden border border-slate-200/80 shadow-md bg-white hover-lift">
              <div className="h-52 overflow-hidden relative">
                <img
                  src="./images/mart_pos.jpg"
                  alt="Supermarket & Mart Counter POS Setup"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <span className="absolute bottom-3 left-3 text-xs font-bold text-white bg-[#0056D2]/90 backdrop-blur-sm px-2.5 py-1 rounded-md">
                  Supermarket &amp; Mart POS
                </span>
              </div>
              <div className="p-4 bg-white space-y-1">
                <p className="text-xs font-semibold text-slate-800">High-speed barcode billing</p>
                <p className="text-[11px] text-slate-500">Offline cash drawer &amp; receipt printer integration</p>
              </div>
            </div>

            <div className="group relative rounded-2xl overflow-hidden border border-slate-200/80 shadow-md bg-white hover-lift">
              <div className="h-52 overflow-hidden relative">
                <img
                  src="./images/pos_touchscreen.jpg"
                  alt="Touchscreen POS Terminal"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <span className="absolute bottom-3 left-3 text-xs font-bold text-white bg-[#00B050]/90 backdrop-blur-sm px-2.5 py-1 rounded-md">
                  Touch POS Hardware
                </span>
              </div>
              <div className="p-4 bg-white space-y-1">
                <p className="text-xs font-semibold text-slate-800">All-in-One Touch Billing</p>
                <p className="text-[11px] text-slate-500">Fast item tap, multi-kds screen &amp; thermal printing</p>
              </div>
            </div>

            <div className="group relative rounded-2xl overflow-hidden border border-slate-200/80 shadow-md bg-white hover-lift">
              <div className="h-52 overflow-hidden relative">
                <img
                  src="./images/bakery_pos.jpg"
                  alt="Bakery & Sweet Shop Weighing Scale POS"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <span className="absolute bottom-3 left-3 text-xs font-bold text-white bg-amber-600/90 backdrop-blur-sm px-2.5 py-1 rounded-md">
                  Bakery &amp; Sweets Counter
                </span>
              </div>
              <div className="p-4 bg-white space-y-1">
                <p className="text-xs font-semibold text-slate-800">Weighing Scale Synchronization</p>
                <p className="text-[11px] text-slate-500">Automated gram billing and daily item freshness</p>
              </div>
            </div>

            <div className="group relative rounded-2xl overflow-hidden border border-slate-200/80 shadow-md bg-white hover-lift">
              <div className="h-52 overflow-hidden relative">
                <img
                  src="./images/cashier_pos.jpg"
                  alt="Retail Cashier Checkout Desk"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <span className="absolute bottom-3 left-3 text-xs font-bold text-white bg-[#0F172A]/90 backdrop-blur-sm px-2.5 py-1 rounded-md">
                  Cashier &amp; Inventory Hub
                </span>
              </div>
              <div className="p-4 bg-white space-y-1">
                <p className="text-xs font-semibold text-slate-800">Multi-Counter Local Network</p>
                <p className="text-[11px] text-slate-500">Centralized database sync with zero cloud delay</p>
              </div>
            </div>
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
                  {t.whyBadge}
                </span>

                <h2 className={`text-3xl sm:text-4xl font-extrabold text-[#0B132B] tracking-tight leading-tight ${isUrdu ? 'font-nastaliq' : ''}`}>
                  {t.whyTitle}
                </h2>

                <p className={`text-sm text-slate-600 leading-relaxed ${isUrdu ? 'font-nastaliq' : ''}`}>
                  {t.whySubtitle}
                </p>

                <div className="p-5 rounded-2xl bg-[#002B66] text-white space-y-3">
                  <h4 className="text-sm font-bold text-[#00C4FF] flex items-center gap-2">
                    <Sparkles className="w-4 h-4" />
                    <span>{isUrdu ? 'براہ راست بانیان سے بات' : 'Direct Accountability'}</span>
                  </h4>
                  <p className={`text-xs text-slate-200 leading-relaxed ${isUrdu ? 'font-nastaliq' : ''}`}>
                    {isUrdu
                      ? 'عبدالجبار (شریک بانی) اور فیاض خان (بانی) کا براہ راست نمبر آپ کے پاس ہو گا، بغیر کسی کال سینٹر یا خودکار سسٹم کے چکر کے۔'
                      : 'You have direct contact with Abdul Jabbar (Co-Founder) and Fayyaz Khan (Founder). No call tickets or automated robot replies.'}
                  </p>
                  <Button to="/contact" variant="accent" size="sm" className="w-full justify-center">
                    {t.whyCta}
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
          <h2 className={`text-3xl sm:text-5xl font-extrabold tracking-tight text-white ${isUrdu ? 'font-nastaliq' : ''}`}>
            {t.bannerTitle}
          </h2>

          <p className={`text-sm sm:text-base text-slate-200 max-w-2xl mx-auto leading-relaxed ${isUrdu ? 'font-nastaliq' : ''}`}>
            {t.bannerDesc}
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#00B050] hover:bg-[#009644] text-white text-sm sm:text-base font-bold shadow-xl shadow-green-600/30 hover:scale-105 transition-all cursor-pointer"
            >
              <span>{t.bannerPrimaryCta}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href={siteConfig.contact.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-sm sm:text-base font-bold border border-white/20 hover:scale-105 transition-all"
            >
              <MessageSquare className="w-4 h-4 text-[#00C4FF]" />
              <span>{t.bannerSecondaryCta}</span>
            </a>
          </div>

          <p className="text-xs text-slate-400 pt-2">
            {t.bannerOfficeNote}
          </p>
        </div>
      </section>
    </div>
  );
};

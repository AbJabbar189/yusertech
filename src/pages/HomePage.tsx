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
      {/* MODERN LIGHT HERO SECTION */}
      <section className="relative bg-gradient-to-b from-white via-[#F8FAF9] to-[#F1F6F3] pt-12 pb-20 md:pt-20 md:pb-28 border-b border-[#E2E8E4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Headline and Positioning */}
            <div className="lg:col-span-7 flex flex-col items-start space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EBF3EE] border border-[#CFE1D6] text-xs font-bold text-[#123B2A]">
                <Sparkles className="w-3.5 h-3.5 text-[#C59E3F]" />
                <span>Karachi Software Agency • Founded by Fayyaz Khan &amp; Abdul Jabbar</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-5.5xl font-extrabold tracking-tight leading-[1.12] text-[#1A231F]">
                Custom POS, Management Systems &amp; Business Software for Your Trade.
              </h1>

              <p className="text-base sm:text-lg text-[#5C6760] leading-relaxed max-w-2xl">
                YUSERTECH builds customized point-of-sale software for all business types (Retail, Marts, Bakeries, Pharmacies &amp; Wholesalers), institutional management systems, and automated workflow tools. 100% offline-ready with zero monthly software traps.
              </p>

              {/* Direct Founder Contact Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-1 w-full sm:w-auto">
                <a
                  href={`https://wa.me/${siteConfig.founders[1].phoneClean}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#123B2A] text-white text-xs sm:text-sm font-bold shadow-xs hover:bg-[#0B251A] transition-all"
                >
                  <MessageSquare className="w-4 h-4 text-[#C59E3F]" />
                  <span>WhatsApp: Abdul Jabbar (0346 7366879)</span>
                </a>
                <a
                  href={`https://wa.me/${siteConfig.founders[0].phoneClean}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white text-[#123B2A] border border-[#CFE1D6] text-xs sm:text-sm font-bold hover:bg-[#EBF3EE] transition-all"
                >
                  <MessageSquare className="w-4 h-4 text-[#C59E3F]" />
                  <span>WhatsApp: Fayyaz Khan (0342 2643761)</span>
                </a>
              </div>

              {/* Quick Trust Highlights */}
              <div className="pt-4 border-t border-[#E2E8E4] w-full grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-[#425048]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#123B2A] shrink-0" />
                  <span className="font-medium">All Business POS Types</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#123B2A] shrink-0" />
                  <span className="font-medium">100% Offline Resilience</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#123B2A] shrink-0" />
                  <span className="font-medium">Direct Founder Support</span>
                </div>
              </div>
            </div>

            {/* Right Column: Modern Light Overview Card (Clean Architecture) */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-2xl border border-[#DCE4E0] p-6 sm:p-7 shadow-[0_4px_24px_rgba(18,59,42,0.06)] space-y-5">
                <div className="flex items-center justify-between pb-3 border-b border-[#EEF2F0]">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#123B2A]" />
                    <span className="text-xs font-bold uppercase tracking-wider text-[#123B2A]">
                      YUSERTECH Core Capabilities
                    </span>
                  </div>
                  <span className="text-[11px] font-semibold text-[#C59E3F] bg-[#FDF8EB] px-2.5 py-0.5 rounded-md border border-[#F3E3BC]">
                    Karachi Based
                  </span>
                </div>

                {/* Capability Items */}
                <div className="space-y-3">
                  <div className="p-3.5 rounded-xl bg-[#F8FAF9] border border-[#E6EDE8] flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#EBF3EE] text-[#123B2A] flex items-center justify-center shrink-0 font-bold">
                      <ShoppingBag className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-[#1A231F]">
                        Customized Point-of-Sale (POS)
                      </h4>
                      <p className="text-[11px] text-[#5C6760] mt-0.5">
                        Retail stores, mini-marts, bakeries, cafes, pharmacies, and wholesale distribution counters with thermal slips.
                      </p>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#F8FAF9] border border-[#E6EDE8] flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#EBF3EE] text-[#123B2A] flex items-center justify-center shrink-0 font-bold">
                      <LayoutGrid className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-[#1A231F]">
                        Management Systems &amp; Ledgers
                      </h4>
                      <p className="text-[11px] text-[#5C6760] mt-0.5">
                        Madrasa admissions, student fee vouchers, exam tabulation, and business Khata ledgers.
                      </p>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#F8FAF9] border border-[#E6EDE8] flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#EBF3EE] text-[#123B2A] flex items-center justify-center shrink-0 font-bold">
                      <Cpu className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-[#1A231F]">
                        Process Automation &amp; Websites
                      </h4>
                      <p className="text-[11px] text-[#5C6760] mt-0.5">
                        Auto-generated invoice PDFs, daily WhatsApp reports, and fast responsive agency websites.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Founder direct call bar */}
                <div className="p-3 rounded-xl bg-[#EBF3EE] border border-[#CFE1D6] flex items-center justify-between text-xs">
                  <div>
                    <span className="font-bold text-[#123B2A] block">On-Site Consultation in Karachi</span>
                    <span className="text-[11px] text-[#5C6760]">Based in Orangi Town</span>
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

      {/* SECTION 2: SERVICES OVERVIEW */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="What We Build"
            title="Practical Software Services Built for Daily Operations"
            subtitle="We don't sell bloated templates or monthly locked subscriptions. We build clear, custom tools that automate your workflow and secure your cash counter."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {siteConfig.services.map((service) => (
              <div
                key={service.id}
                className="bg-[#F8FAF9] rounded-2xl p-6 sm:p-7 border border-[#E2E8E4] hover:border-[#123B2A]/40 transition-all hover:shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#EBF3EE] text-[#123B2A] flex items-center justify-center mb-4 border border-[#CFE1D6]">
                    {getIcon(service.iconName)}
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-[#1A231F] mb-2">{service.title}</h3>
                  <p className="text-xs sm:text-sm text-[#5C6760] leading-relaxed mb-4">
                    {service.shortDescription}
                  </p>
                  <div className="pt-3 border-t border-[#E8EFEA]">
                    <span className="text-[11px] font-bold text-[#123B2A] uppercase tracking-wider block mb-1">
                      Key Benefit
                    </span>
                    <p className="text-xs text-[#2C3832]">{service.benefits[0]}</p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[#E2E8E4]">
                  <Link
                    to={`/services#${service.id}`}
                    className="text-xs font-bold text-[#123B2A] hover:text-[#C59E3F] inline-flex items-center gap-1 transition-colors"
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

      {/* SECTION 3: FOUNDERS & LEADERSHIP */}
      <section className="py-20 bg-[#F4F7F5] border-y border-[#E2E8E4]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Leadership"
            title="Meet the Founders Behind YUSERTECH"
            subtitle="Direct communication with the actual minds engineering your software. No call centers, no outsourced contractors."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Fayyaz Khan */}
            <div className="bg-white rounded-2xl border border-[#DCE4E0] p-6 sm:p-8 flex flex-col justify-between shadow-2xs">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#EBF3EE] text-[#123B2A] flex items-center justify-center font-bold text-lg">
                    FK
                  </div>
                  <Badge variant="forest">Founder</Badge>
                </div>
                <h3 className="text-xl font-bold text-[#1A231F]">Fayyaz Khan</h3>
                <span className="text-xs text-[#C59E3F] font-bold block mb-3">Founder &amp; Business Strategist</span>
                <p className="text-xs sm:text-sm text-[#5C6760] leading-relaxed mb-6">
                  {siteConfig.founders[0].bio} Fayyaz works directly with business owners across Karachi to understand counter workflows, pricing, and project milestones.
                </p>
              </div>

              <div className="pt-4 border-t border-[#EEF2F0] space-y-2">
                <a
                  href={`tel:${siteConfig.founders[0].phoneClean}`}
                  className="flex items-center gap-2 text-xs font-semibold text-[#1A231F] hover:text-[#123B2A]"
                >
                  <Phone className="w-3.5 h-3.5 text-[#C59E3F]" />
                  <span>Call: {siteConfig.founders[0].phone}</span>
                </a>
                <a
                  href={siteConfig.founders[0].whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#123B2A] hover:underline"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Message on WhatsApp →</span>
                </a>
              </div>
            </div>

            {/* Abdul Jabbar */}
            <div className="bg-white rounded-2xl border border-[#DCE4E0] p-6 sm:p-8 flex flex-col justify-between shadow-2xs">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#EBF3EE] text-[#123B2A] flex items-center justify-center font-bold text-lg">
                    AJ
                  </div>
                  <Badge variant="gold">Co-Founder</Badge>
                </div>
                <h3 className="text-xl font-bold text-[#1A231F]">Abdul Jabbar</h3>
                <span className="text-xs text-[#123B2A] font-bold block mb-3">Co-Founder &amp; Lead Systems Engineer</span>
                <p className="text-xs sm:text-sm text-[#5C6760] leading-relaxed mb-6">
                  {siteConfig.founders[1].bio} Abdul Jabbar handles database architecture, offline POS reliability, thermal printer protocols, and automation scripts.
                </p>
              </div>

              <div className="pt-4 border-t border-[#EEF2F0] space-y-2">
                <a
                  href={`tel:${siteConfig.founders[1].phoneClean}`}
                  className="flex items-center gap-2 text-xs font-semibold text-[#1A231F] hover:text-[#123B2A]"
                >
                  <Phone className="w-3.5 h-3.5 text-[#C59E3F]" />
                  <span>Call: {siteConfig.founders[1].phone}</span>
                </a>
                <a
                  href={siteConfig.founders[1].whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#123B2A] hover:underline"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Message on WhatsApp →</span>
                </a>
              </div>
            </div>
          </div>

          {/* Operating hours & location notice */}
          <div className="mt-8 p-4 rounded-xl bg-white border border-[#DCE4E0] max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#5C6760]">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#C59E3F] shrink-0" />
              <span>Based in <strong>Orangi Town, Karachi</strong> (Remote &amp; Client On-Site Operations).</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#C59E3F] shrink-0" />
              <span><strong>9:00 AM – 5:00 PM</strong> (Mon–Thu &amp; Sat) • <em>Friday &amp; Sunday Off</em></span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: FEATURED PRODUCTS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Software Solutions"
            title="Dedicated Systems Built for Local Business Conditions"
            subtitle="Engineered to eliminate paperwork chaos, checkout queues, and unrecorded cash discrepancies."
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {siteConfig.products.map((product) => (
              <div
                key={product.id}
                className="bg-[#F8FAF9] border border-[#E2E8E4] rounded-2xl overflow-hidden flex flex-col justify-between hover:border-[#123B2A]/50 transition-colors"
              >
                <div className="p-6 sm:p-7">
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#5C6760]">
                      {product.category}
                    </span>
                    <Badge variant={product.status}>{product.status}</Badge>
                  </div>

                  <h3 className="text-xl font-bold text-[#1A231F] mb-2">{product.name}</h3>
                  <p className="text-xs sm:text-sm text-[#5C6760] leading-relaxed mb-5">
                    {product.shortDescription}
                  </p>

                  <div className="space-y-2 pt-3 border-t border-[#E2E8E4]">
                    <span className="text-xs font-bold text-[#123B2A] uppercase tracking-wider block mb-1">
                      Key Capabilities:
                    </span>
                    {product.keyFeatures.slice(0, 3).map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-[#2C3832]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#123B2A] shrink-0 mt-0.5" />
                        <span>{feat.title}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 p-3 rounded-xl bg-white border border-[#E2E8E4] text-xs text-[#5C6760]">
                    <span className="font-semibold text-[#1A231F] block text-[11px]">Hardware / Platform:</span>
                    <span>{product.deploymentType}</span>
                  </div>
                </div>

                <div className="p-5 bg-white border-t border-[#E2E8E4] flex items-center justify-between gap-3">
                  <Link
                    to={`/products/${product.slug}`}
                    className="text-xs font-bold text-[#123B2A] hover:text-[#C59E3F] inline-flex items-center gap-1 transition-colors"
                  >
                    <span>View Specifications</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <Button to="/contact" variant="secondary" size="sm">
                    Inquire
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: WHY CHOOSE YUSERTECH */}
      <section className="py-20 bg-[#F4F7F5] border-t border-[#E2E8E4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Why Us"
            title="Why Business Owners in Karachi Choose YUSERTECH"
            subtitle="Straightforward accountability, reliable offline performance, and real business ownership."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {siteConfig.whyChooseUs.map((item, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#E2E8E4] rounded-2xl p-6 flex flex-col justify-start shadow-2xs"
              >
                <div className="w-10 h-10 rounded-xl bg-[#EBF3EE] text-[#123B2A] flex items-center justify-center font-bold mb-4 border border-[#CFE1D6]">
                  <ShieldCheck className="w-5 h-5 text-[#123B2A]" />
                </div>
                <h3 className="text-base font-bold text-[#1A231F] mb-2">{item.title}</h3>
                <p className="text-xs text-[#5C6760] leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: INQUIRY BANNER */}
      <section className="py-16 bg-[#123B2A] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
            Want to Automate Your Shop or Organization?
          </h2>
          <p className="text-xs sm:text-sm text-[#E2EAE5]/85 max-w-xl mx-auto mb-6 leading-relaxed">
            Contact Abdul Jabbar or Fayyaz Khan directly to review your shop counter setup, printer requirements, or software specifications.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={`https://wa.me/${siteConfig.founders[1].phoneClean}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#C59E3F] hover:bg-[#B38C32] text-[#123B2A] text-xs sm:text-sm font-bold shadow-xs transition-all"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Abdul Jabbar (0346 7366879)</span>
            </a>
            <a
              href={`https://wa.me/${siteConfig.founders[0].phoneClean}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-bold border border-white/20 transition-all"
            >
              <Phone className="w-4 h-4 text-[#C59E3F]" />
              <span>Call Fayyaz Khan (0342 2643761)</span>
            </a>
          </div>

          <p className="text-[11px] text-[#A6BCB0] mt-4">
            Office Timing: 9:00 AM – 5:00 PM (Monday to Thursday &amp; Saturday • Friday &amp; Sunday Off)
          </p>
        </div>
      </section>
    </div>
  );
};

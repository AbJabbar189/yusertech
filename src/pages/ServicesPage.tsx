import React from 'react';
import {
  Globe,
  LayoutGrid,
  ShoppingBag,
  Cpu,
  ShieldCheck,
  CheckCircle2,
  MessageSquare,
} from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import type { ServiceItem } from '../config/siteConfig';
import { SectionHeader } from '../components/common/SectionHeader';

export const ServicesPage: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'ShoppingBag':
        return <ShoppingBag className="w-5 h-5" />;
      case 'LayoutGrid':
        return <LayoutGrid className="w-5 h-5" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5" />;
      case 'Globe':
        return <Globe className="w-5 h-5" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5" />;
      default:
        return <ShieldCheck className="w-5 h-5" />;
    }
  };

  return (
    <div className="bg-[#F8FAF9] py-14 sm:py-20 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Our Services"
          title="Software &amp; Web Services for Karachi Businesses"
          subtitle="From retail and food POS billing counters to full institutional management systems and workflow automation, we engineer software you own outright with 100% offline support."
        />

        {/* Quick jump navigation */}
        <div className="bg-white p-4 rounded-2xl border border-[#DCE4E0] mb-12 shadow-2xs">
          <span className="text-[11px] font-bold text-[#5C6760] uppercase tracking-wider block mb-2.5">
            Quick Jump to Service:
          </span>
          <div className="flex flex-wrap gap-2">
            {siteConfig.services.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-[#F8FAF9] hover:bg-[#123B2A] hover:text-white border border-[#E2E8E4] text-[#1A231F] transition-colors"
              >
                {s.title}
              </a>
            ))}
          </div>
        </div>

        {/* Services In-Depth List */}
        <div className="space-y-12">
          {siteConfig.services.map((service: ServiceItem, index: number) => (
            <div
              key={service.id}
              id={service.id}
              className="bg-white rounded-2xl border border-[#DCE4E0] overflow-hidden shadow-2xs scroll-mt-28"
            >
              {/* Service Header Bar */}
              <div className="bg-[#123B2A] text-white p-6 sm:p-7 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#1C4E38] text-[#C59E3F] flex items-center justify-center shrink-0">
                    {getIcon(service.iconName)}
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-[#D4B35E] uppercase tracking-wider block">
                      Category 0{index + 1}
                    </span>
                    <h2 className="text-lg sm:text-xl font-bold text-white">
                      {service.title}
                    </h2>
                  </div>
                </div>

                <a
                  href={`https://wa.me/${siteConfig.founders[1].phoneClean}?text=Salam%20Abdul%20Jabbar%20bhai%2C%20mujhe%20${encodeURIComponent(service.title)}%20k%20baare%20mein%20puchna%20hai.`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#C59E3F] hover:bg-[#B38C32] text-[#123B2A] text-xs font-bold transition-colors shrink-0"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Discuss With Abdul Jabbar</span>
                </a>
              </div>

              {/* Service Body Grid */}
              <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Left Overview & Target Audience */}
                <div className="lg:col-span-6 space-y-5">
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-[#123B2A] mb-1.5">
                      Overview
                    </h3>
                    <p className="text-xs sm:text-sm text-[#1A231F] leading-relaxed">
                      {service.shortDescription}
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-[#F8FAF9] border border-[#E2E8E4]">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-[#C59E3F] mb-1">
                      Problem It Addresses
                    </h3>
                    <p className="text-xs text-[#2C3832] leading-relaxed">
                      {service.problemSolved}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-[#123B2A] mb-1.5">
                      Target Audience
                    </h3>
                    <p className="text-xs text-[#5C6760] leading-relaxed">
                      {service.targetAudience}
                    </p>
                  </div>
                </div>

                {/* Right Deliverables & Benefits */}
                <div className="lg:col-span-6 space-y-5">
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-[#123B2A] mb-2.5">
                      Main Business Benefits
                    </h3>
                    <ul className="space-y-1.5">
                      {service.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-[#1A231F]">
                          <CheckCircle2 className="w-4 h-4 text-[#123B2A] shrink-0 mt-0.5" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-4 rounded-xl bg-[#F8FAF9] border border-[#E2E8E4]">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-[#123B2A] mb-2">
                      Key Deliverables
                    </h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-[#1A231F]">
                      {service.deliverables.map((deliv, i) => (
                        <li key={i} className="flex items-center gap-1.5 font-medium">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#C59E3F]" />
                          <span>{deliv}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-2 text-xs text-[#5C6760]">
                    <span className="font-semibold text-[#123B2A]">Next Step: </span>
                    <span>{service.nextStep}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Founder Callout */}
        <div className="mt-16 p-8 rounded-2xl bg-[#123B2A] text-white text-center">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
            Need an On-Site Shop Assessment in Karachi?
          </h2>
          <p className="text-xs sm:text-sm text-[#E2EAE5]/80 max-w-xl mx-auto mb-6">
            We visit shops across Orangi Town, Nazimabad, Saddar, and all Karachi zones to inspect receipt printers, scanners, and counter space.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href={`https://wa.me/${siteConfig.founders[1].phoneClean}`}
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2.5 rounded-xl bg-[#C59E3F] text-[#123B2A] font-bold text-xs"
            >
              WhatsApp Abdul Jabbar (0346 7366879)
            </a>
            <a
              href={`https://wa.me/${siteConfig.founders[0].phoneClean}`}
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2.5 rounded-xl bg-white/10 text-white font-bold text-xs border border-white/20"
            >
              WhatsApp Fayyaz Khan (0342 2643761)
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

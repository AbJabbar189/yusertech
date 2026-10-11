import React from 'react';
import {
  Globe,
  LayoutGrid,
  ShoppingBag,
  UtensilsCrossed,
  GraduationCap,
  CodeXml,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Send,
} from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import type { ServiceItem } from '../config/siteConfig';
import { SectionHeader } from '../components/common/SectionHeader';
import { Button } from '../components/common/Button';

export const ServicesPage: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Globe':
        return <Globe className="w-6 h-6" />;
      case 'LayoutGrid':
        return <LayoutGrid className="w-6 h-6" />;
      case 'ShoppingBag':
        return <ShoppingBag className="w-6 h-6" />;
      case 'UtensilsCrossed':
        return <UtensilsCrossed className="w-6 h-6" />;
      case 'GraduationCap':
        return <GraduationCap className="w-6 h-6" />;
      case 'CodeXml':
        return <CodeXml className="w-6 h-6" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6" />;
      default:
        return <Globe className="w-6 h-6" />;
    }
  };

  return (
    <div className="bg-[#F7F5EF] py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <SectionHeader
          badge="Business Services"
          title="Engineered Services for Operational Growth"
          subtitle="From customer-facing websites to internal business systems and point-of-sale software, YUSERTECH delivers solutions built for longevity, speed, and real utility."
        />

        {/* Quick Anchor Navigation */}
        <div className="bg-white p-4 rounded-xl border border-[#E3E0D5] mb-16 shadow-2xs">
          <span className="text-xs font-bold text-[#6B746E] uppercase tracking-wider block mb-3">
            Jump to Service Category:
          </span>
          <div className="flex flex-wrap gap-2">
            {siteConfig.services.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-[#FAF9F5] hover:bg-[#123B2A] hover:text-white border border-[#E3E0D5] text-[#202722] transition-colors"
              >
                {s.title}
              </a>
            ))}
          </div>
        </div>

        {/* Services In-Depth List */}
        <div className="space-y-16">
          {siteConfig.services.map((service: ServiceItem, index: number) => (
            <div
              key={service.id}
              id={service.id}
              className="bg-white rounded-2xl border border-[#E3E0D5] overflow-hidden shadow-xs scroll-mt-28"
            >
              {/* Service Header Bar */}
              <div className="bg-[#123B2A] text-white p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#164632] border border-[#224E3A] text-[#D6B46A] flex items-center justify-center shrink-0">
                    {getIcon(service.iconName)}
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-[#D6B46A] uppercase tracking-wider block">
                      Category 0{index + 1}
                    </span>
                    <h2 className="text-xl sm:text-2xl font-bold text-white">
                      {service.title}
                    </h2>
                  </div>
                </div>

                <Button
                  to={`/contact?service=${encodeURIComponent(service.title)}`}
                  variant="gold"
                  size="sm"
                  rightIcon={<ArrowRight className="w-3.5 h-3.5" />}
                >
                  Inquire for This Service
                </Button>
              </div>

              {/* Service Body Grid */}
              <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Left Overview & Target Audience */}
                <div className="lg:col-span-6 space-y-6">
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-[#123B2A] mb-2">
                      Overview
                    </h3>
                    <p className="text-sm text-[#202722] leading-relaxed">
                      {service.shortDescription}
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-[#FAF3E0]/60 border border-[#E8D49F]">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-[#7A5B12] mb-1.5">
                      The Problem It Solves
                    </h3>
                    <p className="text-xs sm:text-sm text-[#202722] leading-relaxed">
                      {service.problemSolved}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-[#123B2A] mb-2">
                      Intended Audience
                    </h3>
                    <p className="text-xs sm:text-sm text-[#6B746E] leading-relaxed">
                      {service.targetAudience}
                    </p>
                  </div>
                </div>

                {/* Right Deliverables & Benefits */}
                <div className="lg:col-span-6 space-y-6">
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-[#123B2A] mb-3">
                      Main Business Benefits
                    </h3>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-[#202722]">
                          <CheckCircle2 className="w-4 h-4 text-[#123B2A] shrink-0 mt-0.5" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-4 rounded-xl bg-[#FAF9F5] border border-[#E3E0D5]">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-[#123B2A] mb-2.5">
                      Tangible Deliverables
                    </h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#202722]">
                      {service.deliverables.map((deliv, i) => (
                        <li key={i} className="flex items-center gap-1.5 font-medium">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#D6B46A]" />
                          <span>{deliv}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-2 flex items-center justify-between text-xs text-[#6B746E]">
                    <span className="font-semibold text-[#123B2A]">Next Step:</span>
                    <span>{service.nextStep}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Contact Callout */}
        <div className="mt-20 p-8 sm:p-10 rounded-2xl bg-[#123B2A] text-white text-center border border-[#224E3A]">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
            Have a Specific Project Requirement?
          </h2>
          <p className="text-sm sm:text-base text-[#EFECE3]/80 max-w-xl mx-auto mb-6">
            We provide structured requirement reviews and itemized proposals before you commit.
          </p>
          <Button to="/contact" variant="gold" size="lg" rightIcon={<Send className="w-4 h-4" />}>
            Request a Consultation
          </Button>
        </div>
      </div>
    </div>
  );
};

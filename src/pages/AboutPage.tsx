import React from 'react';
import {
  CheckCircle2,
  Phone,
  MessageSquare,
  Clock,
  MapPin,
} from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { SectionHeader } from '../components/common/SectionHeader';
import { Badge } from '../components/common/Badge';

export const AboutPage: React.FC = () => {
  return (
    <div className="bg-[#F8FAF9] py-14 sm:py-20 font-sans">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="About YUSERTECH"
          title="Practical Software Built for Ground-Level Business Realities"
          subtitle="Founded by Fayyaz Khan & Abdul Jabbar in Orangi Town, Karachi. We design and deliver custom point-of-sale systems, institutional management tools, and workflow automation."
        />

        {/* FOUNDERS SHOWCASE */}
        <div className="mb-14">
          <div className="text-center mb-8">
            <span className="text-xs font-bold text-[#123B2A] uppercase tracking-wider bg-[#EBF3EE] px-3 py-1 rounded-full border border-[#CFE1D6]">
              Company Leadership
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1A231F] mt-2">
              Meet the Founders
            </h2>
            <p className="text-xs sm:text-sm text-[#5C6760] max-w-lg mx-auto mt-1">
              When you hire YUSERTECH, you collaborate directly with the company founders.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                <span className="text-xs text-[#C59E3F] font-bold block mb-3">Founder</span>
                <p className="text-xs sm:text-sm text-[#5C6760] leading-relaxed mb-6">
                  {siteConfig.founders[0].bio} Fayyaz oversees business strategy, client requirements analysis, project roadmaps, and ensures every client gets an honest, transparent engagement.
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
                  <span>Chat on WhatsApp →</span>
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
                <span className="text-xs text-[#123B2A] font-bold block mb-3">Co-Founder</span>
                <p className="text-xs sm:text-sm text-[#5C6760] leading-relaxed mb-6">
                  {siteConfig.founders[1].bio} Abdul Jabbar leads full-stack software development, offline database synchronization, hardware thermal printer drivers, and custom workflow scripts.
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
                  <span>Chat on WhatsApp →</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Location & Working Hours Notice */}
        <div className="bg-white rounded-2xl border border-[#DCE4E0] p-6 sm:p-8 mb-12 shadow-2xs">
          <div className="flex items-center gap-2.5 mb-3">
            <MapPin className="w-5 h-5 text-[#C59E3F]" />
            <h3 className="text-base font-bold text-[#1A231F]">
              Based in Orangi Town, Karachi
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-[#5C6760] leading-relaxed mb-4">
            We are proud to operate from <strong>Orangi Town, Karachi</strong>. We currently operate through direct on-site client consultations across Karachi and remote software delivery. Our physical commercial office space is in active development.
          </p>

          <div className="p-4 rounded-xl bg-[#F8FAF9] border border-[#E2E8E4] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#123B2A] shrink-0" />
              <span><strong>Office Hours:</strong> Monday – Thursday &amp; Saturday: 9:00 AM – 5:00 PM (PKT)</span>
            </div>
            <span className="font-semibold text-rose-800 bg-rose-50 px-2.5 py-1 rounded-md border border-rose-200">
              Friday &amp; Sunday: Closed (Jumma &amp; Itwar Off)
            </span>
          </div>
        </div>

        {/* Mission & Purpose */}
        <div className="bg-white rounded-2xl border border-[#DCE4E0] p-6 sm:p-8 mb-12 shadow-2xs space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-[#123B2A] block">
            Our Mission &amp; Approach
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-[#1A231F]">
            {siteConfig.brand.missionStatement}
          </h2>
          <p className="text-xs sm:text-sm text-[#5C6760] leading-relaxed">
            Many small-to-midsize businesses find themselves trapped between two bad options: expensive, bloated monthly software subscriptions that break whenever the internet drops, or fragile, outdated paper registers and scattered Excel spreadsheets. YUSERTECH exists to bridge this gap with reliable, custom offline-ready software you own outright.
          </p>
        </div>

        {/* Who We Serve */}
        <div className="bg-white rounded-2xl border border-[#DCE4E0] p-6 sm:p-8 mb-12 shadow-2xs">
          <h3 className="text-lg font-bold text-[#1A231F] mb-4">
            Who YUSERTECH Serves in Karachi &amp; Beyond
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                title: 'Retail Merchants & Store Owners',
                desc: 'Billing terminals that run smoothly without crashing during local internet blackouts or load shedding.',
              },
              {
                title: 'Bakeries, Cafes & Confectioneries',
                desc: 'Manage fast counter rush hours, perishable shelf life, and advance custom cake bookings.',
              },
              {
                title: 'Madrasas & Faith-Based Schools',
                desc: 'Organized student registers, fee vouchers, and semester exam tabulation.',
              },
              {
                title: 'Wholesalers & Distributors',
                desc: 'Customer credit ledgers (Khata), godown inventory tracking, and automated PDF invoicing.',
              },
            ].map((aud, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-[#F8FAF9] border border-[#E2E8E4]">
                <div className="flex items-center gap-2 mb-1">
                  <CheckCircle2 className="w-4 h-4 text-[#123B2A] shrink-0" />
                  <h4 className="text-xs font-bold text-[#1A231F]">{aud.title}</h4>
                </div>
                <p className="text-[11px] text-[#5C6760] pl-6 leading-relaxed">{aud.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="p-8 rounded-2xl bg-[#123B2A] text-white text-center">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
            Let’s Discuss Your Business Software Needs
          </h2>
          <p className="text-xs sm:text-sm text-[#E2EAE5]/80 max-w-lg mx-auto mb-6">
            Call or message Fayyaz Khan or Abdul Jabbar directly.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={`https://wa.me/${siteConfig.founders[1].phoneClean}`}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2.5 rounded-xl bg-[#C59E3F] text-[#123B2A] font-bold text-xs"
            >
              WhatsApp Abdul Jabbar
            </a>
            <a
              href={`https://wa.me/${siteConfig.founders[0].phoneClean}`}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2.5 rounded-xl bg-white/10 text-white font-bold text-xs border border-white/20"
            >
              WhatsApp Fayyaz Khan
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

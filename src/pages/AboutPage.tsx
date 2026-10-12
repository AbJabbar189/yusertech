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
    <div className="bg-[#F8FAFC] py-14 sm:py-20 font-sans">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge={`About ${siteConfig.brand.name}`}
          title="Practical Software Built for Ground-Level Business Realities"
          subtitle={`Founded by Fayyaz Khan & Abdul Jabbar in Orangi Town, Karachi. Tagline: "${siteConfig.brand.tagline}" We design and install custom point-of-sale systems, complete PC setups, institutional management tools, and workflow automation.`}
        />

        {/* FOUNDERS SHOWCASE */}
        <div className="mb-14">
          <div className="text-center mb-8">
            <span className="text-xs font-bold text-[#0056D2] uppercase tracking-wider bg-[#EEF4FF] px-3.5 py-1.5 rounded-full border border-blue-200">
              Company Leadership
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0F172A] mt-2">
              Meet the Founders
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 max-w-lg mx-auto mt-1">
              When you hire {siteConfig.brand.name}, you collaborate directly with the company founders. No middlemen or support queues.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Fayyaz Khan */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 flex flex-col justify-between hover-lift">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 text-[#0056D2] border border-blue-200 flex items-center justify-center font-extrabold text-xl shadow-xs">
                    FK
                  </div>
                  <Badge variant="primary">Founder</Badge>
                </div>
                <h3 className="text-xl font-bold text-[#0F172A]">Fayyaz Khan</h3>
                <span className="text-xs text-[#0056D2] font-bold block mb-3">Founder &amp; Business Strategist</span>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  {siteConfig.founders[0].bio} Fayyaz oversees business strategy, client requirements analysis, project roadmaps, and ensures every client gets an honest, transparent engagement tailored for the local market.
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 space-y-2">
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
                  <span>Chat on WhatsApp →</span>
                </a>
              </div>
            </div>

            {/* Abdul Jabbar */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 flex flex-col justify-between hover-lift">
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
                  {siteConfig.founders[1].bio} Abdul Jabbar leads full-stack software development, offline database synchronization, hardware thermal printer drivers, complete PC setups, and custom workflow scripts.
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 space-y-2">
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
                  <span>Chat on WhatsApp →</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Location & Working Hours Notice */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 mb-12 hover-lift">
          <div className="flex items-center gap-2.5 mb-3">
            <MapPin className="w-5 h-5 text-[#0056D2]" />
            <h3 className="text-base font-bold text-[#0F172A]">
              Based in Orangi Town, Karachi
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
            We operate proudly from <strong>Orangi Town, Karachi</strong>. Our team provides direct on-site client consultations, shop visits, hardware setup, and remote software delivery across Karachi. Commercial office facilities are currently in development.
          </p>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2 text-slate-700">
              <Clock className="w-4 h-4 text-[#0056D2] shrink-0" />
              <span><strong>Office Hours:</strong> Monday – Thursday &amp; Saturday: 9:00 AM – 5:00 PM (PKT)</span>
            </div>
            <span className="font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-md border border-rose-200">
              Friday &amp; Sunday: Closed (Jumma &amp; Itwar Off)
            </span>
          </div>
        </div>

        {/* Mission & Approach with Hardware Integration */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 mb-12 hover-lift space-y-4">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#00B050]" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#0056D2]">
              Our Mission: Your Ideas. Our Technology.
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-[#0F172A]">
            {siteConfig.brand.missionStatement}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Pakistani shopkeepers and business owners frequently suffer from fragile cloud software that halts transactions when the internet flickers or power cuts occur. {siteConfig.brand.name} delivers complete solutions: custom software + PC counter hardware (desktops, thermal printers, barcode scanners, cash drawers) built to run offline 100% of the time.
          </p>
        </div>

        {/* Who We Serve */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 mb-12 hover-lift">
          <h3 className="text-lg font-bold text-[#0F172A] mb-4">
            Who {siteConfig.brand.name} Serves in Karachi &amp; Beyond
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                title: 'Retail Merchants & Super Marts',
                desc: 'Billing terminals and PC setups that keep running smoothly without crashing during local internet blackouts or load shedding.',
              },
              {
                title: 'Bakeries, Cafes & Confectioneries',
                desc: 'Electronic weighing scale integration, perishable stock alert, and rapid advance cake bookings.',
              },
              {
                title: 'Pharmacies & Medical Stores',
                desc: 'Batch number expiry control, generic formula searches, and rapid counter checkout.',
              },
              {
                title: 'Wholesalers, Distributors & Ledgers',
                desc: 'Customer credit ledgers (Khata), godown inventory tracking, and automated PDF invoicing.',
              },
            ].map((aud, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="flex items-center gap-2 mb-1">
                  <CheckCircle2 className="w-4 h-4 text-[#00B050] shrink-0" />
                  <h4 className="text-xs font-bold text-[#0F172A]">{aud.title}</h4>
                </div>
                <p className="text-[11px] text-slate-600 pl-6 leading-relaxed">{aud.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="p-8 rounded-2xl bg-[#002B66] text-white text-center shadow-lg relative overflow-hidden">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
            Let’s Discuss Your Business Software &amp; PC Setup Needs
          </h2>
          <p className="text-xs sm:text-sm text-slate-200 max-w-lg mx-auto mb-6">
            Call or message Fayyaz Khan or Abdul Jabbar directly for honest guidance and live demonstrations.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={`https://wa.me/${siteConfig.founders[1].phoneClean}`}
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2.5 rounded-xl bg-[#00B050] hover:bg-[#009644] text-white font-bold text-xs shadow-md transition-all"
            >
              WhatsApp Abdul Jabbar
            </a>
            <a
              href={`https://wa.me/${siteConfig.founders[0].phoneClean}`}
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs border border-white/20 transition-all"
            >
              WhatsApp Fayyaz Khan
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

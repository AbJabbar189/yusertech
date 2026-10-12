import React, { useState } from 'react';
import {
  CheckCircle2,
  MessageSquare,
} from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import type { PortfolioItem } from '../config/siteConfig';
import { SectionHeader } from '../components/common/SectionHeader';
import { Badge } from '../components/common/Badge';

export const PortfolioPage: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');

  const filteredItems = siteConfig.portfolio.filter((item: PortfolioItem) => {
    if (filter === 'all') return true;
    return item.type.toLowerCase().includes(filter.toLowerCase());
  });

  return (
    <div className="bg-[#F8FAFC] py-14 sm:py-20 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Engineering & Blueprints"
          title={`Architectural Blueprints & Systems by ${siteConfig.brand.name}`}
          subtitle="Real software architecture built for ground-level retail, POS, and business conditions in Karachi. Transparent technical stacks with zero marketing fabrications."
        />

        {/* Filter buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {[
            { label: 'All Engineering Work', value: 'all' },
            { label: 'Internal Prototypes', value: 'internal product prototype' },
            { label: 'Architecture Blueprints', value: 'architecture blueprint' },
          ].map((btn) => (
            <button
              key={btn.value}
              onClick={() => setFilter(btn.value)}
              className={`px-4 py-2 text-xs font-semibold rounded-xl border transition-all ${
                filter === btn.value
                  ? 'bg-[#0056D2] text-white border-[#0056D2] shadow-sm'
                  : 'bg-white text-[#0F172A] border-slate-200 hover:bg-slate-50'
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/* Portfolio Items List */}
        <div className="space-y-10">
          {filteredItems.map((item: PortfolioItem) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover-lift"
            >
              <div className="p-6 sm:p-9 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left: Context and Technical Breakdown */}
                <div className="lg:col-span-7 space-y-5">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-2.5">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                        {item.category}
                      </span>
                      <Badge variant={item.status}>{item.status}</Badge>
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-blue-50 text-[#0056D2] border border-blue-200">
                        {item.type}
                      </span>
                    </div>

                    <h2 className="text-xl sm:text-2xl font-extrabold text-[#0F172A] mb-3">
                      {item.title}
                    </h2>

                    <div className="space-y-3">
                      <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                        <h3 className="text-xs font-bold uppercase tracking-wider text-[#0056D2] mb-1">
                          Operational Bottleneck
                        </h3>
                        <p className="text-xs text-slate-700 leading-relaxed">
                          {item.problemStatement}
                        </p>
                      </div>

                      <div className="p-3.5 rounded-xl bg-emerald-50/60 border border-emerald-200">
                        <h3 className="text-xs font-bold uppercase tracking-wider text-[#00873D] mb-1">
                          Engineered Architecture
                        </h3>
                        <p className="text-xs text-slate-700 leading-relaxed">
                          {item.solution}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#0056D2] mb-2">
                      Key Highlights:
                    </h4>
                    <ul className="space-y-1.5">
                      {item.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-[#00B050] shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech stack badges */}
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-1.5">
                      Technologies &amp; Protocols:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {item.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="text-xs font-mono font-medium px-2.5 py-1 rounded-lg bg-slate-50 text-slate-700 border border-slate-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right: Architecture Summary Box */}
                <div className="lg:col-span-5 bg-slate-50 rounded-2xl p-6 border border-slate-200 flex flex-col justify-between space-y-5">
                  <div className="space-y-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#0056D2] block pb-2 border-b border-slate-200">
                      System Reliability Specifications
                    </span>
                    <div className="space-y-2 text-xs">
                      <div className="flex justify-between py-1 border-b border-slate-200">
                        <span className="text-slate-500">Offline Resilience:</span>
                        <strong className="text-[#00873D] font-bold">100% Guaranteed</strong>
                      </div>
                      <div className="flex justify-between py-1 border-b border-slate-200">
                        <span className="text-slate-500">Hardware Protocol:</span>
                        <strong className="text-[#0F172A]">ESC/POS 58/80mm Thermal</strong>
                      </div>
                      <div className="flex justify-between py-1 border-b border-slate-200">
                        <span className="text-slate-500">Language Support:</span>
                        <strong className="text-[#0F172A]">Urdu &amp; English Unicode</strong>
                      </div>
                      <div className="flex justify-between py-1">
                        <span className="text-slate-500">Data Storage:</span>
                        <strong className="text-[#0F172A]">Local ACID Database</strong>
                      </div>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-200 space-y-2">
                    <a
                      href={`https://wa.me/${siteConfig.founders[1].phoneClean}?text=Salam%20Abdul%20Jabbar%20bhai%2C%20mujhe%20${encodeURIComponent(item.title)}%20k%20jaisa%20software%20chahiye.`}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full justify-center px-4 py-2.5 rounded-xl bg-[#0056D2] text-white text-xs font-bold flex items-center gap-1.5 hover:bg-[#0047B3] shadow-md transition-colors"
                    >
                      <MessageSquare className="w-3.5 h-3.5 text-[#00C4FF]" />
                      <span>Inquire About Similar Architecture</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

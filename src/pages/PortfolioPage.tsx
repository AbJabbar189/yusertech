import React, { useState } from 'react';
import {
  CheckCircle2,
  ArrowRight,
  Terminal,
  ShieldCheck,
} from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import type { PortfolioItem } from '../config/siteConfig';
import { SectionHeader } from '../components/common/SectionHeader';
import { Badge } from '../components/common/Badge';
import { Button } from '../components/common/Button';
import { POSMockup } from '../components/products/POSMockup';

export const PortfolioPage: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');

  const filteredItems = siteConfig.portfolio.filter((item: PortfolioItem) => {
    if (filter === 'all') return true;
    return item.type.toLowerCase().includes(filter.toLowerCase());
  });

  return (
    <div className="bg-[#F7F5EF] py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Work & Engineering"
          title="Architectural Blueprints, Prototypes & Deployments"
          subtitle="We present authentic engineering work: product prototypes, architecture blueprints, and client web solutions. No fabricated case studies or unverified testimonials."
        />

        {/* Filter buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {[
            { label: 'All Engineering Work', value: 'all' },
            { label: 'Internal Prototypes', value: 'internal product prototype' },
            { label: 'Architecture Blueprints', value: 'architecture blueprint' },
            { label: 'Client Solutions', value: 'client web solution' },
          ].map((btn) => (
            <button
              key={btn.value}
              onClick={() => setFilter(btn.value)}
              className={`px-4 py-2 text-xs font-semibold rounded-lg border transition-all ${
                filter === btn.value
                  ? 'bg-[#123B2A] text-white border-[#123B2A] shadow-xs'
                  : 'bg-white text-[#202722] border-[#E3E0D5] hover:bg-[#FAF9F5]'
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/* Portfolio Items List */}
        <div className="space-y-12">
          {filteredItems.map((item: PortfolioItem) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl border border-[#E3E0D5] overflow-hidden shadow-xs hover:border-[#123B2A]/40 transition-colors"
            >
              <div className="p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left: Context and Technical Breakdown */}
                <div className="lg:col-span-7 space-y-6">
                  <div>
                    <div className="flex flex-wrap items-center gap-2.5 mb-3">
                      <span className="text-xs font-mono uppercase text-[#6B746E]">
                        {item.category}
                      </span>
                      <Badge variant={item.status}>{item.status}</Badge>
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#FAF3E0] text-[#7A5B12] border border-[#E8D49F]">
                        {item.type}
                      </span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-extrabold text-[#202722] mb-4">
                      {item.title}
                    </h2>

                    <div className="space-y-4">
                      <div className="p-4 rounded-xl bg-[#FAF9F5] border border-[#E3E0D5]">
                        <h3 className="text-xs font-bold uppercase tracking-wider text-[#123B2A] mb-1">
                          Problem Identified
                        </h3>
                        <p className="text-xs sm:text-sm text-[#202722] leading-relaxed">
                          {item.problemStatement}
                        </p>
                      </div>

                      <div className="p-4 rounded-xl bg-[#FAF3E0]/50 border border-[#E8D49F]">
                        <h3 className="text-xs font-bold uppercase tracking-wider text-[#7A5B12] mb-1">
                          Engineered Solution
                        </h3>
                        <p className="text-xs sm:text-sm text-[#202722] leading-relaxed">
                          {item.solution}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#123B2A] mb-2.5">
                      Technical Highlights:
                    </h4>
                    <ul className="space-y-2">
                      {item.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-[#202722]">
                          <CheckCircle2 className="w-4 h-4 text-[#123B2A] shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech stack badges */}
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#6B746E] block mb-2">
                      Technologies & Protocols Used:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {item.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="text-xs font-mono font-medium px-2.5 py-1 rounded bg-[#F7F5EF] text-[#202722] border border-[#E3E0D5]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right: Interactive Terminal or Architecture Diagram Preview */}
                <div className="lg:col-span-5 bg-[#FAF9F5] rounded-xl p-5 border border-[#E3E0D5] flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between pb-3 border-b border-[#E3E0D5] mb-4">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#123B2A] flex items-center gap-1.5">
                        <Terminal className="w-3.5 h-3.5 text-[#D6B46A]" /> Engineering Demonstration
                      </span>
                      <span className="text-[10px] font-mono text-[#6B746E]">Interactive Model</span>
                    </div>

                    {item.id === 'yuser-pos-prototype' ? (
                      <div className="space-y-3">
                        <POSMockup />
                      </div>
                    ) : (
                      <div className="bg-[#202722] text-[#F7F5EF] p-5 rounded-xl border border-[#323C35] font-mono text-xs space-y-3">
                        <div className="flex items-center justify-between pb-2 border-b border-[#323C35]">
                          <span className="text-[#D6B46A]">{item.title}</span>
                          <span className="text-[10px] text-emerald-400">Spec Ready</span>
                        </div>
                        <p className="text-[11px] text-[#9AA39D] leading-relaxed">
                          // Architectural schematic verified for multi-role workflows and secure data validation.
                        </p>
                        <div className="bg-[#18201B] p-3 rounded border border-[#2B352E] space-y-1 text-[11px]">
                          <div>• Target SLA: 99.9% availability</div>
                          <div>• Role Matrix: Admin, Operator, Auditor</div>
                          <div>• Data Schema: Relational ACID Transactions</div>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="pt-4 mt-4 border-t border-[#E3E0D5]">
                    <Button
                      to={`/contact?service=${encodeURIComponent(item.title)}`}
                      variant="primary"
                      size="sm"
                      className="w-full justify-center"
                      rightIcon={<ArrowRight className="w-3.5 h-3.5" />}
                    >
                      Discuss Similar Architecture
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Verification Footer Notice */}
        <div className="mt-16 p-6 rounded-xl bg-white border border-[#E3E0D5] max-w-3xl mx-auto text-center">
          <ShieldCheck className="w-6 h-6 text-[#123B2A] mx-auto mb-2" />
          <h3 className="text-sm font-bold text-[#202722]">Authentic Portfolio Policy</h3>
          <p className="text-xs text-[#6B746E] mt-1 max-w-xl mx-auto leading-relaxed">
            YUSERTECH values long-term reputation above promotional shortcuts. We strictly present verified prototypes and contracted work, without ghostwriting fake client praise or inflating project statistics.
          </p>
        </div>
      </div>
    </div>
  );
};

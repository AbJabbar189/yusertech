import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, Search, ArrowRight } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import type { FaqItem } from '../config/siteConfig';
import { SectionHeader } from '../components/common/SectionHeader';
import { Button } from '../components/common/Button';

export const FaqPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [openIndices, setOpenIndices] = useState<number[]>([0, 1]); // first two open by default

  const categories = ['All', 'General', 'Services', 'Products', 'Process & Pricing'];

  const toggleAccordion = (index: number) => {
    setOpenIndices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const filteredFaqs = siteConfig.faqs.filter((faq: FaqItem) => {
    const matchesCategory =
      selectedCategory === 'All' || faq.category === selectedCategory;
    const matchesQuery =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  return (
    <div className="bg-[#F8FAFC] py-16 sm:py-24 font-sans">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Knowledge & FAQ"
          title="Frequently Asked Questions"
          subtitle={`Honest, detailed answers regarding ${siteConfig.brand.name} software projects, PC counter installations, offline capabilities, and transparent pricing frameworks.`}
        />

        {/* Search & Filter Bar */}
        <div className="bg-white p-4 rounded-xl border border-slate-200 mb-10 hover-lift space-y-4">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search questions by keyword (e.g. offline, pricing, PC hardware, thermal printer)..."
              className="w-full pl-10 pr-4 py-2.5 text-sm rounded-lg bg-slate-50 border border-slate-200 text-[#0F172A] focus:bg-white focus:border-[#0056D2] transition-colors"
            />
          </div>

          <div className="flex flex-wrap gap-2 pt-1 border-t border-slate-100">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg border transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#0056D2] text-white border-[#0056D2] shadow-xs'
                    : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3.5">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-xl border border-slate-200 text-xs text-slate-500">
              No questions matched your search query. Try broadening your keywords or contact Abdul Jabbar or Fayyaz Khan directly.
            </div>
          ) : (
            filteredFaqs.map((faq: FaqItem, idx: number) => {
              const isOpen = openIndices.includes(idx);
              return (
                <div
                  key={idx}
                  className="bg-white rounded-xl border border-slate-200 overflow-hidden transition-all hover-lift"
                >
                  <button
                    type="button"
                    onClick={() => toggleAccordion(idx)}
                    className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors"
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm sm:text-base font-bold text-[#0F172A] flex items-center gap-2.5">
                      <HelpCircle className="w-4 h-4 text-[#0056D2] shrink-0" />
                      <span>{faq.question}</span>
                    </span>
                    <span className="text-[#0056D2] shrink-0">
                      {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-6 pt-1 sm:px-6 border-t border-slate-100 bg-white">
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-6">
                        {faq.answer}
                      </p>
                      <div className="mt-3 pl-6">
                        <span className="text-[10px] font-mono uppercase bg-blue-50 text-[#0056D2] px-2.5 py-0.5 rounded border border-blue-200 font-bold">
                          Category: {faq.category}
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Still have questions? */}
        <div className="mt-16 p-8 rounded-2xl bg-white border border-slate-200 text-center hover-lift">
          <h3 className="text-base font-bold text-[#0F172A] mb-1">
            Have a question not addressed here?
          </h3>
          <p className="text-xs text-slate-500 mb-5">
            We are glad to provide clear technical answers for your specific business and shop environment.
          </p>
          <Button to="/contact" variant="primary" size="md" rightIcon={<ArrowRight className="w-4 h-4" />}>
            Contact Our Founders
          </Button>
        </div>
      </div>
    </div>
  );
};

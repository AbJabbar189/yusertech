import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, ShieldAlert, Terminal } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import type { ProductItem } from '../config/siteConfig';
import { SectionHeader } from '../components/common/SectionHeader';
import { Badge } from '../components/common/Badge';
import { Button } from '../components/common/Button';
import { POSMockup } from '../components/products/POSMockup';
import { BakeryMockup } from '../components/products/BakeryMockup';
import { MadrasaMockup } from '../components/products/MadrasaMockup';

export const ProductsPage: React.FC = () => {
  const [activePreviewId, setActivePreviewId] = useState<string>('retail-pos');

  return (
    <div className="bg-[#F7F5EF] py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <SectionHeader
          badge="Software Products"
          title="Practical Business Management Software"
          subtitle="YUSERTECH engineers dedicated software tools for retailers, bakeries, and educational organizations with emphasis on offline durability and operational workflows."
        />

        {/* Verification & Transparency Banner */}
        <div className="mb-14 p-5 rounded-xl bg-white border border-[#E3E0D5] flex items-start gap-3.5 shadow-2xs max-w-4xl mx-auto">
          <ShieldAlert className="w-5 h-5 text-[#D6B46A] shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm text-[#202722]">
            <strong className="font-semibold block text-[#123B2A] mb-1">
              Honest Product Disclosure & Release Standards
            </strong>
            <p className="text-[#6B746E] leading-relaxed">
              We label every product with its genuine readiness status. We do not advertise mockups as &quot;live client deployments&quot; nor promise automatic cloud synchronization unless it has been fully built and verified. Pilot programs and architectural walkthroughs are available for qualified businesses.
            </p>
          </div>
        </div>

        {/* Products Grid */}
        <div className="space-y-16">
          {siteConfig.products.map((product: ProductItem, index: number) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl border border-[#E3E0D5] overflow-hidden shadow-xs hover:border-[#123B2A]/40 transition-colors"
            >
              <div className="p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left: Product Info */}
                <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
                  <div>
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className="text-xs font-mono uppercase text-[#6B746E]">
                        Product 0{index + 1} • {product.category}
                      </span>
                      <Badge variant={product.status}>{product.status}</Badge>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-extrabold text-[#202722] mb-3">
                      {product.name}
                    </h2>

                    <p className="text-sm sm:text-base text-[#6B746E] leading-relaxed mb-6">
                      {product.fullDescription}
                    </p>

                    {/* Intended Users */}
                    <div className="mb-6">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#123B2A] block mb-2">
                        Designed For:
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {product.targetAudience.map((audience, i) => (
                          <span
                            key={i}
                            className="text-xs font-medium px-2.5 py-1 rounded-md bg-[#FAF9F5] border border-[#E3E0D5] text-[#202722]"
                          >
                            {audience}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Key Features List */}
                    <div className="space-y-2 pt-4 border-t border-[#E3E0D5]">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#123B2A] block mb-2">
                        Core Functional Modules:
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                        {product.keyFeatures.map((feat, i) => (
                          <div
                            key={i}
                            className="flex items-start gap-2 p-2 rounded-lg bg-[#FAF9F5] border border-[#E3E0D5]"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#123B2A] shrink-0 mt-0.5" />
                            <div>
                              <strong className="text-[#202722] block">{feat.title}</strong>
                              <span className="text-[10px] text-[#6B746E] uppercase font-mono">
                                [{feat.status}]
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Actions & Links */}
                  <div className="pt-6 border-t border-[#E3E0D5] flex flex-wrap items-center gap-4">
                    <Button
                      to={`/products/${product.slug}`}
                      variant="primary"
                      size="md"
                      rightIcon={<ArrowRight className="w-4 h-4" />}
                    >
                      View Specifications & Architecture
                    </Button>
                    <Button
                      to={`/contact?service=${encodeURIComponent(product.name)}`}
                      variant="outline"
                      size="md"
                    >
                      Request Pilot Demo
                    </Button>
                  </div>
                </div>

                {/* Right: Technical Specs Box & Mockup Preview Selector */}
                <div className="lg:col-span-5 bg-[#FAF9F5] rounded-xl p-6 border border-[#E3E0D5] space-y-5">
                  <div className="flex items-center justify-between border-b border-[#E3E0D5] pb-3">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-[#123B2A]">
                      Technical Blueprint
                    </h3>
                    <span className="text-[11px] font-mono text-[#D6B46A] bg-[#123B2A] px-2 py-0.5 rounded">
                      {product.deploymentType}
                    </span>
                  </div>

                  <div className="space-y-3 text-xs">
                    <div>
                      <span className="text-[#6B746E] block text-[11px]">Host Environment:</span>
                      <strong className="text-[#202722]">{product.specs.platform}</strong>
                    </div>
                    <div>
                      <span className="text-[#6B746E] block text-[11px]">Offline Capability:</span>
                      <strong className="text-[#123B2A]">{product.specs.offlineSupport}</strong>
                    </div>
                    <div>
                      <span className="text-[#6B746E] block text-[11px]">Database Architecture:</span>
                      <strong className="text-[#202722]">{product.specs.database}</strong>
                    </div>
                    <div>
                      <span className="text-[#6B746E] block text-[11px]">Licensing / Delivery:</span>
                      <strong className="text-[#202722]">{product.specs.licenseModel}</strong>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#E3E0D5]">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#123B2A] block mb-2">
                      Software Demonstration:
                    </span>
                    <button
                      type="button"
                      onClick={() => setActivePreviewId(product.id)}
                      className="w-full text-left text-xs p-3 rounded-lg bg-white border border-[#E3E0D5] hover:border-[#123B2A] flex items-center justify-between transition-colors group"
                    >
                      <span className="font-semibold text-[#202722] group-hover:text-[#123B2A]">
                        {activePreviewId === product.id ? 'Viewing Preview Below ↓' : 'Load Interactive Terminal ↓'}
                      </span>
                      <Terminal className="w-4 h-4 text-[#D6B46A]" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Live Interactive Terminal Demo Area */}
        <div className="mt-20">
          <div className="text-center mb-8">
            <span className="text-xs font-bold text-[#D6B46A] uppercase tracking-wider bg-[#123B2A] px-3 py-1 rounded-full">
              Live Interactive Interface Sandbox
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#202722] mt-3">
              Explore Our Software Terminal Interfaces
            </h2>
            <p className="text-sm text-[#6B746E] max-w-xl mx-auto mt-2">
              Select any of our software systems to test its operational interface directly in your browser.
            </p>

            <div className="flex flex-wrap justify-center gap-2 mt-6">
              {siteConfig.products.map((p) => (
                <button
                  key={p.id}
                  onClick={() => setActivePreviewId(p.id)}
                  className={`px-4 py-2 text-xs font-bold rounded-lg border transition-all ${
                    activePreviewId === p.id
                      ? 'bg-[#123B2A] text-white border-[#123B2A] shadow-xs'
                      : 'bg-white text-[#202722] border-[#E3E0D5] hover:bg-[#FAF9F5]'
                  }`}
                >
                  {p.name}
                </button>
              ))}
            </div>
          </div>

          <div className="max-w-5xl mx-auto">
            {activePreviewId === 'retail-pos' && <POSMockup />}
            {activePreviewId === 'bakery-pos' && <BakeryMockup />}
            {activePreviewId === 'madrasa-management' && <MadrasaMockup />}
          </div>
        </div>
      </div>
    </div>
  );
};

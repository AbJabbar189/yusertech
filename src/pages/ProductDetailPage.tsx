import React from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  ArrowLeft,
  CheckCircle2,
  HelpCircle,
  MessageSquare,
} from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import type { ProductItem } from '../config/siteConfig';
import { Badge } from '../components/common/Badge';
import { Button } from '../components/common/Button';

export const ProductDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const product = siteConfig.products.find((p: ProductItem) => p.slug === slug);

  if (!product) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center p-6 text-center">
        <h1 className="text-2xl font-bold text-[#1A231F] mb-2">Product Not Found</h1>
        <p className="text-sm text-[#5C6760] mb-6">
          The requested software specification could not be located.
        </p>
        <Button to="/products" variant="primary" leftIcon={<ArrowLeft className="w-4 h-4" />}>
          Back to All Solutions
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-[#F8FAF9] py-12 sm:py-20 font-sans">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb & Navigation */}
        <div className="mb-8 flex items-center justify-between">
          <Link
            to="/products"
            className="text-xs font-semibold text-[#123B2A] hover:text-[#C59E3F] inline-flex items-center gap-1.5 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Solutions</span>
          </Link>

          <Badge variant={product.status}>{product.status}</Badge>
        </div>

        {/* Product Hero Header */}
        <div className="bg-white rounded-2xl p-6 sm:p-10 mb-10 border border-[#DCE4E0] shadow-2xs">
          <div className="max-w-3xl">
            <span className="text-xs font-bold text-[#C59E3F] uppercase tracking-wider block mb-2">
              {product.category}
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1A231F] mb-3">
              {product.name}
            </h1>
            <p className="text-sm sm:text-base text-[#5C6760] leading-relaxed mb-6">
              {product.fullDescription}
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href={`https://wa.me/${siteConfig.founders[1].phoneClean}?text=Salam%20Abdul%20Jabbar%20bhai%2C%20mujhe%20${encodeURIComponent(product.name)}%20k%20baare%20mein%20baat%20karni%20hai.`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#123B2A] text-white text-xs sm:text-sm font-bold hover:bg-[#0B251A] transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-[#C59E3F]" />
                <span>WhatsApp Abdul Jabbar (0346 7366879)</span>
              </a>
              <span className="text-xs text-[#5C6760]">
                Hardware / Deployment: <strong>{product.deploymentType}</strong>
              </span>
            </div>
          </div>
        </div>

        {/* 2-Column Grid: Problems Solved & Target Operating Environment */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {/* Problems Solved */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#DCE4E0] shadow-2xs">
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#123B2A] mb-4">
              Operational Problems Solved
            </h3>
            <ul className="space-y-3">
              {product.problemsSolved.map((prob, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#2C3832]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C59E3F] mt-2 shrink-0" />
                  <span>{prob}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Target Audience */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#DCE4E0] shadow-2xs">
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#123B2A] mb-4">
              Target Businesses
            </h3>
            <div className="space-y-2">
              {product.targetAudience.map((target, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-[#F8FAF9] border border-[#E2E8E4] text-xs font-medium text-[#1A231F] flex items-center gap-2"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#123B2A] shrink-0" />
                  <span>{target}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Feature Breakdown */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#DCE4E0] shadow-2xs mb-10">
          <div className="pb-4 border-b border-[#EEF2F0] mb-6">
            <h3 className="text-base font-bold text-[#1A231F]">
              Feature Matrix &amp; Functional Modules
            </h3>
            <p className="text-xs text-[#5C6760]">
              Every feature can be customized to match your trade.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            {product.keyFeatures.map((feat, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-[#F8FAF9] border border-[#E2E8E4] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <h4 className="text-xs font-bold text-[#1A231F]">{feat.title}</h4>
                    <span
                      className={`text-[10px] font-mono font-semibold px-2 py-0.5 rounded uppercase ${
                        feat.status === 'implemented'
                          ? 'bg-emerald-100 text-emerald-800'
                          : 'bg-amber-100 text-amber-900'
                      }`}
                    >
                      {feat.status}
                    </span>
                  </div>
                  <p className="text-xs text-[#5C6760] leading-relaxed">
                    {feat.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Specs */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#DCE4E0] shadow-2xs mb-10">
          <h3 className="text-sm font-bold uppercase tracking-wider text-[#123B2A] mb-4">
            System &amp; Hardware Compatibility
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
            <div className="bg-[#F8FAF9] p-4 rounded-xl border border-[#E2E8E4]">
              <span className="text-[#5C6760] block text-[11px]">Platform</span>
              <strong className="text-[#1A231F]">{product.specs.platform}</strong>
            </div>
            <div className="bg-[#F8FAF9] p-4 rounded-xl border border-[#E2E8E4]">
              <span className="text-[#5C6760] block text-[11px]">Offline Durability</span>
              <strong className="text-emerald-800 font-bold">{product.specs.offlineSupport}</strong>
            </div>
            <div className="bg-[#F8FAF9] p-4 rounded-xl border border-[#E2E8E4]">
              <span className="text-[#5C6760] block text-[11px]">Database Layer</span>
              <strong className="text-[#1A231F]">{product.specs.database}</strong>
            </div>
            <div className="bg-[#F8FAF9] p-4 rounded-xl border border-[#E2E8E4]">
              <span className="text-[#5C6760] block text-[11px]">Thermal Receipts &amp; Reports</span>
              <strong className="text-[#1A231F]">{product.specs.dataExport}</strong>
            </div>
            <div className="bg-[#F8FAF9] p-4 rounded-xl border border-[#E2E8E4] sm:col-span-2">
              <span className="text-[#5C6760] block text-[11px]">License &amp; Ownership</span>
              <strong className="text-[#1A231F]">{product.specs.licenseModel}</strong>
            </div>
          </div>
        </div>

        {/* FAQs */}
        {product.faqs && product.faqs.length > 0 && (
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#DCE4E0] shadow-2xs mb-10">
            <h3 className="text-base font-bold text-[#1A231F] mb-4">
              Common Questions About {product.name}
            </h3>
            <div className="space-y-3">
              {product.faqs.map((faq, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-[#F8FAF9] border border-[#E2E8E4]">
                  <h4 className="text-xs sm:text-sm font-bold text-[#1A231F] mb-1 flex items-start gap-2">
                    <HelpCircle className="w-4 h-4 text-[#123B2A] shrink-0 mt-0.5" />
                    <span>{faq.question}</span>
                  </h4>
                  <p className="text-xs sm:text-sm text-[#5C6760] leading-relaxed pl-6">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Founder Consultation Banner */}
        <div className="bg-[#123B2A] text-white p-8 rounded-2xl text-center">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
            Interested in {product.name}?
          </h2>
          <p className="text-xs sm:text-sm text-[#E2EAE5]/80 max-w-xl mx-auto mb-6">
            Call or WhatsApp Abdul Jabbar (0346 7366879) or Fayyaz Khan (0342 2643761) to arrange a customized demo for your shop or organization.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={`https://wa.me/${siteConfig.founders[1].phoneClean}?text=Salam%20Abdul%20Jabbar%20bhai%2C%20mujhe%20${encodeURIComponent(product.name)}%20k%20baare%20mein%20puchna%20hai.`}
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2.5 rounded-xl bg-[#C59E3F] text-[#123B2A] font-bold text-xs"
            >
              WhatsApp Abdul Jabbar
            </a>
            <Button to="/contact" variant="outline" size="md" className="!text-white !border-white/30">
              Submit Inquiry Form
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

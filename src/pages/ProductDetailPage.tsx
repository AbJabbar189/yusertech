import React from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  ArrowLeft,
  CheckCircle2,
  HelpCircle,
  ArrowRight,
} from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import type { ProductItem } from '../config/siteConfig';
import { Badge } from '../components/common/Badge';
import { Button } from '../components/common/Button';
import { POSMockup } from '../components/products/POSMockup';
import { BakeryMockup } from '../components/products/BakeryMockup';
import { MadrasaMockup } from '../components/products/MadrasaMockup';

export const ProductDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const product = siteConfig.products.find((p: ProductItem) => p.slug === slug);

  if (!product) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center p-6 text-center">
        <h1 className="text-2xl font-bold text-[#202722] mb-2">Product Not Found</h1>
        <p className="text-sm text-[#6B746E] mb-6">
          The requested software product specification could not be located.
        </p>
        <Button to="/products" variant="primary" leftIcon={<ArrowLeft className="w-4 h-4" />}>
          Back to All Products
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-[#F7F5EF] py-12 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb & Navigation */}
        <div className="mb-8 flex items-center justify-between">
          <Link
            to="/products"
            className="text-xs font-semibold text-[#123B2A] hover:text-[#D6B46A] inline-flex items-center gap-1.5 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Products</span>
          </Link>

          <Badge variant={product.status}>{product.status}</Badge>
        </div>

        {/* Product Hero Header */}
        <div className="bg-[#123B2A] text-white rounded-2xl p-6 sm:p-10 mb-12 border border-[#224E3A]">
          <div className="max-w-3xl">
            <span className="text-xs font-mono text-[#D6B46A] uppercase tracking-wider block mb-2">
              {product.category} Specifications
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              {product.name}
            </h1>
            <p className="text-base sm:text-lg text-[#EFECE3]/90 leading-relaxed mb-6">
              {product.fullDescription}
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <Button
                to={`/contact?service=${encodeURIComponent(product.name)}`}
                variant="gold"
                size="md"
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                Inquire for Early Pilot Access
              </Button>
              <span className="text-xs text-[#EFECE3]/70 font-mono">
                Status: {product.badgeText}
              </span>
            </div>
          </div>
        </div>

        {/* Interactive Software Demo Window */}
        <div className="mb-14">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-lg font-bold text-[#202722]">
                Interactive Software Interface
              </h2>
              <p className="text-xs text-[#6B746E]">
                Simulate front-counter transactions and administrative screens.
              </p>
            </div>
            <span className="text-xs font-mono text-[#123B2A] font-semibold bg-white border border-[#E3E0D5] px-2.5 py-1 rounded">
              {product.deploymentType}
            </span>
          </div>

          {product.slug === 'retail-pos' && <POSMockup />}
          {product.slug === 'bakery-pos' && <BakeryMockup />}
          {product.slug === 'madrasa-management' && <MadrasaMockup />}
        </div>

        {/* 2-Column Grid: Business Problems Solved & Intended Customers */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
          {/* Business Problems Addressed */}
          <div className="bg-white p-6 sm:p-8 rounded-xl border border-[#E3E0D5]">
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#123B2A] mb-4">
              Business Bottlenecks Solved
            </h3>
            <ul className="space-y-3">
              {product.problemsSolved.map((prob, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#202722]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D6B46A] mt-2 shrink-0" />
                  <span>{prob}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Intended Customer Profile */}
          <div className="bg-white p-6 sm:p-8 rounded-xl border border-[#E3E0D5]">
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#123B2A] mb-4">
              Target Operating Environment
            </h3>
            <p className="text-xs text-[#6B746E] mb-4">
              Engineered specifically for business types where standard off-the-shelf software creates friction:
            </p>
            <div className="space-y-2">
              {product.targetAudience.map((target, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-lg bg-[#FAF9F5] border border-[#E3E0D5] text-xs font-medium text-[#202722] flex items-center gap-2"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#123B2A] shrink-0" />
                  <span>{target}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Feature Breakdown: Implemented vs Planned */}
        <div className="bg-white p-6 sm:p-8 rounded-xl border border-[#E3E0D5] mb-14">
          <div className="flex items-center justify-between pb-4 border-b border-[#E3E0D5] mb-6">
            <div>
              <h3 className="text-base font-bold text-[#202722]">
                Detailed Feature Matrix & Status
              </h3>
              <p className="text-xs text-[#6B746E]">
                We clearly separate active verified features from roadmap items.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {product.keyFeatures.map((feat, idx) => (
              <div
                key={idx}
                className="p-4 rounded-lg bg-[#FAF9F5] border border-[#E3E0D5] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <h4 className="text-xs font-bold text-[#202722]">{feat.title}</h4>
                    <span
                      className={`text-[10px] font-mono font-semibold px-2 py-0.5 rounded uppercase ${
                        feat.status === 'implemented'
                          ? 'bg-emerald-100 text-emerald-800'
                          : feat.status === 'prototype'
                          ? 'bg-amber-100 text-amber-900'
                          : 'bg-stone-200 text-stone-700'
                      }`}
                    >
                      {feat.status}
                    </span>
                  </div>
                  <p className="text-xs text-[#6B746E] leading-relaxed">
                    {feat.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technical & Deployment Specs */}
        <div className="bg-[#FAF9F5] p-6 sm:p-8 rounded-xl border border-[#E3E0D5] mb-14">
          <h3 className="text-sm font-bold uppercase tracking-wider text-[#123B2A] mb-4">
            System Architecture & Deployment Parameters
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
            <div className="bg-white p-4 rounded-lg border border-[#E3E0D5]">
              <span className="text-[#6B746E] block text-[11px] font-mono">Operating Platform</span>
              <strong className="text-[#202722] text-xs">{product.specs.platform}</strong>
            </div>
            <div className="bg-white p-4 rounded-lg border border-[#E3E0D5]">
              <span className="text-[#6B746E] block text-[11px] font-mono">Offline Durability</span>
              <strong className="text-[#123B2A] text-xs">{product.specs.offlineSupport}</strong>
            </div>
            <div className="bg-white p-4 rounded-lg border border-[#E3E0D5]">
              <span className="text-[#6B746E] block text-[11px] font-mono">Database Layer</span>
              <strong className="text-[#202722] text-xs">{product.specs.database}</strong>
            </div>
            <div className="bg-white p-4 rounded-lg border border-[#E3E0D5]">
              <span className="text-[#6B746E] block text-[11px] font-mono">Reports & Export Formats</span>
              <strong className="text-[#202722] text-xs">{product.specs.dataExport}</strong>
            </div>
            <div className="bg-white p-4 rounded-lg border border-[#E3E0D5] sm:col-span-2">
              <span className="text-[#6B746E] block text-[11px] font-mono">License Model</span>
              <strong className="text-[#202722] text-xs">{product.specs.licenseModel}</strong>
            </div>
          </div>
        </div>

        {/* Product FAQs */}
        {product.faqs && product.faqs.length > 0 && (
          <div className="bg-white p-6 sm:p-8 rounded-xl border border-[#E3E0D5] mb-14">
            <h3 className="text-base font-bold text-[#202722] mb-4">
              Frequently Asked Questions for {product.name}
            </h3>
            <div className="space-y-4">
              {product.faqs.map((faq, idx) => (
                <div key={idx} className="p-4 rounded-lg bg-[#FAF9F5] border border-[#E3E0D5]">
                  <h4 className="text-xs sm:text-sm font-bold text-[#202722] mb-1.5 flex items-start gap-2">
                    <HelpCircle className="w-4 h-4 text-[#123B2A] shrink-0 mt-0.5" />
                    <span>{faq.question}</span>
                  </h4>
                  <p className="text-xs sm:text-sm text-[#6B746E] leading-relaxed pl-6">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CTA Box */}
        <div className="bg-[#123B2A] text-white p-8 rounded-2xl text-center border border-[#224E3A]">
          <h2 className="text-2xl font-bold text-white mb-2">
            Interested in {product.name}?
          </h2>
          <p className="text-xs sm:text-sm text-[#EFECE3]/80 max-w-xl mx-auto mb-6">
            Contact our engineering team to review current beta builds, discuss custom module additions, or arrange an in-person or remote walkthrough.
          </p>
          <Button
            to={`/contact?service=${encodeURIComponent(product.name)}`}
            variant="gold"
            size="lg"
            rightIcon={<ArrowRight className="w-4 h-4" />}
          >
            Inquire About {product.name}
          </Button>
        </div>
      </div>
    </div>
  );
};

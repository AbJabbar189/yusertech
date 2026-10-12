import React from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  ArrowLeft,
  CheckCircle2,
  HelpCircle,
  MessageSquare,
  Monitor,
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
      <div className="min-h-[60vh] flex flex-col items-center justify-center p-6 text-center font-sans">
        <h1 className="text-2xl font-bold text-[#0F172A] mb-2">Product Not Found</h1>
        <p className="text-sm text-slate-500 mb-6">
          The requested software specification could not be located.
        </p>
        <Button to="/products" variant="primary" leftIcon={<ArrowLeft className="w-4 h-4" />}>
          Back to All Solutions
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-[#F8FAFC] py-12 sm:py-20 font-sans">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb & Navigation */}
        <div className="mb-8 flex items-center justify-between">
          <Link
            to="/products"
            className="text-xs font-semibold text-[#0056D2] hover:text-[#00B050] inline-flex items-center gap-1.5 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Solutions</span>
          </Link>

          <Badge variant={product.status}>{product.status}</Badge>
        </div>

        {/* Product Hero Header */}
        <div className="bg-white rounded-2xl p-6 sm:p-10 mb-10 border border-slate-200 hover-lift">
          <div className="max-w-3xl">
            <span className="text-xs font-bold text-[#0056D2] uppercase tracking-wider block mb-2">
              {product.category}
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] mb-3">
              {product.name}
            </h1>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
              {product.fullDescription}
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href={`https://wa.me/${siteConfig.founders[1].phoneClean}?text=Salam%20Abdul%20Jabbar%20bhai%2C%20mujhe%20${encodeURIComponent(product.name)}%20k%20baare%20mein%20baat%20karni%20hai.`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#00B050] hover:bg-[#009644] text-white text-xs sm:text-sm font-bold shadow-md transition-all"
              >
                <MessageSquare className="w-4 h-4 text-white" />
                <span>WhatsApp Abdul Jabbar (0346 7366879)</span>
              </a>
              <span className="text-xs text-slate-600 flex items-center gap-1.5">
                <Monitor className="w-4 h-4 text-[#0056D2]" />
                <span>Hardware / Deployment: <strong>{product.deploymentType}</strong></span>
              </span>
            </div>
          </div>
        </div>

        {/* 2-Column Grid: Problems Solved & Target Operating Environment */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {/* Problems Solved */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 hover-lift">
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#0056D2] mb-4">
              Operational Problems Solved
            </h3>
            <ul className="space-y-3">
              {product.problemsSolved.map((prob, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <span className="w-2 h-2 rounded-full bg-[#00B050] mt-1.5 shrink-0" />
                  <span>{prob}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Target Audience */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 hover-lift">
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#0056D2] mb-4">
              Target Businesses
            </h3>
            <div className="space-y-2">
              {product.targetAudience.map((target, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold text-[#0F172A] flex items-center gap-2"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#00B050] shrink-0" />
                  <span>{target}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Feature Breakdown */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 hover-lift mb-10">
          <div className="pb-4 border-b border-slate-100 mb-6">
            <h3 className="text-base font-bold text-[#0F172A]">
              Feature Matrix &amp; Functional Modules
            </h3>
            <p className="text-xs text-slate-500">
              Every feature can be customized to match your specific shop or counter setup.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            {product.keyFeatures.map((feat, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <h4 className="text-xs font-bold text-[#0F172A]">{feat.title}</h4>
                    <span
                      className={`text-[10px] font-mono font-semibold px-2 py-0.5 rounded uppercase ${
                        feat.status === 'implemented'
                          ? 'bg-emerald-100 text-[#00873D]'
                          : 'bg-blue-100 text-[#0056D2]'
                      }`}
                    >
                      {feat.status}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {feat.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Specs */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 hover-lift mb-10">
          <h3 className="text-sm font-bold uppercase tracking-wider text-[#0056D2] mb-4">
            System &amp; Hardware Compatibility
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
              <span className="text-slate-500 block text-[11px]">Platform</span>
              <strong className="text-[#0F172A]">{product.specs.platform}</strong>
            </div>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
              <span className="text-slate-500 block text-[11px]">Offline Durability</span>
              <strong className="text-[#00873D] font-bold">{product.specs.offlineSupport}</strong>
            </div>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
              <span className="text-slate-500 block text-[11px]">Database Layer</span>
              <strong className="text-[#0F172A]">{product.specs.database}</strong>
            </div>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
              <span className="text-slate-500 block text-[11px]">Thermal Receipts &amp; Reports</span>
              <strong className="text-[#0F172A]">{product.specs.dataExport}</strong>
            </div>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 sm:col-span-2">
              <span className="text-slate-500 block text-[11px]">License &amp; Ownership</span>
              <strong className="text-[#0F172A]">{product.specs.licenseModel}</strong>
            </div>
          </div>
        </div>

        {/* FAQs */}
        {product.faqs && product.faqs.length > 0 && (
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 hover-lift mb-10">
            <h3 className="text-base font-bold text-[#0F172A] mb-4">
              Common Questions About {product.name}
            </h3>
            <div className="space-y-3">
              {product.faqs.map((faq, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <h4 className="text-xs sm:text-sm font-bold text-[#0F172A] mb-1 flex items-start gap-2">
                    <HelpCircle className="w-4 h-4 text-[#0056D2] shrink-0 mt-0.5" />
                    <span>{faq.question}</span>
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-6">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Founder Consultation Banner */}
        <div className="bg-[#002B66] text-white p-8 rounded-2xl text-center shadow-lg relative overflow-hidden">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
            Interested in {product.name}?
          </h2>
          <p className="text-xs sm:text-sm text-slate-200 max-w-xl mx-auto mb-6">
            Call or WhatsApp Abdul Jabbar (0346 7366879) or Fayyaz Khan (0342 2643761) to arrange a customized PC hardware and software demo for your business.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={`https://wa.me/${siteConfig.founders[1].phoneClean}?text=Salam%20Abdul%20Jabbar%20bhai%2C%20mujhe%20${encodeURIComponent(product.name)}%20k%20baare%20mein%20puchna%20hai.`}
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2.5 rounded-xl bg-[#00B050] hover:bg-[#009644] text-white font-bold text-xs shadow-md transition-all"
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

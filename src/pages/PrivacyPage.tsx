import React from 'react';
import { ShieldAlert, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../config/siteConfig';

export const PrivacyPage: React.FC = () => {
  return (
    <div className="bg-[#F7F5EF] py-16 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="text-xs font-semibold text-[#123B2A] hover:text-[#D6B46A] inline-flex items-center gap-1.5 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>

        {/* Legal Disclaimer Notice */}
        <div className="mb-8 p-4 rounded-xl bg-amber-50 border border-amber-200 flex items-start gap-3">
          <ShieldAlert className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
          <div className="text-xs text-amber-900 leading-relaxed">
            <strong className="block font-bold mb-0.5">
              Legal Notice & Operational Placeholder
            </strong>
            This is a starter Privacy Policy document prepared for {siteConfig.brand.name}. Text marked in brackets requires legal review and jurisdictional customization by certified legal counsel prior to commercial deployment in specific regulatory regions (e.g., GDPR, CCPA, regional data privacy laws).
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-[#E3E0D5] p-6 sm:p-10 shadow-xs space-y-8 text-xs sm:text-sm text-[#202722] leading-relaxed">
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#202722] mb-2">
              Privacy Policy
            </h1>
            <p className="text-xs text-[#6B746E]">
              Last updated: October 2026 • Document Version 1.0 (Draft Starter)
            </p>
          </div>

          <section className="space-y-3">
            <h2 className="text-base font-bold text-[#123B2A]">1. Overview & Scope</h2>
            <p>
              {siteConfig.brand.name} (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) respects the privacy of individuals who interact with our website and business services. This Privacy Policy outlines what information we receive when you submit an inquiry through our website, how that information is handled, and your choices regarding that data.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-bold text-[#123B2A]">2. Information We Collect</h2>
            <p>
              We only collect information you voluntarily provide to us when submitting a project inquiry, including:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-[#6B746E]">
              <li>Contact details: Full name, business or organization name, email address, and telephone or WhatsApp number.</li>
              <li>Project scope information: Desired service, estimated budget range, and project requirements.</li>
            </ul>
            <p className="p-3 bg-[#FAF9F5] rounded border border-[#E3E0D5] text-[11px] font-mono">
              [Note for Legal Review: If cookies, automated analytics, or server log tracking are activated on the production domain, describe cookie consent mechanisms and retention periods here.]
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-bold text-[#123B2A]">3. How Your Information is Used</h2>
            <p>
              Submitted inquiry information is used exclusively to:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-[#6B746E]">
              <li>Respond to your project inquiry and communicate regarding proposals and technical specifications.</li>
              <li>Prepare contracts, software requirement specifications, and milestone plans.</li>
              <li>Maintain ongoing business communications during active engagements.</li>
            </ul>
            <p>
              We do not sell, rent, or trade your contact details to third-party marketing brokers.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-bold text-[#123B2A]">4. Data Retention & Security</h2>
            <p>
              We retain business communications for the duration necessary to satisfy contractual, accounting, and legal requirements. We employ reasonable organizational safeguards to protect submitted information; however, no internet transmission method is guaranteed 100% secure.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-bold text-[#123B2A]">5. Contact Regarding Privacy Inquiries</h2>
            <p>
              For questions concerning this privacy disclosure or to request deletion of your inquiry correspondence from our records, contact us at:
            </p>
            <div className="p-4 bg-[#FAF9F5] rounded-lg border border-[#E3E0D5] text-xs">
              <p className="font-semibold text-[#123B2A]">{siteConfig.brand.name} Privacy Administration</p>
              <p>Email: {siteConfig.contact.email}</p>
              <p>Address: [Insert formal registered business address prior to commercial operation]</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

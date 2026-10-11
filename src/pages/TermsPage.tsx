import React from 'react';
import { ShieldAlert, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../config/siteConfig';

export const TermsPage: React.FC = () => {
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

        {/* Legal Disclaimer */}
        <div className="mb-8 p-4 rounded-xl bg-amber-50 border border-amber-200 flex items-start gap-3">
          <ShieldAlert className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
          <div className="text-xs text-amber-900 leading-relaxed">
            <strong className="block font-bold mb-0.5">
              Legal Notice & Review Placeholder
            </strong>
            These Terms of Service constitute a general starter framework for {siteConfig.brand.name}. Individual software development projects and service agreements are governed by distinct, signed Statement of Work (SOW) contracts with customized warranties, milestone terms, and jurisdiction clauses.
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-[#E3E0D5] p-6 sm:p-10 shadow-xs space-y-8 text-xs sm:text-sm text-[#202722] leading-relaxed">
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#202722] mb-2">
              Terms of Service
            </h1>
            <p className="text-xs text-[#6B746E]">
              Last updated: October 2026 • Starter Framework Version 1.0
            </p>
          </div>

          <section className="space-y-3">
            <h2 className="text-base font-bold text-[#123B2A]">1. Agreement to Terms</h2>
            <p>
              By accessing or using this website, you agree to comply with and be bound by these Terms of Service. If you do not agree with any part of these terms, please refrain from using our website or submitting project inquiries.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-bold text-[#123B2A]">2. Intellectual Property & Brand Rights</h2>
            <p>
              The materials published on this website—including the {siteConfig.brand.name} brand name, logo concept, website architecture, text, and interface code—are the intellectual property of {siteConfig.brand.name} or used under applicable licenses. Nothing on this website constitutes a license to reuse our trademarks or branding without prior written authorization.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-bold text-[#123B2A]">3. Client Projects & Statement of Work (SOW)</h2>
            <p>
              Informational content on this website does not constitute a binding legal contract or formal price quote. A binding software engineering engagement only occurs upon mutual execution of a formal project contract or Statement of Work (SOW) detailing:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-[#6B746E]">
              <li>Explicit scope of work and agreed deliverables.</li>
              <li>Milestone schedules and payment terms.</li>
              <li>Source code ownership, licensing, and handover protocols.</li>
              <li>Warranty terms and post-delivery support commitments.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-bold text-[#123B2A]">4. Product Status & Accuracy of Information</h2>
            <p>
              We endeavor to maintain accurate descriptions of our software prototypes and products. However, features marked &quot;In Development&quot; or &quot;Coming Soon&quot; are subject to continuous evolution and refinement. We do not guarantee immediate availability of unverified features.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-bold text-[#123B2A]">5. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by applicable law, {siteConfig.brand.name} shall not be liable for any indirect, incidental, or consequential damages resulting from the use or inability to use this website.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-bold text-[#123B2A]">6. Governing Law & Contact</h2>
            <p>
              [Specify governing jurisdiction, courts, and regional law prior to formal contract signing]. For inquiries regarding legal agreements, contact {siteConfig.contact.email}.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

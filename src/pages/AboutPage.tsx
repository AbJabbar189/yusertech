import React from 'react';
import {
  HeartHandshake,
  Cpu,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { SectionHeader } from '../components/common/SectionHeader';
import { Button } from '../components/common/Button';

export const AboutPage: React.FC = () => {
  return (
    <div className="bg-[#F7F5EF] py-16 sm:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="About YUSERTECH"
          title="Technology Built for Ground-Level Business Realities"
          subtitle="We are a software development and web solutions agency dedicated to building tools that solve real operational friction."
        />

        {/* Mission & Purpose */}
        <div className="bg-white rounded-2xl border border-[#E3E0D5] p-6 sm:p-10 mb-12 shadow-xs space-y-6">
          <div className="border-b border-[#E3E0D5] pb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-[#123B2A] block mb-2">
              Our Mission
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#202722] leading-tight">
              {siteConfig.brand.missionStatement}
            </h2>
          </div>

          <p className="text-base text-[#6B746E] leading-relaxed">
            {siteConfig.brand.philosophy}
          </p>

          <p className="text-sm text-[#6B746E] leading-relaxed">
            Many small-to-midsize businesses find themselves trapped between two undesirable choices: expensive, bloated enterprise suites that require complex monthly subscriptions and force unnatural workflows, or brittle, outdated spreadsheets and manual registers that break under load. YUSERTECH exists to bridge this gap with purpose-crafted, maintainable software.
          </p>
        </div>

        {/* Who We Serve */}
        <div className="bg-white rounded-2xl border border-[#E3E0D5] p-6 sm:p-10 mb-12 shadow-xs">
          <h2 className="text-xl sm:text-2xl font-bold text-[#202722] mb-4">
            Who YUSERTECH Serves
          </h2>
          <p className="text-sm text-[#6B746E] mb-6">
            We partner with businesses and organizations that value straightforward reliability over buzzwords:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                title: 'Retail Merchants & Store Owners',
                desc: 'Who need billing terminals that run smoothly without crashing during local internet blackouts.',
              },
              {
                title: 'Bakeries & Food Confectioneries',
                desc: 'Who manage perishable item shelf lives, morning rush-hours, and advance custom cake bookings.',
              },
              {
                title: 'Madrasas & Faith-Based Schools',
                desc: 'Who require dignified, organized student registers, fee vouchers, and exam tabulation.',
              },
              {
                title: 'Professional Service Firms',
                desc: 'Who need fast, credible business websites to win municipal, corporate, and private tenders.',
              },
            ].map((audience, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-[#FAF9F5] border border-[#E3E0D5] flex flex-col justify-start"
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#123B2A] shrink-0" />
                  <h3 className="text-sm font-bold text-[#202722]">{audience.title}</h3>
                </div>
                <p className="text-xs text-[#6B746E] leading-relaxed pl-6">{audience.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Engineering Philosophy & Maintainability */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-[#123B2A] text-white rounded-2xl p-6 sm:p-8 border border-[#224E3A] flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-[#164632] border border-[#224E3A] text-[#D6B46A] flex items-center justify-center font-bold mb-4">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                Commitment to Maintainable Code
              </h3>
              <p className="text-xs sm:text-sm text-[#EFECE3]/80 leading-relaxed mb-4">
                We believe code should remain intelligible years after deployment. We prioritize standard, well-documented technologies, centralized configuration architectures, and clean database structures.
              </p>
              <ul className="space-y-1.5 text-xs text-[#EFECE3]/90">
                <li>• No vendor lock-in mechanisms</li>
                <li>• Full handover of your repository & documentation</li>
                <li>• Easy rebranding via central configuration files</li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E3E0D5] flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-[#FAF3E0] border border-[#E8D49F] text-[#123B2A] flex items-center justify-center font-bold mb-4">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#202722] mb-2">
                How We Work With Clients
              </h3>
              <p className="text-xs sm:text-sm text-[#6B746E] leading-relaxed mb-4">
                Our client collaboration is rooted in honesty and measurable milestones. You deal directly with software practitioners, receiving regular staging previews and clear written scope boundaries.
              </p>
              <ul className="space-y-1.5 text-xs text-[#202722]">
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#123B2A]" />
                  <span>Itemized proposals before billing</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#123B2A]" />
                  <span>Honest status reports during builds</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#123B2A]" />
                  <span>Post-launch warranty and assistance</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="p-8 sm:p-10 rounded-2xl bg-white border border-[#E3E0D5] text-center shadow-xs">
          <h2 className="text-2xl font-bold text-[#202722] mb-2">
            Let’s Build Something Solid Together
          </h2>
          <p className="text-sm text-[#6B746E] max-w-lg mx-auto mb-6">
            Share your operational requirements or schedule a consultation with YUSERTECH.
          </p>
          <Button to="/contact" variant="gold" size="lg" rightIcon={<ArrowRight className="w-4 h-4" />}>
            Start a Conversation
          </Button>
        </div>
      </div>
    </div>
  );
};

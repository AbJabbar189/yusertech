import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Code2,
  Sparkles,
  HelpCircle,
} from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { Button } from '../components/common/Button';
import { Badge } from '../components/common/Badge';
import { SectionHeader } from '../components/common/SectionHeader';
import { POSMockup } from '../components/products/POSMockup';

export const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* HERO SECTION */}
      <section className="relative bg-[#123B2A] text-white pt-16 pb-24 md:pt-24 md:pb-32 overflow-hidden border-b border-[#224E3A]">
        {/* Subtle geometric grid background accent */}
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(#D6B46A 1px, transparent 1px)`,
            backgroundSize: '24px 24px',
          }}
          aria-hidden="true"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Headline and Positioning */}
            <div className="lg:col-span-7 flex flex-col items-start space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#164632] border border-[#224E3A] text-xs font-semibold text-[#D6B46A]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Software Development & Web Solutions Agency</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-5xl font-extrabold tracking-tight leading-[1.15] text-white">
                Practical Software Solutions for Growing Businesses.
              </h1>

              <p className="text-lg sm:text-xl text-[#EFECE3]/85 leading-relaxed max-w-2xl">
                {siteConfig.brand.name} develops business websites, web applications, and custom software that help businesses manage their operations and work more efficiently.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto">
                <Button
                  to="/contact"
                  variant="gold"
                  size="lg"
                  rightIcon={<ArrowRight className="w-4 h-4" />}
                >
                  Discuss Your Project
                </Button>
                <Button
                  to="/products"
                  variant="outline"
                  size="lg"
                  className="!text-white !border-[#EFECE3]/40 hover:!bg-white/10"
                >
                  Explore Our Solutions
                </Button>
              </div>

              {/* Trust & Transparency Signals */}
              <div className="pt-6 border-t border-[#224E3A] w-full grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-[#EFECE3]/80">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D6B46A] shrink-0" />
                  <span>Honest Product Status</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D6B46A] shrink-0" />
                  <span>Maintainable Architecture</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D6B46A] shrink-0" />
                  <span>Transparent Deliverables</span>
                </div>
              </div>
            </div>

            {/* Right Column: Live Software Terminal Preview */}
            <div className="lg:col-span-5 relative">
              <div className="relative z-10">
                <POSMockup />
              </div>
              <div className="mt-3 text-center">
                <span className="text-[11px] text-[#EFECE3]/60 italic">
                  Interactive Preview: YUSER Retail POS offline billing counter shell
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: SERVICES OVERVIEW */}
      <section className="py-20 bg-[#F7F5EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="What We Build"
            title="Engineered Services Designed for Business Reality"
            subtitle="We don't sell bloated templates or unnecessary complexity. We build clear, maintainable tools designed to solve specific operational bottlenecks."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {siteConfig.services.slice(0, 6).map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-xl p-6 sm:p-8 border border-[#E3E0D5] hover:border-[#123B2A] transition-all hover:shadow-md flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-lg bg-[#FAF3E0] text-[#123B2A] flex items-center justify-center font-bold mb-5 border border-[#E8D49F] group-hover:bg-[#123B2A] group-hover:text-[#D6B46A] transition-colors">
                    <Code2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-[#202722] mb-2">{service.title}</h3>
                  <p className="text-sm text-[#6B746E] leading-relaxed mb-4">
                    {service.shortDescription}
                  </p>
                  <div className="pt-3 border-t border-[#F7F5EF]">
                    <span className="text-xs font-semibold text-[#123B2A] block mb-1.5 uppercase tracking-wider">
                      Key Benefit
                    </span>
                    <p className="text-xs text-[#202722]/80">{service.benefits[0]}</p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[#E3E0D5]">
                  <Link
                    to={`/services#${service.id}`}
                    className="text-xs font-bold text-[#123B2A] hover:text-[#D6B46A] inline-flex items-center gap-1 transition-colors"
                  >
                    <span>View Specifications & Deliverables</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button to="/services" variant="secondary" size="lg">
              Explore All 7 Service Offerings
            </Button>
          </div>
        </div>
      </section>

      {/* SECTION 3: FEATURED SOFTWARE PRODUCTS */}
      <section className="py-20 bg-white border-y border-[#E3E0D5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Dedicated Products"
            title="Purpose-Built Business Software"
            subtitle="In addition to custom client projects, YUSERTECH develops focused software products for retailers, bakeries, and educational institutions."
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {siteConfig.products.map((product) => (
              <div
                key={product.id}
                className="bg-[#FAF9F5] border border-[#E3E0D5] rounded-xl overflow-hidden flex flex-col justify-between hover:border-[#123B2A] transition-colors"
              >
                <div className="p-6 sm:p-8">
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-xs font-mono uppercase text-[#6B746E]">
                      {product.category}
                    </span>
                    <Badge variant={product.status}>{product.status}</Badge>
                  </div>

                  <h3 className="text-2xl font-bold text-[#202722] mb-3">{product.name}</h3>
                  <p className="text-sm text-[#6B746E] leading-relaxed mb-6">
                    {product.shortDescription}
                  </p>

                  <div className="space-y-2.5 pt-4 border-t border-[#E3E0D5]">
                    <span className="text-xs font-bold text-[#123B2A] uppercase tracking-wider block">
                      Core Capabilities
                    </span>
                    {product.keyFeatures.slice(0, 3).map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-[#202722]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#123B2A] shrink-0 mt-0.5" />
                        <span>{feat.title}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 p-3 rounded-lg bg-white border border-[#E3E0D5] text-xs text-[#6B746E]">
                    <span className="font-semibold text-[#202722] block mb-0.5">Deployment:</span>
                    <span>{product.deploymentType}</span>
                  </div>
                </div>

                <div className="p-6 bg-white border-t border-[#E3E0D5] flex items-center justify-between gap-3">
                  <Link
                    to={`/products/${product.slug}`}
                    className="text-xs font-bold text-[#123B2A] hover:text-[#D6B46A] inline-flex items-center gap-1 transition-colors"
                  >
                    <span>Read Full Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <Button to="/contact" variant="secondary" size="sm">
                    Inquire
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 rounded-xl bg-[#FAF3E0]/70 border border-[#E8D49F] max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-left">
              <h4 className="text-sm font-bold text-[#123B2A]">
                Honest Product Status Commitment
              </h4>
              <p className="text-xs text-[#202722]/80 mt-0.5">
                We clearly disclose development status for all solutions. No fabricated client counts or unverified claims.
              </p>
            </div>
            <Link
              to="/products"
              className="text-xs font-bold text-[#123B2A] underline underline-offset-4 shrink-0"
            >
              Learn about our verification standards →
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 4: SELECTED PORTFOLIO & PROTOTYPES */}
      <section className="py-20 bg-[#F7F5EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Engineering Work"
            title="Prototypes, Blueprints & Case Studies"
            subtitle="Transparent demonstrations of our architectural decisions, code prototypes, and software solutions."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {siteConfig.portfolio.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl border border-[#E3E0D5] p-6 sm:p-7 flex flex-col justify-between hover:shadow-md transition-shadow"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-mono text-[#6B746E] uppercase">
                      {item.category}
                    </span>
                    <Badge variant={item.status}>{item.status}</Badge>
                  </div>
                  <h3 className="text-lg font-bold text-[#202722] mb-2">{item.title}</h3>
                  <div className="text-xs text-[#123B2A] font-semibold mb-3">
                    Type: {item.type}
                  </div>
                  <p className="text-xs text-[#6B746E] leading-relaxed mb-4">
                    {item.problemStatement}
                  </p>

                  <div className="space-y-1.5 pt-3 border-t border-[#F7F5EF]">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#202722] block mb-1">
                      Architecture Highlights
                    </span>
                    {item.highlights.map((h, i) => (
                      <p key={i} className="text-xs text-[#202722]/80 flex items-start gap-1.5">
                        <span className="text-[#D6B46A] font-bold">•</span>
                        <span>{h}</span>
                      </p>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[#E3E0D5]">
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {item.technologies.slice(0, 3).map((tech, i) => (
                      <span
                        key={i}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#FAF9F5] border border-[#E3E0D5] text-[#202722]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Link
                    to="/portfolio"
                    className="text-xs font-bold text-[#123B2A] hover:text-[#D6B46A] inline-flex items-center gap-1 transition-colors"
                  >
                    <span>View Architectural Blueprint</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Button to="/portfolio" variant="secondary" size="md">
              View Portfolio & Technical Blueprints
            </Button>
          </div>
        </div>
      </section>

      {/* SECTION 5: DEVELOPMENT PROCESS */}
      <section className="py-20 bg-[#123B2A] text-white border-t border-[#224E3A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="How We Work"
            title="A Structured, Transparent Engineering Process"
            subtitle="Every project follows a defined lifecycle so you always know what is being built, when milestones are delivered, and how your software is verified."
            theme="dark"
          />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {siteConfig.processSteps.map((step, idx) => (
              <div
                key={idx}
                className="bg-[#164632] border border-[#224E3A] rounded-xl p-5 flex flex-col justify-between"
              >
                <div>
                  <span className="text-2xl font-extrabold text-[#D6B46A] font-mono block mb-3">
                    {step.step}
                  </span>
                  <h4 className="text-base font-bold text-white mb-2">{step.title}</h4>
                  <p className="text-xs text-[#EFECE3]/80 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: WHY CHOOSE YUSERTECH */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Core Standards"
            title="Why Business Owners Choose YUSERTECH"
            subtitle="We prioritize long-term software maintainability, accessible code, and authentic business outcomes over buzzwords."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {siteConfig.whyChooseUs.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#FAF9F5] border border-[#E3E0D5] rounded-xl p-6 flex flex-col justify-start"
              >
                <div className="w-10 h-10 rounded-lg bg-[#FAF3E0] text-[#123B2A] flex items-center justify-center font-bold mb-4 border border-[#E8D49F]">
                  <ShieldCheck className="w-5 h-5 text-[#123B2A]" />
                </div>
                <h3 className="text-base font-bold text-[#202722] mb-2">{item.title}</h3>
                <p className="text-xs text-[#6B746E] leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: FAQ PREVIEW */}
      <section className="py-20 bg-[#F7F5EF] border-t border-[#E3E0D5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Got Questions?"
            title="Practical Answers for Business Clients"
            subtitle="Straight answers on project pricing, ownership, technical support, and offline capabilities."
          />

          <div className="space-y-4">
            {siteConfig.faqs.slice(0, 4).map((faq, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-6 border border-[#E3E0D5] shadow-2xs"
              >
                <h3 className="text-base font-bold text-[#202722] flex items-start gap-2.5">
                  <HelpCircle className="w-5 h-5 text-[#123B2A] shrink-0 mt-0.5" />
                  <span>{faq.question}</span>
                </h3>
                <p className="mt-3 text-sm text-[#6B746E] leading-relaxed pl-7">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/faq"
              className="text-sm font-bold text-[#123B2A] hover:text-[#D6B46A] inline-flex items-center gap-1.5 transition-colors underline underline-offset-4"
            >
              <span>View all frequently asked questions</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 8: PROJECT INQUIRY CTA BANNER */}
      <section className="py-20 bg-[#123B2A] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#164632] border border-[#224E3A] text-xs font-semibold text-[#D6B46A] mb-4">
            <span>Direct Client Consultation</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
            Ready to Build Digital Tools That Actually Work?
          </h2>

          <p className="text-base sm:text-lg text-[#EFECE3]/85 max-w-2xl mx-auto mb-8 leading-relaxed">
            Whether you need a high-converting business website, an offline POS billing setup, or a custom management system, let’s review your exact operational requirements.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button
              to="/contact"
              variant="gold"
              size="lg"
              rightIcon={<ArrowRight className="w-4 h-4" />}
            >
              Discuss Your Project
            </Button>
            <Button
              to="/services"
              variant="outline"
              size="lg"
              className="!text-white !border-white/30 hover:!bg-white/10"
            >
              Browse Services
            </Button>
          </div>

          <p className="text-xs text-[#EFECE3]/60 mt-6">
            No sales pressure • Clear proposal with milestones • Direct technical consultation
          </p>
        </div>
      </section>
    </div>
  );
};

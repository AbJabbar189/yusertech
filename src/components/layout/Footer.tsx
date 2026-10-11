import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Clock, ArrowRight } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';
import { Logo } from '../common/Logo';

const CURRENT_YEAR = new Date().getFullYear();

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#123B2A] text-white border-t border-[#224E3A] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-[#224E3A]">
          {/* Col 1 & 2: Brand & Purpose */}
          <div className="lg:col-span-2 flex flex-col space-y-4">
            <Link to="/" className="inline-block">
              <Logo variant="full" theme="dark" iconSize={38} />
            </Link>
            <p className="text-sm text-[#EFECE3]/80 leading-relaxed max-w-sm">
              {siteConfig.brand.tagline} {siteConfig.brand.missionStatement}
            </p>
            <div className="pt-2">
              <div className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full bg-[#164632] text-[#D6B46A] border border-[#224E3A]">
                <span className="w-2 h-2 rounded-full bg-[#D6B46A] animate-pulse" />
                <span>Open for Client Inquiries & Pilot Collaborations</span>
              </div>
            </div>
          </div>

          {/* Col 3: Services */}
          <div>
            <h3 className="text-sm font-semibold text-[#D6B46A] uppercase tracking-wider mb-4">
              Services
            </h3>
            <ul className="space-y-2.5 text-sm text-[#EFECE3]/80">
              {siteConfig.services.slice(0, 5).map((service) => (
                <li key={service.id}>
                  <Link
                    to={`/services#${service.id}`}
                    className="hover:text-white transition-colors hover:underline decoration-[#D6B46A] underline-offset-4"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/services"
                  className="text-xs font-semibold text-[#D6B46A] inline-flex items-center gap-1 hover:text-white transition-colors"
                >
                  <span>View All Services</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Products */}
          <div>
            <h3 className="text-sm font-semibold text-[#D6B46A] uppercase tracking-wider mb-4">
              Products
            </h3>
            <ul className="space-y-2.5 text-sm text-[#EFECE3]/80">
              {siteConfig.products.map((product) => (
                <li key={product.id}>
                  <Link
                    to={`/products/${product.slug}`}
                    className="hover:text-white transition-colors hover:underline decoration-[#D6B46A] underline-offset-4"
                  >
                    {product.name}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link
                  to="/portfolio"
                  className="hover:text-white transition-colors hover:underline decoration-[#D6B46A] underline-offset-4"
                >
                  Portfolio & Blueprints
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="hover:text-white transition-colors hover:underline decoration-[#D6B46A] underline-offset-4"
                >
                  Questions & Answers
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Contact Channels */}
          <div>
            <h3 className="text-sm font-semibold text-[#D6B46A] uppercase tracking-wider mb-4">
              Direct Contact
            </h3>
            <ul className="space-y-3 text-xs text-[#EFECE3]/80">
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#D6B46A] shrink-0 mt-0.5" />
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="hover:text-white transition-colors break-all"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#D6B46A] shrink-0 mt-0.5" />
                <a
                  href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, '')}`}
                  className="hover:text-white transition-colors"
                >
                  {siteConfig.contact.phoneDisplay}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D6B46A] shrink-0 mt-0.5" />
                <span>{siteConfig.contact.address}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#D6B46A] shrink-0 mt-0.5" />
                <span>{siteConfig.contact.officeHours}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#EFECE3]/60 gap-4">
          <p>
            © {CURRENT_YEAR} {siteConfig.brand.name}. All rights reserved. Technology That Works for Your Business.
          </p>
          <div className="flex items-center space-x-6">
            <Link to="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link to="/contact" className="hover:text-white transition-colors">
              Inquiry Form
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

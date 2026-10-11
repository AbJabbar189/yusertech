import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Clock } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';
import { Logo } from '../common/Logo';

const CURRENT_YEAR = new Date().getFullYear();

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#123B2A] text-white border-t border-[#1C4E38] pt-16 pb-12 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-[#1C4E38]">
          {/* Col 1 & 2: Brand & Founders */}
          <div className="lg:col-span-2 flex flex-col space-y-4">
            <Link to="/" className="inline-block">
              <Logo variant="full" theme="dark" iconSize={38} />
            </Link>
            <p className="text-sm text-[#E2EAE5]/85 leading-relaxed max-w-sm">
              Founded by <strong>Fayyaz Khan</strong> (Founder) &amp; <strong>Abdul Jabbar</strong> (Co-Founder) in Orangi Town, Karachi. We engineer custom POS systems for all business types, management systems, and workflow automation.
            </p>
            <div className="pt-2 flex flex-wrap gap-2 text-xs">
              <span className="px-2.5 py-1 rounded-md bg-[#184633] text-[#D4B35E] border border-[#235841] font-medium">
                Founder: Fayyaz Khan
              </span>
              <span className="px-2.5 py-1 rounded-md bg-[#184633] text-[#D4B35E] border border-[#235841] font-medium">
                Co-Founder: Abdul Jabbar
              </span>
            </div>
          </div>

          {/* Col 3: Services */}
          <div>
            <h3 className="text-xs font-bold text-[#C59E3F] uppercase tracking-wider mb-4">
              Our Services
            </h3>
            <ul className="space-y-2.5 text-xs text-[#E2EAE5]/85">
              {siteConfig.services.map((service) => (
                <li key={service.id}>
                  <Link
                    to={`/services#${service.id}`}
                    className="hover:text-white transition-colors hover:underline decoration-[#C59E3F] underline-offset-4"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Solutions */}
          <div>
            <h3 className="text-xs font-bold text-[#C59E3F] uppercase tracking-wider mb-4">
              Software Solutions
            </h3>
            <ul className="space-y-2.5 text-xs text-[#E2EAE5]/85">
              {siteConfig.products.map((product) => (
                <li key={product.id}>
                  <Link
                    to={`/products/${product.slug}`}
                    className="hover:text-white transition-colors hover:underline decoration-[#C59E3F] underline-offset-4"
                  >
                    {product.name}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link to="/portfolio" className="hover:text-white transition-colors">
                  Engineering Blueprints
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-white transition-colors">
                  Frequently Asked Questions
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Founders Contact & Hours */}
          <div>
            <h3 className="text-xs font-bold text-[#C59E3F] uppercase tracking-wider mb-4">
              Direct Contact
            </h3>
            <ul className="space-y-3 text-xs text-[#E2EAE5]/85">
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#C59E3F] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[10px] text-[#A6BCB0] block">Abdul Jabbar (Co-Founder):</span>
                  <a href={`tel:${siteConfig.founders[1].phoneClean}`} className="font-semibold hover:text-white">
                    {siteConfig.founders[1].phone}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#C59E3F] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[10px] text-[#A6BCB0] block">Fayyaz Khan (Founder):</span>
                  <a href={`tel:${siteConfig.founders[0].phoneClean}`} className="font-semibold hover:text-white">
                    {siteConfig.founders[0].phone}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C59E3F] shrink-0 mt-0.5" />
                <span>Orangi Town, Karachi (Remote & On-Site Visits)</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#C59E3F] shrink-0 mt-0.5" />
                <div>
                  <span>9:00 AM – 5:00 PM (Mon–Thu & Sat)</span>
                  <span className="block text-[10px] text-[#D4B35E]">Friday & Sunday: Closed</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#A6BCB0] gap-4">
          <p>
            © {CURRENT_YEAR} {siteConfig.brand.name}. Founded by Fayyaz Khan &amp; Abdul Jabbar. All rights reserved.
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

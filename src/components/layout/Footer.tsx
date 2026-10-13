import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Clock } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';
import { Logo } from '../common/Logo';

const CURRENT_YEAR = new Date().getFullYear();

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0A1628] text-white border-t border-[#1E293B] pt-16 pb-12 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-[#1E293B]">
          {/* Col 1 & 2: Brand & Founders */}
          <div className="lg:col-span-2 flex flex-col space-y-4">
            <Link to="/" className="inline-block">
              <Logo variant="full" theme="dark" iconSize={42} />
            </Link>
            <p className="text-sm text-slate-300 leading-relaxed max-w-sm">
              Founded by <strong>Fayyaz Khan</strong> (Founder) &amp; <strong>Abdul Jabbar</strong> (Co-Founder) in Orangi Town, Karachi. We engineer custom POS systems for all business types, complete PC setups, management systems, and workflow automation.
            </p>
            <div className="pt-2 flex flex-wrap gap-2 text-xs">
              <span className="px-3 py-1 rounded-md bg-[#1E293B] text-[#00C4FF] border border-[#334155] font-semibold">
                Founder: Fayyaz Khan
              </span>
              <span className="px-3 py-1 rounded-md bg-[#1E293B] text-[#22C55E] border border-[#334155] font-semibold">
                Co-Founder: Abdul Jabbar
              </span>
            </div>
          </div>

          {/* Col 3: Services */}
          <div>
            <h3 className="text-xs font-bold text-[#00C4FF] uppercase tracking-wider mb-4">
              Our Services
            </h3>
            <ul className="space-y-2.5 text-xs text-slate-300">
              {siteConfig.services.map((service) => (
                <li key={service.id}>
                  <Link
                    to={`/services#${service.id}`}
                    className="hover:text-white transition-colors hover:underline decoration-[#00B050] underline-offset-4"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Solutions */}
          <div>
            <h3 className="text-xs font-bold text-[#00C4FF] uppercase tracking-wider mb-4">
              Software Solutions
            </h3>
            <ul className="space-y-2.5 text-xs text-slate-300">
              {siteConfig.products.map((product) => (
                <li key={product.id}>
                  <Link
                    to={`/products/${product.slug}`}
                    className="hover:text-white transition-colors hover:underline decoration-[#00B050] underline-offset-4"
                  >
                    {product.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 5: Location & Direct Contacts */}
          <div>
            <h3 className="text-xs font-bold text-[#00C4FF] uppercase tracking-wider mb-4">
              Karachi Operations
            </h3>
            <div className="space-y-3 text-xs text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#00B050] shrink-0 mt-0.5" />
                <span>
                  Orangi Town, Karachi, Pakistan
                  <span className="block text-[11px] text-slate-400 mt-0.5">
                    (On-Site Client Visits &amp; Remote Operations)
                  </span>
                </span>
              </div>

              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-[#00B050] shrink-0 mt-0.5" />
                <span>
                  Mon–Thu &amp; Sat: 9:00 AM – 5:00 PM
                  <span className="block text-[11px] text-rose-400 font-semibold mt-0.5">
                    Friday &amp; Sunday: Off
                  </span>
                </span>
              </div>

              <div className="pt-2 border-t border-[#1E293B] space-y-2">
                <div className="flex items-center gap-1.5 font-medium text-white">
                  <Phone className="w-3.5 h-3.5 text-[#00B050]" />
                  <span>Call / WhatsApp:</span>
                  <a href={`tel:${siteConfig.contact.phoneClean}`} className="text-[#00C4FF] hover:underline font-bold">
                    {siteConfig.contact.phone}
                  </a>
                </div>
                <div className="text-[11px] text-slate-300 space-y-1">
                  <div>
                    <span className="text-slate-400">Abdul Jabbar:</span>{' '}
                    <a href="mailto:abduljabbarlala189@gmail.com" className="text-[#00C4FF] hover:underline">
                      abduljabbarlala189@gmail.com
                    </a>
                  </div>
                  <div>
                    <span className="text-slate-400">Fayyaz Khan:</span>{' '}
                    <a href="mailto:Fyyz2238@gmail.com" className="text-[#00C4FF] hover:underline">
                      Fyyz2238@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            &copy; {CURRENT_YEAR} {siteConfig.brand.name}. {siteConfig.brand.tagline}
          </p>
          <div className="flex items-center gap-6">
            <Link to="/about" className="hover:text-white transition-colors">
              About Us
            </Link>
            <Link to="/contact" className="hover:text-white transition-colors">
              Contact
            </Link>
            <Link to="/faq" className="hover:text-white transition-colors">
              FAQ
            </Link>
            <a
              href={siteConfig.contact.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="text-[#22C55E] hover:text-white font-semibold transition-colors"
            >
              WhatsApp Official
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

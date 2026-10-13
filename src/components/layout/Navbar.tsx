import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Phone, MessageSquare, Clock, MapPin, ChevronDown, Sparkles, ShoppingBag } from 'lucide-react';
import { Logo } from '../common/Logo';
import { Button } from '../common/Button';
import { siteConfig } from '../../config/siteConfig';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const navLinks = [
    { label: 'Home', to: '/' },
    { label: 'Products & POS', to: '/products' },
    { label: 'Portfolio', to: '/portfolio' },
    { label: 'About & Team', to: '/about' },
    { label: 'FAQ', to: '/faq' },
    { label: 'Contact Us', to: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full font-sans shadow-xs">
      {/* Top Founder & Timings Strip */}
      <div className="bg-[#002B66] text-white text-[11px] py-1.5 px-4 border-b border-[#003E9A]">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4 text-slate-200">
            <span className="flex items-center gap-1">
              <MapPin className="w-3 h-3 text-[#00C4FF]" />
              <span>Orangi Town, Karachi</span>
            </span>
            <span className="hidden sm:flex items-center gap-1 text-slate-300">
              <Clock className="w-3 h-3 text-[#00C4FF]" />
              <span>Mon–Thu &amp; Sat: 9:00 AM – 5:00 PM (Fri &amp; Sun Off)</span>
            </span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={`https://wa.me/${siteConfig.contact.phoneClean}`}
              target="_blank"
              rel="noreferrer"
              className="text-[#00C4FF] hover:text-white transition-colors flex items-center gap-1 font-semibold"
            >
              <MessageSquare className="w-3 h-3" />
              <span>WhatsApp: {siteConfig.contact.phone}</span>
            </a>
            <span className="text-[#0047B3]">|</span>
            <a
              href={`tel:${siteConfig.contact.phoneClean}`}
              className="text-[#22C55E] hover:text-white transition-colors hidden md:flex items-center gap-1 font-semibold"
            >
              <Phone className="w-3 h-3" />
              <span>Call: {siteConfig.contact.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar - Nanosoft Style Header with Mega Dropdown & Hire Pro CTA */}
      <div
        className={`bg-white transition-all duration-200 border-b ${
          isScrolled ? 'border-slate-200 shadow-md backdrop-blur-md bg-white/95' : 'border-slate-200'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Brand Logo */}
            <NavLink
              to="/"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0056D2] rounded-lg p-1 -ml-1"
              aria-label="FAYJEXTECH Home"
            >
              <Logo variant="full" theme="light" iconSize={40} />
            </NavLink>

            {/* Desktop Navigation Links with Mega Dropdown */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `px-3 py-2 text-sm font-semibold rounded-lg transition-all ${
                    isActive
                      ? 'text-[#0056D2] bg-[#EEF4FF] font-bold shadow-xs'
                      : 'text-[#334155] hover:text-[#0056D2] hover:bg-slate-50'
                  }`
                }
              >
                Home
              </NavLink>

              {/* Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setServicesDropdown(true)}
                onMouseLeave={() => setServicesDropdown(false)}
              >
                <NavLink
                  to="/services"
                  className={({ isActive }) =>
                    `px-3 py-2 text-sm font-semibold rounded-lg transition-all flex items-center gap-1 ${
                      isActive
                        ? 'text-[#0056D2] bg-[#EEF4FF] font-bold shadow-xs'
                        : 'text-[#334155] hover:text-[#0056D2] hover:bg-slate-50'
                    }`
                  }
                >
                  <span>Services</span>
                  <ChevronDown className="w-3.5 h-3.5" />
                </NavLink>

                {servicesDropdown && (
                  <div className="absolute top-full left-0 w-80 bg-white rounded-2xl shadow-2xl border border-slate-200 p-3 pt-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                    <div className="px-3 py-2 border-b border-slate-100 mb-1">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#0056D2]">
                        Software &amp; Counter Hardware
                      </span>
                    </div>
                    {siteConfig.services.map((s) => (
                      <Link
                        key={s.id}
                        to={`/services#${s.id}`}
                        onClick={() => setServicesDropdown(false)}
                        className="flex items-start gap-2.5 p-2.5 rounded-xl hover:bg-slate-50 transition-colors group"
                      >
                        <div className="w-7 h-7 rounded-lg bg-blue-50 text-[#0056D2] flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#0056D2] group-hover:text-white transition-colors">
                          <ShoppingBag className="w-3.5 h-3.5" />
                        </div>
                        <div>
                          <span className="text-xs font-bold text-[#0F172A] block group-hover:text-[#0056D2]">
                            {s.title}
                          </span>
                          <span className="text-[10px] text-slate-500 line-clamp-1">
                            {s.shortDescription}
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {navLinks.slice(1).map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    `px-3 py-2 text-sm font-semibold rounded-lg transition-all ${
                      isActive
                        ? 'text-[#0056D2] bg-[#EEF4FF] font-bold shadow-xs'
                        : 'text-[#334155] hover:text-[#0056D2] hover:bg-slate-50'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>

            {/* Action Buttons: Phone & "Hire a Pro" (Nanosoft style primary CTA) */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={`tel:${siteConfig.contact.phoneClean}`}
                className="inline-flex items-center gap-1.5 text-xs font-bold px-3.5 py-2.5 rounded-xl text-[#0056D2] bg-[#EEF4FF] hover:bg-[#DBEAFE] border border-[#BFDBFE] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#00B050]" />
                <span>Call: {siteConfig.contact.phone}</span>
              </a>

              {/* Nanosoft Style "Hire a Pro" Button */}
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#0056D2] to-[#00388F] text-white text-xs sm:text-sm font-bold shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/30 hover:scale-[1.02] transition-all"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#00C4FF]" />
                <span>Hire a Pro</span>
              </Link>
            </div>

            {/* Mobile Toggle */}
            <div className="flex lg:hidden items-center">
              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg text-[#0F172A] hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0056D2]"
                aria-expanded={isOpen}
                aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
              >
                {isOpen ? <X className="w-6 h-6 text-[#0056D2]" /> : <Menu className="w-6 h-6 text-[#0056D2]" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="fixed inset-0 top-[110px] z-40 bg-white lg:hidden flex flex-col justify-between overflow-y-auto px-6 py-6 border-t border-slate-200 shadow-xl">
          <nav className="flex flex-col space-y-1.5" aria-label="Mobile Navigation">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `px-4 py-3 text-base font-semibold rounded-xl transition-colors flex items-center justify-between ${
                    isActive
                      ? 'bg-[#EEF4FF] text-[#0056D2] font-bold'
                      : 'text-[#334155] hover:bg-slate-50'
                  }`
                }
              >
                <span>{link.label}</span>
                <span className="text-xs text-[#00B050] font-bold">→</span>
              </NavLink>
            ))}
          </nav>

          <div className="pt-6 border-t border-slate-200 mt-6 flex flex-col gap-3">
            <div className="bg-[#F8FAFC] p-3.5 rounded-xl border border-slate-200 text-xs space-y-2">
              <span className="font-bold text-[#0056D2] block">FAYJEXTECH Official:</span>
              <div className="flex justify-between items-center text-[#64748B]">
                <span>Helpline / Call:</span>
                <a href={`tel:${siteConfig.contact.phoneClean}`} className="font-bold text-[#0F172A]">
                  {siteConfig.contact.phone}
                </a>
              </div>
              <div className="flex justify-between items-center text-[#64748B]">
                <span>WhatsApp:</span>
                <a href={siteConfig.contact.whatsappUrl} target="_blank" rel="noreferrer" className="font-bold text-[#00B050]">
                  {siteConfig.contact.phone}
                </a>
              </div>
              <div className="border-t border-slate-200 pt-1.5 text-[11px] text-slate-500">
                <div>Abdul Jabbar: <a href="mailto:abduljabbarlala189@gmail.com" className="text-[#0056D2]">abduljabbarlala189@gmail.com</a></div>
                <div>Fayyaz Khan: <a href="mailto:Fyyz2238@gmail.com" className="text-[#0056D2]">Fyyz2238@gmail.com</a></div>
              </div>
            </div>

            <Button to="/contact" variant="primary" size="lg" className="w-full">
              Hire a Pro / Book Visit
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

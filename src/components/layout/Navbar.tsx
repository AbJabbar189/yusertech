import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Phone, MessageSquare, Clock, MapPin } from 'lucide-react';
import { Logo } from '../common/Logo';
import { Button } from '../common/Button';
import { siteConfig } from '../../config/siteConfig';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
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
    { label: 'Services', to: '/services' },
    { label: 'Products', to: '/products' },
    { label: 'Portfolio', to: '/portfolio' },
    { label: 'About & Team', to: '/about' },
    { label: 'FAQ', to: '/faq' },
    { label: 'Contact', to: '/contact' },
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
              <span>Mon–Thu & Sat: 9:00 AM – 5:00 PM (Fri & Sun Off)</span>
            </span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={`https://wa.me/${siteConfig.founders[1].phoneClean}`}
              target="_blank"
              rel="noreferrer"
              className="text-[#00C4FF] hover:text-white transition-colors flex items-center gap-1 font-medium"
            >
              <MessageSquare className="w-3 h-3" />
              <span>Abdul Jabbar: {siteConfig.founders[1].phone}</span>
            </a>
            <span className="text-[#0047B3]">|</span>
            <a
              href={`https://wa.me/${siteConfig.founders[0].phoneClean}`}
              target="_blank"
              rel="noreferrer"
              className="text-[#22C55E] hover:text-white transition-colors hidden md:flex items-center gap-1 font-medium"
            >
              <MessageSquare className="w-3 h-3" />
              <span>Fayyaz Khan: {siteConfig.founders[0].phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div
        className={`bg-white transition-all duration-200 border-b ${
          isScrolled ? 'border-slate-200 shadow-md' : 'border-slate-200'
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

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5" aria-label="Main Navigation">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    `px-3 py-2 text-sm font-semibold rounded-lg transition-all ${
                      isActive
                        ? 'text-[#0056D2] bg-[#EEF4FF] font-bold shadow-xs'
                        : 'text-[#475569] hover:text-[#0056D2] hover:bg-slate-50'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>

            {/* Action Buttons */}
            <div className="hidden lg:flex items-center gap-2.5">
              <a
                href={`tel:${siteConfig.founders[1].phoneClean}`}
                className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-2 rounded-lg text-[#0056D2] bg-[#EEF4FF] hover:bg-[#DBEAFE] border border-[#BFDBFE] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#00B050]" />
                <span>Call Us</span>
              </a>
              <Button to="/contact" variant="primary" size="md">
                Discuss Project
              </Button>
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
            <div className="bg-[#F8FAFC] p-3 rounded-xl border border-slate-200 text-xs space-y-1.5">
              <span className="font-bold text-[#0056D2] block">Direct Contact:</span>
              <div className="flex justify-between text-[#64748B]">
                <span>Abdul Jabbar:</span>
                <a href={`tel:${siteConfig.founders[1].phoneClean}`} className="font-semibold text-[#0F172A]">
                  {siteConfig.founders[1].phone}
                </a>
              </div>
              <div className="flex justify-between text-[#64748B]">
                <span>Fayyaz Khan:</span>
                <a href={`tel:${siteConfig.founders[0].phoneClean}`} className="font-semibold text-[#0F172A]">
                  {siteConfig.founders[0].phone}
                </a>
              </div>
            </div>

            <Button to="/contact" variant="primary" size="lg" className="w-full">
              Get Free Consultation
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

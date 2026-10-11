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
    <header className="sticky top-0 z-50 w-full font-sans">
      {/* Top Founder & Timings Strip */}
      <div className="bg-[#123B2A] text-white text-[11px] py-1.5 px-4 border-b border-[#1E4D38]">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4 text-[#E2EAE5]">
            <span className="flex items-center gap-1">
              <MapPin className="w-3 h-3 text-[#C59E3F]" />
              <span>Orangi Town, Karachi</span>
            </span>
            <span className="hidden sm:flex items-center gap-1 text-[#E2EAE5]/80">
              <Clock className="w-3 h-3 text-[#C59E3F]" />
              <span>Mon–Thu & Sat: 9:00 AM – 5:00 PM (Fri & Sun Off)</span>
            </span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={`https://wa.me/${siteConfig.founders[1].phoneClean}`}
              target="_blank"
              rel="noreferrer"
              className="text-[#D4B35E] hover:text-white transition-colors flex items-center gap-1 font-medium"
            >
              <MessageSquare className="w-3 h-3" />
              <span>Abdul Jabbar: {siteConfig.founders[1].phone}</span>
            </a>
            <span className="text-[#1E4D38]">|</span>
            <a
              href={`https://wa.me/${siteConfig.founders[0].phoneClean}`}
              target="_blank"
              rel="noreferrer"
              className="text-[#D4B35E] hover:text-white transition-colors hidden md:flex items-center gap-1 font-medium"
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
          isScrolled ? 'border-[#E2E8E4] shadow-xs' : 'border-[#E2E8E4]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Brand Logo */}
            <NavLink
              to="/"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C59E3F] rounded-lg p-1 -ml-1"
              aria-label="YUSERTECH Home"
            >
              <Logo variant="full" theme="light" iconSize={36} />
            </NavLink>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5" aria-label="Main Navigation">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    `px-3 py-2 text-sm font-semibold rounded-lg transition-colors ${
                      isActive
                        ? 'text-[#123B2A] bg-[#EBF3EE] font-bold'
                        : 'text-[#445049] hover:text-[#123B2A] hover:bg-[#F0F4F2]'
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
                className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-2 rounded-lg text-[#123B2A] bg-[#EBF3EE] hover:bg-[#DCE9E2] border border-[#D0E0D7] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#C59E3F]" />
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
                className="p-2 rounded-lg text-[#1A231F] hover:bg-[#F0F4F2] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C59E3F]"
                aria-expanded={isOpen}
                aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="fixed inset-0 top-[110px] z-40 bg-white lg:hidden flex flex-col justify-between overflow-y-auto px-6 py-6 border-t border-[#E2E8E4] shadow-xl">
          <nav className="flex flex-col space-y-1.5" aria-label="Mobile Navigation">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `px-4 py-3 text-base font-semibold rounded-xl transition-colors flex items-center justify-between ${
                    isActive
                      ? 'bg-[#EBF3EE] text-[#123B2A] font-bold'
                      : 'text-[#2C3832] hover:bg-[#F4F7F5]'
                  }`
                }
              >
                <span>{link.label}</span>
                <span className="text-xs text-[#C59E3F]">→</span>
              </NavLink>
            ))}
          </nav>

          <div className="pt-6 border-t border-[#E2E8E4] mt-6 flex flex-col gap-3">
            <div className="bg-[#F8FAF9] p-3 rounded-xl border border-[#E2E8E4] text-xs space-y-1.5">
              <span className="font-bold text-[#123B2A] block">Direct Contact:</span>
              <div className="flex justify-between text-[#5C6760]">
                <span>Abdul Jabbar:</span>
                <a href={`tel:${siteConfig.founders[1].phoneClean}`} className="font-semibold text-[#123B2A]">
                  {siteConfig.founders[1].phone}
                </a>
              </div>
              <div className="flex justify-between text-[#5C6760]">
                <span>Fayyaz Khan:</span>
                <a href={`tel:${siteConfig.founders[0].phoneClean}`} className="font-semibold text-[#123B2A]">
                  {siteConfig.founders[0].phone}
                </a>
              </div>
            </div>

            <Button
              to="/contact"
              onClick={() => setIsOpen(false)}
              variant="primary"
              size="lg"
              className="w-full justify-center"
            >
              Discuss Your Project
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

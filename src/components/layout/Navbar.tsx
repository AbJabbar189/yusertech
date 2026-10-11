import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { Logo } from '../common/Logo';
import { Button } from '../common/Button';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect for subtle shadow
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
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
    { label: 'About', to: '/about' },
    { label: 'FAQ', to: '/faq' },
    { label: 'Contact', to: '/contact' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 ${
        isScrolled
          ? 'bg-[#123B2A] text-white shadow-md border-b border-[#224E3A]'
          : 'bg-[#123B2A] text-white border-b border-[#224E3A]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <NavLink
            to="/"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D6B46A] rounded-lg p-1 -ml-1"
            aria-label="YUSERTECH Home"
          >
            <Logo variant="full" theme="dark" iconSize={36} />
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                    isActive
                      ? 'text-[#D6B46A] bg-[#164632] font-semibold'
                      : 'text-[#EFECE3]/90 hover:text-white hover:bg-[#164632]/60'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Header Action Button */}
          <div className="hidden lg:flex items-center gap-3">
            <Button
              to="/contact"
              variant="gold"
              size="md"
              rightIcon={<ArrowUpRight className="w-4 h-4" />}
            >
              Discuss Your Project
            </Button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex lg:hidden items-center">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-[#EFECE3] hover:text-white hover:bg-[#164632] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D6B46A]"
              aria-expanded={isOpen}
              aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay / Drawer */}
      {isOpen && (
        <div className="fixed inset-0 top-20 z-40 bg-[#123B2A] lg:hidden flex flex-col justify-between overflow-y-auto px-6 py-8 border-t border-[#224E3A]">
          <nav className="flex flex-col space-y-2" aria-label="Mobile Navigation">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `px-4 py-3 text-lg font-medium rounded-lg transition-colors flex items-center justify-between ${
                    isActive
                      ? 'bg-[#164632] text-[#D6B46A] font-semibold'
                      : 'text-[#EFECE3] hover:bg-[#164632]/70 hover:text-white'
                  }`
                }
              >
                <span>{link.label}</span>
                <span className="text-xs text-[#D6B46A] font-normal">→</span>
              </NavLink>
            ))}
          </nav>

          <div className="pt-8 border-t border-[#224E3A] mt-6 flex flex-col gap-3">
            <Button
              to="/contact"
              onClick={() => setIsOpen(false)}
              variant="gold"
              size="lg"
              className="w-full justify-center"
              rightIcon={<ArrowUpRight className="w-4 h-4" />}
            >
              Discuss Your Project
            </Button>
            <p className="text-xs text-center text-[#EFECE3]/60 pt-2">
              Technology That Works for Your Business.
            </p>
          </div>
        </div>
      )}
    </header>
  );
};

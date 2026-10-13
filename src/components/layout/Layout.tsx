import React from 'react';
import { Outlet } from 'react-router-dom';
import { MessageSquare, Phone } from 'lucide-react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { ScrollToTop } from '../common/ScrollToTop';
import { siteConfig } from '../../config/siteConfig';

export const Layout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-[#0B132B] selection:bg-[#0056D2] selection:text-white">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />

      {/* Mobile Floating Quick Contact Buttons (< 640px) */}
      <div className="fixed bottom-4 end-4 z-40 sm:hidden flex flex-col gap-2">
        <a
          href={siteConfig.contact.whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="w-12 h-12 rounded-full bg-[#00B050] hover:bg-[#009644] text-white flex items-center justify-center shadow-xl shadow-green-700/30 active:scale-90 transition-all border-2 border-white"
          aria-label="WhatsApp Helpline 0348 9133738"
          title="WhatsApp 0348 9133738"
        >
          <MessageSquare className="w-6 h-6" />
        </a>
        <a
          href={`tel:${siteConfig.contact.phoneClean}`}
          className="w-12 h-12 rounded-full bg-[#0056D2] hover:bg-[#00388F] text-white flex items-center justify-center shadow-xl shadow-blue-700/30 active:scale-90 transition-all border-2 border-white"
          aria-label="Call Helpline 0348 9133738"
          title="Call 0348 9133738"
        >
          <Phone className="w-5 h-5" />
        </a>
      </div>
    </div>
  );
};

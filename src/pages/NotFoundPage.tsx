import React from 'react';
import { Home } from 'lucide-react';
import { Button } from '../components/common/Button';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 py-20 bg-[#F7F5EF]">
      <div className="w-16 h-16 rounded-2xl bg-[#FAF3E0] border border-[#E8D49F] flex items-center justify-center font-bold text-[#123B2A] text-2xl mb-6 font-mono">
        404
      </div>
      <h1 className="text-3xl sm:text-4xl font-extrabold text-[#202722] mb-3">
        Page Not Located
      </h1>
      <p className="text-sm sm:text-base text-[#6B746E] max-w-md mx-auto mb-8 leading-relaxed">
        The URL you requested does not correspond to an active page on the YUSERTECH portal.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <Button to="/" variant="primary" leftIcon={<Home className="w-4 h-4" />}>
          Return to Homepage
        </Button>
        <Button to="/services" variant="secondary">
          Explore Services
        </Button>
      </div>
    </div>
  );
};

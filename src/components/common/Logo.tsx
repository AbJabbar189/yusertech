import React from 'react';
import { siteConfig } from '../../config/siteConfig';

interface LogoProps {
  variant?: 'full' | 'icon' | 'mark-only';
  theme?: 'dark' | 'light' | 'auto';
  className?: string;
  iconSize?: number;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'full',
  theme = 'auto',
  className = '',
  iconSize = 38,
}) => {
  const isDark = theme === 'dark';
  const textColor = isDark ? 'text-white' : 'text-[#0F172A]';
  const tagColor = isDark ? 'text-[#00C4FF]' : 'text-[#0056D2]';

  return (
    <div dir="ltr" className={`inline-flex items-center gap-2.5 select-none ${className}`}>
      {/* Brand Logo Symbol */}
      <div
        className="relative shrink-0 overflow-hidden rounded-lg transition-transform duration-300 hover:scale-105"
        style={{ width: iconSize, height: iconSize }}
      >
        <img
          src="./logo.png"
          alt="FAYJEXTECH"
          className="w-full h-full object-contain"
          onError={(e) => {
            // Fallback if image fails to load
            (e.currentTarget as HTMLImageElement).src = './logo.jpg';
          }}
        />
      </div>

      {/* Wordmark & Tagline */}
      {variant !== 'mark-only' && (
        <div className="flex flex-col leading-none text-left">
          <div className="flex items-center">
            <span className={`font-extrabold tracking-tight text-xl ${textColor} font-sans`}>
              FAYJEX
            </span>
            <span className="font-extrabold tracking-tight text-xl text-[#00B050] font-sans">
              TECH
            </span>
          </div>
          {variant === 'full' && (
            <span className={`text-[10px] tracking-wider uppercase font-semibold mt-0.5 ${tagColor} font-sans`}>
              {siteConfig.brand.tagline}
            </span>
          )}
        </div>
      )}
    </div>
  );
};

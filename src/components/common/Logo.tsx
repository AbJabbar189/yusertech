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
  iconSize = 34,
}) => {
  // Theme dictates text and accent colors
  const isLight = theme === 'light'; // Light background (Dark text)
  const isDark = theme === 'dark';   // Dark background (Light text)

  const textColor = isDark ? 'text-white' : isLight ? 'text-[#202722]' : 'text-[#202722]';
  const subTextColor = isDark ? 'text-[#D6B46A]' : 'text-[#6B746E]';

  return (
    <div className={`inline-flex items-center gap-2.5 select-none ${className}`}>
      {/* Geometric Symbol Icon */}
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 transition-transform duration-200 hover:scale-105"
        aria-hidden="true"
      >
        <rect width="48" height="48" rx="10" fill="#123B2A" />
        {/* Geometric connected network node forming 'Y' and growth axis */}
        <path
          d="M13 13L24 24L35 13"
          stroke="#D6B46A"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M24 24V36"
          stroke="#FFFFFF"
          strokeWidth="4"
          strokeLinecap="round"
        />
        {/* Connection nodes */}
        <circle cx="24" cy="24" r="3.2" fill="#D6B46A" />
        <circle cx="13" cy="13" r="2.8" fill="#FFFFFF" />
        <circle cx="35" cy="13" r="2.8" fill="#FFFFFF" />
        <circle cx="24" cy="36" r="2.8" fill="#D6B46A" />
      </svg>

      {/* Wordmark */}
      {variant !== 'mark-only' && (
        <div className="flex flex-col leading-none">
          <span className={`font-bold tracking-tight text-xl ${textColor} font-sans`}>
            {siteConfig.brand.name}
          </span>
          {variant === 'full' && (
            <span className={`text-[10px] tracking-wider uppercase font-medium mt-0.5 ${subTextColor}`}>
              Software & Web
            </span>
          )}
        </div>
      )}
    </div>
  );
};

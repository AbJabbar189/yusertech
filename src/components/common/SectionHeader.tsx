import React from 'react';

interface SectionHeaderProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  theme?: 'light' | 'dark';
  className?: string;
  action?: React.ReactNode;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  title,
  subtitle,
  align = 'center',
  theme = 'light',
  className = '',
  action,
}) => {
  const alignClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center mx-auto',
    right: 'text-right items-end ml-auto',
  };

  const isDark = theme === 'dark';

  return (
    <div className={`flex flex-col max-w-3xl mb-12 sm:mb-16 ${alignClasses[align]} ${className}`}>
      {badge && (
        <span
          className={`inline-block text-xs font-bold tracking-widest uppercase mb-3 px-3.5 py-1.5 rounded-full ${
            isDark
              ? 'bg-[#1E3A8A]/50 text-[#00C4FF] border border-[#2563EB]/40'
              : 'bg-[#EEF4FF] text-[#0056D2] border border-[#BFDBFE]'
          }`}
        >
          {badge}
        </span>
      )}

      <h2
        className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight ${
          isDark ? 'text-white' : 'text-[#0F172A]'
        }`}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className={`mt-4 text-base sm:text-lg leading-relaxed ${
            isDark ? 'text-slate-300' : 'text-[#64748B]'
          }`}
        >
          {subtitle}
        </p>
      )}

      {action && <div className="mt-6">{action}</div>}
    </div>
  );
};

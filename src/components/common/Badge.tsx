import React from 'react';

export interface BadgeProps {
  children: React.ReactNode;
  variant?:
    | 'Available'
    | 'In Development'
    | 'In Active Development'
    | 'Coming Soon'
    | 'Prototype Ready'
    | 'Production Deployed'
    | 'primary'
    | 'accent'
    | 'forest'
    | 'gold'
    | 'neutral';
  size?: 'sm' | 'md';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'neutral',
  size = 'md',
  className = '',
}) => {
  const sizeClasses = {
    sm: 'px-2.5 py-0.5 text-[11px] font-semibold tracking-wide',
    md: 'px-3 py-1 text-xs font-semibold tracking-wide',
  };

  const variantClasses = {
    Available: 'bg-emerald-50 text-[#00873D] border border-emerald-200',
    'In Development': 'bg-blue-50 text-[#0056D2] border border-blue-200',
    'In Active Development': 'bg-blue-50 text-[#0056D2] border border-blue-200',
    'Coming Soon': 'bg-slate-100 text-slate-700 border border-slate-200',
    'Prototype Ready': 'bg-blue-50 text-[#0056D2] border border-blue-200',
    'Production Deployed': 'bg-emerald-50 text-[#00873D] border border-emerald-200',
    primary: 'bg-[#0056D2] text-white border border-[#0056D2]',
    accent: 'bg-[#00B050] text-white border border-[#00B050]',
    forest: 'bg-[#0056D2] text-white border border-[#0056D2]',
    gold: 'bg-emerald-50 text-[#00873D] border border-emerald-200',
    neutral: 'bg-slate-100 text-slate-700 border border-slate-200',
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full uppercase tracking-wider font-semibold ${sizeClasses[size]} ${variantClasses[variant] || variantClasses.neutral} ${className}`}
    >
      <span
        className={`w-1.5 h-1.5 rounded-full shrink-0 ${
          variant === 'Available' || variant === 'Production Deployed' || variant === 'accent'
            ? 'bg-[#00B050]'
            : variant === 'In Development' || variant === 'In Active Development' || variant === 'primary'
            ? 'bg-[#0056D2]'
            : 'bg-slate-400'
        }`}
      />
      {children}
    </span>
  );
};

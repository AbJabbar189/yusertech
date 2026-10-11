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
    sm: 'px-2 py-0.5 text-[11px] font-medium tracking-wide',
    md: 'px-2.5 py-1 text-xs font-medium tracking-wide',
  };

  const variantClasses = {
    Available: 'bg-emerald-50 text-emerald-800 border border-emerald-200',
    'In Development': 'bg-[#FAF3E0] text-[#8C6D1F] border border-[#E8D49F]',
    'In Active Development': 'bg-[#FAF3E0] text-[#8C6D1F] border border-[#E8D49F]',
    'Coming Soon': 'bg-stone-100 text-stone-700 border border-stone-200',
    'Prototype Ready': 'bg-[#EBF2EE] text-[#123B2A] border border-[#B8D3C4]',
    'Production Deployed': 'bg-emerald-50 text-emerald-800 border border-emerald-200',
    forest: 'bg-[#123B2A] text-white border border-[#123B2A]',
    gold: 'bg-[#FAF3E0] text-[#7A5B12] border border-[#D6B46A]',
    neutral: 'bg-[#EFECE3] text-[#202722] border border-[#E3E0D5]',
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full uppercase tracking-wider font-semibold ${sizeClasses[size]} ${variantClasses[variant] || variantClasses.neutral} ${className}`}
    >
      <span
        className={`w-1.5 h-1.5 rounded-full shrink-0 ${
          variant === 'Available' || variant === 'Production Deployed'
            ? 'bg-emerald-600'
            : variant === 'In Development' || variant === 'In Active Development' || variant === 'gold'
            ? 'bg-[#D6B46A]'
            : variant === 'forest'
            ? 'bg-[#D6B46A]'
            : 'bg-[#6B746E]'
        }`}
      />
      {children}
    </span>
  );
};

import React from 'react';
import { Link } from 'react-router-dom';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent' | 'gold' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  to?: string;
  href?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  isLoading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  to,
  href,
  leftIcon,
  rightIcon,
  isLoading = false,
  className = '',
  disabled,
  ...props
}) => {
  const sizeClasses = {
    sm: 'px-3.5 py-1.5 text-xs font-semibold gap-1.5 rounded-lg',
    md: 'px-5 py-2.5 text-sm font-bold gap-2 rounded-xl',
    lg: 'px-7 py-3.5 text-base font-bold gap-2.5 rounded-xl',
  };

  const variantClasses = {
    // Primary: FAYJEXTECH Royal Blue with subtle glow
    primary:
      'bg-[#0056D2] text-white hover:bg-[#0047B3] active:bg-[#00388F] border border-[#0056D2] shadow-sm hover:shadow-md hover:shadow-blue-500/20 focus-visible:ring-2 focus-visible:ring-[#00B050] transition-all transform hover:-translate-y-0.5',
    // Accent: Emerald Green from logo
    accent:
      'bg-[#00B050] text-white hover:bg-[#009644] active:bg-[#007D38] border border-[#00B050] shadow-sm hover:shadow-md hover:shadow-green-500/20 focus-visible:ring-2 focus-visible:ring-[#0056D2] transition-all transform hover:-translate-y-0.5',
    // Gold/Yellow fallback if needed
    gold:
      'bg-[#00B050] text-white hover:bg-[#009644] active:bg-[#007D38] border border-[#00B050] font-bold shadow-sm focus-visible:ring-2 focus-visible:ring-[#0056D2]',
    // Secondary: Clean white card style
    secondary:
      'bg-white text-[#0F172A] hover:bg-[#F8FAFC] active:bg-[#F1F5F9] border border-[#E2E8F0] shadow-xs focus-visible:ring-2 focus-visible:ring-[#0056D2] transition-all transform hover:-translate-y-0.5',
    // Outline: Royal Blue outline
    outline:
      'bg-transparent text-[#0056D2] hover:bg-[#0056D2]/5 active:bg-[#0056D2]/10 border border-[#0056D2] focus-visible:ring-2 focus-visible:ring-[#0056D2] transition-all',
    // Ghost: Minimal
    ghost:
      'bg-transparent text-[#0F172A] hover:bg-slate-100 active:bg-slate-200 focus-visible:ring-2 focus-visible:ring-[#0056D2]',
  };

  const baseClasses = `inline-flex items-center justify-center transition-all duration-200 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed select-none ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  const content = (
    <>
      {isLoading ? (
        <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin shrink-0" />
      ) : (
        leftIcon && <span className="shrink-0">{leftIcon}</span>
      )}
      <span>{children}</span>
      {rightIcon && !isLoading && <span className="shrink-0">{rightIcon}</span>}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={baseClasses}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={baseClasses} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return (
    <button type="button" className={baseClasses} disabled={disabled || isLoading} {...props}>
      {content}
    </button>
  );
};

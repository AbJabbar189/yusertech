import React from 'react';
import { Link } from 'react-router-dom';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'gold' | 'outline' | 'ghost';
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
    sm: 'px-3 py-1.5 text-xs font-medium gap-1.5 rounded-md',
    md: 'px-4 py-2 text-sm font-semibold gap-2 rounded-lg',
    lg: 'px-6 py-3 text-base font-semibold gap-2.5 rounded-lg',
  };

  const variantClasses = {
    // Primary: Forest Green background, white text, subtle hover lift
    primary:
      'bg-[#123B2A] text-white hover:bg-[#0D2B1F] active:bg-[#081F15] border border-[#123B2A] shadow-xs focus-visible:ring-2 focus-visible:ring-[#D6B46A]',
    // Gold: Warm Gold background, dark text
    gold:
      'bg-[#D6B46A] text-[#123B2A] hover:bg-[#C29E52] active:bg-[#B38F44] border border-[#D6B46A] font-semibold shadow-xs focus-visible:ring-2 focus-visible:ring-[#123B2A]',
    // Secondary: Light off-white surface with border
    secondary:
      'bg-white text-[#202722] hover:bg-[#F7F5EF] active:bg-[#EFECE3] border border-[#E3E0D5] shadow-xs focus-visible:ring-2 focus-visible:ring-[#123B2A]',
    // Outline: Transparent background with Forest green border
    outline:
      'bg-transparent text-[#123B2A] hover:bg-[#123B2A]/5 active:bg-[#123B2A]/10 border border-[#123B2A] focus-visible:ring-2 focus-visible:ring-[#123B2A]',
    // Ghost: Minimal button
    ghost:
      'bg-transparent text-[#202722] hover:bg-[#123B2A]/5 active:bg-[#123B2A]/10 focus-visible:ring-2 focus-visible:ring-[#123B2A]',
  };

  const baseClasses = `inline-flex items-center justify-center transition-all duration-150 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed select-none ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  const content = (
    <>
      {isLoading ? (
        <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin shrink-0" />
      ) : (
        leftIcon && <span className="shrink-0">{leftIcon}</span>
      )}
      <span>{children}</span>
      {!isLoading && rightIcon && <span className="shrink-0">{rightIcon}</span>}
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
    <button className={baseClasses} disabled={disabled || isLoading} {...props}>
      {content}
    </button>
  );
};

'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface GlassButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  href?: string;
  type?: 'button' | 'submit';
}

export default function GlassButton({
  children,
  className,
  variant = 'primary',
  size = 'md',
  onClick,
  href,
  type = 'button',
}: GlassButtonProps) {
  const baseStyles = cn(
    "relative inline-flex items-center justify-center",
    "font-medium transition-all duration-300",
    "rounded-xl backdrop-blur-md",
    "border border-white/30",
    "overflow-hidden group"
  );

  const variants = {
    primary: "bg-gradient-to-r from-primary-green to-primary-blue text-white hover:shadow-lg hover:shadow-primary-green/30",
    secondary: "bg-white/20 text-gray-800 dark:text-white hover:bg-white/30",
    outline: "bg-transparent border-2 border-primary-green text-primary-green hover:bg-primary-green hover:text-white",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const Component = href ? motion.a : motion.button;

  return (
    <Component
      href={href}
      onClick={onClick}
      type={href ? undefined : type}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
    >
      <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </Component>
  );
}

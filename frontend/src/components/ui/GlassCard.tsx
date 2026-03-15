'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
}

export default function GlassCard({ 
  children, 
  className, 
  hover = true,
  glow = false 
}: GlassCardProps) {
  return (
    <motion.div
      whileHover={hover ? { scale: 1.02, y: -5 } : {}}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={cn(
        "relative overflow-hidden rounded-2xl",
        "bg-white/10 dark:bg-black/20",
        "backdrop-blur-xl",
        "border border-white/20 dark:border-white/10",
        "shadow-xl shadow-black/5",
        hover && "cursor-pointer",
        glow && "hover:shadow-primary-green/20 hover:shadow-2xl",
        className
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent dark:from-white/5 pointer-events-none" />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}

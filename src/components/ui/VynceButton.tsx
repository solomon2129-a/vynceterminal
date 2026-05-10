'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface VynceButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  className?: string;
}

export const VynceButton = ({
  children,
  href,
  onClick,
  variant = 'primary',
  className,
}: VynceButtonProps) => {
  const baseStyles = "text-[9px] font-mono tracking-[0.3em] uppercase py-1.5 transition-all duration-700 relative group flex items-center";
  
  const variants = {
    primary: "text-ash/60 hover:text-white",
    secondary: "text-dust/20 hover:text-ash/60",
  };

  const content = (
    <span className="flex items-center gap-5">
      <span className="relative z-10 group-hover:tracking-[0.6em] transition-all duration-700">{children}</span>
      <motion.div 
        className="w-8 h-[0.5px] bg-crimson/20 group-hover:w-14 group-hover:bg-crimson transition-all duration-700"
      />
    </span>
  );

  if (href) {
    return (
      <Link href={href} className={cn(baseStyles, variants[variant], className)}>
        {content}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={cn(baseStyles, variants[variant], className)}>
      {content}
    </button>
  );
};

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
  const baseStyles = "text-xs-technical py-2 transition-all duration-500 relative group";
  
  const variants = {
    primary: "text-ash hover:text-ice",
    secondary: "text-dust/40 hover:text-ash",
  };

  const content = (
    <span className="flex items-center gap-6">
      <span className="relative z-10 group-hover:tracking-[0.5em] transition-all duration-700">{children}</span>
      <motion.div 
        className="w-12 h-[1px] bg-ice/40 group-hover:w-20 group-hover:bg-ice transition-all duration-700"
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

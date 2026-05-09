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
    primary: "text-ash hover:text-pulse",
    secondary: "text-dust/40 hover:text-ash",
  };

  const content = (
    <span className="flex items-center gap-4">
      <span className="relative z-10">{children}</span>
      <motion.div 
        className="w-8 h-[1px] bg-current opacity-20 group-hover:w-12 group-hover:opacity-100 transition-all duration-500"
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

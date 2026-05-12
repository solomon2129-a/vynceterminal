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
  const baseStyles = "terminal-text-sm font-bold uppercase py-4 px-10 transition-all duration-100 relative group flex items-center justify-center border";
  
  const variants = {
    primary: "bg-white text-black border-white hover:bg-black hover:text-white",
    secondary: "bg-transparent text-white border-terminal-border hover:border-white",
  };

  const content = (
    <span className="relative z-10 flex items-center gap-3">
      {'>'} {children}
      <span className="w-1.5 h-1.5 bg-current animate-pulse" />
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

'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const navItems = [
  { name: '00_HOME', path: '/' },
  { name: '01_LAB', path: '/lab' },
  { name: '02_ARCHIVE', path: '/archive' },
  { name: '03_PROCESS', path: '/bts' },
  { name: '04_CONNECTION', path: '/contact' },
];

export const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] px-6 md:px-12 py-6 md:py-10 pointer-events-none">
      <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-8">
        <Link href="/" className="pointer-events-auto group">
          <div className="flex flex-col">
            <span className="text-pulse font-bold tracking-[0.5em] text-xs md:text-sm group-hover:opacity-80 transition-opacity">
              VYNCE
            </span>
            <span className="text-[8px] md:text-[9px] font-mono text-dust/40 tracking-[0.2em] mt-1">
              SYS_ID: 0x82f_ARC
            </span>
          </div>
        </Link>
        
        <div className="flex flex-wrap gap-x-8 md:gap-x-12 gap-y-3 pointer-events-auto">
          {navItems.map((item) => {
            const isActive = pathname === item.path;
            return (
              <Link
                key={item.path}
                href={item.path}
                className={cn(
                  "text-[9px] md:text-xs-technical transition-all duration-500 relative",
                  isActive ? "text-ash" : "text-dust/40 hover:text-ash"
                )}
              >
                {item.name}
                {isActive && (
                  <motion.div
                    layoutId="nav-dot"
                    className="absolute -right-2 md:-right-3 top-1/2 -translate-y-1/2 w-[2px] h-[2px] bg-pulse rounded-full"
                  />
                )}
              </Link>
            );
          })}
        </div>

        <div className="hidden lg:block">
          <div className="flex items-center gap-4 text-[9px] font-mono text-dust/20 uppercase tracking-[0.3em]">
            <span>STABLE_SIGNAL</span>
            <div className="w-1 h-1 rounded-full bg-pulse animate-pulse" />
          </div>
        </div>
      </div>
    </nav>
  );
};

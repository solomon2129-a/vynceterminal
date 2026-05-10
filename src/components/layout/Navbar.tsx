'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Activity } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const navItems = [
  { name: '00_HOME', path: '/', id: 'HOME' },
  { name: '01_LAB', path: '/lab', id: 'LAB' },
  { name: '02_ARCHIVE', path: '/archive', id: 'ARCH' },
  { name: '03_PROCESS', path: '/bts', id: 'PROC' },
  { name: '04_CONNECTION', path: '/contact', id: 'CONN' },
];

export const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [time, setTime] = useState('');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    
    const updateTime = () => {
      const now = new Date();
      setTime(now.toISOString().split('T')[1].split('.')[0] + 'Z');
    };
    const timer = setInterval(updateTime, 1000);
    updateTime();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(timer);
    };
  }, []);

  // Close mobile menu on path change
  useEffect(() => setIsOpen(false), [pathname]);

  return (
    <>
      <nav className={cn(
        "fixed top-0 left-0 w-full z-[100] transition-all duration-700 pointer-events-none px-6 md:px-12",
        scrolled ? "py-4 md:py-6" : "py-8 md:py-10"
      )}>
        {/* Subtle Background for Scrolled State */}
        <div className={cn(
          "absolute inset-0 bg-abyss/40 backdrop-blur-md border-b border-matte/10 transition-opacity duration-700",
          scrolled ? "opacity-100" : "opacity-0"
        )} />

        <div className="max-w-[1600px] mx-auto flex justify-between items-center relative z-10">
          
          {/* Logo / System ID */}
          <Link href="/" className="pointer-events-auto group">
            <div className="flex flex-col">
              <span className="text-ice font-bold tracking-[0.5em] text-xs md:text-sm group-hover:opacity-80 transition-opacity">
                VYNCE
              </span>
              <span className="text-[8px] md:text-[9px] font-mono text-dust/30 tracking-[0.2em] mt-1 uppercase">
                NODE_ID: 0x82F_ARC
              </span>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-x-16 pointer-events-auto">
            {navItems.map((item) => {
              const isActive = pathname === item.path;
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  className={cn(
                    "text-xs-technical transition-all duration-700 relative group",
                    isActive ? "text-ice" : "text-dust/40 hover:text-ash"
                  )}
                >
                  <span className="opacity-20 mr-2 group-hover:opacity-40 transition-opacity">{item.name.split('_')[0]}</span>
                  <span className="group-hover:tracking-widest transition-all duration-700">{item.name.split('_')[1]}</span>
                  {isActive && (
                    <motion.div
                      layoutId="nav-dot"
                      className="absolute -right-4 top-1/2 -translate-y-1/2 w-[3px] h-[3px] bg-ice shadow-[0_0_8px_rgba(148,163,184,0.8)]"
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Technical Telemetry (Desktop) */}
          <div className="hidden lg:flex items-center gap-12 pointer-events-auto">
            <div className="flex flex-col items-end">
              <span className="text-[8px] font-mono text-dust/20 tracking-[0.3em] uppercase">SYNC_EPOCH</span>
              <span className="text-[9px] font-mono text-dust/60 tracking-widest">{time}</span>
            </div>
            <div className="flex items-center gap-4 border-l border-white/5 pl-10">
              <div className="flex flex-col items-end">
                <span className="text-[8px] font-mono text-dust/20 tracking-[0.3em] uppercase">SIGNAL_STRENGTH</span>
                <div className="flex gap-1 mt-1 h-3 items-end">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="w-[2px] bg-ice/40"
                      animate={{ height: [4, 12, 6, 16, 8, 10, 4][i % 7] }}
                      transition={{ 
                        duration: 1.2 + (i * 0.2), 
                        repeat: Infinity, 
                        ease: "easeInOut",
                        repeatType: "reverse"
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Menu Trigger */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden pointer-events-auto p-2 text-ash hover:text-ice transition-colors relative z-[110]"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Terminal Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 bg-abyss z-[90] md:hidden p-12 flex flex-col justify-center gap-16"
          >
            <div className="absolute top-12 left-12 flex items-center gap-4 text-ice/20 text-[9px] font-mono tracking-[0.4em]">
              <Activity className="w-4 h-4 animate-pulse" />
              <span>TERMINAL_ACTIVE // ENCRYPTED_LINK</span>
            </div>

            <div className="flex flex-col gap-10">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 + 0.4 }}
                >
                  <Link
                    href={item.path}
                    className={cn(
                      "text-5xl font-bold tracking-[0.1em] transition-all duration-700 uppercase",
                      pathname === item.path ? "text-ice" : "text-ash/20"
                    )}
                  >
                    {item.id}
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="mt-24 pt-12 border-t border-matte/20">
              <div className="grid grid-cols-2 gap-8 text-[9px] font-mono text-dust/30 uppercase tracking-[0.2em]">
                <div className="space-y-2">
                  <p>SYS_ST: ACTIVE</p>
                  <p>LNC: 0.42ms</p>
                </div>
                <div className="space-y-2 text-right">
                  <p>TIME: {time}</p>
                  <p>ID: 0x82F</p>
                </div>
              </div>
            </div>

            {/* Background Atmosphere */}
            <div className="absolute bottom-0 right-0 p-12 opacity-5 pointer-events-none">
              <span className="text-[120px] font-bold text-ash tracking-tighter">VYN</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

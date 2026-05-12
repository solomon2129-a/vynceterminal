'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

import { useSession } from '@/context/SessionContext';

const navItems = [
  { name: 'HOME', path: '/', id: '00' },
  { name: 'LAB', path: '/lab', id: '01' },
  { name: 'ARCHIVE', path: '/archive', id: '02' },
  { name: 'PROCESS', path: '/bts', id: '03' },
  { name: 'CONTACT', path: '/contact', id: '04' },
];

export const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [time, setTime] = useState('');
  const { sessionId } = useSession();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
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

  useEffect(() => setIsOpen(false), [pathname]);

  return (
    <>
      <nav className={cn(
        "fixed top-4 md:top-8 left-4 md:left-8 right-4 md:right-8 z-[100] pointer-events-none transition-all duration-300",
        scrolled ? "bg-black border-b border-terminal-border" : "bg-transparent"
      )}>
        <div className="flex justify-between items-center py-4 px-4 md:px-8 relative z-10 border border-terminal-border bg-black/80 backdrop-blur-sm">
          
          <Link href="/" className="pointer-events-auto group">
            <div className="flex items-center gap-4">
              <span className="text-white font-bold tracking-[0.3em] text-base md:text-lg lowercase">
                vynce
              </span>
              <span className="terminal-text-xs text-white/20 hidden sm:block">
                {sessionId}
              </span>
            </div>
          </Link>
          
          <div className="hidden md:flex gap-x-8 lg:gap-x-12 pointer-events-auto">
            {navItems.map((item) => {
              const isActive = pathname === item.path;
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  className={cn(
                    "terminal-text-sm uppercase transition-colors relative group py-1",
                    isActive ? "text-white" : "text-white/40 hover:text-white"
                  )}
                >
                  <span>{item.name}</span>
                  {isActive && (
                    <motion.div 
                      layoutId="nav-underline"
                      className="absolute -bottom-1 left-0 w-full h-[1px] bg-white" 
                    />
                  )}
                </Link>
              );
            })}
          </div>

          <div className="hidden lg:flex items-center gap-8 pointer-events-auto">
            <div className="terminal-text-sm text-white/40 tracking-widest font-mono">
              {time}
            </div>
          </div>

          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden pointer-events-auto p-2 text-white border border-terminal-border relative z-[110]"
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black z-[90] md:hidden flex flex-col pt-32 px-12"
          >
            <div className="flex flex-col gap-8">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={item.path}
                    className={cn(
                      "text-4xl font-bold tracking-tighter uppercase",
                      pathname === item.path ? "text-white" : "text-white/20"
                    )}
                  >
                    {item.name}
                  </Link>
                  <div className="text-[10px] font-mono text-white/10 mt-1 tracking-[0.5em]">
                    PROTOCOL_0{i}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-auto pb-12">
              <div className="text-[10px] font-mono text-white/20 uppercase tracking-[0.2em] space-y-2">
                <p>CONNECTION: ENCRYPTED</p>
                <p>LOCATION: UNKNOWN</p>
                <p>SIGNAL: STABLE</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

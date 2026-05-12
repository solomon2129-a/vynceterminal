'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { VynceButton } from '@/components/ui/VynceButton';
import { GlitchText } from '@/components/ui/GlitchText';

import { useSession } from '@/context/SessionContext';

export const Hero = () => {
  const [mounted, setMounted] = useState(false);
  const { sessionId, coords } = useSession();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="relative min-h-[80vh] flex flex-col justify-center px-4 md:px-8 py-20 bg-black">
      
      <div className="w-full relative z-10">
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex flex-col gap-12 lg:gap-16"
        >
          <div className="space-y-1">
            <div className="flex items-center gap-3">
              <span className="text-white/40 font-mono text-xs md:text-sm">{'>'} SYSTEM_BOOT: SUCCESSFUL</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-white/40 font-mono text-xs md:text-sm">{'>'} SESSION_ID: {sessionId}</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-white/40 font-mono text-xs md:text-sm">{'>'} NODE_SYNC: ACTIVE</span>
            </div>
          </div>
          
          <div className="space-y-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight uppercase leading-[0.9] text-white max-w-4xl">
              ARCHITECTING_THE_VOID.<br/>
              <span className="text-white/20 italic">RECLAIMING_THE_SIGNAL</span>
            </h1>
            <p className="terminal-text-sm text-white/40 max-w-2xl leading-relaxed uppercase">
              [LOG_START] VYNCE IS A RESEARCH UNIT DEDICATED TO THE STUDY OF ATMOSPHERIC INTERFACES AND REACTIVE MOTION. 
              WE OPERATE IN THE SPACES BETWEEN HUMAN INTENT AND MACHINE LOGIC.
              STATUS: UNSTABLE // INTENTIONAL.
            </p>
          </div>

          
          <div className="flex flex-wrap gap-6 pt-4">
            <VynceButton href="/archive">RUN_ARCHIVE</VynceButton>
            <VynceButton href="/lab" variant="secondary">EXEC_LAB</VynceButton>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-12 border-t border-terminal-border mt-8">
            <div className="space-y-4">
              <span className="terminal-text-xs text-white/20">SIGNAL_INTEGRITY</span>
              <div className="flex gap-1.5 h-1.5">
                {[...Array(12)].map((_, i) => (
                  <motion.div 
                    key={i} 
                    className={`flex-grow ${i < 9 ? 'bg-white' : 'bg-white/10'}`} 
                    animate={{ opacity: [1, 0.5, 1] }}
                    transition={{ duration: 0.2, delay: i * 0.1, repeat: Infinity, repeatDelay: 3 }}
                  />
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <span className="terminal-text-xs text-white/20">COORDS</span>
              <span className="terminal-text-sm text-white font-mono tracking-widest">{coords}</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="terminal-text-xs text-white/20">EST_LATENCY</span>
              <span className="terminal-text-sm text-white font-mono tracking-widest">0.0042MS</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

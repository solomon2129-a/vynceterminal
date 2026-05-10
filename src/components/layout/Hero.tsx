'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { VynceButton } from '@/components/ui/VynceButton';
import Image from 'next/image';
import { GlitchText } from '@/components/ui/GlitchText';
import { SignalData } from '@/components/ui/SignalData';

export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 overflow-hidden pt-32 pb-20 bg-abyss">
      {/* Cinematic Background */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute inset-0 z-0 opacity-40 grayscale contrast-[1.1] pointer-events-none"
      >
        {mounted && (
          <Image 
            src="/wallvynce.png" 
            alt="Atmospheric Background" 
            fill 
            className="object-cover scale-[1.05]"
            priority
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-abyss via-transparent to-abyss z-10" />
        <div className="absolute inset-0 bg-abyss/40 backdrop-blur-[1px] z-10" />
      </motion.div>

      {/* Noise & Grain Layer for Hero - Simplified to prevent glitching */}
      <div className="absolute inset-0 z-[1] opacity-[0.03] pointer-events-none mix-blend-overlay" />

      <div className="max-w-[1400px] w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 relative z-10">
        
        <div className="lg:col-span-8 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-4 mb-10 md:mb-14">
              <GlitchText text="SYSTEM_LINK_082F" className="text-[10px] md:text-[11px] font-mono text-crimson tracking-[0.5em] uppercase opacity-70" />
              <div className="w-12 h-[0.5px] bg-white/10" />
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold tracking-tighter text-ash mb-12 md:mb-16 uppercase leading-[0.85] flex flex-col">
              <span className="text-white/10">EXPERIMENTAL</span>
              <span>SYSTEMS_LAB</span>
            </h1>
            
            <p className="text-[12px] md:text-[14px] max-w-md mb-16 md:mb-24 opacity-40 leading-relaxed font-mono tracking-wide">
              [TRANSMISSION_LOG] ARCHIVING FRAGMENTS OF DIGITAL ARCHITECTURE. 
              CONSTRUCTING WORLDS AT THE INTERSECTION OF MOTION, IDENTITY, AND ATMOSPHERIC INTERFACES.
            </p>

            <div className="flex flex-col sm:flex-row gap-10 md:gap-20">
              <VynceButton href="/archive">ENTER_ARCHIVE</VynceButton>
              <VynceButton href="/lab" variant="secondary">SYS_PROTOCOL</VynceButton>
            </div>
          </motion.div>
        </div>

        <div className="lg:col-span-4 flex flex-col justify-end lg:pb-24 lg:items-end mt-20 lg:mt-0">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 2 }}
            className="border-l lg:border-l-0 lg:border-r border-white/10 pl-8 lg:pl-0 lg:pr-10 py-6"
          >
            <div className="space-y-8 lg:text-right">
              <SignalData label="ARCHIVE_NODE" value="8244.00" />
              <SignalData label="SYNC_LATENCY" value="0.0082" />
              <SignalData label="LOC_COORDS" value="51.5074, 0.1278" />
              <div className="w-full h-[0.5px] bg-white/10 mt-12" />
              <p className="leading-relaxed opacity-30 italic text-[10px] md:text-[11px] font-mono uppercase tracking-[0.4em]">
                "EVERY_INTERFACE_IS_A_WORLD"
              </p>
            </div>
          </motion.div>
        </div>

      </div>

      {/* Vertical Side Label */}
      <div className="absolute right-12 bottom-32 hidden md:block">
        <motion.span 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ delay: 2 }}
          className="text-[10px] font-mono text-ash tracking-[0.8em] uppercase [writing-mode:vertical-lr] rotate-180"
        >
          VYNCE_CORE_INFRASTRUCTURE
        </motion.span>
      </div>
      
      {/* Bottom Scroll Indicator */}
      <motion.div 
        style={{ opacity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <span className="text-[9px] font-mono text-dust/30 tracking-[0.4em] uppercase">SCROLL_TO_DESCEND</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-ice/40 to-transparent" />
      </motion.div>
    </section>
  );
};

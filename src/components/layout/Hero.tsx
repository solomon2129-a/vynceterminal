'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { VynceButton } from '@/components/ui/VynceButton';
import Image from 'next/image';

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
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-6 mb-8 md:mb-12">
              <div className="w-12 md:w-20 h-[1px] bg-ice/30" />
              <span className="text-[10px] md:text-xs-technical text-ice tracking-[0.5em] uppercase">
                operational_status: stable_drift
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold tracking-[0.15em] text-ash mb-12 md:mb-16 uppercase leading-[0.9] flex flex-col">
              <span className="opacity-40">EXPERIMENTAL</span>
              <span>SYSTEMS_LAB</span>
            </h1>
            
            <p className="text-[11px] md:text-sm-archival max-w-xl mb-16 md:mb-24 opacity-50 leading-relaxed font-mono">
              [SYSTEM_LOG: v0.82f] ARCHIVING REALITY THROUGH DIGITAL ARCHITECTURE.<br />
              CONSTRUCTING WORLDS AT THE INTERSECTION OF MOTION, IDENTITY, AND ATMOSPHERIC INTERFACES.
            </p>

            <div className="flex flex-col sm:flex-row gap-8 md:gap-16">
              <VynceButton href="/archive">ENTER_ARCHIVE</VynceButton>
              <VynceButton href="/lab" variant="secondary">SYS_PROTOCOL</VynceButton>
            </div>
          </motion.div>
        </div>

        <div className="lg:col-span-4 flex flex-col justify-end lg:pb-24">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 2 }}
            className="border-l border-white/5 pl-8 md:pl-10 py-6"
          >
            <div className="space-y-6 font-mono text-[10px] tracking-[0.3em] text-dust">
              <div className="flex justify-between items-center">
                <span className="opacity-30">ARCHIVE_STATE:</span>
                <span className="text-ice">LIVE_SYNC</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="opacity-30">LATENCY_INDEX:</span>
                <span className="text-ash">0.0082 MS</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="opacity-30">LOC_COORDS:</span>
                <span className="text-ash">51.50° N / 0.12° W</span>
              </div>
              <div className="w-full h-[1px] bg-white/5 mt-10" />
              <p className="leading-relaxed opacity-40 italic text-[9px]">
                "EVERY_INTERFACE_IS_A_WORLD_UNFOLDING"
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

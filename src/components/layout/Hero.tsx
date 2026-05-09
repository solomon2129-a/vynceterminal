'use client';

import { motion } from 'framer-motion';
import { VynceButton } from '@/components/ui/VynceButton';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-12 md:px-24 overflow-hidden pt-32">
      <div className="max-w-[1400px] w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20">
        
        <div className="lg:col-span-7 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, ease: [0.19, 1, 0.22, 1] }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-[1px] bg-pulse" />
              <span className="text-xs-technical text-pulse animate-pulse">
                signal_drift_detected
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-[0.2em] text-ash mb-12 uppercase leading-tight">
              EXPERIMENTAL<br/>
              SYSTEMS_LAB
            </h1>
            
            <p className="text-sm-archival max-w-md mb-16 italic">
              recalibrating_motion_buffer // v0.42_stable<br/>
              observing fragments of interface entropy and atmospheric signal studies.
            </p>

            <div className="flex gap-12">
              <VynceButton href="/archive">ENTER_ARCHIVE</VynceButton>
              <VynceButton href="/lab" variant="secondary">ACCESS_LAB</VynceButton>
            </div>
          </motion.div>
        </div>

        <div className="lg:col-span-5 flex flex-col justify-end pb-20">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            transition={{ delay: 1, duration: 2 }}
            className="border-l border-matte pl-8 py-4"
          >
            <div className="space-y-4 font-mono text-[9px] tracking-[0.2em] text-dust">
              <div className="flex justify-between">
                <span>BUFFER_STATE:</span>
                <span className="text-pulse">ACTIVE</span>
              </div>
              <div className="flex justify-between">
                <span>LATENCY:</span>
                <span>0.0042ms</span>
              </div>
              <div className="flex justify-between">
                <span>COORD:</span>
                <span>51.5074° N, 0.1278° W</span>
              </div>
              <div className="w-full h-px bg-matte mt-8" />
              <p className="leading-relaxed opacity-60">
                everything_is_a_signal // we_archive_the_drift
              </p>
            </div>
          </motion.div>
        </div>

      </div>

      {/* Vertical Side Label */}
      <div className="absolute left-10 bottom-24 hidden md:block">
        <span className="text-[9px] font-mono text-dust/20 tracking-[0.5em] uppercase [writing-mode:vertical-lr] rotate-180">
          VYNCE_RESEARCH_TERMINAL
        </span>
      </div>
    </section>
  );
};

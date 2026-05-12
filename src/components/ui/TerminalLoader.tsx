'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const TerminalLoader = ({ onComplete }: { onClose?: () => void; onComplete: () => void }) => {
  const [logs, setLogs] = useState<string[]>([]);
  const [progress, setProgress] = useState(0);
  const [mounted, setMounted] = useState(false);

  const startupSequence = [
    '> INITIALIZING_BOOT_SEQUENCE...',
    '> LOADING_CORE_MODULES...',
    '> MAPPING_SYSTEM_VARS...',
    '> ESTABLISHING_SECURE_LINK...',
    '> ANALYZING_NOISE_FLR...',
    '> SYNCING_LOC_COORDS...',
    '> SESSION_READY.',
  ];

  useEffect(() => {
    setMounted(true);
    let currentLog = 0;
    const interval = setInterval(() => {
      if (currentLog < startupSequence.length) {
        setLogs(prev => [...prev, startupSequence[currentLog]]);
        currentLog++;
        setProgress((currentLog / startupSequence.length) * 100);
      } else {
        clearInterval(interval);
        setTimeout(onComplete, 1000);
      }
    }, 400);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[1000] bg-black flex flex-col items-center justify-center p-6 md:p-12 font-mono">
      <div className="max-w-2xl w-full space-y-8">
        <div className="space-y-4">
          <AnimatePresence>
            {logs.map((log, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-white text-sm md:text-base flex items-center gap-4"
              >
                <span className="text-white/20">[{mounted ? new Date().toLocaleTimeString() : '--:--:--'}]</span>
                <span>{log}</span>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="w-full h-1 bg-white/5 relative overflow-hidden">
          <motion.div 
            className="absolute top-0 left-0 h-full bg-white"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>

        <div className="flex justify-between items-center text-[10px] text-white/20 tracking-widest">
          <span className="lowercase font-bold">vynce</span>
          <span className="uppercase text-[9px] opacity-40">system_startup</span>
          <span>{Math.round(progress)}%</span>
        </div>
      </div>
    </div>
  );
};

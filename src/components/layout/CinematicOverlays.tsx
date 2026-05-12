'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const useHasMounted = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return mounted;
};

const DataLeak = () => {
  const [fragments, setFragments] = useState<{ x: number, y: number, content: string, opacity: number, duration: number }[]>([]);

  const generateValue = () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789<>[]/\\_{}*&^%$#@!";
    if (Math.random() > 0.8) {
      return Array(8).fill(0).map(() => chars[Math.floor(Math.random() * chars.length)]).join("");
    }
    return Math.random() > 0.5 
      ? "0x" + Math.floor(Math.random() * 0xFFFFFF).toString(16).toUpperCase()
      : "NULL_" + Math.floor(Math.random() * 9999);
  };

  useEffect(() => {
    const initialFragments = [...Array(30)].map(() => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      content: generateValue(),
      opacity: Math.random() * 0.15 + 0.05,
      duration: Math.random() * 2 + 1
    }));
    setFragments(initialFragments);

    const interval = setInterval(() => {
      setFragments(prev => prev.map(f => 
        Math.random() > 0.8 ? { ...f, content: generateValue(), x: Math.random() * 100, y: Math.random() * 100 } : f
      ));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[1] overflow-hidden select-none">
      {fragments.map((f, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, f.opacity, 0] }}
          transition={{
            duration: f.duration,
            repeat: Infinity,
            repeatDelay: Math.random() * 5,
            ease: "linear",
          }}
          className="absolute font-mono text-[8px] md:text-[9px] tracking-[0.2em] text-white/40"
          style={{
            left: `${f.x}%`,
            top: `${f.y}%`,
          }}
        >
          {f.content}
        </motion.div>
      ))}
    </div>
  );
};

const ParticleField = () => {
  const [particles, setParticles] = useState<{ x: string, y: string, opacity: number, duration: number }[]>([]);

  useEffect(() => {
    const initialParticles = [...Array(20)].map(() => ({
      x: Math.random() * 100 + '%',
      y: Math.random() * 100 + '%',
      opacity: Math.random() * 0.2,
      duration: Math.random() * 0.5 + 0.1,
    }));
    setParticles(initialParticles);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute w-[2px] h-[2px] bg-white/20"
          initial={{ x: p.x, y: p.y, opacity: 0 }}
          animate={{
            opacity: [0, p.opacity, 0],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            repeatDelay: Math.random() * 10,
            ease: "linear"
          }}
        />
      ))}
    </div>
  );
};

export const CinematicOverlays = () => {
  const mounted = useHasMounted();

  if (!mounted) return null;

  return (
    <>
      <div className="noise-overlay" aria-hidden="true" />
      <div className="scanline" aria-hidden="true" />
      <div className="crt-vignette" aria-hidden="true" />
      
      <DataLeak />
      <ParticleField />
      
      {/* Horizontal Line Flicker */}
      <motion.div
        className="fixed inset-0 pointer-events-none z-[2] bg-white/5 h-[1px]"
        animate={{
          top: ["0%", "100%"],
          opacity: [0, 0.2, 0]
        }}
        transition={{
          duration: 0.2,
          repeat: Infinity,
          repeatDelay: Math.random() * 10,
          ease: "linear"
        }}
      />

      {/* Screen Flicker Overlay */}
      <div className="fixed inset-0 pointer-events-none z-[102] animate-flicker bg-white/[0.01]" />
    </>
  );
};

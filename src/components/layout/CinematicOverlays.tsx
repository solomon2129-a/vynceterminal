'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const DataLeak = () => {
  const [fragments, setFragments] = useState<{ x: number, y: number, content: string, opacity: number, duration: number }[]>([]);

  useEffect(() => {
    const generateFragments = () => {
      const newFragments = [...Array(100)].map(() => ({
        x: Math.random() * 100,
        y: Math.random() * 100,
        content: Math.random() > 0.6 
          ? Math.floor(Math.random() * 1000000).toString(16).toUpperCase()
          : Math.random() > 0.3 
            ? Math.floor(Math.random() * 100000).toString() 
            : Math.random().toString(2).substring(2, 10),
        opacity: Math.random() * 0.2 + 0.15, // Increased base visibility
        duration: Math.random() * 5 + 3
      }));
      setFragments(newFragments);
    };
    generateFragments();
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[1] overflow-hidden select-none">
      {fragments.map((f, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: [f.opacity, f.opacity * 0.4, f.opacity] }}
          transition={{
            duration: f.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute font-mono text-[9px] md:text-[10px] tracking-tighter text-ash"
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
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) - 0.5,
        y: (e.clientY / window.innerHeight) - 0.5,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-[1px] h-[1px] bg-dust/20"
          initial={{ 
            x: Math.random() * 100 + '%', 
            y: Math.random() * 100 + '%',
            opacity: Math.random() * 0.5 
          }}
          animate={{
            x: [null, `${Math.random() * 100}%`],
            y: [null, `${Math.random() * 100}%`],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: Math.random() * 30 + 30,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            translateX: mousePosition.x * (i + 1) * 1.5,
            translateY: mousePosition.y * (i + 1) * 1.5,
          }}
        />
      ))}
    </div>
  );
};

export const CinematicOverlays = () => {
  return (
    <>
      <div className="grain-overlay" aria-hidden="true" />
      <DataLeak />
      <ParticleField />
      
      {/* Subtle Scanline */}
      <motion.div
        className="fixed inset-0 pointer-events-none z-[2] opacity-[0.015]"
        style={{
          background: "repeating-linear-gradient(0deg, transparent, transparent 2px, #B7B1A9 3px)"
        }}
      />

      {/* Atmospheric Vignette */}
      <div className="fixed inset-0 pointer-events-none z-[3] bg-[radial-gradient(circle_at_50%_50%,transparent_0%,rgba(8,8,8,0.5)_100%)]" />
    </>
  );
};

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
    return Math.random() > 0.6 
      ? Math.floor(Math.random() * 1000000).toString(16).toUpperCase()
      : Math.random() > 0.3 
        ? Math.floor(Math.random() * 100000).toString() 
        : Math.random().toString(2).substring(2, 10);
  };

  useEffect(() => {
    const initialFragments = [...Array(40)].map(() => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      content: generateValue(),
      opacity: Math.random() * 0.08 + 0.04,
      duration: Math.random() * 5 + 3
    }));
    setFragments(initialFragments);

    const interval = setInterval(() => {
      setFragments(prev => prev.map(f => 
        Math.random() > 0.9 ? { ...f, content: generateValue() } : f
      ));
    }, 3000);

    return () => clearInterval(interval);
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
          className="absolute font-mono text-[9px] md:text-[10px] tracking-tighter text-ash/30"
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
  const [particles, setParticles] = useState<{ x: string, y: string, opacity: number, duration: number, targetX: string, targetY: string }[]>([]);

  useEffect(() => {
    const initialParticles = [...Array(15)].map(() => ({
      x: Math.random() * 100 + '%',
      y: Math.random() * 100 + '%',
      opacity: Math.random() * 0.3,
      duration: Math.random() * 40 + 40,
      targetX: Math.random() * 100 + '%',
      targetY: Math.random() * 100 + '%'
    }));
    setParticles(initialParticles);

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
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute w-[1px] h-[1px] bg-white/10"
          initial={{ 
            x: p.x, 
            y: p.y,
            opacity: p.opacity 
          }}
          animate={{
            x: [p.x, p.targetX, p.x],
            y: [p.y, p.targetY, p.y],
            opacity: [p.opacity, p.opacity * 2, p.opacity],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            translateX: mousePosition.x * (i + 1) * 2,
            translateY: mousePosition.y * (i + 1) * 2,
          }}
        />
      ))}
    </div>
  );
};

export const CinematicOverlays = () => {
  const mounted = useHasMounted();

  if (!mounted) return <div className="grain-overlay" aria-hidden="true" />;

  return (
    <>
      <div className="grain-overlay" aria-hidden="true" />
      <DataLeak />
      <ParticleField />
      
      {/* Subtle Scanline */}
      <motion.div
        className="fixed inset-0 pointer-events-none z-[2] opacity-[0.01]"
        style={{
          background: "repeating-linear-gradient(0deg, transparent, transparent 2px, #E5E7EB 3px)"
        }}
      />

      {/* Atmospheric Vignette */}
      <div className="fixed inset-0 pointer-events-none z-[3] bg-[radial-gradient(circle_at_50%_50%,transparent_0%,rgba(5,5,5,0.6)_100%)]" />
    </>
  );
};

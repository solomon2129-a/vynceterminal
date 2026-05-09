'use client';

import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';

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
      {[...Array(30)].map((_, i) => (
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
            duration: Math.random() * 20 + 20,
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
  return (
    <>
      <div className="grain-overlay" aria-hidden="true" />
      <ParticleField />
      
      {/* Subtle Scanline - more restrained */}
      <motion.div
        className="fixed inset-0 pointer-events-none z-[1] opacity-[0.02]"
        style={{
          background: "repeating-linear-gradient(0deg, transparent, transparent 2px, #B7B1A9 3px)"
        }}
      />

      {/* Atmospheric Vignette */}
      <div className="fixed inset-0 pointer-events-none z-[2] bg-[radial-gradient(circle_at_50%_50%,transparent_0%,rgba(8,8,8,0.4)_100%)]" />
    </>
  );
};

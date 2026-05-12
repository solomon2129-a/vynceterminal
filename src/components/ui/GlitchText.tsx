'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface GlitchTextProps {
  text: string;
  className?: string;
  glitchProbability?: number;
  interval?: number;
  speed?: number;
}

const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789<>[]/\\_{}*&^%$#@!';

export const GlitchText = ({ 
  text, 
  className, 
  glitchProbability = 0.05, 
  interval = 4000,
  speed = 40 
}: GlitchTextProps) => {
  const [displayText, setDisplayText] = useState(text);
  const [isGlitching, setIsGlitching] = useState(false);
  const originalText = useRef(text);

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      if (Math.random() < glitchProbability) {
        startGlitch();
      }
    }, interval);

    return () => clearInterval(glitchInterval);
  }, [glitchProbability, interval]);

  const startGlitch = () => {
    setIsGlitching(true);
    let iterations = 0;
    const maxIterations = originalText.current.length;
    
    const glitchStep = setInterval(() => {
      setDisplayText(prev => 
        originalText.current
          .split('')
          .map((char, index) => {
            if (index < iterations) return originalText.current[index];
            if (Math.random() > 0.7) return characters[Math.floor(Math.random() * characters.length)];
            return char;
          })
          .join('')
      );

      iterations += 1;
      if (iterations >= maxIterations) {
        clearInterval(glitchStep);
        setDisplayText(originalText.current);
        setIsGlitching(false);
      }
    }, speed);
  };

  return (
    <motion.span 
      className={className}
      animate={isGlitching ? { 
        x: [0, -2, 2, -1, 0],
        opacity: [1, 0.5, 1, 0.7, 1],
      } : {}}
      transition={{ duration: 0.1, ease: "linear" }}
    >
      {displayText}
    </motion.span>
  );
};

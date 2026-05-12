'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface SignalDataProps {
  label: string;
  value: string;
  className?: string;
  mutationSpeed?: number;
}

export const SignalData = ({ label, value, className, mutationSpeed = 1000 }: SignalDataProps) => {
  const [displayValue, setDisplayValue] = useState(value);

  useEffect(() => {
    if (!/^\d+(\.\d+)?$/.test(value) && !value.includes('°')) return;

    const interval = setInterval(() => {
      if (value.includes('°')) {
        const [lat, lon] = value.split(', ');
        const mutate = (coord: string) => {
          const num = parseFloat(coord);
          return (num + (Math.random() - 0.5) * 0.005).toFixed(4);
        };
        setDisplayValue(`${mutate(lat)}, ${mutate(lon)}`);
      } else if (!isNaN(parseFloat(value))) {
        const num = parseFloat(value);
        setDisplayValue((num + (Math.random() - 0.5) * 0.01).toFixed(4));
      }
    }, mutationSpeed);

    return () => clearInterval(interval);
  }, [value, mutationSpeed]);

  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <span className="text-[9px] font-mono text-white/20 uppercase tracking-[0.5em]">{label}</span>
      <motion.span 
        className="text-[11px] font-mono text-white tracking-widest uppercase"
        animate={{ opacity: [1, 0.4, 1] }}
        transition={{ duration: 0.2, repeat: Infinity, repeatDelay: 5, ease: "linear" }}
      >
        {displayValue}
      </motion.span>
    </div>
  );
};

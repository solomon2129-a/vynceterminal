'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface SignalDataProps {
  label: string;
  value: string;
  className?: string;
  mutationSpeed?: number;
}

export const SignalData = ({ label, value, className, mutationSpeed = 2000 }: SignalDataProps) => {
  const [displayValue, setDisplayValue] = useState(value);

  useEffect(() => {
    if (!/^\d+(\.\d+)?$/.test(value) && !value.includes('°')) return;

    const interval = setInterval(() => {
      if (value.includes('°')) {
        // Handle coordinates
        const [lat, lon] = value.split(', ');
        const mutate = (coord: string) => {
          const num = parseFloat(coord);
          return (num + (Math.random() - 0.5) * 0.01).toFixed(4) + coord.slice(-2);
        };
        setDisplayValue(`${mutate(lat)}, ${mutate(lon)}`);
      } else if (!isNaN(parseFloat(value))) {
        // Handle numbers
        const num = parseFloat(value);
        setDisplayValue((num + (Math.random() - 0.5) * 0.05).toFixed(4));
      }
    }, mutationSpeed);

    return () => clearInterval(interval);
  }, [value, mutationSpeed]);

  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      <span className="text-[7px] font-mono text-dust/20 uppercase tracking-[0.3em]">{label}</span>
      <motion.span 
        className="text-[9px] font-mono text-ash/60 tracking-widest"
        animate={{ opacity: [0.6, 0.4, 0.6] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        {displayValue}
      </motion.span>
    </div>
  );
};

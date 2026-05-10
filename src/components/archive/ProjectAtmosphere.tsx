'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

// Common Waveform for all atmospheres
export const Waveform = ({ color = '#E5E7EB', speed = 1 }) => {
  return (
    <div className="flex gap-1 items-end h-8">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="w-1 bg-current opacity-40"
          style={{ color }}
          animate={{ height: [4, 12 + Math.random() * 16, 6] }}
          transition={{ duration: 0.8 / speed, repeat: Infinity, ease: "easeInOut", delay: i * 0.05 }}
        />
      ))}
    </div>
  );
};

export const BreathAtmosphere = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute border border-ash/10 rounded-full"
          animate={{ scale: [1, 1.5, 1], opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: i * 2 }}
          style={{ width: 200 + i * 100, height: 200 + i * 100 }}
        />
      ))}
      <div className="absolute inset-0 flex items-center justify-center">
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-ash/20 rounded-full"
            animate={{ 
              y: [0, -200], 
              opacity: [0, 0.4, 0], 
              scale: [0.5, 1.5, 0.5] 
            }}
            transition={{ 
              duration: 10 + Math.random() * 5, 
              repeat: Infinity, 
              delay: Math.random() * 10 
            }}
            style={{ 
              left: `${Math.random() * 100}%`, 
              top: `${Math.random() * 100}%` 
            }}
          />
        ))}
      </div>
    </div>
  );
};

export const SignalAtmosphere = () => {
  return (
    <div className="relative w-full h-full overflow-hidden bg-void">
      <div className="absolute inset-0" 
        style={{ backgroundImage: 'linear-gradient(rgba(229, 231, 235, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(229, 231, 235, 0.05) 1px, transparent 1px)', backgroundSize: '32px 32px' }} 
      />
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-px h-12 bg-crimson/30"
          animate={{ 
            height: [0, 40, 0], 
            opacity: [0, 0.8, 0],
            top: [`${Math.random() * 100}%`, `${Math.random() * 100}%`]
          }}
          transition={{ 
            duration: 0.2 + Math.random() * 0.4, 
            repeat: Infinity, 
            delay: Math.random() * 5,
            repeatDelay: Math.random() * 2
          }}
          style={{ 
            left: `${Math.floor(Math.random() * 32) * 3.125}%`,
          }}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-t from-void via-transparent to-transparent" />
    </div>
  );
};

export const BlueprintAtmosphere = () => {
  return (
    <div className="relative w-full h-full overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 opacity-[0.03]" 
        style={{ backgroundImage: 'linear-gradient(#D4AF37 1px, transparent 1px), linear-gradient(90deg, #D4AF37 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
      />
      <svg className="w-2/3 h-2/3 opacity-20" viewBox="0 0 100 100">
        <motion.path
          d="M 10 10 L 90 10 L 90 90 L 10 90 Z M 10 50 L 90 50 M 50 10 L 50 90"
          fill="none"
          stroke="#D4AF37"
          strokeWidth="0.2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        />
        {[...Array(4)].map((_, i) => (
          <motion.circle
            key={i}
            cx={i < 2 ? 10 + i * 80 : 50}
            cy={i < 2 ? 50 : 10 + (i - 2) * 80}
            r="1"
            fill="#D4AF37"
            animate={{ opacity: [0.2, 1, 0.2] }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
          />
        ))}
      </svg>
    </div>
  );
};

export const NetworkAtmosphere = () => {
  const [nodes, setNodes] = useState<{x: number, y: number}[]>([]);
  
  useEffect(() => {
    setNodes([...Array(12)].map(() => ({ x: Math.random() * 80 + 10, y: Math.random() * 80 + 10 })));
  }, []);

  return (
    <div className="relative w-full h-full overflow-hidden">
      <svg className="w-full h-full opacity-30" viewBox="0 0 100 100">
        {nodes.map((node, i) => (
          <g key={i}>
            <motion.circle
              cx={node.x}
              cy={node.y}
              r="0.8"
              fill="#D97706"
              animate={{ r: [0.8, 1.2, 0.8], opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 3, repeat: Infinity, delay: i * 0.2 }}
            />
            {nodes.slice(i + 1, i + 3).map((target, j) => (
              <motion.line
                key={j}
                x1={node.x}
                y1={node.y}
                x2={target.x}
                y2={target.y}
                stroke="#D97706"
                strokeWidth="0.1"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.3 }}
                transition={{ duration: 5, repeat: Infinity, delay: i * 0.1 }}
              />
            ))}
          </g>
        ))}
      </svg>
    </div>
  );
};

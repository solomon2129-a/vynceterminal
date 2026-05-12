'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

// Common Waveform for all atmospheres
export const Waveform = ({ color = '#FFFFFF', speed = 1 }) => {
  return (
    <div className="flex gap-1 items-end h-8">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="w-1 bg-current opacity-40"
          style={{ color }}
          animate={{ height: [4, 12 + Math.random() * 16, 6] }}
          transition={{ duration: 0.8 / speed, repeat: Infinity, ease: "linear", delay: i * 0.05 }}
        />
      ))}
    </div>
  );
};

export const BreathAtmosphere = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-black">
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute border border-white/5"
          animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.1, 0.05] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear", delay: i * 2 }}
          style={{ width: 200 + i * 150, height: 200 + i * 150 }}
        />
      ))}
      <div className="absolute inset-0 flex items-center justify-center">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-[1px] h-[1px] bg-white/20"
            animate={{ 
              y: [0, -400], 
              opacity: [0, 0.3, 0], 
            }}
            transition={{ 
              duration: 5 + Math.random() * 5, 
              repeat: Infinity, 
              delay: Math.random() * 10,
              ease: "linear"
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
    <div className="relative w-full h-full overflow-hidden bg-black">
      <div className="absolute inset-0" 
        style={{ backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
      />
      {[...Array(40)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-[1px] h-20 bg-white/20"
          animate={{ 
            height: [0, 60, 0], 
            opacity: [0, 0.5, 0],
            top: [`${Math.random() * 100}%`, `${Math.random() * 100}%`]
          }}
          transition={{ 
            duration: 0.1 + Math.random() * 0.3, 
            repeat: Infinity, 
            delay: Math.random() * 5,
            repeatDelay: Math.random() * 2,
            ease: "linear"
          }}
          style={{ 
            left: `${Math.floor(Math.random() * 40) * 2.5}%`,
          }}
        />
      ))}
    </div>
  );
};

export const BlueprintAtmosphere = () => {
  return (
    <div className="relative w-full h-full overflow-hidden flex items-center justify-center bg-black">
      <div className="absolute inset-0 opacity-[0.02]" 
        style={{ backgroundImage: 'linear-gradient(#FFFFFF 1px, transparent 1px), linear-gradient(90deg, #FFFFFF 1px, transparent 1px)', backgroundSize: '50px 50px' }} 
      />
      <svg className="w-3/4 h-3/4 opacity-10" viewBox="0 0 100 100">
        <motion.path
          d="M 5 5 L 95 5 L 95 95 L 5 95 Z M 5 50 L 95 50 M 50 5 L 50 95"
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="0.1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />
        <motion.path
          d="M 20 20 L 80 80 M 80 20 L 20 80"
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="0.05"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
      </svg>
    </div>
  );
};

export const NetworkAtmosphere = () => {
  const [nodes, setNodes] = useState<{x: number, y: number}[]>([]);
  
  useEffect(() => {
    setNodes([...Array(15)].map(() => ({ x: Math.random() * 90 + 5, y: Math.random() * 90 + 5 })));
  }, []);

  return (
    <div className="relative w-full h-full overflow-hidden bg-black">
      <svg className="w-full h-full opacity-20" viewBox="0 0 100 100">
        {nodes.map((node, i) => (
          <g key={i}>
            <motion.rect
              x={node.x}
              y={node.y}
              width="1"
              height="1"
              fill="#FFFFFF"
              animate={{ opacity: [0.1, 0.6, 0.1] }}
              transition={{ duration: 4, repeat: Infinity, delay: i * 0.3, ease: "linear" }}
            />
            {nodes.slice(i + 1, i + 4).map((target, j) => (
              <motion.line
                key={j}
                x1={node.x + 0.5}
                y1={node.y + 0.5}
                x2={target.x + 0.5}
                y2={target.y + 0.5}
                stroke="#FFFFFF"
                strokeWidth="0.05"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.2 }}
                transition={{ duration: 8, repeat: Infinity, delay: i * 0.2, ease: "linear" }}
              />
            ))}
          </g>
        ))}
      </svg>
    </div>
  );
};

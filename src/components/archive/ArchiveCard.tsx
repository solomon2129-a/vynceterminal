'use client';

import { motion } from 'framer-motion';
import { ArchiveEntry } from '@/data/archive';
import { ExternalLink, Layers, Terminal } from 'lucide-react';

interface ArchiveCardProps {
  entry: ArchiveEntry;
  onClick: () => void;
}

export const ArchiveCard = ({ entry, onClick }: ArchiveCardProps) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      onClick={onClick}
      className="group relative glass-matte p-8 md:p-12 h-[350px] md:h-[400px] flex flex-col justify-between overflow-hidden cursor-pointer border-matte transition-all duration-700 hover:border-ice/30"
    >
      {/* Dynamic Background Noise/Grain on Hover */}
      <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none">
        <div className="w-full h-full bg-[url('data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3BaseFilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/baseFilter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E')]" />
      </div>

      {/* Atmospheric Glow */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-ice/5 blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

      {/* Header Metadata */}
      <div className="flex justify-between items-start relative z-10">
        <div className="flex flex-col gap-2">
          <span className="text-[10px] font-mono text-ice/60 tracking-tighter">{entry.id}</span>
          <span className="text-[9px] font-mono text-dust/40 tracking-[0.2em]">{entry.year}</span>
        </div>
        <div className="flex items-center gap-2 px-2 py-1 border border-white/5 rounded-sm">
          <div className="w-1 h-1 rounded-full bg-ice animate-pulse" />
          <span className="text-[8px] font-mono text-ice tracking-widest">{entry.status}</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <div className="mb-4 overflow-hidden">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="flex items-center gap-4"
          >
            <h3 className="text-2xl md:text-4xl font-bold tracking-[0.2em] text-ash group-hover:text-white transition-colors uppercase">
              {entry.title}
            </h3>
          </motion.div>
        </div>
        
        <div className="space-y-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-700">
          <p className="text-[10px] md:text-[11px] font-mono text-dust/60 leading-relaxed max-w-[280px]">
            {entry.description}
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-[8px] font-mono text-ice/40 uppercase tracking-widest">
            <span className="flex items-center gap-2"><Layers className="w-3 h-3" /> {entry.type}</span>
            <span className="flex items-center gap-2"><Terminal className="w-3 h-3" /> {entry.field}</span>
          </div>
        </div>
      </div>

      {/* Footer / Interaction */}
      <div className="flex items-center justify-between pt-6 border-t border-white/5 relative z-10 mt-6">
        <span className="text-[9px] font-mono text-dust/20 tracking-[0.3em] group-hover:text-ice/40 transition-colors uppercase">
          ACCESS_FRAGMENT
        </span>
        <ExternalLink className="w-4 h-4 text-dust/20 group-hover:text-ice transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
      </div>

      {/* Subtle Scanline on Hover */}
      <div className="absolute inset-0 pointer-events-none z-20 opacity-0 group-hover:opacity-[0.03] transition-opacity duration-700"
        style={{
          background: "repeating-linear-gradient(0deg, transparent, transparent 1px, #CBD5E1 2px)"
        }}
      />
    </motion.div>
  );
};

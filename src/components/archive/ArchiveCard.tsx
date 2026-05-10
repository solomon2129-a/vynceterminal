'use client';

import { motion } from 'framer-motion';
import { ArchiveEntry } from '@/data/archive';
import { ExternalLink, Layers, Terminal, ShieldAlert } from 'lucide-react';
import { GlitchText } from '@/components/ui/GlitchText';

interface ArchiveCardProps {
  entry: ArchiveEntry;
  onClick: () => void;
}

export const ArchiveCard = ({ entry, onClick }: ArchiveCardProps) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      whileHover={{ y: -2 }}
      onClick={onClick}
      className="group relative bg-void/40 p-6 md:p-8 h-[280px] md:h-[320px] flex flex-col justify-between overflow-hidden cursor-pointer border-matte transition-all duration-700 hover:border-crimson/30"
    >
      {/* Dynamic Background Noise/Grain on Hover */}
      <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-5 transition-opacity duration-700 pointer-events-none">
        <div className="w-full h-full bg-[url('data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3BaseFilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/baseFilter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E')]" />
      </div>

      {/* Atmospheric Glow - Crimson */}
      <div className="absolute -top-12 -right-12 w-32 h-32 bg-crimson/5 blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

      {/* Header Metadata */}
      <div className="flex justify-between items-start relative z-10">
        <div className="flex flex-col gap-1">
          <GlitchText text={entry.id} className="text-[9px] font-mono text-ice/40 tracking-tighter" />
          <span className="text-[8px] font-mono text-dust/20 tracking-[0.2em]">{entry.year}</span>
        </div>
        <div className="flex items-center gap-2 px-1.5 py-0.5 border border-white/5 bg-void/20">
          <ShieldAlert className="w-2.5 h-2.5 text-crimson animate-pulse" />
          <span className="text-[7px] font-mono text-ash/40 tracking-widest">{entry.status}</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <div className="mb-3 overflow-hidden">
          <motion.div className="flex items-center gap-3">
            <h3 className="text-xl md:text-2xl font-bold tracking-[0.1em] text-ash group-hover:text-white transition-colors uppercase leading-none">
              {entry.title}
            </h3>
          </motion.div>
        </div>
        
        <div className="space-y-3 opacity-40 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all duration-700">
          <p className="text-[9px] md:text-[10px] font-mono text-dust/60 leading-relaxed max-w-[240px]">
            {entry.description}
          </p>
          <div className="flex flex-wrap gap-x-4 gap-y-1.5 text-[7px] font-mono text-ice/30 uppercase tracking-[0.2em]">
            <span className="flex items-center gap-1.5"><Layers className="w-2.5 h-2.5" /> {entry.type}</span>
            <span className="flex items-center gap-1.5"><Terminal className="w-2.5 h-2.5" /> {entry.field}</span>
          </div>
        </div>
      </div>

      {/* Footer / Interaction */}
      <div className="flex items-center justify-between pt-4 border-t border-white/5 relative z-10 mt-4">
        <span className="text-[8px] font-mono text-dust/20 tracking-[0.3em] group-hover:text-crimson/60 transition-colors uppercase">
          READ_NODE
        </span>
        <ExternalLink className="w-3.5 h-3.5 text-dust/10 group-hover:text-crimson transition-all" />
      </div>

      {/* Subtle Scanline on Hover */}
      <div className="absolute inset-0 pointer-events-none z-20 opacity-0 group-hover:opacity-[0.02] transition-opacity duration-700"
        style={{
          background: "repeating-linear-gradient(0deg, transparent, transparent 1px, #7F1D1D 2px)"
        }}
      />
    </motion.div>
  );
};

'use client';

import { motion } from 'framer-motion';
import { ArchiveEntry } from '@/data/archive';
import { ExternalLink } from 'lucide-react';
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
      onClick={onClick}
      className="group relative bg-black p-8 h-[350px] flex flex-col justify-between overflow-hidden cursor-crosshair border border-white/10 transition-all duration-100 hover:border-white"
    >
      {/* Header Metadata */}
      <div className="flex justify-between items-start relative z-10">
        <div className="flex flex-col gap-1">
          <GlitchText text={entry.id} className="text-[10px] font-mono text-white/40 tracking-tighter uppercase" />
          <span className="text-[9px] font-mono text-white/20 tracking-[0.2em]">{entry.year}</span>
        </div>
        <div className="px-2 py-0.5 border border-white/10 text-[8px] font-mono text-white/40 tracking-widest uppercase group-hover:border-white group-hover:text-white transition-colors">
          {entry.status}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <h3 className="text-3xl font-bold tracking-tighter text-white mb-6 uppercase leading-none group-hover:italic transition-all">
          {entry.title}
        </h3>
        
        <div className="space-y-4 opacity-40 group-hover:opacity-100 transition-opacity">
          <p className="text-[10px] font-mono text-white leading-relaxed max-w-[280px] uppercase">
            {entry.description}
          </p>
          <div className="flex flex-wrap gap-4 text-[8px] font-mono text-white/30 uppercase tracking-[0.2em]">
            <span>[ {entry.type} ]</span>
            <span>[ {entry.field} ]</span>
          </div>
        </div>
      </div>

      {/* Footer / Interaction */}
      <div className="flex items-center justify-between pt-6 border-t border-white/10 relative z-10">
        <span className="text-[9px] font-mono text-white/20 tracking-[0.4em] uppercase group-hover:text-white transition-colors">
          ACCESS_FRAGMENT
        </span>
        <ExternalLink className="w-4 h-4 text-white/10 group-hover:text-white transition-all" />
      </div>

      {/* Hover Glitch Strip */}
      <motion.div 
        className="absolute top-0 left-0 w-full h-[1px] bg-white opacity-0 group-hover:opacity-100"
        animate={{ top: ["0%", "100%", "0%"] }}
        transition={{ duration: 0.5, repeat: Infinity, ease: "linear" }}
      />
    </motion.div>
  );
};

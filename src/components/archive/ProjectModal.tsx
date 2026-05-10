'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ArchiveEntry } from '@/data/archive';
import { X, ExternalLink, ShieldCheck, Cpu, Globe, ArrowRight } from 'lucide-react';
import Image from 'next/image';

interface ProjectModalProps {
  entry: ArchiveEntry | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectModal = ({ entry, isOpen, onClose }: ProjectModalProps) => {
  if (!entry) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] flex items-center justify-center px-6 md:px-12 py-12 md:py-24"
        >
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-abyss/90 backdrop-blur-xl cursor-crosshair" 
            onClick={onClose} 
          />

          {/* Modal Container */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="relative w-full max-w-[1400px] h-full bg-void border border-white/10 overflow-hidden flex flex-col lg:flex-row shadow-[0_0_100px_rgba(0,0,0,0.5)]"
          >
            {/* Close Button */}
            <button 
              onClick={onClose}
              className="absolute top-8 right-8 z-50 p-2 text-dust hover:text-white transition-colors border border-white/5 bg-void/50 backdrop-blur-md"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Visual Side (Left) */}
            <div className="lg:w-3/5 h-[400px] lg:h-full relative overflow-hidden bg-abyss border-r border-white/5">
              <div className="absolute inset-0 z-10 bg-gradient-to-r from-void via-transparent to-transparent opacity-60" />
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-void via-transparent to-transparent opacity-60" />
              
              {/* Image Placeholder with Aesthetic Shroud */}
              <div className="w-full h-full relative group">
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="text-[10px] font-mono text-dust/20 tracking-[1em] uppercase">SYSTEM_VISUAL_SHROUD</div>
                </div>
                {/* Noise overlay */}
                <div className="absolute inset-0 z-20 opacity-10 pointer-events-none mix-blend-overlay">
                  <div className="w-full h-full bg-[url('data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3BaseFilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/baseFilter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E')]" />
                </div>
              </div>

              {/* Technical Telemetry Overlay */}
              <div className="absolute bottom-12 left-12 z-20 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-[1px] bg-ice/50" />
                  <span className="text-[9px] font-mono text-ice tracking-[0.4em] uppercase">atmospheric_scan: active</span>
                </div>
                <div className="flex gap-2">
                   {[...Array(6)].map((_, i) => (
                     <div key={i} className="w-1 h-8 bg-white/5 relative">
                        <motion.div 
                          className="absolute bottom-0 left-0 w-full bg-ice/40"
                          animate={{ height: [ '20%', '60%', '40%', '80%', '10%' ][i % 5] }}
                          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }}
                        />
                     </div>
                   ))}
                </div>
              </div>
            </div>

            {/* Content Side (Right) */}
            <div className="lg:w-2/5 h-full overflow-y-auto custom-scrollbar p-8 md:p-16 lg:p-20 flex flex-col justify-between">
              <div>
                <header className="mb-12">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-[10px] font-mono text-ice/60 tracking-tighter">{entry.id}</span>
                    <span className="w-8 h-[1px] bg-white/10" />
                    <span className="text-[10px] font-mono text-dust/40 tracking-[0.2em]">{entry.year}</span>
                  </div>
                  <h2 className="text-4xl md:text-6xl font-bold tracking-[0.1em] text-ash uppercase mb-6 leading-none">
                    {entry.title}
                  </h2>
                  <div className="flex flex-wrap gap-4 text-[9px] font-mono text-ice tracking-widest uppercase">
                    <span className="px-3 py-1 border border-ice/20 bg-ice/5 rounded-sm">{entry.type}</span>
                    <span className="px-3 py-1 border border-white/10 bg-white/5 rounded-sm">{entry.field}</span>
                  </div>
                </header>

                <section className="mb-16">
                  <p className="text-sm-archival leading-loose opacity-70 mb-12">
                    {entry.description}
                  </p>

                  <div className="space-y-8">
                    <h4 className="text-[10px] font-mono text-dust/40 tracking-[0.5em] uppercase border-b border-white/5 pb-4">Scope_Coverage</h4>
                    <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                      {Object.entries(entry.details).map(([key, value]) => (
                        <div key={key} className="flex items-center gap-3">
                          <div className={`w-1.5 h-1.5 rounded-full ${value ? 'bg-ice shadow-[0_0_8px_rgba(148,163,184,0.5)]' : 'bg-white/10'}`} />
                          <span className={`text-[10px] font-mono uppercase tracking-widest ${value ? 'text-ash' : 'text-dust/20'}`}>
                            {key}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>
              </div>

              <footer className="pt-12 border-t border-white/5">
                <a 
                  href={entry.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between w-full py-6 px-8 border border-ice/20 bg-ice/5 hover:bg-ice/10 transition-all duration-500"
                >
                  <div className="flex items-center gap-6">
                    <Globe className="w-5 h-5 text-ice" />
                    <div className="flex flex-col">
                      <span className="text-[11px] font-bold text-ash tracking-[0.2em] uppercase group-hover:text-white transition-colors">DECODE_LIVE_SYSTEM</span>
                      <span className="text-[9px] font-mono text-dust/40 group-hover:text-ice/60 transition-colors">PROTOCOL: HTTPS // {entry.url.replace('https://', '')}</span>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-ice group-hover:translate-x-2 transition-transform" />
                </a>
                
                <div className="mt-8 flex justify-between items-center text-[8px] font-mono text-dust/20 tracking-[0.4em] uppercase">
                  <span>VYNCE_CORE_VER_0.82f</span>
                  <span>ENCRYPTED_ARCHIVE</span>
                </div>
              </footer>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

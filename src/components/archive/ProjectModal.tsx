'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ArchiveEntry } from '@/data/archive';
import { X, Globe, ArrowRight, ShieldAlert, Cpu, Activity } from 'lucide-react';
import { SignalData } from '@/components/ui/SignalData';
import { GlitchText } from '@/components/ui/GlitchText';

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
          className="fixed inset-0 z-[200] flex items-center justify-center px-4 md:px-8 py-8 md:py-16"
        >
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-abyss/95 backdrop-blur-sm cursor-crosshair" 
            onClick={onClose} 
          />

          {/* Modal Container */}
          <motion.div
            initial={{ scale: 0.98, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.98, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-[1200px] h-full bg-void border border-white/5 overflow-hidden flex flex-col lg:flex-row shadow-[0_0_80px_rgba(0,0,0,1)]"
          >
            {/* Background Grid */}
            <div className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none" 
              style={{ backgroundImage: 'radial-gradient(#E5E7EB 0.5px, transparent 0.5px)', backgroundSize: '16px 16px' }} 
            />

            {/* Close Button */}
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 z-50 p-2 text-dust/40 hover:text-crimson transition-colors border border-white/5 bg-void/50 backdrop-blur-md"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Visual Side (Left) */}
            <div className="lg:w-3/5 h-[300px] lg:h-full relative overflow-hidden bg-abyss border-r border-white/5">
              <div className="absolute inset-0 z-10 bg-gradient-to-r from-void via-transparent to-transparent opacity-80" />
              
              <div className="w-full h-full relative group">
                <div className="absolute inset-0 flex items-center justify-center">
                   <GlitchText text="SIGNAL_RECOVERY_IN_PROGRESS" className="text-[8px] font-mono text-dust/10 tracking-[1em] uppercase" />
                </div>
                
                {/* Image Placeholder Shroud */}
                <div className="absolute inset-0 bg-void/20 mix-blend-multiply" />
                
                {/* Noise overlay */}
                <div className="absolute inset-0 z-20 opacity-5 pointer-events-none mix-blend-overlay">
                  <div className="w-full h-full bg-[url('data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3BaseFilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/baseFilter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E')]" />
                </div>
              </div>

              {/* Technical Telemetry Overlay */}
              <div className="absolute bottom-8 left-8 z-20 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-[0.5px] bg-crimson/50" />
                  <GlitchText text="ATMOSPHERIC_SCAN: LIVE" className="text-[8px] font-mono text-crimson tracking-[0.4em] uppercase" />
                </div>
                <div className="flex gap-1.5">
                   {[...Array(8)].map((_, i) => (
                     <div key={i} className="w-[3px] h-6 bg-white/5 relative">
                        <motion.div 
                          className="absolute bottom-0 left-0 w-full bg-ice/20"
                          animate={{ height: [ '10%', '70%', '30%', '90%', '20%' ][i % 5] }}
                          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: i * 0.1 }}
                        />
                     </div>
                   ))}
                </div>
              </div>
            </div>

            {/* Content Side (Right) */}
            <div className="lg:w-2/5 h-full overflow-y-auto custom-scrollbar p-10 md:p-14 lg:p-16 flex flex-col justify-between relative z-10">
              <div>
                <header className="mb-10">
                  <div className="flex items-center gap-2 mb-4">
                    <GlitchText text={entry.id} className="text-[9px] font-mono text-ice/40 tracking-tighter" />
                    <span className="w-6 h-[0.5px] bg-white/5" />
                    <span className="text-[8px] font-mono text-dust/20 tracking-[0.2em]">{entry.year}</span>
                  </div>
                  <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-ash uppercase mb-6 leading-none">
                    {entry.title}
                  </h2>
                  <div className="flex flex-wrap gap-2 text-[7px] font-mono text-ice/40 tracking-[0.2em] uppercase">
                    <span className="px-2 py-0.5 border border-white/5 bg-white/5">{entry.type}</span>
                    <span className="px-2 py-0.5 border border-white/5 bg-white/5">{entry.field}</span>
                  </div>
                </header>

                <section className="mb-12">
                  <p className="text-[10px] md:text-[11px] font-mono leading-relaxed opacity-40 mb-10 tracking-wide">
                    {entry.description}
                  </p>

                  <div className="space-y-6">
                    <div className="flex items-center gap-3 border-b border-white/5 pb-3">
                       <ShieldAlert className="w-3 h-3 text-crimson" />
                       <h4 className="text-[8px] font-mono text-dust/40 tracking-[0.4em] uppercase">Operational_Coverage</h4>
                    </div>
                    <div className="grid grid-cols-2 gap-y-3 gap-x-6">
                      {Object.entries(entry.details).map(([key, value]) => (
                        <div key={key} className="flex items-center gap-2.5">
                          <div className={`w-1 h-1 ${value ? 'bg-crimson shadow-[0_0_6px_rgba(127,29,29,0.8)]' : 'bg-white/5'}`} />
                          <span className={`text-[8px] font-mono uppercase tracking-[0.1em] ${value ? 'text-ash/60' : 'text-dust/10'}`}>
                            {key}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>
                
                <div className="grid grid-cols-2 gap-6 mb-12">
                   <SignalData label="NODE_STATE" value="0.8244" mutationSpeed={4000} />
                   <SignalData label="DATA_INTEGRITY" value="0.9991" mutationSpeed={5000} />
                </div>
              </div>

              <footer className="pt-8 border-t border-white/5">
                <a 
                  href={entry.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between w-full py-4 px-6 border border-white/5 bg-white/5 hover:bg-crimson/5 hover:border-crimson/20 transition-all duration-500"
                >
                  <div className="flex items-center gap-4">
                    <Globe className="w-4 h-4 text-ice/40 group-hover:text-crimson transition-colors" />
                    <div className="flex flex-col">
                      <span className="text-[10px] font-bold text-ash/80 tracking-[0.1em] uppercase group-hover:text-white transition-colors">DECODE_LIVE_NODE</span>
                      <span className="text-[7px] font-mono text-dust/20 group-hover:text-crimson/40 transition-colors">PROT: {entry.url.replace('https://', '')}</span>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-dust/20 group-hover:text-crimson group-hover:translate-x-1 transition-all" />
                </a>
                
                <div className="mt-6 flex justify-between items-center text-[7px] font-mono text-dust/10 tracking-[0.4em] uppercase">
                  <span>VYNCE_CORE_INFRA</span>
                  <div className="flex gap-2">
                     <Activity className="w-2 h-2" />
                     <Cpu className="w-2 h-2" />
                  </div>
                </div>
              </footer>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

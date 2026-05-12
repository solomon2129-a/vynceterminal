'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ArchiveEntry } from '@/data/archive';
import { X, Globe, ArrowRight } from 'lucide-react';
import { GlitchText } from '@/components/ui/GlitchText';
import { BreathAtmosphere, SignalAtmosphere, BlueprintAtmosphere, NetworkAtmosphere, Waveform } from './ProjectAtmosphere';

interface ProjectModalProps {
  entry: ArchiveEntry | null;
  isOpen: boolean;
  onClose: () => void;
}

const getAtmosphere = (type: string) => {
  switch (type) {
    case 'BREATH': return <BreathAtmosphere />;
    case 'SIGNAL': return <SignalAtmosphere />;
    case 'BLUEPRINT': return <BlueprintAtmosphere />;
    case 'NETWORK': return <NetworkAtmosphere />;
    default: return <SignalAtmosphere />;
  }
};

export const ProjectModal = ({ entry, isOpen, onClose }: ProjectModalProps) => {
  if (!entry) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] flex items-center justify-center px-0 md:px-12 lg:px-24 py-0 md:py-12 overflow-hidden bg-black/90"
        >
          <div 
            className="absolute inset-0 cursor-crosshair" 
            onClick={onClose} 
          />

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="relative w-full max-w-[1600px] h-full bg-black border border-white/10 overflow-hidden flex flex-col lg:flex-row"
          >
            {/* Close Button */}
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 z-50 p-3 text-white/40 hover:text-white transition-colors border border-white/10 bg-black group"
            >
              <X size={20} className="group-hover:rotate-90 transition-transform duration-300" />
            </button>

            {/* LEFT SIDE: Visual Feed */}
            <div className="lg:w-1/2 h-[400px] lg:h-full relative overflow-hidden bg-black border-b lg:border-b-0 lg:border-r border-white/10">
              <div className="absolute inset-0 opacity-40">
                {getAtmosphere(entry.personality.atmosphere)}
              </div>

              {/* Header Labels */}
              <div className="absolute top-8 left-8 z-30 flex flex-col gap-2">
                 <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-white animate-pulse" />
                    <GlitchText text={entry.personality.systemLabel} className="text-[10px] font-mono text-white tracking-[0.5em] uppercase" />
                 </div>
                 <span className="text-[8px] font-mono text-white/20 uppercase tracking-[0.2em]">OPERATIONAL_VISUAL_FEED // {entry.id}</span>
              </div>

              {/* Bottom Waveform */}
              <div className="absolute bottom-8 left-8 right-8 z-30 flex items-end justify-between">
                <div className="flex flex-col gap-3">
                   <span className="text-[8px] font-mono text-white/20 uppercase tracking-[0.3em]">SIGNAL_SYNC</span>
                   <Waveform color="#FFFFFF" speed={2} />
                </div>
              </div>
            </div>

            {/* RIGHT SIDE: Data Sheet */}
            <div className="lg:w-1/2 h-full overflow-y-auto p-12 md:p-16 lg:p-24 flex flex-col bg-black">
              <header className="mb-16 border-b border-white/10 pb-12">
                <div className="flex items-center justify-between mb-8">
                  <span className="text-[10px] font-mono text-white/40 tracking-widest uppercase italic">FRAGMENT_{entry.id.split('_')[1]}</span>
                  <span className="text-[10px] font-mono text-white/40 tracking-[0.2em]">{entry.year}</span>
                </div>
                
                <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white uppercase mb-8 leading-none">
                  {entry.title}
                </h2>
                
                <div className="flex flex-wrap gap-4">
                  {entry.personality.identity.map((tag, i) => (
                    <span key={i} className="text-[9px] font-mono text-white/30 uppercase tracking-widest px-3 py-1 border border-white/10">
                      {tag}
                    </span>
                  ))}
                </div>
              </header>

              <section className="flex-grow space-y-16">
                <div>
                  <span className="text-[10px] font-mono text-white/20 tracking-[0.5em] uppercase block mb-6">EXECUTIVE_SUMMARY</span>
                  <p className="text-base font-mono leading-relaxed text-white/60 uppercase tracking-wide">
                    {entry.description}
                  </p>
                </div>

                <div className="space-y-8">
                   <span className="text-[10px] font-mono text-white/20 tracking-[0.5em] uppercase block">OPERATIONAL_DETAILS</span>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {Object.entries(entry.details).map(([key, value]) => (
                        <div key={key} className="flex items-center justify-between border-b border-white/10 pb-4">
                          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/40">{key}</span>
                          <span className={`text-[10px] font-mono uppercase ${value ? 'text-white' : 'text-white/10'}`}>
                            {value ? '[ ACTIVE ]' : '[ NULL ]'}
                          </span>
                        </div>
                      ))}
                   </div>
                </div>
              </section>
              
              <footer className="mt-24">
                <a 
                  href={entry.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group relative flex items-center justify-between w-full py-8 px-10 border border-white bg-white text-black hover:bg-black hover:text-white transition-all duration-200"
                >
                  <div className="flex items-center gap-6 relative z-10">
                    <Globe className="w-6 h-6 animate-pulse" />
                    <div className="flex flex-col">
                      <span className="text-[14px] font-bold tracking-[0.2em] uppercase">DECODE_LIVE_NODE</span>
                      <span className="text-[8px] font-mono uppercase tracking-widest opacity-60">INITIALIZE_CONNECTION</span>
                    </div>
                  </div>
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-4 transition-transform duration-300 relative z-10" />
                </a>
              </footer>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

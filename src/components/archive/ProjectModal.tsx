'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ArchiveEntry } from '@/data/archive';
import { X, Globe, ArrowRight, ShieldAlert, Cpu, Activity, Database, Lock, Zap } from 'lucide-react';
import { SignalData } from '@/components/ui/SignalData';
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
          className="fixed inset-0 z-[200] flex items-center justify-center px-4 md:px-8 py-8 md:py-16 overflow-hidden"
        >
          {/* Backdrop: Darkens environment significantly */}
          <div 
            className="absolute inset-0 bg-black/98 backdrop-blur-md cursor-crosshair" 
            onClick={onClose} 
          />

          {/* Modal Container: Decrypting interface feel */}
          <motion.div
            initial={{ y: 20, opacity: 0, scale: 0.99 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 10, opacity: 0, scale: 0.99 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-[1300px] h-full bg-void border border-white/5 overflow-hidden flex flex-col lg:flex-row shadow-[0_0_100px_rgba(0,0,0,1)]"
          >
            {/* Background Grid */}
            <div className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none" 
              style={{ backgroundImage: 'radial-gradient(#E5E7EB 0.5px, transparent 0.5px)', backgroundSize: '16px 16px' }} 
            />

            {/* Close Button: Technical anchor */}
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 z-50 p-2 text-dust/20 hover:text-crimson transition-colors border border-white/5 bg-void/50 backdrop-blur-md group"
            >
              <X className="w-4 h-4 group-hover:rotate-90 transition-transform duration-500" />
            </button>

            {/* LEFT SIDE: Dynamic Atmosphere (Decryption Visualization) */}
            <div className="lg:w-7/12 h-[350px] lg:h-full relative overflow-hidden bg-abyss border-r border-white/5 group">
              <div className="absolute inset-0 z-10 bg-gradient-to-r from-void via-transparent to-transparent opacity-90" />
              
              <div className="w-full h-full relative">
                {/* Dynamic project atmosphere */}
                <div className="absolute inset-0 opacity-40 group-hover:opacity-60 transition-opacity duration-1000">
                  {getAtmosphere(entry.personality.atmosphere)}
                </div>

                {/* Scanline Pulse */}
                <motion.div 
                  className="absolute inset-0 z-20 pointer-events-none"
                  animate={{ background: ['linear-gradient(rgba(127,29,29,0) 0%, rgba(127,29,29,0.05) 50%, rgba(127,29,29,0) 100%)', 'linear-gradient(rgba(127,29,29,0) 100%, rgba(127,29,29,0.05) 50%, rgba(127,29,29,0) 0%)'] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                />

                {/* Header Labels */}
                <div className="absolute top-8 left-8 z-30 flex flex-col gap-2">
                   <div className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-crimson animate-pulse" />
                      <GlitchText text={entry.personality.systemLabel} className="text-[9px] font-mono text-crimson tracking-[0.4em] uppercase" />
                   </div>
                   <span className="text-[7px] font-mono text-dust/20 uppercase tracking-[0.2em]">OPERATIONAL_VISUAL_FEED // {entry.id}</span>
                </div>

                {/* BOTTOM WAVEFORM DISPLAY */}
                <div className="absolute bottom-8 left-8 right-8 z-30 flex items-end justify-between border-t border-white/5 pt-6">
                  <div className="flex flex-col gap-3">
                     <span className="text-[7px] font-mono text-dust/20 uppercase tracking-[0.3em]">Live_Signal_Sync</span>
                     <Waveform color={entry.personality.accentColor} speed={1.5} />
                  </div>
                  <div className="flex flex-col items-end gap-1">
                     <span className="text-[7px] font-mono text-dust/20 uppercase tracking-[0.3em]">Packet_Loss</span>
                     <span className="text-[9px] font-mono text-ash/40 tracking-widest">0.00042%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE: Classified File Layout (Operational Data) */}
            <div className="lg:w-5/12 h-full overflow-y-auto custom-scrollbar p-10 md:p-16 lg:p-20 flex flex-col justify-between relative z-10 bg-void/40 backdrop-blur-sm">
              <div>
                <header className="mb-12 border-b border-white/5 pb-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-1 border border-white/5">
                      <Lock className="w-3 h-3 text-crimson" />
                    </div>
                    <GlitchText text={`LOG_ID: ${entry.id}`} className="text-[10px] font-mono text-ice/40 tracking-tighter" />
                    <span className="text-[9px] font-mono text-dust/20 ml-auto tracking-[0.2em]">{entry.year}</span>
                  </div>
                  
                  <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-ash uppercase mb-6 leading-[0.85]">
                    {entry.title}
                  </h2>
                  
                  <div className="flex flex-wrap gap-2">
                    {entry.personality.identity.map((tag, i) => (
                      <span key={i} className="text-[7px] font-mono text-ash/30 uppercase tracking-widest px-2 py-0.5 border border-white/5 bg-white/5">
                        {tag}
                      </span>
                    ))}
                  </div>
                </header>

                <section className="mb-14 space-y-12">
                  <div>
                    <div className="flex items-center gap-2 mb-4 opacity-20">
                      <Database className="w-3 h-3" />
                      <span className="text-[8px] font-mono tracking-[0.3em] uppercase">Executive_Summary</span>
                    </div>
                    <p className="text-[11px] md:text-[12px] font-mono leading-relaxed opacity-50 tracking-wide text-ash">
                      {entry.description}
                    </p>
                  </div>

                  {/* Operational Coverage */}
                  <div className="space-y-6">
                    <div className="flex items-center gap-3 opacity-20">
                       <Zap className="w-3 h-3" />
                       <h4 className="text-[8px] font-mono tracking-[0.4em] uppercase">Operational_Coverage</h4>
                    </div>
                    <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                      {Object.entries(entry.details).map(([key, value]) => (
                        <div key={key} className="flex items-center justify-between border-b border-white/5 pb-1.5">
                          <span className={`text-[8px] font-mono uppercase tracking-[0.1em] ${value ? 'text-ash/60' : 'text-dust/10'}`}>
                            {key}
                          </span>
                          <div className={`w-1 h-1 ${value ? 'bg-crimson shadow-[0_0_6px_rgba(127,29,29,1)]' : 'bg-white/5'}`} />
                        </div>
                      ))}
                    </div>
                  </div>
                </section>
                
                {/* SYSTEM DIAGNOSTICS */}
                <div className="grid grid-cols-2 gap-x-12 gap-y-8 mb-16 border-t border-white/5 pt-10">
                   <SignalData label="NODE_STATE" value="0.8244" />
                   <SignalData label="SYNC_EPOCH" value="1715332800" />
                   <SignalData label="LOC_COORDS" value="51.5074, 0.1278" />
                   <SignalData label="SIGNAL_INT" value="0.9991" />
                </div>
              </div>

              <footer className="pt-8 mt-auto">
                <a 
                  href={entry.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group relative flex items-center justify-between w-full py-5 px-8 border border-crimson/20 bg-crimson/5 hover:bg-crimson/10 transition-all duration-500 overflow-hidden"
                >
                  {/* Glitch background for button */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700 bg-[url('data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3BaseFilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/baseFilter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E')]" />
                  
                  <div className="flex items-center gap-6 relative z-10">
                    <Globe className="w-5 h-5 text-crimson animate-pulse" />
                    <div className="flex flex-col">
                      <span className="text-[11px] font-bold text-white tracking-[0.2em] uppercase group-hover:tracking-[0.3em] transition-all duration-700">DECODE_LIVE_NODE</span>
                      <span className="text-[7px] font-mono text-crimson/40 tracking-widest uppercase">INITIALIZE_REALITY_SHIFT</span>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-crimson group-hover:translate-x-3 transition-transform duration-700 relative z-10" />
                </a>
                
                <div className="mt-8 flex justify-between items-center text-[7px] font-mono text-dust/10 tracking-[0.5em] uppercase">
                  <span>SYSTEM_VER_0.82F</span>
                  <div className="flex gap-4">
                     <Activity className="w-2.5 h-2.5" />
                     <Cpu className="w-2.5 h-2.5" />
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

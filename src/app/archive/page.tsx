'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { archiveEntries, ArchiveEntry } from '@/data/archive';
import { ArchiveCard } from '@/components/archive/ArchiveCard';
import { ProjectModal } from '@/components/archive/ProjectModal';
import { SignalData } from '@/components/ui/SignalData';
import { GlitchText } from '@/components/ui/GlitchText';

export default function ArchivePage() {
  const [selectedEntry, setSelectedEntry] = useState<ArchiveEntry | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEntryClick = (entry: ArchiveEntry) => {
    setSelectedEntry(entry);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen pt-24 md:pt-32 pb-20 md:pb-32 px-6 md:px-12 lg:px-20 bg-abyss relative overflow-hidden">
      {/* Background Grid Overlay */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
        style={{ backgroundImage: 'radial-gradient(#E5E7EB 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }} 
      />
      
      <div className="max-w-[1300px] mx-auto relative z-10">
        <header className="mb-20 md:mb-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="lg:col-span-9"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="flex items-center gap-2">
                 <div className="w-1 h-1 bg-crimson animate-pulse" />
                 <GlitchText text="SIGNAL_ARCHIVE_NODE_82F" className="text-[9px] font-mono text-crimson tracking-[0.4em]" />
              </div>
              <div className="w-12 h-[0.5px] bg-white/10" />
              <span className="text-[7px] font-mono text-dust/20 uppercase tracking-[0.2em]">Status: Authorized_Access_Only</span>
            </div>
            
            <h1 className="text-4xl md:text-7xl font-bold tracking-tighter text-ash uppercase leading-[0.8] mb-8">
              <span className="text-white/5 block mb-2">CREATIVE</span>
              OPERATING_ARCHIVE
            </h1>
            
            <div className="flex flex-col md:flex-row gap-8 md:gap-16">
              <p className="text-[10px] md:text-[11px] max-w-sm opacity-30 font-mono leading-relaxed tracking-wider border-l border-white/5 pl-6">
                [SYSTEM_LEVEL: CLASSIFIED] RECOVERED FRAGMENTS OF DIGITAL ENVIRONMENTS, MOTION STUDIES, AND EXPERIMENTAL INTERFACES DEPLOYED BY VYNCE.
              </p>
              <div className="flex flex-col gap-4">
                 <div className="flex items-center gap-3">
                    <span className="text-[7px] font-mono text-dust/20 uppercase">Sync_State:</span>
                    <span className="text-[9px] font-mono text-ice tracking-widest uppercase">Transmitting</span>
                 </div>
                 <div className="flex items-center gap-3">
                    <span className="text-[7px] font-mono text-dust/20 uppercase">Active_Link:</span>
                    <span className="text-[9px] font-mono text-crimson tracking-widest uppercase animate-pulse">Live</span>
                 </div>
              </div>
            </div>
          </motion.div>

          <div className="lg:col-span-3 flex flex-col gap-8 lg:items-end lg:text-right border-t lg:border-t-0 lg:border-r border-white/5 pt-8 lg:pt-0 lg:pr-10">
            <SignalData label="COORD_SYNC" value="51.5074, 0.1278" />
            <SignalData label="SIGNAL_INTEGRITY" value="0.9994" />
            <SignalData label="ARCHIVE_EPOCH" value="1715332800" />
          </div>
        </header>

        {/* Technical Sub-Header */}
        <div className="mb-12 flex flex-col md:flex-row md:items-center justify-between border-t border-b border-white/5 py-3 gap-4 bg-white/[0.01]">
          <div className="flex gap-12 px-4">
             <div className="flex flex-col gap-0.5">
                <span className="text-[7px] font-mono text-dust/20 uppercase tracking-[0.3em]">ACTIVE_FILES</span>
                <span className="text-[10px] font-mono text-ice tracking-widest">{archiveEntries.length.toString().padStart(2, '0')}</span>
             </div>
             <div className="flex flex-col gap-0.5">
                <span className="text-[7px] font-mono text-dust/20 uppercase tracking-[0.3em]">RECOVERY_RATE</span>
                <span className="text-[10px] font-mono text-crimson tracking-widest">98.42%</span>
             </div>
          </div>
          <div className="hidden md:flex items-center gap-6 px-4">
             <div className="flex gap-1">
                {[...Array(4)].map((_, i) => <div key={i} className="w-2 h-0.5 bg-white/10" />)}
             </div>
             <span className="text-[8px] font-mono text-dust/10 tracking-[0.6em] uppercase">SYSTEM_INTEGRITY_STABLE</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
          {archiveEntries.map((entry, i) => (
            <motion.div 
              key={entry.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className={i % 3 === 1 ? 'md:mt-16 lg:mt-12' : i % 3 === 2 ? 'md:mt-8 lg:mt-20' : ''}
            >
              <div className="relative">
                 {/* Index Marker */}
                 <span className="absolute -top-6 left-0 text-[7px] font-mono text-white/5 tracking-[0.5em] uppercase">Fragment_{entry.id.split('_')[1]}</span>
                 <ArchiveCard 
                   entry={entry} 
                   onClick={() => handleEntryClick(entry)} 
                 />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Modal */}
        <ProjectModal 
          entry={selectedEntry} 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)} 
        />
      </div>

      {/* Persistent Scanline Layer */}
      <div className="fixed inset-0 pointer-events-none z-[100] opacity-[0.01]" 
        style={{ backgroundImage: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06))', backgroundSize: '100% 2px, 3px 100%' }}
      />
    </div>
  );
}

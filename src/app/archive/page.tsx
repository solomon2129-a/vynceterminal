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
        <header className="mb-24 md:mb-32 grid grid-cols-1 lg:grid-cols-12 gap-16 items-end">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="lg:col-span-9"
          >
            <div className="flex items-center gap-6 mb-12">
              <div className="flex items-center gap-3">
                 <div className="w-1.5 h-1.5 bg-crimson animate-pulse" />
                 <GlitchText text="SIGNAL_ARCHIVE_NODE_82F" className="text-[11px] md:text-[12px] font-mono text-crimson tracking-[0.4em]" />
              </div>
              <div className="w-16 h-[0.5px] bg-white/20" />
              <span className="text-[8px] md:text-[10px] font-mono text-dust/30 uppercase tracking-[0.3em]">Status: Authorized_Access_Only</span>
            </div>
            
            <h1 className="text-5xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-ash uppercase leading-[0.8] mb-12">
              <span className="text-white/5 block mb-4">CREATIVE</span>
              OPERATING_ARCHIVE
            </h1>
            
            <div className="flex flex-col md:flex-row gap-12 md:gap-24">
              <p className="text-sm-archival max-w-sm opacity-40 font-mono border-l border-white/10 pl-8">
                [SYSTEM_LEVEL: CLASSIFIED] RECOVERED FRAGMENTS OF DIGITAL ENVIRONMENTS, MOTION STUDIES, AND EXPERIMENTAL INTERFACES DEPLOYED BY VYNCE.
              </p>
              <div className="flex flex-col gap-6">
                 <div className="flex items-center gap-4">
                    <span className="text-[8px] md:text-[10px] font-mono text-dust/30 uppercase tracking-widest">Sync_State:</span>
                    <span className="text-[11px] md:text-[12px] font-mono text-ice tracking-[0.2em] uppercase">Transmitting</span>
                 </div>
                 <div className="flex items-center gap-4">
                    <span className="text-[8px] md:text-[10px] font-mono text-dust/30 uppercase tracking-widest">Active_Link:</span>
                    <span className="text-[11px] md:text-[12px] font-mono text-crimson tracking-[0.3em] uppercase animate-pulse">Live_Feed</span>
                 </div>
              </div>
            </div>
          </motion.div>

          <div className="lg:col-span-3 flex flex-col gap-10 lg:items-end lg:text-right border-t lg:border-t-0 lg:border-r border-white/10 pt-12 lg:pt-0 lg:pr-12">
            <SignalData label="COORD_SYNC" value="51.5074, 0.1278" />
            <SignalData label="SIGNAL_INTEGRITY" value="0.9994" />
            <SignalData label="ARCHIVE_EPOCH" value="1715332800" />
          </div>
        </header>

        {/* Technical Sub-Header */}
        <div className="mb-16 flex flex-col md:flex-row md:items-center justify-between border-t border-b border-white/10 py-6 gap-8 bg-white/[0.02] backdrop-blur-md px-6 md:px-10">
          <div className="flex gap-16">
             <div className="flex flex-col gap-1">
                <span className="text-[8px] md:text-[10px] font-mono text-dust/30 uppercase tracking-[0.4em]">ACTIVE_FILES</span>
                <span className="text-[12px] md:text-[14px] font-mono text-ice tracking-widest">{archiveEntries.length.toString().padStart(2, '0')}</span>
             </div>
             <div className="flex flex-col gap-1">
                <span className="text-[8px] md:text-[10px] font-mono text-dust/30 uppercase tracking-[0.4em]">RECOVERY_RATE</span>
                <span className="text-[12px] md:text-[14px] font-mono text-crimson tracking-widest">98.42%</span>
             </div>
          </div>
          <div className="hidden md:flex items-center gap-8">
             <div className="flex gap-1.5">
                {[...Array(6)].map((_, i) => <div key={i} className="w-3 h-0.5 bg-white/20" />)}
             </div>
             <span className="text-[10px] md:text-[12px] font-mono text-dust/20 tracking-[0.8em] uppercase">SYSTEM_INTEGRITY_STABLE</span>
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

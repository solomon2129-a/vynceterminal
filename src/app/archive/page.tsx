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
        <header className="mb-20 md:mb-28 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="lg:col-span-8"
          >
            <div className="flex items-center gap-4 mb-6">
              <GlitchText text="NODE_ARC_082F" className="text-[9px] font-mono text-ice/40 tracking-[0.4em]" />
              <div className="w-10 h-[0.5px] bg-white/5" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-ash uppercase leading-[0.85] mb-6">
              CREATIVE<br/>
              <span className="text-white/20">OPERATING</span>_ARCHIVE
            </h1>
            <p className="text-[10px] md:text-[11px] max-w-lg opacity-30 font-mono leading-relaxed tracking-wider">
              [SYSTEM_LEVEL: CLASSIFIED] RECOVERED FRAGMENTS OF DIGITAL ENVIRONMENTS, MOTION STUDIES, AND EXPERIMENTAL INTERFACES DEPLOYED BY VYNCE. ALL DATA IS ENCRYPTED AND PERSISTENT.
            </p>
          </motion.div>

          <div className="lg:col-span-4 flex flex-col gap-6 lg:items-end lg:text-right border-l lg:border-l-0 lg:border-r border-white/5 pl-6 lg:pl-0 lg:pr-8 py-2">
            <SignalData label="COORD_SYNC" value="51.5074, 0.1278" />
            <SignalData label="NETWORK_LATENCY" value="0.0082" />
            <SignalData label="ARCHIVE_EPOCH" value="1715332800" />
          </div>
        </header>

        {/* Technical Sub-Header */}
        <div className="mb-12 flex flex-col md:flex-row md:items-center justify-between border-t border-b border-white/5 py-4 gap-4">
          <div className="flex gap-10">
             <div className="flex flex-col gap-0.5">
                <span className="text-[7px] font-mono text-dust/20 uppercase tracking-[0.3em]">ACTIVE_NODES</span>
                <span className="text-[9px] font-mono text-ice tracking-widest">{archiveEntries.length.toString().padStart(2, '0')}</span>
             </div>
             <div className="flex flex-col gap-0.5">
                <span className="text-[7px] font-mono text-dust/20 uppercase tracking-[0.3em]">ENCRYPTION_STATE</span>
                <span className="text-[9px] font-mono text-crimson tracking-widest">STABLE_SSL</span>
             </div>
          </div>
          <div className="hidden md:flex items-center gap-4">
             <span className="text-[8px] font-mono text-dust/10 tracking-[0.5em] uppercase">SYSTEM_INTEGRITY_VERIFIED</span>
             <div className="w-1 h-1 rounded-full bg-crimson animate-pulse" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {archiveEntries.map((entry, i) => (
            <motion.div 
              key={entry.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className={i % 3 === 1 ? 'md:mt-12 lg:mt-8' : ''}
            >
              <ArchiveCard 
                entry={entry} 
                onClick={() => handleEntryClick(entry)} 
              />
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

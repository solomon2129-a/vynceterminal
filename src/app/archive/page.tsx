'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { archiveEntries, ArchiveEntry } from '@/data/archive';
import { ArchiveCard } from '@/components/archive/ArchiveCard';
import { ProjectModal } from '@/components/archive/ProjectModal';
import { GlitchText } from '@/components/ui/GlitchText';

export default function ArchivePage() {
  const [selectedEntry, setSelectedEntry] = useState<ArchiveEntry | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEntryClick = (entry: ArchiveEntry) => {
    setSelectedEntry(entry);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen pt-32 pb-32 px-6 md:px-12 lg:px-24 bg-black relative overflow-hidden">
      
      <div className="max-w-[1800px] mx-auto relative z-10">
        <header className="mb-24">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <span className="terminal-text-xs text-white/40">{'>'} ls /vynce/archive</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white uppercase mb-12">
              OPERATING_ARCHIVE
            </h1>
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              <div className="md:col-span-6 lg:col-span-5">
                <p className="terminal-text-sm text-white/40 leading-relaxed uppercase border-l border-terminal-border pl-6">
                  [CLASSIFIED] RECOVERED FRAGMENTS OF DIGITAL ENVIRONMENTS, MOTION STUDIES, AND EXPERIMENTAL INTERFACES DEPLOYED BY VYNCE.
                </p>
              </div>
              <div className="md:col-span-6 md:col-start-8 flex flex-col gap-4 md:items-end md:text-right">
                 <div className="flex flex-col gap-1">
                    <span className="terminal-text-xs text-white/20">SESSION_SYNC</span>
                    <span className="terminal-text-sm text-white uppercase">ACTIVE_TRANSMISSION</span>
                 </div>
                 <div className="flex flex-col gap-1">
                    <span className="terminal-text-xs text-white/20">FILES_RECOVERED</span>
                    <span className="terminal-text-sm text-white uppercase">{archiveEntries.length.toString().padStart(2, '0')}_NODES</span>
                 </div>
              </div>
            </div>
          </motion.div>
        </header>

        {/* Technical Sub-Header Strip */}
        <div className="mb-24 flex flex-col md:flex-row md:items-center justify-between border-t border-b border-white/10 py-8 gap-8">
          <div className="flex gap-16">
             <div className="flex flex-col gap-2">
                <span className="text-[9px] font-mono text-white/20 uppercase tracking-[0.4em]">LATENCY</span>
                <span className="text-[12px] font-mono text-white tracking-widest">0.42ms</span>
             </div>
             <div className="flex flex-col gap-2">
                <span className="text-[9px] font-mono text-white/20 uppercase tracking-[0.4em]">INTEGRITY</span>
                <span className="text-[12px] font-mono text-white tracking-widest">99.98%</span>
             </div>
          </div>
          <div className="hidden md:flex items-center gap-12">
             <div className="flex gap-2">
                {[...Array(8)].map((_, i) => <div key={i} className="w-4 h-[1px] bg-white/20" />)}
             </div>
             <span className="text-[10px] font-mono text-white/20 tracking-[0.5em] uppercase italic">SYSTEM_STABLE</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
          {archiveEntries.map((entry, i) => (
            <div key={entry.id} className="border-t border-l border-white/10 last:border-r even:border-r lg:even:border-r-0 lg:[&:nth-child(3n)]:border-r border-b">
              <ArchiveCard 
                entry={entry} 
                onClick={() => handleEntryClick(entry)} 
              />
            </div>
          ))}
        </div>

        <ProjectModal 
          entry={selectedEntry} 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)} 
        />
      </div>
    </div>
  );
}

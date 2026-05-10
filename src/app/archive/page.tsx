'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { archiveEntries, ArchiveEntry } from '@/data/archive';
import { ArchiveCard } from '@/components/archive/ArchiveCard';
import { ProjectModal } from '@/components/archive/ProjectModal';

export default function ArchivePage() {
  const [selectedEntry, setSelectedEntry] = useState<ArchiveEntry | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEntryClick = (entry: ArchiveEntry) => {
    setSelectedEntry(entry);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen pt-32 md:pt-48 pb-24 md:pb-40 px-6 md:px-12 lg:px-24 bg-abyss">
      <div className="max-w-[1400px] mx-auto">
        <header className="mb-24 md:mb-32">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <div className="flex items-center gap-6 mb-8">
              <span className="text-xs-technical text-ice/60">SYS_ARCHIVE_NODE_82F</span>
              <div className="w-12 h-[1px] bg-white/5" />
            </div>
            <h1 className="text-5xl md:text-8xl font-bold tracking-[0.1em] text-ash uppercase leading-tight mb-8">
              OPERATIONAL<br/>
              ARCHIVE
            </h1>
            <p className="text-sm-archival max-w-2xl opacity-40 font-mono">
              A CLASSIFIED COLLECTION OF REAL DIGITAL ENVIRONMENTS AND CREATIVE SYSTEMS DEPLOYED ACROSS THE NETWORK. EACH FRAGMENT REPRESENTS A COMPLETE ARCHITECTURAL BUILD: BRANDING, UI/UX, AND ATMOSPHERIC IDENTITY.
            </p>
          </motion.div>
        </header>

        {/* Technical Filter Bar (Simplified/Minimal) */}
        <div className="mb-16 flex items-center justify-between border-b border-white/5 pb-8">
          <div className="flex gap-12">
             <div className="flex flex-col gap-1">
                <span className="text-[8px] font-mono text-dust/20 uppercase tracking-[0.2em]">Active_Nodes</span>
                <span className="text-[10px] font-mono text-ice tracking-widest">{archiveEntries.length.toString().padStart(2, '0')}</span>
             </div>
             <div className="flex flex-col gap-1">
                <span className="text-[8px] font-mono text-dust/20 uppercase tracking-[0.2em]">Sync_Status</span>
                <span className="text-[10px] font-mono text-ash tracking-widest">ENCRYPTED</span>
             </div>
          </div>
          <div className="hidden md:block">
             <span className="text-[9px] font-mono text-dust/20 tracking-[0.5em] uppercase">VERIFYING_INTEGRITY...</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          {archiveEntries.map((entry) => (
            <ArchiveCard 
              key={entry.id} 
              entry={entry} 
              onClick={() => handleEntryClick(entry)} 
            />
          ))}
        </div>

        {/* Project Modal */}
        <ProjectModal 
          entry={selectedEntry} 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)} 
        />
      </div>

      {/* Atmospheric Background Label */}
      <div className="fixed right-10 top-1/2 -translate-y-1/2 hidden lg:block opacity-5 pointer-events-none">
        <span className="text-[150px] font-bold text-white tracking-tighter uppercase [writing-mode:vertical-lr] rotate-180">
          ARCHIVE
        </span>
      </div>
    </div>
  );
}

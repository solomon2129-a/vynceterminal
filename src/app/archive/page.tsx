'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Filter, Archive as ArchiveIcon, Calendar, Tag, ChevronRight } from 'lucide-react';

const categories = ['ALL', 'MOTION', 'SYSTEMS', 'VISUALS', 'RESEARCH'];

const artifacts = [
  { id: 'ART_001', title: 'KINETIC_SCULPTURE', category: 'MOTION', date: '2025.04.12', ver: 'v1.2' },
  { id: 'ART_002', title: 'NEURAL_GRID_SYS', category: 'SYSTEMS', date: '2025.03.20', ver: 'v2.0' },
  { id: 'ART_003', title: 'FROST_INTERFACE', category: 'VISUALS', date: '2025.02.15', ver: 'v0.9' },
  { id: 'ART_004', title: 'ENTROPY_DATA_VIZ', category: 'RESEARCH', date: '2025.01.05', ver: 'v1.0' },
  { id: 'ART_005', title: 'REACTIVE_BUFFER', category: 'SYSTEMS', date: '2024.12.18', ver: 'v3.1' },
  { id: 'ART_006', title: 'SIGNAL_GHOSTING', category: 'MOTION', date: '2024.11.30', ver: 'v1.5' },
];

export default function ArchivePage() {
  const [activeFilter, setActiveFilter] = useState('ALL');

  const filteredArtifacts = activeFilter === 'ALL' 
    ? artifacts 
    : artifacts.filter(a => a.category === activeFilter);

  return (
    <div className="min-h-screen pt-48 pb-40 px-12 md:px-24">
      <div className="max-w-[1400px] mx-auto">
        <header className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-12">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="text-xs-technical text-ghost">LOG_ARCHIVE_82f</span>
              <div className="w-12 h-[1px] bg-matte" />
            </div>
            <h1 className="text-5xl font-bold tracking-[0.2em] text-ash uppercase">THE_ARCHIVE</h1>
          </motion.div>

          <div className="flex flex-wrap gap-4 border-b border-matte pb-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`text-[9px] font-mono tracking-[0.3em] px-4 py-2 transition-all duration-500 ${
                  activeFilter === cat 
                  ? 'text-pulse' 
                  : 'text-dust/30 hover:text-ash'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <AnimatePresence mode="popLayout">
            {filteredArtifacts.map((artifact) => (
              <ArtifactFragment key={artifact.id} artifact={artifact} />
            ))}
          </AnimatePresence>
        </div>

        {filteredArtifacts.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="py-40 text-center border-matte"
          >
            <span className="text-xs-technical text-dust/20 uppercase tracking-[0.5em]">no_signal_recovered</span>
          </motion.div>
        )}
      </div>
    </div>
  );
}

function ArtifactFragment({ artifact }: any) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="group glass-matte p-10 relative overflow-hidden flex flex-col h-72 justify-between hover:border-ash/20 transition-all duration-700 cursor-pointer"
    >
      <div className="flex justify-between items-start">
        <span className="text-[10px] font-mono text-pulse/40 tracking-tighter">{artifact.id}</span>
        <span className="text-[9px] uppercase tracking-[0.3em] text-dust/30 group-hover:text-ash transition-colors">{artifact.category}</span>
      </div>

      <div>
        <h3 className="text-2xl font-bold tracking-[0.1em] text-ash mb-4 group-hover:text-pulse transition-colors uppercase">
          {artifact.title}
        </h3>
        <div className="flex items-center gap-6 text-[9px] text-dust/30 font-mono tracking-widest">
          <div className="flex items-center gap-2">
            <Calendar className="w-3 h-3" />
            <span>{artifact.date}</span>
          </div>
          <span>VER: {artifact.ver}</span>
        </div>
      </div>

      <div className="flex items-center gap-2 text-[10px] text-dust/20 group-hover:text-ash transition-colors pt-4 border-t border-matte mt-8">
        <span>LOAD_FRAGMENT</span>
        <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
      </div>

      {/* Atmospheric drift effect inside card */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-pulse/5 blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
    </motion.div>
  );
}

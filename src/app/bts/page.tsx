'use client';

import { motion } from 'framer-motion';

const fragments = [
  {
    type: 'note',
    content: 'entropy_is_not_the_enemy // it_is_the_raw_material. we_guide_the_decay_to_find_new_order.',
    tag: 'PHILOSOPHY_01',
  },
  {
    type: 'research',
    title: 'GRAIN_STUDY',
    content: 'observing_warmth_in_noise. digital_systems_require_imperfection_to_feel_human.',
    tag: 'RESEARCH_04',
  },
  {
    type: 'insight',
    content: 'design_is_the_bridge_between_human_emotion_and_machine_logic.',
    tag: 'INSIGHT_12',
  },
  {
    type: 'dev',
    title: 'REACTIVE_BUFFER_V0.3',
    content: 'ui_should_breathe. responding_to_user_presence_without_instruction.',
    tag: 'DEV_LOG_82',
  },
  {
    type: 'note',
    content: 'why_#000000? pure_black_is_a_void. abyss_black_holds_the_shadow.',
    tag: 'COLOR_TH_01',
  },
  {
    type: 'research',
    title: 'MOTION_DRIFT',
    content: 'decelerating_cycle_to_12s. slow_expensive_ghost-like_transitions.',
    tag: 'OPT_LOG_09',
  },
];

export default function BTSPage() {
  return (
    <div className="min-h-screen pt-32 pb-32 px-6 md:px-12 lg:px-24 bg-black relative overflow-hidden">
      <div className="max-w-[1800px] mx-auto">
        <header className="mb-24">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <span className="terminal-text-xs text-white/40">{'>'} tail -f /vynce/process.log</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white uppercase mb-12">
              THE_PROCESS
            </h1>
            
            <p className="terminal-text-sm text-white/40 leading-relaxed uppercase border-l border-terminal-border pl-6 max-w-lg">
              UNFILTERED_FRAGMENTS_FROM_THE_LAB. THIS_IS_THE_RESIDUE_OF_THE_VYNCE_SYSTEM.
              WE_DO_NOT_CLEAN_UP_THE_SIGNAL.
            </p>
          </motion.div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-white/10">
          {fragments.map((fragment, index) => (
            <ThoughtFragment key={index} fragment={fragment} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

interface ThoughtFragmentProps {
  fragment: {
    tag: string;
    title?: string;
    content: string;
  };
  index: number;
}

function ThoughtFragment({ fragment, index }: ThoughtFragmentProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: index * 0.05 }}
      className="p-12 md:p-16 border-r border-b border-white/10 group hover:bg-white hover:text-black transition-colors duration-100"
    >
      <div className="flex justify-between items-center mb-12">
        <span className="text-[10px] font-mono uppercase tracking-[0.4em] opacity-40 group-hover:opacity-100">
          {fragment.tag}
        </span>
        <div className="w-1.5 h-1.5 bg-current animate-pulse" />
      </div>

      <div className="space-y-8">
        {fragment.title && <h3 className="font-bold tracking-tighter uppercase text-xl leading-none">{fragment.title}</h3>}
        <p className={`text-sm font-mono leading-relaxed uppercase tracking-wide group-hover:italic`}>
          {fragment.content}
        </p>
      </div>

      <div className="mt-16 pt-6 border-t border-current opacity-10 group-hover:opacity-100 transition-opacity flex justify-between items-center">
        <span className="text-[8px] font-mono tracking-widest uppercase">system_residue</span>
        <span className="text-[8px] font-mono tracking-widest uppercase">log_ptr_{index.toString().padStart(2, '0')}</span>
      </div>
    </motion.div>
  );
}

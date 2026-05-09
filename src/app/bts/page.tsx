'use client';

import { motion } from 'framer-motion';
import { MessageSquare, Image as ImageIcon, Quote, Lightbulb, Share2 } from 'lucide-react';

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
    content: 'why_#080808? pure_black_is_a_void. abyss_black_holds_the_shadow.',
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
    <div className="min-h-screen pt-48 pb-40 px-12 md:px-24">
      <div className="max-w-[1400px] mx-auto">
        <header className="mb-32 max-w-2xl">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="text-xs-technical text-pulse animate-pulse">RAW_THOUGHT_BUFFER // UNFILTERED</span>
              <div className="w-12 h-[1px] bg-matte" />
            </div>
            <h1 className="text-5xl font-bold tracking-[0.2em] text-ash mb-8 uppercase">THE_PROCESS</h1>
            <p className="text-sm-archival max-w-lg italic">
              unfiltered_fragments_from_the_lab. this_is_the_residue_of_the_vynce_system.
            </p>
          </motion.div>
        </header>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-12 space-y-12">
          {fragments.map((fragment, index) => (
            <ThoughtFragment key={index} fragment={fragment} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

function ThoughtFragment({ fragment, index }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 1 }}
      className="break-inside-avoid glass-matte p-10 group hover:border-ash/20 transition-all duration-700"
    >
      <div className="flex justify-between items-center mb-10">
        <span className="text-[9px] font-mono uppercase tracking-[0.3em] text-dust/30 group-hover:text-pulse transition-colors">
          {fragment.tag}
        </span>
        <Share2 className="w-3 h-3 text-dust/20 group-hover:text-ash transition-colors" />
      </div>

      <div className="space-y-6">
        {fragment.title && <h3 className="text-ash font-bold tracking-[0.2em] uppercase text-xs">{fragment.title}</h3>}
        <p className={`text-sm-archival leading-relaxed ${fragment.type === 'insight' ? 'text-ash italic' : 'text-dust'}`}>
          {fragment.content}
        </p>
      </div>

      <div className="mt-12 pt-4 border-t border-matte flex justify-between items-center">
        <span className="text-[8px] font-mono text-dust/20 tracking-widest uppercase">system_residue</span>
        <div className="w-1.5 h-1.5 rounded-full bg-matte group-hover:bg-pulse transition-colors" />
      </div>
    </motion.div>
  );
}

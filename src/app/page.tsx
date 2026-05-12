'use client';

import { Hero } from "@/components/layout/Hero";
import { VynceButton } from "@/components/ui/VynceButton";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="flex flex-col bg-black">
      <Hero />

      {/* System Observation */}
      <section className="py-24 px-4 md:px-8 border-t border-terminal-border relative overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-4">
             <div className="flex flex-col gap-4">
                <span className="terminal-text-xs text-white/20">/vynce/logs/obs_001.log</span>
                <div className="w-full h-[1px] bg-terminal-border" />
                <div className="flex gap-2">
                   {[...Array(6)].map((_, i) => <div key={i} className="w-1.5 h-1.5 border border-white/20" />)}
                </div>
             </div>
          </div>
          <div className="md:col-span-8">
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-white uppercase mb-8 leading-tight">
              THE_INTERFACE_IS_A_LIVING_TISSUE_RESPONDING_TO_THE_ENTROPY_OF_INTERACTION.
            </h2>
            <p className="terminal-text-sm text-white/40 max-w-2xl leading-relaxed uppercase">
              [ANALYSIS] WE DO NOT BUILD PRODUCTS. WE OBSERVE DRIFT. EVERY PIXEL IS A DATA POINT. EVERY INTERACTION IS A REVELATION. 
              THE SYSTEM IS ALWAYS WATCHING. ALWAYS EVOLVING. ALWAYS UNSTABLE.
            </p>
          </div>
        </div>
      </section>

      {/* Modular Previews - Brutalist Grid */}
      <section className="border-t border-terminal-border">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <PreviewFragment 
            id="01"
            title="SYSTEMS_LAB" 
            tag="ACTIVE" 
            description="presence-reactive particle test // v0.3 unstable. exploring the friction between motion and machine logic."
            href="/lab"
          />
          <PreviewFragment 
            id="02"
            title="THE_ARCHIVE" 
            tag="RECOVERED" 
            description="historical_signal_log. a collection of stable artifacts recovered from past digital operations."
            href="/archive"
            borderLeft
          />
        </div>
      </section>
      
      {/* Technical Footer Section */}
      <section className="py-32 px-4 md:px-8 border-t border-terminal-border">
        <div className="flex flex-col items-center text-center">
          <div className="mb-12">
            <span className="terminal-text-xs text-white/20 block mb-4">ESTABLISHING_HANDSHAKE...</span>
            <div className="w-2 h-2 bg-white mx-auto animate-pulse" />
          </div>
          
          <h3 className="text-3xl md:text-5xl font-bold tracking-tight uppercase text-white mb-12">
            ESTABLISH_SIGNAL
          </h3>
          
          <div className="max-w-md mb-12">
            <p className="terminal-text-xs text-white/30 leading-loose">
              lines_are_monitored. secure transmissions only. 
              if you are reading this, the system has already detected your presence.
            </p>
          </div>
          
          <VynceButton href="/contact">INIT_TRANS</VynceButton>
        </div>
      </section>
    </div>
  );
}

function PreviewFragment({ id, title, tag, description, href, borderLeft }: any) {
  return (
    <motion.a 
      href={href} 
      className={`group relative block p-8 md:p-16 border-b md:border-b-0 border-terminal-border transition-colors duration-100 hover:bg-white hover:text-black ${borderLeft ? 'md:border-l' : ''}`}
    >
      <div className="flex justify-between items-start mb-16">
        <span className="terminal-text-xs opacity-40 group-hover:opacity-100">./fragment_{id}</span>
        <span className="terminal-text-xs px-2 py-0.5 border border-current opacity-40 group-hover:opacity-100">
          {tag}
        </span>
      </div>
      
      <h3 className="terminal-text-lg mb-6 leading-none uppercase">
        {title}
      </h3>
      <p className="terminal-text-sm mb-12 max-w-sm opacity-40 group-hover:opacity-100 leading-relaxed uppercase">
        {description}
      </p>
      
      <div className="flex items-center gap-4 terminal-text-xs opacity-20 group-hover:opacity-100 transition-all">
        <span className="tracking-[0.2em]">ACCESS_NODE</span>
        <div className="flex-grow h-[1px] bg-current" />
      </div>
    </motion.a>
  );
}

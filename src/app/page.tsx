'use client';

import { Hero } from "@/components/layout/Hero";
import { VynceButton } from "@/components/ui/VynceButton";

export default function Home() {
  return (
    <div className="flex flex-col bg-abyss">
      <Hero />

      {/* System Observation */}
      <section className="py-24 md:py-40 px-6 md:px-12 lg:px-24 flex justify-start md:justify-end bg-abyss border-t border-white/5">

        <div className="max-w-xl space-y-8 md:space-y-12">
          <div className="flex items-center gap-4">
            <span className="text-[9px] md:text-xs-technical text-dust/20">OBS_LOG_001</span>
            <div className="w-6 md:w-8 h-[1px] bg-white/10" />
          </div>
          <p className="text-base md:text-lg lg:text-xl leading-relaxed text-ash font-light tracking-wide italic opacity-80">
            "we_do_not_build_products // we_observe_drift. 
            the_interface_is_a_living_tissue_responding_to_the_entropy_of_interaction."
          </p>
          <div className="pt-4 md:pt-8">
            <span className="text-[9px] md:text-[10px] font-mono text-dust/40 tracking-[0.3em] uppercase">
              // archival_note_by_vynce_system
            </span>
          </div>
        </div>
      </section>

      {/* Modular Previews */}
      <section className="py-24 md:py-40 px-6 md:px-12 lg:px-24 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 max-w-[1600px] mx-auto w-full">
        <div className="md:col-span-6 lg:col-span-5 md:mt-24">
          <PreviewFragment 
            id="01"
            title="SYSTEMS_LAB" 
            tag="ACTIVE_TESTING" 
            description="presence-reactive particle test // v0.3 unstable. exploring the friction between motion and machine logic."
            href="/lab"
            color="ice"
          />
        </div>
        <div className="md:col-span-6 lg:col-span-5 md:col-start-7 lg:col-start-8">
          <PreviewFragment 
            id="02"
            title="THE_ARCHIVE" 
            tag="RECOVERED_DATA" 
            description="historical_signal_log. a collection of stable artifacts recovered from past digital operations."
            href="/archive"
            color="ghost"
          />
        </div>
      </section>
      
      {/* Technical Footer */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-24 border-t border-matte flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
        <div className="max-w-sm">
          <span className="text-[9px] md:text-xs-technical text-dust/40 mb-4 block">Connection_State</span>
          <p className="text-[11px] md:text-sm-archival opacity-70">
            lines_are_monitored. establish a secure transmission through our terminal interface.
          </p>
        </div>
        <VynceButton href="/contact" variant="secondary" className="w-full sm:w-auto">INIT_HANDSHAKE</VynceButton>
      </section>
    </div>
  );
}

function PreviewFragment({ id, title, tag, description, href, color }: any) {
  return (
    <a href={href} className="group relative block glass-matte p-6 md:p-10 transition-all duration-700 border-white/5 hover:border-ice/20">
      <div className="flex justify-between items-start mb-12 md:mb-16">
        <span className="text-[9px] md:text-[10px] font-mono text-dust/30 tracking-tighter">REF_{id}</span>
        <span className={`text-[8px] md:text-[9px] uppercase tracking-[0.3em] px-2 py-1 border border-current opacity-20 group-hover:opacity-100 transition-opacity ${color === 'ice' ? 'text-ice' : 'text-ghost'}`}>
          {tag}
        </span>
      </div>
      
      <h3 className="text-xl md:text-2xl font-bold tracking-[0.2em] text-ash mb-4 md:mb-6 group-hover:text-ice transition-colors duration-500">
        {title}
      </h3>
      <p className="text-[10px] md:text-sm-archival mb-6 md:mb-8 max-w-xs opacity-50">
        {description}
      </p>
      
      <div className="flex items-center gap-4 text-[9px] md:text-xs-technical text-dust/20 group-hover:text-ash transition-colors">
        <span>VIEW_FRAGMENT</span>
        <div className="w-6 md:w-8 h-[1px] bg-current" />
      </div>
    </a>
  );
}

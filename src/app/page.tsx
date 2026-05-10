'use client';

import { Hero } from "@/components/layout/Hero";
import { VynceButton } from "@/components/ui/VynceButton";

export default function Home() {
  return (
    <div className="flex flex-col bg-abyss">
      <Hero />

      {/* System Observation */}
      <section className="py-24 md:py-48 px-6 md:px-12 lg:px-24 flex justify-start md:justify-end bg-abyss border-t border-white/10 text-pretty">

        <div className="max-w-2xl space-y-10 md:space-y-16">
          <div className="flex items-center gap-6">
            <span className="text-xs-technical">OBS_LOG_001</span>
            <div className="w-10 md:w-16 h-[0.5px] bg-white/20" />
          </div>
          <p className="text-lg md:text-2xl lg:text-3xl leading-relaxed text-ash font-light tracking-wide italic opacity-70">
            "we_do_not_build_products // we_observe_drift. 
            the_interface_is_a_living_tissue_responding_to_the_entropy_of_interaction."
          </p>
          <div className="pt-6 md:pt-10">
            <span className="text-[10px] md:text-[12px] font-mono text-dust/30 tracking-[0.4em] uppercase">
              // archival_note_by_vynce_system
            </span>
          </div>
        </div>
      </section>

      {/* Modular Previews */}
      <section className="py-32 md:py-56 px-6 md:px-12 lg:px-24 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20 max-w-[1600px] mx-auto w-full">
        <div className="md:col-span-6 lg:col-span-5 md:mt-32">
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
      <section className="py-24 md:py-48 px-6 md:px-12 lg:px-24 border-t border-white/10 flex flex-col md:flex-row justify-between items-start md:items-end gap-16">
        <div className="max-w-md">
          <span className="text-xs-technical mb-6 block opacity-40">Connection_State</span>
          <p className="text-sm-archival opacity-60">
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
    <a href={href} className="group relative block glass-matte p-10 md:p-14 transition-all duration-1000 border-white/10 hover:border-ice/30">
      <div className="flex justify-between items-start mb-14 md:mb-20">
        <span className="text-[11px] md:text-[13px] font-mono text-dust/40 tracking-tighter">REF_{id}</span>
        <span className={`text-[10px] md:text-[11px] uppercase tracking-[0.4em] px-3 py-1 border border-current opacity-30 group-hover:opacity-100 transition-opacity ${color === 'ice' ? 'text-ice' : 'text-ghost'}`}>
          {tag}
        </span>
      </div>
      
      <h3 className="text-2xl md:text-4xl font-bold tracking-tighter text-ash mb-6 md:mb-10 group-hover:text-ice transition-colors duration-700 leading-none uppercase">
        {title}
      </h3>
      <p className="text-sm-archival mb-8 md:mb-12 max-w-sm opacity-50">
        {description}
      </p>
      
      <div className="flex items-center gap-6 text-xs-technical opacity-20 group-hover:opacity-80 group-hover:text-ash transition-all duration-700">
        <span className="tracking-[0.8em]">VIEW_FRAGMENT</span>
        <div className="w-10 md:w-16 h-[0.5px] bg-current" />
      </div>
    </a>
  );
}

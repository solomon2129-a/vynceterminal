'use client';

import { motion } from 'framer-motion';
import { Activity, Zap, Cpu, Terminal } from 'lucide-react';

export default function LabPage() {
  return (
    <div className="min-h-screen pt-32 md:pt-48 pb-24 md:pb-40 px-6 md:px-12 lg:px-24">
      <div className="max-w-[1400px] mx-auto">
        
        <header className="mb-16 md:mb-32 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="flex items-center gap-4 mb-4 md:mb-6">
              <span className="text-[9px] md:text-xs-technical text-pulse">PHASE_01 // INSTABILITY_TESTS</span>
              <div className="w-8 md:w-12 h-[1px] bg-matte" />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold tracking-[0.2em] text-ash mb-6 md:mb-8 uppercase">THE_LAB</h1>
            <p className="text-[11px] md:text-sm-archival max-w-lg italic opacity-80">
              a controlled environment for visual breakdown and system reconstruction. 
              observing the friction between machine logic and human signal drift.
            </p>
          </motion.div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          <div className="lg:col-span-8 flex flex-col gap-8 md:gap-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              <LabModule 
                id="0x01" 
                title="MOTION_ENTROPY" 
                status="STABLE" 
                icon={<Zap className="w-3 h-3" />}
                color="pulse"
              />
              <LabModule 
                id="0x02" 
                title="SIGNAL_BUFFER" 
                status="RECALIBRATING" 
                icon={<Activity className="w-3 h-3" />}
                color="ghost"
              />
            </div>
            
            <div className="md:w-2/3 lg:ml-auto">
              <LabModule 
                id="0x03" 
                title="INTERFACE_DECAY" 
                status="ANALYZING" 
                icon={<Cpu className="w-3 h-3" />}
                color="ash"
              />
            </div>
          </div>

          <aside className="lg:col-span-4 mt-8 lg:mt-32">
            <div className="border-l border-matte pl-6 md:pl-12 py-4 md:py-8">
              <div className="flex justify-between items-center mb-8 md:mb-12">
                <span className="text-[9px] md:text-xs-technical text-dust/40">SYSTEM_FEED</span>
                <div className="w-1.5 h-1.5 rounded-full bg-pulse animate-pulse" />
              </div>
              
              <div className="space-y-4 md:space-y-6 font-mono text-[8px] md:text-[9px] tracking-[0.2em] text-dust/60">
                <LogLine time="12:00:01" msg="INIT_CORE" />
                <LogLine time="12:00:04" msg="MAPPING_ARRAYS" />
                <LogLine time="12:00:09" msg="SIGNAL_LOST" />
                <LogLine time="12:00:10" msg="RECOVERY_PROCEDURE" />
                <LogLine time="12:00:15" msg="STABLE_STATE" />
              </div>

              <div className="mt-12 md:mt-20 pt-8 md:pt-12 border-t border-matte">
                <div className="grid grid-cols-2 gap-4 md:gap-8 text-[8px] md:text-[9px] font-mono text-dust/30">
                  <div className="space-y-1 md:space-y-2">
                    <p>CPU_LOAD: 12%</p>
                    <p>MEM_USED: 4.1GB</p>
                  </div>
                  <div className="space-y-1 md:space-y-2">
                    <p>SIGNAL: -42db</p>
                    <p>TEMP: 32°C</p>
                  </div>
                </div>
              </div>
            </div>
          </aside>

        </div>
      </div>
    </div>
  );
}

function LabModule({ id, title, status, icon, color }: any) {
  return (
    <motion.div 
      whileHover={{ y: -2 }}
      className="group relative glass-matte p-6 md:p-10 border-matte hover:border-ash/20 transition-all duration-700 cursor-crosshair"
    >
      <div className="flex justify-between items-start mb-12 md:mb-20">
        <span className="text-[9px] md:text-[10px] font-mono text-dust/40 tracking-tighter">{id}</span>
        <div className={`p-1.5 md:p-2 rounded-full border border-current opacity-20 group-hover:opacity-100 transition-all duration-500 ${color === 'pulse' ? 'text-pulse' : 'text-ghost'}`}>
          {icon}
        </div>
      </div>
      
      <h3 className="text-xl md:text-2xl font-bold tracking-[0.2em] text-ash mb-3 md:mb-4 uppercase">{title}</h3>
      <div className="flex items-center gap-3 md:gap-4">
        <div className={`w-1 h-1 rounded-full animate-pulse bg-current ${color === 'pulse' ? 'text-pulse' : 'text-ghost'}`} />
        <span className="text-[8px] md:text-[10px] uppercase tracking-[0.3em] text-dust/60">{status}</span>
      </div>

      {/* Subtle corner detail */}
      <div className="absolute top-0 right-0 w-8 h-8 opacity-10 group-hover:opacity-40 transition-opacity">
        <div className="w-full h-full border-t border-r border-ash" />
      </div>
    </motion.div>
  );
}

function LogLine({ time, msg }: any) {
  return (
    <div className="flex gap-4">
      <span className="opacity-40">[{time}]</span>
      <span className="group-hover:text-ash transition-colors">{msg}</span>
    </div>
  );
}

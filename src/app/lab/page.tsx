'use client';

import { motion } from 'framer-motion';
import { Terminal } from 'lucide-react';

export default function LabPage() {
  return (
    <div className="min-h-screen pt-32 pb-32 px-6 md:px-12 lg:px-24 bg-black relative overflow-hidden">
      <div className="max-w-[1800px] mx-auto">
        
        <header className="mb-24">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <span className="terminal-text-xs text-white/40">{'>'} run --mode experimental /lab</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white uppercase mb-12">
              THE_LAB
            </h1>
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              <div className="md:col-span-6 lg:col-span-5">
                <p className="terminal-text-sm text-white/40 leading-relaxed uppercase border-l border-terminal-border pl-6">
                  [RESEARCH] A CONTROLLED ENVIRONMENT FOR VISUAL BREAKDOWN AND SYSTEM RECONSTRUCTION. 
                  OBSERVING THE FRICTION BETWEEN MACHINE LOGIC AND HUMAN SIGNAL DRIFT.
                </p>
              </div>
            </div>
          </motion.div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border-t border-white/10">
          
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2">
            <LabModule 
              id="0x01" 
              title="MOTION_ENTROPY" 
              status="STABLE" 
              borderRight
            />
            <LabModule 
              id="0x02" 
              title="SIGNAL_BUFFER" 
              status="RECALIBRATING" 
            />
            <LabModule 
              id="0x03" 
              title="INTERFACE_DECAY" 
              status="ANALYZING" 
              borderTop
              borderRight
            />
            <LabModule 
              id="0x04" 
              title="NEURAL_DRIFT" 
              status="UNSTABLE" 
              borderTop
            />
          </div>

          <aside className="lg:col-span-4 border-t lg:border-t-0 lg:border-l border-white/10 p-12">
            <div className="flex justify-between items-center mb-16">
              <span className="text-[10px] font-mono text-white/20 tracking-[0.5em] uppercase">SYSTEM_FEED</span>
              <div className="w-2 h-2 bg-white animate-pulse" />
            </div>
            
            <div className="space-y-6 font-mono text-[10px] tracking-[0.2em] text-white/40">
              <LogLine time="12:00:01" msg="INIT_CORE" />
              <LogLine time="12:00:04" msg="MAPPING_ARRAYS" />
              <LogLine time="12:00:09" msg="SIGNAL_LOST" />
              <LogLine time="12:00:10" msg="RECOVERY_PROCEDURE" />
              <LogLine time="12:00:15" msg="STABLE_STATE" />
              <LogLine time="12:00:22" msg="DRIVE_SY_ACTIVE" />
            </div>

            <div className="mt-32 pt-12 border-t border-white/10">
              <div className="grid grid-cols-2 gap-8 text-[9px] font-mono text-white/20 uppercase tracking-widest">
                <div className="space-y-3">
                  <p>CPU_LOAD: 12%</p>
                  <p>MEM_USED: 4.1GB</p>
                </div>
                <div className="space-y-3 text-right">
                  <p>SIGNAL: -42db</p>
                  <p>TEMP: 32°C</p>
                </div>
              </div>
            </div>
          </aside>

        </div>
      </div>
    </div>
  );
}

interface LabModuleProps {
  id: string;
  title: string;
  status: string;
  borderRight?: boolean;
  borderTop?: boolean;
}

function LabModule({ id, title, status, borderRight, borderTop }: LabModuleProps) {
  return (
    <motion.div 
      className={`group relative p-12 md:p-24 border-white/10 transition-colors duration-100 cursor-crosshair hover:bg-white hover:text-black ${borderRight ? 'md:border-r' : ''} ${borderTop ? 'border-t' : ''} border-b md:border-b-0`}
    >
      <div className="flex justify-between items-start mb-24">
        <span className="text-[10px] font-mono opacity-40 group-hover:opacity-100">{id}</span>
        <Terminal size={16} className="opacity-20 group-hover:opacity-100" />
      </div>
      
      <h3 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4 uppercase leading-none group-hover:italic transition-all">
        {title}
      </h3>
      <div className="flex items-center gap-4">
        <div className="w-1.5 h-1.5 bg-current animate-pulse" />
        <span className="text-[10px] uppercase tracking-[0.3em] opacity-40 group-hover:opacity-100">{status}</span>
      </div>
    </motion.div>
  );
}

interface LogLineProps {
  time: string;
  msg: string;
}

function LogLine({ time, msg }: LogLineProps) {
  return (
    <div className="flex gap-4 group">
      <span className="opacity-40">[{time}]</span>
      <span className="group-hover:text-white transition-colors">{msg}</span>
    </div>
  );
}

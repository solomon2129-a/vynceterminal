'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, ShieldCheck, Terminal, Cpu, Share2 } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-24 py-32 md:py-48 overflow-hidden relative">
      
      {/* Memorable Interactive Element: Scanner Sweep */}
      <motion.div 
        className="fixed inset-0 pointer-events-none z-[5] opacity-[0.03]"
        initial={{ translateY: '-100%' }}
        animate={{ translateY: '100%' }}
        transition={{ 
          duration: 10, 
          repeat: Infinity, 
          ease: "linear" 
        }}
        style={{
          background: "linear-gradient(to bottom, transparent, #B7B1A9, transparent)",
          height: '2px',
          width: '100%'
        }}
      />

      <div className="max-w-[1400px] w-full grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24 items-start relative z-10">
        
        {/* Level 1 & 2: Dominant Header & Supporting Description */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
          className="lg:col-span-7"
        >
          <div className="flex items-center gap-4 mb-8">
            <span className="text-xs-technical text-pulse">HANDSHAKE_INITIATED // TRANSMISSION_OPEN</span>
            <div className="w-12 h-[1px] bg-matte" />
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-[0.2em] text-ash mb-12 uppercase leading-[0.9]">
            ESTABLISH<br/>
            CONNECTION
          </h1>
          
          <p className="text-sm md:text-lg text-ash/80 max-w-xl mb-16 leading-relaxed font-light italic">
            VYNCE operates at the intersection of motion logic and reactive systems. 
            We build interactive environments, neural interfaces, and procedural motion studies. 
            The signal is active. State your intent below.
          </p>

          {/* Level 3: Tiny Metadata */}
          <div className="flex flex-wrap gap-8 opacity-40">
            <div className="flex items-center gap-3 text-[9px] font-mono tracking-[0.3em] uppercase">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>ENCRYPTION_ACTIVE</span>
            </div>
            <div className="flex items-center gap-3 text-[9px] font-mono tracking-[0.3em] uppercase">
              <Terminal className="w-3.5 h-3.5" />
              <span>LOG_ID: 0x82F_CONN</span>
            </div>
          </div>
        </motion.div>

        {/* Level 2 & 3: Supporting & Metadata (Interaction Modules) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1.2 }}
          className="lg:col-span-5 space-y-4"
        >
          <div className="mb-8 hidden lg:block">
             <span className="text-[10px] font-mono text-dust/30 tracking-[0.4em] uppercase">Channel_Selection</span>
          </div>

          <TransmissionLink 
            icon={<Mail className="w-4 h-4" />} 
            label="PROTO_01_EMAIL" 
            value="team.vynce@gmail.com" 
            href="mailto:team.vynce@gmail.com"
            metadata="LATENCY: 12ms // BUFFER: STABLE"
          />
          
          <TransmissionLink 
            icon={<Phone className="w-4 h-4" />} 
            label="PROTO_02_TEL" 
            value="+91 6382670175" 
            href="tel:+916382670175"
            metadata="VOICE_DECRYPTION: ENABLED"
          />
          
          <div className="pt-12 md:pt-20">
            <div className="glass-matte p-10 border-matte flex justify-between items-end group transition-all duration-700 hover:border-ash/20">
              <div className="space-y-6">
                <span className="text-[9px] font-mono text-dust/20 tracking-[0.4em] uppercase block">Operations_Node</span>
                <div>
                   <p className="text-xs-technical text-ash mb-1">REMOTE_ACCESS_ONLY</p>
                   <p className="text-[9px] font-mono text-dust/40 tracking-[0.2em]">COORD: 51.5074° N, 0.1278° W</p>
                </div>
              </div>
              <Cpu className="w-6 h-6 text-dust/10 group-hover:text-pulse transition-colors duration-1000 animate-pulse" />
            </div>
          </div>
        </motion.div>

      </div>

      {/* Background Atmosphere Decoration */}
      <div className="absolute right-[-5%] top-[20%] opacity-5 pointer-events-none select-none hidden xl:block">
        <span className="text-[200px] font-bold text-ash tracking-[-0.05em] leading-none">
          82F
        </span>
      </div>
    </div>
  );
}

function TransmissionLink({ icon, label, value, href, metadata }: any) {
  return (
    <a 
      href={href}
      className="group flex flex-col p-8 glass-matte hover:border-ash/20 transition-all duration-700 relative overflow-hidden"
    >
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-6">
          <div className="text-dust/20 group-hover:text-pulse transition-colors duration-500">
            {icon}
          </div>
          <span className="text-[9px] font-mono uppercase tracking-[0.4em] text-dust/30 group-hover:text-ash transition-colors">
            {label}
          </span>
        </div>
        <Share2 className="w-3.5 h-3.5 text-dust/10 group-hover:text-ash transition-colors" />
      </div>

      <div className="mb-6">
        <p className="text-base md:text-xl tracking-[0.1em] text-ash uppercase break-all font-medium">
          {value}
        </p>
      </div>

      <div className="flex justify-between items-center pt-4 border-t border-matte/50">
        <span className="text-[8px] font-mono text-dust/20 tracking-widest uppercase group-hover:text-dust/40 transition-colors">
          {metadata}
        </span>
        <div className="w-1.5 h-1.5 rounded-full bg-matte group-hover:bg-pulse transition-colors" />
      </div>

      {/* Decorative vertical pulse line */}
      <div className="absolute top-0 right-0 w-[1px] h-0 bg-pulse group-hover:h-full transition-all duration-1000" />
    </a>
  );
}

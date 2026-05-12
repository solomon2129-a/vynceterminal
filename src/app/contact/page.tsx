'use client';

import { motion } from 'framer-motion';

export default function ContactPage() {
  return (
    <div className="min-h-screen flex items-center px-6 md:px-12 lg:px-24 py-32 bg-black relative overflow-hidden">
      
      <div className="max-w-[1800px] w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-32 items-end relative z-10">
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="lg:col-span-8"
        >
          <div className="flex items-center gap-4 mb-12">
            <span className="terminal-text-xs text-white/40">{'>'} establish_handshake --secure /vynce/contact</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white uppercase mb-12">
            ESTABLISH_SIGNAL
          </h1>

          <p className="terminal-text-sm text-white/40 leading-relaxed uppercase border-l border-terminal-border pl-6 max-w-2xl mb-16">
            [MESSAGE] VYNCE OPERATES AT THE INTERSECTION OF MOTION LOGIC AND REACTIVE SYSTEMS. 
            THE SIGNAL IS ACTIVE. STATE YOUR INTENT. WE ARE WATCHING THE BUFFER.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <TransmissionLink 
              label="PROTO_01_EMAIL" 
              value="team.vynce@gmail.com" 
              href="mailto:team.vynce@gmail.com"
              metadata="LATENCY: 12ms // BUFFER: STABLE"
            />
            <TransmissionLink 
              label="PROTO_02_TEL" 
              value="+91 6382670175" 
              href="tel:+916382670175"
              metadata="VOICE_DECRYPTION: ENABLED"
            />
          </div>
        </motion.div>


        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="lg:col-span-4"
        >
          <div className="border border-white/10 p-12 space-y-12">
            <div>
              <span className="text-[10px] font-mono text-white/20 tracking-[0.5em] uppercase block mb-4">NODE_LOCATION</span>
              <p className="text-sm font-mono text-white uppercase tracking-widest">REMOTE_ACCESS_ONLY</p>
              <p className="text-[9px] font-mono text-white/20 tracking-[0.2em] mt-2">12.9716° N, 77.5946° E</p>
            </div>
            
            <div className="pt-12 border-t border-white/10">
              <span className="text-[10px] font-mono text-white/20 tracking-[0.5em] uppercase block mb-4">SYSTEM_STATUS</span>
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 bg-white animate-pulse" />
                <span className="text-[10px] font-mono text-white tracking-widest uppercase">ENCRYPTION_ACTIVE</span>
              </div>
            </div>
          </div>
        </motion.div>

      </div>

      {/* Background Atmosphere */}
      <div className="absolute right-0 bottom-0 p-12 opacity-[0.03] pointer-events-none hidden xl:block">
        <span className="text-[25vw] font-bold text-white tracking-tighter uppercase leading-none">
          CONN
        </span>
      </div>
    </div>
  );
}

function TransmissionLink({ label, value, href, metadata }: any) {
  return (
    <a 
      href={href}
      className="group flex flex-col p-12 border border-white/10 hover:bg-white hover:text-black transition-colors duration-100 relative overflow-hidden"
    >
      <div className="flex items-center justify-between mb-12">
        <span className="text-[10px] font-mono uppercase tracking-[0.4em] opacity-40 group-hover:opacity-100">
          {label}
        </span>
        <div className="w-1.5 h-1.5 bg-current animate-pulse" />
      </div>

      <div className="mb-12">
        <p className="text-xl font-bold tracking-tighter uppercase group-hover:italic transition-all">
          {value}
        </p>
      </div>

      <div className="flex justify-between items-center pt-6 border-t border-current opacity-10 group-hover:opacity-100">
        <span className="text-[8px] font-mono tracking-widest uppercase">
          {metadata}
        </span>
      </div>
    </a>
  );
}

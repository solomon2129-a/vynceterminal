'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, ArrowRight, ShieldCheck, Cpu } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-24 py-32 md:py-48">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-32 items-center">
        
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="flex items-center gap-4 mb-6 md:mb-8">
            <span className="text-[9px] md:text-xs-technical text-pulse">TRANSMISSION_PROTOCOL // OPEN</span>
            <div className="w-8 md:w-12 h-[1px] bg-matte" />
          </div>
          
          <h1 className="text-3xl md:text-5xl font-bold tracking-[0.2em] text-ash mb-8 md:mb-12 uppercase">CONNECTION</h1>
          
          <p className="text-[11px] md:text-sm-archival max-w-md italic mb-12 md:mb-16 opacity-80">
            lines_are_monitored. establish a secure handshake to initiate collaboration 
            or system inquiry. global_signal_active.
          </p>

          <div className="flex items-center gap-4 text-ghost/40 text-[8px] md:text-[9px] font-mono tracking-[0.3em] uppercase">
            <ShieldCheck className="w-4 h-4" />
            <span>SECURE_ENCRYPTION_ACTIVE</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="space-y-4 md:space-y-6"
        >
          <ContactFragment 
            icon={<Mail className="w-4 h-4" />} 
            label="CHANNEL_01_EMAIL" 
            value="team.vynce@gmail.com" 
            href="mailto:team.vynce@gmail.com"
          />
          <ContactFragment 
            icon={<Phone className="w-4 h-4" />} 
            label="CHANNEL_02_TEL" 
            value="+91 6382670175" 
            href="tel:+916382670175"
          />
          
          <div className="pt-12 md:pt-20">
            <div className="glass-matte p-6 md:p-10 border-matte flex justify-between items-center group cursor-default">
              <div className="space-y-3 md:space-y-4">
                <span className="text-[8px] md:text-[9px] font-mono text-dust/20 tracking-[0.3em] uppercase block">Location_Status</span>
                <p className="text-[10px] md:text-xs-technical text-ash">REMOTE_OPERATIONS // 0x82F</p>
              </div>
              <Cpu className="w-4 md:w-5 h-4 md:h-5 text-dust/10 group-hover:text-pulse transition-colors duration-1000" />
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}

function ContactFragment({ icon, label, value, href }: any) {
  return (
    <a 
      href={href}
      className="group flex items-center justify-between p-6 md:p-10 glass-matte hover:border-ash/20 transition-all duration-700 relative overflow-hidden"
    >
      <div className="flex items-center gap-6 md:gap-8">
        <div className="text-dust/20 group-hover:text-pulse transition-colors duration-500">
          {icon}
        </div>
        <div>
          <p className="text-[8px] md:text-[9px] font-mono uppercase tracking-[0.3em] md:tracking-[0.4em] text-dust/30 mb-1 md:mb-2 group-hover:text-ash transition-colors">{label}</p>
          <p className="text-[12px] md:text-sm tracking-[0.1em] text-dust group-hover:text-ash transition-colors uppercase break-all">{value}</p>
        </div>
      </div>
      <ArrowRight className="w-4 h-4 text-dust/10 group-hover:text-pulse group-hover:translate-x-2 transition-all duration-700 hidden sm:block" />
      
      {/* Decorative pulse fragment */}
      <div className="absolute top-0 left-0 w-[1px] h-0 bg-pulse group-hover:h-full transition-all duration-1000" />
    </a>
  );
}

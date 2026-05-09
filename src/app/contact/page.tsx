'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, ArrowRight, ShieldCheck, Cpu } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-12 md:px-24 py-48">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
        
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="flex items-center gap-4 mb-8">
            <span className="text-xs-technical text-pulse">TRANSMISSION_PROTOCOL // OPEN</span>
            <div className="w-12 h-[1px] bg-matte" />
          </div>
          
          <h1 className="text-5xl font-bold tracking-[0.2em] text-ash mb-12 uppercase">CONNECTION</h1>
          
          <p className="text-sm-archival max-w-md italic mb-16">
            lines_are_monitored. establish a secure handshake to initiate collaboration 
            or system inquiry. global_signal_active.
          </p>

          <div className="flex items-center gap-4 text-ghost/40 text-[9px] font-mono tracking-[0.3em] uppercase">
            <ShieldCheck className="w-4 h-4" />
            <span>SECURE_ENCRYPTION_ACTIVE</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="space-y-4"
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
          
          <div className="pt-20">
            <div className="glass-matte p-10 border-matte flex justify-between items-center group cursor-default">
              <div className="space-y-4">
                <span className="text-[9px] font-mono text-dust/20 tracking-[0.3em] uppercase block">Location_Status</span>
                <p className="text-xs-technical text-ash">REMOTE_OPERATIONS // 0x82F</p>
              </div>
              <Cpu className="w-5 h-5 text-dust/10 group-hover:text-pulse transition-colors duration-1000" />
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
      className="group flex items-center justify-between p-10 glass-matte hover:border-ash/20 transition-all duration-700 relative overflow-hidden"
    >
      <div className="flex items-center gap-8">
        <div className="text-dust/20 group-hover:text-pulse transition-colors duration-500">
          {icon}
        </div>
        <div>
          <p className="text-[9px] font-mono uppercase tracking-[0.4em] text-dust/30 mb-2 group-hover:text-ash transition-colors">{label}</p>
          <p className="text-sm tracking-[0.1em] text-dust group-hover:text-ash transition-colors uppercase">{value}</p>
        </div>
      </div>
      <ArrowRight className="w-4 h-4 text-dust/10 group-hover:text-pulse group-hover:translate-x-2 transition-all duration-700" />
      
      {/* Decorative pulse fragment */}
      <div className="absolute top-0 left-0 w-[1px] h-0 bg-pulse group-hover:h-full transition-all duration-1000" />
    </a>
  );
}

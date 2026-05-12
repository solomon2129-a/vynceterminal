'use client';

import React from 'react';
import { Navbar } from "@/components/layout/Navbar";
import { useSession } from "@/context/SessionContext";
import { TerminalLoader } from "@/components/ui/TerminalLoader";

export function AppContent({ children }: { children: React.ReactNode }) {
  const { sessionId, isLoaded, setLoaded } = useSession();

  return (
    <>
      {!isLoaded && <TerminalLoader onComplete={() => setLoaded(true)} />}
      <div className={`terminal-frame flex flex-col transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <Navbar />
        <main className="relative z-10 flex-grow pt-24">
          {children}
        </main>
        
        {/* Terminal Footer Info */}
        <footer className="mt-auto pt-12 border-t border-terminal-border flex justify-between items-center terminal-text-xs text-terminal-dim px-4 md:px-8 pb-8">
          <span>sys_ready // vynce_v1.0.4</span>
          <span>[session_id: {sessionId}]</span>
        </footer>
      </div>
    </>
  );
}

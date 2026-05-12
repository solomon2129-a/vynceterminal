'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

interface SessionContextType {
  sessionId: string;
  coords: string;
  isLoaded: boolean;
  setLoaded: (val: boolean) => void;
}

const SessionContext = createContext<SessionContextType | undefined>(undefined);

export const SessionProvider = ({ children }: { children: React.ReactNode }) => {
  const [sessionId, setSessionId] = useState('0x82F');
  const [isLoaded, setIsLoaded] = useState(false);
  const coords = '12.9716, 77.5946'; // Bangalore, India

  useEffect(() => {
    const randomId = '0x' + Math.floor(Math.random() * 0xFFFF).toString(16).toUpperCase().padStart(4, '0');
    setSessionId(randomId);
  }, []);

  return (
    <SessionContext.Provider value={{ sessionId, coords, isLoaded, setLoaded: setIsLoaded }}>
      {children}
    </SessionContext.Provider>
  );
};

export const useSession = () => {
  const context = useContext(SessionContext);
  if (!context) throw new Error('useSession must be used within a SessionProvider');
  return context;
};

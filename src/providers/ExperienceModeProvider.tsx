'use client';

import { createContext, useContext, type ReactNode } from 'react';

export type ExperienceMode = 'recruiter' | 'explorer';

interface ExperienceModeContextType {
  mode: ExperienceMode;
  toggleMode: () => void;
  setMode: (mode: ExperienceMode) => void;
}

const ExperienceModeContext = createContext<ExperienceModeContextType>({
  mode: 'explorer',
  toggleMode: () => {},
  setMode: () => {},
});

export function ExperienceModeProvider({ children }: { children: ReactNode }) {
  return (
    <ExperienceModeContext.Provider
      value={{
        mode: 'explorer',
        toggleMode: () => {},
        setMode: () => {},
      }}
    >
      {children}
    </ExperienceModeContext.Provider>
  );
}

export function useExperienceMode() {
  return useContext(ExperienceModeContext);
}

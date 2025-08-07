import React, { ReactNode } from 'react';
export type ThemeMode = 'light' | 'dark';
interface ThemeContextType {
    mode: ThemeMode;
    toggleTheme: () => void;
    setTheme: (newMode: ThemeMode) => void;
}
interface ThemeProviderProps {
    children: ReactNode;
    defaultMode?: ThemeMode;
    storageKey?: string;
}
declare const ThemeProvider: React.FC<ThemeProviderProps>;
declare const useTheme: () => ThemeContextType;
export { ThemeProvider, useTheme };

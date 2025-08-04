import React, { createContext, useContext, useState, useEffect, ReactNode, useMemo } from 'react';
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

export type ThemeMode = 'light' | 'dark';

interface ThemeContextType {
  mode: ThemeMode;
  toggleTheme: () => void;
  setTheme: (mode: ThemeMode) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
  defaultMode?: ThemeMode;
  storageKey?: string;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  defaultMode = 'light',
  storageKey = 'theme-mode'
}) => {
  const [mode, setMode] = useState<ThemeMode>(() => {
    // Try to get theme from localStorage
    const savedMode = localStorage.getItem(storageKey) as ThemeMode;
    return savedMode && ['light', 'dark'].includes(savedMode) ? savedMode : defaultMode;
  });

  useEffect(() => {
    // Save theme to localStorage whenever it changes
    localStorage.setItem(storageKey, mode);
    console.log('Theme changed to:', mode);
  }, [mode, storageKey]);

  const toggleTheme = () => {
    console.log('Toggle theme called, current mode:', mode);
    setMode(prevMode => {
      const newMode = prevMode === 'light' ? 'dark' : 'light';
      console.log('Setting theme to:', newMode);
      return newMode;
    });
  };

  const setTheme = (newMode: ThemeMode) => {
    console.log('Set theme called with:', newMode);
    setMode(newMode);
  };

  // Create a simple theme based on mode
  const theme = useMemo(() => {
    console.log('Creating theme for mode:', mode);
    return createTheme({
      palette: {
        mode,
      },
    });
  }, [mode]);

  const contextValue = useMemo(() => ({
    mode,
    toggleTheme,
    setTheme,
  }), [mode]);

  return (
    <ThemeContext.Provider value={contextValue}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};

const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export { ThemeProvider, useTheme };
import React from 'react';
import { IconButton, Tooltip } from '@mui/material';
import { LightMode as LightModeIcon, DarkMode as DarkModeIcon } from '@mui/icons-material';
import { useTheme } from '../../contexts/ThemeContext';

const ThemeToggle: React.FC = () => {
  const { mode, toggleTheme } = useTheme();

  const handleClick = () => {
    console.log('Theme toggle clicked, current mode:', mode);
    toggleTheme();
  };

  return (
    <Tooltip title="Toggle theme">
      <IconButton onClick={handleClick} aria-label="Toggle theme mode">
        {mode === 'light' ? <DarkModeIcon /> : <LightModeIcon />}
      </IconButton>
    </Tooltip>
  );
};

export default ThemeToggle;
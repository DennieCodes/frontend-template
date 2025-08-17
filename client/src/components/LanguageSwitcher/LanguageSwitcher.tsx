import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Button,
  Box,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Typography
} from '@mui/material';
import { ExpandMore } from '@mui/icons-material';

interface LanguageSwitcherProps {
  variant?: 'select' | 'buttons' | 'dropdown';
  size?: 'small' | 'medium' | 'large';
  showLabel?: boolean;
  className?: string;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  variant = 'dropdown',
  size = 'small',
  className
}) => {
  const { i18n } = useTranslation();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleLanguageChange = (language: string) => {
    i18n.changeLanguage(language);
    setAnchorEl(null);
  };

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const currentLanguage = i18n.language;

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
  ];

  const currentLang = languages.find(lang => lang.code === currentLanguage) || languages[0];

  // If variant is buttons, use the old button style
  if (variant === 'buttons') {
    return (
      <Box className={className} sx={{ display: 'flex', gap: 0.5 }}>
        <Button
          variant={currentLanguage === 'en' ? 'contained' : 'outlined'}
          size={size}
          onClick={() => handleLanguageChange('en')}
          sx={{ minWidth: 'auto', px: 1 }}
        >
          🇺🇸 EN
        </Button>
        <Button
          variant={currentLanguage === 'es' ? 'contained' : 'outlined'}
          size={size}
          onClick={() => handleLanguageChange('es')}
          sx={{ minWidth: 'auto', px: 1 }}
        >
          🇪🇸 ES
        </Button>
      </Box>
    );
  }

  // Default dropdown variant
  return (
    <Box className={className}>
      <Button
        variant="outlined"
        size={size}
        onClick={handleMenuOpen}
        endIcon={<ExpandMore />}
        sx={{
          minWidth: 'auto',
          px: 1,
          display: 'flex',
          alignItems: 'center',
          gap: 0.5
        }}
      >
        <Typography variant="body2" sx={{ fontSize: '1.2rem' }}>
          {currentLang.flag}
        </Typography>
        <Typography variant="body2" sx={{ display: { xs: 'none', sm: 'block' } }}>
          {currentLang.code.toUpperCase()}
        </Typography>
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        {languages.map((language) => (
          <MenuItem
            key={language.code}
            onClick={() => handleLanguageChange(language.code)}
            selected={currentLanguage === language.code}
          >
            <ListItemIcon>
              <Typography variant="body1" sx={{ fontSize: '1.2rem' }}>
                {language.flag}
              </Typography>
            </ListItemIcon>
            <ListItemText>
              <Typography variant="body2">
                {language.name}
              </Typography>
            </ListItemText>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

export default LanguageSwitcher;
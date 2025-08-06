import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Box } from '@mui/material';

interface LanguageSwitcherProps {
  variant?: 'select' | 'buttons';
  size?: 'small' | 'medium' | 'large';
  showLabel?: boolean;
  className?: string;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  size = 'small',
  className
}) => {
  const { i18n } = useTranslation();

  const handleLanguageChange = (language: string) => {
    i18n.changeLanguage(language);
  };

  const currentLanguage = i18n.language;

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
};

export default LanguageSwitcher;
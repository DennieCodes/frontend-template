import React from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Typography, Button, Paper } from '@mui/material';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';

const I18nExample: React.FC = () => {
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (language: string) => {
    i18n.changeLanguage(language);
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        i18n Example
      </Typography>

      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6" gutterBottom>
          Language Switcher
        </Typography>
        <LanguageSwitcher />
        <Typography variant="body2" sx={{ mt: 1, color: 'text.secondary' }}>
          Current Language: {i18n.language}
        </Typography>
      </Paper>

      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6" gutterBottom>
          Translation Examples
        </Typography>

        <Typography variant="body1" gutterBottom>
          {t('common.home')}
        </Typography>

        <Typography variant="body1" gutterBottom>
          {t('account.title')}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          {t('account.subtitle')}
        </Typography>

        <Box sx={{ mt: 2 }}>
          <Button
            variant="contained"
            onClick={() => handleLanguageChange('en')}
            sx={{ mr: 1 }}
          >
            English
          </Button>
          <Button
            variant="outlined"
            onClick={() => handleLanguageChange('es')}
          >
            Español
          </Button>
        </Box>
      </Paper>

      <Paper sx={{ p: 3 }}>
        <Typography variant="h6" gutterBottom>
          Form Labels
        </Typography>

        <Typography variant="body1" gutterBottom>
          {t('forms.firstName')}
        </Typography>

        <Typography variant="body1" gutterBottom>
          {t('forms.lastName')}
        </Typography>

        <Typography variant="body1" gutterBottom>
          {t('forms.email')}
        </Typography>
      </Paper>
    </Box>
  );
};

export default I18nExample;
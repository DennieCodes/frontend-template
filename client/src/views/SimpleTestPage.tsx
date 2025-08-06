import React from 'react';
import { Container, Typography, Box, Button } from '@mui/material';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../components/LanguageSwitcher/LanguageSwitcher';

const SimpleTestPage: React.FC = () => {
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (language: string) => {
    i18n.changeLanguage(language);
  };

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        i18n Test Page
      </Typography>

      <Box sx={{ mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          Language Switcher:
        </Typography>
        <LanguageSwitcher />
        <Typography variant="body2" sx={{ mt: 1, color: 'text.secondary' }}>
          Current Language: {i18n.language}
        </Typography>
      </Box>

      <Box sx={{ mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          Manual Language Buttons:
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button
            variant="contained"
            onClick={() => handleLanguageChange('en')}
          >
            Switch to English
          </Button>
          <Button
            variant="outlined"
            onClick={() => handleLanguageChange('es')}
          >
            Cambiar a Español
          </Button>
        </Box>
      </Box>

      <Box sx={{ mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          Translation Examples:
        </Typography>
        <Typography variant="body1" gutterBottom>
          Home: {t('common.home')}
        </Typography>
        <Typography variant="body1" gutterBottom>
          Account: {t('common.account')}
        </Typography>
        <Typography variant="body1" gutterBottom>
          Settings: {t('common.settings')}
        </Typography>
        <Typography variant="body1" gutterBottom>
          Dashboard: {t('navigation.dashboard')}
        </Typography>
        <Typography variant="body1" gutterBottom>
          About: {t('navigation.about')}
        </Typography>
      </Box>

      <Box sx={{ mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          Form Labels:
        </Typography>
        <Typography variant="body1" gutterBottom>
          First Name: {t('forms.firstName')}
        </Typography>
        <Typography variant="body1" gutterBottom>
          Last Name: {t('forms.lastName')}
        </Typography>
        <Typography variant="body1" gutterBottom>
          Email: {t('forms.email')}
        </Typography>
      </Box>

      <Box>
        <Typography variant="h6" gutterBottom>
          Account Page Text:
        </Typography>
        <Typography variant="body1" gutterBottom>
          Title: {t('account.title')}
        </Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          Subtitle: {t('account.subtitle')}
        </Typography>
      </Box>
    </Container>
  );
};

export default SimpleTestPage;
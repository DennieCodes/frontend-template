import React from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Typography, Button, Paper, Grid } from '@mui/material';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';

const LanguageTest: React.FC = () => {
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (language: string) => {
    i18n.changeLanguage(language);
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Language Test Component
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Method 1: LanguageSwitcher Component
            </Typography>
            <LanguageSwitcher />
            <Typography variant="body2" sx={{ mt: 1, color: 'text.secondary' }}>
              Current Language: {i18n.language}
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Method 2: Programmatic Change
            </Typography>
            <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
              <Button
                variant="contained"
                onClick={() => handleLanguageChange('en')}
                size="small"
              >
                English
              </Button>
              <Button
                variant="outlined"
                onClick={() => handleLanguageChange('es')}
                size="small"
              >
                Español
              </Button>
            </Box>
            <Typography variant="body2" color="text.secondary">
              Click buttons to change language
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      <Paper sx={{ p: 3, mt: 3 }}>
        <Typography variant="h6" gutterBottom>
          Translation Examples
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Typography variant="subtitle1" gutterBottom>
              Common Terms:
            </Typography>
            <Typography variant="body2">Home: {t('common.home')}</Typography>
            <Typography variant="body2">Account: {t('common.account')}</Typography>
            <Typography variant="body2">Settings: {t('common.settings')}</Typography>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Typography variant="subtitle1" gutterBottom>
              Navigation:
            </Typography>
            <Typography variant="body2">Dashboard: {t('navigation.dashboard')}</Typography>
            <Typography variant="body2">About: {t('navigation.about')}</Typography>
            <Typography variant="body2">Contact: {t('navigation.contact')}</Typography>
          </Grid>
        </Grid>
      </Paper>

      <Paper sx={{ p: 3, mt: 3 }}>
        <Typography variant="h6" gutterBottom>
          Form Labels:
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <Typography variant="body2">First Name: {t('forms.firstName')}</Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="body2">Last Name: {t('forms.lastName')}</Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="body2">Email: {t('forms.email')}</Typography>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default LanguageTest;
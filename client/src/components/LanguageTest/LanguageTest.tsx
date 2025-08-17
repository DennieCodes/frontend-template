import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/GridLegacy';
import { useTranslation } from 'react-i18next';

const LanguageTest: React.FC = () => {
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (language: string) => {
    i18n.changeLanguage(language);
  };

  return (
    <Box sx={{ py: 4 }}>
      <Grid container spacing={4}>
        <Grid xs={12} md={6}>
          <Paper elevation={2} sx={{ p: 4, textAlign: 'center' }}>
            <Typography variant="h4" component="h2" gutterBottom>
              {t('languageTest.currentLanguage')}
            </Typography>
            <Typography variant="h6" color="primary" gutterBottom>
              {i18n.language.toUpperCase()}
            </Typography>
            <Typography variant="body1" paragraph>
              {t('languageTest.currentLanguageDescription')}
            </Typography>
          </Paper>
        </Grid>
        <Grid xs={12} md={6}>
          <Paper elevation={2} sx={{ p: 4, textAlign: 'center' }}>
            <Typography variant="h4" component="h2" gutterBottom>
              {t('languageTest.changeLanguage')}
            </Typography>
            <Box sx={{ mt: 3 }}>
              <Button
                variant="contained"
                onClick={() => handleLanguageChange('en')}
                sx={{ mr: 2, mb: 2 }}
              >
                English
              </Button>
              <Button
                variant="contained"
                onClick={() => handleLanguageChange('es')}
                sx={{ mr: 2, mb: 2 }}
              >
                Español
              </Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default LanguageTest;
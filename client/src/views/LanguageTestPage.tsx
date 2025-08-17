import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/GridLegacy';
import Button from '@mui/material/Button';
import { useTranslation } from 'react-i18next';

const LanguageTestPage: React.FC = () => {
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (language: string) => {
    i18n.changeLanguage(language);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography variant="h2" component="h1" gutterBottom>
          {t('languageTest.title')}
        </Typography>
        <Typography variant="h5" color="text.secondary" paragraph>
          {t('languageTest.subtitle')}
        </Typography>
      </Box>

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

      <Box sx={{ mt: 6 }}>
        <Paper elevation={2} sx={{ p: 4 }}>
          <Typography variant="h4" component="h2" gutterBottom>
            {t('languageTest.testContent')}
          </Typography>
          <Grid container spacing={3}>
            <Grid xs={12} md={6}>
              <Typography variant="h6" gutterBottom>
                {t('languageTest.sampleText')}
              </Typography>
              <Typography variant="body1" paragraph>
                {t('languageTest.sampleParagraph')}
              </Typography>
            </Grid>
            <Grid xs={12} md={6}>
              <Typography variant="h6" gutterBottom>
                {t('languageTest.sampleList')}
              </Typography>
              <Typography variant="body1" component="div">
                <ul>
                  <li>{t('languageTest.listItem1')}</li>
                  <li>{t('languageTest.listItem2')}</li>
                  <li>{t('languageTest.listItem3')}</li>
                </ul>
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </Container>
  );
};

export default LanguageTestPage;
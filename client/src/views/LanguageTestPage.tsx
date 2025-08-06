import React from 'react';
import { Container, Typography, Box, Paper, Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';
import LanguageTest from '../components/LanguageTest/LanguageTest';

const LanguageTestPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          {t('language.switchLanguage')} - Test Page
        </Typography>
        <Typography variant="body1" color="text.secondary">
          This page demonstrates how to change languages in the application.
        </Typography>
      </Box>

      <LanguageTest />

      <Paper sx={{ p: 3, mt: 4 }}>
        <Typography variant="h5" gutterBottom>
          How to Use Language Switching
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom>
              Method 1: Language Switcher in Header
            </Typography>
            <Typography variant="body2" paragraph>
              Look at the top-right corner of the header. You'll see a language switcher
              that allows you to change between English and Spanish.
            </Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom>
              Method 2: Programmatic Change
            </Typography>
            <Typography variant="body2" paragraph>
              You can also change languages programmatically in any component using
              the useTranslation hook and i18n.changeLanguage().
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default LanguageTestPage;
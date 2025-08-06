import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  Box,
  Typography,
  Paper,
  Grid,
  Button,
  TextField,
  Alert,
  Divider
} from '@mui/material';
import { useTranslationExample } from '../../hooks/useTranslationExample';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';

const I18nDemo: React.FC = () => {
  const { t } = useTranslation();
  const { currentLanguage, isReady } = useTranslationExample();

  if (!isReady) {
    return (
      <Box sx={{ p: 2 }}>
        <Typography>Loading translations...</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        i18n Demo Component
      </Typography>

      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6" gutterBottom>
          Language Switcher
        </Typography>
        <LanguageSwitcher variant="select" size="medium" />
        <Typography variant="body2" sx={{ mt: 1, color: 'text.secondary' }}>
          Current Language: {currentLanguage}
        </Typography>
      </Paper>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              {t('common.account')}
            </Typography>
            <Typography variant="body1" gutterBottom>
              {t('account.title')}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {t('account.subtitle')}
            </Typography>

            <Divider sx={{ my: 2 }} />

            <Typography variant="subtitle1" gutterBottom>
              {t('account.profileInfo')}
            </Typography>
            <TextField
              fullWidth
              label={t('forms.firstName')}
              margin="normal"
              size="small"
            />
            <TextField
              fullWidth
              label={t('forms.lastName')}
              margin="normal"
              size="small"
            />
            <TextField
              fullWidth
              label={t('forms.email')}
              margin="normal"
              size="small"
            />

            <Box sx={{ mt: 2 }}>
              <Button variant="contained" color="primary">
                {t('common.save')}
              </Button>
              <Button variant="outlined" sx={{ ml: 1 }}>
                {t('common.cancel')}
              </Button>
            </Box>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              {t('navigation.dashboard')}
            </Typography>

            <Alert severity="info" sx={{ mb: 2 }}>
              {t('common.info')}: {t('account.activeProjects')} - 5
            </Alert>

            <Alert severity="success" sx={{ mb: 2 }}>
              {t('common.success')}: {t('account.completedTasks')} - 12
            </Alert>

            <Alert severity="warning" sx={{ mb: 2 }}>
              {t('common.warning')}: {t('account.profileComplete')} - 85%
            </Alert>

            <Typography variant="body2" color="text.secondary">
              {t('validation.required')}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {t('validation.minLength', { values: { min: 8 } })}
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      <Paper sx={{ p: 3, mt: 3 }}>
        <Typography variant="h6" gutterBottom>
          Navigation Examples
        </Typography>
        <Grid container spacing={2}>
          <Grid item>
            <Button variant="outlined" size="small">
              {t('navigation.home')}
            </Button>
          </Grid>
          <Grid item>
            <Button variant="outlined" size="small">
              {t('navigation.about')}
            </Button>
          </Grid>
          <Grid item>
            <Button variant="outlined" size="small">
              {t('navigation.contact')}
            </Button>
          </Grid>
          <Grid item>
            <Button variant="outlined" size="small">
              {t('navigation.faq')}
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default I18nDemo;
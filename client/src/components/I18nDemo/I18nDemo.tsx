import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/GridLegacy';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Chip from '@mui/material/Chip';
import { useTranslation } from 'react-i18next';

const I18nDemo: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

  const handleLanguageChange = (language: string) => {
    setSelectedLanguage(language);
    i18n.changeLanguage(language);
  };

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
  ];

  const demoContent = [
    {
      title: t('i18nDemo.navigation.title'),
      items: [
        t('i18nDemo.navigation.home'),
        t('i18nDemo.navigation.about'),
        t('i18nDemo.navigation.contact'),
        t('i18nDemo.navigation.services'),
      ],
    },
    {
      title: t('i18nDemo.forms.title'),
      items: [
        t('i18nDemo.forms.firstName'),
        t('i18nDemo.forms.lastName'),
        t('i18nDemo.forms.email'),
        t('i18nDemo.forms.phone'),
      ],
    },
    {
      title: t('i18nDemo.actions.title'),
      items: [
        t('i18nDemo.actions.save'),
        t('i18nDemo.actions.cancel'),
        t('i18nDemo.actions.delete'),
        t('i18nDemo.actions.edit'),
      ],
    },
  ];

  return (
    <Box sx={{ py: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        {t('i18nDemo.title')}
      </Typography>
      <Typography variant="h6" color="text.secondary" paragraph>
        {t('i18nDemo.subtitle')}
      </Typography>

      {/* Language Selector */}
      <Paper elevation={2} sx={{ p: 4, mb: 4 }}>
        <Typography variant="h5" component="h2" gutterBottom>
          {t('i18nDemo.languageSelector.title')}
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          {t('i18nDemo.languageSelector.description')}
        </Typography>

        <Grid container spacing={3}>
          <Grid xs={12} md={6}>
            <FormControl fullWidth>
              <InputLabel>{t('i18nDemo.languageSelector.selectLabel')}</InputLabel>
              <Select
                value={selectedLanguage}
                label={t('i18nDemo.languageSelector.selectLabel')}
                onChange={(e) => handleLanguageChange(e.target.value)}
              >
                {languages.map((language) => (
                  <MenuItem key={language.code} value={language.code}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <span>{language.flag}</span>
                      <span>{language.name}</span>
                    </Box>
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid xs={12} md={6}>
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
              {languages.map((language) => (
                <Button
                  key={language.code}
                  variant={selectedLanguage === language.code ? 'contained' : 'outlined'}
                  onClick={() => handleLanguageChange(language.code)}
                  startIcon={<span>{language.flag}</span>}
                >
                  {language.name}
                </Button>
              ))}
            </Box>
          </Grid>
        </Grid>

        <Box sx={{ mt: 3, p: 2, bgcolor: 'grey.50', borderRadius: 1 }}>
          <Typography variant="body2" color="text.secondary">
            <strong>{t('i18nDemo.languageSelector.currentLanguage')}:</strong> {selectedLanguage.toUpperCase()}
          </Typography>
        </Box>
      </Paper>

      {/* Translation Examples */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          {t('i18nDemo.examples.title')}
        </Typography>
        <Typography variant="body1" paragraph>
          {t('i18nDemo.examples.description')}
        </Typography>

        <Grid container spacing={3}>
          {demoContent.map((section, index) => (
            <Grid xs={12} md={4} key={index}>
              <Card sx={{ height: '100%' }}>
                <CardContent>
                  <Typography variant="h6" component="h3" gutterBottom>
                    {section.title}
                  </Typography>
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                    {section.items.map((item, itemIndex) => (
                      <Chip
                        key={itemIndex}
                        label={item}
                        variant="outlined"
                        size="small"
                      />
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Interactive Form */}
      <Paper elevation={2} sx={{ p: 4 }}>
        <Typography variant="h5" component="h2" gutterBottom>
          {t('i18nDemo.interactiveForm.title')}
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          {t('i18nDemo.interactiveForm.description')}
        </Typography>

        <Grid container spacing={3}>
          <Grid xs={12} md={6}>
            <TextField
              fullWidth
              label={t('i18nDemo.interactiveForm.name')}
              placeholder={t('i18nDemo.interactiveForm.namePlaceholder')}
            />
          </Grid>
          <Grid xs={12} md={6}>
            <TextField
              fullWidth
              label={t('i18nDemo.interactiveForm.email')}
              placeholder={t('i18nDemo.interactiveForm.emailPlaceholder')}
              type="email"
            />
          </Grid>
          <Grid xs={12}>
            <TextField
              fullWidth
              label={t('i18nDemo.interactiveForm.message')}
              placeholder={t('i18nDemo.interactiveForm.messagePlaceholder')}
              multiline
              rows={4}
            />
          </Grid>
          <Grid xs={12}>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Button variant="contained">
                {t('i18nDemo.interactiveForm.submit')}
              </Button>
              <Button variant="outlined">
                {t('i18nDemo.interactiveForm.reset')}
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Paper>

      {/* Usage Instructions */}
      <Paper elevation={2} sx={{ p: 4, mt: 4 }}>
        <Typography variant="h5" component="h2" gutterBottom>
          {t('i18nDemo.usage.title')}
        </Typography>
        <Typography variant="body1" paragraph>
          {t('i18nDemo.usage.description')}
        </Typography>

        <Grid container spacing={3}>
          <Grid xs={12} md={6}>
            <Typography variant="h6" gutterBottom>
              {t('i18nDemo.usage.basicUsage.title')}
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              {t('i18nDemo.usage.basicUsage.description')}
            </Typography>
            <Box sx={{ p: 2, bgcolor: 'grey.100', borderRadius: 1, fontFamily: 'monospace' }}>
              {t('i18nDemo.usage.basicUsage.code')}
            </Box>
          </Grid>
          <Grid xs={12} md={6}>
            <Typography variant="h6" gutterBottom>
              {t('i18nDemo.usage.advancedUsage.title')}
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              {t('i18nDemo.usage.advancedUsage.description')}
            </Typography>
            <Box sx={{ p: 2, bgcolor: 'grey.100', borderRadius: 1, fontFamily: 'monospace' }}>
              {t('i18nDemo.usage.advancedUsage.code')}
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default I18nDemo;
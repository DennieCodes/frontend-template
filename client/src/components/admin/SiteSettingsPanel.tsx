import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/GridLegacy';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import { SiteSettingsPanelProps } from './types';

const SiteSettingsPanel: React.FC<SiteSettingsPanelProps> = ({ settings, onSave }) => {
  const [formData, setFormData] = useState({
    siteName: settings?.siteName || '',
    siteDescription: settings?.siteDescription || '',
    contactEmail: settings?.contactEmail || '',
    contactPhone: settings?.contactPhone || '',
    timezone: settings?.timezone || 'UTC',
    language: settings?.language || 'en',
    maintenanceMode: settings?.maintenanceMode || false,
    allowRegistration: settings?.allowRegistration || true,
    requireEmailVerification: settings?.requireEmailVerification || true,
    maxFileSize: settings?.maxFileSize || 10,
    sessionTimeout: settings?.sessionTimeout || 30,
  });

  const handleChange = (field: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [field]: event.target.value,
    }));
  };

  const handleSwitchChange = (field: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [field]: event.target.checked,
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSave(formData);
  };

  return (
    <Paper elevation={2} sx={{ p: 4 }}>
      <Typography variant="h5" component="h2" gutterBottom>
        Site Settings
      </Typography>
      <Typography variant="body2" color="text.secondary" paragraph>
        Configure general site settings and preferences.
      </Typography>

      <Box component="form" onSubmit={handleSubmit}>
        {/* Basic Information */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" component="h3" gutterBottom>
            Basic Information
          </Typography>
          <Grid container spacing={3}>
            <Grid xs={12} md={6}>
              <TextField
                fullWidth
                label="Site Name"
                value={formData.siteName}
                onChange={handleChange('siteName')}
                required
              />
            </Grid>
            <Grid xs={12} md={6}>
              <TextField
                fullWidth
                label="Contact Email"
                type="email"
                value={formData.contactEmail}
                onChange={handleChange('contactEmail')}
                required
              />
            </Grid>
            <Grid xs={12}>
              <TextField
                fullWidth
                label="Site Description"
                multiline
                rows={3}
                value={formData.siteDescription}
                onChange={handleChange('siteDescription')}
              />
            </Grid>
            <Grid xs={12} md={6}>
              <TextField
                fullWidth
                label="Contact Phone"
                value={formData.contactPhone}
                onChange={handleChange('contactPhone')}
              />
            </Grid>
            <Grid xs={12} md={6}>
              <FormControl fullWidth>
                <InputLabel>Timezone</InputLabel>
                <Select
                  value={formData.timezone}
                  label="Timezone"
                  onChange={(e) => setFormData(prev => ({ ...prev, timezone: e.target.value }))}
                >
                  <MenuItem value="UTC">UTC</MenuItem>
                  <MenuItem value="America/New_York">Eastern Time</MenuItem>
                  <MenuItem value="America/Chicago">Central Time</MenuItem>
                  <MenuItem value="America/Denver">Mountain Time</MenuItem>
                  <MenuItem value="America/Los_Angeles">Pacific Time</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </Box>

        <Divider sx={{ my: 3 }} />

        {/* User Settings */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" component="h3" gutterBottom>
            User Settings
          </Typography>
          <Grid container spacing={3}>
            <Grid xs={12} md={6}>
              <FormControlLabel
                control={
                  <Switch
                    checked={formData.allowRegistration}
                    onChange={handleSwitchChange('allowRegistration')}
                  />
                }
                label="Allow User Registration"
              />
              <Typography variant="body2" color="text.secondary" sx={{ ml: 4 }}>
                Enable new user registration
              </Typography>
            </Grid>
            <Grid xs={12} md={6}>
              <FormControlLabel
                control={
                  <Switch
                    checked={formData.requireEmailVerification}
                    onChange={handleSwitchChange('requireEmailVerification')}
                  />
                }
                label="Require Email Verification"
              />
              <Typography variant="body2" color="text.secondary" sx={{ ml: 4 }}>
                Users must verify their email address
              </Typography>
            </Grid>
            <Grid xs={12} md={6}>
              <TextField
                fullWidth
                label="Session Timeout (minutes)"
                type="number"
                value={formData.sessionTimeout}
                onChange={handleChange('sessionTimeout')}
                inputProps={{ min: 5, max: 480 }}
              />
            </Grid>
            <Grid xs={12} md={6}>
              <FormControl fullWidth>
                <InputLabel>Default Language</InputLabel>
                <Select
                  value={formData.language}
                  label="Default Language"
                  onChange={(e) => setFormData(prev => ({ ...prev, language: e.target.value }))}
                >
                  <MenuItem value="en">English</MenuItem>
                  <MenuItem value="es">Spanish</MenuItem>
                  <MenuItem value="fr">French</MenuItem>
                  <MenuItem value="de">German</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </Box>

        <Divider sx={{ my: 3 }} />

        {/* System Settings */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" component="h3" gutterBottom>
            System Settings
          </Typography>
          <Grid container spacing={3}>
            <Grid xs={12} md={6}>
              <FormControlLabel
                control={
                  <Switch
                    checked={formData.maintenanceMode}
                    onChange={handleSwitchChange('maintenanceMode')}
                  />
                }
                label="Maintenance Mode"
              />
              <Typography variant="body2" color="text.secondary" sx={{ ml: 4 }}>
                Temporarily disable the site for maintenance
              </Typography>
            </Grid>
            <Grid xs={12} md={6}>
              <TextField
                fullWidth
                label="Max File Upload Size (MB)"
                type="number"
                value={formData.maxFileSize}
                onChange={handleChange('maxFileSize')}
                inputProps={{ min: 1, max: 100 }}
              />
            </Grid>
          </Grid>
        </Box>

        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button type="submit" variant="contained" size="large">
            Save Settings
          </Button>
          <Button variant="outlined" size="large">
            Cancel
          </Button>
        </Box>
      </Box>
    </Paper>
  );
};

export default SiteSettingsPanel;
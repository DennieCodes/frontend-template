import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/GridLegacy';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import Divider from '@mui/material/Divider';
import { SecuritySettingsProps } from './types';

const SecuritySettings: React.FC<SecuritySettingsProps> = ({ settings, onSave }) => {
  const [formData, setFormData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
    twoFactorEnabled: settings?.twoFactorEnabled || false,
    emailNotifications: settings?.emailNotifications || true,
    loginAlerts: settings?.loginAlerts || true,
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
        Security Settings
      </Typography>
      <Typography variant="body2" color="text.secondary" paragraph>
        Manage your account security preferences and password.
      </Typography>

      <Box component="form" onSubmit={handleSubmit}>
        {/* Password Change Section */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" component="h3" gutterBottom>
            Change Password
          </Typography>
          <Grid container spacing={3}>
            <Grid xs={12} md={6}>
              <TextField
                fullWidth
                label="Current Password"
                type="password"
                value={formData.currentPassword}
                onChange={handleChange('currentPassword')}
                required
              />
            </Grid>
            <Grid xs={12} md={6}>
              <TextField
                fullWidth
                label="New Password"
                type="password"
                value={formData.newPassword}
                onChange={handleChange('newPassword')}
                required
              />
            </Grid>
            <Grid xs={12} md={6}>
              <TextField
                fullWidth
                label="Confirm New Password"
                type="password"
                value={formData.confirmPassword}
                onChange={handleChange('confirmPassword')}
                required
              />
            </Grid>
            <Grid xs={12} md={6}>
              <Button
                type="submit"
                variant="contained"
                size="large"
                fullWidth
                sx={{ mt: 1 }}
              >
                Update Password
              </Button>
            </Grid>
          </Grid>
        </Box>

        <Divider sx={{ my: 3 }} />

        {/* Security Preferences Section */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" component="h3" gutterBottom>
            Security Preferences
          </Typography>
          <Grid container spacing={3}>
            <Grid xs={12} md={6}>
              <FormControlLabel
                control={
                  <Switch
                    checked={formData.twoFactorEnabled}
                    onChange={handleSwitchChange('twoFactorEnabled')}
                  />
                }
                label="Two-Factor Authentication"
              />
              <Typography variant="body2" color="text.secondary" sx={{ ml: 4 }}>
                Add an extra layer of security to your account
              </Typography>
            </Grid>
            <Grid xs={12} md={6}>
              <FormControlLabel
                control={
                  <Switch
                    checked={formData.emailNotifications}
                    onChange={handleSwitchChange('emailNotifications')}
                  />
                }
                label="Email Notifications"
              />
              <Typography variant="body2" color="text.secondary" sx={{ ml: 4 }}>
                Receive security alerts via email
              </Typography>
            </Grid>
            <Grid xs={12} md={6}>
              <FormControlLabel
                control={
                  <Switch
                    checked={formData.loginAlerts}
                    onChange={handleSwitchChange('loginAlerts')}
                  />
                }
                label="Login Alerts"
              />
              <Typography variant="body2" color="text.secondary" sx={{ ml: 4 }}>
                Get notified of new login attempts
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
          </Grid>
        </Box>

        <Divider sx={{ my: 3 }} />

        {/* Account Recovery Section */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" component="h3" gutterBottom>
            Account Recovery
          </Typography>
          <Typography variant="body2" color="text.secondary" paragraph>
            Set up recovery options in case you lose access to your account.
          </Typography>
          <Grid container spacing={3}>
            <Grid xs={12} md={6}>
              <Button variant="outlined" fullWidth>
                Add Recovery Email
              </Button>
            </Grid>
            <Grid xs={12} md={6}>
              <Button variant="outlined" fullWidth>
                Add Phone Number
              </Button>
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

export default SecuritySettings;
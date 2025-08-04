import React from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  Box,
  TextField,
  Switch,
  FormControlLabel,
  Button,
  Divider,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Slider,
  Chip
} from '@mui/material';
import {
  Save as SaveIcon,
  Refresh as RefreshIcon,
  Settings as SettingsIcon
} from '@mui/icons-material';

const SiteSettingsPanel: React.FC = () => {
  return (
    <Card>
      <CardHeader
        title="Site Settings"
        action={
          <Box sx={{ display: 'flex', gap: 1 }}>
            <Button
              variant="outlined"
              startIcon={<RefreshIcon />}
              size="small"
            >
              Reset
            </Button>
            <Button
              variant="contained"
              startIcon={<SaveIcon />}
              size="small"
            >
              Save Changes
            </Button>
          </Box>
        }
      />
      <CardContent>
        <Box sx={{ mb: 2 }}>
          <Typography variant="body2" color="text.secondary">
            Configure global site settings and preferences
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {/* General Settings */}
          <Grid item xs={12} md={6}>
            <Typography variant="h6" sx={{ mb: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
              <SettingsIcon fontSize="small" />
              General Settings
            </Typography>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <TextField
                label="Site Name"
                defaultValue="My Application"
                fullWidth
                size="small"
              />

              <TextField
                label="Site Description"
                defaultValue="A modern web application"
                fullWidth
                multiline
                rows={2}
                size="small"
              />

              <TextField
                label="Contact Email"
                defaultValue="admin@example.com"
                fullWidth
                size="small"
              />

              <FormControl fullWidth size="small">
                <InputLabel>Default Language</InputLabel>
                <Select label="Default Language" defaultValue="en">
                  <MenuItem value="en">English</MenuItem>
                  <MenuItem value="es">Spanish</MenuItem>
                  <MenuItem value="fr">French</MenuItem>
                  <MenuItem value="de">German</MenuItem>
                </Select>
              </FormControl>

              <FormControl fullWidth size="small">
                <InputLabel>Time Zone</InputLabel>
                <Select label="Time Zone" defaultValue="utc">
                  <MenuItem value="utc">UTC</MenuItem>
                  <MenuItem value="est">Eastern Time</MenuItem>
                  <MenuItem value="pst">Pacific Time</MenuItem>
                  <MenuItem value="gmt">GMT</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Grid>

          {/* Feature Toggles */}
          <Grid item xs={12} md={6}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Feature Toggles
            </Typography>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <FormControlLabel
                control={<Switch defaultChecked />}
                label="User Registration"
                labelPlacement="start"
                sx={{ justifyContent: 'space-between', ml: 0 }}
              />

              <FormControlLabel
                control={<Switch defaultChecked />}
                label="Email Notifications"
                labelPlacement="start"
                sx={{ justifyContent: 'space-between', ml: 0 }}
              />

              <FormControlLabel
                control={<Switch />}
                label="Maintenance Mode"
                labelPlacement="start"
                sx={{ justifyContent: 'space-between', ml: 0 }}
              />

              <FormControlLabel
                control={<Switch defaultChecked />}
                label="Two-Factor Authentication"
                labelPlacement="start"
                sx={{ justifyContent: 'space-between', ml: 0 }}
              />

              <FormControlLabel
                control={<Switch defaultChecked />}
                label="API Rate Limiting"
                labelPlacement="start"
                sx={{ justifyContent: 'space-between', ml: 0 }}
              />

              <FormControlLabel
                control={<Switch />}
                label="Debug Mode"
                labelPlacement="start"
                sx={{ justifyContent: 'space-between', ml: 0 }}
              />
            </Box>
          </Grid>

          <Grid item xs={12}>
            <Divider sx={{ my: 2 }} />
          </Grid>

          {/* Performance Settings */}
          <Grid item xs={12} md={6}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Performance Settings
            </Typography>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              <Box>
                <Typography variant="body2" gutterBottom>
                  Cache Duration (minutes)
                </Typography>
                <Slider
                  defaultValue={30}
                  min={5}
                  max={120}
                  marks
                  valueLabelDisplay="auto"
                  size="small"
                />
              </Box>

              <Box>
                <Typography variant="body2" gutterBottom>
                  Session Timeout (hours)
                </Typography>
                <Slider
                  defaultValue={24}
                  min={1}
                  max={168}
                  marks
                  valueLabelDisplay="auto"
                  size="small"
                />
              </Box>

              <TextField
                label="Max Upload Size (MB)"
                defaultValue="10"
                type="number"
                size="small"
                fullWidth
              />
            </Box>
          </Grid>

          {/* Security Settings */}
          <Grid item xs={12} md={6}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Security Settings
            </Typography>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <TextField
                label="Password Min Length"
                defaultValue="8"
                type="number"
                size="small"
                fullWidth
              />

              <TextField
                label="Login Attempts Before Lockout"
                defaultValue="5"
                type="number"
                size="small"
                fullWidth
              />

              <TextField
                label="Lockout Duration (minutes)"
                defaultValue="15"
                type="number"
                size="small"
                fullWidth
              />

              <FormControl fullWidth size="small">
                <InputLabel>Password Policy</InputLabel>
                <Select label="Password Policy" defaultValue="medium">
                  <MenuItem value="low">Low (Basic)</MenuItem>
                  <MenuItem value="medium">Medium (Recommended)</MenuItem>
                  <MenuItem value="high">High (Strict)</MenuItem>
                </Select>
              </FormControl>

              <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                <Chip label="Uppercase Required" color="primary" size="small" />
                <Chip label="Numbers Required" color="primary" size="small" />
                <Chip label="Special Characters" color="primary" size="small" />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default SiteSettingsPanel;
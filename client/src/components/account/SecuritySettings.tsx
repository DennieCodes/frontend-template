import React from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  Box,
  TextField,
  Button,
  Grid,
  Switch,
  FormControlLabel,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Chip,
  Alert
} from '@mui/material';
import {
  Lock as LockIcon,
  Security as SecurityIcon,
  Visibility as VisibilityIcon,
  VisibilityOff as VisibilityOffIcon,
  Phone as PhoneIcon,
  Email as EmailIcon,
  Key as KeyIcon,
  Shield as ShieldIcon
} from '@mui/icons-material';

const SecuritySettings: React.FC = () => {
  return (
    <Card>
      <CardHeader
        title="Security Settings"
        action={
          <SecurityIcon color="primary" />
        }
      />
      <CardContent>
        <Box sx={{ mb: 3 }}>
          <Typography variant="body2" color="text.secondary">
            Manage your account security and authentication preferences
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {/* Password Change */}
          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom>
              Change Password
            </Typography>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <TextField
                label="Current Password"
                type="password"
                fullWidth
                size="small"
                InputProps={{
                  endAdornment: <VisibilityIcon sx={{ cursor: 'pointer' }} />
                }}
              />

              <TextField
                label="New Password"
                type="password"
                fullWidth
                size="small"
                InputProps={{
                  endAdornment: <VisibilityOffIcon sx={{ cursor: 'pointer' }} />
                }}
              />

              <TextField
                label="Confirm New Password"
                type="password"
                fullWidth
                size="small"
                InputProps={{
                  endAdornment: <VisibilityOffIcon sx={{ cursor: 'pointer' }} />
                }}
              />

              <Button
                variant="contained"
                startIcon={<LockIcon />}
                sx={{ alignSelf: 'flex-start' }}
              >
                Update Password
              </Button>
            </Box>
          </Grid>

          {/* Two-Factor Authentication */}
          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom>
              Two-Factor Authentication
            </Typography>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Alert severity="info" sx={{ mb: 2 }}>
                Two-factor authentication adds an extra layer of security to your account.
              </Alert>

              <FormControlLabel
                control={<Switch defaultChecked />}
                label="Enable SMS Authentication"
                labelPlacement="start"
                sx={{ justifyContent: 'space-between', ml: 0 }}
              />

              <FormControlLabel
                control={<Switch />}
                label="Enable Email Authentication"
                labelPlacement="start"
                sx={{ justifyContent: 'space-between', ml: 0 }}
              />

              <FormControlLabel
                control={<Switch />}
                label="Enable Authenticator App"
                labelPlacement="start"
                sx={{ justifyContent: 'space-between', ml: 0 }}
              />

              <TextField
                label="Phone Number"
                defaultValue="+1 (555) 123-4567"
                fullWidth
                size="small"
                InputProps={{
                  startAdornment: <PhoneIcon sx={{ mr: 1, color: 'text.secondary' }} />
                }}
              />

              <Button
                variant="outlined"
                startIcon={<KeyIcon />}
                sx={{ alignSelf: 'flex-start' }}
              >
                Setup Authenticator
              </Button>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 3 }} />

        {/* Security Preferences */}
        <Typography variant="h6" gutterBottom>
          Security Preferences
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <List>
              <ListItem>
                <ListItemIcon>
                  <ShieldIcon color="primary" />
                </ListItemIcon>
                <ListItemText
                  primary="Login Notifications"
                  secondary="Get notified when someone logs into your account"
                />
                <Switch defaultChecked />
              </ListItem>

              <ListItem>
                <ListItemIcon>
                  <EmailIcon color="primary" />
                </ListItemIcon>
                <ListItemText
                  primary="Email Notifications"
                  secondary="Receive security alerts via email"
                />
                <Switch defaultChecked />
              </ListItem>

              <ListItem>
                <ListItemIcon>
                  <PhoneIcon color="primary" />
                </ListItemIcon>
                <ListItemText
                  primary="SMS Notifications"
                  secondary="Receive security alerts via SMS"
                />
                <Switch />
              </ListItem>
            </List>
          </Grid>

          <Grid item xs={12} md={6}>
            <List>
              <ListItem>
                <ListItemIcon>
                  <LockIcon color="primary" />
                </ListItemIcon>
                <ListItemText
                  primary="Session Timeout"
                  secondary="Automatically log out after inactivity"
                />
                <Switch defaultChecked />
              </ListItem>

              <ListItem>
                <ListItemIcon>
                  <SecurityIcon color="primary" />
                </ListItemIcon>
                <ListItemText
                  primary="Device Management"
                  secondary="Manage trusted devices"
                />
                <Button size="small" variant="outlined">
                  Manage
                </Button>
              </ListItem>

              <ListItem>
                <ListItemIcon>
                  <KeyIcon color="primary" />
                </ListItemIcon>
                <ListItemText
                  primary="API Keys"
                  secondary="Manage API access tokens"
                />
                <Button size="small" variant="outlined">
                  Manage
                </Button>
              </ListItem>
            </List>
          </Grid>
        </Grid>

        <Divider sx={{ my: 3 }} />

        {/* Recent Activity */}
        <Typography variant="h6" gutterBottom>
          Recent Security Activity
        </Typography>

        <List>
          <ListItem>
            <ListItemIcon>
              <LockIcon color="success" />
            </ListItemIcon>
            <ListItemText
              primary="Successful login"
              secondary="New York, NY • January 15, 2024 at 2:30 PM"
            />
            <Chip label="Success" color="success" size="small" />
          </ListItem>

          <ListItem>
            <ListItemIcon>
              <SecurityIcon color="warning" />
            </ListItemIcon>
            <ListItemText
              primary="Failed login attempt"
              secondary="Unknown location • January 14, 2024 at 11:45 PM"
            />
            <Chip label="Failed" color="error" size="small" />
          </ListItem>

          <ListItem>
            <ListItemIcon>
              <KeyIcon color="info" />
            </ListItemIcon>
            <ListItemText
              primary="Password changed"
              secondary="New York, NY • January 10, 2024 at 9:15 AM"
            />
            <Chip label="Updated" color="info" size="small" />
          </ListItem>

          <ListItem>
            <ListItemIcon>
              <PhoneIcon color="success" />
            </ListItemIcon>
            <ListItemText
              primary="Two-factor authentication enabled"
              secondary="New York, NY • January 5, 2024 at 3:20 PM"
            />
            <Chip label="Enabled" color="success" size="small" />
          </ListItem>
        </List>

        <Box sx={{ mt: 3, display: 'flex', gap: 2 }}>
          <Button variant="outlined" size="small">
            View All Activity
          </Button>
          <Button variant="outlined" size="small" color="warning">
            Revoke All Sessions
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default SecuritySettings;
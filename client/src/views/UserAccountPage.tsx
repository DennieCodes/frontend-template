import React from 'react';
import {
  Container,
  Grid,
  Typography,
  Box,
  Breadcrumbs,
  Link,
  Tabs,
  Tab,
  Paper
} from '@mui/material';
import {
  Home as HomeIcon,
  AccountCircle as AccountIcon
} from '@mui/icons-material';

// Import modular components
import ProfileInfo from '../components/account/ProfileInfo';
import AddressInfo from '../components/account/AddressInfo';
import SubscriptionPlan from '../components/account/SubscriptionPlan';
import SecuritySettings from '../components/account/SecuritySettings';

const UserAccountPage: React.FC = () => {
  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      {/* Header */}
      <Box sx={{ mb: 4 }}>
        <Breadcrumbs sx={{ mb: 2 }}>
          <Link href="/" color="inherit" sx={{ display: 'flex', alignItems: 'center' }}>
            <HomeIcon sx={{ mr: 0.5 }} fontSize="small" />
            Home
          </Link>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <AccountIcon sx={{ mr: 0.5 }} fontSize="small" />
            <Typography color="text.primary">Account Settings</Typography>
          </Box>
        </Breadcrumbs>

        <Typography variant="h4" component="h1" gutterBottom>
          Account Settings
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Manage your profile, security, and subscription preferences
        </Typography>
      </Box>

      {/* Account Dashboard Grid */}
      <Grid container spacing={3}>
        {/* Profile Information - Full Width */}
        <Grid item xs={12}>
          <ProfileInfo />
        </Grid>

        {/* Address Information - Full Width */}
        <Grid item xs={12}>
          <AddressInfo />
        </Grid>

        {/* Subscription and Security - Side by Side */}
        <Grid item xs={12} lg={6}>
          <SubscriptionPlan />
        </Grid>

        <Grid item xs={12} lg={6}>
          <SecuritySettings />
        </Grid>
      </Grid>

      {/* Optional: Account Summary */}
      <Box sx={{ mt: 4 }}>
        <Paper sx={{ p: 3 }}>
          <Typography variant="h6" gutterBottom>
            Account Summary
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={3}>
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h4" color="primary">
                  5
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Active Projects
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h4" color="success.main">
                  12
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Completed Tasks
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h4" color="info.main">
                  3
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Team Members
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h4" color="warning.main">
                  85%
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Profile Complete
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </Container>
  );
};

export default UserAccountPage;
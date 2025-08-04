import React from 'react';
import {
  Container,
  Grid,
  Typography,
  Box,
  Paper,
  Breadcrumbs,
  Link
} from '@mui/material';
import {
  Home as HomeIcon,
  AdminPanelSettings as AdminIcon
} from '@mui/icons-material';

// Import modular components
import UserManagementPanel from '../components/admin/UserManagementPanel';
import SystemLogsPanel from '../components/admin/SystemLogsPanel';
import SiteSettingsPanel from '../components/admin/SiteSettingsPanel';

const AdminDashboard: React.FC = () => {
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
            <AdminIcon sx={{ mr: 0.5 }} fontSize="small" />
            <Typography color="text.primary">Admin Dashboard</Typography>
          </Box>
        </Breadcrumbs>

        <Typography variant="h4" component="h1" gutterBottom>
          Admin Dashboard
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Manage users, monitor system logs, and configure site settings
        </Typography>
      </Box>

      {/* Dashboard Grid */}
      <Grid container spacing={3}>
        {/* User Management - Full Width */}
        <Grid item xs={12}>
          <UserManagementPanel />
        </Grid>

        {/* System Logs and Site Settings - Side by Side */}
        <Grid item xs={12} lg={6}>
          <SystemLogsPanel />
        </Grid>

        <Grid item xs={12} lg={6}>
          <SiteSettingsPanel />
        </Grid>
      </Grid>

      {/* Optional: Quick Stats Panel */}
      <Box sx={{ mt: 4 }}>
        <Paper sx={{ p: 3 }}>
          <Typography variant="h6" gutterBottom>
            Quick Stats
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={3}>
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h4" color="primary">
                  1,247
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Total Users
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h4" color="success.main">
                  89
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Active Sessions
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h4" color="warning.main">
                  12
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Pending Approvals
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h4" color="info.main">
                  99.8%
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  System Uptime
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </Container>
  );
};

export default AdminDashboard;
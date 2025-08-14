import React from 'react';
import { Grid } from '@mui/material';
import { AdminDashboardGridProps } from './types';
import { LAYOUT_CONSTANTS, layoutUtils } from '../../constants/layout';

// Import modular components
import UserManagementPanel from '../../components/admin/UserManagementPanel';
import SystemLogsPanel from '../../components/admin/SystemLogsPanel';
import SiteSettingsPanel from '../../components/admin/SiteSettingsPanel';

const AdminDashboardGrid: React.FC<AdminDashboardGridProps> = ({ children }) => {
  return (
    <Grid container spacing={LAYOUT_CONSTANTS.GRID.SPACING.MD} sx={{
      maxWidth: layoutUtils.getContentWidth('wide'),
      mx: 'auto',
    }}>
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

      {/* Additional children components */}
      {children}
    </Grid>
  );
};

export default AdminDashboardGrid;

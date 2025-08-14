import React from 'react';
import { Grid } from '@mui/material';
import { UserAccountDashboardGridProps } from './types';
import { LAYOUT_CONSTANTS, layoutUtils } from '../../constants/layout';

// Import modular components
import ProfileInfo from '../../components/account/ProfileInfo';
import AddressInfo from '../../components/account/AddressInfo';
import SubscriptionPlan from '../../components/account/SubscriptionPlan';
import SecuritySettings from '../../components/account/SecuritySettings';

const UserAccountDashboardGrid: React.FC<UserAccountDashboardGridProps> = ({ children }) => {
  return (
    <Grid container spacing={LAYOUT_CONSTANTS.GRID.SPACING.MD} sx={{
      maxWidth: layoutUtils.getContentWidth('wide'),
      mx: 'auto',
    }}>
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

      {/* Additional children components */}
      {children && children}
    </Grid>
  );
};

export default UserAccountDashboardGrid;

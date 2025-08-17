import React from 'react';
import Grid from '@mui/material/GridLegacy';
import { UserAccountDashboardGridProps } from './types';

const UserAccountDashboardGrid: React.FC<UserAccountDashboardGridProps> = ({ children }) => {
  return (
    <Grid container spacing={3}>
      <Grid xs={12}>
        {children}
      </Grid>
      <Grid xs={12}>
        {children}
      </Grid>
      <Grid xs={12} lg={8}>
        {children}
      </Grid>
      <Grid xs={12} lg={4}>
        {children}
      </Grid>
    </Grid>
  );
};

export default UserAccountDashboardGrid;

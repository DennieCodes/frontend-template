import React from 'react';
import { Box } from '@mui/material';
import UserAccountBreadcrumbs from './UserAccountBreadcrumbs';
import UserAccountHeader from './UserAccountHeader';
import UserAccountDashboardGrid from './UserAccountDashboardGrid';
import AccountSummary from './AccountSummary';
import { SummaryItem } from './types';
import { LAYOUT_CONSTANTS, layoutUtils } from '../../constants/layout';

const UserAccountPage: React.FC = () => {
  const summaryItems: SummaryItem[] = [
    {
      id: 'active-projects',
      value: '5',
      label: 'Active Projects',
      color: 'primary',
    },
    {
      id: 'completed-tasks',
      value: '12',
      label: 'Completed Tasks',
      color: 'success',
    },
    {
      id: 'team-members',
      value: '3',
      label: 'Team Members',
      color: 'info',
    },
    {
      id: 'profile-complete',
      value: '85%',
      label: 'Profile Complete',
      color: 'warning',
    },
  ];

  return (
    <Box sx={{
      ...layoutUtils.getContentLayout('centered'),
      py: LAYOUT_CONSTANTS.SPACING.LG,
    }}>
      {/* Breadcrumbs */}
      <UserAccountBreadcrumbs currentPage="Account Settings" />

      {/* Header */}
      <UserAccountHeader
        title="Account Settings"
        subtitle="Manage your profile, security, and subscription preferences"
      />

      {/* Account Dashboard Grid */}
      <UserAccountDashboardGrid />

      {/* Account Summary */}
      <AccountSummary summaryItems={summaryItems} />
    </Box>
  );
};

export default UserAccountPage;

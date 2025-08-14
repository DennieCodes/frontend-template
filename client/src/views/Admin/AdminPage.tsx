import React from 'react';
import { Box } from '@mui/material';
import AdminBreadcrumbs from './AdminBreadcrumbs';
import AdminHeader from './AdminHeader';
import AdminDashboardGrid from './AdminDashboardGrid';
import QuickStats from './QuickStats';
import { StatItem } from './types';
import { LAYOUT_CONSTANTS, layoutUtils } from '../../constants/layout';

const AdminPage: React.FC = () => {
  const stats: StatItem[] = [
    {
      id: 'total-users',
      value: '1,247',
      label: 'Total Users',
      color: 'primary',
    },
    {
      id: 'active-sessions',
      value: '89',
      label: 'Active Sessions',
      color: 'success',
    },
    {
      id: 'pending-approvals',
      value: '12',
      label: 'Pending Approvals',
      color: 'warning',
    },
    {
      id: 'system-uptime',
      value: '99.8%',
      label: 'System Uptime',
      color: 'info',
    },
  ];

  return (
    <Box sx={{
      ...layoutUtils.getContentLayout('centered'),
      py: LAYOUT_CONSTANTS.SPACING.LG,
    }}>
      {/* Breadcrumbs */}
      <AdminBreadcrumbs currentPage="Admin Dashboard" />

      {/* Header */}
      <AdminHeader
        title="Admin Dashboard"
        subtitle="Manage users, monitor system logs, and configure site settings"
      />

      {/* Dashboard Grid */}
      <AdminDashboardGrid />

      {/* Quick Stats */}
      <QuickStats stats={stats} />
    </Box>
  );
};

export default AdminPage;

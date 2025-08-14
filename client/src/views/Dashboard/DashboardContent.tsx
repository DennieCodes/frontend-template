import React from 'react';
import { Box, Grid } from '@mui/material';
import UserProfileCard from './UserProfileCard';
import WelcomeMessage from './WelcomeMessage';
import FeatureCard from './FeatureCard';
import { DashboardContentProps } from './types';
import { LAYOUT_CONSTANTS, layoutUtils } from '../../constants/layout';

const DashboardContent: React.FC<DashboardContentProps> = ({ user }) => {
  const featureCards = [
    {
      title: 'Authentication Status',
      description: 'You are currently authenticated and can access all protected features.',
    },
    {
      title: 'Session Management',
      description: 'Your session is active. Click the logout button to sign out and return to the login page.',
    },
  ];

  return (
    <Box sx={{
      ...layoutUtils.getContentLayout('centered'),
    }}>
      <Grid container spacing={LAYOUT_CONSTANTS.GRID.SPACING.MD} sx={{
        maxWidth: layoutUtils.getContentWidth('wide'),
        mx: 'auto',
      }}>
        {/* User Profile Card */}
        <Grid item xs={12} md={4}>
          <UserProfileCard user={user} />
        </Grid>

        {/* Welcome Message */}
        <Grid item xs={12} md={8}>
          <WelcomeMessage userName={user.name} />
        </Grid>

        {/* Feature Cards */}
        {featureCards.map((feature, index) => (
          <Grid item xs={12} md={6} key={index}>
            <FeatureCard
              title={feature.title}
              description={feature.description}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default DashboardContent;

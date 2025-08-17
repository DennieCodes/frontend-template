import React from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography, CircularProgress } from '@mui/material';
import UserProfilePage from './UserProfilePage';
import { mockUsers } from './mockData';
import { LAYOUT_CONSTANTS } from '../../constants/layout';

const UserProfileRoute: React.FC = () => {
  const { userId } = useParams<{ userId: string }>();

  // In a real app, you would fetch user data from an API
  // For now, we'll use mock data
  const user = mockUsers.find(u => u.id === userId);

  if (!user) {
    return (
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '50vh',
        py: LAYOUT_CONSTANTS.SPACING.XL,
      }}>
        <Typography variant="h4" component="h1" gutterBottom>
          User Not Found
        </Typography>
        <Typography variant="body1" color="text.secondary">
          The user you're looking for doesn't exist or has been removed.
        </Typography>
      </Box>
    );
  }

  // For now, we'll assume it's not the current user's profile
  // In a real app, you would check against the authenticated user
  const isOwnProfile = false;

  return <UserProfilePage user={user} isOwnProfile={isOwnProfile} />;
};

export default UserProfileRoute;

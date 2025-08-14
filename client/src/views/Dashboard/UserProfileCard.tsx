import React from 'react';
import { Card, CardContent, Typography, Box, Avatar } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import { UserProfileCardProps } from './types';
import { LAYOUT_CONSTANTS, layoutUtils } from '../../constants/layout';

const UserProfileCard: React.FC<UserProfileCardProps> = ({ user }) => {
  return (
    <Card sx={{
      ...layoutUtils.getCardStyles('default'),
      height: '100%',
    }}>
      <CardContent sx={{
        p: LAYOUT_CONSTANTS.CARD.CONTENT.PADDING,
      }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: LAYOUT_CONSTANTS.SPACING.MD }}>
          <Avatar sx={{
            mr: LAYOUT_CONSTANTS.SPACING.MD,
            bgcolor: 'primary.main',
            width: 56,
            height: 56,
          }}>
            <PersonIcon />
          </Avatar>
          <Box>
            <Typography variant="h6" sx={{ mb: 0.5 }}>
              {user.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {user.email}
            </Typography>
          </Box>
        </Box>
        <Typography variant="body2" color="text.secondary">
          Welcome to your dashboard! This is a protected route that only authenticated users can access.
        </Typography>
      </CardContent>
    </Card>
  );
};

export default UserProfileCard;

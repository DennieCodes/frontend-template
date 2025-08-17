import React from 'react';
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Stack,
} from '@mui/material';
import {
  People as PeopleIcon,
  PersonAdd as FollowingIcon,
  Article as PostsIcon,
  Star as ReputationIcon,
} from '@mui/icons-material';
import { UserProfileStatsProps } from './types';
import { LAYOUT_CONSTANTS } from '../../constants/layout';

const UserProfileStats: React.FC<UserProfileStatsProps> = ({ user }) => {
  const formatNumber = (num: number): string => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
  };

  const stats = [
    {
      label: 'Followers',
      value: formatNumber(user.followersCount),
      icon: <PeopleIcon />,
      color: 'primary.main',
    },
    {
      label: 'Following',
      value: formatNumber(user.followingCount),
      icon: <FollowingIcon />,
      color: 'secondary.main',
    },
    {
      label: 'Posts',
      value: formatNumber(user.postsCount),
      icon: <PostsIcon />,
      color: 'success.main',
    },
    {
      label: 'Reputation',
      value: formatNumber(user.reputation),
      icon: <ReputationIcon />,
      color: 'warning.main',
    },
  ];

  return (
    <Box sx={{ mb: LAYOUT_CONSTANTS.SPACING.XL }}>
      <Typography variant="h5" component="h2" sx={{ mb: LAYOUT_CONSTANTS.SPACING.MD }}>
        Statistics
      </Typography>

      <Grid container spacing={2}>
        {stats.map((stat, index) => (
          <Grid item xs={6} sm={3} key={index}>
            <Card
              sx={{
                height: '100%',
                transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: 3,
                },
              }}
            >
              <CardContent sx={{ textAlign: 'center', p: 2 }}>
                <Stack spacing={1} alignItems="center">
                  <Box
                    sx={{
                      color: stat.color,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: 40,
                      height: 40,
                      borderRadius: '50%',
                      bgcolor: `${stat.color}15`,
                    }}
                  >
                    {stat.icon}
                  </Box>

                  <Typography variant="h4" component="div" fontWeight="bold">
                    {stat.value}
                  </Typography>

                  <Typography variant="body2" color="text.secondary">
                    {stat.label}
                  </Typography>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default UserProfileStats;

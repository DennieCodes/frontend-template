import React from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Chip,
  Tooltip,
} from '@mui/material';
import Grid from '@mui/material/GridLegacy';
import { UserProfileBadgesProps } from './types';
import { LAYOUT_CONSTANTS } from '../../constants/layout';

const UserProfileBadges: React.FC<UserProfileBadgesProps> = ({ badges }) => {
  const formatEarnedDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  return (
    <Box sx={{ mb: LAYOUT_CONSTANTS.SPACING.XL }}>
      <Typography variant="h5" component="h2" sx={{ mb: LAYOUT_CONSTANTS.SPACING.MD }}>
        Badges ({badges.length})
      </Typography>

      <Card sx={{ bgcolor: 'background.paper' }}>
        <CardContent>
          {badges.length > 0 ? (
            <Grid container spacing={2}>
              {badges.map((badge) => (
                <Grid item xs={12} sm={6} md={4} key={badge.id}>
                  <Tooltip
                    title={`${badge.description} - Earned on ${formatEarnedDate(badge.earnedAt)}`}
                    arrow
                  >
                    <Box
                      sx={{
                        p: 2,
                        border: 1,
                        borderColor: 'divider',
                        borderRadius: 2,
                        textAlign: 'center',
                        transition: 'all 0.2s ease-in-out',
                        cursor: 'pointer',
                        '&:hover': {
                          borderColor: badge.color,
                          bgcolor: `${badge.color}08`,
                          transform: 'translateY(-2px)',
                          boxShadow: 2,
                        },
                      }}
                    >
                      <Typography
                        variant="h3"
                        sx={{
                          mb: 1,
                          filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))',
                        }}
                      >
                        {badge.icon}
                      </Typography>

                      <Typography
                        variant="subtitle1"
                        fontWeight="bold"
                        sx={{ mb: 0.5 }}
                      >
                        {badge.name}
                      </Typography>

                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ mb: 1 }}
                      >
                        {badge.description}
                      </Typography>

                      <Chip
                        label={`Earned ${formatEarnedDate(badge.earnedAt)}`}
                        size="small"
                        variant="outlined"
                        sx={{
                          borderColor: badge.color,
                          color: badge.color,
                          fontSize: '0.75rem',
                        }}
                      />
                    </Box>
                  </Tooltip>
                </Grid>
              ))}
            </Grid>
          ) : (
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ textAlign: 'center', py: 4, fontStyle: 'italic' }}
            >
              No badges earned yet. Keep participating to earn badges!
            </Typography>
          )}
        </CardContent>
      </Card>
    </Box>
  );
};

export default UserProfileBadges;

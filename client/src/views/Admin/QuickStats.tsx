import React from 'react';
import { Box, Paper, Typography, Grid } from '@mui/material';
import { QuickStatsProps, StatItem } from './types';
import { LAYOUT_CONSTANTS, layoutUtils, typographyStyles } from '../../constants/layout';

const QuickStats: React.FC<QuickStatsProps> = ({ stats }) => {
  return (
    <Box sx={{ mt: LAYOUT_CONSTANTS.SPACING.LG }}>
      <Paper sx={{
        p: LAYOUT_CONSTANTS.SPACING.MD,
        maxWidth: layoutUtils.getContentWidth('wide'),
        mx: 'auto',
      }}>
        <Typography
          variant="h6"
          gutterBottom
          sx={{
            ...typographyStyles.title,
            mb: LAYOUT_CONSTANTS.SPACING.MD,
          }}
        >
          Quick Stats
        </Typography>
        <Grid container spacing={LAYOUT_CONSTANTS.GRID.SPACING.MD}>
          {stats.map((stat) => (
            <Grid item xs={12} sm={6} md={3} key={stat.id}>
              <Box sx={{ textAlign: 'center' }}>
                <Typography
                  variant="h4"
                  color={`${stat.color}.main`}
                  sx={{
                    ...typographyStyles.heading,
                    mb: LAYOUT_CONSTANTS.SPACING.XS,
                  }}
                >
                  {stat.value}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    ...typographyStyles.body,
                  }}
                >
                  {stat.label}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Box>
  );
};

export default QuickStats;

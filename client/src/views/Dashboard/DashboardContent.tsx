import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/GridLegacy';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { DashboardContentProps } from './types';

const DashboardContent: React.FC<DashboardContentProps> = ({
  title,
  subtitle,
  stats,
  recentActivity,
  quickActions,
}) => {
  return (
    <Box sx={{ py: 4 }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          {title}
        </Typography>
        <Typography variant="h6" color="text.secondary">
          {subtitle}
        </Typography>
      </Box>

      <Grid container spacing={3}>
        <Grid xs={12} md={8}>
          <Paper elevation={2} sx={{ p: 3, height: '100%' }}>
            <Typography variant="h5" component="h2" gutterBottom>
              Recent Activity
            </Typography>
            {recentActivity.map((activity, index) => (
              <Box key={index} sx={{ mb: 2, p: 2, bgcolor: 'background.default', borderRadius: 1 }}>
                <Typography variant="body1" gutterBottom>
                  {activity.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {activity.description}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  {activity.timestamp}
                </Typography>
              </Box>
            ))}
          </Paper>
        </Grid>
        <Grid xs={12} md={4}>
          <Paper elevation={2} sx={{ p: 3, height: '100%' }}>
            <Typography variant="h5" component="h2" gutterBottom>
              Quick Actions
            </Typography>
            {quickActions.map((action, index) => (
              <Box key={index} sx={{ mb: 2 }}>
                <Typography variant="body1" gutterBottom>
                  {action.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {action.description}
                </Typography>
              </Box>
            ))}
          </Paper>
        </Grid>
      </Grid>

      <Box sx={{ mt: 4 }}>
        <Grid container spacing={3}>
          {stats.map((stat, index) => (
            <Grid
              key={index}
              xs={12}
              sm={6}
              md={3}
            >
              <Paper elevation={2} sx={{ p: 3, textAlign: 'center' }}>
                <Typography variant="h4" component="div" color="primary" gutterBottom>
                  {stat.value}
                </Typography>
                <Typography variant="h6" component="div" gutterBottom>
                  {stat.label}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {stat.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default DashboardContent;

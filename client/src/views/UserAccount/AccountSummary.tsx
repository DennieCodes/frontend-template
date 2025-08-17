import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/GridLegacy';
import Avatar from '@mui/material/Avatar';
import { AccountSummaryProps } from './types';

const AccountSummary: React.FC<AccountSummaryProps> = ({ user, stats }) => {
  return (
    <Box sx={{ py: 4 }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Account Summary
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Welcome back, {user.name}!
        </Typography>
      </Box>

      <Grid container spacing={3}>
        <Grid xs={12} sm={6} md={4}>
          <Paper elevation={2} sx={{ p: 3, textAlign: 'center' }}>
            <Avatar
              src={user.avatar}
              alt={user.name}
              sx={{ width: 80, height: 80, mx: 'auto', mb: 2 }}
            />
            <Typography variant="h5" component="h2" gutterBottom>
              {user.name}
            </Typography>
            <Typography variant="body1" color="text.secondary" gutterBottom>
              {user.email}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Member since {user.joinDate}
            </Typography>
          </Paper>
        </Grid>

        {stats.map((stat, index) => (
          <Grid
            key={index}
            xs={12}
            sm={6}
            md={4}
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
  );
};

export default AccountSummary;

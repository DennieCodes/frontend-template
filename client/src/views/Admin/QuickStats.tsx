import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/GridLegacy';
import { QuickStatsProps } from './types';

const QuickStats: React.FC<QuickStatsProps> = ({ stats }) => {
  return (
    <Box sx={{ mb: 4 }}>
      <Grid container spacing={3}>
        {stats.map((stat, index) => (
          <Grid
            key={index}
            xs={12}
            sm={6}
            md={3}
          >
            <Paper
              elevation={2}
              sx={{
                p: 3,
                textAlign: 'center',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
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

export default QuickStats;

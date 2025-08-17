import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/GridLegacy';
import Paper from '@mui/material/Paper';
import { AboutValuesProps } from './types';
import { mockData } from './mockData';

const AboutValues: React.FC<AboutValuesProps> = ({ title, subtitle, values = mockData.values }) => {
  return (
    <Box sx={{ py: 8 }}>
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography variant="h2" component="h2" gutterBottom>
          {title}
        </Typography>
        <Typography variant="h5" color="text.secondary" paragraph>
          {subtitle}
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {values.map((value, index) => (
          <Grid
            key={index}
            xs={12}
            md={6}
            lg={4}
          >
            <Paper
              elevation={2}
              sx={{
                p: 4,
                height: '100%',
                textAlign: 'center',
                transition: 'transform 0.2s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-4px)',
                },
              }}
            >
              <Box sx={{ mb: 2 }}>
                {value.icon}
              </Box>
              <Typography variant="h6" component="h3" gutterBottom>
                {value.title}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                {value.description}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default AboutValues;

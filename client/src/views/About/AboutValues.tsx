import React from 'react';
import { Typography, Box, Grid, Paper } from '@mui/material';
import { LAYOUT_CONSTANTS, layoutUtils, typographyStyles } from '../../constants/layout';
import { AboutValuesProps } from './types';

const AboutValues: React.FC<AboutValuesProps> = ({ title, values }) => {
  return (
    <Box sx={{
      ...layoutUtils.getContentLayout('full-width'),
      mb: LAYOUT_CONSTANTS.SPACING.LG,
    }}>
      <Box sx={{
        maxWidth: layoutUtils.getContentWidth('wide'),
        mx: 'auto',
      }}>
        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          sx={{
            ...typographyStyles.heading,
            mb: LAYOUT_CONSTANTS.SPACING.MD,
            textAlign: 'center',
          }}
        >
          {title}
        </Typography>
        <Grid container spacing={LAYOUT_CONSTANTS.GRID.SPACING.MD}>
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <Grid item xs={12} md={6} lg={3} key={index}>
                <Paper elevation={2} sx={{ p: LAYOUT_CONSTANTS.SPACING.MD, textAlign: 'center', height: '100%' }}>
                  <IconComponent sx={{ fontSize: 40, color: 'primary.main', mb: 2 }} />
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                    {value.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {value.description}
                  </Typography>
                </Paper>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
};

export default AboutValues;

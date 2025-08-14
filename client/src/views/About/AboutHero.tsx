import React from 'react';
import { Typography, Box } from '@mui/material';
import { LAYOUT_CONSTANTS, layoutUtils, typographyStyles } from '../../constants/layout';
import { AboutHeroProps } from './types';

const AboutHero: React.FC<AboutHeroProps> = ({ title, subtitle }) => {
  return (
    <Box sx={{
      ...layoutUtils.getContentLayout('centered'),
      py: LAYOUT_CONSTANTS.CONTAINER.PADDING.MD,
      textAlign: 'center',
      mb: LAYOUT_CONSTANTS.SPACING.LG,
    }}>
      <Typography
        variant="h2"
        component="h1"
        gutterBottom
        sx={{
          ...typographyStyles.heading,
          mb: LAYOUT_CONSTANTS.SPACING.MD,
          maxWidth: layoutUtils.getContentWidth('standard'),
          mx: 'auto',
        }}
      >
        {title}
      </Typography>
      <Typography
        variant="h5"
        sx={{
          ...typographyStyles.body,
          maxWidth: layoutUtils.getContentWidth('standard'),
          mx: 'auto',
        }}
      >
        {subtitle}
      </Typography>
    </Box>
  );
};

export default AboutHero;

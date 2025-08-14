import React from 'react';
import { Box, Typography } from '@mui/material';
import { Map as MapIcon } from '@mui/icons-material';
import { SiteMapHeaderProps } from './types';
import { LAYOUT_CONSTANTS, layoutUtils, typographyStyles } from '../../constants/layout';

const SiteMapHeader: React.FC<SiteMapHeaderProps> = ({ title, subtitle }) => {
  return (
    <Box sx={{
      textAlign: 'center',
      mb: LAYOUT_CONSTANTS.SPACING.XL,
      ...layoutUtils.getContentLayout('centered'),
    }}>
      <Typography
        variant="h3"
        component="h1"
        gutterBottom
        sx={{
          ...typographyStyles.heading,
          fontWeight: 700,
          mb: LAYOUT_CONSTANTS.SPACING.MD,
          color: 'primary.main',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: LAYOUT_CONSTANTS.SPACING.MD,
          maxWidth: layoutUtils.getContentWidth('standard'),
        }}
      >
        <MapIcon sx={{ fontSize: 'inherit' }} />
        {title}
      </Typography>
      <Typography
        variant="h6"
        color="text.secondary"
        sx={{
          ...typographyStyles.body,
          maxWidth: '700px',
          mx: 'auto',
          lineHeight: 1.6,
        }}
      >
        {subtitle}
      </Typography>
    </Box>
  );
};

export default SiteMapHeader;

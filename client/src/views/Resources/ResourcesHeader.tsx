import React from 'react';
import { Box, Typography } from '@mui/material';
import { ResourcesHeaderProps } from './types';
import { LAYOUT_CONSTANTS, layoutUtils, typographyStyles } from '../../constants/layout';

const ResourcesHeader: React.FC<ResourcesHeaderProps> = ({ title, subtitle }) => {
  return (
    <Box sx={{
      ...layoutUtils.getContentLayout('centered'),
      py: LAYOUT_CONSTANTS.CONTAINER.PADDING.MD,
      textAlign: 'center',
      mb: LAYOUT_CONSTANTS.SPACING.LG,
    }}>
      <Typography
        variant="h3"
        component="h1"
        gutterBottom
        sx={{
          ...typographyStyles.heading,
          mb: LAYOUT_CONSTANTS.SPACING.SM,
          maxWidth: layoutUtils.getContentWidth('standard'),
          mx: 'auto',
        }}
      >
        {title}
      </Typography>
      <Typography
        variant="h6"
        sx={{
          mb: LAYOUT_CONSTANTS.SPACING.MD,
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

export default ResourcesHeader;

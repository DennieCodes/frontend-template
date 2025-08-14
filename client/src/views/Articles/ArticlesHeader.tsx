import React from 'react';
import { Box, Typography } from '@mui/material';
import { ArticlesHeaderProps } from './types';
import { LAYOUT_CONSTANTS, layoutUtils, typographyStyles } from '../../constants/layout';

const ArticlesHeader: React.FC<ArticlesHeaderProps> = ({ title, subtitle }) => {
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
          ...typographyStyles.body,
          mb: LAYOUT_CONSTANTS.SPACING.MD,
          maxWidth: layoutUtils.getContentWidth('standard'),
          mx: 'auto',
        }}
      >
        {subtitle}
      </Typography>
    </Box>
  );
};

export default ArticlesHeader;

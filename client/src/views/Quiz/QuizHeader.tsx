import React from 'react';
import { Typography, Box } from '@mui/material';
import { QuizHeaderProps } from './types';
import { LAYOUT_CONSTANTS, layoutUtils, typographyStyles } from '../../constants/layout';

const QuizHeader: React.FC<QuizHeaderProps> = ({ title, subtitle }) => {
  return (
    <Box sx={{
      ...layoutUtils.getContentLayout('centered'),
      py: LAYOUT_CONSTANTS.CONTAINER.PADDING.MD,
      textAlign: 'center',
      mb: LAYOUT_CONSTANTS.SPACING.LG,
    }}>
      <Typography
        variant="h4"
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
        variant="body1"
        color="text.secondary"
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

export default QuizHeader;

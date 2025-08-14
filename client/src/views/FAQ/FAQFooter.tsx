import React from 'react';
import { Box, Typography } from '@mui/material';
import { FAQFooterProps } from './types';
import { LAYOUT_CONSTANTS, layoutUtils, typographyStyles } from '../../constants/layout';

const FAQFooter: React.FC<FAQFooterProps> = ({ helpText, supportText }) => {
  return (
    <Box sx={{
      ...layoutUtils.getContentLayout('centered'),
      mt: LAYOUT_CONSTANTS.SPACING.LG,
      textAlign: 'center',
    }}>
      <Typography
        variant="body1"
        sx={{
          mb: LAYOUT_CONSTANTS.SPACING.SM,
          ...typographyStyles.body,
        }}
      >
        {helpText}
      </Typography>
      <Typography
        variant="body2"
        sx={{
          ...typographyStyles.body,
        }}
      >
        {supportText}
      </Typography>
    </Box>
  );
};

export default FAQFooter;

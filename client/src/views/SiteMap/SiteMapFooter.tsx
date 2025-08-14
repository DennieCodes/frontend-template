import React from 'react';
import { Box, Typography } from '@mui/material';
import { SiteMapFooterProps } from './types';
import { LAYOUT_CONSTANTS, layoutUtils, typographyStyles } from '../../constants/layout';

const SiteMapFooter: React.FC<SiteMapFooterProps> = ({ helpText, supportText }) => {
  return (
    <Box sx={{
      textAlign: 'center',
      mt: LAYOUT_CONSTANTS.SPACING.XL,
      ...layoutUtils.getContentLayout('centered'),
    }}>
      <Typography
        variant="body1"
        color="text.secondary"
        sx={{
          ...typographyStyles.body,
          mb: LAYOUT_CONSTANTS.SPACING.MD,
        }}
      >
        {helpText}
      </Typography>
      <Typography
        variant="body2"
        color="text.secondary"
        sx={{
          ...typographyStyles.body,
        }}
      >
        {supportText}
      </Typography>
    </Box>
  );
};

export default SiteMapFooter;

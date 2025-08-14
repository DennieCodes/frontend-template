import React from 'react';
import { Box, Typography } from '@mui/material';
import { AdminHeaderProps } from './types';
import { LAYOUT_CONSTANTS, layoutUtils, typographyStyles } from '../../constants/layout';

const AdminHeader: React.FC<AdminHeaderProps> = ({ title, subtitle }) => {
  return (
    <Box sx={{
      ...layoutUtils.getContentLayout('centered'),
      mb: LAYOUT_CONSTANTS.SPACING.LG,
    }}>
      <Typography
        variant="h4"
        component="h1"
        gutterBottom
        sx={{
          ...typographyStyles.heading,
          maxWidth: layoutUtils.getContentWidth('standard'),
        }}
      >
        {title}
      </Typography>
      <Typography
        variant="body1"
        color="text.secondary"
        sx={{
          ...typographyStyles.body,
          maxWidth: layoutUtils.getContentWidth('standard'),
        }}
      >
        {subtitle}
      </Typography>
    </Box>
  );
};

export default AdminHeader;

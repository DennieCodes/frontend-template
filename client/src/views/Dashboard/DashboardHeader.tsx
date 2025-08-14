import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import { DashboardHeaderProps } from './types';
import { LAYOUT_CONSTANTS, layoutUtils, typographyStyles } from '../../constants/layout';

const DashboardHeader: React.FC<DashboardHeaderProps> = ({ title, onLogout }) => {
  return (
    <Box sx={{
      ...layoutUtils.getContentLayout('centered'),
      mb: LAYOUT_CONSTANTS.SPACING.LG,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    }}>
      <Typography
        variant="h3"
        component="h1"
        sx={{
          ...typographyStyles.heading,
          maxWidth: layoutUtils.getContentWidth('standard'),
        }}
      >
        {title}
      </Typography>
      <Button
        variant="outlined"
        startIcon={<LogoutIcon />}
        onClick={onLogout}
        color="error"
      >
        Logout
      </Button>
    </Box>
  );
};

export default DashboardHeader;

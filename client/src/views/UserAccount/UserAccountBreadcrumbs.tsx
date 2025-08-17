import React from 'react';
import { Breadcrumbs, Link, Box, Typography } from '@mui/material';
import {
  Home as HomeIcon,
  AccountCircle as AccountIcon
} from '@mui/icons-material';
import { UserAccountBreadcrumbsProps } from './types';
import { LAYOUT_CONSTANTS } from '../../constants/layout';

const UserAccountBreadcrumbs: React.FC<UserAccountBreadcrumbsProps> = ({ currentPage }) => {
  return (
    <Breadcrumbs sx={{ mb: LAYOUT_CONSTANTS.SPACING.MD }}>
      <Link
        href="/"
        color="inherit"
        sx={{
          display: 'flex',
          alignItems: 'center',
          textDecoration: 'none',
          '&:hover': {
            textDecoration: 'underline',
          },
        }}
      >
        <HomeIcon sx={{ mr: 0.5 }} fontSize="small" />
        Home
      </Link>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <AccountIcon sx={{ mr: 0.5 }} fontSize="small" />
        <Typography color="text.primary">{currentPage}</Typography>
      </Box>
    </Breadcrumbs>
  );
};

export default UserAccountBreadcrumbs;

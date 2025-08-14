import React from 'react';
import { Box, Breadcrumbs, Link, Typography } from '@mui/material';
import { Home as HomeIcon } from '@mui/icons-material';
import { ResourceBreadcrumbsProps } from './types';

const ResourceBreadcrumbs: React.FC<ResourceBreadcrumbsProps> = ({ resourceName }) => {
  return (
    <Box sx={{ mb: 3 }}>
      <Breadcrumbs>
        <Link href="/" color="inherit" sx={{ display: 'flex', alignItems: 'center' }}>
          <HomeIcon sx={{ mr: 0.5 }} fontSize="small" />
          Home
        </Link>
        <Link href="/resources" color="inherit">
          Resources
        </Link>
        <Typography color="text.primary">{resourceName}</Typography>
      </Breadcrumbs>
    </Box>
  );
};

export default ResourceBreadcrumbs;

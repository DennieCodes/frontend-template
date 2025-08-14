import React from 'react';
import { Box, Typography } from '@mui/material';
import { ResourceReviewsProps } from './types';

const ResourceReviews: React.FC<ResourceReviewsProps> = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h6" gutterBottom>
        Reviews
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Reviews functionality would be implemented here.
      </Typography>
    </Box>
  );
};

export default ResourceReviews;

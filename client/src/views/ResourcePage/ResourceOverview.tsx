import React from 'react';
import { Box, Typography, Chip } from '@mui/material';
import { ResourceOverviewProps } from './types';

const ResourceOverview: React.FC<ResourceOverviewProps> = ({ resource }) => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h6" gutterBottom>
        About
      </Typography>
      <Typography variant="body1" paragraph>
        {resource.description}
      </Typography>

      {resource.services.length > 0 && (
        <Box sx={{ mt: 3 }}>
          <Typography variant="h6" gutterBottom>
            Services Offered
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
            {resource.services.map((service, index) => (
              <Chip
                key={index}
                label={service}
                variant="outlined"
              />
            ))}
          </Box>
        </Box>
      )}

      {resource.tags.length > 0 && (
        <Box sx={{ mt: 3 }}>
          <Typography variant="h6" gutterBottom>
            Tags
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
            {resource.tags.map((tag, index) => (
              <Chip
                key={index}
                label={tag}
                size="small"
                variant="outlined"
              />
            ))}
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default ResourceOverview;

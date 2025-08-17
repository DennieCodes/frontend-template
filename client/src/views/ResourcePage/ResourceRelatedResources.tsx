import React from 'react';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

interface ResourceRelatedResourcesProps {
  resource?: {
    relatedResources?: any[];
  };
}

const ResourceRelatedResources: React.FC<ResourceRelatedResourcesProps> = ({ resource }) => {
  return (
    <Paper elevation={2} sx={{ p: 3, mb: 3 }}>
      <Typography variant="h6" gutterBottom>
        Related Resources
      </Typography>
      {resource?.relatedResources && resource.relatedResources.length > 0 ? (
        <Box>
          {resource.relatedResources.map((relatedResource, index) => (
            <Typography key={index} variant="body2" color="text.secondary">
              {relatedResource.name}
            </Typography>
          ))}
        </Box>
      ) : (
        <Typography variant="body2" color="text.secondary">
          No related resources available.
        </Typography>
      )}
    </Paper>
  );
};

export default ResourceRelatedResources;

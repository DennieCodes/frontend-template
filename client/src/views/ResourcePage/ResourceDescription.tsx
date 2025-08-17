import React from 'react';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

interface ResourceDescriptionProps {
  resource?: {
    description?: string;
  };
}

const ResourceDescription: React.FC<ResourceDescriptionProps> = ({ resource }) => {
  return (
    <Paper elevation={2} sx={{ p: 3, mb: 3 }}>
      <Typography variant="h6" gutterBottom>
        Description
      </Typography>
      <Typography variant="body1" color="text.secondary">
        {resource?.description || 'No description available.'}
      </Typography>
    </Paper>
  );
};

export default ResourceDescription;

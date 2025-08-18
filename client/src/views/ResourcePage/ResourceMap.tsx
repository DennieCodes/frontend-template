import React from 'react';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

interface ResourceMapProps {
  resource?: {
    coordinates?: {
      lat: number;
      lng: number;
    };
  };
}

const ResourceMap: React.FC<ResourceMapProps> = ({ resource: _resource }) => {
  return (
    <Paper elevation={2} sx={{ p: 3, mb: 3 }}>
      <Typography variant="h6" gutterBottom>
        Map
      </Typography>
      <Box sx={{ height: 200, bgcolor: 'grey.200', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Typography variant="body2" color="text.secondary">
          Map placeholder
        </Typography>
      </Box>
    </Paper>
  );
};

export default ResourceMap;

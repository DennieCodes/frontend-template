import React from 'react';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';


interface ResourceLocationProps {
  resource?: {
    location?: {
      address?: string;
      city?: string;
      state?: string;
      zipCode?: string;
    };
  };
}

const ResourceLocation: React.FC<ResourceLocationProps> = ({ resource }) => {
  return (
    <Paper elevation={2} sx={{ p: 3, mb: 3 }}>
      <Typography variant="h6" gutterBottom>
        Location
      </Typography>
      <Typography variant="body1" color="text.secondary">
        {resource?.location?.address && `${resource.location.address}, `}
        {resource?.location?.city && `${resource.location.city}, `}
        {resource?.location?.state && `${resource.location.state} `}
        {resource?.location?.zipCode && resource.location.zipCode}
      </Typography>
    </Paper>
  );
};

export default ResourceLocation;

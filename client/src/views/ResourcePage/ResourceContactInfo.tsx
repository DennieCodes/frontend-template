import React from 'react';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';


interface ResourceContactInfoProps {
  resource?: {
    contactInfo?: {
      phone?: string;
      email?: string;
      website?: string;
    };
  };
}

const ResourceContactInfo: React.FC<ResourceContactInfoProps> = ({ resource }) => {
  return (
    <Paper elevation={2} sx={{ p: 3, mb: 3 }}>
      <Typography variant="h6" gutterBottom>
        Contact Information
      </Typography>
      {resource?.contactInfo?.phone && (
        <Typography variant="body1" color="text.secondary">
          Phone: {resource.contactInfo.phone}
        </Typography>
      )}
      {resource?.contactInfo?.email && (
        <Typography variant="body1" color="text.secondary">
          Email: {resource.contactInfo.email}
        </Typography>
      )}
      {resource?.contactInfo?.website && (
        <Typography variant="body1" color="text.secondary">
          Website: {resource.contactInfo.website}
        </Typography>
      )}
    </Paper>
  );
};

export default ResourceContactInfo;

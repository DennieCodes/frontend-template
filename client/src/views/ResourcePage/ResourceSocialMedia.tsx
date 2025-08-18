import React from 'react';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';


interface ResourceSocialMediaProps {
  resource?: {
    socialMedia?: {
      facebook?: string;
      twitter?: string;
      instagram?: string;
      linkedin?: string;
    };
  };
}

const ResourceSocialMedia: React.FC<ResourceSocialMediaProps> = ({ resource }) => {
  return (
    <Paper elevation={2} sx={{ p: 3, mb: 3 }}>
      <Typography variant="h6" gutterBottom>
        Social Media
      </Typography>
      {resource?.socialMedia?.facebook && (
        <Typography variant="body2" color="text.secondary">
          Facebook: {resource.socialMedia.facebook}
        </Typography>
      )}
      {resource?.socialMedia?.twitter && (
        <Typography variant="body2" color="text.secondary">
          Twitter: {resource.socialMedia.twitter}
        </Typography>
      )}
      {resource?.socialMedia?.instagram && (
        <Typography variant="body2" color="text.secondary">
          Instagram: {resource.socialMedia.instagram}
        </Typography>
      )}
      {resource?.socialMedia?.linkedin && (
        <Typography variant="body2" color="text.secondary">
          LinkedIn: {resource.socialMedia.linkedin}
        </Typography>
      )}
    </Paper>
  );
};

export default ResourceSocialMedia;

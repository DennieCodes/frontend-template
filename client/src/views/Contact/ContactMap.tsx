import React from 'react';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

interface ContactMapProps {
  location?: {
    address?: string;
    coordinates?: {
      lat: number;
      lng: number;
    };
  };
}

const ContactMap: React.FC<ContactMapProps> = ({ location }) => {
  return (
    <Paper elevation={2} sx={{ p: 3, height: '100%' }}>
      <Typography variant="h6" gutterBottom>
        Our Location
      </Typography>
      <Box sx={{ height: 300, bgcolor: 'grey.200', display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
        <Typography variant="body2" color="text.secondary">
          Map placeholder
        </Typography>
      </Box>
      {location?.address && (
        <Typography variant="body2" color="text.secondary">
          {location.address}
        </Typography>
      )}
    </Paper>
  );
};

export default ContactMap;

import React from 'react';
import { Card, CardContent, Typography, Box, Button } from '@mui/material';
import { Phone, Email, Language, Directions, Share } from '@mui/icons-material';
import { ResourceContactCardProps } from './types';

const ResourceContactCard: React.FC<ResourceContactCardProps> = ({ resource }) => {
  return (
    <Card sx={{ mb: 3 }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Get in Touch
        </Typography>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {resource.contact.phone && (
            <Button
              variant="outlined"
              startIcon={<Phone />}
              fullWidth
              href={`tel:${resource.contact.phone}`}
            >
              Call Now
            </Button>
          )}

          {resource.contact.email && (
            <Button
              variant="outlined"
              startIcon={<Email />}
              fullWidth
              href={`mailto:${resource.contact.email}`}
            >
              Send Email
            </Button>
          )}

          {resource.contact.website && (
            <Button
              variant="outlined"
              startIcon={<Language />}
              fullWidth
              href={resource.contact.website}
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Website
            </Button>
          )}

          <Button
            variant="contained"
            startIcon={<Directions />}
            fullWidth
          >
            Get Directions
          </Button>

          <Button
            variant="outlined"
            startIcon={<Share />}
            fullWidth
          >
            Share
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ResourceContactCard;

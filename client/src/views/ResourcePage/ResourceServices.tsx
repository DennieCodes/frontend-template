import React from 'react';
import { Box, Typography, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Star } from '@mui/icons-material';
import { ResourceServicesProps } from './types';

const ResourceServices: React.FC<ResourceServicesProps> = ({ resource }) => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h6" gutterBottom>
        Services
      </Typography>
      <List>
        {resource?.services?.map((service, index) => (
          <ListItem key={index}>
            <ListItemIcon>
              <Star color="primary" />
            </ListItemIcon>
            <ListItemText primary={service} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default ResourceServices;

import React from 'react';
import { Grid, Typography, List, ListItem, ListItemIcon, ListItemText, Box } from '@mui/material';
import { Phone, Email, Language, AccessTime } from '@mui/icons-material';
import { ResourceContactHoursProps } from './types';

const ResourceContactHours: React.FC<ResourceContactHoursProps> = ({ resource }) => {
  const formatHours = (hours: any) => {
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    return days.map(day => {
      const dayHours = hours[day.toLowerCase()];
      if (!dayHours) return null;

      if (dayHours.closed) {
        return `${day}: Closed`;
      }
      return `${day}: ${dayHours.open} - ${dayHours.close}`;
    }).filter(Boolean);
  };

  return (
    <Grid container spacing={3} sx={{ p: 3 }}>
      <Grid item xs={12} md={6}>
        <Typography variant="h6" gutterBottom>
          Contact Information
        </Typography>
        <List>
          {resource.contact.phone && (
            <ListItem>
              <ListItemIcon>
                <Phone color="primary" />
              </ListItemIcon>
              <ListItemText primary={resource.contact.phone} />
            </ListItem>
          )}
          {resource.contact.email && (
            <ListItem>
              <ListItemIcon>
                <Email color="primary" />
              </ListItemIcon>
              <ListItemText primary={resource.contact.email} />
            </ListItem>
          )}
          {resource.contact.website && (
            <ListItem>
              <ListItemIcon>
                <Language color="primary" />
              </ListItemIcon>
              <ListItemText primary={resource.contact.website} />
            </ListItem>
          )}
        </List>
      </Grid>

      <Grid item xs={12} md={6}>
        {resource.hours && (
          <Box>
            <Typography variant="h6" gutterBottom>
              Hours of Operation
            </Typography>
            <List>
              {formatHours(resource.hours).map((hours, index) => (
                <ListItem key={index}>
                  <ListItemIcon>
                    <AccessTime color="primary" />
                  </ListItemIcon>
                  <ListItemText primary={hours} />
                </ListItem>
              ))}
            </List>
          </Box>
        )}
      </Grid>
    </Grid>
  );
};

export default ResourceContactHours;

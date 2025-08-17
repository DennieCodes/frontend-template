import React from 'react';
import Grid from '@mui/material/GridLegacy';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { ResourceContactHoursProps } from './types';

const ResourceContactHours: React.FC<ResourceContactHoursProps> = ({ hours }) => {
  const daysOfWeek = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday'
  ];

  return (
    <Box sx={{ mt: 3 }}>
      <Typography variant="h6" component="h3" gutterBottom>
        Contact Hours
      </Typography>

      <Grid container spacing={2}>
        <Grid xs={12} md={6}>
          <List>
            {daysOfWeek.slice(0, 5).map((day) => {
              const dayHours = hours[day.toLowerCase()];
              return (
                <ListItem key={day}>
                  <ListItemIcon>
                    <AccessTimeIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary={day}
                    secondary={
                      dayHours?.closed
                        ? 'Closed'
                        : dayHours?.open && dayHours?.close
                        ? `${dayHours.open} - ${dayHours.close}`
                        : 'Hours not available'
                    }
                  />
                </ListItem>
              );
            })}
          </List>
        </Grid>
        <Grid xs={12} md={6}>
          <List>
            {daysOfWeek.slice(5).map((day) => {
              const dayHours = hours[day.toLowerCase()];
              return (
                <ListItem key={day}>
                  <ListItemIcon>
                    <AccessTimeIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary={day}
                    secondary={
                      dayHours?.closed
                        ? 'Closed'
                        : dayHours?.open && dayHours?.close
                        ? `${dayHours.open} - ${dayHours.close}`
                        : 'Hours not available'
                    }
                  />
                </ListItem>
              );
            })}
          </List>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ResourceContactHours;

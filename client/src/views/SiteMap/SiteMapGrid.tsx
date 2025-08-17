import React from 'react';
import Grid from '@mui/material/GridLegacy';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { SiteMapGridProps } from './types';

const SiteMapGrid: React.FC<SiteMapGridProps> = ({ sections }) => {
  return (
    <Grid container spacing={4}>
      {sections.map((section, index) => (
        <Grid
          key={index}
          xs={12}
          md={6}
          lg={4}
        >
          <Paper elevation={2} sx={{ p: 3, height: '100%' }}>
            <Typography variant="h6" component="h3" gutterBottom>
              {section.title}
            </Typography>
            <List dense>
              {section.links.map((link, linkIndex) => (
                <ListItem key={linkIndex} sx={{ px: 0 }}>
                  <ListItemText
                    primary={
                      <Typography
                        component="a"
                        href={link.url}
                        variant="body2"
                        color="text.primary"
                        sx={{
                          textDecoration: 'none',
                          '&:hover': {
                            textDecoration: 'underline',
                            color: 'primary.main',
                          },
                        }}
                      >
                        {link.title}
                      </Typography>
                    }
                  />
                </ListItem>
              ))}
            </List>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};

export default SiteMapGrid;

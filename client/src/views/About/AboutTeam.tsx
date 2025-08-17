import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/GridLegacy';
import Avatar from '@mui/material/Avatar';
import { AboutTeamProps } from './types';
import { mockData } from './mockData';

const AboutTeam: React.FC<AboutTeamProps> = ({ title, subtitle, teamMembers = mockData.teamMembers }) => {
  return (
    <Box sx={{ py: 8 }}>
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography variant="h2" component="h2" gutterBottom>
          {title}
        </Typography>
        <Typography variant="h5" color="text.secondary" paragraph>
          {subtitle}
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {teamMembers.map((member, index) => (
          <Grid
            key={index}
            xs={12}
            md={6}
            lg={4}
            sx={{ textAlign: 'center' }}
          >
            <Box sx={{ mb: 2 }}>
              <Avatar
                src={member.avatar}
                alt={member.name}
                sx={{ width: 120, height: 120, mx: 'auto', mb: 2 }}
              />
              <Typography variant="h6" component="h3" gutterBottom>
                {member.name}
              </Typography>
              <Typography variant="body1" color="text.secondary" gutterBottom>
                {member.role}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {member.bio}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default AboutTeam;

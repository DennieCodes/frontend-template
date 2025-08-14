import React from 'react';
import { Typography, Box, Grid, Avatar } from '@mui/material';
import { LAYOUT_CONSTANTS, layoutUtils, typographyStyles } from '../../constants/layout';
import { AboutTeamProps } from './types';

const AboutTeam: React.FC<AboutTeamProps> = ({ title, description, teamMembers }) => {
  return (
    <Box sx={{
      ...layoutUtils.getContentLayout('centered'),
    }}>
      <Typography
        variant="h4"
        component="h2"
        gutterBottom
        sx={{
          ...typographyStyles.heading,
          mb: LAYOUT_CONSTANTS.SPACING.MD,
          maxWidth: layoutUtils.getContentWidth('standard'),
          mx: 'auto',
          textAlign: 'center',
        }}
      >
        {title}
      </Typography>
      <Typography
        variant="body1"
        sx={{
          ...typographyStyles.body,
          mb: LAYOUT_CONSTANTS.SPACING.LG,
          maxWidth: layoutUtils.getContentWidth('standard'),
          mx: 'auto',
          textAlign: 'center',
        }}
      >
        {description}
      </Typography>
      <Box sx={{
        maxWidth: layoutUtils.getContentWidth('wide'),
        mx: 'auto',
      }}>
        <Grid container spacing={LAYOUT_CONSTANTS.GRID.SPACING.MD}>
          {teamMembers.map((member, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Box sx={{ textAlign: 'center' }}>
                <Avatar sx={{ width: 120, height: 120, mx: 'auto', mb: 2, bgcolor: member.avatarColor }}>
                  <Typography variant="h4">{member.initials}</Typography>
                </Avatar>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                  {member.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {member.position}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default AboutTeam;

import React from 'react';
import { Box } from '@mui/material';
import AboutHero from './AboutHero';
import AboutMission from './AboutMission';
import AboutValues from './AboutValues';
import AboutTeam from './AboutTeam';
import { aboutHeroData, aboutMissionData, aboutValuesData, aboutTeamData } from './mockData';

const AboutPage: React.FC = () => {
  return (
    <Box sx={{ width: '100%' }}>
      <AboutHero {...aboutHeroData} />
      <AboutMission {...aboutMissionData} />
      <AboutValues {...aboutValuesData} />
      <AboutTeam {...aboutTeamData} />
    </Box>
  );
};

export default AboutPage;

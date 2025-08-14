import React from 'react';
import { Typography, Box } from '@mui/material';
import { LAYOUT_CONSTANTS, layoutUtils, typographyStyles } from '../../constants/layout';
import { AboutMissionProps } from './types';

const AboutMission: React.FC<AboutMissionProps> = ({ title, content }) => {
  return (
    <Box sx={{
      ...layoutUtils.getContentLayout('centered'),
      mb: LAYOUT_CONSTANTS.SPACING.LG,
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
        }}
      >
        {title}
      </Typography>
      {content.map((paragraph, index) => (
        <Typography
          key={index}
          variant="body1"
          sx={{
            ...typographyStyles.body,
            mb: index < content.length - 1 ? LAYOUT_CONSTANTS.SPACING.MD : 0,
            maxWidth: layoutUtils.getContentWidth('standard'),
            mx: 'auto',
          }}
        >
          {paragraph}
        </Typography>
      ))}
    </Box>
  );
};

export default AboutMission;

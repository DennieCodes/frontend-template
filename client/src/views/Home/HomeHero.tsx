import React from 'react';
import { Box } from '@mui/material';
import HomeHeroContent from './HomeHeroContent';
import { HomeHeroProps } from './types';

const HomeHero: React.FC<HomeHeroProps> = ({
  title,
  subtitle,
  backgroundImage,
  ctaText,
  onCtaClick
}) => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
          zIndex: 1,
        },
      }}
    >
      <HomeHeroContent
        title={title}
        subtitle={subtitle}
        ctaText={ctaText}
        onCtaClick={onCtaClick}
      />
    </Box>
  );
};

export default HomeHero;

import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import { HomeHeroContentProps } from './types';

const HomeHeroContent: React.FC<HomeHeroContentProps> = ({
  title,
  subtitle,
  ctaText,
  onCtaClick
}) => {
  return (
    <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
      <Box
        sx={{
          textAlign: 'center',
          color: 'white',
          maxWidth: '800px',
          mx: 'auto',
        }}
      >
        <Typography
          variant="h2"
          component="h1"
          gutterBottom
          sx={{
            fontWeight: 700,
            mb: 3,
            fontSize: { xs: '2.5rem', md: '3.5rem' },
            textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
          }}
        >
          {title}
        </Typography>

        <Typography
          variant="h5"
          component="h2"
          gutterBottom
          sx={{
            fontWeight: 300,
            mb: 4,
            opacity: 0.9,
            fontSize: { xs: '1.2rem', md: '1.5rem' },
            textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
          }}
        >
          {subtitle}
        </Typography>

        <Box sx={{ mt: 4 }}>
          <Button
            variant="contained"
            size="large"
            onClick={onCtaClick}
            sx={{
              px: 4,
              py: 1.5,
              fontSize: '1.1rem',
              fontWeight: 600,
              borderRadius: 2,
              textTransform: 'none',
              boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
              '&:hover': {
                transform: 'translateY(-2px)',
                boxShadow: '0 6px 16px rgba(0,0,0,0.4)',
              },
              transition: 'all 0.3s ease',
            }}
          >
            {ctaText}
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default HomeHeroContent;

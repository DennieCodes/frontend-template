import React from 'react';
import { Paper, Typography, Box } from '@mui/material';
import { WelcomeMessageProps } from './types';
import { LAYOUT_CONSTANTS, layoutUtils, typographyStyles } from '../../constants/layout';

const WelcomeMessage: React.FC<WelcomeMessageProps> = ({ userName }) => {
  const features = [
    'Email/password authentication',
    'OAuth login simulation (Google & GitHub)',
    'Protected routes with automatic redirects',
    'Redux state management for user authentication',
    'Responsive Material UI components',
  ];

  return (
    <Paper sx={{
      p: LAYOUT_CONSTANTS.SPACING.MD,
      height: '100%',
      maxWidth: layoutUtils.getContentWidth('standard'),
    }}>
      <Typography
        variant="h5"
        gutterBottom
        sx={{
          ...typographyStyles.heading,
          mb: LAYOUT_CONSTANTS.SPACING.MD,
        }}
      >
        Welcome back, {userName}! 👋
      </Typography>
      <Typography
        variant="body1"
        paragraph
        sx={{
          ...typographyStyles.body,
          mb: LAYOUT_CONSTANTS.SPACING.MD,
        }}
      >
        You have successfully logged in to your account. This is a simulated authentication system
        that demonstrates how to implement protected routes and user state management in a React application.
      </Typography>
      <Typography
        variant="body1"
        paragraph
        sx={{
          ...typographyStyles.body,
          mb: LAYOUT_CONSTANTS.SPACING.SM,
        }}
      >
        Features implemented:
      </Typography>
      <Box component="ul" sx={{ pl: LAYOUT_CONSTANTS.SPACING.MD }}>
        {features.map((feature, index) => (
          <Typography
            key={index}
            component="li"
            variant="body2"
            sx={{
              ...typographyStyles.body,
              mb: LAYOUT_CONSTANTS.SPACING.XS,
            }}
          >
            {feature}
          </Typography>
        ))}
      </Box>
    </Paper>
  );
};

export default WelcomeMessage;

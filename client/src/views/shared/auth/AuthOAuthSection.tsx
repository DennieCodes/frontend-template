import React from 'react';
import { Box, Divider, Typography } from '@mui/material';
import OAuthButton from '../../../components/OAuthButton/OAuthButton';
import { AuthOAuthSectionProps } from './types';

const AuthOAuthSection: React.FC<AuthOAuthSectionProps> = ({ onOAuthLogin }) => {
  return (
    <>
      <Divider sx={{ width: '100%', my: 2 }}>
        <Typography variant="body2" color="text.secondary">
          OR
        </Typography>
      </Divider>

      <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 2 }}>
        <OAuthButton
          provider="google"
          onClick={() => onOAuthLogin('google')}
        />
        <OAuthButton
          provider="github"
          onClick={() => onOAuthLogin('github')}
        />
      </Box>
    </>
  );
};

export default AuthOAuthSection;

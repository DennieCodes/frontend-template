import React from 'react';
import { Container, Paper, Typography, Box, Alert } from '@mui/material';
import { Link } from 'react-router-dom';
import { AuthLayoutProps } from './types';

const AuthLayout: React.FC<AuthLayoutProps> = ({
  title,
  subtitle,
  children,
  footerText,
  footerLinkText,
  footerLinkTo,
}) => {
  return (
    <Container maxWidth="sm" sx={{ py: 8 }}>
      <Paper
        elevation={3}
        sx={{
          p: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h4" gutterBottom>
          {title}
        </Typography>

        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
          {subtitle}
        </Typography>

        {children}

        <Box sx={{ mt: 3, textAlign: 'center' }}>
          <Typography variant="body2" color="text.secondary">
            {footerText}{' '}
            <Link to={footerLinkTo} style={{ textDecoration: 'none', color: 'inherit' }}>
              {footerLinkText}
            </Link>
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default AuthLayout;

import React from 'react';
import {
  Container,
  Typography,
  Box,
  Button,
  Paper,
  Grid
} from '@mui/material';
import {
  Home as HomeIcon,
  Search as SearchIcon,
  ArrowBack as ArrowBackIcon
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Box sx={{ textAlign: 'center' }}>
        {/* 404 Illustration */}
        <Box sx={{ mb: 4 }}>
          <Typography
            variant="h1"
            component="h1"
            sx={{
              fontSize: { xs: '6rem', md: '8rem' },
              fontWeight: 700,
              color: 'primary.main',
              lineHeight: 1,
              mb: 2
            }}
          >
            404
          </Typography>
          <Typography
            variant="h2"
            component="h2"
            sx={{
              fontSize: { xs: '1.5rem', md: '2rem' },
              fontWeight: 600,
              color: 'text.primary',
              mb: 2
            }}
          >
            Page Not Found
          </Typography>
        </Box>

        {/* Error Message */}
        <Paper sx={{ p: 4, mb: 4, maxWidth: 600, mx: 'auto' }}>
          <Typography variant="body1" color="text.secondary" paragraph>
            Oops! The page you're looking for doesn't exist. It might have been moved, deleted,
            or you entered the wrong URL.
          </Typography>

          <Typography variant="body1" color="text.secondary" paragraph>
            Don't worry, you can easily get back on track by using the navigation options below.
          </Typography>
        </Paper>

        {/* Action Buttons */}
        <Grid container spacing={2} justifyContent="center" sx={{ mb: 4 }}>
          <Grid item>
            <Button
              variant="contained"
              size="large"
              startIcon={<HomeIcon />}
              onClick={handleGoHome}
              sx={{ px: 4, py: 1.5 }}
            >
              Go to Homepage
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="outlined"
              size="large"
              startIcon={<ArrowBackIcon />}
              onClick={handleGoBack}
              sx={{ px: 4, py: 1.5 }}
            >
              Go Back
            </Button>
          </Grid>
        </Grid>

        {/* Helpful Links */}
        <Box sx={{ mt: 6 }}>
          <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
            Looking for something specific?
          </Typography>

          <Grid container spacing={3} justifyContent="center">
            <Grid item xs={12} sm={6} md={3}>
              <Button
                variant="text"
                fullWidth
                startIcon={<SearchIcon />}
                onClick={() => navigate('/articles')}
                sx={{ py: 2 }}
              >
                Browse Articles
              </Button>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Button
                variant="text"
                fullWidth
                startIcon={<SearchIcon />}
                onClick={() => navigate('/resources')}
                sx={{ py: 2 }}
              >
                View Resources
              </Button>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Button
                variant="text"
                fullWidth
                startIcon={<SearchIcon />}
                onClick={() => navigate('/about')}
                sx={{ py: 2 }}
              >
                About Us
              </Button>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Button
                variant="text"
                fullWidth
                startIcon={<SearchIcon />}
                onClick={() => navigate('/contact')}
                sx={{ py: 2 }}
              >
                Contact Support
              </Button>
            </Grid>
          </Grid>
        </Box>

        {/* Additional Help */}
        <Box sx={{ mt: 6, p: 3, bgcolor: 'grey.50', borderRadius: 2 }}>
          <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
            Still can't find what you're looking for?
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Try using our search function or contact our support team for assistance.
            We're here to help you find what you need.
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default NotFound;
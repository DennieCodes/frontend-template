import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/GridLegacy';
import Paper from '@mui/material/Paper';
import { useNavigate } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleSearch = () => {
    navigate('/search');
  };

  const handleContact = () => {
    navigate('/contact');
  };

  const quickActions = [
    {
      title: 'Go Home',
      description: 'Return to the homepage',
      icon: <HomeIcon sx={{ fontSize: 40 }} />,
      action: handleGoHome,
      color: 'primary',
    },
    {
      title: 'Go Back',
      description: 'Return to the previous page',
      icon: <ArrowBackIcon sx={{ fontSize: 40 }} />,
      action: handleGoBack,
      color: 'secondary',
    },
    {
      title: 'Search',
      description: 'Search for what you need',
      icon: <SearchIcon sx={{ fontSize: 40 }} />,
      action: handleSearch,
      color: 'success',
    },
    {
      title: 'Contact Support',
      description: 'Get help from our team',
      icon: <ContactSupportIcon sx={{ fontSize: 40 }} />,
      action: handleContact,
      color: 'info',
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography variant="h1" component="h1" gutterBottom sx={{ fontSize: '6rem', fontWeight: 'bold' }}>
          404
        </Typography>
        <Typography variant="h2" component="h2" gutterBottom>
          Page Not Found
        </Typography>
        <Typography variant="h5" color="text.secondary" paragraph>
          Sorry, the page you're looking for doesn't exist.
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
          The page might have been moved, deleted, or you entered the wrong URL.
        </Typography>
      </Box>

      <Grid container spacing={3}>
        {quickActions.map((action, index) => (
          <Grid
            key={index}
            xs={12}
            sm={6}
            md={3}
          >
            <Paper
              elevation={2}
              sx={{
                p: 3,
                textAlign: 'center',
                height: '100%',
                cursor: 'pointer',
                transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: 4,
                },
              }}
              onClick={action.action}
            >
              <Box sx={{ color: `${action.color}.main`, mb: 2 }}>
                {action.icon}
              </Box>
              <Typography variant="h6" component="h3" gutterBottom>
                {action.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {action.description}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ mt: 6, textAlign: 'center' }}>
        <Typography variant="h6" gutterBottom>
          Still can't find what you're looking for?
        </Typography>
        <Button
          variant="contained"
          size="large"
          onClick={handleContact}
          sx={{ mr: 2 }}
        >
          Contact Support
        </Button>
        <Button
          variant="outlined"
          size="large"
          onClick={handleSearch}
        >
          Search Site
        </Button>
      </Box>
    </Container>
  );
};

export default NotFound;
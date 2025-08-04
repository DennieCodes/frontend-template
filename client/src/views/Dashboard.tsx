import React from 'react';
import {
  Container,
  Paper,
  Typography,
  Button,
  Box,
  Avatar,
  Grid,
  Card,
  CardContent,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../slice/authSlice';
import { RootState } from '../store';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonIcon from '@mui/icons-material/Person';

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state: RootState) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ mb: 4, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="h3" component="h1">
          Dashboard
        </Typography>
        <Button
          variant="outlined"
          startIcon={<LogoutIcon />}
          onClick={handleLogout}
          color="error"
        >
          Logout
        </Button>
      </Box>

      <Grid container spacing={3}>
        {/* User Profile Card */}
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Avatar sx={{ mr: 2, bgcolor: 'primary.main' }}>
                  <PersonIcon />
                </Avatar>
                <Box>
                  <Typography variant="h6">{user?.name}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {user?.email}
                  </Typography>
                </Box>
              </Box>
              <Typography variant="body2" color="text.secondary">
                Welcome to your dashboard! This is a protected route that only authenticated users can access.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Welcome Message */}
        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>
              Welcome back, {user?.name}! 👋
            </Typography>
            <Typography variant="body1" paragraph>
              You have successfully logged in to your account. This is a simulated authentication system
              that demonstrates how to implement protected routes and user state management in a React application.
            </Typography>
            <Typography variant="body1" paragraph>
              Features implemented:
            </Typography>
            <Box component="ul" sx={{ pl: 2 }}>
              <Typography component="li" variant="body2">
                Email/password authentication
              </Typography>
              <Typography component="li" variant="body2">
                OAuth login simulation (Google & GitHub)
              </Typography>
              <Typography component="li" variant="body2">
                Protected routes with automatic redirects
              </Typography>
              <Typography component="li" variant="body2">
                Redux state management for user authentication
              </Typography>
              <Typography component="li" variant="body2">
                Responsive Material UI components
              </Typography>
            </Box>
          </Paper>
        </Grid>

        {/* Demo Cards */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Authentication Status
              </Typography>
              <Typography variant="body2" color="text.secondary">
                You are currently authenticated and can access all protected features.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Session Management
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Your session is active. Click the logout button to sign out and return to the login page.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;
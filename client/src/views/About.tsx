import React from 'react';
import { Container, Typography, Box, Grid, Paper, Avatar } from '@mui/material';
import { Business, Lightbulb, Group, TrendingUp } from '@mui/icons-material';

const About: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 6 }}>
      {/* Hero Section */}
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 700 }}>
          About Our Company
        </Typography>
        <Typography variant="h5" color="text.secondary" sx={{ maxWidth: '800px', mx: 'auto' }}>
          We're passionate about creating innovative solutions that make a difference in people's lives.
        </Typography>
      </Box>

      {/* Mission Section */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
          Our Mission
        </Typography>
        <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.8, mb: 3 }}>
          To deliver exceptional value to our customers through innovative technology solutions,
          while maintaining the highest standards of quality and customer service. We believe in
          creating products that not only meet current needs but anticipate future challenges.
        </Typography>
        <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
          Our team is dedicated to continuous improvement and staying at the forefront of
          industry trends to provide cutting-edge solutions that drive success for our clients.
        </Typography>
      </Box>

      {/* Values Section */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 600, mb: 4 }}>
          Our Values
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6} lg={3}>
            <Paper elevation={2} sx={{ p: 3, textAlign: 'center', height: '100%' }}>
              <Business sx={{ fontSize: 40, color: 'primary.main', mb: 2 }} />
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                Integrity
              </Typography>
              <Typography variant="body2" color="text.secondary">
                We conduct business with honesty, transparency, and ethical practices in everything we do.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <Paper elevation={2} sx={{ p: 3, textAlign: 'center', height: '100%' }}>
              <Lightbulb sx={{ fontSize: 40, color: 'primary.main', mb: 2 }} />
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                Innovation
              </Typography>
              <Typography variant="body2" color="text.secondary">
                We constantly push boundaries and explore new technologies to deliver cutting-edge solutions.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <Paper elevation={2} sx={{ p: 3, textAlign: 'center', height: '100%' }}>
              <Group sx={{ fontSize: 40, color: 'primary.main', mb: 2 }} />
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                Collaboration
              </Typography>
              <Typography variant="body2" color="text.secondary">
                We believe in the power of teamwork and foster an environment of mutual respect and support.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <Paper elevation={2} sx={{ p: 3, textAlign: 'center', height: '100%' }}>
              <TrendingUp sx={{ fontSize: 40, color: 'primary.main', mb: 2 }} />
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                Excellence
              </Typography>
              <Typography variant="body2" color="text.secondary">
                We strive for excellence in every project, delivering quality results that exceed expectations.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>

      {/* Team Section */}
      <Box>
        <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 600, mb: 4 }}>
          Our Team
        </Typography>
        <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.8, mb: 4 }}>
          Our diverse team brings together expertise from various fields, creating a dynamic
          environment where innovation thrives. We're united by our passion for technology
          and commitment to delivering exceptional results.
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Box sx={{ textAlign: 'center' }}>
              <Avatar sx={{ width: 120, height: 120, mx: 'auto', mb: 2, bgcolor: 'primary.main' }}>
                <Typography variant="h4">JD</Typography>
              </Avatar>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                John Doe
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Chief Executive Officer
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={{ textAlign: 'center' }}>
              <Avatar sx={{ width: 120, height: 120, mx: 'auto', mb: 2, bgcolor: 'secondary.main' }}>
                <Typography variant="h4">JS</Typography>
              </Avatar>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                Jane Smith
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Chief Technology Officer
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={{ textAlign: 'center' }}>
              <Avatar sx={{ width: 120, height: 120, mx: 'auto', mb: 2, bgcolor: 'success.main' }}>
                <Typography variant="h4">MJ</Typography>
              </Avatar>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                Mike Johnson
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Head of Product
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default About;
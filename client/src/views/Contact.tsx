import React from 'react';
import { Container, Typography, Box, Grid, Paper, TextField, Button, Divider } from '@mui/material';
import { Email, Phone, LocationOn, AccessTime } from '@mui/icons-material';

const Contact: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 6 }}>
      {/* Hero Section */}
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 700 }}>
          Get in Touch
        </Typography>
        <Typography variant="h5" color="text.secondary" sx={{ maxWidth: '800px', mx: 'auto' }}>
          We'd love to hear from you. Send us a message and we'll respond as soon as possible.
        </Typography>
      </Box>

      <Grid container spacing={6}>
        {/* Contact Form */}
        <Grid item xs={12} lg={8}>
          <Paper elevation={2} sx={{ p: 4 }}>
            <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
              Send us a Message
            </Typography>
            <Box component="form" sx={{ mt: 2 }}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="First Name"
                    variant="outlined"
                    required
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Last Name"
                    variant="outlined"
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Email"
                    type="email"
                    variant="outlined"
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Subject"
                    variant="outlined"
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Message"
                    multiline
                    rows={6}
                    variant="outlined"
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    sx={{
                      px: 4,
                      py: 1.5,
                      fontSize: '1.1rem',
                      fontWeight: 600,
                      borderRadius: 2,
                      textTransform: 'none',
                    }}
                  >
                    Send Message
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Paper>
        </Grid>

        {/* Contact Information */}
        <Grid item xs={12} lg={4}>
          <Box sx={{ mb: 4 }}>
            <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
              Contact Information
            </Typography>

            <Box sx={{ mb: 3 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Email sx={{ color: 'primary.main', mr: 2 }} />
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    Email
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    hello@company.com
                  </Typography>
                </Box>
              </Box>
            </Box>

            <Box sx={{ mb: 3 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Phone sx={{ color: 'primary.main', mr: 2 }} />
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    Phone
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    +1 (555) 123-4567
                  </Typography>
                </Box>
              </Box>
            </Box>

            <Box sx={{ mb: 3 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <LocationOn sx={{ color: 'primary.main', mr: 2 }} />
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    Address
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    123 Business Street<br />
                    Suite 100<br />
                    City, State 12345
                  </Typography>
                </Box>
              </Box>
            </Box>

            <Box>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <AccessTime sx={{ color: 'primary.main', mr: 2 }} />
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    Business Hours
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Monday - Friday: 9:00 AM - 6:00 PM<br />
                    Saturday: 10:00 AM - 4:00 PM<br />
                    Sunday: Closed
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>

          <Divider sx={{ my: 3 }} />

          {/* FAQ Section */}
          <Box>
            <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
              Frequently Asked Questions
            </Typography>

            <Box sx={{ mb: 3 }}>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                How quickly do you respond?
              </Typography>
              <Typography variant="body2" color="text.secondary">
                We typically respond to all inquiries within 24 hours during business days.
              </Typography>
            </Box>

            <Box sx={{ mb: 3 }}>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                Do you offer support?
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Yes, we provide comprehensive support for all our products and services.
              </Typography>
            </Box>

            <Box>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                Can I schedule a meeting?
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Absolutely! Contact us to schedule a consultation or demo session.
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contact;
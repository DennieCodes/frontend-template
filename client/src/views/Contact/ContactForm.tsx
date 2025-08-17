import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/GridLegacy';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { ContactFormProps } from './types';

const ContactForm: React.FC<ContactFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (field: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [field]: event.target.value,
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const [firstName, ...lastNameParts] = formData.name.split(' ');
    const lastName = lastNameParts.join(' ') || '';
    onSubmit({
      firstName,
      lastName,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
    });
  };

  return (
    <Paper elevation={2} sx={{ p: 4 }}>
      <Typography variant="h4" component="h2" gutterBottom>
        Send us a message
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph>
        We'd love to hear from you. Send us a message and we'll respond as soon as possible.
      </Typography>

      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
        <Grid container spacing={3}>
          <Grid xs={12} sm={6}>
            <TextField
              fullWidth
              label="Name"
              value={formData.name}
              onChange={handleChange('name')}
              required
            />
          </Grid>
          <Grid xs={12} sm={6}>
            <TextField
              fullWidth
              label="Email"
              type="email"
              value={formData.email}
              onChange={handleChange('email')}
              required
            />
          </Grid>
          <Grid xs={12}>
            <TextField
              fullWidth
              label="Subject"
              value={formData.subject}
              onChange={handleChange('subject')}
              required
            />
          </Grid>
          <Grid xs={12}>
            <TextField
              fullWidth
              label="Message"
              multiline
              rows={4}
              value={formData.message}
              onChange={handleChange('message')}
              required
            />
          </Grid>
          <Grid xs={12}>
            <Button
              type="submit"
              variant="contained"
              size="large"
              fullWidth
            >
              Send Message
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
};

export default ContactForm;

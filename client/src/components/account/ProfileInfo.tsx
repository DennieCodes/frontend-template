import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/GridLegacy';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { ProfileInfoProps } from './types';

const ProfileInfo: React.FC<ProfileInfoProps> = ({ profile, onSave }) => {
  const [formData, setFormData] = useState({
    firstName: profile?.firstName || '',
    lastName: profile?.lastName || '',
    email: profile?.email || '',
    phone: profile?.phone || '',
    bio: profile?.bio || '',
    location: profile?.location || '',
    website: profile?.website || '',
    company: profile?.company || '',
    jobTitle: profile?.jobTitle || '',
    department: profile?.department || '',
    startDate: profile?.startDate || '',
  });

  const handleChange = (field: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [field]: event.target.value,
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSave(formData);
  };

  return (
    <Paper elevation={2} sx={{ p: 4 }}>
      <Typography variant="h5" component="h2" gutterBottom>
        Profile Information
      </Typography>
      <Typography variant="body2" color="text.secondary" paragraph>
        Update your personal information and profile details.
      </Typography>

      <Box component="form" onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid xs={12} md={3}>
            <Box sx={{ textAlign: 'center' }}>
              <Avatar
                src={profile?.avatar}
                alt={`${formData.firstName} ${formData.lastName}`}
                sx={{ width: 120, height: 120, mx: 'auto', mb: 2 }}
              />
              <IconButton
                color="primary"
                aria-label="upload picture"
                component="label"
                sx={{ mb: 2 }}
              >
                <input hidden accept="image/*" type="file" />
                <PhotoCamera />
              </IconButton>
              <Typography variant="body2" color="text.secondary">
                Click to upload new photo
              </Typography>
            </Box>
          </Grid>

          <Grid xs={12} md={9}>
            <Grid container spacing={2}>
              <Grid xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="First Name"
                  value={formData.firstName}
                  onChange={handleChange('firstName')}
                  required
                />
              </Grid>
              <Grid xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Last Name"
                  value={formData.lastName}
                  onChange={handleChange('lastName')}
                  required
                />
              </Grid>
              <Grid xs={12}>
                <TextField
                  fullWidth
                  label="Email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange('email')}
                  required
                />
              </Grid>
              <Grid xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Phone"
                  value={formData.phone}
                  onChange={handleChange('phone')}
                />
              </Grid>
              <Grid xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Location"
                  value={formData.location}
                  onChange={handleChange('location')}
                />
              </Grid>
              <Grid xs={12}>
                <TextField
                  fullWidth
                  label="Bio"
                  multiline
                  rows={3}
                  value={formData.bio}
                  onChange={handleChange('bio')}
                  placeholder="Tell us about yourself..."
                />
              </Grid>
              <Grid xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Website"
                  value={formData.website}
                  onChange={handleChange('website')}
                />
              </Grid>
              <Grid xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Company"
                  value={formData.company}
                  onChange={handleChange('company')}
                />
              </Grid>
              <Grid xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Job Title"
                  value={formData.jobTitle}
                  onChange={handleChange('jobTitle')}
                />
              </Grid>
              <Grid xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Department"
                  value={formData.department}
                  onChange={handleChange('department')}
                />
              </Grid>
              <Grid xs={12}>
                <TextField
                  fullWidth
                  label="Start Date"
                  type="date"
                  value={formData.startDate}
                  onChange={handleChange('startDate')}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
            </Grid>

            <Box sx={{ mt: 3, display: 'flex', gap: 2 }}>
              <Button type="submit" variant="contained" size="large">
                Save Changes
              </Button>
              <Button variant="outlined" size="large">
                Cancel
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
};

export default ProfileInfo;
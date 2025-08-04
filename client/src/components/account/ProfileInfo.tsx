import React from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  Box,
  Avatar,
  TextField,
  Button,
  Grid,
  Divider
} from '@mui/material';
import {
  Edit as EditIcon,
  Save as SaveIcon,
  Cancel as CancelIcon,
  Person as PersonIcon
} from '@mui/icons-material';

const ProfileInfo: React.FC = () => {
  return (
    <Card>
      <CardHeader
        title="Profile Information"
        action={
          <Button
            variant="outlined"
            startIcon={<EditIcon />}
            size="small"
          >
            Edit Profile
          </Button>
        }
      />
      <CardContent>
        <Box sx={{ mb: 3 }}>
          <Typography variant="body2" color="text.secondary">
            Manage your personal information and account details
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {/* Avatar Section */}
          <Grid item xs={12} md={3}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
              <Avatar
                sx={{ width: 120, height: 120, bgcolor: 'primary.main' }}
              >
                <PersonIcon sx={{ fontSize: 60 }} />
              </Avatar>
              <Button
                variant="outlined"
                size="small"
                startIcon={<EditIcon />}
              >
                Change Photo
              </Button>
              <Typography variant="caption" color="text.secondary" textAlign="center">
                JPG, PNG or GIF. Max size 2MB.
              </Typography>
            </Box>
          </Grid>

          {/* Profile Form */}
          <Grid item xs={12} md={9}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="First Name"
                  defaultValue="John"
                  fullWidth
                  size="small"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Last Name"
                  defaultValue="Doe"
                  fullWidth
                  size="small"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Email Address"
                  defaultValue="john.doe@example.com"
                  fullWidth
                  size="small"
                  type="email"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Phone Number"
                  defaultValue="+1 (555) 123-4567"
                  fullWidth
                  size="small"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Date of Birth"
                  defaultValue="1990-01-15"
                  fullWidth
                  size="small"
                  type="date"
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Bio"
                  defaultValue="Software developer with 5+ years of experience in web development and cloud technologies."
                  fullWidth
                  multiline
                  rows={3}
                  size="small"
                />
              </Grid>
            </Grid>

            <Divider sx={{ my: 3 }} />

            {/* Social Links */}
            <Typography variant="h6" gutterBottom>
              Social Links
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="LinkedIn"
                  defaultValue="linkedin.com/in/johndoe"
                  fullWidth
                  size="small"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="GitHub"
                  defaultValue="github.com/johndoe"
                  fullWidth
                  size="small"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Twitter"
                  defaultValue="@johndoe"
                  fullWidth
                  size="small"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Website"
                  defaultValue="johndoe.dev"
                  fullWidth
                  size="small"
                />
              </Grid>
            </Grid>

            {/* Action Buttons */}
            <Box sx={{ mt: 3, display: 'flex', gap: 2 }}>
              <Button
                variant="contained"
                startIcon={<SaveIcon />}
              >
                Save Changes
              </Button>
              <Button
                variant="outlined"
                startIcon={<CancelIcon />}
              >
                Cancel
              </Button>
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default ProfileInfo;
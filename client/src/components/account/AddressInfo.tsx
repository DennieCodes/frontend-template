import React from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  Box,
  TextField,
  Button,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from '@mui/material';
import {
  Edit as EditIcon,
  Save as SaveIcon,
  Cancel as CancelIcon,
  LocationOn as LocationIcon
} from '@mui/icons-material';

const AddressInfo: React.FC = () => {
  return (
    <Card>
      <CardHeader
        title="Address Information"
        action={
          <Button
            variant="outlined"
            startIcon={<EditIcon />}
            size="small"
          >
            Edit Address
          </Button>
        }
      />
      <CardContent>
        <Box sx={{ mb: 3 }}>
          <Typography variant="body2" color="text.secondary">
            Manage your billing and shipping addresses
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {/* Primary Address */}
          <Grid item xs={12} md={6}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
              <LocationIcon color="primary" />
              <Typography variant="h6">Primary Address</Typography>
            </Box>

            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  label="Address Line 1"
                  defaultValue="123 Main Street"
                  fullWidth
                  size="small"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Address Line 2"
                  defaultValue="Apt 4B"
                  fullWidth
                  size="small"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="City"
                  defaultValue="New York"
                  fullWidth
                  size="small"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth size="small">
                  <InputLabel>State</InputLabel>
                  <Select label="State" defaultValue="NY">
                    <MenuItem value="NY">New York</MenuItem>
                    <MenuItem value="CA">California</MenuItem>
                    <MenuItem value="TX">Texas</MenuItem>
                    <MenuItem value="FL">Florida</MenuItem>
                    <MenuItem value="IL">Illinois</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="ZIP Code"
                  defaultValue="10001"
                  fullWidth
                  size="small"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth size="small">
                  <InputLabel>Country</InputLabel>
                  <Select label="Country" defaultValue="US">
                    <MenuItem value="US">United States</MenuItem>
                    <MenuItem value="CA">Canada</MenuItem>
                    <MenuItem value="UK">United Kingdom</MenuItem>
                    <MenuItem value="DE">Germany</MenuItem>
                    <MenuItem value="FR">France</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </Grid>

          {/* Shipping Address */}
          <Grid item xs={12} md={6}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
              <LocationIcon color="secondary" />
              <Typography variant="h6">Shipping Address</Typography>
            </Box>

            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  label="Address Line 1"
                  defaultValue="456 Business Ave"
                  fullWidth
                  size="small"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Address Line 2"
                  defaultValue="Suite 200"
                  fullWidth
                  size="small"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="City"
                  defaultValue="Los Angeles"
                  fullWidth
                  size="small"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth size="small">
                  <InputLabel>State</InputLabel>
                  <Select label="State" defaultValue="CA">
                    <MenuItem value="NY">New York</MenuItem>
                    <MenuItem value="CA">California</MenuItem>
                    <MenuItem value="TX">Texas</MenuItem>
                    <MenuItem value="FL">Florida</MenuItem>
                    <MenuItem value="IL">Illinois</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="ZIP Code"
                  defaultValue="90210"
                  fullWidth
                  size="small"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth size="small">
                  <InputLabel>Country</InputLabel>
                  <Select label="Country" defaultValue="US">
                    <MenuItem value="US">United States</MenuItem>
                    <MenuItem value="CA">Canada</MenuItem>
                    <MenuItem value="UK">United Kingdom</MenuItem>
                    <MenuItem value="DE">Germany</MenuItem>
                    <MenuItem value="FR">France</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        {/* Address Preferences */}
        <Box sx={{ mt: 3 }}>
          <Typography variant="h6" gutterBottom>
            Address Preferences
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Preferred Delivery Time"
                defaultValue="9:00 AM - 5:00 PM"
                fullWidth
                size="small"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Special Instructions"
                defaultValue="Leave at front desk if not home"
                fullWidth
                size="small"
              />
            </Grid>
          </Grid>
        </Box>

        {/* Action Buttons */}
        <Box sx={{ mt: 3, display: 'flex', gap: 2 }}>
          <Button
            variant="contained"
            startIcon={<SaveIcon />}
          >
            Save Address
          </Button>
          <Button
            variant="outlined"
            startIcon={<CancelIcon />}
          >
            Cancel
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default AddressInfo;
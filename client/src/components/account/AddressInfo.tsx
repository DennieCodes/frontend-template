import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/GridLegacy';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { AddressInfoProps } from './types';

const AddressInfo: React.FC<AddressInfoProps> = ({ address, onSave }) => {
  const [formData, setFormData] = useState({
    streetAddress: address?.streetAddress || '',
    apartment: address?.apartment || '',
    city: address?.city || '',
    state: address?.state || '',
    zipCode: address?.zipCode || '',
    country: address?.country || 'United States',
    addressType: address?.addressType || 'home',
    isDefault: address?.isDefault || false,
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
        Address Information
      </Typography>
      <Typography variant="body2" color="text.secondary" paragraph>
        Update your address information for shipping and billing purposes.
      </Typography>

      <Box component="form" onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid xs={12}>
            <TextField
              fullWidth
              label="Street Address"
              value={formData.streetAddress}
              onChange={handleChange('streetAddress')}
              required
            />
          </Grid>
          <Grid xs={12}>
            <TextField
              fullWidth
              label="Apartment, suite, etc. (optional)"
              value={formData.apartment}
              onChange={handleChange('apartment')}
            />
          </Grid>
          <Grid xs={12} sm={6}>
            <TextField
              fullWidth
              label="City"
              value={formData.city}
              onChange={handleChange('city')}
              required
            />
          </Grid>
          <Grid xs={12} sm={6}>
            <TextField
              fullWidth
              label="State/Province"
              value={formData.state}
              onChange={handleChange('state')}
              required
            />
          </Grid>
          <Grid xs={12} sm={6}>
            <TextField
              fullWidth
              label="ZIP/Postal Code"
              value={formData.zipCode}
              onChange={handleChange('zipCode')}
              required
            />
          </Grid>
          <Grid xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel>Country</InputLabel>
              <Select
                value={formData.country}
                label="Country"
                onChange={(e) => setFormData(prev => ({ ...prev, country: e.target.value }))}
              >
                <MenuItem value="United States">United States</MenuItem>
                <MenuItem value="Canada">Canada</MenuItem>
                <MenuItem value="Mexico">Mexico</MenuItem>
                <MenuItem value="United Kingdom">United Kingdom</MenuItem>
                <MenuItem value="Germany">Germany</MenuItem>
                <MenuItem value="France">France</MenuItem>
                <MenuItem value="Australia">Australia</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel>Address Type</InputLabel>
              <Select
                value={formData.addressType}
                label="Address Type"
                onChange={(e) => setFormData(prev => ({ ...prev, addressType: e.target.value }))}
              >
                <MenuItem value="home">Home</MenuItem>
                <MenuItem value="work">Work</MenuItem>
                <MenuItem value="billing">Billing</MenuItem>
                <MenuItem value="shipping">Shipping</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel>Default Address</InputLabel>
              <Select
                value={formData.isDefault ? 'yes' : 'no'}
                label="Default Address"
                onChange={(e) => setFormData(prev => ({ ...prev, isDefault: e.target.value === 'yes' }))}
              >
                <MenuItem value="yes">Yes</MenuItem>
                <MenuItem value="no">No</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>

        <Box sx={{ mt: 3, display: 'flex', gap: 2 }}>
          <Button type="submit" variant="contained" size="large">
            Save Address
          </Button>
          <Button variant="outlined" size="large">
            Cancel
          </Button>
        </Box>
      </Box>
    </Paper>
  );
};

export default AddressInfo;
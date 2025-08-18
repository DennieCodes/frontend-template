import React from 'react';
import Grid from '@mui/material/GridLegacy';
import {
  Box,
  TextField,
  Typography,
} from '@mui/material';
import { AddressFormProps } from '../../types/checkout';

const AddressForm: React.FC<AddressFormProps> = ({
  address,
  onAddressChange,
  title,
  isBilling: _isBilling = false,
}) => {
  const handleFieldChange = (field: keyof typeof address, value: string) => {
    onAddressChange({
      ...address,
      [field]: value,
    });
  };

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            label="First Name"
            value={address.firstName}
            onChange={(e) => handleFieldChange('firstName', e.target.value)}
            margin="normal"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            label="Last Name"
            value={address.lastName}
            onChange={(e) => handleFieldChange('lastName', e.target.value)}
            margin="normal"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            label="Email"
            type="email"
            value={address.email}
            onChange={(e) => handleFieldChange('email', e.target.value)}
            margin="normal"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            label="Phone"
            type="tel"
            value={address.phone}
            onChange={(e) => handleFieldChange('phone', e.target.value)}
            margin="normal"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            label="Address"
            value={address.address}
            onChange={(e) => handleFieldChange('address', e.target.value)}
            margin="normal"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            label="City"
            value={address.city}
            onChange={(e) => handleFieldChange('city', e.target.value)}
            margin="normal"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            label="State/Province"
            value={address.state}
            onChange={(e) => handleFieldChange('state', e.target.value)}
            margin="normal"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            label="ZIP/Postal Code"
            value={address.zipCode}
            onChange={(e) => handleFieldChange('zipCode', e.target.value)}
            margin="normal"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            label="Country"
            value={address.country}
            onChange={(e) => handleFieldChange('country', e.target.value)}
            margin="normal"
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default AddressForm;

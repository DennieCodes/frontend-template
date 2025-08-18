import React from 'react';
import Grid from '@mui/material/GridLegacy';
import {
  Box,
  TextField,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  RadioGroup,
  FormControlLabel,
  Radio,
  Card,
  CardContent,
} from '@mui/material';
import {
  CreditCard,
  Payment,
} from '@mui/icons-material';
import { PaymentFormProps } from '../../types/checkout';

const PaymentForm: React.FC<PaymentFormProps> = ({
  paymentMethod,
  onPaymentChange,
}) => {
  const handleFieldChange = (field: keyof typeof paymentMethod, value: string) => {
    onPaymentChange({
      ...paymentMethod,
      [field]: value,
    });
  };

  const cardTypes = [
    { value: 'visa', label: 'Visa' },
    { value: 'mastercard', label: 'Mastercard' },
    { value: 'amex', label: 'American Express' },
    { value: 'discover', label: 'Discover' },
  ];

  const months = Array.from({ length: 12 }, (_, i) => ({
    value: String(i + 1).padStart(2, '0'),
    label: String(i + 1).padStart(2, '0'),
  }));

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 10 }, (_, i) => ({
    value: String(currentYear + i),
    label: String(currentYear + i),
  }));

  return (
    <Box>
      <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <Payment />
        Payment Method
      </Typography>

      <RadioGroup
        value={paymentMethod.type}
        onChange={(e) => handleFieldChange('type', e.target.value)}
        sx={{ mb: 3 }}
      >
        <FormControlLabel
          value="credit_card"
          control={<Radio />}
          label={
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <CreditCard />
              Credit Card
            </Box>
          }
        />
        <FormControlLabel
          value="paypal"
          control={<Radio />}
          label="PayPal"
        />
        <FormControlLabel
          value="apple_pay"
          control={<Radio />}
          label="Apple Pay"
        />
        <FormControlLabel
          value="google_pay"
          control={<Radio />}
          label="Google Pay"
        />
      </RadioGroup>

      {paymentMethod.type === 'credit_card' && (
        <Card variant="outlined">
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  label="Card Number"
                  value={paymentMethod.cardNumber || ''}
                  onChange={(e) => handleFieldChange('cardNumber', e.target.value)}
                  placeholder="1234 5678 9012 3456"
                  inputProps={{ maxLength: 19 }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  label="Cardholder Name"
                  value={paymentMethod.cardholderName || ''}
                  onChange={(e) => handleFieldChange('cardholderName', e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth required>
                  <InputLabel>Card Type</InputLabel>
                  <Select
                    value={paymentMethod.cardType || ''}
                    label="Card Type"
                    onChange={(e) => handleFieldChange('cardType', e.target.value)}
                  >
                    {cardTypes.map((type) => (
                      <MenuItem key={type.value} value={type.value}>
                        {type.label}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={4}>
                <FormControl fullWidth required>
                  <InputLabel>Expiry Month</InputLabel>
                  <Select
                    value={paymentMethod.expiryMonth || ''}
                    label="Expiry Month"
                    onChange={(e) => handleFieldChange('expiryMonth', e.target.value)}
                  >
                    {months.map((month) => (
                      <MenuItem key={month.value} value={month.value}>
                        {month.label}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={4}>
                <FormControl fullWidth required>
                  <InputLabel>Expiry Year</InputLabel>
                  <Select
                    value={paymentMethod.expiryYear || ''}
                    label="Expiry Year"
                    onChange={(e) => handleFieldChange('expiryYear', e.target.value)}
                  >
                    {years.map((year) => (
                      <MenuItem key={year.value} value={year.value}>
                        {year.label}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  required
                  fullWidth
                  label="CVV"
                  value={paymentMethod.cvv || ''}
                  onChange={(e) => handleFieldChange('cvv', e.target.value)}
                  placeholder="123"
                  inputProps={{ maxLength: 4 }}
                />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      )}

      {paymentMethod.type === 'paypal' && (
        <Card variant="outlined">
          <CardContent>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              You will be redirected to PayPal to complete your payment.
            </Typography>
            <TextField
              fullWidth
              label="PayPal Email"
              type="email"
              value={paymentMethod.email || ''}
              onChange={(e) => handleFieldChange('email', e.target.value)}
              margin="normal"
            />
          </CardContent>
        </Card>
      )}

      {(paymentMethod.type === 'apple_pay' || paymentMethod.type === 'google_pay') && (
        <Card variant="outlined">
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {paymentMethod.type === 'apple_pay'
                ? 'Apple Pay will be available at checkout.'
                : 'Google Pay will be available at checkout.'
              }
            </Typography>
          </CardContent>
        </Card>
      )}
    </Box>
  );
};

export default PaymentForm;

import React from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  Divider,
  Chip,
  Avatar,
} from '@mui/material';
import {
  ShoppingCart,
  LocalShipping,
  Payment,
  Assignment,
} from '@mui/icons-material';
import { OrderReviewProps } from '../../types/checkout';

const OrderReview: React.FC<OrderReviewProps> = ({
  cart,
  shippingAddress,
  billingAddress,
  paymentMethod,
  shippingMethod,
  orderNotes,
}) => {
  const formatPrice = (price: number, currency: string) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency,
    }).format(price);
  };

  const getPaymentMethodDisplay = () => {
    switch (paymentMethod.type) {
      case 'credit_card':
        return `Credit Card ending in ${paymentMethod.cardNumber?.slice(-4) || '****'}`;
      case 'paypal':
        return `PayPal (${paymentMethod.email})`;
      case 'apple_pay':
        return 'Apple Pay';
      case 'google_pay':
        return 'Google Pay';
      default:
        return 'Payment method';
    }
  };

  return (
    <Box>
      <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <Assignment />
        Order Review
      </Typography>

      <Grid container spacing={3}>
        {/* Order Items */}
        <Grid item xs={12} md={6}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <ShoppingCart />
                Order Items ({cart.totalItems})
              </Typography>

              {cart.items.map((item) => (
                <Box key={item.id} sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                  <Avatar
                    src={item.thumbnail}
                    alt={item.name}
                    sx={{ width: 50, height: 50 }}
                    variant="rounded"
                  />
                  <Box sx={{ flexGrow: 1 }}>
                    <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                      {item.name}
                    </Typography>
                    {item.variant && (
                      <Chip
                        label={item.variant.name}
                        size="small"
                        variant="outlined"
                        sx={{ mt: 0.5 }}
                      />
                    )}
                    <Typography variant="body2" color="text.secondary">
                      Qty: {item.quantity}
                    </Typography>
                  </Box>
                  <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                    {formatPrice(item.price * item.quantity, item.currency)}
                  </Typography>
                </Box>
              ))}

              <Divider sx={{ my: 2 }} />

              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="h6">Total</Typography>
                <Typography variant="h6" color="primary" sx={{ fontWeight: 'bold' }}>
                  {formatPrice(cart.total, cart.currency)}
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Shipping & Billing */}
        <Grid item xs={12} md={6}>
          <Grid container spacing={2}>
            {/* Shipping Address */}
            <Grid item xs={12}>
              <Card variant="outlined">
                <CardContent>
                  <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <LocalShipping />
                    Shipping Address
                  </Typography>
                  <Typography variant="body1">
                    {shippingAddress.firstName} {shippingAddress.lastName}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {shippingAddress.address}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {shippingAddress.city}, {shippingAddress.state} {shippingAddress.zipCode}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {shippingAddress.country}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {shippingAddress.email} | {shippingAddress.phone}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            {/* Billing Address */}
            <Grid item xs={12}>
              <Card variant="outlined">
                <CardContent>
                  <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Payment />
                    Billing Address
                  </Typography>
                  {billingAddress.sameAsShipping ? (
                    <Typography variant="body2" color="text.secondary">
                      Same as shipping address
                    </Typography>
                  ) : (
                    <>
                      <Typography variant="body1">
                        {billingAddress.firstName} {billingAddress.lastName}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {billingAddress.address}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {billingAddress.city}, {billingAddress.state} {billingAddress.zipCode}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {billingAddress.country}
                      </Typography>
                    </>
                  )}
                </CardContent>
              </Card>
            </Grid>

            {/* Payment Method */}
            <Grid item xs={12}>
              <Card variant="outlined">
                <CardContent>
                  <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Payment />
                    Payment Method
                  </Typography>
                  <Typography variant="body1">
                    {getPaymentMethodDisplay()}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            {/* Shipping Method */}
            <Grid item xs={12}>
              <Card variant="outlined">
                <CardContent>
                  <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <LocalShipping />
                    Shipping Method
                  </Typography>
                  <Typography variant="body1">
                    {shippingMethod.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {shippingMethod.description}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Estimated delivery: {shippingMethod.estimatedDays}
                  </Typography>
                  <Typography variant="body2" color="primary" sx={{ fontWeight: 'bold' }}>
                    {formatPrice(shippingMethod.price, 'USD')}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            {/* Order Notes */}
            {orderNotes && (
              <Grid item xs={12}>
                <Card variant="outlined">
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      Order Notes
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {orderNotes}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            )}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default OrderReview;

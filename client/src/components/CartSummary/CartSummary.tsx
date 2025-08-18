import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Box,
  Button,
  Divider,
  Chip,
} from '@mui/material';
import {
  ShoppingCart,
  ArrowForward,
} from '@mui/icons-material';
import { CartSummaryProps } from '../../types/cart';
import { LAYOUT_CONSTANTS, layoutUtils, typographyStyles } from '../../constants/layout';

const CartSummary: React.FC<CartSummaryProps> = ({
  cart,
  onCheckout,
  onContinueShopping,
  showCheckoutButton = true,
  sticky = true,
}) => {
  const formatPrice = (price: number, currency: string) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency,
    }).format(price);
  };

  const hasItems = cart.items.length > 0;
  const hasOutOfStockItems = cart.items.some(item => !item.inStock);

  return (
    <Card sx={{
      ...layoutUtils.getCardStyles('default'),
      height: 'auto',
      position: sticky ? 'sticky' : 'static',
      top: sticky ? 20 : 'auto',
    }}>
      <CardContent sx={{
        p: LAYOUT_CONSTANTS.CARD.CONTENT.PADDING,
      }}>
        <Typography
          variant="h5"
          component="h2"
          sx={{
            ...typographyStyles.title,
            mb: 3,
            display: 'flex',
            alignItems: 'center',
            gap: 1,
          }}
        >
          <ShoppingCart />
          Order Summary
        </Typography>

        {!hasItems ? (
          <Box sx={{ textAlign: 'center', py: 4 }}>
            <Typography variant="h6" color="text.secondary" gutterBottom>
              Your cart is empty
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
              Add some products to get started
            </Typography>
            <Button
              variant="contained"
              onClick={onContinueShopping}
              startIcon={<ArrowForward />}
            >
              Continue Shopping
            </Button>
          </Box>
        ) : (
          <>
            {/* Items Summary */}
            <Box sx={{ mb: 3 }}>
              <Typography variant="h6" gutterBottom>
                Items ({cart.totalItems})
              </Typography>
              {cart.items.map((item) => (
                <Box
                  key={item.id}
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    py: 1,
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flex: 1 }}>
                    <Typography variant="body2" noWrap>
                      {item.name}
                    </Typography>
                    {item.variant && (
                      <Chip
                        label={item.variant.name}
                        size="small"
                        variant="outlined"
                      />
                    )}
                    {!item.inStock && (
                      <Chip
                        label="Out of Stock"
                        size="small"
                        color="error"
                      />
                    )}
                  </Box>
                  <Typography variant="body2" color="text.secondary">
                    x{item.quantity}
                  </Typography>
                  <Typography variant="body2" sx={{ fontWeight: 'bold', minWidth: 80, textAlign: 'right' }}>
                    {formatPrice(item.price * item.quantity, item.currency)}
                  </Typography>
                </Box>
              ))}
            </Box>

            <Divider sx={{ my: 2 }} />

            {/* Price Breakdown */}
            <Box sx={{ mb: 3 }}>
              <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                py: 1,
              }}>
                <Typography variant="body1">Subtotal</Typography>
                <Typography variant="body1">
                  {formatPrice(cart.subtotal, cart.currency)}
                </Typography>
              </Box>

              <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                py: 1,
              }}>
                <Typography variant="body2" color="text.secondary">Tax</Typography>
                <Typography variant="body2" color="text.secondary">
                  {formatPrice(cart.tax, cart.currency)}
                </Typography>
              </Box>

              <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                py: 1,
              }}>
                <Typography variant="body2" color="text.secondary">Shipping</Typography>
                <Typography variant="body2" color="text.secondary">
                  {formatPrice(cart.shipping, cart.currency)}
                </Typography>
              </Box>
            </Box>

            <Divider sx={{ my: 2 }} />

            {/* Total */}
            <Box sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              py: 1,
              mb: 3,
            }}>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                Total
              </Typography>
              <Typography variant="h6" color="primary" sx={{ fontWeight: 'bold' }}>
                {formatPrice(cart.total, cart.currency)}
              </Typography>
            </Box>

            {/* Action Buttons */}
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {showCheckoutButton && (
                <Button
                  variant="contained"
                  size="large"
                  fullWidth
                  onClick={onCheckout}
                  disabled={hasOutOfStockItems}
                  startIcon={<ArrowForward />}
                >
                  Proceed to Checkout
                </Button>
              )}

              <Button
                variant="outlined"
                fullWidth
                onClick={onContinueShopping}
              >
                Continue Shopping
              </Button>
            </Box>

            {hasOutOfStockItems && showCheckoutButton && (
              <Typography
                variant="body2"
                color="error"
                sx={{ mt: 2, textAlign: 'center' }}
              >
                Please remove out-of-stock items before checkout
              </Typography>
            )}
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default CartSummary;

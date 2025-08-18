import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  Box,
  Typography,
  Grid,
  Paper,
  Breadcrumbs,
  Link,
} from '@mui/material';
import {
  Home,
  ShoppingCart,
} from '@mui/icons-material';
import CartItem from '../../components/CartItem';
import CartSummary from '../../components/CartSummary';
import { CartPageProps } from '../../types/cart';
import { LAYOUT_CONSTANTS, typographyStyles } from '../../constants/layout';

const CartPage: React.FC<CartPageProps> = ({
  cart,
  onUpdateQuantity,
  onRemoveItem,
  onCheckout,
  onContinueShopping,
}) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleContinueShopping = () => {
    navigate('/products');
  };

  const handleCheckout = () => {
    navigate('/checkout');
  };

  return (
    <Box sx={{ py: LAYOUT_CONSTANTS.CONTAINER.PADDING.MD }}>
      {/* Breadcrumbs */}
      <Breadcrumbs sx={{ mb: 3 }}>
        <Link
          color="inherit"
          href="/"
          onClick={(e) => {
            e.preventDefault();
            navigate('/');
          }}
          sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}
        >
          <Home fontSize="small" />
          {t('common.home', 'Home')}
        </Link>
        <Typography color="text.primary" sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
          <ShoppingCart fontSize="small" />
          {t('pages.cart.title', 'Shopping Cart')}
        </Typography>
      </Breadcrumbs>

      {/* Page Header */}
      <Box sx={{ mb: 4 }}>
        <Typography
          variant="h3"
          component="h1"
          sx={{
            ...typographyStyles.title,
            mb: 2,
            display: 'flex',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <ShoppingCart />
          {t('pages.cart.title', 'Shopping Cart')}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {t('pages.cart.subtitle', 'Review your items and proceed to checkout')}
        </Typography>
      </Box>

      <Grid container spacing={3}>
        {/* Cart Items */}
        <Grid item xs={12} lg={8}>
          <Paper sx={{ p: 3 }}>
            {cart.items.length === 0 ? (
              <Box sx={{ textAlign: 'center', py: 6 }}>
                <ShoppingCart sx={{ fontSize: 64, color: 'text.secondary', mb: 2 }} />
                <Typography variant="h5" color="text.secondary" gutterBottom>
                  {t('pages.cart.empty.title', 'Your cart is empty')}
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                  {t('pages.cart.empty.subtitle', 'Looks like you haven\'t added any items to your cart yet.')}
                </Typography>
                <Link
                  href="/products"
                  onClick={(e) => {
                    e.preventDefault();
                    handleContinueShopping();
                  }}
                  sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 1,
                    textDecoration: 'none',
                  }}
                >
                  {t('pages.cart.empty.cta', 'Start Shopping')}
                </Link>
              </Box>
            ) : (
              <>
                <Typography
                  variant="h5"
                  component="h2"
                  sx={{ mb: 3, fontWeight: 'bold' }}
                >
                  {t('pages.cart.items.title', 'Cart Items')} ({cart.totalItems})
                </Typography>

                {cart.items.map((item) => (
                  <CartItem
                    key={item.id}
                    item={item}
                    onUpdateQuantity={onUpdateQuantity}
                    onRemoveItem={onRemoveItem}
                  />
                ))}
              </>
            )}
          </Paper>
        </Grid>

        {/* Cart Summary */}
        <Grid item xs={12} lg={4}>
          <CartSummary
            cart={cart}
            onCheckout={handleCheckout}
            onContinueShopping={handleContinueShopping}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default CartPage;

import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Box,
  IconButton,
  TextField,
  Chip,
  Avatar,
  Divider,
} from '@mui/material';
import {
  Delete,
  Add,
  Remove,
} from '@mui/icons-material';
import { CartItemProps } from '../../types/cart';
import { LAYOUT_CONSTANTS, layoutUtils, typographyStyles } from '../../constants/layout';

const CartItem: React.FC<CartItemProps> = ({
  item,
  onUpdateQuantity,
  onRemoveItem,
}) => {
  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity >= 1 && newQuantity <= (item.stockQuantity || 999)) {
      onUpdateQuantity(item.id, newQuantity);
    }
  };

  const formatPrice = (price: number, currency: string) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency,
    }).format(price);
  };

  const totalPrice = item.price * item.quantity;
  const originalTotalPrice = item.originalPrice ? item.originalPrice * item.quantity : null;

  return (
    <Card sx={{
      ...layoutUtils.getCardStyles('default'),
      mb: 2,
      position: 'relative',
    }}>
      <CardContent sx={{
        p: LAYOUT_CONSTANTS.CARD.CONTENT.PADDING,
        display: 'flex',
        alignItems: 'center',
        gap: 2,
      }}>
        {/* Product Image */}
        <Avatar
          src={item.thumbnail}
          alt={item.name}
          sx={{
            width: 80,
            height: 80,
            borderRadius: 1,
          }}
          variant="rounded"
        />

        {/* Product Details */}
        <Box sx={{ flexGrow: 1, minWidth: 0 }}>
          <Typography
            variant="h6"
            component="h3"
            sx={{
              ...typographyStyles.title,
              mb: 1,
              fontSize: '1.1rem',
            }}
            noWrap
          >
            {item.name}
          </Typography>

          {item.variant && (
            <Box sx={{ mb: 1 }}>
              <Chip
                label={item.variant.name}
                size="small"
                color="primary"
                variant="outlined"
              />
            </Box>
          )}

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1 }}>
            <Typography
              variant="h6"
              color="primary"
              sx={{ fontWeight: 'bold' }}
            >
              {formatPrice(item.price, item.currency)}
            </Typography>
            {item.originalPrice && (
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ textDecoration: 'line-through' }}
              >
                {formatPrice(item.originalPrice, item.currency)}
              </Typography>
            )}
          </Box>

          {!item.inStock && (
            <Chip
              label="Out of Stock"
              color="error"
              size="small"
              sx={{ mb: 1 }}
            />
          )}
        </Box>

        {/* Quantity Controls */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <IconButton
            size="small"
            onClick={() => handleQuantityChange(item.quantity - 1)}
            disabled={item.quantity <= 1}
            sx={{ border: 1, borderColor: 'divider' }}
          >
            <Remove fontSize="small" />
          </IconButton>

          <TextField
            value={item.quantity}
            onChange={(e) => {
              const value = parseInt(e.target.value);
              if (!isNaN(value)) {
                handleQuantityChange(value);
              }
            }}
            size="small"
            sx={{
              width: 60,
              '& .MuiInputBase-input': {
                textAlign: 'center',
                py: 1,
              },
            }}
            inputProps={{
              min: 1,
              max: item.stockQuantity || 999,
            }}
          />

          <IconButton
            size="small"
            onClick={() => handleQuantityChange(item.quantity + 1)}
            disabled={item.quantity >= (item.stockQuantity || 999)}
            sx={{ border: 1, borderColor: 'divider' }}
          >
            <Add fontSize="small" />
          </IconButton>
        </Box>

        {/* Total Price */}
        <Box sx={{ textAlign: 'right', minWidth: 120 }}>
          <Typography
            variant="h6"
            color="primary"
            sx={{ fontWeight: 'bold' }}
          >
            {formatPrice(totalPrice, item.currency)}
          </Typography>
          {originalTotalPrice && (
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ textDecoration: 'line-through' }}
            >
              {formatPrice(originalTotalPrice, item.currency)}
            </Typography>
          )}
        </Box>

        {/* Remove Button */}
        <IconButton
          color="error"
          onClick={() => onRemoveItem(item.id)}
          sx={{ ml: 1 }}
        >
          <Delete />
        </IconButton>
      </CardContent>
    </Card>
  );
};

export default CartItem;

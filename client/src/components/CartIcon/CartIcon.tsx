import React from 'react';
import {
  IconButton,
  Badge,
  Tooltip,
} from '@mui/material';
import {
  ShoppingCart,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../contexts/CartContext';

const CartIcon: React.FC = () => {
  const navigate = useNavigate();
  const { getCartItemCount } = useCart();
  const cartItemCount = getCartItemCount();

  const handleCartClick = () => {
    navigate('/cart');
  };

  return (
    <Tooltip title="Shopping Cart">
      <IconButton
        color="inherit"
        onClick={handleCartClick}
        sx={{ ml: 1 }}
      >
        <Badge badgeContent={cartItemCount} color="primary">
          <ShoppingCart />
        </Badge>
      </IconButton>
    </Tooltip>
  );
};

export default CartIcon;

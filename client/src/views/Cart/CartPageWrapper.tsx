import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../contexts/CartContext';
import CartPage from './CartPage';

const CartPageWrapper: React.FC = () => {
  const { state, updateQuantity, removeItem } = useCart();
  const navigate = useNavigate();

  const handleUpdateQuantity = (itemId: string, quantity: number) => {
    updateQuantity(itemId, quantity);
  };

  const handleRemoveItem = (itemId: string) => {
    removeItem(itemId);
  };

  const handleCheckout = () => {
    navigate('/checkout');
  };

  const handleContinueShopping = () => {
    navigate('/products');
  };

  return (
    <CartPage
      cart={state.cart}
      onUpdateQuantity={handleUpdateQuantity}
      onRemoveItem={handleRemoveItem}
      onCheckout={handleCheckout}
      onContinueShopping={handleContinueShopping}
    />
  );
};

export default CartPageWrapper;

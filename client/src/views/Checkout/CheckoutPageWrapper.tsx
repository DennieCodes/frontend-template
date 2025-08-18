import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../contexts/CartContext';
import { CheckoutFormData } from '../../types/checkout';
import CheckoutPage from './CheckoutPage';

const CheckoutPageWrapper: React.FC = () => {
  const { state, clearCart } = useCart();
  const navigate = useNavigate();

  const handlePlaceOrder = (orderData: CheckoutFormData) => {
    // Here you would typically send the order to your backend
    console.log('Placing order:', orderData);

    // For demo purposes, we'll just clear the cart and redirect
    clearCart();
    navigate('/order-confirmation', {
      state: {
        orderNumber: `ORD-${Date.now()}`,
        orderData
      }
    });
  };

  const handleBackToCart = () => {
    navigate('/cart');
  };

  // Redirect to cart if empty
  if (state.cart.items.length === 0) {
    navigate('/cart');
    return null;
  }

  return (
    <CheckoutPage
      cart={state.cart}
      onPlaceOrder={handlePlaceOrder}
      onBackToCart={handleBackToCart}
    />
  );
};

export default CheckoutPageWrapper;

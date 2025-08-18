import { Cart } from '../../types/cart';
import { sampleProducts } from '../Products/mockData';

export const sampleCart: Cart = {
  items: [
    {
      id: '1',
      productId: '1',
      name: 'Wireless Bluetooth Headphones',
      price: 199.99,
      originalPrice: 249.99,
      currency: 'USD',
      quantity: 1,
      thumbnail: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400',
      inStock: true,
      stockQuantity: 45,
    },
    {
      id: '2',
      productId: '3',
      name: 'Organic Cotton T-Shirt',
      price: 29.99,
      originalPrice: 39.99,
      currency: 'USD',
      quantity: 2,
      thumbnail: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400',
      variant: {
        id: '3-1',
        name: 'White - Medium',
        attributes: { color: 'White', size: 'M' },
      },
      inStock: true,
      stockQuantity: 30,
    },
    {
      id: '3',
      productId: '4',
      name: 'Stainless Steel Water Bottle',
      price: 24.99,
      currency: 'USD',
      quantity: 1,
      thumbnail: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400',
      inStock: true,
      stockQuantity: 89,
    },
  ],
  totalItems: 4,
  subtotal: 284.96,
  tax: 22.80,
  shipping: 5.99,
  total: 313.75,
  currency: 'USD',
};

export const emptyCart: Cart = {
  items: [],
  totalItems: 0,
  subtotal: 0,
  tax: 0,
  shipping: 0,
  total: 0,
  currency: 'USD',
};

// Helper function to calculate cart totals
export const calculateCartTotals = (items: Cart['items']): Omit<Cart, 'items'> => {
  const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const tax = subtotal * 0.08; // 8% tax rate
  const shipping = items.length > 0 ? 5.99 : 0; // Free shipping over $50 could be implemented here
  const total = subtotal + tax + shipping;

  return {
    totalItems: items.reduce((sum, item) => sum + item.quantity, 0),
    subtotal,
    tax,
    shipping,
    total,
    currency: 'USD',
  };
};

// Helper function to create cart item from product
export const createCartItem = (product: typeof sampleProducts[0], quantity: number = 1, variant?: any) => {
  return {
    id: `${product.id}-${Date.now()}`, // Generate unique ID
    productId: product.id,
    name: product.name,
    price: product.price,
    originalPrice: product.originalPrice,
    currency: product.currency,
    quantity,
    thumbnail: product.thumbnail,
    variant,
    inStock: product.inStock,
    stockQuantity: product.stockQuantity,
  };
};

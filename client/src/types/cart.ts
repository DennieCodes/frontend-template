export interface CartItem {
  id: string;
  productId: string;
  name: string;
  price: number;
  originalPrice?: number;
  currency: string;
  quantity: number;
  thumbnail: string;
  variant?: {
    id: string;
    name: string;
    attributes: Record<string, string>;
  };
  inStock: boolean;
  stockQuantity?: number;
}

export interface Cart {
  items: CartItem[];
  totalItems: number;
  subtotal: number;
  tax: number;
  shipping: number;
  total: number;
  currency: string;
}

export interface CartItemProps {
  item: CartItem;
  onUpdateQuantity: (itemId: string, quantity: number) => void;
  onRemoveItem: (itemId: string) => void;
}

export interface CartSummaryProps {
  cart: Cart;
  onCheckout: () => void;
  onContinueShopping: () => void;
  showCheckoutButton?: boolean;
  sticky?: boolean;
}

export interface CartPageProps {
  cart: Cart;
  onUpdateQuantity: (itemId: string, quantity: number) => void;
  onRemoveItem: (itemId: string) => void;
  onCheckout: () => void;
  onContinueShopping: () => void;
}

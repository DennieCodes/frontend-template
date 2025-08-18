export interface ShippingAddress {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

export interface BillingAddress extends ShippingAddress {
  sameAsShipping: boolean;
}

export interface PaymentMethod {
  type: 'credit_card' | 'paypal' | 'apple_pay' | 'google_pay';
  cardNumber?: string;
  cardType?: string;
  expiryMonth?: string;
  expiryYear?: string;
  cvv?: string;
  cardholderName?: string;
  email?: string; // for PayPal
}

export interface ShippingMethod {
  id: string;
  name: string;
  description: string;
  price: number;
  estimatedDays: string;
  isRecommended?: boolean;
}

export interface OrderSummary {
  subtotal: number;
  tax: number;
  shipping: number;
  discount: number;
  total: number;
  currency: string;
}

export interface CheckoutFormData {
  shippingAddress: ShippingAddress;
  billingAddress: BillingAddress;
  paymentMethod: PaymentMethod;
  shippingMethod: ShippingMethod;
  orderNotes?: string;
  acceptTerms: boolean;
  marketingConsent: boolean;
}

export interface CheckoutStep {
  id: string;
  title: string;
  description: string;
  isCompleted: boolean;
  isActive: boolean;
}

export interface CheckoutPageProps {
  cart: import('./cart').Cart;
  onPlaceOrder: (orderData: CheckoutFormData) => void;
  onBackToCart: () => void;
}

export interface CheckoutStepProps {
  step: CheckoutStep;
  isActive: boolean;
  onStepClick: (stepId: string) => void;
}

export interface AddressFormProps {
  address: ShippingAddress;
  onAddressChange: (address: ShippingAddress) => void;
  title: string;
  isBilling?: boolean;
}

export interface PaymentFormProps {
  paymentMethod: PaymentMethod;
  onPaymentChange: (payment: PaymentMethod) => void;
}

export interface ShippingMethodSelectorProps {
  selectedMethod: ShippingMethod;
  availableMethods: ShippingMethod[];
  onMethodSelect: (method: ShippingMethod) => void;
}

export interface OrderReviewProps {
  cart: import('./cart').Cart;
  shippingAddress: ShippingAddress;
  billingAddress: BillingAddress;
  paymentMethod: PaymentMethod;
  shippingMethod: ShippingMethod;
  orderNotes?: string;
}

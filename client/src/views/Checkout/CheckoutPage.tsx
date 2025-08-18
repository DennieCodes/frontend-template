import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Grid from '@mui/material/GridLegacy';
import {
  Box,
  Typography,
  Paper,
  Breadcrumbs,
  Link,
  Button,
  Stepper,
  Step,
  StepLabel,
  FormControlLabel,
  Checkbox,
  TextField,
  Alert,
} from '@mui/material';
import {
  Home,
  ShoppingCart,
  Payment,
  ArrowBack,
  ArrowForward,
} from '@mui/icons-material';
import CheckoutStep from '../../components/CheckoutStep';
import AddressForm from '../../components/AddressForm';
import PaymentForm from '../../components/PaymentForm';
import ShippingMethodSelector from '../../components/ShippingMethodSelector';
import OrderReview from '../../components/OrderReview';
import CartSummary from '../../components/CartSummary';
import { CheckoutPageProps, CheckoutFormData, CheckoutStep as CheckoutStepType, ShippingMethod } from '../../types/checkout';
import { LAYOUT_CONSTANTS, typographyStyles } from '../../constants/layout';

const CheckoutPage: React.FC<CheckoutPageProps> = ({
  cart,
  onPlaceOrder,
  onBackToCart,
}) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  // Form state
  const [formData, setFormData] = useState<CheckoutFormData>({
    shippingAddress: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      address: '',
      city: '',
      state: '',
      zipCode: '',
      country: '',
    },
    billingAddress: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      address: '',
      city: '',
      state: '',
      zipCode: '',
      country: '',
      sameAsShipping: true,
    },
    paymentMethod: {
      type: 'credit_card',
    },
    shippingMethod: {
      id: 'standard',
      name: 'Standard Shipping',
      description: '5-7 business days',
      price: 5.99,
      estimatedDays: '5-7 business days',
      isRecommended: true,
    },
    orderNotes: '',
    acceptTerms: false,
    marketingConsent: false,
  });

  // Available shipping methods
  const availableShippingMethods: ShippingMethod[] = [
    {
      id: 'standard',
      name: 'Standard Shipping',
      description: '5-7 business days',
      price: 5.99,
      estimatedDays: '5-7 business days',
      isRecommended: true,
    },
    {
      id: 'express',
      name: 'Express Shipping',
      description: '2-3 business days',
      price: 12.99,
      estimatedDays: '2-3 business days',
    },
    {
      id: 'overnight',
      name: 'Overnight Shipping',
      description: 'Next business day',
      price: 24.99,
      estimatedDays: 'Next business day',
    },
  ];

  // Steps configuration
  const steps: CheckoutStepType[] = [
    {
      id: 'shipping',
      title: 'Shipping Address',
      description: 'Enter your shipping information',
      isCompleted: false,
      isActive: true,
    },
    {
      id: 'payment',
      title: 'Payment Method',
      description: 'Choose your payment method',
      isCompleted: false,
      isActive: false,
    },
    {
      id: 'review',
      title: 'Review Order',
      description: 'Review your order details',
      isCompleted: false,
      isActive: false,
    },
  ];

  const [activeStep, setActiveStep] = useState(0);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleNext = () => {
    if (validateCurrentStep()) {
      if (activeStep < steps.length - 1) {
        setActiveStep(activeStep + 1);
        updateSteps(activeStep + 1);
      } else {
        handlePlaceOrder();
      }
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
    updateSteps(activeStep - 1);
  };

  const updateSteps = (newActiveStep: number) => {
    steps.forEach((step, index) => {
      step.isCompleted = index < newActiveStep;
      step.isActive = index === newActiveStep;
    });
  };

  const validateCurrentStep = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (activeStep === 0) {
      // Validate shipping address
      if (!formData.shippingAddress.firstName) newErrors.shippingFirstName = 'First name is required';
      if (!formData.shippingAddress.lastName) newErrors.shippingLastName = 'Last name is required';
      if (!formData.shippingAddress.email) newErrors.shippingEmail = 'Email is required';
      if (!formData.shippingAddress.phone) newErrors.shippingPhone = 'Phone is required';
      if (!formData.shippingAddress.address) newErrors.shippingAddress = 'Address is required';
      if (!formData.shippingAddress.city) newErrors.shippingCity = 'City is required';
      if (!formData.shippingAddress.state) newErrors.shippingState = 'State is required';
      if (!formData.shippingAddress.zipCode) newErrors.shippingZipCode = 'ZIP code is required';
      if (!formData.shippingAddress.country) newErrors.shippingCountry = 'Country is required';
    }

    if (activeStep === 1) {
      // Validate payment method
      if (formData.paymentMethod.type === 'credit_card') {
        if (!formData.paymentMethod.cardNumber) newErrors.cardNumber = 'Card number is required';
        if (!formData.paymentMethod.cardholderName) newErrors.cardholderName = 'Cardholder name is required';
        if (!formData.paymentMethod.expiryMonth) newErrors.expiryMonth = 'Expiry month is required';
        if (!formData.paymentMethod.expiryYear) newErrors.expiryYear = 'Expiry year is required';
        if (!formData.paymentMethod.cvv) newErrors.cvv = 'CVV is required';
      }
    }

    if (activeStep === 2) {
      // Validate terms acceptance
      if (!formData.acceptTerms) newErrors.acceptTerms = 'You must accept the terms and conditions';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handlePlaceOrder = () => {
    if (validateCurrentStep()) {
      onPlaceOrder(formData);
    }
  };

  const handleShippingAddressChange = (address: typeof formData.shippingAddress) => {
    setFormData({
      ...formData,
      shippingAddress: address,
      billingAddress: formData.billingAddress.sameAsShipping
        ? { ...address, sameAsShipping: true }
        : formData.billingAddress,
    });
  };

  const handleBillingAddressChange = (address: typeof formData.billingAddress) => {
    setFormData({
      ...formData,
      billingAddress: address,
    });
  };

  const handlePaymentMethodChange = (payment: typeof formData.paymentMethod) => {
    setFormData({
      ...formData,
      paymentMethod: payment,
    });
  };

  const handleShippingMethodChange = (method: ShippingMethod) => {
    setFormData({
      ...formData,
      shippingMethod: method,
    });
  };

  const handleSameAsShippingChange = (checked: boolean) => {
    setFormData({
      ...formData,
      billingAddress: {
        ...(checked
          ? { ...formData.shippingAddress, sameAsShipping: true }
          : { ...formData.billingAddress, sameAsShipping: false }),
      },
    });
  };

  const renderStepContent = () => {
    switch (activeStep) {
      case 0:
        return (
          <Grid container spacing={3}>
            <Grid item xs={12} md={8}>
              <Paper sx={{ p: 3 }}>
                <AddressForm
                  address={formData.shippingAddress}
                  onAddressChange={handleShippingAddressChange}
                  title="Shipping Address"
                />

                <Box sx={{ mt: 3 }}>
                  <ShippingMethodSelector
                    selectedMethod={formData.shippingMethod}
                    availableMethods={availableShippingMethods}
                    onMethodSelect={handleShippingMethodChange}
                  />
                </Box>

                <Box sx={{ mt: 4 }}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={formData.billingAddress.sameAsShipping}
                        onChange={(e) => handleSameAsShippingChange(e.target.checked)}
                      />
                    }
                    label="Billing address same as shipping address"
                  />
                </Box>

                {!formData.billingAddress.sameAsShipping && (
                  <Box sx={{ mt: 3 }}>
                    <AddressForm
                      address={formData.billingAddress}
                      onAddressChange={handleBillingAddressChange}
                      title="Billing Address"
                      isBilling={true}
                    />
                  </Box>
                )}
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <CartSummary
                cart={{ ...cart, shipping: formData.shippingMethod.price, total: cart.subtotal + cart.tax + formData.shippingMethod.price, currency: cart.currency, items: cart.items, totalItems: cart.totalItems }}
                onCheckout={() => {}}
                onContinueShopping={onBackToCart}
                showCheckoutButton={false}
                sticky={false}
              />
            </Grid>
          </Grid>
        );

      case 1:
        return (
          <Grid container spacing={3}>
            <Grid item xs={12} md={8}>
              <Paper sx={{ p: 3 }}>
                <PaymentForm
                  paymentMethod={formData.paymentMethod}
                  onPaymentChange={handlePaymentMethodChange}
                />
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <CartSummary
                cart={{ ...cart, shipping: formData.shippingMethod.price, total: cart.subtotal + cart.tax + formData.shippingMethod.price, currency: cart.currency, items: cart.items, totalItems: cart.totalItems }}
                onCheckout={() => {}}
                onContinueShopping={onBackToCart}
                showCheckoutButton={false}
                sticky={false}
              />
            </Grid>
          </Grid>
        );

      case 2:
        return (
          <Grid container spacing={3}>
            <Grid item xs={12} md={8}>
              <Paper sx={{ p: 3 }}>
                <OrderReview
                  cart={{ ...cart, shipping: formData.shippingMethod.price, total: cart.subtotal + cart.tax + formData.shippingMethod.price, currency: cart.currency, items: cart.items, totalItems: cart.totalItems }}
                  shippingAddress={formData.shippingAddress}
                  billingAddress={formData.billingAddress}
                  paymentMethod={formData.paymentMethod}
                  shippingMethod={formData.shippingMethod}
                  orderNotes={formData.orderNotes}
                />

                <Box sx={{ mt: 3 }}>
                  <TextField
                    fullWidth
                    multiline
                    rows={3}
                    label="Order Notes (Optional)"
                    value={formData.orderNotes}
                    onChange={(e) => setFormData({ ...formData, orderNotes: e.target.value })}
                    margin="normal"
                  />
                </Box>

                <Box sx={{ mt: 3 }}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={formData.acceptTerms}
                        onChange={(e) => setFormData({ ...formData, acceptTerms: e.target.checked })}
                      />
                    }
                    label="I accept the terms and conditions"
                  />
                  {errors.acceptTerms && (
                    <Alert severity="error" sx={{ mt: 1 }}>
                      {errors.acceptTerms}
                    </Alert>
                  )}
                </Box>

                <Box sx={{ mt: 2 }}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={formData.marketingConsent}
                        onChange={(e) => setFormData({ ...formData, marketingConsent: e.target.checked })}
                      />
                    }
                    label="I would like to receive marketing communications"
                  />
                </Box>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <CartSummary
                cart={{ ...cart, shipping: formData.shippingMethod.price, total: cart.subtotal + cart.tax + formData.shippingMethod.price, currency: cart.currency, items: cart.items, totalItems: cart.totalItems }}
                onCheckout={() => {}}
                onContinueShopping={onBackToCart}
                showCheckoutButton={false}
                sticky={false}
              />
            </Grid>
          </Grid>
        );

      default:
        return null;
    }
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
        <Link
          color="inherit"
          href="/cart"
          onClick={(e) => {
            e.preventDefault();
            onBackToCart();
          }}
          sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}
        >
          <ShoppingCart fontSize="small" />
          {t('pages.cart.title', 'Cart')}
        </Link>
        <Typography color="text.primary" sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
          <Payment fontSize="small" />
          {t('pages.checkout.title', 'Checkout')}
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
          <Payment />
          {t('pages.checkout.title', 'Checkout')}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {t('pages.checkout.subtitle', 'Complete your purchase')}
        </Typography>
      </Box>

      {/* Checkout Steps */}
      <CheckoutStep
        steps={steps}
        activeStep={activeStep}
        onStepClick={(stepId) => {
          const stepIndex = steps.findIndex(step => step.id === stepId);
          if (stepIndex !== -1 && stepIndex <= activeStep) {
            setActiveStep(stepIndex);
            updateSteps(stepIndex);
          }
        }}
      />

      {/* Step Content */}
      {renderStepContent()}

      {/* Navigation Buttons */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
        <Button
          variant="outlined"
          startIcon={<ArrowBack />}
          onClick={activeStep === 0 ? onBackToCart : handleBack}
          disabled={activeStep === 0}
        >
          {activeStep === 0 ? 'Back to Cart' : 'Back'}
        </Button>

        <Button
          variant="contained"
          endIcon={activeStep === steps.length - 1 ? undefined : <ArrowForward />}
          onClick={handleNext}
          disabled={cart.items.length === 0}
        >
          {activeStep === steps.length - 1 ? 'Place Order' : 'Next'}
        </Button>
      </Box>
    </Box>
  );
};

export default CheckoutPage;

import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  Box,
  Typography,
  Paper,
  Button,
  Grid,
  Card,
  CardContent,
} from '@mui/material';
import {
  CheckCircle as CheckCircleIcon,
  Home as HomeIcon,
  ShoppingCart as ShoppingCartIcon,
} from '@mui/icons-material';
import { LAYOUT_CONSTANTS, typographyStyles } from '../../constants/layout';

interface OrderConfirmationState {
  orderNumber: string;
  orderData: any;
}

const OrderConfirmationPage: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as OrderConfirmationState;

  if (!state?.orderNumber) {
    navigate('/');
    return null;
  }

  const handleContinueShopping = () => {
    navigate('/products');
  };

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <Box sx={{ py: LAYOUT_CONSTANTS.CONTAINER.PADDING.MD }}>
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <CheckCircleIcon sx={{ fontSize: 64, color: 'success.main', mb: 2 }} />
        <Typography
          variant="h3"
          component="h1"
          sx={{
            ...typographyStyles.title,
            mb: 2,
          }}
        >
          {t('pages.orderConfirmation.title', 'Order Confirmed!')}
        </Typography>
        <Typography variant="h6" color="text.secondary" gutterBottom>
          {t('pages.orderConfirmation.subtitle', 'Thank you for your purchase')}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {t('pages.orderConfirmation.orderNumber', 'Order Number')}: {state.orderNumber}
        </Typography>
      </Box>

      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 4, textAlign: 'center' }}>
            <Typography variant="h5" gutterBottom>
              {t('pages.orderConfirmation.whatsNext.title', 'What happens next?')}
            </Typography>

            <Grid container spacing={3} sx={{ mt: 2 }}>
              <Grid item xs={12} md={4}>
                <Card variant="outlined">
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      {t('pages.orderConfirmation.whatsNext.confirmation.title', 'Order Confirmation')}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {t('pages.orderConfirmation.whatsNext.confirmation.description', 'You\'ll receive an email confirmation with your order details.')}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={12} md={4}>
                <Card variant="outlined">
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      {t('pages.orderConfirmation.whatsNext.processing.title', 'Processing')}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {t('pages.orderConfirmation.whatsNext.processing.description', 'We\'ll process your order and prepare it for shipping.')}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={12} md={4}>
                <Card variant="outlined">
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      {t('pages.orderConfirmation.whatsNext.shipping.title', 'Shipping')}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {t('pages.orderConfirmation.whatsNext.shipping.description', 'You\'ll receive tracking information once your order ships.')}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>

            <Box sx={{ mt: 4, display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Button
                variant="contained"
                size="large"
                startIcon={<ShoppingCartIcon />}
                onClick={handleContinueShopping}
              >
                {t('pages.orderConfirmation.continueShopping', 'Continue Shopping')}
              </Button>

              <Button
                variant="outlined"
                size="large"
                startIcon={<HomeIcon />}
                onClick={handleGoHome}
              >
                {t('pages.orderConfirmation.goHome', 'Go Home')}
              </Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default OrderConfirmationPage;

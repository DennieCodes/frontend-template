import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/GridLegacy';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import CheckIcon from '@mui/icons-material/Check';
import { SubscriptionPlanProps } from './types';

const SubscriptionPlan: React.FC<SubscriptionPlanProps> = ({ currentPlan, onPlanChange }) => {
  const [selectedPlan, setSelectedPlan] = useState(currentPlan?.type || 'free');

  const plans = [
    {
      type: 'free',
      name: 'Free Plan',
      price: '$0',
      period: 'month',
      description: 'Basic features for individual users',
      features: [
        'Up to 5 resources per month',
        'Basic search functionality',
        'Email support',
        'Standard templates',
      ],
      popular: false,
    },
    {
      type: 'basic',
      name: 'Basic Plan',
      price: '$9.99',
      period: 'month',
      description: 'Perfect for small teams and growing businesses',
      features: [
        'Up to 50 resources per month',
        'Advanced search and filters',
        'Priority email support',
        'Custom templates',
        'Analytics dashboard',
        'API access',
      ],
      popular: false,
    },
    {
      type: 'pro',
      name: 'Pro Plan',
      price: '$29.99',
      period: 'month',
      description: 'Advanced features for professional teams',
      features: [
        'Unlimited resources',
        'Advanced analytics',
        'Phone and email support',
        'Custom branding',
        'White-label options',
        'Advanced integrations',
        'Team collaboration tools',
        'Priority feature requests',
      ],
      popular: true,
    },
  ];

  const handlePlanSelect = (planType: string) => {
    setSelectedPlan(planType);
  };

  const handleUpgrade = () => {
    const plan = plans.find(p => p.type === selectedPlan);
    if (plan && onPlanChange) {
      onPlanChange(plan);
    }
  };

  return (
    <Paper elevation={2} sx={{ p: 4 }}>
      <Typography variant="h5" component="h2" gutterBottom>
        Subscription Plans
      </Typography>
      <Typography variant="body2" color="text.secondary" paragraph>
        Choose the plan that best fits your needs. You can upgrade or downgrade at any time.
      </Typography>

      {/* Current Plan Status */}
      {currentPlan && (
        <Box sx={{ mb: 4, p: 3, bgcolor: 'primary.light', borderRadius: 2 }}>
          <Typography variant="h6" gutterBottom>
            Current Plan: {currentPlan.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Next billing date: {currentPlan.nextBillingDate}
          </Typography>
        </Box>
      )}

      {/* Plan Selection */}
      <Grid container spacing={3}>
        {plans.map((plan) => (
          <Grid xs={12} sm={6} md={4} key={plan.type}>
            <Card
              sx={{
                height: '100%',
                position: 'relative',
                border: selectedPlan === plan.type ? '2px solid #1976d2' : '2px solid transparent',
                transition: 'all 0.2s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: 4,
                },
              }}
            >
              {plan.popular && (
                <Chip
                  label="Most Popular"
                  color="primary"
                  sx={{
                    position: 'absolute',
                    top: -12,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    zIndex: 1,
                  }}
                />
              )}
              <CardContent sx={{ pt: plan.popular ? 4 : 2 }}>
                <Typography variant="h5" component="h3" gutterBottom>
                  {plan.name}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'baseline', mb: 2 }}>
                  <Typography variant="h4" component="span" color="primary">
                    {plan.price}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
                    /{plan.period}
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" paragraph>
                  {plan.description}
                </Typography>
                <Box component="ul" sx={{ pl: 0, listStyle: 'none' }}>
                  {plan.features.map((feature, index) => (
                    <Box
                      key={index}
                      component="li"
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        mb: 1,
                      }}
                    >
                      <CheckIcon sx={{ fontSize: 16, color: 'success.main', mr: 1 }} />
                      <Typography variant="body2">{feature}</Typography>
                    </Box>
                  ))}
                </Box>
              </CardContent>
              <CardActions sx={{ p: 2, pt: 0 }}>
                <Button
                  variant={selectedPlan === plan.type ? 'contained' : 'outlined'}
                  fullWidth
                  onClick={() => handlePlanSelect(plan.type)}
                >
                  {selectedPlan === plan.type ? 'Selected' : 'Select Plan'}
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Action Buttons */}
      <Box sx={{ mt: 4, display: 'flex', gap: 2, justifyContent: 'center' }}>
        <Button
          variant="contained"
          size="large"
          onClick={handleUpgrade}
          disabled={selectedPlan === currentPlan?.type}
        >
          {selectedPlan === currentPlan?.type ? 'Current Plan' : 'Upgrade Plan'}
        </Button>
        <Button variant="outlined" size="large">
          Cancel Subscription
        </Button>
      </Box>

      {/* Billing Information */}
      <Box sx={{ mt: 4, p: 3, bgcolor: 'grey.50', borderRadius: 2 }}>
        <Typography variant="h6" gutterBottom>
          Billing Information
        </Typography>
        <Grid container spacing={2}>
          <Grid xs={12} sm={6}>
            <Typography variant="body2" color="text.secondary">
              Payment Method: •••• •••• •••• 1234
            </Typography>
          </Grid>
          <Grid xs={12} sm={6}>
            <Typography variant="body2" color="text.secondary">
              Billing Address: 123 Main St, New York, NY 10001
            </Typography>
          </Grid>
        </Grid>
        <Button variant="text" size="small" sx={{ mt: 1 }}>
          Update Billing Information
        </Button>
      </Box>
    </Paper>
  );
};

export default SubscriptionPlan;
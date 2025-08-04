import React from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  Box,
  Button,
  Grid,
  Chip,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Paper
} from '@mui/material';
import {
  Check as CheckIcon,
  Close as CloseIcon,
  Star as StarIcon,
  Business as BusinessIcon,
  Person as PersonIcon,
  Diamond as DiamondIcon
} from '@mui/icons-material';

const SubscriptionPlan: React.FC = () => {
  return (
    <Card>
      <CardHeader
        title="Subscription Plan"
        action={
          <Chip
            label="Pro Plan"
            color="primary"
            icon={<StarIcon />}
            size="small"
          />
        }
      />
      <CardContent>
        <Box sx={{ mb: 3 }}>
          <Typography variant="body2" color="text.secondary">
            Manage your subscription and billing information
          </Typography>
        </Box>

        {/* Current Plan */}
        <Paper sx={{ p: 3, mb: 3, bgcolor: 'primary.50' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
            <BusinessIcon color="primary" />
            <Box>
              <Typography variant="h6">Current Plan: Pro</Typography>
              <Typography variant="body2" color="text.secondary">
                $29.99/month • Next billing: January 15, 2024
              </Typography>
            </Box>
          </Box>

          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Typography variant="body2" color="text.secondary">
                <strong>Plan Features:</strong>
              </Typography>
              <List dense>
                <ListItem sx={{ py: 0 }}>
                  <ListItemIcon sx={{ minWidth: 24 }}>
                    <CheckIcon color="success" fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="Unlimited projects" />
                </ListItem>
                <ListItem sx={{ py: 0 }}>
                  <ListItemIcon sx={{ minWidth: 24 }}>
                    <CheckIcon color="success" fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="Advanced analytics" />
                </ListItem>
                <ListItem sx={{ py: 0 }}>
                  <ListItemIcon sx={{ minWidth: 24 }}>
                    <CheckIcon color="success" fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="Priority support" />
                </ListItem>
                <ListItem sx={{ py: 0 }}>
                  <ListItemIcon sx={{ minWidth: 24 }}>
                    <CheckIcon color="success" fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="Custom integrations" />
                </ListItem>
              </List>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Button variant="outlined" size="small">
                  View Billing History
                </Button>
                <Button variant="outlined" size="small">
                  Download Invoice
                </Button>
                <Button variant="outlined" size="small" color="warning">
                  Cancel Subscription
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Paper>

        {/* Available Plans */}
        <Typography variant="h6" gutterBottom>
          Available Plans
        </Typography>

        <Grid container spacing={2}>
          {/* Basic Plan */}
          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 2, height: '100%', border: '1px solid #e0e0e0' }}>
              <Box sx={{ textAlign: 'center', mb: 2 }}>
                <PersonIcon sx={{ fontSize: 40, color: 'text.secondary' }} />
                <Typography variant="h6">Basic</Typography>
                <Typography variant="h4" color="primary">
                  $9.99
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  per month
                </Typography>
              </Box>

              <List dense>
                <ListItem sx={{ py: 0 }}>
                  <ListItemIcon sx={{ minWidth: 24 }}>
                    <CheckIcon color="success" fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="5 projects" />
                </ListItem>
                <ListItem sx={{ py: 0 }}>
                  <ListItemIcon sx={{ minWidth: 24 }}>
                    <CheckIcon color="success" fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="Basic analytics" />
                </ListItem>
                <ListItem sx={{ py: 0 }}>
                  <ListItemIcon sx={{ minWidth: 24 }}>
                    <CheckIcon color="success" fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="Email support" />
                </ListItem>
                <ListItem sx={{ py: 0 }}>
                  <ListItemIcon sx={{ minWidth: 24 }}>
                    <CloseIcon color="error" fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="Custom integrations" />
                </ListItem>
              </List>

              <Button
                variant="outlined"
                fullWidth
                sx={{ mt: 2 }}
              >
                Downgrade
              </Button>
            </Paper>
          </Grid>

          {/* Pro Plan (Current) */}
          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 2, height: '100%', border: '2px solid', borderColor: 'primary.main', bgcolor: 'primary.50' }}>
              <Box sx={{ textAlign: 'center', mb: 2 }}>
                <BusinessIcon sx={{ fontSize: 40, color: 'primary.main' }} />
                <Typography variant="h6">Pro</Typography>
                <Typography variant="h4" color="primary">
                  $29.99
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  per month
                </Typography>
                <Chip label="Current Plan" color="primary" size="small" sx={{ mt: 1 }} />
              </Box>

              <List dense>
                <ListItem sx={{ py: 0 }}>
                  <ListItemIcon sx={{ minWidth: 24 }}>
                    <CheckIcon color="success" fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="Unlimited projects" />
                </ListItem>
                <ListItem sx={{ py: 0 }}>
                  <ListItemIcon sx={{ minWidth: 24 }}>
                    <CheckIcon color="success" fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="Advanced analytics" />
                </ListItem>
                <ListItem sx={{ py: 0 }}>
                  <ListItemIcon sx={{ minWidth: 24 }}>
                    <CheckIcon color="success" fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="Priority support" />
                </ListItem>
                <ListItem sx={{ py: 0 }}>
                  <ListItemIcon sx={{ minWidth: 24 }}>
                    <CheckIcon color="success" fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="Custom integrations" />
                </ListItem>
              </List>

              <Button
                variant="contained"
                fullWidth
                sx={{ mt: 2 }}
                disabled
              >
                Current Plan
              </Button>
            </Paper>
          </Grid>

          {/* Enterprise Plan */}
          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 2, height: '100%', border: '1px solid #e0e0e0' }}>
              <Box sx={{ textAlign: 'center', mb: 2 }}>
                <DiamondIcon sx={{ fontSize: 40, color: 'secondary.main' }} />
                <Typography variant="h6">Enterprise</Typography>
                <Typography variant="h4" color="secondary">
                  $99.99
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  per month
                </Typography>
              </Box>

              <List dense>
                <ListItem sx={{ py: 0 }}>
                  <ListItemIcon sx={{ minWidth: 24 }}>
                    <CheckIcon color="success" fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="Everything in Pro" />
                </ListItem>
                <ListItem sx={{ py: 0 }}>
                  <ListItemIcon sx={{ minWidth: 24 }}>
                    <CheckIcon color="success" fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="Dedicated support" />
                </ListItem>
                <ListItem sx={{ py: 0 }}>
                  <ListItemIcon sx={{ minWidth: 24 }}>
                    <CheckIcon color="success" fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="Custom branding" />
                </ListItem>
                <ListItem sx={{ py: 0 }}>
                  <ListItemIcon sx={{ minWidth: 24 }}>
                    <CheckIcon color="success" fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="SLA guarantee" />
                </ListItem>
              </List>

              <Button
                variant="contained"
                color="secondary"
                fullWidth
                sx={{ mt: 2 }}
              >
                Upgrade
              </Button>
            </Paper>
          </Grid>
        </Grid>

        <Divider sx={{ my: 3 }} />

        {/* Billing Information */}
        <Typography variant="h6" gutterBottom>
          Billing Information
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Typography variant="body2" color="text.secondary">
              <strong>Payment Method:</strong> Visa ending in 1234
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body2" color="text.secondary">
              <strong>Billing Cycle:</strong> Monthly
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default SubscriptionPlan;
import React from 'react';
import {
  Box,
  Typography,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  Paper,
} from '@mui/material';
import {
  Check,
  ShoppingCart,
  LocalShipping,
  Payment,
  Assignment,
} from '@mui/icons-material';
import { CheckoutStep as CheckoutStepType } from '../../types/checkout';
import { LAYOUT_CONSTANTS, typographyStyles } from '../../constants/layout';

interface CheckoutStepProps {
  steps: CheckoutStepType[];
  activeStep: number;
  onStepClick: (stepId: string) => void;
}

const getStepIcon = (stepId: string) => {
  switch (stepId) {
    case 'cart':
      return <ShoppingCart />;
    case 'shipping':
      return <LocalShipping />;
    case 'payment':
      return <Payment />;
    case 'review':
      return <Assignment />;
    default:
      return null;
  }
};

const CheckoutStep: React.FC<CheckoutStepProps> = ({
  steps,
  activeStep,
  onStepClick,
}) => {
  return (
    <Paper sx={{ p: 3, mb: 3 }}>
      <Typography
        variant="h5"
        component="h2"
        sx={{
          ...typographyStyles.title,
          mb: 3,
        }}
      >
        Checkout Progress
      </Typography>

      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.id} completed={step.isCompleted}>
            <StepLabel
              onClick={() => onStepClick(step.id)}
              sx={{
                cursor: step.isCompleted ? 'pointer' : 'default',
                '&:hover': step.isCompleted ? {
                  opacity: 0.7,
                } : {},
              }}
              icon={
                step.isCompleted ? (
                  <Check color="primary" />
                ) : (
                  getStepIcon(step.id)
                )
              }
            >
              <Box>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: step.isActive ? 'bold' : 'normal',
                    color: step.isActive ? 'primary.main' : 'text.primary',
                  }}
                >
                  {step.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                >
                  {step.description}
                </Typography>
              </Box>
            </StepLabel>
            <StepContent>
              {/* Step content will be rendered by parent component */}
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </Paper>
  );
};

export default CheckoutStep;

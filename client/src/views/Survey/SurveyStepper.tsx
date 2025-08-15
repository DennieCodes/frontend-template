import React from 'react';
import {
  Container,
  Stepper,
  Step,
  StepLabel,
  Box,
} from '@mui/material';
import { SurveyStepperProps } from './types';
import { LAYOUT_CONSTANTS, layoutUtils } from '../../constants/layout';

const SurveyStepper: React.FC<SurveyStepperProps> = ({ steps, currentStep }) => {
  return (
    <Box sx={{
      backgroundColor: 'background.default',
      borderBottom: 1,
      borderColor: 'divider',
      py: 2,
    }}>
      <Container maxWidth="lg">
        <Stepper activeStep={currentStep} alternativeLabel>
          {steps.map((label, index) => (
            <Step key={label}>
              <StepLabel
                sx={{
                  '& .MuiStepLabel-label': {
                    fontSize: '0.875rem',
                    fontWeight: index === currentStep ? 600 : 400,
                  },
                }}
              >
                {label}
              </StepLabel>
            </Step>
          ))}
        </Stepper>
      </Container>
    </Box>
  );
};

export default SurveyStepper;

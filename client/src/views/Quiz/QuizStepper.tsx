import React from 'react';
import { Paper, Stepper, Step, StepLabel } from '@mui/material';
import { QuizStepperProps } from './types';
import { LAYOUT_CONSTANTS, layoutUtils } from '../../constants/layout';

const QuizStepper: React.FC<QuizStepperProps> = ({ steps, currentStep }) => {
  return (
    <Paper sx={{
      p: LAYOUT_CONSTANTS.SPACING.MD,
      mb: LAYOUT_CONSTANTS.SPACING.LG,
      maxWidth: layoutUtils.getContentWidth('standard'),
      mx: 'auto',
    }}>
      <Stepper activeStep={currentStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Paper>
  );
};

export default QuizStepper;

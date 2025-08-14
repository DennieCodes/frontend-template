import React from 'react';
import { Alert, Box } from '@mui/material';
import { QuizProgressProps } from './types';
import { LAYOUT_CONSTANTS, layoutUtils } from '../../constants/layout';

const QuizProgress: React.FC<QuizProgressProps> = ({ currentStep, totalSteps }) => {
  return (
    <Box sx={{
      ...layoutUtils.getContentLayout('centered'),
      mb: LAYOUT_CONSTANTS.SPACING.MD,
    }}>
      <Alert severity="info" sx={{
        maxWidth: layoutUtils.getContentWidth('standard'),
        mx: 'auto',
      }}>
        Step {currentStep + 1} of {totalSteps}
      </Alert>
    </Box>
  );
};

export default QuizProgress;

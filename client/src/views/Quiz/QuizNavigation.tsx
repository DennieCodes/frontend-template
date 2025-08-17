import React from 'react';
import { Stack, Button, Box } from '@mui/material';
import { QuizNavigationProps } from './types';
import { layoutUtils } from '../../constants/layout';

const QuizNavigation: React.FC<QuizNavigationProps> = ({
  currentStep,
  totalSteps,
  onNext,
  onBack,
  onCancel,
  onSubmit,
  canProceed,
}) => {
  return (
    <Box sx={{
      ...layoutUtils.getContentLayout('centered'),
    }}>
      <Stack direction="row" spacing={2} justifyContent="space-between" sx={{
        maxWidth: layoutUtils.getContentWidth('standard'),
        mx: 'auto',
      }}>
        <Button
          variant="outlined"
          onClick={onCancel}
          color="error"
        >
          Cancel
        </Button>

        <Stack direction="row" spacing={2}>
          <Button
            variant="outlined"
            onClick={onBack}
            disabled={currentStep === 0}
          >
            Back
          </Button>

          {currentStep === totalSteps - 1 ? (
            <Button
              variant="contained"
              onClick={onSubmit}
              color="primary"
              disabled={!canProceed}
            >
              Submit Quiz
            </Button>
          ) : (
            <Button
              variant="contained"
              onClick={onNext}
              color="primary"
              disabled={!canProceed}
            >
              Next
            </Button>
          )}
        </Stack>
      </Stack>
    </Box>
  );
};

export default QuizNavigation;

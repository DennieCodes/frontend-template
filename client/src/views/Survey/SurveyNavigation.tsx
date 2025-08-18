import React from 'react';
import {
  Container,
  Box,
  Button,
  Typography,
} from '@mui/material';
import {
  ArrowBack as ArrowBackIcon,
  ArrowForward as ArrowForwardIcon,
  Cancel as CancelIcon,
  Send as SendIcon,
} from '@mui/icons-material';
import { SurveyNavigationProps } from './types';

const SurveyNavigation: React.FC<SurveyNavigationProps> = ({
  currentStep,
  totalSteps,
  onNext,
  onBack,
  onCancel,
  onSubmit,
  canProceed,
}) => {
  const isFirstStep = currentStep === 0;
  const isLastStep = currentStep === totalSteps - 1;

  return (
    <Box sx={{
      backgroundColor: 'background.paper',
      borderTop: 1,
      borderColor: 'divider',
      py: 3,
      position: 'sticky',
      bottom: 0,
      zIndex: 1000,
    }}>
      <Container maxWidth="lg">
        <Box sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 2,
        }}>
          {/* Left side - Back and Cancel */}
          <Box sx={{ display: 'flex', gap: 2 }}>
            {!isFirstStep && (
              <Button
                variant="outlined"
                startIcon={<ArrowBackIcon />}
                onClick={onBack}
                sx={{ minWidth: 120 }}
              >
                Previous
              </Button>
            )}
            <Button
              variant="text"
              startIcon={<CancelIcon />}
              onClick={onCancel}
              color="error"
              sx={{ minWidth: 100 }}
            >
              Cancel
            </Button>
          </Box>

          {/* Right side - Next/Submit */}
          <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
            <Typography variant="body2" color="text.secondary">
              Step {currentStep + 1} of {totalSteps}
            </Typography>

            {isLastStep ? (
              <Button
                variant="contained"
                endIcon={<SendIcon />}
                onClick={() => onSubmit()}
                disabled={!canProceed}
                sx={{ minWidth: 140 }}
              >
                Submit Survey
              </Button>
            ) : (
              <Button
                variant="contained"
                endIcon={<ArrowForwardIcon />}
                onClick={onNext}
                disabled={!canProceed}
                sx={{ minWidth: 120 }}
              >
                Next
              </Button>
            )}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default SurveyNavigation;

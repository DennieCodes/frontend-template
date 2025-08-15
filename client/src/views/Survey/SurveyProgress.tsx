import React from 'react';
import {
  Container,
  Typography,
  LinearProgress,
  Box,
} from '@mui/material';
import { SurveyProgressProps } from './types';

const SurveyProgress: React.FC<SurveyProgressProps> = ({ currentStep, totalSteps }) => {
  const progress = ((currentStep + 1) / totalSteps) * 100;

  return (
    <Box sx={{
      backgroundColor: 'background.paper',
      borderBottom: 1,
      borderColor: 'divider',
      py: 2,
    }}>
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
          <Typography variant="body2" color="text.secondary">
            Step {currentStep + 1} of {totalSteps}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {Math.round(progress)}% Complete
          </Typography>
        </Box>
        <LinearProgress
          variant="determinate"
          value={progress}
          sx={{
            height: 8,
            borderRadius: 4,
            backgroundColor: 'grey.200',
            '& .MuiLinearProgress-bar': {
              borderRadius: 4,
            },
          }}
        />
      </Container>
    </Box>
  );
};

export default SurveyProgress;

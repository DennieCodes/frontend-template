import React from 'react';
import {
  FormControl,
  FormLabel,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Typography,
  Box,
  Chip,
} from '@mui/material';
import { CheckboxQuestionProps } from '../../views/Survey/types';

const CheckboxQuestion: React.FC<CheckboxQuestionProps> = ({
  question,
  options,
  value = [],
  onChange,
  required = false,
  allowMultiple = true,
}) => {
  const handleChange = (option: string) => {
    if (!allowMultiple) {
      // If only single selection is allowed, treat like radio
      onChange([option]);
      return;
    }

    const newValue = value.includes(option)
      ? value.filter(v => v !== option)
      : [...value, option];

    onChange(newValue);
  };

  return (
    <FormControl component="fieldset" sx={{ width: '100%', mb: 2 }}>
      <FormLabel component="legend" sx={{ mb: 1 }}>
        <Typography variant="subtitle1" component="span" sx={{ fontWeight: 600 }}>
          {question}
        </Typography>
        {required && (
          <Typography
            component="span"
            color="error"
            sx={{ ml: 0.5 }}
          >
            *
          </Typography>
        )}
      </FormLabel>

      <FormGroup
        row
        sx={{
          flexWrap: 'wrap',
          gap: 1,
        }}
      >
        {options.map((option) => (
          <FormControlLabel
            key={option}
            control={
              <Checkbox
                checked={value.includes(option)}
                onChange={() => handleChange(option)}
                color="primary"
                size="small"
              />
            }
            label={option}
            sx={{
              mb: 1,
              mr: 2,
              '& .MuiFormControlLabel-label': {
                fontSize: '0.9rem',
              },
            }}
          />
        ))}
      </FormGroup>

      {value.length > 0 && (
        <Box sx={{ mt: 1 }}>
          <Typography variant="caption" color="text.secondary" gutterBottom>
            Selected: {value.length} option{value.length !== 1 ? 's' : ''}
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mt: 0.5 }}>
            {value.map((selectedOption) => (
              <Chip
                key={selectedOption}
                label={selectedOption}
                size="small"
                color="primary"
                variant="outlined"
              />
            ))}
          </Box>
        </Box>
      )}
    </FormControl>
  );
};

export default CheckboxQuestion;

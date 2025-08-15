import React from 'react';
import {
  FormControl,
  FormLabel,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from '@mui/material';
import { RadioQuestionProps } from '../../views/Survey/types';

const RadioQuestion: React.FC<RadioQuestionProps> = ({
  question,
  options,
  value,
  onChange,
  required = false,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
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

      <RadioGroup
        value={value || ''}
        onChange={handleChange}
        row
        sx={{
          flexWrap: 'wrap',
          gap: 1,
        }}
      >
        {options.map((option) => (
          <FormControlLabel
            key={option}
            value={option}
            control={<Radio color="primary" size="small" />}
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
      </RadioGroup>
    </FormControl>
  );
};

export default RadioQuestion;

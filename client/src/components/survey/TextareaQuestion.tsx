import React from 'react';
import {
  FormControl,
  FormLabel,
  TextField,
  Typography,
  Box,
} from '@mui/material';
import { TextareaQuestionProps } from '../../views/Survey/types';

const TextareaQuestion: React.FC<TextareaQuestionProps> = ({
  question,
  value,
  onChange,
  placeholder,
  required = false,
  rows = 4,
  maxLength,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  const currentLength = (value || '').length;

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

      <TextField
        value={value || ''}
        onChange={handleChange}
        placeholder={placeholder}
        variant="outlined"
        fullWidth
        multiline
        rows={rows}
        required={required}
        inputProps={{
          maxLength: maxLength,
        }}
        sx={{
          '& .MuiOutlinedInput-root': {
            fontSize: '1rem',
          },
        }}
      />

              {maxLength && (
          <Box sx={{ mt: 0.5, display: 'flex', justifyContent: 'flex-end' }}>
            <Typography
              variant="caption"
              color={currentLength > maxLength * 0.9 ? 'error' : 'text.secondary'}
            >
              {currentLength} / {maxLength} characters
            </Typography>
          </Box>
        )}
    </FormControl>
  );
};

export default TextareaQuestion;

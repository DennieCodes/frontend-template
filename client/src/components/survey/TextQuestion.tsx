import React from 'react';
import {
  FormControl,
  FormLabel,
  TextField,
  Typography,
} from '@mui/material';
import { TextQuestionProps } from '../../views/Survey/types';

const TextQuestion: React.FC<TextQuestionProps> = ({
  question,
  value,
  onChange,
  placeholder,
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

      <TextField
        value={value || ''}
        onChange={handleChange}
        placeholder={placeholder}
        variant="outlined"
        fullWidth
        required={required}
        sx={{
          '& .MuiOutlinedInput-root': {
            fontSize: '1rem',
          },
        }}
      />
    </FormControl>
  );
};

export default TextQuestion;

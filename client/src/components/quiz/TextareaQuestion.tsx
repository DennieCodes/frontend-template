import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  TextField,
  Box,
} from '@mui/material';

interface TextareaQuestionProps {
  question: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  required?: boolean;
  rows?: number;
  maxLength?: number;
}

const TextareaQuestion: React.FC<TextareaQuestionProps> = ({
  question,
  value,
  onChange,
  placeholder = '',
  required = false,
  rows = 4,
  maxLength,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <Card sx={{ mb: 3, width: '100%' }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {question}
          {required && <span style={{ color: 'red' }}> *</span>}
        </Typography>
        <TextField
          fullWidth
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          required={required}
          multiline
          rows={rows}
          variant="outlined"
          inputProps={{
            maxLength: maxLength,
          }}
          helperText={maxLength ? `${value.length}/${maxLength} characters` : ''}
          sx={{ mt: 2 }}
        />
      </CardContent>
    </Card>
  );
};

export default TextareaQuestion;

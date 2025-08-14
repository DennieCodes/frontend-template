import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  TextField,
  Box,
} from '@mui/material';

interface TextInputQuestionProps {
  question: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  required?: boolean;
  multiline?: boolean;
  rows?: number;
}

const TextInputQuestion: React.FC<TextInputQuestionProps> = ({
  question,
  value,
  onChange,
  placeholder = '',
  required = false,
  multiline = false,
  rows = 1,
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
          multiline={multiline}
          rows={rows}
          variant="outlined"
          sx={{ mt: 2 }}
        />
      </CardContent>
    </Card>
  );
};

export default TextInputQuestion;

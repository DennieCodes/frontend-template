import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  RadioGroup,
  FormControlLabel,
  Radio,
} from '@mui/material';

interface MultipleChoiceQuestionProps {
  question: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
}

const MultipleChoiceQuestion: React.FC<MultipleChoiceQuestionProps> = ({
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
    <Card sx={{ mb: 3, width: '100%' }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {question}
          {required && <span style={{ color: 'red' }}> *</span>}
        </Typography>
        <RadioGroup
          value={value}
          onChange={handleChange}
          sx={{ mt: 2 }}
        >
          {options.map((option, index) => (
            <FormControlLabel
              key={index}
              value={option}
              control={<Radio />}
              label={option}
              sx={{
                mb: 1,
                '& .MuiFormControlLabel-label': {
                  fontSize: '1rem',
                },
              }}
            />
          ))}
        </RadioGroup>
      </CardContent>
    </Card>
  );
};

export default MultipleChoiceQuestion;

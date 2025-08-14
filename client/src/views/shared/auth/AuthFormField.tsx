import React from 'react';
import { TextField } from '@mui/material';
import { AuthFormFieldProps } from './types';

const AuthFormField: React.FC<AuthFormFieldProps> = ({
  name,
  label,
  type,
  value,
  onChange,
  required = false,
  autoComplete,
  autoFocus = false,
}) => {
  return (
    <TextField
      margin="normal"
      required={required}
      fullWidth
      id={name}
      label={label}
      name={name}
      type={type}
      autoComplete={autoComplete}
      autoFocus={autoFocus}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default AuthFormField;

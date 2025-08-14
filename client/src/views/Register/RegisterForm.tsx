import React from 'react';
import { Box, Button, Alert } from '@mui/material';
import AuthFormField from '../shared/auth/AuthFormField';
import { RegisterFormProps, RegisterFormData } from './types';

const RegisterForm: React.FC<RegisterFormProps> = ({ onSubmit, error, isLoading }) => {
  const [formData, setFormData] = React.useState<RegisterFormData>({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleFieldChange = (field: keyof RegisterFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <>
      {error && (
        <Alert severity="error" sx={{ width: '100%', mb: 2 }}>
          {error}
        </Alert>
      )}

      <Box component="form" onSubmit={handleSubmit} sx={{ width: '100%' }}>
        <AuthFormField
          name="email"
          label="Email Address"
          type="email"
          value={formData.email}
          onChange={(value) => handleFieldChange('email', value)}
          required
          autoComplete="email"
          autoFocus
        />

        <AuthFormField
          name="password"
          label="Password"
          type="password"
          value={formData.password}
          onChange={(value) => handleFieldChange('password', value)}
          required
          autoComplete="new-password"
        />

        <AuthFormField
          name="confirmPassword"
          label="Confirm Password"
          type="password"
          value={formData.confirmPassword}
          onChange={(value) => handleFieldChange('confirmPassword', value)}
          required
          autoComplete="new-password"
        />

        <Button
          type="submit"
          fullWidth
          variant="contained"
          disabled={isLoading}
          sx={{ mt: 3, mb: 2, py: 1.5 }}
        >
          {isLoading ? 'Creating Account...' : 'Create Account'}
        </Button>
      </Box>
    </>
  );
};

export default RegisterForm;

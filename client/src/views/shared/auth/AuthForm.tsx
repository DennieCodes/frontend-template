import React, { useState } from 'react';
import { Box, Button, Alert } from '@mui/material';
import AuthFormField from './AuthFormField';
import { AuthFormProps, AuthFormData } from './types';

const AuthForm: React.FC<AuthFormProps> = ({ onSubmit, error, isLoading }) => {
  const [formData, setFormData] = useState<AuthFormData>({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleFieldChange = (field: keyof AuthFormData, value: string) => {
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
          autoComplete="current-password"
        />

        <Button
          type="submit"
          fullWidth
          variant="contained"
          disabled={isLoading}
          sx={{ mt: 3, mb: 2, py: 1.5 }}
        >
          {isLoading ? 'Loading...' : 'Submit'}
        </Button>
      </Box>
    </>
  );
};

export default AuthForm;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginStart, loginSuccess } from '../../slice/authSlice';
import { User } from '../../slice/authSlice';
import { AuthLayout, AuthOAuthSection } from '../shared/auth';
import RegisterForm from './RegisterForm';
import { RegisterFormData, RegisterPageState } from './types';

const RegisterPage: React.FC = () => {
  const [state, setState] = useState<RegisterPageState>({
    email: '',
    password: '',
    confirmPassword: '',
    error: '',
    isLoading: false,
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (data: RegisterFormData) => {
    setState(prev => ({ ...prev, error: '', isLoading: true }));

    if (!data.email || !data.password || !data.confirmPassword) {
      setState(prev => ({ ...prev, error: 'Please fill in all fields', isLoading: false }));
      return;
    }

    if (data.password !== data.confirmPassword) {
      setState(prev => ({ ...prev, error: 'Passwords do not match', isLoading: false }));
      return;
    }

    if (data.password.length < 6) {
      setState(prev => ({ ...prev, error: 'Password must be at least 6 characters long', isLoading: false }));
      return;
    }

    // Simulate registration
    dispatch(loginStart());

    // Simulate API delay
    setTimeout(() => {
      const mockUser: User = {
        id: '1',
        email: data.email,
        name: data.email.split('@')[0], // Use email prefix as name
      };

      dispatch(loginSuccess(mockUser));
      navigate('/dashboard');
    }, 1000);
  };

  const handleOAuthLogin = (provider: 'google' | 'github') => {
    setState(prev => ({ ...prev, isLoading: true }));
    dispatch(loginStart());

    // Simulate OAuth registration
    setTimeout(() => {
      const mockUser: User = {
        id: '1',
        email: `user@${provider}.com`,
        name: `${provider.charAt(0).toUpperCase() + provider.slice(1)} User`,
      };

      dispatch(loginSuccess(mockUser));
      navigate('/dashboard');
    }, 1000);
  };

  return (
    <AuthLayout
      title="Create Account"
      subtitle="Join us! Create your account to get started."
      footerText="Already have an account?"
      footerLinkText="Sign in"
      footerLinkTo="/login"
    >
      <RegisterForm
        onSubmit={handleSubmit}
        error={state.error}
        isLoading={state.isLoading}
      />

      <AuthOAuthSection onOAuthLogin={handleOAuthLogin} />
    </AuthLayout>
  );
};

export default RegisterPage;

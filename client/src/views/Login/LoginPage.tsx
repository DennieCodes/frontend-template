import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginStart, loginSuccess } from '../../slice/authSlice';
import { User } from '../../slice/authSlice';
import { AuthLayout, AuthOAuthSection } from '../shared/auth';
import LoginForm from './LoginForm';
import { LoginFormData, LoginPageState } from './types';

const LoginPage: React.FC = () => {
  const [state, setState] = useState<LoginPageState>({
    email: '',
    password: '',
    error: '',
    isLoading: false,
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (data: LoginFormData) => {
    setState(prev => ({ ...prev, error: '', isLoading: true }));

    if (!data.email || !data.password) {
      setState(prev => ({ ...prev, error: 'Please fill in all fields', isLoading: false }));
      return;
    }

    // Simulate login
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

    // Simulate OAuth login
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
      title="Sign In"
      subtitle="Welcome back! Please sign in to your account."
      footerText="Don't have an account?"
      footerLinkText="Sign up"
      footerLinkTo="/register"
    >
      <LoginForm
        onSubmit={handleSubmit}
        error={state.error}
        isLoading={state.isLoading}
      />

      <AuthOAuthSection onOAuthLogin={handleOAuthLogin} />
    </AuthLayout>
  );
};

export default LoginPage;

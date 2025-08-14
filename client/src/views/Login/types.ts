import { AuthFormData } from '../shared/auth/types';

export interface LoginFormData extends AuthFormData {
  // Login-specific form data (no additional fields needed)
}

export interface LoginFormProps {
  onSubmit: (data: LoginFormData) => void;
  error?: string;
  isLoading?: boolean;
}

export interface LoginPageState {
  email: string;
  password: string;
  error: string;
  isLoading: boolean;
}

export interface LoginPageProps {
  // Add any props if needed in the future
}

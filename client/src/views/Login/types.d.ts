import { AuthFormData } from '../shared/auth/types';
export interface LoginFormData extends AuthFormData {
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
}

import { AuthFormData } from '../shared/auth/types';
export interface RegisterFormData extends AuthFormData {
    confirmPassword: string;
}
export interface RegisterFormProps {
    onSubmit: (data: RegisterFormData) => void;
    error?: string;
    isLoading?: boolean;
}
export interface RegisterPageState {
    email: string;
    password: string;
    confirmPassword: string;
    error: string;
    isLoading: boolean;
}
export interface RegisterPageProps {
}

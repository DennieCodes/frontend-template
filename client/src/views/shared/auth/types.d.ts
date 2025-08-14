export interface AuthFormData {
    email: string;
    password: string;
    confirmPassword?: string;
}
export interface AuthFormProps {
    onSubmit: (data: AuthFormData) => void;
    error?: string;
    isLoading?: boolean;
}
export interface AuthLayoutProps {
    title: string;
    subtitle: string;
    children: React.ReactNode;
    footerText: string;
    footerLinkText: string;
    footerLinkTo: string;
}
export interface AuthOAuthSectionProps {
    onOAuthLogin: (provider: 'google' | 'github') => void;
}
export interface AuthFormFieldProps {
    name: string;
    label: string;
    type: string;
    value: string;
    onChange: (value: string) => void;
    required?: boolean;
    autoComplete?: string;
    autoFocus?: boolean;
}
export interface AuthPageState {
    email: string;
    password: string;
    confirmPassword?: string;
    error: string;
    isLoading: boolean;
}
export interface AuthPageProps {
}

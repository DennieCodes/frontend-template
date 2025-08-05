import React from 'react';
import { ButtonProps } from '@mui/material';
interface OAuthButtonProps extends Omit<ButtonProps, 'variant'> {
    provider: 'google' | 'github';
    onClick?: () => void;
}
declare const OAuthButton: React.FC<OAuthButtonProps>;
export default OAuthButton;

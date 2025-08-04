import React from 'react';
import { Button, ButtonProps } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';

interface OAuthButtonProps extends Omit<ButtonProps, 'variant'> {
  provider: 'google' | 'github';
  onClick?: () => void;
}

const OAuthButton: React.FC<OAuthButtonProps> = ({ provider, onClick, ...props }) => {
  const getProviderConfig = () => {
    switch (provider) {
      case 'google':
        return {
          icon: <GoogleIcon />,
          label: 'Continue with Google',
          color: '#4285f4',
        };
      case 'github':
        return {
          icon: <GitHubIcon />,
          label: 'Continue with GitHub',
          color: '#24292e',
        };
      default:
        return {
          icon: null,
          label: 'Continue',
          color: '#1976d2',
        };
    }
  };

  const config = getProviderConfig();

  return (
    <Button
      variant="outlined"
      startIcon={config.icon}
      onClick={onClick}
      sx={{
        width: '100%',
        py: 1.5,
        borderColor: config.color,
        color: config.color,
        '&:hover': {
          borderColor: config.color,
          backgroundColor: `${config.color}10`,
        },
        ...props.sx,
      }}
      {...props}
    >
      {config.label}
    </Button>
  );
};

export default OAuthButton;
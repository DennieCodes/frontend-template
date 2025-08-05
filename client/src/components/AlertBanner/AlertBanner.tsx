import React from 'react';
import { Alert, AlertTitle, Box, IconButton, Collapse } from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';

export interface AlertBannerProps {
  message: string;
  title?: string;
  type?: 'info' | 'success' | 'warning' | 'error';
  severity?: 'info' | 'success' | 'warning' | 'error';
  dismissible?: boolean;
  onDismiss?: () => void;
  show?: boolean;
  variant?: 'filled' | 'outlined' | 'standard';
  elevation?: number;
  sx?: any;
}

const AlertBanner: React.FC<AlertBannerProps> = ({
  message,
  title,
  type = 'info',
  severity = 'info',
  dismissible = true,
  onDismiss,
  show = true,
  variant = 'filled',
  elevation = 1,
  sx = {}
}) => {
  const [open, setOpen] = React.useState(show);

  React.useEffect(() => {
    setOpen(show);
  }, [show]);

  const handleDismiss = () => {
    setOpen(false);
    onDismiss?.();
  };

  if (!open) return null;

  return (
    <Collapse in={open}>
      <Box sx={{ width: '100%', ...sx }}>
        <Alert
          severity={severity}
          variant={variant}
          elevation={elevation}
          action={
            dismissible ? (
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={handleDismiss}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            ) : undefined
          }
          sx={{
            borderRadius: 0,
            '& .MuiAlert-message': {
              width: '100%'
            }
          }}
        >
          {title && <AlertTitle>{title}</AlertTitle>}
          {message}
        </Alert>
      </Box>
    </Collapse>
  );
};

export default AlertBanner;
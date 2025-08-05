import React from 'react';

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

declare const AlertBanner: React.FC<AlertBannerProps>;
export default AlertBanner;
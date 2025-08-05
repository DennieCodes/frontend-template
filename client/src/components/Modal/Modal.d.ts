import React from 'react';

export interface ModalProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  children?: React.ReactNode;
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  fullWidth?: boolean;
  fullScreen?: boolean;
  closeOnBackdropClick?: boolean;
  closeOnEscape?: boolean;
  showCloseButton?: boolean;
  actions?: React.ReactNode;
  showDefaultActions?: boolean;
  submitText?: string;
  cancelText?: string;
  onSubmit?: () => void;
  onCancel?: () => void;
  submitDisabled?: boolean;
  cancelDisabled?: boolean;
  submitColor?: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
  cancelColor?: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
  submitVariant?: 'text' | 'outlined' | 'contained';
  cancelVariant?: 'text' | 'outlined' | 'contained';
  contentSx?: any;
  titleSx?: any;
  actionsSx?: any;
  sx?: any;
}

declare const Modal: React.FC<ModalProps>;
export default Modal;
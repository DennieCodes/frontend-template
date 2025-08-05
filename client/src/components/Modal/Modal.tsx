import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Box,
  IconButton,
  Typography,
  Divider
} from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';

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

const Modal: React.FC<ModalProps> = ({
  open,
  onClose,
  title,
  children,
  maxWidth = 'sm',
  fullWidth = true,
  fullScreen = false,
  closeOnBackdropClick = true,
  closeOnEscape = true,
  showCloseButton = true,
  actions,
  showDefaultActions = true,
  submitText = 'Submit',
  cancelText = 'Cancel',
  onSubmit,
  onCancel,
  submitDisabled = false,
  cancelDisabled = false,
  submitColor = 'primary',
  cancelColor = 'inherit',
  submitVariant = 'contained',
  cancelVariant = 'text',
  contentSx = {},
  titleSx = {},
  actionsSx = {},
  sx = {}
}) => {
  const handleClose = (event: any, reason: string) => {
    if (reason === 'backdropClick' && !closeOnBackdropClick) {
      return;
    }
    if (reason === 'escapeKeyDown' && !closeOnEscape) {
      return;
    }
    onClose();
  };

  const handleSubmit = () => {
    onSubmit?.();
  };

  const handleCancel = () => {
    onCancel?.() || onClose();
  };

  const renderActions = () => {
    if (actions) {
      return actions;
    }

    if (!showDefaultActions) {
      return null;
    }

    return (
      <Box sx={{ display: 'flex', gap: 1, ...actionsSx }}>
        <Button
          onClick={handleCancel}
          disabled={cancelDisabled}
          color={cancelColor}
          variant={cancelVariant}
        >
          {cancelText}
        </Button>
        <Button
          onClick={handleSubmit}
          disabled={submitDisabled}
          color={submitColor}
          variant={submitVariant}
          autoFocus
        >
          {submitText}
        </Button>
      </Box>
    );
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth={maxWidth}
      fullWidth={fullWidth}
      fullScreen={fullScreen}
      sx={sx}
    >
      {(title || showCloseButton) && (
        <>
          <DialogTitle
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              ...titleSx
            }}
          >
            <Typography variant="h6" component="div">
              {title}
            </Typography>
            {showCloseButton && (
              <IconButton
                aria-label="close"
                onClick={onClose}
                sx={{
                  color: (theme) => theme.palette.grey[500]
                }}
              >
                <CloseIcon />
              </IconButton>
            )}
          </DialogTitle>
          <Divider />
        </>
      )}

      <DialogContent sx={{ ...contentSx }}>
        {children}
      </DialogContent>

      {renderActions() && (
        <>
          <Divider />
          <DialogActions sx={{ padding: 2 }}>
            {renderActions()}
          </DialogActions>
        </>
      )}
    </Dialog>
  );
};

export default Modal;
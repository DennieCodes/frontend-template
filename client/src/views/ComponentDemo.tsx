import React, { useState } from 'react';
import {
  Box,
  Button,
  Typography,
  Stack,
  Paper,
  Grid,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Switch,
  FormControlLabel,
  Divider
} from '@mui/material';
import AlertBanner from '../components/AlertBanner';
import Modal from '../components/Modal';

const ComponentDemo: React.FC = () => {
  const [alertBanner, setAlertBanner] = useState({
    show: false,
    message: '',
    title: '',
    type: 'info' as const,
    dismissible: true,
    variant: 'filled' as const
  });

  const [modal, setModal] = useState({
    open: false,
    title: '',
    content: '',
    maxWidth: 'sm' as const,
    showDefaultActions: true,
    submitText: 'Submit',
    cancelText: 'Cancel'
  });

  const [customModal, setCustomModal] = useState({
    open: false,
    title: 'Custom Modal',
    content: 'This is a custom modal with custom actions.',
    maxWidth: 'md' as const,
    showDefaultActions: false
  });

  const handleShowAlert = (type: 'info' | 'success' | 'warning' | 'error') => {
    setAlertBanner({
      show: true,
      message: `This is a ${type} alert banner message.`,
      title: `${type.charAt(0).toUpperCase() + type.slice(1)} Alert`,
      type,
      dismissible: true,
      variant: 'filled'
    });
  };

  const handleShowModal = () => {
    setModal({
      ...modal,
      open: true,
      title: 'Sample Modal',
      content: 'This is a sample modal with default actions.',
      submitText: 'Submit',
      cancelText: 'Cancel'
    });
  };

  const handleShowCustomModal = () => {
    setCustomModal({
      ...customModal,
      open: true
    });
  };

  const handleModalSubmit = () => {
    console.log('Modal submitted');
    setModal({ ...modal, open: false });
  };

  const handleCustomModalSubmit = () => {
    console.log('Custom modal submitted');
    setCustomModal({ ...customModal, open: false });
  };

  return (
    <Box sx={{ p: 3, maxWidth: 1200, mx: 'auto' }}>
      <Typography variant="h4" gutterBottom>
        Component Demo
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph>
        This page demonstrates the AlertBanner and Modal components with various configurations.
      </Typography>

      {/* Alert Banner Demo */}
      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h5" gutterBottom>
          Alert Banner Demo
        </Typography>

        {alertBanner.show && (
          <AlertBanner
            message={alertBanner.message}
            title={alertBanner.title}
            severity={alertBanner.type}
            variant={alertBanner.variant}
            dismissible={alertBanner.dismissible}
            onDismiss={() => setAlertBanner({ ...alertBanner, show: false })}
            show={alertBanner.show}
          />
        )}

        <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
          <Button
            variant="contained"
            color="info"
            onClick={() => handleShowAlert('info')}
          >
            Show Info Alert
          </Button>
          <Button
            variant="contained"
            color="success"
            onClick={() => handleShowAlert('success')}
          >
            Show Success Alert
          </Button>
          <Button
            variant="contained"
            color="warning"
            onClick={() => handleShowAlert('warning')}
          >
            Show Warning Alert
          </Button>
          <Button
            variant="contained"
            color="error"
            onClick={() => handleShowAlert('error')}
          >
            Show Error Alert
          </Button>
        </Stack>
      </Paper>

      {/* Modal Demo */}
      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h5" gutterBottom>
          Modal Demo
        </Typography>

        <Stack direction="row" spacing={2}>
          <Button
            variant="contained"
            onClick={handleShowModal}
          >
            Show Default Modal
          </Button>
          <Button
            variant="outlined"
            onClick={handleShowCustomModal}
          >
            Show Custom Modal
          </Button>
        </Stack>
      </Paper>

      {/* Configuration Panel */}
      <Paper sx={{ p: 3 }}>
        <Typography variant="h5" gutterBottom>
          Configuration Options
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom>
              Alert Banner Configuration
            </Typography>

            <Stack spacing={2}>
              <TextField
                label="Message"
                value={alertBanner.message}
                onChange={(e) => setAlertBanner({ ...alertBanner, message: e.target.value })}
                fullWidth
              />

              <TextField
                label="Title (optional)"
                value={alertBanner.title}
                onChange={(e) => setAlertBanner({ ...alertBanner, title: e.target.value })}
                fullWidth
              />

              <FormControl fullWidth>
                <InputLabel>Type</InputLabel>
                <Select
                  value={alertBanner.type}
                  onChange={(e) => setAlertBanner({ ...alertBanner, type: e.target.value as any })}
                  label="Type"
                >
                  <MenuItem value="info">Info</MenuItem>
                  <MenuItem value="success">Success</MenuItem>
                  <MenuItem value="warning">Warning</MenuItem>
                  <MenuItem value="error">Error</MenuItem>
                </Select>
              </FormControl>

              <FormControlLabel
                control={
                  <Switch
                    checked={alertBanner.dismissible}
                    onChange={(e) => setAlertBanner({ ...alertBanner, dismissible: e.target.checked })}
                  />
                }
                label="Dismissible"
              />
            </Stack>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom>
              Modal Configuration
            </Typography>

            <Stack spacing={2}>
              <TextField
                label="Title"
                value={modal.title}
                onChange={(e) => setModal({ ...modal, title: e.target.value })}
                fullWidth
              />

              <TextField
                label="Content"
                value={modal.content}
                onChange={(e) => setModal({ ...modal, content: e.target.value })}
                multiline
                rows={3}
                fullWidth
              />

              <FormControl fullWidth>
                <InputLabel>Max Width</InputLabel>
                <Select
                  value={modal.maxWidth}
                  onChange={(e) => setModal({ ...modal, maxWidth: e.target.value as any })}
                  label="Max Width"
                >
                  <MenuItem value="xs">Extra Small</MenuItem>
                  <MenuItem value="sm">Small</MenuItem>
                  <MenuItem value="md">Medium</MenuItem>
                  <MenuItem value="lg">Large</MenuItem>
                  <MenuItem value="xl">Extra Large</MenuItem>
                </Select>
              </FormControl>

              <TextField
                label="Submit Text"
                value={modal.submitText}
                onChange={(e) => setModal({ ...modal, submitText: e.target.value })}
                fullWidth
              />

              <TextField
                label="Cancel Text"
                value={modal.cancelText}
                onChange={(e) => setModal({ ...modal, cancelText: e.target.value })}
                fullWidth
              />
            </Stack>
          </Grid>
        </Grid>
      </Paper>

      {/* Modals */}
      <Modal
        open={modal.open}
        onClose={() => setModal({ ...modal, open: false })}
        title={modal.title}
        onSubmit={handleModalSubmit}
        onCancel={() => setModal({ ...modal, open: false })}
        maxWidth={modal.maxWidth}
        showDefaultActions={modal.showDefaultActions}
        submitText={modal.submitText}
        cancelText={modal.cancelText}
      >
        <Typography>{modal.content}</Typography>
      </Modal>

      <Modal
        open={customModal.open}
        onClose={() => setCustomModal({ ...customModal, open: false })}
        title={customModal.title}
        maxWidth={customModal.maxWidth}
        showDefaultActions={customModal.showDefaultActions}
        actions={
          <Box sx={{ display: 'flex', gap: 1 }}>
            <Button
              variant="outlined"
              color="secondary"
              onClick={() => setCustomModal({ ...customModal, open: false })}
            >
              Close
            </Button>
            <Button
              variant="contained"
              color="success"
              onClick={handleCustomModalSubmit}
            >
              Confirm
            </Button>
            <Button
              variant="contained"
              color="warning"
              onClick={() => console.log('Custom action')}
            >
              Custom Action
            </Button>
          </Box>
        }
      >
        <Typography paragraph>{customModal.content}</Typography>
        <Typography variant="body2" color="text.secondary">
          This modal demonstrates custom actions instead of the default submit/cancel buttons.
          You can add any combination of buttons or other components in the actions prop.
        </Typography>
      </Modal>
    </Box>
  );
};

export default ComponentDemo;
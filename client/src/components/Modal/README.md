# Modal Component

A customizable and extensible modal dialog component with built-in submit/cancel buttons and support for custom actions.

## Features

- Customizable title and content
- Built-in submit/cancel buttons
- Support for custom actions
- Multiple size options
- Full-screen mode support
- Keyboard navigation (Escape to close)
- Backdrop click handling
- Customizable styling

## Usage

```tsx
import Modal from '../components/Modal';

// Basic usage with default actions
<Modal
  open={isOpen}
  onClose={() => setIsOpen(false)}
  title="Confirm Action"
  onSubmit={() => console.log('Submitted')}
>
  <p>Are you sure you want to proceed?</p>
</Modal>

// Custom modal with custom actions
<Modal
  open={isOpen}
  onClose={() => setIsOpen(false)}
  title="Custom Modal"
  showDefaultActions={false}
  actions={
    <Box sx={{ display: 'flex', gap: 1 }}>
      <Button variant="outlined" onClick={handleClose}>Close</Button>
      <Button variant="contained" color="success" onClick={handleConfirm}>Confirm</Button>
    </Box>
  }
>
  <p>This modal has custom actions.</p>
</Modal>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `open` | `boolean` | **required** | Whether the modal is open |
| `onClose` | `() => void` | **required** | Callback when modal should close |
| `title` | `string` | `undefined` | Modal title |
| `children` | `React.ReactNode` | `undefined` | Modal content |
| `maxWidth` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'sm'` | Maximum width of the modal |
| `fullWidth` | `boolean` | `true` | Whether modal should take full width |
| `fullScreen` | `boolean` | `false` | Whether modal should be full screen |
| `closeOnBackdropClick` | `boolean` | `true` | Whether clicking backdrop closes modal |
| `closeOnEscape` | `boolean` | `true` | Whether pressing Escape closes modal |
| `showCloseButton` | `boolean` | `true` | Whether to show close button in title |
| `actions` | `React.ReactNode` | `undefined` | Custom actions (overrides default) |
| `showDefaultActions` | `boolean` | `true` | Whether to show default submit/cancel buttons |
| `submitText` | `string` | `'Submit'` | Text for submit button |
| `cancelText` | `string` | `'Cancel'` | Text for cancel button |
| `onSubmit` | `() => void` | `undefined` | Callback when submit is clicked |
| `onCancel` | `() => void` | `undefined` | Callback when cancel is clicked |
| `submitDisabled` | `boolean` | `false` | Whether submit button is disabled |
| `cancelDisabled` | `boolean` | `false` | Whether cancel button is disabled |
| `submitColor` | `'primary' \| 'secondary' \| 'error' \| 'info' \| 'success' \| 'warning'` | `'primary'` | Submit button color |
| `cancelColor` | `'primary' \| 'secondary' \| 'error' \| 'info' \| 'success' \| 'warning'` | `'inherit'` | Cancel button color |
| `submitVariant` | `'text' \| 'outlined' \| 'contained'` | `'contained'` | Submit button variant |
| `cancelVariant` | `'text' \| 'outlined' \| 'contained'` | `'text'` | Cancel button variant |
| `contentSx` | `any` | `{}` | Custom styles for content area |
| `titleSx` | `any` | `{}` | Custom styles for title area |
| `actionsSx` | `any` | `{}` | Custom styles for actions area |
| `sx` | `any` | `{}` | Custom styles for the modal |

## Examples

### Confirmation Modal
```tsx
const [open, setOpen] = useState(false);

<Modal
  open={open}
  onClose={() => setOpen(false)}
  title="Delete Item"
  submitText="Delete"
  cancelText="Cancel"
  submitColor="error"
  onSubmit={() => {
    // Handle delete
    setOpen(false);
  }}
>
  <Typography>
    Are you sure you want to delete this item? This action cannot be undone.
  </Typography>
</Modal>
```

### Form Modal
```tsx
const [formData, setFormData] = useState({ name: '', email: '' });

<Modal
  open={open}
  onClose={() => setOpen(false)}
  title="Add New User"
  submitText="Create User"
  onSubmit={() => {
    // Handle form submission
    console.log(formData);
    setOpen(false);
  }}
  submitDisabled={!formData.name || !formData.email}
>
  <Stack spacing={2}>
    <TextField
      label="Name"
      value={formData.name}
      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      fullWidth
    />
    <TextField
      label="Email"
      type="email"
      value={formData.email}
      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      fullWidth
    />
  </Stack>
</Modal>
```

### Custom Actions Modal
```tsx
<Modal
  open={open}
  onClose={() => setOpen(false)}
  title="Advanced Options"
  showDefaultActions={false}
  actions={
    <Box sx={{ display: 'flex', gap: 1 }}>
      <Button variant="outlined" onClick={() => setOpen(false)}>
        Cancel
      </Button>
      <Button variant="contained" color="secondary" onClick={handleSave}>
        Save Draft
      </Button>
      <Button variant="contained" color="primary" onClick={handlePublish}>
        Publish
      </Button>
    </Box>
  }
>
  <Typography>
    Choose how you want to proceed with your changes.
  </Typography>
</Modal>
```

### Full Screen Modal
```tsx
<Modal
  open={open}
  onClose={() => setOpen(false)}
  title="Full Screen Editor"
  fullScreen={true}
  showDefaultActions={false}
  actions={
    <Button variant="contained" onClick={() => setOpen(false)}>
      Close
    </Button>
  }
>
  <Box sx={{ height: '100%', p: 2 }}>
    {/* Your full-screen content */}
  </Box>
</Modal>
```

## Integration Patterns

### With Form Validation
```tsx
const [errors, setErrors] = useState({});

const validateForm = () => {
  const newErrors = {};
  if (!formData.name) newErrors.name = 'Name is required';
  if (!formData.email) newErrors.email = 'Email is required';
  setErrors(newErrors);
  return Object.keys(newErrors).length === 0;
};

<Modal
  open={open}
  onClose={() => setOpen(false)}
  title="Edit Profile"
  onSubmit={() => {
    if (validateForm()) {
      // Submit form
      setOpen(false);
    }
  }}
>
  {/* Form content */}
</Modal>
```

### With Loading States
```tsx
const [loading, setLoading] = useState(false);

const handleSubmit = async () => {
  setLoading(true);
  try {
    await submitData();
    setOpen(false);
  } catch (error) {
    console.error(error);
  } finally {
    setLoading(false);
  }
};

<Modal
  open={open}
  onClose={() => setOpen(false)}
  title="Submit Data"
  submitText={loading ? "Submitting..." : "Submit"}
  submitDisabled={loading}
  onSubmit={handleSubmit}
>
  {/* Modal content */}
</Modal>
```
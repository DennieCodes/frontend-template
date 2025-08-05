# AlertBanner Component

A customizable alert banner component that can display system messages for admins or users on any page.

## Features

- Multiple alert types (info, success, warning, error)
- Dismissible alerts with close button
- Customizable styling and variants
- Collapsible animation
- Full-width display

## Usage

```tsx
import AlertBanner from '../components/AlertBanner';

// Basic usage
<AlertBanner
  message="This is an important system message"
  severity="info"
  show={true}
/>

// With title and custom styling
<AlertBanner
  message="System maintenance scheduled for tonight"
  title="System Notice"
  severity="warning"
  variant="filled"
  dismissible={true}
  onDismiss={() => console.log('Alert dismissed')}
  show={true}
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `message` | `string` | **required** | The main message text |
| `title` | `string` | `undefined` | Optional title for the alert |
| `type` | `'info' \| 'success' \| 'warning' \| 'error'` | `'info'` | Alert type (deprecated, use `severity`) |
| `severity` | `'info' \| 'success' \| 'warning' \| 'error'` | `'info'` | Alert severity level |
| `dismissible` | `boolean` | `true` | Whether the alert can be dismissed |
| `onDismiss` | `() => void` | `undefined` | Callback when alert is dismissed |
| `show` | `boolean` | `true` | Whether to show the alert |
| `variant` | `'filled' \| 'outlined' \| 'standard'` | `'filled'` | Alert variant style |
| `elevation` | `number` | `1` | Material-UI elevation |
| `sx` | `any` | `{}` | Custom styles |

## Examples

### Success Alert
```tsx
<AlertBanner
  message="Your changes have been saved successfully!"
  severity="success"
  title="Success"
/>
```

### Error Alert
```tsx
<AlertBanner
  message="Failed to save changes. Please try again."
  severity="error"
  title="Error"
  dismissible={false}
/>
```

### Warning Alert
```tsx
<AlertBanner
  message="System maintenance scheduled for tonight at 2 AM EST."
  severity="warning"
  title="Maintenance Notice"
  variant="outlined"
/>
```

## Integration with Redux

For system-wide alerts, you can integrate with Redux:

```tsx
// In your Redux slice
const systemSlice = createSlice({
  name: 'system',
  initialState: {
    messages: []
  },
  reducers: {
    addMessage: (state, action) => {
      state.messages.push(action.payload);
    },
    removeMessage: (state, action) => {
      state.messages = state.messages.filter(msg => msg.id !== action.payload);
    }
  }
});

// In your component
const systemMessages = useSelector((state) => state.system.messages);

return (
  <>
    {systemMessages.map(message => (
      <AlertBanner
        key={message.id}
        message={message.text}
        severity={message.type}
        onDismiss={() => dispatch(removeMessage(message.id))}
        show={message.show}
      />
    ))}
  </>
);
```
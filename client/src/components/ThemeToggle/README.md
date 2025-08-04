# ThemeToggle Component

A modular, extendable, and configurable theme toggle component for React applications using Material-UI.

## Features

- **Multiple Variants**: Icon, Switch, Button, Chip, and Toggle Group
- **Fully Configurable**: Custom icons, labels, sizes, colors, and styling
- **TypeScript Support**: Fully typed with comprehensive interfaces
- **Accessibility**: Proper ARIA labels and keyboard navigation
- **Theme Integration**: Seamlessly integrates with Material-UI theming
- **Persistence**: Theme preference is saved to localStorage
- **Modular**: Standalone component that can be used anywhere

## Installation

The component is already included in your project. Make sure you have the ThemeProvider wrapping your app:

```tsx
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      {/* Your app components */}
    </ThemeProvider>
  );
}
```

## Basic Usage

```tsx
import { ThemeToggle } from './components/ThemeToggle';

function MyComponent() {
  return (
    <ThemeToggle />
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'icon' \| 'switch' \| 'button' \| 'chip' \| 'toggle-group'` | `'icon'` | The variant of the toggle component |
| `tooltipText` | `string` | `'Toggle theme'` | Custom tooltip text |
| `ariaLabel` | `string` | `'Toggle theme mode'` | Custom aria-label for accessibility |
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` | Size of the component |
| `color` | `'primary' \| 'secondary' \| 'default' \| 'inherit'` | `'primary'` | Color of the component |
| `showLabels` | `boolean` | `true` | Whether to show labels in toggle-group variant |
| `labels` | `{ light: string, dark: string }` | `{ light: 'Light', dark: 'Dark' }` | Custom labels for light and dark modes |
| `icons` | `{ light: Component, dark: Component }` | `{ light: LightModeIcon, dark: DarkModeIcon }` | Custom icons for light and dark modes |
| `className` | `string` | - | Additional CSS classes |
| `sx` | `any` | - | Additional styles |
| `onThemeChange` | `(mode: ThemeMode) => void` | - | Callback function when theme changes |

## Variants

### Icon Variant (Default)
```tsx
<ThemeToggle variant="icon" />
```

### Switch Variant
```tsx
<ThemeToggle variant="switch" />
```

### Button Variant
```tsx
<ThemeToggle variant="button" />
```

### Chip Variant
```tsx
<ThemeToggle variant="chip" />
```

### Toggle Group Variant
```tsx
<ThemeToggle variant="toggle-group" />
```

## Customization Examples

### Custom Icons and Labels
```tsx
import { Brightness4, Brightness7 } from '@mui/icons-material';

<ThemeToggle
  variant="button"
  icons={{ light: Brightness7, dark: Brightness4 }}
  labels={{ light: 'Day Mode', dark: 'Night Mode' }}
  tooltipText="Switch between day and night modes"
/>
```

### Different Sizes
```tsx
<ThemeToggle variant="icon" size="small" />
<ThemeToggle variant="icon" size="medium" />
<ThemeToggle variant="icon" size="large" />
```

### Custom Colors
```tsx
<ThemeToggle variant="chip" color="secondary" />
```

### With Callback
```tsx
<ThemeToggle
  variant="switch"
  onThemeChange={(mode) => {
    console.log(`Theme changed to: ${mode}`);
    // Your custom logic here
  }}
/>
```

### Custom Styling
```tsx
<ThemeToggle
  variant="button"
  sx={{
    borderRadius: 2,
    px: 3,
    '&:hover': {
      transform: 'scale(1.05)',
      transition: 'transform 0.2s',
    },
  }}
/>
```

## Theme Context

The component uses a ThemeContext that provides:

- `mode`: Current theme mode ('light' or 'dark')
- `toggleTheme()`: Function to toggle between themes
- `setTheme(mode)`: Function to set a specific theme

### Using the Theme Context

```tsx
import { useTheme } from '../contexts/ThemeContext';

function MyComponent() {
  const { mode, toggleTheme, setTheme } = useTheme();

  return (
    <div>
      <p>Current theme: {mode}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <button onClick={() => setTheme('light')}>Set Light</button>
      <button onClick={() => setTheme('dark')}>Set Dark</button>
    </div>
  );
}
```

## Extending the Component

### Adding New Variants

1. Add the new variant type to `ThemeToggleVariant`
2. Create a render function for the new variant
3. Add the case to the `renderVariant` switch statement

### Adding New Props

1. Add the prop to the `ThemeToggleProps` interface
2. Add the prop to the component's parameter destructuring
3. Use the prop in the appropriate render functions

## Accessibility

The component includes:
- Proper ARIA labels
- Keyboard navigation support
- Tooltip text for better UX
- Semantic HTML structure

## Browser Support

- Modern browsers with ES6+ support
- React 18+
- Material-UI v5+
- TypeScript 4.5+

## Demo

Visit `/theme-demo` in your application to see all variants and configurations in action.
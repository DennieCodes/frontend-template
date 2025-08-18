# Developer Guide

A quick reference guide for developers working with this React frontend template.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn

### Setup
```bash
cd client
npm install
npm run dev
```

### Build
```bash
npm run build
npm run preview
```

## 📁 Project Structure

```
client/
├── src/
│   ├── components/          # Reusable UI components
│   ├── contexts/            # React contexts
│   ├── hooks/               # Custom React hooks
│   ├── i18n/                # Internationalization
│   ├── slice/               # Redux slices
│   ├── store/               # Redux store
│   ├── types/               # TypeScript types
│   ├── views/               # Page components
│   └── tests/               # Test files
├── public/                  # Static assets
└── package.json             # Dependencies
```

## 🛠️ Development Workflow

### 1. Component Development
```typescript
// Create a new component
interface MyComponentProps {
  title: string;
  onClick?: () => void;
}

const MyComponent: React.FC<MyComponentProps> = ({ title, onClick }) => {
  return (
    <div onClick={onClick}>
      <h1>{title}</h1>
    </div>
  );
};

export default MyComponent;
```

### 2. Type Definitions
```typescript
// Add to src/types/common.ts for shared types
export interface BaseMyEntity extends BaseEntity {
  title: string;
  description?: string;
}

// Add to specific type files for component types
export interface MyComponentProps {
  data: BaseMyEntity;
  variant?: 'default' | 'compact';
}
```

### 3. Internationalization
```typescript
// Add translations to src/i18n/locales/en/translation.json
{
  "myComponent": {
    "title": "My Component Title",
    "description": "Component description"
  }
}

// Use in component
const { t } = useTranslation();
return <h1>{t('myComponent.title')}</h1>;
```

## 🎯 Key Patterns

### 1. Component Structure
```typescript
import React from 'react';
import { ComponentProps } from './types';

const Component: React.FC<ComponentProps> = ({ prop1, prop2 }) => {
  // Component logic
  return (
    // JSX
  );
};

export default Component;
```

### 2. Type Safety
```typescript
// Always type your props
interface Props {
  required: string;
  optional?: number;
  callback: (value: string) => void;
}

// Use strict typing
type Status = 'loading' | 'success' | 'error';
type UserRole = 'user' | 'admin' | 'moderator';
```

### 3. Event Handling
```typescript
// For Material-UI components
const handleChange = (event: any) => {
  setValue(event.target.value);
};

// For custom components
const handleClick = (data: MyData) => {
  // Handle click
};
```

## 🔧 Common Tasks

### Adding a New Page
1. Create component in `src/views/`
2. Add route in `src/App.tsx`
3. Add navigation link in header
4. Add translations if needed

### Adding a New Component
1. Create folder in `src/components/`
2. Add component file and types
3. Add README.md for documentation
4. Export from index.ts

### Adding New Types
1. Add to `src/types/common.ts` for base types
2. Add to specific type files for component types
3. Update documentation

### Adding Translations
1. Add keys to `src/i18n/locales/en/translation.json`
2. Add keys to `src/i18n/locales/es/translation.json`
3. Use `useTranslation()` hook in component

## 🧪 Testing

### Running Tests
```bash
npm test              # Run all tests
npm run test:watch    # Watch mode
npm run test:ci       # CI mode with coverage
```

### Writing Tests
```typescript
import { render, screen } from '@testing-library/react';
import MyComponent from './MyComponent';

describe('MyComponent', () => {
  it('renders correctly', () => {
    render(<MyComponent title="Test" />);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });
});
```

## 🎨 Styling

### Material-UI
```typescript
import { Box, Typography } from '@mui/material';

const StyledComponent = () => (
  <Box sx={{ p: 2, bgcolor: 'background.paper' }}>
    <Typography variant="h6">Title</Typography>
  </Box>
);
```

### Theme Usage
```typescript
import { useTheme } from '@mui/material/styles';

const Component = () => {
  const theme = useTheme();
  return (
    <div style={{ color: theme.palette.primary.main }}>
      Themed content
    </div>
  );
};
```

## 🔍 Debugging

### TypeScript Errors
- Check type definitions in `src/types/`
- Ensure all props are properly typed
- Use strict TypeScript mode

### Build Errors
- Run `npm run build` to see all errors
- Check component prop types
- Verify import/export statements

### Runtime Issues
- Check browser console for errors
- Use React DevTools for component inspection
- Verify Redux state with Redux DevTools

## 📚 Useful Commands

### Development
```bash
npm run dev          # Start dev server
npm run build        # Build for production
npm run preview      # Preview build
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint issues
```

### Testing
```bash
npm test             # Run tests
npm run test:watch   # Watch mode
npm run test:ci      # CI mode
```

### Code Quality
```bash
npm run lint         # Check code quality
npm run lint:fix     # Auto-fix issues
```

## 🚨 Common Issues

### Material-UI Grid Issues
```typescript
// Use GridLegacy for compatibility
import Grid from '@mui/material/GridLegacy';
```

### Event Handler Types
```typescript
// For Material-UI Select components
const handleChange = (event: any) => {
  setValue(event.target.value);
};
```

### Icon Rendering
```typescript
// For Material-UI icons in data
icon: <Business />,  // Use JSX syntax

// In component rendering
{React.isValidElement(value.icon) ? value.icon : typeof value.icon === 'function' ? React.createElement(value.icon) : value.icon}
```

### Type Mismatches
- Check interface definitions
- Ensure required properties are provided
- Use type assertions when necessary

## 📖 Resources

### Documentation
- [Build Fixes](./BUILD_FIXES.md) - Recent fixes and improvements
- [Type System](./TYPE_SYSTEM.md) - Comprehensive type guide
- [I18N Setup](./I18N_SETUP.md) - Internationalization guide

### External Resources
- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Material-UI Documentation](https://mui.com/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)

## 🤝 Contributing

### Code Style
- Use TypeScript for all new code
- Follow existing naming conventions
- Add proper type definitions
- Include JSDoc comments for complex functions

### Testing
- Write tests for new components
- Maintain test coverage
- Use React Testing Library patterns

### Documentation
- Update README files for new components
- Add type documentation
- Include usage examples

---

**Last Updated**: December 2024
**Maintainer**: Development Team

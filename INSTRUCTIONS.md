# Frontend Template - Usage Instructions

This document provides detailed instructions on how to use and customize different aspects of the frontend template.

## 📋 Table of Contents

1. [Getting Started](#getting-started)
2. [Component Usage](#component-usage)
3. [Internationalization (i18n)](#internationalization-i18n)
4. [Theme System](#theme-system)
5. [Authentication](#authentication)
6. [State Management](#state-management)
7. [Routing](#routing)
8. [Testing](#testing)
9. [Customization](#customization)
10. [Deployment](#deployment)

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager
- Git for version control

### Initial Setup
```bash
# Clone the repository
git clone <repository-url>
cd frontend-template

# Install dependencies
cd client
npm install

# Start development server
npm run dev
```

### Project Structure Overview
```
client/src/
├── components/     # Reusable UI components
├── views/         # Page components
├── contexts/      # React contexts
├── hooks/         # Custom React hooks
├── i18n/          # Internationalization
├── slice/         # Redux slices
├── store/         # Redux store
├── types/         # TypeScript types
└── tests/         # Test files
```

## 🧩 Component Usage

### Using Article Components

#### ArticleCard Component
```tsx
import ArticleCard from '../components/ArticleCard/ArticleCard';

// Basic usage
<ArticleCard
  article={articleData}
  variant="default"
  onClick={(article) => console.log('Clicked:', article)}
/>

// Available variants: 'default', 'featured', 'compact'
```

#### ArticleDirectory Component
```tsx
import ArticleDirectory from '../components/ArticleDirectory/ArticleDirectory';

<ArticleDirectory
  articles={articlesList}
  title="Latest Articles"
  subtitle="Discover our latest content"
  showFilters={true}
  onArticleClick={(article) => navigate(`/articles/${article.id}`)}
/>
```

### Using Resource Components

#### ResourceCard Component
```tsx
import ResourceCard from '../components/ResourceCard/ResourceCard';

<ResourceCard
  resource={resourceData}
  variant="detailed"
  onClick={(resource) => navigate(`/resources/${resource.id}`)}
/>

// Available variants: 'default', 'featured', 'compact', 'detailed'
```

#### ResourceDirectory Component
```tsx
import ResourceDirectory from '../components/ResourceDirectory/ResourceDirectory';

<ResourceDirectory
  resources={resourcesList}
  title="Resource Directory"
  subtitle="Find helpful resources"
  showFilters={true}
  onResourceClick={(resource) => navigate(`/resources/${resource.id}`)}
/>
```

### Using Search Components

#### SearchFilters Component
```tsx
import SearchFilters from '../components/SearchFilters/SearchFilters';

const [selectedTags, setSelectedTags] = useState<string[]>([]);

<SearchFilters
  selectedTags={selectedTags}
  onTagFilter={(tags) => setSelectedTags(tags)}
/>
```

### Using Theme Components

#### ThemeToggle Component
```tsx
import { ThemeToggle } from '../components/ThemeToggle/ThemeToggle';

// In your component
<ThemeToggle />
```

### Using Language Components

#### LanguageSwitcher Component
```tsx
import LanguageSwitcher from '../components/LanguageSwitcher/LanguageSwitcher';

<LanguageSwitcher
  size="small"
  className="custom-class"
/>
```

## 🌍 Internationalization (i18n)

### Adding New Translations

1. **Create translation file** in `src/i18n/locales/`
```json
// src/i18n/locales/fr/translation.json
{
  "common": {
    "home": "Accueil",
    "about": "À propos"
  }
}
```

2. **Add to i18n configuration** in `src/i18n/i18n.ts`
```typescript
const resources: TranslationResources = {
  en: { translation: enTranslation },
  es: { translation: esTranslation },
  fr: { translation: frTranslation }, // Add new language
};
```

3. **Update language switcher** in `src/components/LanguageSwitcher/LanguageSwitcher.tsx`
```tsx
// Add new language button
<Button
  variant={currentLanguage === 'fr' ? 'contained' : 'outlined'}
  onClick={() => handleLanguageChange('fr')}
>
  🇫🇷 FR
</Button>
```

### Using Translations in Components

```tsx
import { useTranslation } from 'react-i18next';

const MyComponent = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('common.home')}</h1>
      <p>{t('pages.about.subtitle')}</p>
    </div>
  );
};
```

### Translation with Variables

```tsx
// In translation file
{
  "welcome": "Welcome, {{name}}!",
  "items": "{{count}} items found"
}

// In component
{t('welcome', { name: 'John' })}
{t('items', { count: 5 })}
```

## 🎨 Theme System

### Customizing Themes

1. **Modify theme configuration** in `src/contexts/ThemeContext.tsx`
```typescript
const theme = createTheme({
  palette: {
    mode: themeMode,
    primary: {
      main: '#1976d2',
      light: '#42a5f5',
      dark: '#1565c0',
    },
    secondary: {
      main: '#dc004e',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
});
```

2. **Adding custom theme variables**
```typescript
const theme = createTheme({
  // ... other config
  custom: {
    borderRadius: '8px',
    spacing: '16px',
  },
});
```

### Using Theme in Components

```tsx
import { useTheme } from '@mui/material/styles';

const MyComponent = () => {
  const theme = useTheme();

  return (
    <Box sx={{
      backgroundColor: theme.palette.background.paper,
      borderRadius: theme.custom?.borderRadius,
    }}>
      Content
    </Box>
  );
};
```

### Theme Context Usage

```tsx
import { useTheme } from '../contexts/ThemeContext';

const MyComponent = () => {
  const { mode, toggleTheme, setTheme } = useTheme();

  return (
    <div>
      <p>Current theme: {mode}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <button onClick={() => setTheme('light')}>Light Mode</button>
      <button onClick={() => setTheme('dark')}>Dark Mode</button>
    </div>
  );
};
```

## 🔐 Authentication

### Setting Up Authentication

1. **Configure Redux store** in `src/store/index.ts`
```typescript
import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../slice/authSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});
```

2. **Using auth state in components**
```tsx
import { useSelector, useDispatch } from 'react-redux';
import { login, logout } from '../slice/authSlice';

const MyComponent = () => {
  const dispatch = useDispatch();
  const { user, isAuthenticated } = useSelector((state) => state.auth);

  const handleLogin = () => {
    dispatch(login({ user: userData }));
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      {isAuthenticated ? (
        <p>Welcome, {user?.name}!</p>
      ) : (
        <p>Please log in</p>
      )}
    </div>
  );
};
```

### Protected Routes

```tsx
import ProtectedRoute from '../components/ProtectedRoute/ProtectedRoute';

// In your router
<Route
  path="/dashboard"
  element={
    <ProtectedRoute>
      <Dashboard />
    </ProtectedRoute>
  }
/>
```

## 📊 State Management

### Creating Redux Slices

```typescript
// src/slice/exampleSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ExampleState {
  data: any[];
  loading: boolean;
  error: string | null;
}

const initialState: ExampleState = {
  data: [],
  loading: false,
  error: null,
};

const exampleSlice = createSlice({
  name: 'example',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setData: (state, action: PayloadAction<any[]>) => {
      state.data = action.payload;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
  },
});

export const { setLoading, setData, setError } = exampleSlice.actions;
export default exampleSlice.reducer;
```

### Using Redux in Components

```tsx
import { useSelector, useDispatch } from 'react-redux';
import { setData, setLoading } from '../slice/exampleSlice';

const MyComponent = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.example);

  const fetchData = async () => {
    dispatch(setLoading(true));
    try {
      const response = await api.getData();
      dispatch(setData(response.data));
    } catch (err) {
      dispatch(setError(err.message));
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {data.map(item => <div key={item.id}>{item.name}</div>)}
    </div>
  );
};
```

## 🛣️ Routing

### Adding New Routes

```tsx
// In App.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NewPage from './views/NewPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new-page" element={<NewPage />} />
        <Route path="/protected" element={
          <ProtectedRoute>
            <ProtectedPage />
          </ProtectedRoute>
        } />
      </Routes>
    </BrowserRouter>
  );
}
```

### Navigation

```tsx
import { useNavigate } from 'react-router-dom';

const MyComponent = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/new-page');
  };

  return <button onClick={handleClick}>Go to New Page</button>;
};
```

### Route Parameters

```tsx
import { useParams } from 'react-router-dom';

const ArticlePage = () => {
  const { id } = useParams<{ id: string }>();

  return <div>Article ID: {id}</div>;
};

// In router
<Route path="/articles/:id" element={<ArticlePage />} />
```

## 🧪 Testing

### Writing Component Tests

```tsx
// src/tests/MyComponent.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../store';
import MyComponent from '../components/MyComponent';

describe('MyComponent', () => {
  it('renders correctly', () => {
    render(
      <Provider store={store}>
        <MyComponent />
      </Provider>
    );

    expect(screen.getByText('Hello World')).toBeInTheDocument();
  });

  it('handles user interaction', () => {
    render(
      <Provider store={store}>
        <MyComponent />
      </Provider>
    );

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(screen.getByText('Clicked!')).toBeInTheDocument();
  });
});
```

### Testing with i18n

```tsx
import { I18nextProvider } from 'react-i18next';
import i18n from '../i18n/i18n';

const renderWithI18n = (component: React.ReactElement) => {
  return render(
    <I18nextProvider i18n={i18n}>
      {component}
    </I18nextProvider>
  );
};
```

### Testing with Theme

```tsx
import { ThemeProvider } from '../contexts/ThemeContext';

const renderWithTheme = (component: React.ReactElement) => {
  return render(
    <ThemeProvider>
      {component}
    </ThemeProvider>
  );
};
```

## 🎨 Customization

### Adding New Components

1. **Create component directory**
```bash
mkdir src/components/NewComponent
```

2. **Create component files**
```typescript
// src/components/NewComponent/NewComponent.tsx
import React from 'react';
import { Box, Typography } from '@mui/material';

interface NewComponentProps {
  title: string;
  children?: React.ReactNode;
}

const NewComponent: React.FC<NewComponentProps> = ({ title, children }) => {
  return (
    <Box>
      <Typography variant="h6">{title}</Typography>
      {children}
    </Box>
  );
};

export default NewComponent;
```

3. **Create type definitions**
```typescript
// src/components/NewComponent/NewComponent.d.ts
export interface NewComponentProps {
  title: string;
  children?: React.ReactNode;
}
```

4. **Create index file**
```typescript
// src/components/NewComponent/index.ts
export { default } from './NewComponent';
export type { NewComponentProps } from './NewComponent';
```

### Customizing Styles

```tsx
// Using Material-UI sx prop
<Box sx={{
  backgroundColor: 'primary.main',
  borderRadius: 2,
  p: 2,
  '&:hover': {
    backgroundColor: 'primary.dark',
  },
}}>
  Content
</Box>

// Using styled components
import { styled } from '@mui/material/styles';

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(2),
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
  },
}));
```

### Environment Configuration

```bash
# .env.local
VITE_API_URL=https://api.example.com
VITE_APP_NAME=My App
VITE_DEBUG_MODE=true
```

```typescript
// Using environment variables
const apiUrl = import.meta.env.VITE_API_URL;
const appName = import.meta.env.VITE_APP_NAME;
```

## 🚀 Deployment

### Building for Production

```bash
# Build the project
npm run build

# Preview the build
npm run preview
```

### Environment-Specific Builds

```bash
# Development
npm run dev

# Production
npm run build

# Staging (if configured)
npm run build:staging
```

### Deployment Platforms

#### Vercel
1. Connect your GitHub repository
2. Vercel will auto-detect the React app
3. Deploy automatically on push

#### Netlify
1. Build command: `npm run build`
2. Publish directory: `dist`
3. Deploy automatically on push

#### Docker
```dockerfile
# Dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "preview"]
```

## 🔧 Troubleshooting

### Common Issues

1. **TypeScript errors**
   - Run `npm run build` to see all type errors
   - Check type definitions in `src/types/`

2. **ESLint errors**
   - Run `npm run lint` to see linting issues
   - Use `npm run lint:fix` to auto-fix issues

3. **i18n not working**
   - Check translation files in `src/i18n/locales/`
   - Verify i18n configuration in `src/i18n/i18n.ts`

4. **Theme not switching**
   - Check ThemeContext implementation
   - Verify localStorage is working
   - Check browser console for errors

### Performance Optimization

1. **Code splitting**
   ```tsx
   import { lazy, Suspense } from 'react';

   const LazyComponent = lazy(() => import('./LazyComponent'));

   <Suspense fallback={<div>Loading...</div>}>
     <LazyComponent />
   </Suspense>
   ```

2. **Memoization**
   ```tsx
   import { memo, useMemo, useCallback } from 'react';

   const MemoizedComponent = memo(({ data }) => {
     const processedData = useMemo(() => {
       return data.map(item => item.process());
     }, [data]);

     const handleClick = useCallback(() => {
       // Handle click
     }, []);

     return <div onClick={handleClick}>{processedData}</div>;
   });
   ```

## 📚 Additional Resources

- [Material-UI Documentation](https://mui.com/)
- [React Router Documentation](https://reactrouter.com/)
- [Redux Toolkit Documentation](https://redux-toolkit.js.org/)
- [React i18next Documentation](https://react.i18next.com/)
- [Vite Documentation](https://vitejs.dev/)

---

**Need help? Check the main README.md or open an issue on GitHub.**
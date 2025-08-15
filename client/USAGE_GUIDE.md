# Complete Usage Guide

This comprehensive guide will help you understand, customize, and extend this React template for your own projects.

## 📋 Table of Contents

1. [Project Overview](#project-overview)
2. [Getting Started](#getting-started)
3. [Project Structure Deep Dive](#project-structure-deep-dive)
4. [Customization Guide](#customization-guide)
5. [Adding New Features](#adding-new-features)
6. [Styling and Theming](#styling-and-theming)
7. [State Management](#state-management)
8. [Routing and Navigation](#routing-and-navigation)
9. [Internationalization (i18n)](#internationalization-i18n)
10. [Testing](#testing)
11. [Performance Optimization](#performance-optimization)
12. [Deployment](#deployment)
13. [Troubleshooting](#troubleshooting)

## 🎯 Project Overview

This template is designed as a comprehensive starting point for React applications. It includes:

- **Modern React patterns** with hooks and functional components
- **TypeScript** for type safety and better developer experience
- **Material-UI** for consistent, accessible UI components
- **Redux Toolkit** for predictable state management
- **React Router** for client-side routing
- **i18next** for internationalization
- **Comprehensive testing setup** with Jest and React Testing Library

## 🚀 Getting Started

### Prerequisites
- Node.js 18 or higher
- npm or yarn package manager
- Basic knowledge of React, TypeScript, and modern JavaScript

### Initial Setup
```bash
# Clone and install
git clone <your-repo-url>
cd frontend-template/client
npm install

# Start development
npm run dev
```

### Understanding the Development Workflow
1. **Development**: `npm run dev` - Starts Vite dev server with HMR
2. **Testing**: `npm run test` - Runs Jest tests
3. **Linting**: `npm run lint` - Checks code quality
4. **Building**: `npm run build` - Creates production build

## 🏗️ Project Structure Deep Dive

### Core Directories

#### `/src/components/`
Reusable UI components organized by feature:

```
components/
├── Header/              # Navigation components
│   ├── Header.tsx      # Main header component
│   ├── HeaderBrand.tsx # Logo/brand component
│   ├── HeaderNavigation.tsx # Navigation links
│   └── HeaderMobileDrawer.tsx # Mobile menu
├── ArticleCard/        # Content display components
├── quiz/              # Interactive quiz components
├── survey/            # Survey form components
├── ThemeToggle/       # Theme switching
├── LanguageSwitcher/  # Language selection
└── ProtectedRoute/    # Authentication wrapper
```

#### `/src/views/`
Page-level components that represent full pages:

```
views/
├── Home/              # Landing page
├── Articles/          # Article listing and management
├── Dashboard/         # User dashboard
├── Admin/             # Admin panel
├── Login/             # Authentication pages
├── Quiz/              # Interactive quiz
├── Survey/            # Survey forms
└── shared/            # Shared view components
```

#### `/src/store/`
Redux store configuration and slices:

```typescript
// store/index.ts
import { configureStore } from '@reduxjs/toolkit';
import authSlice from '../slice/authSlice';

export const store = configureStore({
  reducer: {
    auth: authSlice,
    // Add more slices here
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
```

#### `/src/i18n/`
Internationalization setup:

```
i18n/
├── i18n.ts           # i18next configuration
└── locales/
    ├── en/
    │   └── translation.json
    └── es/
        └── translation.json
```

## 🎨 Customization Guide

### Removing Unused Features

#### 1. Remove Unused Pages
To remove a page (e.g., Quiz):

1. **Delete the view directory**:
   ```bash
   rm -rf src/views/Quiz
   ```

2. **Remove the route** from `src/App.tsx`:
   ```typescript
   // Remove this line
   import QuizPage from "./views/Quiz";

   // Remove this route
   <Route path="/quiz" element={<QuizPage />} />
   ```

3. **Remove related components**:
   ```bash
   rm -rf src/components/quiz
   ```

4. **Update navigation** in Header components if needed

#### 2. Remove Unused Dependencies
After removing features, clean up unused dependencies:

```bash
# Check for unused dependencies
npm ls

# Remove unused packages
npm uninstall <package-name>
```

### Adding New Pages

#### 1. Create the Page Component
```typescript
// src/views/NewPage/NewPage.tsx
import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const NewPage: React.FC = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 4 }}>
        <Typography variant="h1" component="h1" gutterBottom>
          New Page
        </Typography>
        <Typography variant="body1">
          Your content here...
        </Typography>
      </Box>
    </Container>
  );
};

export default NewPage;
```

#### 2. Add the Route
```typescript
// src/App.tsx
import NewPage from "./views/NewPage/NewPage";

// Add to Routes
<Route path="/new-page" element={<NewPage />} />
```

#### 3. Add Navigation (Optional)
```typescript
// src/components/Header/HeaderNavigation.tsx
const navigationItems = [
  // ... existing items
  { label: 'New Page', path: '/new-page' },
];
```

### Customizing the Theme

#### 1. Modify Theme Colors
```typescript
// src/contexts/ThemeContext.tsx
const lightTheme = createTheme({
  palette: {
    primary: {
      main: '#your-primary-color',
    },
    secondary: {
      main: '#your-secondary-color',
    },
  },
});
```

#### 2. Add Custom Components
```typescript
// src/components/CustomButton/CustomButton.tsx
import { Button, ButtonProps } from '@mui/material';
import { styled } from '@mui/material/styles';

const CustomButton = styled(Button)<ButtonProps>(({ theme }) => ({
  borderRadius: '25px',
  textTransform: 'none',
  fontWeight: 600,
}));

export default CustomButton;
```

## 🔧 Adding New Features

### Adding a New Content Type

#### 1. Define Types
```typescript
// src/types/newContent.ts
export interface NewContent {
  id: string;
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}
```

#### 2. Create Components
```typescript
// src/components/NewContentCard/NewContentCard.tsx
import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { NewContent } from '../../types/newContent';

interface NewContentCardProps {
  content: NewContent;
}

const NewContentCard: React.FC<NewContentCardProps> = ({ content }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6">{content.title}</Typography>
        <Typography variant="body2">{content.description}</Typography>
      </CardContent>
    </Card>
  );
};

export default NewContentCard;
```

#### 3. Create Views
```typescript
// src/views/NewContent/NewContentPage.tsx
import React from 'react';
import { Grid, Container } from '@mui/material';
import NewContentCard from '../../components/NewContentCard/NewContentCard';

const NewContentPage: React.FC = () => {
  const mockData = [
    // Your mock data
  ];

  return (
    <Container maxWidth="lg">
      <Grid container spacing={3}>
        {mockData.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <NewContentCard content={item} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default NewContentPage;
```

### Adding API Integration

#### 1. Create API Service
```typescript
// src/services/api.ts
const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001';

export const apiService = {
  async get<T>(endpoint: string): Promise<T> {
    const response = await fetch(`${API_BASE_URL}${endpoint}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  },

  async post<T>(endpoint: string, data: any): Promise<T> {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  },
};
```

#### 2. Create Custom Hooks
```typescript
// src/hooks/useApi.ts
import { useState, useEffect } from 'react';
import { apiService } from '../services/api';

export function useApi<T>(endpoint: string) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const result = await apiService.get<T>(endpoint);
        setData(result);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [endpoint]);

  return { data, loading, error };
}
```

## 🎨 Styling and Theming

### Material-UI Best Practices

#### 1. Using the Theme
```typescript
import { useTheme } from '@mui/material/styles';
import { Box } from '@mui/material';

const MyComponent = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(2),
        borderRadius: theme.shape.borderRadius,
      }}
    >
      Content
    </Box>
  );
};
```

#### 2. Responsive Design
```typescript
<Box
  sx={{
    width: {
      xs: '100%',    // 0-599px
      sm: '50%',     // 600-899px
      md: '33.33%',  // 900-1199px
      lg: '25%',     // 1200px+
    },
  }}
>
  Content
</Box>
```

#### 3. Custom Styled Components
```typescript
import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';

const CustomButton = styled(Button)(({ theme }) => ({
  borderRadius: '25px',
  textTransform: 'none',
  fontWeight: 600,
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: theme.shadows[4],
  },
}));
```

## 🔄 State Management

### Redux Toolkit Patterns

#### 1. Creating a Slice
```typescript
// src/slice/newFeatureSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface NewFeatureState {
  items: any[];
  loading: boolean;
  error: string | null;
}

const initialState: NewFeatureState = {
  items: [],
  loading: false,
  error: null,
};

const newFeatureSlice = createSlice({
  name: 'newFeature',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setItems: (state, action: PayloadAction<any[]>) => {
      state.items = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const { setLoading, setItems, setError } = newFeatureSlice.actions;
export default newFeatureSlice.reducer;
```

#### 2. Using Redux in Components
```typescript
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { setItems } from '../slice/newFeatureSlice';

const MyComponent = () => {
  const dispatch = useDispatch();
  const { items, loading } = useSelector((state: RootState) => state.newFeature);

  const handleFetchData = async () => {
    // Fetch data and dispatch
    dispatch(setItems(data));
  };

  return (
    <div>
      {loading ? 'Loading...' : items.map(item => <div key={item.id}>{item.name}</div>)}
    </div>
  );
};
```

## 🧭 Routing and Navigation

### Route Configuration

#### 1. Adding Protected Routes
```typescript
// src/components/ProtectedRoute/ProtectedRoute.tsx
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

interface ProtectedRouteProps {
  children: React.ReactNode;
  requiredRole?: string;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  children,
  requiredRole
}) => {
  const { isAuthenticated, user } = useSelector((state: RootState) => state.auth);

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (requiredRole && user?.role !== requiredRole) {
    return <Navigate to="/unauthorized" replace />;
  }

  return <>{children}</>;
};
```

#### 2. Dynamic Routes
```typescript
// In App.tsx
<Route path="/articles/:id" element={<ArticlePage />} />

// In ArticlePage component
import { useParams } from 'react-router-dom';

const ArticlePage = () => {
  const { id } = useParams<{ id: string }>();
  // Use id to fetch article data
};
```

### Navigation Patterns

#### 1. Programmatic Navigation
```typescript
import { useNavigate } from 'react-router-dom';

const MyComponent = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/new-page');
  };

  return <button onClick={handleClick}>Go to New Page</button>;
};
```

#### 2. Breadcrumb Navigation
```typescript
// src/components/Breadcrumbs/Breadcrumbs.tsx
import { Breadcrumbs, Link, Typography } from '@mui/material';
import { Link as RouterLink, useLocation } from 'react-router-dom';

const BreadcrumbsComponent = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Link component={RouterLink} to="/">
        Home
      </Link>
      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
        const isLast = index === pathnames.length - 1;

        return isLast ? (
          <Typography key={name}>{name}</Typography>
        ) : (
          <Link component={RouterLink} to={routeTo} key={name}>
            {name}
          </Link>
        );
      })}
    </Breadcrumbs>
  );
};
```

## 🌍 Internationalization (i18n)

### Adding New Languages

#### 1. Create Translation Files
```json
// src/i18n/locales/fr/translation.json
{
  "common": {
    "welcome": "Bienvenue",
    "loading": "Chargement...",
    "error": "Erreur"
  },
  "navigation": {
    "home": "Accueil",
    "about": "À propos",
    "contact": "Contact"
  }
}
```

#### 2. Configure i18n
```typescript
// src/i18n/i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import enTranslation from './locales/en/translation.json';
import esTranslation from './locales/es/translation.json';
import frTranslation from './locales/fr/translation.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslation },
      es: { translation: esTranslation },
      fr: { translation: frTranslation },
    },
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
```

#### 3. Using Translations
```typescript
import { useTranslation } from 'react-i18next';

const MyComponent = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('common.welcome')}</h1>
      <p>{t('common.loading')}</p>
    </div>
  );
};
```

### Language Switching
```typescript
// src/components/LanguageSwitcher/LanguageSwitcher.tsx
import { useTranslation } from 'react-i18next';
import { Select, MenuItem } from '@mui/material';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <Select
      value={i18n.language}
      onChange={(e) => changeLanguage(e.target.value)}
    >
      <MenuItem value="en">English</MenuItem>
      <MenuItem value="es">Español</MenuItem>
      <MenuItem value="fr">Français</MenuItem>
    </Select>
  );
};
```

## 🧪 Testing

### Component Testing

#### 1. Basic Component Test
```typescript
// src/components/MyComponent/MyComponent.test.tsx
import { render, screen } from '@testing-library/react';
import MyComponent from './MyComponent';

describe('MyComponent', () => {
  it('renders correctly', () => {
    render(<MyComponent />);
    expect(screen.getByText('Expected Text')).toBeInTheDocument();
  });

  it('handles user interactions', () => {
    render(<MyComponent />);
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(screen.getByText('Clicked!')).toBeInTheDocument();
  });
});
```

#### 2. Testing with Redux
```typescript
// src/components/MyComponent/MyComponent.test.tsx
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import MyComponent from './MyComponent';

const createTestStore = () => {
  return configureStore({
    reducer: {
      // Add your reducers here
    },
  });
};

describe('MyComponent with Redux', () => {
  it('renders with store data', () => {
    const store = createTestStore();

    render(
      <Provider store={store}>
        <MyComponent />
      </Provider>
    );

    expect(screen.getByText('Store Data')).toBeInTheDocument();
  });
});
```

#### 3. Testing with Router
```typescript
// src/components/MyComponent/MyComponent.test.tsx
import { BrowserRouter } from 'react-router-dom';

describe('MyComponent with Router', () => {
  it('renders with navigation', () => {
    render(
      <BrowserRouter>
        <MyComponent />
      </BrowserRouter>
    );

    expect(screen.getByRole('link')).toBeInTheDocument();
  });
});
```

### Custom Test Utilities
```typescript
// src/tests/test-utils.tsx
import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';

function render(
  ui: React.ReactElement,
  {
    preloadedState = {},
    store = configureStore({ reducer: {}, preloadedState }),
    route = '/',
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }: { children: React.ReactNode }) {
    return (
      <Provider store={store}>
        <BrowserRouter>
          {children}
        </BrowserRouter>
      </Provider>
    );
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

export * from '@testing-library/react';
export { render };
```

## ⚡ Performance Optimization

### Code Splitting
```typescript
// src/App.tsx
import { lazy, Suspense } from 'react';

const LazyComponent = lazy(() => import('./components/HeavyComponent'));

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </Suspense>
  );
};
```

### Memoization
```typescript
import React, { memo, useMemo, useCallback } from 'react';

// Memoize expensive components
const ExpensiveComponent = memo(({ data }: { data: any[] }) => {
  const processedData = useMemo(() => {
    return data.map(item => item.processed);
  }, [data]);

  const handleClick = useCallback((id: string) => {
    // Handle click
  }, []);

  return (
    <div>
      {processedData.map(item => (
        <div key={item.id} onClick={() => handleClick(item.id)}>
          {item.name}
        </div>
      ))}
    </div>
  );
});
```

### Image Optimization
```typescript
// src/components/OptimizedImage/OptimizedImage.tsx
import { useState } from 'react';
import { Skeleton, Box } from '@mui/material';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
}) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  return (
    <Box position="relative">
      {loading && <Skeleton variant="rectangular" width={width} height={height} />}
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        onLoad={() => setLoading(false)}
        onError={() => {
          setLoading(false);
          setError(true);
        }}
        style={{ display: loading ? 'none' : 'block' }}
      />
      {error && <div>Failed to load image</div>}
    </Box>
  );
};
```

## 🚀 Deployment

### Environment Configuration
```typescript
// .env.production
REACT_APP_API_URL=https://api.yourdomain.com
REACT_APP_ENVIRONMENT=production
REACT_APP_GA_TRACKING_ID=GA-XXXXXXXXX
```

### Build Optimization
```typescript
// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          mui: ['@mui/material', '@mui/icons-material'],
        },
      },
    },
    chunkSizeWarningLimit: 1000,
  },
});
```

### Deployment Scripts
```json
// package.json
{
  "scripts": {
    "build:prod": "npm run build",
    "deploy": "npm run build:prod && aws s3 sync dist/ s3://your-bucket --delete",
    "deploy:staging": "npm run build:staging && aws s3 sync dist/ s3://staging-bucket --delete"
  }
}
```

## 🔧 Troubleshooting

### Common Issues

#### 1. TypeScript Errors
```bash
# Check TypeScript configuration
npx tsc --noEmit

# Fix common issues
npm run lint -- --fix
```

#### 2. Build Errors
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install

# Check for dependency conflicts
npm ls
```

#### 3. Test Failures
```bash
# Run tests with verbose output
npm run test -- --verbose

# Run specific test file
npm run test -- MyComponent.test.tsx
```

### Debugging Tips

#### 1. React DevTools
Install React DevTools browser extension for component inspection.

#### 2. Redux DevTools
```typescript
// store/index.ts
export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
});
```

#### 3. Performance Monitoring
```typescript
// Add performance monitoring
import { Profiler } from 'react';

const onRenderCallback = (id: string, phase: string, actualDuration: number) => {
  console.log(`${id} took ${actualDuration}ms to ${phase}`);
};

<Profiler id="MyComponent" onRender={onRenderCallback}>
  <MyComponent />
</Profiler>
```

## 📚 Additional Resources

### Documentation
- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Material-UI Documentation](https://mui.com/)
- [Redux Toolkit Documentation](https://redux-toolkit.js.org/)
- [React Router Documentation](https://reactrouter.com/)

### Best Practices
- Follow the existing code patterns in the template
- Use TypeScript for all new code
- Write tests for new features
- Keep components small and focused
- Use meaningful variable and function names
- Add comments for complex logic

### Community
- Join React communities on Discord, Reddit, or Stack Overflow
- Follow React and TypeScript blogs and newsletters
- Contribute to open source projects

---

This guide should help you get started with customizing and extending this React template. Remember to check the official documentation for the libraries you're using, and don't hesitate to ask for help in the community!

**Happy coding! 🎉**

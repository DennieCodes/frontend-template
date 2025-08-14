# Header Components

This directory contains a modular header implementation that has been broken down into smaller, more manageable components for better maintainability and testability.

## Components

### Main Components

- **`Header.tsx`** - The main header component that orchestrates all sub-components
- **`HeaderBrand.tsx`** - Logo/brand section that serves as the home link
- **`HeaderNavigation.tsx`** - Desktop navigation with dropdown triggers
- **`HeaderUserControls.tsx`** - User authentication controls (login/logout, user avatar)
- **`HeaderMobileDrawer.tsx`** - Mobile drawer content and navigation
- **`HeaderDropdownMenus.tsx`** - All dropdown menus for desktop navigation

### Supporting Files

- **`types.ts`** - Shared TypeScript interfaces for navigation items
- **`index.ts`** - Barrel export for all components
- **`*.d.ts`** - TypeScript declaration files for each component

## Architecture

The header has been modularized to separate concerns:

1. **Brand/Logo** - Handles the clickable brand name (home link)
2. **Navigation** - Manages desktop navigation buttons and dropdown triggers
3. **User Controls** - Handles authentication state and user-specific UI
4. **Mobile Drawer** - Contains all mobile navigation content
5. **Dropdown Menus** - Manages all dropdown menu components

## Benefits of Modularization

- **Reduced Complexity**: Each component has a single responsibility
- **Better Testing**: Individual components can be tested in isolation
- **Easier Maintenance**: Changes to specific functionality are isolated
- **Reusability**: Components can be reused in other contexts
- **Better Performance**: Smaller components can be optimized individually

## Usage

```tsx
import { Header } from './components/Header';

// Use the main header component
<Header />

// Or import individual components for custom usage
import { HeaderBrand, HeaderNavigation } from './components/Header';
```

## Navigation Structure

The header supports the following navigation categories:

- **Main Navigation**: Search (Home link is now the brand logo)
- **About & Info**: About, Contact, FAQ, Sitemap
- **Content**: Articles, Resources, Quiz
- **Account** (authenticated users): Dashboard, Admin, Account Settings

## Responsive Behavior

- **Desktop**: Full navigation with dropdown menus
- **Mobile**: Hamburger menu with drawer navigation
- **Tablet**: Responsive layout with appropriate breakpoints

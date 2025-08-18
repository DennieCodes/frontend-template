# Frontend Template

A comprehensive, production-ready React frontend template with TypeScript, Material-UI, internationalization, state management, and modern development tools.

## 🚀 Features

### Core Technologies
- **React 19** with TypeScript
- **Vite** for fast development and building
- **Material-UI (MUI) v7** for UI components
- **React Router v7** for navigation
- **Redux Toolkit** for state management
- **React i18next** for internationalization

### Development Tools
- **ESLint** with TypeScript support
- **Jest** for testing
- **Prettier** for code formatting
- **Husky** for git hooks
- **TypeScript** for type safety

### Key Features
- 🌍 **Internationalization (i18n)** - Multi-language support (English/Spanish)
- 🎨 **Theme System** - Light/Dark mode with Material-UI theming
- 🔐 **Authentication** - Redux-based auth state management
- 📱 **Responsive Design** - Mobile-first approach
- 🧪 **Testing Setup** - Jest and React Testing Library
- 📊 **Admin Dashboard** - Complete admin interface
- 👤 **User Account Management** - Profile, security, subscription settings
- 📄 **Content Management** - Articles and resources with search/filtering
- 🔍 **Advanced Search** - Full-text search with filters
- 🎯 **Component Library** - Reusable, documented components

## 📁 Project Structure

```
frontend-template/
├── client/
│   ├── src/
│   │   ├── components/          # Reusable UI components
│   │   │   ├── account/         # User account components
│   │   │   ├── admin/           # Admin dashboard components
│   │   │   ├── ArticleCard/     # Article display components
│   │   │   ├── ArticleDirectory/# Article listing components
│   │   │   ├── ArticleGrid/     # Article grid layout
│   │   │   ├── Header/          # Navigation header
│   │   │   ├── Footer/          # Site footer
│   │   │   ├── LanguageSwitcher/# Language selection
│   │   │   ├── ProtectedRoute/  # Route protection
│   │   │   ├── ResourceCard/    # Resource display components
│   │   │   ├── ResourceDirectory/# Resource listing
│   │   │   ├── ResourceGrid/    # Resource grid layout
│   │   │   ├── SearchFilters/   # Search and filtering
│   │   │   └── ThemeToggle/     # Theme switching
│   │   ├── contexts/            # React contexts
│   │   ├── hooks/               # Custom React hooks
│   │   ├── i18n/                # Internationalization
│   │   ├── slice/               # Redux slices
│   │   ├── store/               # Redux store configuration
│   │   ├── types/               # TypeScript type definitions
│   │   ├── views/               # Page components
│   │   └── tests/               # Test files
│   ├── public/                  # Static assets
│   └── package.json             # Dependencies and scripts
└── README.md                    # This file
```

## 🛠️ Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd frontend-template
   ```

2. **Install dependencies**
   ```bash
   cd client
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 📜 Available Scripts

### Development
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
```

### Code Quality
```bash
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint issues
```

### Testing
```bash
npm test             # Run tests
npm run test:watch   # Run tests in watch mode
npm run test:ci      # Run tests with coverage
```

## 🌍 Internationalization (i18n)

The project includes a complete internationalization setup with:

- **Language Detection** - Automatic browser language detection
- **Language Switching** - UI component for language selection
- **Translation Management** - Organized translation files
- **Fallback Support** - Graceful fallback for missing translations

### Supported Languages
- English (en)
- Spanish (es)

### Adding New Languages
1. Create new translation file in `src/i18n/locales/`
2. Add language to resources in `src/i18n/i18n.ts`
3. Update language switcher component

## 🎨 Theme System

The project includes a comprehensive theme system with:

- **Light/Dark Mode** - Toggle between themes
- **Material-UI Integration** - Full MUI theme support
- **Persistent Storage** - Theme preference saved to localStorage
- **Customizable Colors** - Easy color scheme modification

### Theme Features
- Automatic theme detection
- Smooth transitions between themes
- Consistent design tokens
- Responsive design support

## 🔐 Authentication & Authorization

The project includes a complete authentication system:

- **Redux State Management** - Centralized auth state
- **Protected Routes** - Route-level authentication
- **User Management** - User profiles and settings
- **Admin Panel** - Administrative interface

### Auth Features
- Login/Register forms
- User profile management
- Security settings
- Admin dashboard access

## 📊 Admin Dashboard

Complete administrative interface with:

- **User Management** - View and manage users
- **System Logs** - Monitor system activity
- **Site Settings** - Configure application settings
- **Content Management** - Manage articles and resources

## 📄 Content Management

### Articles System
- Article listing with search and filters
- Individual article pages
- Article categories and tags
- Featured articles support

### Resources System
- Resource directory with advanced filtering
- Individual resource pages
- Resource categories and services
- Contact information and hours

## 🔍 Search & Filtering

Advanced search functionality with:

- **Full-text Search** - Search across all content
- **Advanced Filters** - Category, tags, date range
- **Sort Options** - Sort by relevance, date, title
- **Pagination** - Efficient content browsing

## 🧪 Testing

Comprehensive testing setup with:

- **Jest** - Test runner
- **React Testing Library** - Component testing
- **Test Coverage** - Coverage reporting
- **Mock Data** - Test data management

### Running Tests
```bash
npm test              # Run all tests
npm run test:watch    # Watch mode
npm run test:ci       # CI mode with coverage
```

## 📦 Component Library

The project includes a comprehensive set of reusable components:

### UI Components
- **ArticleCard** - Display article information
- **ResourceCard** - Display resource information
- **SearchFilters** - Advanced filtering interface
- **LanguageSwitcher** - Language selection
- **ThemeToggle** - Theme switching

### Layout Components
- **Header** - Navigation and user menu
- **Footer** - Site footer
- **ProtectedRoute** - Authentication wrapper
- **Grid Layouts** - Responsive grid systems

### Form Components
- **Account Forms** - Profile, security, subscription
- **Search Forms** - Advanced search interface
- **Filter Forms** - Content filtering

## 🎯 Best Practices

### Code Organization
- **Feature-based Structure** - Components organized by feature
- **Type Safety** - Full TypeScript implementation
- **Consistent Naming** - Clear, descriptive names
- **Documentation** - Comprehensive component documentation

### Performance
- **Code Splitting** - Lazy loading for routes
- **Optimized Builds** - Vite for fast builds
- **Efficient Rendering** - React optimization
- **Bundle Analysis** - Build size monitoring

### Accessibility
- **ARIA Labels** - Screen reader support
- **Keyboard Navigation** - Full keyboard support
- **Color Contrast** - WCAG compliance
- **Semantic HTML** - Proper HTML structure

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the client directory:
```env
VITE_API_URL=your-api-url
VITE_APP_NAME=Your App Name
```

### ESLint Configuration
The project uses a modern ESLint configuration with:
- TypeScript support
- React hooks rules
- Import sorting
- Code formatting

### TypeScript Configuration
- Strict type checking
- Path mapping
- Declaration file generation
- Build optimization

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deployment Options
- **Vercel** - Zero-config deployment
- **Netlify** - Static site hosting
- **AWS S3** - Static file hosting
- **Docker** - Containerized deployment

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new features
5. Ensure all tests pass
6. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 📚 Documentation

- [Developer Guide](./client/DEVELOPER_GUIDE.md) - Quick reference for developers
- [Build Fixes](./client/BUILD_FIXES.md) - Recent improvements and fixes
- [Type System](./client/TYPE_SYSTEM.md) - Comprehensive type system guide
- [I18N Setup](./client/I18N_SETUP.md) - Internationalization documentation
- [Component Documentation](./client/src/components/) - Individual component READMEs
- [Type Definitions](./client/src/types/) - TypeScript type documentation

## 🆘 Support

For support and questions:
- Check the documentation
- Review the code examples
- Open an issue on GitHub

---

**Built with ❤️ using modern web technologies**

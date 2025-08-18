# Type System Documentation

This document provides a comprehensive guide to the TypeScript type system used in this React frontend template, including base interfaces, component types, and best practices for type safety.

## 🏗️ Type System Architecture

### Overview
The project uses a hierarchical type system with base interfaces that are extended by specific component types. This ensures consistency, reusability, and type safety across the entire application.

### Type Organization
```
src/types/
├── common.ts          # Base interfaces and shared types
├── article.ts         # Article-specific types
├── article.d.ts       # Article type declarations
├── resource.ts        # Resource-specific types
├── resource.d.ts      # Resource type declarations
└── user.ts           # User-specific types
```

## 🔧 Base Interfaces

### BaseEntity
The foundation interface that all entities extend from:

```typescript
export interface BaseEntity {
  id: string;
  name: string;
}
```

### BaseArticle
Comprehensive interface for article content:

```typescript
export interface BaseArticle extends BaseEntity {
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: string;
  date?: string;
  readTime: number;
  thumbnail?: string;
  images?: string[];
  imageUrl?: string;
  tags: string[];
  category: string;
  featured?: boolean;
  url?: string;
}
```

**Key Properties:**
- `title`: Article title (required)
- `excerpt`: Article summary (required)
- `content`: Full article content (required)
- `author`: Article author (required)
- `publishedAt`: Publication date (required)
- `readTime`: Reading time in minutes (required)
- `tags`: Array of article tags (required)
- `category`: Article category (required)

### BaseUser
Complete user profile interface:

```typescript
export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  avatar?: string;
  bio?: string;
  joinDate: string;
  reputation: number;
  followersCount: number;
  followingCount: number;
  postsCount: number;
  role: 'user' | 'admin' | 'moderator';
  isVerified: boolean;
  location?: string;
  website?: string;
  socialMedia?: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
}
```

**Key Properties:**
- `firstName`, `lastName`: User's full name (required)
- `followersCount`, `followingCount`, `postsCount`: User statistics (required)
- `role`: User role with strict typing (required)
- `isVerified`: Account verification status (required)

### BaseEvent
Event management interface:

```typescript
export interface BaseEvent extends BaseEntity {
  title: string;
  description?: string;
  shortDescription?: string;
  date?: string;
  time?: string;
  category?: string;
  location?: string | BaseLocation;
  thumbnail?: string;
  images?: string[];
  featured?: boolean;
  price?: { type: string; currency?: string; amount?: number };
  capacity?: number;
  organizer?: string;
  speakers?: string[] | Array<{ name: string; title?: string; bio?: string; avatar?: string }>;
  tags?: string[];
  status?: 'upcoming' | 'ongoing' | 'completed' | 'cancelled';
  startDate?: string;
}
```

**Key Features:**
- Flexible `speakers` type supporting both strings and objects
- Comprehensive `price` structure
- Event `status` with strict typing

### BaseResource
Resource management interface:

```typescript
export interface Resource {
  id: string;
  name: string;
  description: string;
  category: string;
  subcategory?: string;
  location: {
    city: string;
    state: string;
    country: string;
    coordinates?: {
      lat: number;
      lng: number;
    };
  };
  contact: {
    phone?: string;
    email?: string;
    website?: string;
  };
  services: string[];
  tags: string[];
  rating?: number;
  reviewCount?: number;
  imageUrl?: string;
  images?: string[];
  featured?: boolean;
  verified?: boolean;
  hours?: {
    [key: string]: {
      open?: string;
      close?: string;
      closed?: boolean;
    };
  };
  pricing?: {
    range: 'low' | 'medium' | 'high' | 'free';
    description?: string;
  };
  accessibility?: string[];
  languages?: string[];
  createdAt: string;
  updatedAt: string;
}
```

## 🧩 Supporting Interfaces

### BaseLocation
Location information interface:

```typescript
export interface BaseLocation {
  address: string;
  city: string;
  state: string;
  zipCode: string;
  name?: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
}
```

### BaseTeamMember
Team member profile interface:

```typescript
export interface BaseTeamMember {
  name: string;
  role: string;
  position?: string;
  bio?: string;
  avatar?: string;
  email?: string;
  linkedin?: string;
  twitter?: string;
  initials?: string;
  avatarColor?: string;
}
```

### BaseValue
Value proposition interface with flexible icon support:

```typescript
export interface BaseValue {
  title: string;
  description: string;
  icon?: React.ReactNode | React.ComponentType;
}
```

### BaseStatItem
Statistics display interface:

```typescript
export interface BaseStatItem {
  id: string;
  label: string;
  value: string | number;
  description?: string;
  change?: string;
  color?: string;
  icon?: React.ReactNode;
}
```

### BaseActivityItem
Activity feed interface:

```typescript
export interface BaseActivityItem {
  id: string;
  type: 'post' | 'comment' | 'like';
  title: string;
  content: string;
  description?: string;
  timestamp: string;
  likes: number;
  comments: number;
}
```

### BaseNavigationItem
Navigation menu interface:

```typescript
export interface BaseNavigationItem {
  label: string;
  path: string;
  title?: string;
  description?: string;
  icon?: React.ReactNode;
  requiresAuth?: boolean;
}
```

## 🎯 Component Types

### Article Components

#### ArticleCardProps
```typescript
export interface ArticleCardProps {
  article: Article;
  variant?: 'default' | 'featured' | 'compact';
  onClick?: (_selectedArticle: Article) => void;
}
```

#### ArticleGridProps
```typescript
export interface ArticleGridProps {
  articles: Article[];
  columns?: number;
  spacing?: number;
  variant?: 'default' | 'featured' | 'compact';
  onArticleClick?: (_selectedArticle: Article) => void;
}
```

### Resource Components

#### ResourceCardProps
```typescript
export interface ResourceCardProps {
  resource: Resource;
  variant?: 'default' | 'featured' | 'compact' | 'detailed';
  onClick?: (_selectedResource: Resource) => void;
}
```

#### ResourceFilters
```typescript
export interface ResourceFilters {
  search?: string;
  searchTerm?: string;
  category?: string;
  subcategory?: string;
  location?: string;
  tags?: string[];
  priceRange?: number[];
  rating?: number;
  ratingFilter?: number;
  verifiedOnly?: boolean;
}
```

### User Components

#### UserCardProps
```typescript
export interface UserCardProps {
  user: User;
  variant?: 'default' | 'compact' | 'detailed';
  showActions?: boolean;
  onUserClick?: (user: User) => void;
  onFollowUser?: (userId: string) => void;
  onUnfollowUser?: (userId: string) => void;
}
```

#### UserFilters
```typescript
export interface UserFilters {
  search: string;
  role: string;
  sortBy: 'name' | 'joinDate' | 'reputation' | 'followers';
  sortOrder: 'asc' | 'desc';
}
```

## 🔍 Search and Filter Types

### SearchResult
```typescript
export interface SearchResult {
  id: string;
  title: string;
  description: string;
  type: 'article' | 'resource' | 'page' | 'event' | 'product';
  url?: string;
  category?: string;
  tags?: string[];
  image?: string;
  date?: string;
  author?: string;
  readTime?: string;
}
```

### EventFilters
```typescript
export interface EventFilters {
  searchTerm: string;
  selectedCategory: string;
  selectedStatus: string;
  selectedTags: string[];
  dateRange: [string, string];
  priceRange: [number, number];
  locationFilter: string;
  sortBy: 'date' | 'title' | 'price' | 'popularity' | 'newest';
  sortOrder: 'asc' | 'desc';
}
```

## 🎨 Form and UI Types

### BaseContactFormData
```typescript
export interface BaseContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}
```

### BaseFAQItem
```typescript
export interface BaseFAQItem {
  question: string;
  answer: string;
}
```

### BaseDocument
```typescript
export interface BaseDocument {
  name: string;
  type: string;
  size: string;
  url: string;
  uploadedAt: string;
}
```

### BaseService
```typescript
export interface BaseService {
  name: string;
  description: string;
  price?: string;
  duration?: string;
}
```

### BaseReview
```typescript
export interface BaseReview {
  id: string;
  author: string;
  rating: number;
  comment: string;
  date: string;
}
```

## 🧪 Testing Types

### Jest Extensions
The project includes Jest type extensions for better testing support:

```typescript
declare global {
  namespace jest {
    interface Matchers<R> {
      toBeInTheDocument(): R;
    }
  }
}
```

## 📋 Best Practices

### 1. Type-First Development
- Define interfaces before implementing components
- Use strict typing for all function parameters and return values
- Leverage TypeScript's type inference where appropriate

### 2. Interface Design
- Keep interfaces focused and single-purpose
- Use composition over inheritance
- Provide sensible defaults for optional properties
- Use union types for constrained values

### 3. Component Typing
- Always type component props
- Use generic types for reusable components
- Leverage React's built-in types (React.FC, React.ReactNode)
- Type event handlers properly

### 4. Type Safety
- Avoid `any` type usage
- Use type guards for runtime type checking
- Leverage TypeScript's strict mode
- Regular type audits and updates

### 5. Documentation
- Document complex type relationships
- Provide examples for custom types
- Keep type documentation current
- Use JSDoc comments for public APIs

## 🔧 Type Utilities

### Common Type Patterns

#### Optional Properties
```typescript
interface UserProfile {
  id: string;
  name: string;
  email?: string; // Optional property
}
```

#### Union Types
```typescript
type UserRole = 'user' | 'admin' | 'moderator';
type EventStatus = 'upcoming' | 'ongoing' | 'completed' | 'cancelled';
```

#### Generic Types
```typescript
interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
}
```

#### Conditional Types
```typescript
type NonNullable<T> = T extends null | undefined ? never : T;
```

## 🚀 Advanced Patterns

### 1. Discriminated Unions
```typescript
type LoadingState =
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'success'; data: any }
  | { status: 'error'; error: string };
```

### 2. Mapped Types
```typescript
type Partial<T> = {
  [P in keyof T]?: T[P];
};
```

### 3. Utility Types
```typescript
// Make all properties optional
type PartialUser = Partial<User>;

// Pick specific properties
type UserBasic = Pick<User, 'id' | 'name' | 'email'>;

// Omit specific properties
type UserWithoutPassword = Omit<User, 'password'>;
```

## 📚 Resources

### TypeScript Documentation
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/)
- [Material-UI TypeScript Guide](https://mui.com/material-ui/guides/typescript/)

### Project-Specific
- [Build Fixes](./BUILD_FIXES.md) - Recent type system improvements
- [Component Documentation](./src/components/) - Individual component types
- [I18N Setup](./I18N_SETUP.md) - Internationalization types

---

**Last Updated**: December 2024
**TypeScript Version**: 5.7.2
**Maintainer**: Development Team

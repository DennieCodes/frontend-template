# Users Module

This module provides a comprehensive user management system with profile pages, user directories, and social features.

## Structure

```
Users/
├── types.ts                    # TypeScript interfaces and types
├── types.d.ts                  # TypeScript declarations
├── mockData.ts                 # Mock data for development
├── mockData.d.ts               # Mock data declarations
├── index.ts                    # Main exports
├── index.d.ts                  # Export declarations
├── README.md                   # This file
├── UsersPage.tsx               # Main users directory page
├── UsersPage.d.ts              # UsersPage declarations
├── UserProfilePage.tsx         # Individual user profile page
├── UserProfilePage.d.ts        # UserProfilePage declarations
├── UserDirectory.tsx           # User directory with filters
├── UserDirectory.d.ts          # UserDirectory declarations
├── UserGrid.tsx                # Responsive user grid layout
├── UserGrid.d.ts               # UserGrid declarations
├── UserCard.tsx                # Individual user card component
├── UserCard.d.ts               # UserCard declarations
├── UserProfileHeader.tsx       # User profile header section
├── UserProfileHeader.d.ts      # UserProfileHeader declarations
├── UserProfileStats.tsx        # User statistics display
├── UserProfileStats.d.ts       # UserProfileStats declarations
├── UserProfileBio.tsx          # User bio section
├── UserProfileBio.d.ts         # UserProfileBio declarations
├── UserProfileBadges.tsx       # User badges display
├── UserProfileBadges.d.ts      # UserProfileBadges declarations
├── UserProfileSocialLinks.tsx  # Social media links
├── UserProfileSocialLinks.d.ts # UserProfileSocialLinks declarations
└── UserProfileActivity.tsx     # User activity feed
└── UserProfileActivity.d.ts    # UserProfileActivity declarations
```

## Components

### Main Pages

- **UsersPage**: Main users directory page with search and filtering
- **UserProfilePage**: Individual user profile page with all sections

### Directory Components

- **UserDirectory**: User directory with search, filters, and sorting
- **UserGrid**: Responsive grid layout for displaying users
- **UserCard**: Individual user card with different variants

### Profile Components

- **UserProfileHeader**: User avatar, name, verification status, and actions
- **UserProfileStats**: User statistics (followers, posts, reputation)
- **UserProfileBio**: User bio with edit functionality
- **UserProfileBadges**: Display of earned badges
- **UserProfileSocialLinks**: Social media links
- **UserProfileActivity**: Recent activity feed

## Types

### Core Types

- `User`: Main user interface with all user properties
- `Badge`: User badge interface
- `SocialLink`: Social media link interface
- `UserPreferences`: User preferences interface

### Component Props

- `UserProfileProps`: Props for user profile components
- `UserCardProps`: Props for user card component
- `UserGridProps`: Props for user grid component
- `UserDirectoryProps`: Props for user directory component

## Usage

### Basic Usage

```tsx
import { UsersPage, UserProfilePage } from '../views/Users';
import { mockCurrentUser } from '../views/Users/mockData';

// Users directory
<UsersPage />

// User profile
<UserProfilePage user={mockCurrentUser} isOwnProfile={true} />
```

### User Card Variants

```tsx
import { UserCard } from '../views/Users';

// Default variant
<UserCard user={user} variant="default" />

// Compact variant
<UserCard user={user} variant="compact" />

// Detailed variant
<UserCard user={user} variant="detailed" />
```

### User Grid

```tsx
import { UserGrid } from '../views/Users';

<UserGrid
  users={users}
  columns={3}
  variant="default"
  showActions={true}
  onUserClick={handleUserClick}
  onFollowUser={handleFollowUser}
  onUnfollowUser={handleUnfollowUser}
/>
```

## Features

### User Profile Features

- **Avatar Display**: User avatars with fallback initials
- **Verification Status**: Verified account indicators
- **Online Status**: Real-time online status indicators
- **Statistics**: Followers, following, posts, and reputation
- **Bio Management**: Editable user bio
- **Badge System**: Display of earned badges
- **Social Links**: Integration with social media platforms
- **Activity Feed**: Recent user activity

### Directory Features

- **Search**: Search by name, username, or bio
- **Filtering**: Filter by user role
- **Sorting**: Sort by name, join date, reputation, or followers
- **Responsive Grid**: Adaptive layout for different screen sizes
- **User Cards**: Multiple card variants (default, compact, detailed)

### Social Features

- **Follow/Unfollow**: User following system
- **User Actions**: Click to view profiles
- **Role-based Display**: Different styling for different user roles
- **Activity Tracking**: User activity history

## Mock Data

The module includes comprehensive mock data with:

- 5 sample users with different roles and characteristics
- Various badge types and social links
- Realistic statistics and activity data
- Different user preferences and settings

## Styling

All components use Material-UI with:

- Consistent spacing using `LAYOUT_CONSTANTS`
- Responsive design patterns
- Hover effects and transitions
- Theme-aware color schemes
- Accessibility features

## Future Enhancements

- User settings and preferences management
- Advanced filtering options
- Real-time updates
- User messaging system
- Advanced activity analytics
- User recommendations
- Integration with external APIs

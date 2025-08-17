export interface User {
  id: string;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  avatar?: string;
  bio?: string;
  location?: string;
  website?: string;
  joinDate: string;
  lastActive: string;
  isVerified: boolean;
  isOnline: boolean;
  role: 'user' | 'moderator' | 'admin';
  followersCount: number;
  followingCount: number;
  postsCount: number;
  reputation: number;
  badges: Badge[];
  socialLinks: SocialLink[];
  preferences: UserPreferences;
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  earnedAt: string;
}

export interface SocialLink {
  platform: 'twitter' | 'github' | 'linkedin' | 'website';
  url: string;
  username?: string;
}

export interface UserPreferences {
  theme: 'light' | 'dark' | 'auto';
  language: string;
  emailNotifications: boolean;
  pushNotifications: boolean;
  privacyLevel: 'public' | 'friends' | 'private';
}

export interface UserProfileProps {
  user: User;
  isOwnProfile?: boolean;
  onEditProfile?: () => void;
  onFollowUser?: (userId: string) => void;
  onUnfollowUser?: (userId: string) => void;
}

export interface UserProfileHeaderProps {
  user: User;
  isOwnProfile?: boolean;
  onEditProfile?: () => void;
  onFollowUser?: (userId: string) => void;
  onUnfollowUser?: (userId: string) => void;
}

export interface UserProfileStatsProps {
  user: User;
}

export interface UserProfileBioProps {
  user: User;
  isOwnProfile?: boolean;
  onEditBio?: () => void;
}

export interface UserProfileBadgesProps {
  badges: Badge[];
}

export interface UserProfileSocialLinksProps {
  socialLinks: SocialLink[];
}

export interface UserProfileActivityProps {
  userId: string;
  activityType?: 'posts' | 'comments' | 'likes' | 'all';
}

export interface UserProfileSettingsProps {
  user: User;
  onSaveSettings?: (preferences: UserPreferences) => void;
}

export interface UserCardProps {
  user: User;
  variant?: 'default' | 'compact' | 'detailed';
  showActions?: boolean;
  onUserClick?: (user: User) => void;
  onFollowUser?: (userId: string) => void;
  onUnfollowUser?: (userId: string) => void;
}

export interface UserGridProps {
  users: User[];
  columns?: number;
  spacing?: number;
  variant?: 'default' | 'compact' | 'detailed';
  showActions?: boolean;
  onUserClick?: (user: User) => void;
  onFollowUser?: (userId: string) => void;
  onUnfollowUser?: (userId: string) => void;
}

export interface UserDirectoryProps {
  users: User[];
  title?: string;
  subtitle?: string;
  showFilters?: boolean;
  onUserClick?: (user: User) => void;
  onFollowUser?: (userId: string) => void;
  onUnfollowUser?: (userId: string) => void;
}

export interface UserPageProps {
  userId: string;
}

export interface UsersPageProps {
  // Add any props if needed in the future
}

export interface UserPageState {
  user: User | null;
  isLoading: boolean;
  error: string | null;
  isFollowing: boolean;
}

export interface UsersPageState {
  users: User[];
  isLoading: boolean;
  error: string | null;
  filters: UserFilters;
}

export interface UserFilters {
  search: string;
  role: string;
  sortBy: 'name' | 'joinDate' | 'reputation' | 'followers';
  sortOrder: 'asc' | 'desc';
}

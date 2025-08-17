import { User } from './types';

export declare const mockUsers: User[];
export declare const mockCurrentUser: User;
export declare const mockUserProfileData: {
  user: User;
  isOwnProfile: boolean;
};
export declare const mockUserProfileHeaderData: {
  user: User;
  isOwnProfile: boolean;
};
export declare const mockUserProfileStatsData: {
  user: User;
};
export declare const mockUserProfileBioData: {
  user: User;
  isOwnProfile: boolean;
};
export declare const mockUserProfileBadgesData: {
  badges: import('./types').Badge[];
};
export declare const mockUserProfileSocialLinksData: {
  socialLinks: import('./types').SocialLink[];
};
export declare const mockUserProfileActivityData: {
  userId: string;
  activityType: string;
};
export declare const mockUserProfileSettingsData: {
  user: User;
};
export declare const mockUserCardData: {
  user: User;
  variant: string;
  showActions: boolean;
};
export declare const mockUserGridData: {
  users: User[];
  columns: number;
  spacing: number;
  variant: string;
  showActions: boolean;
};
export declare const mockUserDirectoryData: {
  users: User[];
  title: string;
  subtitle: string;
  showFilters: boolean;
};

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

export interface DashboardHeaderProps {
  title: string;
  onLogout: () => void;
}

export interface UserProfileCardProps {
  user: User;
}

export interface WelcomeMessageProps {
  userName: string;
}

export interface FeatureCardProps {
  title: string;
  description: string;
}

import { BaseStatItem, BaseActivityItem, BaseNavigationItem, BaseUser } from '../../types/common';

export interface DashboardContentProps {
  title?: string;
  subtitle?: string;
  stats?: BaseStatItem[];
  recentActivity?: BaseActivityItem[];
  quickActions?: BaseNavigationItem[];
  user?: BaseUser;
}

export interface DashboardPageState {
  user: User;
}

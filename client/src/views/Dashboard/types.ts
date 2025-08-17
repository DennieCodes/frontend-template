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

export interface DashboardContentProps {
  title?: string;
  subtitle?: string;
  stats?: any[];
  recentActivity?: any[];
  quickActions?: any[];
  user?: any;
}

export interface DashboardPageState {
  user: User;
}

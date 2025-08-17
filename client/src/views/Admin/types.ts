export interface AdminHeaderProps {
  title: string;
  subtitle: string;
}

export interface AdminBreadcrumbsProps {
  currentPage: string;
}

export interface QuickStatsProps {
  stats: StatItem[];
}

export interface StatItem {
  id?: string;
  label: string;
  value: string | number;
  description?: string;
  change?: number;
  changeType?: 'increase' | 'decrease';
  color?: 'primary' | 'success' | 'warning' | 'info' | 'error';
}

export interface AdminDashboardGridProps {
  children?: React.ReactNode;
}

export interface AdminPageState {
  stats: StatItem[];
}

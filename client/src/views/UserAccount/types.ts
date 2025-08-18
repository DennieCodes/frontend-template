export interface UserAccountHeaderProps {
  title: string;
  subtitle: string;
}

export interface UserAccountBreadcrumbsProps {
  currentPage: string;
}

import { BaseUser, BaseStatItem } from '../../types/common';

export interface AccountSummaryProps {
  user?: BaseUser;
  stats?: BaseStatItem[];
  summaryItems?: SummaryItem[];
}

export interface SummaryItem {
  id: string;
  value: string | number;
  label: string;
  color: 'primary' | 'success' | 'warning' | 'info' | 'error';
}

export interface UserAccountDashboardGridProps {
  children?: React.ReactNode;
}

export interface UserAccountPageState {
  summaryItems: SummaryItem[];
}

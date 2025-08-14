export interface UserAccountHeaderProps {
    title: string;
    subtitle: string;
}
export interface UserAccountBreadcrumbsProps {
    currentPage: string;
}
export interface AccountSummaryProps {
    summaryItems: SummaryItem[];
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

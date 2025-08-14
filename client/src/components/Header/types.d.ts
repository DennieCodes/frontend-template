export interface NavigationItem {
    label: string;
    path: string;
    icon: React.ReactNode;
    requiresAuth?: boolean;
}
export interface NavigationGroup {
    title: string;
    items: NavigationItem[];
}

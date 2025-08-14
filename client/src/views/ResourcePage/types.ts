import { Resource } from '../../types/resource';

export interface ResourceBreadcrumbsProps {
  resourceName: string;
}

export interface ResourceHeaderProps {
  resource: Resource;
  isBookmarked: boolean;
  onBookmarkToggle: () => void;
}

export interface ResourceTabsProps {
  activeTab: number;
  onTabChange: (event: React.SyntheticEvent, newValue: number) => void;
}

export interface ResourceOverviewProps {
  resource: Resource;
}

export interface ResourceServicesProps {
  services: string[];
}

export interface ResourceContactHoursProps {
  resource: Resource;
}

export interface ResourceReviewsProps {
  // Add review-related props when implementing reviews
}

export interface ResourceSidebarProps {
  resource: Resource;
}

export interface ResourceContactCardProps {
  resource: Resource;
}

export interface ResourceAdditionalInfoProps {
  resource: Resource;
}

export interface ResourcePageState {
  activeTab: number;
  isBookmarked: boolean;
}

export interface ResourcePageProps {
  // This interface is no longer used but kept for potential future use
}

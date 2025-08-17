import { Resource } from '../../types/resource';

export interface ResourceBreadcrumbsProps {
  resourceName: string;
}

export interface ResourceHeaderProps {
  resource: any;
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
  resource?: {
    services?: any[];
  };
}

export interface ResourceContactHoursProps {
  hours?: any;
  resource?: any;
}

export interface ResourceReviewsProps {
  resource?: any;
}

export interface ResourceSidebarProps {
  resource: Resource;
}

export interface ResourceContactCardProps {
  resource: Resource;
}

export interface ResourceAdditionalInfoProps {
  resource?: any;
}

export interface ResourcePageState {
  activeTab: number;
  isBookmarked: boolean;
}

export interface ResourcePageProps {
  resource?: {
    id?: string;
    name?: string;
    description?: string;
    hours?: any;
    services?: any[];
    faqs?: any[];
    contactInfo?: any;
    location?: any;
    socialMedia?: any;
    documents?: any[];
    relatedResources?: any[];
    coordinates?: any;
  };
}

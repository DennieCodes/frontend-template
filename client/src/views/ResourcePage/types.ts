import { Resource } from '../../types/resource';
import {
  BaseService,
  BaseFAQItem,
  BaseReview,
  BaseSocialMedia,
  BaseDocument,
  BaseLocation,
  BaseCoordinates
} from '../../types/common';

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
  resource?: {
    services?: BaseService[];
  };
}

export interface ResourceContactHoursProps {
  hours?: {
    open?: string;
    close?: string;
    days?: string[];
  };
  resource?: Resource;
}

export interface ResourceReviewsProps {
  resource?: Resource & {
    reviews?: BaseReview[];
  };
}

export interface ResourceSidebarProps {
  resource: Resource;
}

export interface ResourceContactCardProps {
  resource: Resource;
}

export interface ResourceAdditionalInfoProps {
  resource?: Resource;
}

export interface ResourcePageState {
  activeTab: number;
  isBookmarked: boolean;
}

export interface ResourcePageProps {
  resource?: Resource & {
    services?: BaseService[];
    faqs?: BaseFAQItem[];
    contactInfo?: {
      phone?: string;
      email?: string;
      website?: string;
    };
    location?: BaseLocation;
    socialMedia?: BaseSocialMedia[];
    documents?: BaseDocument[];
    relatedResources?: Resource[];
    coordinates?: BaseCoordinates;
  };
}

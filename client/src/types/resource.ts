export interface Resource {
  id: string;
  name: string;
  description: string;
  category: string;
  subcategory?: string;
  location: {
    city: string;
    state: string;
    country: string;
    coordinates?: {
      lat: number;
      lng: number;
    };
  };
  contact: {
    phone?: string;
    email?: string;
    website?: string;
  };
  services: string[];
  tags: string[];
  rating?: number;
  reviewCount?: number;
  imageUrl?: string;
  images?: string[];
  featured?: boolean;
  verified?: boolean;
  hours?: {
    [key: string]: {
      open?: string;
      close?: string;
      closed?: boolean;
    };
  };
  pricing?: {
    range: 'low' | 'medium' | 'high' | 'free';
    description?: string;
  };
  accessibility?: string[];
  languages?: string[];
  createdAt: string;
  updatedAt: string;
}

export interface ResourceCardProps {
  resource: Resource;
  variant?: 'default' | 'featured' | 'compact' | 'detailed';
  onClick?: (_selectedResource: Resource) => void;
}

export interface ResourceGridProps {
  resources: Resource[];
  columns?: number;
  spacing?: number;
  variant?: 'default' | 'featured' | 'compact' | 'detailed';
  onResourceClick?: (_selectedResource: Resource) => void;
}

export interface ResourceDirectoryProps {
  resources: Resource[];
  title?: string;
  subtitle?: string;
  showFilters?: boolean;
  onResourceClick?: (_selectedResource: Resource) => void;
}

export interface ResourcePageProps {
  resource: Resource;
}

export interface ResourceFilters {
  searchTerm: string;
  selectedCategory: string;
  selectedSubcategory: string;
  selectedLocation: string;
  selectedTags: string[];
  priceRange: string;
  rating: number;
  verifiedOnly: boolean;
}
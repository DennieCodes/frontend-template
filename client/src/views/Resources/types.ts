export interface ResourceFilters {
  search?: string;
  searchTerm?: string;
  category?: string;
  subcategory?: string;
  location?: string;
  tags?: string[];
  priceRange?: number[];
  rating?: number;
  ratingFilter?: number;
  verifiedOnly?: boolean;
}

export interface ResourcesFiltersProps {
  filters?: ResourceFilters;
  onFiltersChange?: (filters: ResourceFilters) => void;
  searchTerm?: string;
  onSearchChange?: (term: string) => void;
  selectedCategory?: string;
  onCategoryChange?: (category: string) => void;
  selectedSubcategory?: string;
  onSubcategoryChange?: (subcategory: string) => void;
  selectedLocation?: string;
  onLocationChange?: (location: string) => void;
  selectedTags?: string[];
  onTagToggle?: (tag: string) => void;
  priceRange?: string;
  onPriceRangeChange?: (range: string) => void;
  ratingFilter?: number;
  onRatingFilterChange?: (rating: number) => void;
  verifiedOnly?: boolean;
  onVerifiedOnlyChange?: (verified: boolean) => void;
  categories?: string[];
  subcategories?: string[];
  locations?: string[];
  allTags?: string[];
  hasActiveFilters?: boolean;
  onClearFilters?: () => void;
}

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

export interface ResourcesHeaderProps {
  title: string;
  subtitle: string;
}

export interface ResourcesSummaryProps {
  filteredCount: number;
  totalCount: number;
  hasActiveFilters: boolean;
}

export interface ResourcesResultsProps {
  filteredResources: Resource[];
  onResourceClick: (resource: Resource) => void;
}

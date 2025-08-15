export interface Event {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  startDate: string;
  endDate: string;
  startTime: string;
  endTime: string;
  timezone: string;
  location: {
    venue: string;
    address: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
    coordinates?: {
      latitude: number;
      longitude: number;
    };
  };
  category: string;
  subcategory?: string;
  organizer: {
    name: string;
    email: string;
    phone?: string;
    website?: string;
  };
  images: string[];
  thumbnail: string;
  price: {
    amount: number;
    currency: string;
    type: 'free' | 'paid' | 'donation';
  };
  capacity: number;
  registeredAttendees: number;
  tags: string[];
  features: string[];
  status: 'upcoming' | 'ongoing' | 'completed' | 'cancelled';
  featured?: boolean;
  registrationRequired: boolean;
  registrationDeadline?: string;
  createdAt: string;
  updatedAt: string;
}

export interface EventCardProps {
  event: Event;
  variant?: 'default' | 'featured' | 'compact';
  onClick?: (event: Event) => void;
}

export interface EventGridProps {
  events: Event[];
  columns?: number;
  spacing?: number;
  variant?: 'default' | 'featured' | 'compact';
  onEventClick?: (event: Event) => void;
}

export interface EventDirectoryProps {
  events: Event[];
  title?: string;
  subtitle?: string;
  showFilters?: boolean;
  onEventClick?: (event: Event) => void;
}

export interface EventPageProps {
  event: Event;
  onRegister?: (event: Event) => void;
  onAddToCalendar?: (event: Event) => void;
}

export interface EventFilters {
  searchTerm: string;
  selectedCategory: string;
  selectedStatus: string;
  selectedTags: string[];
  dateRange: [string, string];
  priceRange: [number, number];
  locationFilter: string;
  sortBy: 'date' | 'title' | 'price' | 'popularity' | 'newest';
  sortOrder: 'asc' | 'desc';
}

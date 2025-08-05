# ResourceCard Component

A flexible card component for displaying resource information in different layouts and styles.

## Features

- **Multiple Variants**: Supports `default`, `featured`, `compact`, and `detailed` display modes
- **Rich Information Display**: Shows name, description, location, rating, services, and more
- **Interactive Elements**: Click handlers, hover effects, and action buttons
- **Verified Badge**: Special indicator for verified resources
- **Responsive Design**: Adapts to different screen sizes
- **Accessibility**: Proper ARIA labels and keyboard navigation

## Props

```typescript
interface ResourceCardProps {
  resource: Resource;
  variant?: 'default' | 'featured' | 'compact' | 'detailed';
  onClick?: (resource: Resource) => void;
}
```

## Variants

### Default
- Standard card layout with image, title, description, location, and rating
- Shows category, subcategory, and service tags
- Best for general resource listings

### Featured
- Larger, more prominent display for featured resources
- Includes "Featured" badge
- Larger image and typography
- Ideal for highlighting important resources

### Compact
- Minimal layout for space-constrained displays
- Smaller image and reduced information
- Good for list views or sidebars

### Detailed
- Comprehensive information display
- Includes contact information and services
- Side-by-side layout with image and details
- Perfect for detailed resource views

## Usage

```tsx
import ResourceCard from '../components/ResourceCard';

// Basic usage
<ResourceCard
  resource={resourceData}
  onClick={handleResourceClick}
/>

// Featured resource
<ResourceCard
  resource={featuredResource}
  variant="featured"
  onClick={handleResourceClick}
/>

// Compact display
<ResourceCard
  resource={resourceData}
  variant="compact"
  onClick={handleResourceClick}
/>
```

## Resource Interface

The component expects a `Resource` object with the following structure:

```typescript
interface Resource {
  id: string;
  name: string;
  description: string;
  category: string;
  subcategory?: string;
  location: {
    city: string;
    state: string;
    country: string;
    coordinates?: { lat: number; lng: number };
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
  featured?: boolean;
  verified?: boolean;
  hours?: { [key: string]: { open: string; close: string; closed?: boolean } };
  pricing?: { range: 'low' | 'medium' | 'high' | 'free'; description?: string };
  accessibility?: string[];
  languages?: string[];
  createdAt: string;
  updatedAt: string;
}
```

## Styling

The component uses Material-UI's `sx` prop for styling and follows the project's design system. All variants are responsive and include hover effects for interactive elements.
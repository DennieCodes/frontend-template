# ResourceDirectory Component

A comprehensive directory component for browsing and filtering resources with advanced search and filter capabilities.

## Features

- **Advanced Filtering**: Search by text, category, subcategory, location, tags, price range, and rating
- **Real-time Search**: Instant filtering as you type
- **Multiple Filter Types**: Dropdowns, sliders, checkboxes, and tag chips
- **Clear Filters**: Easy reset functionality
- **Results Summary**: Shows filtered vs total results
- **Responsive Design**: Works on all screen sizes
- **Accessibility**: Full keyboard navigation and screen reader support

## Props

```typescript
interface ResourceDirectoryProps {
  resources: Resource[];
  title?: string;
  subtitle?: string;
  showFilters?: boolean;
  onResourceClick?: (resource: Resource) => void;
}
```

## Filter Options

### Basic Filters
- **Search**: Text search across name, description, and services
- **Category**: Filter by main resource category
- **Subcategory**: Filter by specific subcategory
- **Location**: Filter by city/state combinations
- **Price Range**: Free, Low, Medium, High cost options

### Advanced Filters
- **Rating Slider**: Minimum rating filter (0-5 stars)
- **Verified Only**: Show only verified resources
- **Tags**: Multi-select tag filtering with chip interface

## Usage

```tsx
import ResourceDirectory from '../components/ResourceDirectory';

// Basic usage
<ResourceDirectory
  resources={resourceList}
  onResourceClick={handleResourceClick}
/>

// Custom title and subtitle
<ResourceDirectory
  resources={resourceList}
  title="Community Services"
  subtitle="Find local support and resources"
  onResourceClick={handleResourceClick}
/>

// Without filters (for simple display)
<ResourceDirectory
  resources={resourceList}
  showFilters={false}
  onResourceClick={handleResourceClick}
/>
```

## Filter Behavior

### Search Filter
- Searches across resource name, description, and services
- Case-insensitive matching
- Real-time filtering as you type

### Category/Subcategory Filters
- Dropdown menus with all available options
- "All" option to clear the filter
- Subcategory filter depends on selected category

### Location Filter
- Shows unique city/state combinations from resources
- Automatically populated from resource data

### Price Range Filter
- Free: No cost services
- Low: Affordable or sliding scale
- Medium: Standard pricing
- High: Premium services

### Rating Filter
- Slider with 0.5 star increments
- Shows "Any" for no minimum rating
- Only applies to resources with ratings

### Tags Filter
- Click chips to toggle selection
- Multiple tags can be selected
- Shows all unique tags from resources

### Verified Filter
- Checkbox to show only verified resources
- Uses verified badge icon

## Advanced Features

### Clear Filters
- "Clear Filters" button appears when any filter is active
- Resets all filters to default state

### Results Summary
- Shows "X of Y resources" count
- Indicates when filters are active
- Updates in real-time as filters change

### Responsive Layout
- Filters stack on mobile devices
- Advanced filters in collapsible accordion
- Grid adapts to screen size

## Accessibility

- Full keyboard navigation support
- Screen reader friendly labels
- Proper ARIA attributes
- Focus management for interactive elements

## Performance

- Memoized filter calculations
- Efficient re-rendering
- Optimized for large resource lists
- Debounced search input

## Customization

The component uses Material-UI components and can be customized through:
- Theme overrides
- Custom styling via `sx` prop
- Component composition
- Custom filter logic

## Integration

Designed to work with:
- React Router for navigation
- State management (Redux, Context)
- API data fetching
- Real-time updates
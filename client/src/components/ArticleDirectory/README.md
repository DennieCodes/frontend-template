# ArticleDirectory Component

A comprehensive directory page component that provides article browsing with search, filtering, and grid display capabilities.

## Features

- **Search Functionality**: Full-text search across titles, excerpts, and authors
- **Category Filtering**: Filter articles by category
- **Tag Filtering**: Multi-select tag filtering
- **Responsive Grid**: Uses ArticleGrid for article display
- **Filter Management**: Clear filters and active filter indicators
- **Results Summary**: Shows filtered vs total article counts
- **Customizable**: Configurable title, subtitle, and filter options

## Props

```typescript
interface ArticleDirectoryProps {
  articles: Article[];
  title?: string; // defaults to "Articles"
  subtitle?: string; // defaults to "Discover our latest articles and insights"
  showFilters?: boolean; // defaults to true
  onArticleClick?: (article: Article) => void;
}
```

## Usage

```tsx
import ArticleDirectory from '../components/ArticleDirectory';

// Basic usage
<ArticleDirectory
  articles={articlesList}
  onArticleClick={(article) => navigate(`/articles/${article.id}`)}
/>

// Custom configuration
<ArticleDirectory
  articles={articlesList}
  title="Blog Posts"
  subtitle="Explore our latest thoughts and insights"
  showFilters={true}
  onArticleClick={(article) => navigate(`/articles/${article.id}`)}
/>
```

## Filter Features

### Search
- Searches across article title, excerpt, and author
- Real-time filtering as you type
- Case-insensitive matching

### Category Filter
- Dropdown with all available categories
- "All Categories" option to clear category filter
- Automatically populated from article data

### Tag Filter
- Clickable tag chips
- Multi-select functionality
- Visual indication of selected tags
- "Clear Filters" button to reset all filters

## Layout Structure

1. **Header Section**
   - Page title and subtitle
   - Centered layout with responsive typography

2. **Filter Panel**
   - Search input with icon
   - Category dropdown
   - Tag selection chips
   - Clear filters button (when filters are active)

3. **Results Summary**
   - Article count display
   - Filtered results indicator

4. **Article Grid**
   - Responsive grid layout
   - Uses ArticleGrid component
   - Handles empty state when no results

## Examples

### Blog Directory
```tsx
<ArticleDirectory
  articles={blogPosts}
  title="Blog"
  subtitle="Latest insights and tutorials"
/>
```

### News Section
```tsx
<ArticleDirectory
  articles={newsArticles}
  title="News & Updates"
  subtitle="Stay informed with our latest news"
  showFilters={true}
/>
```

### Simple List (No Filters)
```tsx
<ArticleDirectory
  articles={simpleList}
  showFilters={false}
/>
```

## Integration

The ArticleDirectory component integrates with:

- **ArticleGrid**: For displaying articles in a responsive grid
- **ArticleCard**: Individual article cards within the grid
- **Material-UI**: For consistent styling and components
- **React Router**: For navigation to individual articles

## State Management

The component manages its own state for:
- Search term
- Selected category
- Selected tags
- Filtered results

All filtering is done client-side for immediate response. In a production app, you might want to implement server-side filtering for large datasets.
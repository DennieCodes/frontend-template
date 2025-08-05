# ArticleGrid Component

A responsive grid layout component for displaying multiple articles in a card-based format.

## Features

- **Responsive Grid**: Automatically adjusts columns based on screen size
- **Customizable Layout**: Configurable number of columns and spacing
- **Multiple Variants**: Supports different card variants for different use cases
- **Flexible Spacing**: Adjustable spacing between grid items
- **Click Handlers**: Supports article click events for navigation

## Props

```typescript
interface ArticleGridProps {
  articles: Article[];
  columns?: number; // 1-6, defaults to 3
  spacing?: number; // Material-UI spacing units, defaults to 3
  variant?: 'default' | 'featured' | 'compact';
  onArticleClick?: (article: Article) => void;
}
```

## Usage

```tsx
import ArticleGrid from '../components/ArticleGrid';

// Basic usage
<ArticleGrid
  articles={articlesList}
  onArticleClick={(article) => navigate(`/articles/${article.id}`)}
/>

// Custom configuration
<ArticleGrid
  articles={articlesList}
  columns={4}
  spacing={4}
  variant="compact"
  onArticleClick={(article) => navigate(`/articles/${article.id}`)}
/>
```

## Responsive Behavior

The grid automatically adjusts the number of columns based on screen size:

- **1 column**: `{ xs: 12 }` - Full width on all screens
- **2 columns**: `{ xs: 12, sm: 6 }` - 1 column on mobile, 2 on larger screens
- **3 columns**: `{ xs: 12, sm: 6, md: 4 }` - 1 on mobile, 2 on tablet, 3 on desktop
- **4 columns**: `{ xs: 12, sm: 6, md: 4, lg: 3 }` - Progressive column increase
- **6 columns**: `{ xs: 12, sm: 6, md: 4, lg: 2 }` - Maximum density

## Examples

### Blog Layout (3 columns)
```tsx
<ArticleGrid
  articles={blogPosts}
  columns={3}
  variant="default"
/>
```

### Featured Articles (2 columns)
```tsx
<ArticleGrid
  articles={featuredArticles}
  columns={2}
  variant="featured"
  spacing={4}
/>
```

### Compact List (4 columns)
```tsx
<ArticleGrid
  articles={allArticles}
  columns={4}
  variant="compact"
  spacing={2}
/>
```

## Integration with ArticleCard

The ArticleGrid component uses ArticleCard components internally, so all ArticleCard features are available:

- Hover effects and animations
- Rich metadata display
- Interactive elements (bookmark, share)
- Accessibility features
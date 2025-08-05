# ArticleCard Component

A reusable card component for displaying article information in different layouts.

## Features

- **Multiple Variants**: Supports `default`, `featured`, and `compact` display modes
- **Responsive Design**: Adapts to different screen sizes
- **Interactive**: Hover effects and click handlers
- **Rich Metadata**: Displays author, date, read time, category, and tags
- **Accessibility**: Proper ARIA labels and keyboard navigation

## Props

```typescript
interface ArticleCardProps {
  article: Article;
  variant?: 'default' | 'featured' | 'compact';
  onClick?: (article: Article) => void;
}
```

## Usage

```tsx
import ArticleCard from '../components/ArticleCard';

// Default variant
<ArticleCard
  article={articleData}
  onClick={(article) => navigate(`/articles/${article.id}`)}
/>

// Featured variant
<ArticleCard
  article={articleData}
  variant="featured"
  onClick={(article) => navigate(`/articles/${article.id}`)}
/>

// Compact variant
<ArticleCard
  article={articleData}
  variant="compact"
  onClick={(article) => navigate(`/articles/${article.id}`)}
/>
```

## Variants

### Default
- Standard card layout with medium-sized image
- Shows author avatar, name, and publication date
- Includes bookmark and share buttons

### Featured
- Larger, more prominent design
- Enhanced typography and spacing
- Special border styling for featured articles
- Larger author avatar and more detailed metadata

### Compact
- Smaller, condensed layout
- Reduced image height
- Minimal metadata display
- Ideal for grid layouts with many articles

## Article Interface

```typescript
interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: string;
  readTime: number; // in minutes
  category: string;
  tags: string[];
  imageUrl?: string;
  featured?: boolean;
}
```
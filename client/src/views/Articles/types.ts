export interface Article {
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

export interface ArticlesHeaderProps {
  title: string;
  subtitle: string;
}

export interface ArticlesFiltersProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  selectedTags: string[];
  onTagToggle: (tag: string) => void;
  categories: string[];
  allTags: string[];
  hasActiveFilters: boolean;
  onClearFilters: () => void;
}

export interface ArticlesResultsProps {
  articles: Article[];
  totalArticles: number;
  filteredArticles: Article[];
  hasActiveFilters: boolean;
  onArticleClick: (article: Article) => void;
}

export interface ArticlesSummaryProps {
  filteredCount: number;
  totalCount: number;
  hasActiveFilters: boolean;
}

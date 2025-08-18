export interface SearchResultsProps {
  results: SearchResult[];
  searchTerm?: string;
  onResultClick?: (result: SearchResult) => void;
  currentPage?: number;
  resultsPerPage?: number;
  onPageChange?: (event: React.ChangeEvent<unknown>, value: number) => void;
  onTagFilter?: (tags: string[]) => void;
  showFilters?: boolean;
  selectedTags?: string[];
}

export interface SearchResult {
  id: string;
  title: string;
  description: string;
  type: 'article' | 'resource' | 'page' | 'event' | 'product';
  url?: string;
  category?: string;
  tags?: string[];
  image?: string;
  date?: string;
  author?: string;
  readTime?: string;
}

export interface SearchHeaderProps {
  searchQuery: string;
  onSearch: (query: string) => void;
  onClearSearch: () => void;
  showFilters: boolean;
  onToggleFilters: () => void;
  sortBy: string;
  onSortChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  resultsCount: number;
}

export interface SearchResultCardProps {
  result: SearchResult;
  onTagFilter: (tags: string[]) => void;
}

export interface SearchPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (event: React.ChangeEvent<unknown>, value: number) => void;
}

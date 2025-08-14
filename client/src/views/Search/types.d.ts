export interface SearchResult {
    id: string;
    title: string;
    description: string;
    type: 'article' | 'resource' | 'page';
    tags: string[];
    author: string;
    date: string;
    readTime: string;
    image?: string;
}
export interface SearchHeaderProps {
    searchQuery: string;
    onSearch: (query: string) => void;
    onClearSearch: () => void;
    showFilters: boolean;
    onToggleFilters: () => void;
    sortBy: string;
    onSortChange: (event: any) => void;
    resultsCount: number;
}
export interface SearchResultsProps {
    results: SearchResult[];
    currentPage: number;
    resultsPerPage: number;
    onPageChange: (event: React.ChangeEvent<unknown>, value: number) => void;
    onTagFilter: (tags: string[]) => void;
    showFilters: boolean;
    selectedTags: string[];
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

import React from 'react';
interface SearchFiltersProps {
    selectedTags: string[];
    onTagFilter: (tags: string[]) => void;
}
declare const SearchFilters: React.FC<SearchFiltersProps>;
export default SearchFilters;

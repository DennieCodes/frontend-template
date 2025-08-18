import React, { useState } from 'react';
import { Box } from '@mui/material';
import SearchHeader from './SearchHeader';
import SearchResults from './SearchResults';
import { SearchResult } from './types';
import { mockSearchResults } from './mockData';

const SearchPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<SearchResult[]>(mockSearchResults);
  const [currentPage, setCurrentPage] = useState(1);
  const [resultsPerPage] = useState(6);
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState('relevance');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    // Mock search functionality - in real app, this would call an API
    const filtered = mockSearchResults.filter(result =>
      result.title.toLowerCase().includes(query.toLowerCase()) ||
      result.description.toLowerCase().includes(query.toLowerCase()) ||
      result.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
    );
    setSearchResults(filtered);
    setCurrentPage(1);
  };

  const handleClearSearch = () => {
    setSearchQuery('');
    setSearchResults(mockSearchResults);
    setCurrentPage(1);
  };

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
  };

  const handleSortChange = (value: string) => {
    setSortBy(value);
  };

  const handleTagFilter = (tags: string[]) => {
    setSelectedTags(tags);
    // Mock filtering by tags
    if (tags.length === 0) {
      setSearchResults(mockSearchResults);
    } else {
      const filtered = mockSearchResults.filter(result =>
        tags.some(tag => result.tags.includes(tag))
      );
      setSearchResults(filtered);
    }
    setCurrentPage(1);
  };

  const handleToggleFilters = () => {
    setShowFilters(!showFilters);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <SearchHeader
        searchQuery={searchQuery}
        onSearch={handleSearch}
        onClearSearch={handleClearSearch}
        showFilters={showFilters}
        onToggleFilters={handleToggleFilters}
        sortBy={sortBy}
        onSortChange={handleSortChange}
        resultsCount={searchResults.length}
      />

      <SearchResults
        results={searchResults}
        currentPage={currentPage}
        resultsPerPage={resultsPerPage}
        onPageChange={handlePageChange}
        onTagFilter={handleTagFilter}
        showFilters={showFilters}
        selectedTags={selectedTags}
      />
    </Box>
  );
};

export default SearchPage;

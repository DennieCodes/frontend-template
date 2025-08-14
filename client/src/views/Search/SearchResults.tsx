import React from 'react';
import {
  Box,
  Grid,
  Paper,
  Typography,
} from '@mui/material';
import SearchResultCard from './SearchResultCard';
import SearchPagination from './SearchPagination';
import SearchFilters from '../../components/SearchFilters/SearchFilters';
import { SearchResultsProps } from './types';
import { LAYOUT_CONSTANTS, layoutUtils } from '../../constants/layout';

const SearchResults: React.FC<SearchResultsProps> = ({
  results,
  currentPage,
  resultsPerPage,
  onPageChange,
  onTagFilter,
  showFilters,
  selectedTags,
}) => {
  // Calculate pagination
  const indexOfLastResult = currentPage * resultsPerPage;
  const indexOfFirstResult = indexOfLastResult - resultsPerPage;
  const currentResults = results.slice(indexOfFirstResult, indexOfLastResult);
  const totalPages = Math.ceil(results.length / resultsPerPage);

  return (
    <Box sx={{
      ...layoutUtils.getContentLayout('full-width'),
    }}>
      <Box sx={{
        maxWidth: layoutUtils.getContentWidth('wide'),
        mx: 'auto',
      }}>
        <Grid container spacing={3}>
          {/* Filters Sidebar */}
          {showFilters && (
            <Grid item xs={12} md={3}>
              <SearchFilters
                selectedTags={selectedTags}
                onTagFilter={onTagFilter}
              />
            </Grid>
          )}

          {/* Search Results */}
          <Grid item xs={12} md={showFilters ? 9 : 12}>
            {currentResults.length === 0 ? (
              <Box sx={{
                maxWidth: layoutUtils.getContentWidth('standard'),
                mx: 'auto',
              }}>
                <Paper sx={{ p: LAYOUT_CONSTANTS.SPACING.LG, textAlign: 'center' }}>
                  <Typography variant="h6" color="text.secondary" gutterBottom>
                    No results found
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Try adjusting your search terms or filters
                  </Typography>
                </Paper>
              </Box>
            ) : (
              <>
                <Grid container spacing={3}>
                  {currentResults.map((result) => (
                    <Grid
                      item
                      xs={12}
                      key={result.id}
                      sx={layoutUtils.getGridItemStyles()}
                    >
                      <SearchResultCard
                        result={result}
                        onTagFilter={onTagFilter}
                      />
                    </Grid>
                  ))}
                </Grid>

                <SearchPagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={onPageChange}
                />
              </>
            )}
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default SearchResults;

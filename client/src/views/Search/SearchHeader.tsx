import React from 'react';
import {
  Box,
  Typography,
  TextField,
  InputAdornment,
  Stack,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  IconButton,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import ClearIcon from '@mui/icons-material/Clear';
import { SearchHeaderProps } from './types';
import { LAYOUT_CONSTANTS, layoutUtils, typographyStyles } from '../../constants/layout';

const SearchHeader: React.FC<SearchHeaderProps> = ({
  searchQuery,
  onSearch,
  onClearSearch,
  showFilters,
  onToggleFilters,
  sortBy,
  onSortChange,
  resultsCount,
}) => {
  return (
    <Box sx={{
      ...layoutUtils.getContentLayout('centered'),
      py: LAYOUT_CONSTANTS.CONTAINER.PADDING.MD,
      mb: LAYOUT_CONSTANTS.SPACING.LG,
    }}>
      <Typography
        variant="h3"
        component="h1"
        gutterBottom
        sx={{
          ...typographyStyles.heading,
          maxWidth: layoutUtils.getContentWidth('standard'),
          mx: 'auto',
        }}
      >
        Search
      </Typography>
      <Typography
        variant="body1"
        sx={{
          mb: LAYOUT_CONSTANTS.SPACING.MD,
          ...typographyStyles.body,
          maxWidth: layoutUtils.getContentWidth('standard'),
          mx: 'auto',
        }}
      >
        Find articles, resources, and pages across our platform
      </Typography>

      {/* Search Input - Constrained width */}
      <Box sx={{
        mb: LAYOUT_CONSTANTS.SPACING.MD,
        maxWidth: layoutUtils.getContentWidth('wide'),
        mx: 'auto',
      }}>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Search for articles, resources, or topics..."
          value={searchQuery}
          onChange={(e) => onSearch(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
            endAdornment: searchQuery && (
              <InputAdornment position="end">
                <IconButton onClick={onClearSearch} size="small">
                  <ClearIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
          sx={{
            '& .MuiOutlinedInput-root': {
              borderRadius: 2,
              fontSize: '1.1rem',
            },
          }}
        />
      </Box>

      {/* Search Controls - Constrained width */}
      <Box sx={{
        maxWidth: layoutUtils.getContentWidth('wide'),
        mx: 'auto',
      }}>
        <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 2 }}>
          <Button
            variant="outlined"
            startIcon={<FilterListIcon />}
            onClick={onToggleFilters}
            sx={{ minWidth: 120 }}
          >
            {showFilters ? 'Hide' : 'Show'} Filters
          </Button>

          <FormControl size="small" sx={{ minWidth: 150 }}>
            <InputLabel>Sort by</InputLabel>
            <Select
              value={sortBy}
              label="Sort by"
              onChange={(e) => onSortChange(e.target.value)}
            >
              <MenuItem value="relevance">Relevance</MenuItem>
              <MenuItem value="date">Date</MenuItem>
              <MenuItem value="title">Title</MenuItem>
              <MenuItem value="author">Author</MenuItem>
            </Select>
          </FormControl>

          <Typography variant="body2" color="text.secondary">
            {resultsCount} results found
          </Typography>
        </Stack>
      </Box>
    </Box>
  );
};

export default SearchHeader;

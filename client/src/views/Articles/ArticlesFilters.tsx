import React from 'react';
import {
  Box,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Chip,
  Button,
  Paper,
  Typography,
} from '@mui/material';
import { Search, FilterList, Clear } from '@mui/icons-material';
import { ArticlesFiltersProps } from './types';
import { LAYOUT_CONSTANTS, layoutUtils } from '../../constants/layout';

const ArticlesFilters: React.FC<ArticlesFiltersProps> = ({
  searchTerm,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  selectedTags,
  onTagToggle,
  categories,
  allTags,
  hasActiveFilters,
  onClearFilters,
}) => {
  return (
    <Box sx={{
      ...layoutUtils.getContentLayout('full-width'),
      mb: LAYOUT_CONSTANTS.SPACING.LG,
    }}>
      <Paper sx={{
        p: LAYOUT_CONSTANTS.SPACING.MD,
        maxWidth: layoutUtils.getContentWidth('wide'),
        mx: 'auto',
      }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: LAYOUT_CONSTANTS.SPACING.SM, mb: LAYOUT_CONSTANTS.SPACING.MD }}>
          <FilterList color="primary" />
          <Typography variant="h6" component="h2">
            Filters
          </Typography>
          {hasActiveFilters && (
            <Button
              startIcon={<Clear />}
              onClick={onClearFilters}
              variant="outlined"
              size="small"
              sx={{ ml: 'auto' }}
            >
              Clear Filters
            </Button>
          )}
        </Box>

        <Box sx={{ display: 'flex', gap: LAYOUT_CONSTANTS.SPACING.SM, mb: LAYOUT_CONSTANTS.SPACING.MD, flexWrap: 'wrap' }}>
          <TextField
            label="Search articles"
            variant="outlined"
            size="small"
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            InputProps={{
              startAdornment: <Search sx={{ mr: 1, color: 'text.secondary' }} />,
            }}
            sx={{ minWidth: 250 }}
          />

          <FormControl size="small" sx={{ minWidth: 200 }}>
            <InputLabel>Category</InputLabel>
            <Select
              value={selectedCategory}
              label="Category"
              onChange={(e) => onCategoryChange(e.target.value)}
            >
              <MenuItem value="all">All Categories</MenuItem>
              {categories.map((category) => (
                <MenuItem key={category} value={category}>
                  {category}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>

        {/* Tags */}
        {allTags.length > 0 && (
          <Box>
            <Typography variant="subtitle2" gutterBottom>
              Tags
            </Typography>
            <Box sx={{ display: 'flex', gap: LAYOUT_CONSTANTS.SPACING.XS, flexWrap: 'wrap' }}>
              {allTags.map((tag) => (
                <Chip
                  key={tag}
                  label={tag}
                  size="small"
                  variant={selectedTags.includes(tag) ? "filled" : "outlined"}
                  color={selectedTags.includes(tag) ? "primary" : "default"}
                  onClick={() => onTagToggle(tag)}
                  sx={{ cursor: 'pointer' }}
                />
              ))}
            </Box>
          </Box>
        )}
      </Paper>
    </Box>
  );
};

export default ArticlesFilters;

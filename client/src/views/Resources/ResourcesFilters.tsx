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
  Slider,
  FormControlLabel,
  Checkbox,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Grid,
  Typography,
} from '@mui/material';
import {
  Search,
  FilterList,
  Clear,
  ExpandMore,
  Verified,
} from '@mui/icons-material';
import { ResourcesFiltersProps } from './types';
import { LAYOUT_CONSTANTS, layoutUtils } from '../../constants/layout';

const ResourcesFilters: React.FC<ResourcesFiltersProps> = ({
  searchTerm,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  selectedSubcategory,
  onSubcategoryChange,
  selectedLocation,
  onLocationChange,
  selectedTags,
  onTagToggle,
  priceRange,
  onPriceRangeChange,
  ratingFilter,
  onRatingFilterChange,
  verifiedOnly,
  onVerifiedOnlyChange,
  categories,
  subcategories,
  locations,
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

        <Grid container spacing={3}>
          {/* Search */}
          <Grid item xs={12} md={6}>
            <TextField
              label="Search resources"
              variant="outlined"
              size="small"
              fullWidth
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              InputProps={{
                startAdornment: <Search sx={{ mr: 1, color: 'text.secondary' }} />,
              }}
            />
          </Grid>

          {/* Category */}
          <Grid item xs={12} sm={6} md={3}>
            <FormControl fullWidth size="small">
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
          </Grid>

          {/* Subcategory */}
          <Grid item xs={12} sm={6} md={3}>
            <FormControl fullWidth size="small">
              <InputLabel>Subcategory</InputLabel>
              <Select
                value={selectedSubcategory}
                label="Subcategory"
                onChange={(e) => onSubcategoryChange(e.target.value)}
              >
                <MenuItem value="all">All Subcategories</MenuItem>
                {subcategories.map((subcategory) => (
                  <MenuItem key={subcategory} value={subcategory}>
                    {subcategory}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          {/* Location */}
          <Grid item xs={12} sm={6} md={3}>
            <FormControl fullWidth size="small">
              <InputLabel>Location</InputLabel>
              <Select
                value={selectedLocation}
                label="Location"
                onChange={(e) => onLocationChange(e.target.value)}
              >
                <MenuItem value="all">All Locations</MenuItem>
                {locations.map((location) => (
                  <MenuItem key={location} value={location}>
                    {location}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          {/* Price Range */}
          <Grid item xs={12} sm={6} md={3}>
            <FormControl fullWidth size="small">
              <InputLabel>Price Range</InputLabel>
              <Select
                value={priceRange}
                label="Price Range"
                onChange={(e) => onPriceRangeChange(e.target.value)}
              >
                <MenuItem value="all">All Prices</MenuItem>
                <MenuItem value="free">Free</MenuItem>
                <MenuItem value="low">Low Cost</MenuItem>
                <MenuItem value="medium">Medium Cost</MenuItem>
                <MenuItem value="high">High Cost</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>

        {/* Advanced Filters */}
        <Accordion sx={{ mt: 2 }}>
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography variant="subtitle1">Advanced Filters</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container spacing={3}>
              {/* Rating Filter */}
              <Grid item xs={12} sm={6} md={4}>
                <Typography variant="subtitle2" gutterBottom>
                  Minimum Rating
                </Typography>
                <Box sx={{ px: 2 }}>
                  <Slider
                    value={ratingFilter}
                    onChange={(_, value) => onRatingFilterChange(value as number)}
                    min={0}
                    max={5}
                    step={0.5}
                    marks={[
                      { value: 0, label: 'Any' },
                      { value: 2.5, label: '2.5+' },
                      { value: 5, label: '5.0' },
                    ]}
                    valueLabelDisplay="auto"
                  />
                </Box>
              </Grid>

              {/* Verified Only */}
              <Grid item xs={12} sm={6} md={4}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={verifiedOnly}
                      onChange={(e) => onVerifiedOnlyChange(e.target.checked)}
                      icon={<Verified />}
                      checkedIcon={<Verified color="primary" />}
                    />
                  }
                  label="Verified Only"
                />
              </Grid>
            </Grid>
          </AccordionDetails>
        </Accordion>

        {/* Tags */}
        {allTags.length > 0 && (
          <Box sx={{ mt: LAYOUT_CONSTANTS.SPACING.MD }}>
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

export default ResourcesFilters;

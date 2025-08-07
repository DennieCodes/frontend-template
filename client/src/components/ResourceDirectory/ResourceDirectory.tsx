import React, { useState, useMemo } from 'react';
import {
  Container,
  Typography,
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
} from '@mui/material';
import {
  Search,
  FilterList,
  Clear,
  ExpandMore,
  Verified,
} from '@mui/icons-material';
import ResourceGrid from '../ResourceGrid';
import { ResourceDirectoryProps } from '../../types/resource';
import { LAYOUT_CONSTANTS, layoutUtils, typographyStyles } from '../../constants/layout';

const ResourceDirectory: React.FC<ResourceDirectoryProps> = ({
  resources,
  title = 'Resource Directory',
  subtitle = 'Discover services and resources in your area',
  showFilters = true,
  onResourceClick,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>('all');
  const [selectedLocation, setSelectedLocation] = useState<string>('all');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<string>('all');
  const [ratingFilter, setRatingFilter] = useState<number>(0);
  const [verifiedOnly, setVerifiedOnly] = useState<boolean>(false);

  // Get unique categories, subcategories, locations, and tags
  const categories = useMemo(() => {
    const uniqueCategories = [...new Set(resources.map(resource => resource.category))];
    return uniqueCategories.sort();
  }, [resources]);

  const subcategories = useMemo(() => {
    const uniqueSubcategories = [...new Set(resources.map(resource => resource.subcategory).filter(Boolean))];
    return uniqueSubcategories.sort();
  }, [resources]);

  const locations = useMemo(() => {
    const uniqueLocations = [...new Set(resources.map(resource => `${resource.location.city}, ${resource.location.state}`))];
    return uniqueLocations.sort();
  }, [resources]);

  const allTags = useMemo(() => {
    const tags = resources.flatMap(resource => resource.tags);
    const uniqueTags = [...new Set(tags)];
    return uniqueTags.sort();
  }, [resources]);

  // Filter resources based on all criteria
  const filteredResources = useMemo(() => {
    return resources.filter(resource => {
      const matchesSearch = searchTerm === '' ||
        resource.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        resource.services.some(service => service.toLowerCase().includes(searchTerm.toLowerCase()));

      const matchesCategory = selectedCategory === 'all' || resource.category === selectedCategory;

      const matchesSubcategory = selectedSubcategory === 'all' ||
        (resource.subcategory && resource.subcategory === selectedSubcategory);

      const matchesLocation = selectedLocation === 'all' ||
        `${resource.location.city}, ${resource.location.state}` === selectedLocation;

      const matchesTags = selectedTags.length === 0 ||
        selectedTags.some(tag => resource.tags.includes(tag));

      const matchesPrice = priceRange === 'all' ||
        (resource.pricing && resource.pricing.range === priceRange);

      const matchesRating = ratingFilter === 0 ||
        (resource.rating && resource.rating >= ratingFilter);

      const matchesVerified = !verifiedOnly || resource.verified;

      return matchesSearch && matchesCategory && matchesSubcategory &&
             matchesLocation && matchesTags && matchesPrice &&
             matchesRating && matchesVerified;
    });
  }, [resources, searchTerm, selectedCategory, selectedSubcategory,
      selectedLocation, selectedTags, priceRange, ratingFilter, verifiedOnly]);

  const handleTagToggle = (tag: string) => {
    setSelectedTags(prev =>
      prev.includes(tag)
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategory('all');
    setSelectedSubcategory('all');
    setSelectedLocation('all');
    setSelectedTags([]);
    setPriceRange('all');
    setRatingFilter(0);
    setVerifiedOnly(false);
  };

  const hasActiveFilters = searchTerm !== '' ||
    selectedCategory !== 'all' ||
    selectedSubcategory !== 'all' ||
    selectedLocation !== 'all' ||
    selectedTags.length > 0 ||
    priceRange !== 'all' ||
    ratingFilter > 0 ||
    verifiedOnly;

  return (
    <Box sx={{ width: '100%' }}>
      {/* Header Section - Centered with whitespace */}
      <Box sx={{
        ...layoutUtils.getContentLayout('centered'),
        py: LAYOUT_CONSTANTS.CONTAINER.PADDING.MD,
        textAlign: 'center',
        mb: LAYOUT_CONSTANTS.SPACING.LG,
      }}>
        <Typography
          variant="h3"
          component="h1"
          gutterBottom
          sx={{
            ...typographyStyles.heading,
            mb: LAYOUT_CONSTANTS.SPACING.SM,
            maxWidth: layoutUtils.getContentWidth('standard'),
            mx: 'auto',
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="h6"
          sx={{
            mb: LAYOUT_CONSTANTS.SPACING.MD,
            ...typographyStyles.body,
            maxWidth: layoutUtils.getContentWidth('standard'),
            mx: 'auto',
          }}
        >
          {subtitle}
        </Typography>
      </Box>

      {/* Filters Section - Full width with constrained content */}
      {showFilters && (
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
                  onClick={clearFilters}
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
                onChange={(e) => setSearchTerm(e.target.value)}
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
                  onChange={(e) => setSelectedCategory(e.target.value)}
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
                  onChange={(e) => setSelectedSubcategory(e.target.value)}
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
                  onChange={(e) => setSelectedLocation(e.target.value)}
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
                  onChange={(e) => setPriceRange(e.target.value)}
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
                      onChange={(_, value) => setRatingFilter(value as number)}
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
                        onChange={(e) => setVerifiedOnly(e.target.checked)}
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
                    onClick={() => handleTagToggle(tag)}
                    sx={{ cursor: 'pointer' }}
                  />
                ))}
              </Box>
            </Box>
          )}
        </Paper>
      </Box>
      )}

      {/* Results Summary - Centered with whitespace */}
      <Box sx={{
        ...layoutUtils.getContentLayout('centered'),
        mb: LAYOUT_CONSTANTS.SPACING.MD,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        <Typography variant="body1" color="text.secondary">
          Showing {filteredResources.length} of {resources.length} resources
        </Typography>
        {hasActiveFilters && (
          <Typography variant="body2" color="primary">
            Filtered results
          </Typography>
        )}
      </Box>

      {/* Resources Grid - Full width with constrained content */}
      <Box sx={{
        ...layoutUtils.getContentLayout('full-width'),
      }}>
        {filteredResources.length > 0 ? (
          <Box sx={{
            maxWidth: layoutUtils.getContentWidth('wide'),
            mx: 'auto',
          }}>
            <ResourceGrid
              resources={filteredResources}
              columns={3}
              spacing={LAYOUT_CONSTANTS.GRID.SPACING.MD}
              variant="default"
              onResourceClick={onResourceClick}
            />
          </Box>
        ) : (
          <Box sx={{
            maxWidth: layoutUtils.getContentWidth('standard'),
            mx: 'auto',
          }}>
            <Paper sx={{ p: LAYOUT_CONSTANTS.SPACING.LG, textAlign: 'center' }}>
              <Typography variant="h6" color="text.secondary" gutterBottom>
                No resources found
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Try adjusting your search criteria or filters
              </Typography>
            </Paper>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default ResourceDirectory;
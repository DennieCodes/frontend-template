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
  Divider,
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
  LocationOn,
  AttachMoney,
  Star,
  Verified,
} from '@mui/icons-material';
import ResourceGrid from '../ResourceGrid';
import { ResourceDirectoryProps, Resource } from '../../types/resource';

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
    <Container maxWidth="xl" sx={{ py: 4 }}>
      {/* Header */}
      <Box sx={{ mb: 4, textAlign: 'center' }}>
        <Typography
          variant="h3"
          component="h1"
          gutterBottom
          sx={{ fontWeight: 700, mb: 2 }}
        >
          {title}
        </Typography>
        <Typography
          variant="h6"
          color="text.secondary"
          sx={{ mb: 3, maxWidth: '600px', mx: 'auto' }}
        >
          {subtitle}
        </Typography>
      </Box>

      {/* Filters */}
      {showFilters && (
        <Paper sx={{ p: 3, mb: 4 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
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
            <Box sx={{ mt: 3 }}>
              <Typography variant="subtitle2" gutterBottom>
                Tags
              </Typography>
              <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
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
      )}

      {/* Results Summary */}
      <Box sx={{ mb: 3, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="body1" color="text.secondary">
          Showing {filteredResources.length} of {resources.length} resources
        </Typography>
        {hasActiveFilters && (
          <Typography variant="body2" color="primary">
            Filtered results
          </Typography>
        )}
      </Box>

      {/* Resources Grid */}
      {filteredResources.length > 0 ? (
        <ResourceGrid
          resources={filteredResources}
          columns={3}
          spacing={3}
          variant="default"
          onResourceClick={onResourceClick}
        />
      ) : (
        <Paper sx={{ p: 4, textAlign: 'center' }}>
          <Typography variant="h6" color="text.secondary" gutterBottom>
            No resources found
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Try adjusting your search criteria or filters
          </Typography>
        </Paper>
      )}
    </Container>
  );
};

export default ResourceDirectory;
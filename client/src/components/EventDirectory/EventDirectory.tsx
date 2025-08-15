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
  Grid,
  Divider,
} from '@mui/material';
import { Search, FilterList, Clear, Sort } from '@mui/icons-material';
import EventGrid from '../EventGrid';
import { EventDirectoryProps, EventFilters } from '../../types/event';
import { LAYOUT_CONSTANTS, layoutUtils, typographyStyles } from '../../constants/layout';

const EventDirectory: React.FC<EventDirectoryProps> = ({
  events,
  title = 'Events',
  subtitle = 'Discover amazing events happening near you',
  showFilters = true,
  onEventClick,
}) => {
  const [filters, setFilters] = useState<EventFilters>({
    searchTerm: '',
    selectedCategory: 'all',
    selectedStatus: 'all',
    selectedTags: [],
    dateRange: ['', ''],
    priceRange: [0, 1000],
    locationFilter: '',
    sortBy: 'date',
    sortOrder: 'asc',
  });

  // Get unique categories, statuses, and tags
  const categories = useMemo(() => {
    const uniqueCategories = [...new Set(events.map(event => event.category))];
    return uniqueCategories.sort();
  }, [events]);

  const statuses = useMemo(() => {
    const uniqueStatuses = [...new Set(events.map(event => event.status))];
    return uniqueStatuses.sort();
  }, [events]);

  const allTags = useMemo(() => {
    const tags = events.flatMap(event => event.tags);
    const uniqueTags = [...new Set(tags)];
    return uniqueTags.sort();
  }, [events]);

  const maxPrice = useMemo(() => {
    return Math.max(...events.map(event => event.price.amount));
  }, [events]);

  // Filter and sort events
  const filteredEvents = useMemo(() => {
    let filtered = events.filter(event => {
      const matchesSearch = filters.searchTerm === '' ||
        event.title.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
        event.description.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
        event.organizer.name.toLowerCase().includes(filters.searchTerm.toLowerCase());

      const matchesCategory = filters.selectedCategory === 'all' || event.category === filters.selectedCategory;
      const matchesStatus = filters.selectedStatus === 'all' || event.status === filters.selectedStatus;
      const matchesTags = filters.selectedTags.length === 0 ||
        filters.selectedTags.some(tag => event.tags.includes(tag));
      const matchesPrice = event.price.amount >= filters.priceRange[0] && event.price.amount <= filters.priceRange[1];
      const matchesLocation = filters.locationFilter === '' ||
        event.location.city.toLowerCase().includes(filters.locationFilter.toLowerCase()) ||
        event.location.venue.toLowerCase().includes(filters.locationFilter.toLowerCase());

      // Date range filtering
      let matchesDateRange = true;
      if (filters.dateRange[0] && filters.dateRange[1]) {
        const eventDate = new Date(event.startDate);
        const startDate = new Date(filters.dateRange[0]);
        const endDate = new Date(filters.dateRange[1]);
        matchesDateRange = eventDate >= startDate && eventDate <= endDate;
      }

      return matchesSearch && matchesCategory && matchesStatus && matchesTags && matchesPrice && matchesLocation && matchesDateRange;
    });

    // Sort events
    filtered.sort((a, b) => {
      let comparison = 0;
      switch (filters.sortBy) {
        case 'date':
          comparison = new Date(a.startDate).getTime() - new Date(b.startDate).getTime();
          break;
        case 'title':
          comparison = a.title.localeCompare(b.title);
          break;
        case 'price':
          comparison = a.price.amount - b.price.amount;
          break;
        case 'popularity':
          comparison = b.registeredAttendees - a.registeredAttendees;
          break;
        case 'newest':
          comparison = new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
          break;
      }
      return filters.sortOrder === 'asc' ? comparison : -comparison;
    });

    return filtered;
  }, [events, filters]);

  const handleTagToggle = (tag: string) => {
    setFilters(prev => ({
      ...prev,
      selectedTags: prev.selectedTags.includes(tag)
        ? prev.selectedTags.filter(t => t !== tag)
        : [...prev.selectedTags, tag],
    }));
  };

  const clearFilters = () => {
    setFilters({
      searchTerm: '',
      selectedCategory: 'all',
      selectedStatus: 'all',
      selectedTags: [],
      dateRange: ['', ''],
      priceRange: [0, maxPrice],
      locationFilter: '',
      sortBy: 'date',
      sortOrder: 'asc',
    });
  };

  const hasActiveFilters = filters.searchTerm !== '' ||
    filters.selectedCategory !== 'all' ||
    filters.selectedStatus !== 'all' ||
    filters.selectedTags.length > 0 ||
    filters.priceRange[0] !== 0 ||
    filters.priceRange[1] !== maxPrice ||
    filters.locationFilter !== '' ||
    filters.dateRange[0] !== '' ||
    filters.dateRange[1] !== '';

  return (
    <Box>
      {/* Header Section */}
      <Box sx={{
        textAlign: 'center',
        mb: LAYOUT_CONSTANTS.SPACING.XL,
      }}>
        <Typography
          variant="h2"
          sx={{
            ...typographyStyles.heading,
            mb: LAYOUT_CONSTANTS.SPACING.MD,
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="h6"
          sx={{
            ...typographyStyles.body,
            mb: LAYOUT_CONSTANTS.SPACING.MD,
            maxWidth: layoutUtils.getContentWidth('standard'),
            mx: 'auto',
          }}
        >
          {subtitle}
        </Typography>
      </Box>

      {/* Filters Section */}
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
                Filters & Search
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
                  label="Search events"
                  variant="outlined"
                  fullWidth
                  value={filters.searchTerm}
                  onChange={(e) => setFilters(prev => ({ ...prev, searchTerm: e.target.value }))}
                  InputProps={{
                    startAdornment: <Search sx={{ mr: 1, color: 'text.secondary' }} />,
                  }}
                />
              </Grid>

              {/* Sort */}
              <Grid item xs={12} md={6}>
                <Box sx={{ display: 'flex', gap: 2 }}>
                  <FormControl fullWidth>
                    <InputLabel>Sort by</InputLabel>
                    <Select
                      value={filters.sortBy}
                      label="Sort by"
                      onChange={(e) => setFilters(prev => ({ ...prev, sortBy: e.target.value as any }))}
                    >
                      <MenuItem value="date">Date</MenuItem>
                      <MenuItem value="title">Title</MenuItem>
                      <MenuItem value="price">Price</MenuItem>
                      <MenuItem value="popularity">Popularity</MenuItem>
                      <MenuItem value="newest">Newest</MenuItem>
                    </Select>
                  </FormControl>
                  <FormControl>
                    <InputLabel>Order</InputLabel>
                    <Select
                      value={filters.sortOrder}
                      label="Order"
                      onChange={(e) => setFilters(prev => ({ ...prev, sortOrder: e.target.value as 'asc' | 'desc' }))}
                    >
                      <MenuItem value="asc">Ascending</MenuItem>
                      <MenuItem value="desc">Descending</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Grid>

              {/* Category and Status */}
              <Grid item xs={12} md={6}>
                <FormControl fullWidth>
                  <InputLabel>Category</InputLabel>
                  <Select
                    value={filters.selectedCategory}
                    label="Category"
                    onChange={(e) => setFilters(prev => ({ ...prev, selectedCategory: e.target.value }))}
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

              <Grid item xs={12} md={6}>
                <FormControl fullWidth>
                  <InputLabel>Status</InputLabel>
                  <Select
                    value={filters.selectedStatus}
                    label="Status"
                    onChange={(e) => setFilters(prev => ({ ...prev, selectedStatus: e.target.value }))}
                  >
                    <MenuItem value="all">All Statuses</MenuItem>
                    {statuses.map((status) => (
                      <MenuItem key={status} value={status}>
                        {status.charAt(0).toUpperCase() + status.slice(1)}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>

              {/* Location Filter */}
              <Grid item xs={12} md={6}>
                <TextField
                  label="Location"
                  variant="outlined"
                  fullWidth
                  value={filters.locationFilter}
                  onChange={(e) => setFilters(prev => ({ ...prev, locationFilter: e.target.value }))}
                  placeholder="Search by city or venue"
                />
              </Grid>

              {/* Date Range */}
              <Grid item xs={12} md={6}>
                <Box sx={{ display: 'flex', gap: 2 }}>
                  <TextField
                    label="From Date"
                    type="date"
                    variant="outlined"
                    fullWidth
                    value={filters.dateRange[0]}
                    onChange={(e) => setFilters(prev => ({ ...prev, dateRange: [e.target.value, prev.dateRange[1]] }))}
                    InputLabelProps={{ shrink: true }}
                  />
                  <TextField
                    label="To Date"
                    type="date"
                    variant="outlined"
                    fullWidth
                    value={filters.dateRange[1]}
                    onChange={(e) => setFilters(prev => ({ ...prev, dateRange: [prev.dateRange[0], e.target.value] }))}
                    InputLabelProps={{ shrink: true }}
                  />
                </Box>
              </Grid>

              {/* Price Range */}
              <Grid item xs={12}>
                <Typography variant="subtitle2" gutterBottom>
                  Price Range: ${filters.priceRange[0]} - ${filters.priceRange[1]}
                </Typography>
                <Slider
                  value={filters.priceRange}
                  onChange={(_, value) => setFilters(prev => ({ ...prev, priceRange: value as [number, number] }))}
                  valueLabelDisplay="auto"
                  min={0}
                  max={maxPrice}
                  step={10}
                />
              </Grid>

              {/* Tags */}
              <Grid item xs={12}>
                <Typography variant="subtitle2" gutterBottom>
                  Tags
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {allTags.map((tag) => (
                    <Chip
                      key={tag}
                      label={tag}
                      clickable
                      color={filters.selectedTags.includes(tag) ? 'primary' : 'default'}
                      variant={filters.selectedTags.includes(tag) ? 'filled' : 'outlined'}
                      onClick={() => handleTagToggle(tag)}
                      size="small"
                    />
                  ))}
                </Box>
              </Grid>
            </Grid>
          </Paper>
        </Box>
      )}

      {/* Results Summary */}
      <Box sx={{ mb: LAYOUT_CONSTANTS.SPACING.MD }}>
        <Typography variant="body1" color="text.secondary">
          Showing {filteredEvents.length} of {events.length} events
        </Typography>
      </Box>

      {/* Events Grid */}
      <EventGrid
        events={filteredEvents}
        columns={3}
        variant="default"
        onEventClick={onEventClick}
              />
      </Box>
    );
  };

export default EventDirectory;

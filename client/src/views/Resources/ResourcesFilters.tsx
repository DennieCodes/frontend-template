import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/GridLegacy';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import Slider from '@mui/material/Slider';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { ResourcesFiltersProps } from './types';

const ResourcesFilters: React.FC<ResourcesFiltersProps> = ({
  filters,
  onFiltersChange,
  onClearFilters,
}) => {
  const [localFilters, setLocalFilters] = useState(filters);

  const handleFilterChange = (key: string, value: unknown) => {
    const newFilters = { ...localFilters, [key]: value };
    setLocalFilters(newFilters);
    onFiltersChange(newFilters);
  };

  const handleClearFilters = () => {
    const clearedFilters = {
      search: '',
      category: '',
      location: '',
      priceRange: [0, 1000],
      rating: 0,
      tags: [],
      verifiedOnly: false,
    };
    setLocalFilters(clearedFilters);
    onClearFilters();
  };

  return (
    <Paper elevation={2} sx={{ p: 3 }}>
      <Typography variant="h6" component="h2" gutterBottom>
        Filters
      </Typography>

      <Grid container spacing={3}>
        <Grid xs={12} md={6}>
          <TextField
            fullWidth
            label="Search resources"
            value={localFilters.search}
            onChange={(e) => handleFilterChange('search', e.target.value)}
            placeholder="Search by name or description..."
          />
        </Grid>
        <Grid xs={12} sm={6} md={3}>
          <FormControl fullWidth>
            <InputLabel>Category</InputLabel>
            <Select
              value={localFilters.category}
              label="Category"
              onChange={(e) => handleFilterChange('category', e.target.value)}
            >
              <MenuItem value="">All Categories</MenuItem>
              <MenuItem value="healthcare">Healthcare</MenuItem>
              <MenuItem value="education">Education</MenuItem>
              <MenuItem value="housing">Housing</MenuItem>
              <MenuItem value="employment">Employment</MenuItem>
              <MenuItem value="legal">Legal</MenuItem>
              <MenuItem value="financial">Financial</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid xs={12} sm={6} md={3}>
          <FormControl fullWidth>
            <InputLabel>Location</InputLabel>
            <Select
              value={localFilters.location}
              label="Location"
              onChange={(e) => handleFilterChange('location', e.target.value)}
            >
              <MenuItem value="">All Locations</MenuItem>
              <MenuItem value="downtown">Downtown</MenuItem>
              <MenuItem value="north">North Side</MenuItem>
              <MenuItem value="south">South Side</MenuItem>
              <MenuItem value="east">East Side</MenuItem>
              <MenuItem value="west">West Side</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid xs={12} sm={6} md={3}>
          <Typography variant="subtitle2" gutterBottom>
            Price Range
          </Typography>
          <Slider
            value={localFilters.priceRange}
            onChange={(_, value) => handleFilterChange('priceRange', value)}
            valueLabelDisplay="auto"
            min={0}
            max={1000}
            step={50}
          />
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant="caption">${localFilters.priceRange[0]}</Typography>
            <Typography variant="caption">${localFilters.priceRange[1]}</Typography>
          </Box>
        </Grid>
        <Grid xs={12} sm={6} md={3}>
          <Typography variant="subtitle2" gutterBottom>
            Minimum Rating
          </Typography>
          <Slider
            value={localFilters.rating}
            onChange={(_, value) => handleFilterChange('rating', value)}
            valueLabelDisplay="auto"
            min={0}
            max={5}
            step={0.5}
            marks={[
              { value: 0, label: 'Any' },
              { value: 2.5, label: '2.5+' },
              { value: 5, label: '5.0' },
            ]}
          />
        </Grid>
        <Grid xs={12} sm={6} md={4}>
          <FormControlLabel
            control={
              <Checkbox
                checked={localFilters.verifiedOnly}
                onChange={(e) => handleFilterChange('verifiedOnly', e.target.checked)}
              />
            }
            label="Verified Only"
          />
        </Grid>
      </Grid>

      {/* Tags Filter */}
      <Box sx={{ mt: 3 }}>
        <Typography variant="subtitle2" gutterBottom>
          Filter by Tags:
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
          {['Free', 'Low Cost', 'Wheelchair Accessible', 'Bilingual', '24/7', 'Emergency'].map((tag) => (
            <Chip
              key={tag}
              label={tag}
              onClick={() => {
                const newTags = localFilters.tags.includes(tag)
                  ? localFilters.tags.filter(t => t !== tag)
                  : [...localFilters.tags, tag];
                handleFilterChange('tags', newTags);
              }}
              color={localFilters.tags.includes(tag) ? 'primary' : 'default'}
              variant={localFilters.tags.includes(tag) ? 'filled' : 'outlined'}
              clickable
            />
          ))}
        </Box>
      </Box>

      <Box sx={{ mt: 3, display: 'flex', gap: 2 }}>
        <Button
          variant="outlined"
          onClick={handleClearFilters}
        >
          Clear All Filters
        </Button>
        <Button
          variant="contained"
          onClick={() => onFiltersChange(localFilters)}
        >
          Apply Filters
        </Button>
      </Box>
    </Paper>
  );
};

export default ResourcesFilters;

import React, { useState, useMemo } from 'react';
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
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import { EventDirectoryProps } from './types';

const EventDirectory: React.FC<EventDirectoryProps> = ({
  events,
  categories,
  onEventClick,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');

  const allLocations = useMemo(() => {
    const locations = new Set<string>();
    events.forEach(event => {
      locations.add(event.location.city);
    });
    return Array.from(locations);
  }, [events]);

  const filteredEvents = useMemo(() => {
    return events.filter(event => {
      const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           event.description.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory = !selectedCategory || event.category === selectedCategory;

      const matchesDate = !selectedDate || event.startDate === selectedDate;

      const matchesLocation = !selectedLocation || event.location.city === selectedLocation;

      return matchesSearch && matchesCategory && matchesDate && matchesLocation;
    });
  }, [events, searchTerm, selectedCategory, selectedDate, selectedLocation]);

  const handleClearFilters = () => {
    setSearchTerm('');
    setSelectedCategory('');
    setSelectedDate('');
    setSelectedLocation('');
  };

  return (
    <Box sx={{ py: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        Event Directory
      </Typography>
      <Typography variant="h6" color="text.secondary" paragraph>
        Discover and explore upcoming events in your area.
      </Typography>

      {/* Search and Filters */}
      <Paper elevation={2} sx={{ p: 3, mb: 4 }}>
        <Grid container spacing={3}>
          <Grid xs={12} md={6}>
            <TextField
              fullWidth
              label="Search events"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by title or description..."
            />
          </Grid>
          <Grid xs={12} sm={6} md={2}>
            <FormControl fullWidth>
              <InputLabel>Category</InputLabel>
              <Select
                value={selectedCategory}
                label="Category"
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <MenuItem value="">All Categories</MenuItem>
                {categories.map((category) => (
                  <MenuItem key={category} value={category}>
                    {category}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid xs={12} sm={6} md={2}>
            <TextField
              fullWidth
              label="Date"
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid xs={12} sm={6} md={2}>
            <FormControl fullWidth>
              <InputLabel>Location</InputLabel>
              <Select
                value={selectedLocation}
                label="Location"
                onChange={(e) => setSelectedLocation(e.target.value)}
              >
                <MenuItem value="">All Locations</MenuItem>
                {allLocations.map((location) => (
                  <MenuItem key={location} value={location}>
                    {location}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        </Grid>

        <Box sx={{ mt: 3, display: 'flex', gap: 2 }}>
          <Button
            variant="outlined"
            onClick={handleClearFilters}
          >
            Clear Filters
          </Button>
          <Button
            variant="contained"
            onClick={() => {/* Apply filters */}}
          >
            Apply Filters
          </Button>
        </Box>
      </Paper>

      {/* Results Count */}
      <Box sx={{ mb: 3 }}>
        <Typography variant="h6" gutterBottom>
          {filteredEvents.length} events found
        </Typography>
      </Box>

      {/* Events Grid */}
      <Grid container spacing={3}>
        {filteredEvents.map((event) => (
          <Grid
            key={event.id}
            xs={12}
            sm={6}
            md={4}
          >
            <Card
              sx={{
                height: '100%',
                cursor: 'pointer',
                transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: 4,
                },
              }}
              onClick={() => onEventClick(event)}
            >
              <CardMedia
                component="img"
                height="200"
                image={event.images[0]}
                alt={event.title}
              />
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <Chip label={event.category} size="small" color="primary" />
                  <Typography variant="caption" color="text.secondary" sx={{ ml: 1 }}>
                    {event.status}
                  </Typography>
                </Box>

                <Typography variant="h6" component="h3" gutterBottom>
                  {event.title}
                </Typography>

                <Typography variant="body2" color="text.secondary" paragraph>
                  {event.description}
                </Typography>

                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <Typography variant="body2" color="text.secondary">
                    📅 {event.startDate}
                  </Typography>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <Typography variant="body2" color="text.secondary">
                    📍 {event.location.city}, {event.location.state}
                  </Typography>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Typography variant="body2" color="text.secondary">
                    👥 {event.registeredAttendees} of {event.capacity} spots filled
                  </Typography>
                </Box>

                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                  {event.tags.slice(0, 3).map((tag, index) => (
                    <Chip key={index} label={tag} size="small" />
                  ))}
                </Box>
              </CardContent>
              <CardActions>
                <Button size="small" variant="contained" fullWidth>
                  View Details
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      {filteredEvents.length === 0 && (
        <Box sx={{ textAlign: 'center', py: 8 }}>
          <Typography variant="h6" color="text.secondary">
            No events found matching your criteria.
          </Typography>
          <Button
            variant="outlined"
            onClick={handleClearFilters}
            sx={{ mt: 2 }}
          >
            Clear all filters
          </Button>
        </Box>
      )}

      {/* Featured Events Section */}
      {filteredEvents.length > 0 && (
        <Box sx={{ mt: 6 }}>
          <Typography variant="h4" component="h2" gutterBottom>
            Featured Events
          </Typography>
          <Grid container spacing={3}>
            {filteredEvents.filter(event => event.featured).slice(0, 3).map((event) => (
              <Grid xs={12} md={4} key={event.id}>
                <Card
                  sx={{
                    height: '100%',
                    position: 'relative',
                    cursor: 'pointer',
                    transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: 4,
                    },
                  }}
                  onClick={() => onEventClick(event)}
                >
                  <Chip
                    label="Featured"
                    color="secondary"
                    sx={{
                      position: 'absolute',
                      top: 16,
                      right: 16,
                      zIndex: 1,
                    }}
                  />
                  <CardMedia
                    component="img"
                    height="250"
                    image={event.images[0]}
                    alt={event.title}
                  />
                  <CardContent>
                    <Typography variant="h5" component="h3" gutterBottom>
                      {event.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" paragraph>
                      {event.description}
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Typography variant="body2" color="text.secondary">
                        📅 {event.startDate}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        📍 {event.location.city}
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      )}
    </Box>
  );
};

export default EventDirectory;

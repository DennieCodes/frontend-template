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
import Rating from '@mui/material/Rating';
import { ResourceDirectoryProps } from './types';

const ResourceDirectory: React.FC<ResourceDirectoryProps> = ({
  resources,
  categories,
  onResourceClick,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const allTags = useMemo(() => {
    const tags = new Set<string>();
    resources.forEach(resource => {
      resource.tags.forEach(tag => tags.add(tag));
    });
    return Array.from(tags);
  }, [resources]);

  const filteredResources = useMemo(() => {
    return resources.filter(resource => {
      const matchesSearch = resource.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           resource.description.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory = !selectedCategory || resource.category === selectedCategory;

      const matchesTags = selectedTags.length === 0 ||
                         selectedTags.some(tag => resource.tags.includes(tag));

      return matchesSearch && matchesCategory && matchesTags;
    });
  }, [resources, searchTerm, selectedCategory, selectedTags]);

  const handleTagToggle = (tag: string) => {
    setSelectedTags(prev =>
      prev.includes(tag)
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  return (
    <Box sx={{ py: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        Resource Directory
      </Typography>
      <Typography variant="h6" color="text.secondary" paragraph>
        Find the resources you need from our comprehensive directory.
      </Typography>

      {/* Search and Filters */}
      <Paper elevation={2} sx={{ p: 3, mb: 4 }}>
        <Grid container spacing={3}>
          <Grid xs={12} md={6}>
            <TextField
              fullWidth
              label="Search resources"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by name or description..."
            />
          </Grid>
          <Grid xs={12} sm={6} md={3}>
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
          <Grid xs={12} sm={6} md={3}>
            <Button
              variant="outlined"
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('');
                setSelectedTags([]);
              }}
              fullWidth
            >
              Clear Filters
            </Button>
          </Grid>
        </Grid>

        {/* Tags Filter */}
        <Box sx={{ mt: 3 }}>
          <Typography variant="subtitle2" gutterBottom>
            Filter by Tags:
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
            {allTags.map((tag) => (
              <Chip
                key={tag}
                label={tag}
                onClick={() => handleTagToggle(tag)}
                color={selectedTags.includes(tag) ? 'primary' : 'default'}
                variant={selectedTags.includes(tag) ? 'filled' : 'outlined'}
                clickable
              />
            ))}
          </Box>
        </Box>
      </Paper>

      {/* Results Count */}
      <Box sx={{ mb: 3 }}>
        <Typography variant="h6" gutterBottom>
          {filteredResources.length} resources found
        </Typography>
      </Box>

      {/* Resources Grid */}
      <Grid container spacing={3}>
        {filteredResources.map((resource) => (
          <Grid
            key={resource.id}
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
              onClick={() => onResourceClick(resource)}
            >
              <CardMedia
                component="img"
                height="200"
                image={resource.images?.[0] || ''}
                alt={resource.name}
              />
              <CardContent>
                <Typography variant="h6" component="h3" gutterBottom>
                  {resource.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  {resource.description}
                </Typography>

                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Rating value={resource.rating} readOnly size="small" />
                  <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
                    ({resource.reviewCount})
                  </Typography>
                </Box>

                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                  {resource.tags.slice(0, 3).map((tag, index) => (
                    <Chip key={index} label={tag} size="small" />
                  ))}
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {filteredResources.length === 0 && (
        <Box sx={{ textAlign: 'center', py: 8 }}>
          <Typography variant="h6" color="text.secondary">
            No resources found matching your criteria.
          </Typography>
          <Button
            variant="outlined"
            onClick={() => {
              setSearchTerm('');
              setSelectedCategory('');
              setSelectedTags([]);
            }}
            sx={{ mt: 2 }}
          >
            Clear all filters
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default ResourceDirectory;
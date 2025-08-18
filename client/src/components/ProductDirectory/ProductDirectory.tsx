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
import Rating from '@mui/material/Rating';
import { ProductDirectoryProps } from './types';

const ProductDirectory: React.FC<ProductDirectoryProps> = ({
  products,
  categories,
  onProductClick,
}) => {
  const safeProducts = products ?? [];
  const safeCategories = categories ?? [];

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedPriceRange, setSelectedPriceRange] = useState('');
  const [selectedRating, setSelectedRating] = useState(0);

  const filteredProducts = useMemo(() => {
    return safeProducts.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           product.description.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory = !selectedCategory || product.category === selectedCategory;

      const matchesPrice = !selectedPriceRange ||
        (selectedPriceRange === 'low' && product.price < 50) ||
        (selectedPriceRange === 'medium' && product.price >= 50 && product.price < 200) ||
        (selectedPriceRange === 'high' && product.price >= 200);

      const matchesRating = !selectedRating || product.rating >= selectedRating;

      return matchesSearch && matchesCategory && matchesPrice && matchesRating;
    });
  }, [safeProducts, searchTerm, selectedCategory, selectedPriceRange, selectedRating]);

  const handleClearFilters = () => {
    setSearchTerm('');
    setSelectedCategory('');
    setSelectedPriceRange('');
    setSelectedRating(0);
  };

  return (
    <Box sx={{ py: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        Product Directory
      </Typography>
      <Typography variant="h6" color="text.secondary" paragraph>
        Discover our collection of high-quality products.
      </Typography>

      {/* Search and Filters */}
      <Paper elevation={2} sx={{ p: 3, mb: 4 }}>
        <Grid container spacing={3}>
          <Grid xs={12} md={6}>
            <TextField
              fullWidth
              label="Search products"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by name or description..."
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
                {safeCategories.map((category) => (
                  <MenuItem key={category} value={category}>
                    {category}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid xs={12} sm={6} md={2}>
            <FormControl fullWidth>
              <InputLabel>Price Range</InputLabel>
              <Select
                value={selectedPriceRange}
                label="Price Range"
                onChange={(e) => setSelectedPriceRange(e.target.value)}
              >
                <MenuItem value="">All Prices</MenuItem>
                <MenuItem value="low">Under $50</MenuItem>
                <MenuItem value="medium">$50 - $200</MenuItem>
                <MenuItem value="high">Over $200</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid xs={12} sm={6} md={2}>
            <FormControl fullWidth>
              <InputLabel>Min Rating</InputLabel>
              <Select
                value={selectedRating}
                label="Min Rating"
                onChange={(e) => setSelectedRating(Number(e.target.value))}
              >
                <MenuItem value={0}>Any Rating</MenuItem>
                <MenuItem value={1}>1+ Stars</MenuItem>
                <MenuItem value={2}>2+ Stars</MenuItem>
                <MenuItem value={3}>3+ Stars</MenuItem>
                <MenuItem value={4}>4+ Stars</MenuItem>
                <MenuItem value={5}>5 Stars</MenuItem>
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
          {filteredProducts.length} products found
        </Typography>
      </Box>

      {/* Products Grid */}
      <Grid container spacing={3}>
        {filteredProducts.map((product) => (
          <Grid
            key={product.id}
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
              onClick={() => onProductClick?.(product)}
            >
              <CardMedia
                component="img"
                height="200"
                image={product.images?.[0] || ''}
                alt={product.name}
              />
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <Chip label={product.category} size="small" color="primary" />
                  {product.featured && (
                    <Chip label="Featured" size="small" color="secondary" sx={{ ml: 1 }} />
                  )}
                </Box>

                <Typography variant="h6" component="h3" gutterBottom>
                  {product.name}
                </Typography>

                <Typography variant="body2" color="text.secondary" paragraph>
                  {product.description}
                </Typography>

                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <Rating value={product.rating} readOnly size="small" />
                  <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
                    ({product.reviewCount})
                  </Typography>
                </Box>

                <Typography variant="h6" color="primary" gutterBottom>
                  ${product.price}
                </Typography>

                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                  {(product.tags || []).slice(0, 3).map((tag, index) => (
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

      {filteredProducts.length === 0 && (
        <Box sx={{ textAlign: 'center', py: 8 }}>
          <Typography variant="h6" color="text.secondary">
            No products found matching your criteria.
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

      {/* Featured Products Section */}
      {filteredProducts.length > 0 && (
        <Box sx={{ mt: 6 }}>
          <Typography variant="h4" component="h2" gutterBottom>
            Featured Products
          </Typography>
          <Grid container spacing={3}>
            {filteredProducts.filter(product => product.featured).slice(0, 3).map((product) => (
              <Grid xs={12} md={4} key={product.id}>
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
                  onClick={() => onProductClick?.(product)}
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
                    image={product.images?.[0] || ''}
                    alt={product.name}
                  />
                  <CardContent>
                    <Typography variant="h5" component="h3" gutterBottom>
                      {product.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" paragraph>
                      {product.description}
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Rating value={product.rating} readOnly size="small" />
                      <Typography variant="h6" color="primary">
                        ${product.price}
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

export default ProductDirectory;

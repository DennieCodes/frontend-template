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
import ProductGrid from '../ProductGrid';
import { ProductDirectoryProps, ProductFilters } from '../../types/product';
import { LAYOUT_CONSTANTS, layoutUtils, typographyStyles } from '../../constants/layout';

const ProductDirectory: React.FC<ProductDirectoryProps> = ({
  products,
  title = 'Products',
  subtitle = 'Discover our amazing collection of products',
  showFilters = true,
  onProductClick,
}) => {
  const [filters, setFilters] = useState<ProductFilters>({
    searchTerm: '',
    selectedCategory: 'all',
    selectedBrand: 'all',
    selectedTags: [],
    priceRange: [0, 1000],
    inStockOnly: false,
    sortBy: 'name',
    sortOrder: 'asc',
  });

  // Get unique categories, brands, and tags
  const categories = useMemo(() => {
    const uniqueCategories = [...new Set(products.map(product => product.category))];
    return uniqueCategories.sort();
  }, [products]);

  const brands = useMemo(() => {
    const uniqueBrands = [...new Set(products.map(product => product.brand))];
    return uniqueBrands.sort();
  }, [products]);

  const allTags = useMemo(() => {
    const tags = products.flatMap(product => product.tags);
    const uniqueTags = [...new Set(tags)];
    return uniqueTags.sort();
  }, [products]);

  const maxPrice = useMemo(() => {
    return Math.max(...products.map(product => product.price));
  }, [products]);

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let filtered = products.filter(product => {
      const matchesSearch = filters.searchTerm === '' ||
        product.name.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
        product.brand.toLowerCase().includes(filters.searchTerm.toLowerCase());

      const matchesCategory = filters.selectedCategory === 'all' || product.category === filters.selectedCategory;
      const matchesBrand = filters.selectedBrand === 'all' || product.brand === filters.selectedBrand;
      const matchesTags = filters.selectedTags.length === 0 ||
        filters.selectedTags.some(tag => product.tags.includes(tag));
      const matchesPrice = product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1];
      const matchesStock = !filters.inStockOnly || product.inStock;

      return matchesSearch && matchesCategory && matchesBrand && matchesTags && matchesPrice && matchesStock;
    });

    // Sort products
    filtered.sort((a, b) => {
      let comparison = 0;
      switch (filters.sortBy) {
        case 'name':
          comparison = a.name.localeCompare(b.name);
          break;
        case 'price':
          comparison = a.price - b.price;
          break;
        case 'rating':
          comparison = b.rating - a.rating;
          break;
        case 'newest':
          comparison = new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
          break;
        case 'popular':
          comparison = b.reviewCount - a.reviewCount;
          break;
      }
      return filters.sortOrder === 'asc' ? comparison : -comparison;
    });

    return filtered;
  }, [products, filters]);

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
      selectedBrand: 'all',
      selectedTags: [],
      priceRange: [0, maxPrice],
      inStockOnly: false,
      sortBy: 'name',
      sortOrder: 'asc',
    });
  };

  const hasActiveFilters = filters.searchTerm !== '' ||
    filters.selectedCategory !== 'all' ||
    filters.selectedBrand !== 'all' ||
    filters.selectedTags.length > 0 ||
    filters.priceRange[0] !== 0 ||
    filters.priceRange[1] !== maxPrice ||
    filters.inStockOnly;

  return (
    <Container maxWidth="xl">
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
                  label="Search products"
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
                      <MenuItem value="name">Name</MenuItem>
                      <MenuItem value="price">Price</MenuItem>
                      <MenuItem value="rating">Rating</MenuItem>
                      <MenuItem value="newest">Newest</MenuItem>
                      <MenuItem value="popular">Most Popular</MenuItem>
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

              {/* Category and Brand */}
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
                  <InputLabel>Brand</InputLabel>
                  <Select
                    value={filters.selectedBrand}
                    label="Brand"
                    onChange={(e) => setFilters(prev => ({ ...prev, selectedBrand: e.target.value }))}
                  >
                    <MenuItem value="all">All Brands</MenuItem>
                    {brands.map((brand) => (
                      <MenuItem key={brand} value={brand}>
                        {brand}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
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

              {/* Stock Filter */}
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={filters.inStockOnly}
                      onChange={(e) => setFilters(prev => ({ ...prev, inStockOnly: e.target.checked }))}
                    />
                  }
                  label="Show only in-stock items"
                />
              </Grid>
            </Grid>
          </Paper>
        </Box>
      )}

      {/* Results Summary */}
      <Box sx={{ mb: LAYOUT_CONSTANTS.SPACING.MD }}>
        <Typography variant="body1" color="text.secondary">
          Showing {filteredProducts.length} of {products.length} products
        </Typography>
      </Box>

      {/* Products Grid */}
      <ProductGrid
        products={filteredProducts}
        columns={3}
        variant="default"
        onProductClick={onProductClick}
      />
    </Container>
  );
};

export default ProductDirectory;

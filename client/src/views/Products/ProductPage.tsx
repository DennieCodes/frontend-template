import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Container,
  Typography,
  Box,
  Paper,
  Chip,
  Rating,
  Button,
  TextField,
  List,
  ListItem,
  ListItemText,
  Tabs,
  Tab,
  Breadcrumbs,
  Link,
  IconButton,
  Tooltip,
} from '@mui/material';
import Grid from '@mui/material/GridLegacy';
import {
  ArrowBack,
  Favorite,
  FavoriteBorder,
  ShoppingCart,
  CheckCircle,
  Cancel,
  Star,
} from '@mui/icons-material';
import { sampleProducts } from './mockData';
import { LAYOUT_CONSTANTS, layoutUtils, typographyStyles } from '../../constants/layout';


interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`product-tabpanel-${index}`}
      aria-labelledby={`product-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ py: 3 }}>{children}</Box>}
    </div>
  );
}

const ProductPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [tabValue, setTabValue] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);

  // Find the product by ID
  const product = sampleProducts.find(p => p.id === id);

  if (!product) {
    return (
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Typography variant="h4" color="error">
          Product not found
        </Typography>
        <Button
          startIcon={<ArrowBack />}
          onClick={() => navigate('/products')}
          sx={{ mt: 2 }}
        >
          Back to Products
        </Button>
      </Container>
    );
  }

  const formatPrice = (price: number, currency: string) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency,
    }).format(price);
  };

  const handleAddToCart = () => {
    // Handle adding to cart
    alert(`Added ${quantity} ${product.name} to cart!`);
  };

  const handleAddToWishlist = () => {
    setIsWishlisted(!isWishlisted);
    // Handle wishlist toggle
  };

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Breadcrumbs */}
      <Breadcrumbs sx={{ mb: 3 }}>
        <Link href="/" color="inherit" sx={{ display: 'flex', alignItems: 'center' }}>
          Home
        </Link>
        <Link href="/products" color="inherit">
          Products
        </Link>
        <Typography color="text.primary">{product.name}</Typography>
      </Breadcrumbs>

      <Grid container spacing={4}>
        {/* Product Images */}
        <Grid xs={12} md={6}>
          <Paper sx={{ p: 2 }}>
            <Box sx={{ position: 'relative', mb: 2 }}>
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                style={{
                  width: '100%',
                  height: '400px',
                  objectFit: 'cover',
                  borderRadius: '8px',
                }}
              />
              {product.onSale && (
                <Chip
                  label={`${product.discountPercentage}% OFF`}
                  color="error"
                  sx={{
                    position: 'absolute',
                    top: 16,
                    left: 16,
                  }}
                />
              )}
            </Box>

            {/* Thumbnail Images */}
            <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
              {product.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${product.name} ${index + 1}`}
                  style={{
                    width: '80px',
                    height: '80px',
                    objectFit: 'cover',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    border: selectedImage === index ? '2px solid #1976d2' : '2px solid transparent',
                  }}
                  onClick={() => setSelectedImage(index)}
                />
              ))}
            </Box>
          </Paper>
        </Grid>

        {/* Product Details */}
        <Grid xs={12} md={6}>
          <Paper sx={{ p: 3 }}>
            {/* Category and Brand */}
            <Box sx={{ display: 'flex', gap: 1, mb: 2, flexWrap: 'wrap' }}>
              <Chip label={product.category} color="primary" variant="outlined" />
              <Chip label={product.brand} variant="outlined" />
              {product.featured && (
                <Chip
                  label="Featured"
                  color="secondary"
                  variant="filled"
                  icon={<Star />}
                />
              )}
            </Box>

            {/* Product Name */}
            <Typography variant="h3" component="h1" gutterBottom sx={{ ...typographyStyles.heading }}>
              {product.name}
            </Typography>

            {/* Rating */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
              <Rating value={product.rating} precision={0.1} readOnly />
              <Typography variant="body1" color="text.secondary">
                {product.rating} ({product.reviewCount} reviews)
              </Typography>
            </Box>

            {/* Price */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
              <Typography variant="h4" color="primary" fontWeight={600}>
                {formatPrice(product.price, product.currency)}
              </Typography>
              {product.originalPrice && (
                <Typography variant="h6" color="text.secondary" sx={{ textDecoration: 'line-through' }}>
                  {formatPrice(product.originalPrice, product.currency)}
                </Typography>
              )}
            </Box>

            {/* Stock Status */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
              {product.inStock ? (
                <>
                  <CheckCircle color="success" />
                  <Typography color="success.main" fontWeight={500}>
                    In Stock
                  </Typography>
                  {product.stockQuantity && (
                    <Typography variant="body2" color="text.secondary">
                      ({product.stockQuantity} available)
                    </Typography>
                  )}
                </>
              ) : (
                <>
                  <Cancel color="error" />
                  <Typography color="error.main" fontWeight={500}>
                    Out of Stock
                  </Typography>
                </>
              )}
            </Box>

            {/* Description */}
            <Typography variant="body1" sx={{ mb: 3 }}>
              {product.description}
            </Typography>

            {/* Quantity and Actions */}
            <Box sx={{ display: 'flex', gap: 2, mb: 3, alignItems: 'center' }}>
              <TextField
                type="number"
                label="Quantity"
                value={quantity}
                onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                inputProps={{ min: 1 }}
                sx={{ width: 100 }}
              />
              <Button
                variant="contained"
                size="large"
                startIcon={<ShoppingCart />}
                onClick={handleAddToCart}
                disabled={!product.inStock}
                sx={{ flexGrow: 1 }}
              >
                Add to Cart
              </Button>
              <Tooltip title={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}>
                <IconButton
                  onClick={handleAddToWishlist}
                  color={isWishlisted ? 'error' : 'default'}
                  size="large"
                >
                  {isWishlisted ? <Favorite /> : <FavoriteBorder />}
                </IconButton>
              </Tooltip>
            </Box>

            {/* Tags */}
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              {product.tags.map((tag) => (
                <Chip key={tag} label={tag} size="small" variant="outlined" />
              ))}
            </Box>
          </Paper>
        </Grid>
      </Grid>

      {/* Product Details Tabs */}
      <Paper sx={{ mt: 4 }}>
        <Tabs value={tabValue} onChange={handleTabChange} aria-label="product details tabs">
          <Tab label="Features" />
          <Tab label="Specifications" />
          <Tab label="Reviews" />
        </Tabs>

        <TabPanel value={tabValue} index={0}>
          <List>
            {product.features.map((feature, index) => (
              <ListItem key={index}>
                <ListItemText primary={feature} />
              </ListItem>
            ))}
          </List>
        </TabPanel>

        <TabPanel value={tabValue} index={1}>
          <Grid container spacing={2}>
            {Object.entries(product.specifications).map(([key, value]) => (
              <Grid xs={12} sm={6} key={key}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', py: 1 }}>
                  <Typography variant="body1" fontWeight={500}>
                    {key}:
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {value}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </TabPanel>

        <TabPanel value={tabValue} index={2}>
          <Typography variant="h6" gutterBottom>
            Customer Reviews
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Reviews functionality would be implemented here.
          </Typography>
        </TabPanel>
      </Paper>
    </Container>
  );
};

export default ProductPage;

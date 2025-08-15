import React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Chip,
  Rating,
  IconButton,
  Tooltip,
  Badge,
} from '@mui/material';
import {
  Favorite,
  FavoriteBorder,
  ShoppingCart,
  Star,
  LocalOffer,
} from '@mui/icons-material';
import { ProductCardProps } from '../../types/product';
import { LAYOUT_CONSTANTS, layoutUtils, typographyStyles } from '../../constants/layout';

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  variant = 'default',
  onClick,
}) => {
  const handleClick = () => {
    onClick?.(product);
  };

  const formatPrice = (price: number, currency: string) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency,
    }).format(price);
  };

  const renderCompactCard = () => (
    <Card
      sx={{
        ...layoutUtils.getCardStyles('compact'),
        cursor: 'pointer',
        position: 'relative',
      }}
      onClick={handleClick}
    >
      {product.onSale && (
        <Chip
          label={`${product.discountPercentage}% OFF`}
          color="error"
          size="small"
          sx={{
            position: 'absolute',
            top: 8,
            left: 8,
            zIndex: 1,
          }}
        />
      )}
      <CardMedia
        component="img"
        height={layoutUtils.getImageHeight('compact')}
        image={product.thumbnail}
        alt={product.name}
        sx={{ objectFit: 'cover' }}
      />
      <CardContent sx={{
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        p: LAYOUT_CONSTANTS.CARD.CONTENT.PADDING,
      }}>
        <Box sx={{ mb: LAYOUT_CONSTANTS.CARD.CONTENT.TITLE_MARGIN }}>
          <Chip
            label={product.category}
            size="small"
            color="primary"
            variant="outlined"
            sx={{ mb: 1 }}
          />
          {product.featured && (
            <Chip
              label="Featured"
              size="small"
              color="secondary"
              variant="filled"
              sx={{ ml: 1 }}
            />
          )}
        </Box>
        <Typography
          variant="h6"
          component="h3"
          gutterBottom
          sx={{
            ...typographyStyles.title,
            mb: LAYOUT_CONSTANTS.CARD.CONTENT.TITLE_MARGIN,
            fontSize: '1rem',
          }}
        >
          {product.name}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            ...typographyStyles.excerpt,
            mb: LAYOUT_CONSTANTS.CARD.CONTENT.EXCERPT_MARGIN,
            flexGrow: 1,
            fontSize: '0.875rem',
          }}
        >
          {product.shortDescription}
        </Typography>
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          mt: 'auto',
          pt: LAYOUT_CONSTANTS.CARD.CONTENT.FOOTER_MARGIN,
        }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Rating
              value={product.rating}
              precision={0.1}
              size="small"
              readOnly
            />
            <Typography variant="caption" color="text.secondary">
              ({product.reviewCount})
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <Tooltip title="Add to wishlist">
              <IconButton size="small">
                <FavoriteBorder fontSize="small" />
              </IconButton>
            </Tooltip>
            <Tooltip title="Add to cart">
              <IconButton size="small" color="primary">
                <ShoppingCart fontSize="small" />
              </IconButton>
            </Tooltip>
          </Box>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mt: 1 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Typography variant="h6" color="primary" fontWeight={600}>
              {formatPrice(product.price, product.currency)}
            </Typography>
            {product.originalPrice && (
              <Typography variant="body2" color="text.secondary" sx={{ textDecoration: 'line-through' }}>
                {formatPrice(product.originalPrice, product.currency)}
              </Typography>
            )}
          </Box>
          <Chip
            label={product.inStock ? 'In Stock' : 'Out of Stock'}
            size="small"
            color={product.inStock ? 'success' : 'error'}
            variant="outlined"
          />
        </Box>
      </CardContent>
    </Card>
  );

  const renderDefaultCard = () => (
    <Card
      sx={{
        ...layoutUtils.getCardStyles('default'),
        cursor: 'pointer',
        position: 'relative',
      }}
      onClick={handleClick}
    >
      {product.onSale && (
        <Chip
          label={`${product.discountPercentage}% OFF`}
          color="error"
          size="small"
          sx={{
            position: 'absolute',
            top: 8,
            left: 8,
            zIndex: 1,
          }}
        />
      )}
      <CardMedia
        component="img"
        height={layoutUtils.getImageHeight('default')}
        image={product.thumbnail}
        alt={product.name}
        sx={{ objectFit: 'cover' }}
      />
      <CardContent sx={{
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        p: LAYOUT_CONSTANTS.CARD.CONTENT.PADDING,
      }}>
        <Box sx={{ mb: LAYOUT_CONSTANTS.CARD.CONTENT.TITLE_MARGIN, display: 'flex', gap: 1, flexWrap: 'wrap' }}>
          <Chip
            label={product.category}
            size="small"
            color="primary"
            variant="outlined"
          />
          {product.featured && (
            <Chip
              label="Featured"
              size="small"
              color="secondary"
              variant="filled"
            />
          )}
        </Box>
        <Typography
          variant="h5"
          component="h3"
          gutterBottom
          sx={{
            ...typographyStyles.title,
            mb: LAYOUT_CONSTANTS.CARD.CONTENT.TITLE_MARGIN,
          }}
        >
          {product.name}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            ...typographyStyles.excerpt,
            mb: LAYOUT_CONSTANTS.CARD.CONTENT.EXCERPT_MARGIN,
            flexGrow: 1,
          }}
        >
          {product.shortDescription}
        </Typography>
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          mt: 'auto',
          pt: LAYOUT_CONSTANTS.CARD.CONTENT.FOOTER_MARGIN,
        }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Rating
              value={product.rating}
              precision={0.1}
              size="small"
              readOnly
            />
            <Typography variant="body2" color="text.secondary">
              ({product.reviewCount} reviews)
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <Tooltip title="Add to wishlist">
              <IconButton>
                <FavoriteBorder />
              </IconButton>
            </Tooltip>
            <Tooltip title="Add to cart">
              <IconButton color="primary">
                <ShoppingCart />
              </IconButton>
            </Tooltip>
          </Box>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mt: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Typography variant="h5" color="primary" fontWeight={600}>
              {formatPrice(product.price, product.currency)}
            </Typography>
            {product.originalPrice && (
              <Typography variant="body1" color="text.secondary" sx={{ textDecoration: 'line-through' }}>
                {formatPrice(product.originalPrice, product.currency)}
              </Typography>
            )}
          </Box>
          <Chip
            label={product.inStock ? 'In Stock' : 'Out of Stock'}
            size="small"
            color={product.inStock ? 'success' : 'error'}
            variant="outlined"
          />
        </Box>
      </CardContent>
    </Card>
  );

  const renderFeaturedCard = () => (
    <Card
      sx={{
        ...layoutUtils.getCardStyles('featured'),
        cursor: 'pointer',
        position: 'relative',
        border: product.featured ? '2px solid' : '1px solid',
        borderColor: product.featured ? 'secondary.main' : 'divider',
      }}
      onClick={handleClick}
    >
      {product.onSale && (
        <Chip
          label={`${product.discountPercentage}% OFF`}
          color="error"
          size="small"
          sx={{
            position: 'absolute',
            top: 12,
            left: 12,
            zIndex: 1,
          }}
        />
      )}
      <CardMedia
        component="img"
        height={layoutUtils.getImageHeight('featured')}
        image={product.thumbnail}
        alt={product.name}
        sx={{ objectFit: 'cover' }}
      />
      <CardContent sx={{
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        p: LAYOUT_CONSTANTS.CARD.CONTENT.PADDING,
      }}>
        <Box sx={{ mb: LAYOUT_CONSTANTS.CARD.CONTENT.TITLE_MARGIN, display: 'flex', gap: 1, flexWrap: 'wrap' }}>
          <Chip
            label={product.category}
            size="small"
            color="primary"
            variant="outlined"
          />
          {product.featured && (
            <Chip
              label="Featured"
              size="small"
              color="secondary"
              variant="filled"
              icon={<Star />}
            />
          )}
          <Chip
            label={product.brand}
            size="small"
            variant="outlined"
          />
        </Box>
        <Typography
          variant="h4"
          component="h3"
          gutterBottom
          sx={{
            ...typographyStyles.title,
            mb: LAYOUT_CONSTANTS.CARD.CONTENT.TITLE_MARGIN,
          }}
        >
          {product.name}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            ...typographyStyles.excerpt,
            mb: LAYOUT_CONSTANTS.CARD.CONTENT.EXCERPT_MARGIN,
            flexGrow: 1,
          }}
        >
          {product.shortDescription}
        </Typography>
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          mt: 'auto',
          pt: LAYOUT_CONSTANTS.CARD.CONTENT.FOOTER_MARGIN,
        }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Rating
              value={product.rating}
              precision={0.1}
              readOnly
            />
            <Typography variant="body1" color="text.secondary">
              {product.rating} ({product.reviewCount} reviews)
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Tooltip title="Add to wishlist">
              <IconButton size="large">
                <FavoriteBorder />
              </IconButton>
            </Tooltip>
            <Tooltip title="Add to cart">
              <IconButton color="primary" size="large">
                <ShoppingCart />
              </IconButton>
            </Tooltip>
          </Box>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mt: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Typography variant="h4" color="primary" fontWeight={600}>
              {formatPrice(product.price, product.currency)}
            </Typography>
            {product.originalPrice && (
              <Typography variant="h6" color="text.secondary" sx={{ textDecoration: 'line-through' }}>
                {formatPrice(product.originalPrice, product.currency)}
              </Typography>
            )}
          </Box>
          <Chip
            label={product.inStock ? 'In Stock' : 'Out of Stock'}
            size="medium"
            color={product.inStock ? 'success' : 'error'}
            variant="outlined"
          />
        </Box>
      </CardContent>
    </Card>
  );

  switch (variant) {
    case 'compact':
      return renderCompactCard();
    case 'featured':
      return renderFeaturedCard();
    default:
      return renderDefaultCard();
  }
};

export default ProductCard;

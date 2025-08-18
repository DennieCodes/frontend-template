import React from 'react';
import Grid from '@mui/material/GridLegacy';
import Box from '@mui/material/Box';
import ProductCard from '../ProductCard';
import { ProductGridProps } from '../../types/product';
import { layoutUtils, LAYOUT_CONSTANTS } from '../../constants/layout';

const ProductGrid: React.FC<ProductGridProps> = ({
  products,
  columns = 3,
  spacing = 3,
  variant = 'default',
  onProductClick,
}) => {
  const getGridSize = () => {
    return layoutUtils.getGridColumns(columns);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Grid container spacing={LAYOUT_CONSTANTS.GRID.SPACING.MD}>
        {products.map((product) => (
          <Grid
            key={product.id}
            {...getGridSize()}
            sx={layoutUtils.getGridItemStyles()}
          >
            <ProductCard
              product={product}
              variant={variant}
              onClick={onProductClick}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProductGrid;

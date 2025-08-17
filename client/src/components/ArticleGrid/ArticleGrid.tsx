import React from 'react';
import Grid from '@mui/material/GridLegacy';
import Box from '@mui/material/Box';
import ArticleCard from '../ArticleCard';
import { ArticleGridProps } from '../../types/article';
import { layoutUtils, LAYOUT_CONSTANTS } from '../../constants/layout';

const ArticleGrid: React.FC<ArticleGridProps> = ({
  articles,
  columns = 3,
  _spacing = 3,
  variant = 'default',
  onArticleClick,
}) => {
  const getGridSize = () => {
    return layoutUtils.getGridColumns(columns);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Grid container spacing={LAYOUT_CONSTANTS.GRID.SPACING.MD}>
        {articles.map((article) => (
          <Grid
            key={article.id}
            {...getGridSize()}
            sx={layoutUtils.getGridItemStyles()}
          >
            <ArticleCard
              article={article}
              variant={variant}
              onClick={onArticleClick}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ArticleGrid;
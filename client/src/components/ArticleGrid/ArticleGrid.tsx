import React from 'react';
import { Grid, Box } from '@mui/material';
import ArticleCard from '../ArticleCard';
import { ArticleGridProps } from '../../types/article';
import { layoutUtils, LAYOUT_CONSTANTS } from '../../constants/layout';

const ArticleGrid: React.FC<ArticleGridProps> = ({
  articles,
  columns = 3,
  spacing = 3,
  variant = 'default',
  onArticleClick,
}) => {
  const getGridColumns = () => {
    return layoutUtils.getGridColumns(columns);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Grid container spacing={LAYOUT_CONSTANTS.GRID.SPACING.MD}>
        {articles.map((article) => (
          <Grid
            item
            key={article.id}
            {...getGridColumns()}
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
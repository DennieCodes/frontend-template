import React from 'react';
import { Grid, Box } from '@mui/material';
import ArticleCard from '../ArticleCard';
import { ArticleGridProps } from '../../types/article';

const ArticleGrid: React.FC<ArticleGridProps> = ({
  articles,
  columns = 3,
  spacing = 3,
  variant = 'default',
  onArticleClick,
}) => {
  const getGridColumns = () => {
    switch (columns) {
      case 1:
        return { xs: 12 };
      case 2:
        return { xs: 12, sm: 6 };
      case 3:
        return { xs: 12, sm: 6, md: 4 };
      case 4:
        return { xs: 12, sm: 6, md: 4, lg: 3 };
      case 6:
        return { xs: 12, sm: 6, md: 4, lg: 2 };
      default:
        return { xs: 12, sm: 6, md: 4 };
    }
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Grid container spacing={spacing}>
        {articles.map((article) => (
          <Grid item key={article.id} {...getGridColumns()}>
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
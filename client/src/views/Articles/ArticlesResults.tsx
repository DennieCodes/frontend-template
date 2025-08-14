import React from 'react';
import { Box, Paper, Typography } from '@mui/material';
import ArticleGrid from '../../components/ArticleGrid';
import { ArticlesResultsProps } from './types';
import { LAYOUT_CONSTANTS, layoutUtils } from '../../constants/layout';

const ArticlesResults: React.FC<ArticlesResultsProps> = ({
  filteredArticles,
  onArticleClick,
}) => {
  return (
    <Box sx={{
      ...layoutUtils.getContentLayout('full-width'),
    }}>
      {filteredArticles.length > 0 ? (
        <Box sx={{
          maxWidth: layoutUtils.getContentWidth('wide'),
          mx: 'auto',
        }}>
          <ArticleGrid
            articles={filteredArticles}
            columns={3}
            spacing={LAYOUT_CONSTANTS.GRID.SPACING.MD}
            variant="default"
            onArticleClick={onArticleClick}
          />
        </Box>
      ) : (
        <Box sx={{
          maxWidth: layoutUtils.getContentWidth('standard'),
          mx: 'auto',
        }}>
          <Paper sx={{ p: LAYOUT_CONSTANTS.SPACING.LG, textAlign: 'center' }}>
            <Typography variant="h6" color="text.secondary" gutterBottom>
              No articles found
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Try adjusting your search criteria or filters
            </Typography>
          </Paper>
        </Box>
      )}
    </Box>
  );
};

export default ArticlesResults;

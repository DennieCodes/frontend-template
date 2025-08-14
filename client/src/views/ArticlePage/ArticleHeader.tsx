import React from 'react';
import { Box, Typography, Chip, IconButton, Tooltip, Paper } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
import { ArticleHeaderProps } from './types';
import ArticleMeta from './ArticleMeta';
import ArticleTags from './ArticleTags';

const ArticleHeader: React.FC<ArticleHeaderProps> = ({ article, onBack }) => {
  return (
    <>
      {/* Back Button */}
      <Box sx={{ mb: 3 }}>
        <Tooltip title="Go back">
          <IconButton onClick={onBack} sx={{ mb: 2 }}>
            <ArrowBack />
          </IconButton>
        </Tooltip>
      </Box>

      {/* Article Header */}
      <Paper sx={{ p: 4, mb: 4 }}>
        <Box sx={{ mb: 3 }}>
          <Chip
            label={article.category}
            color="primary"
            variant="filled"
            sx={{ mb: 2 }}
          />
          {article.featured && (
            <Chip
              label="Featured"
              color="secondary"
              variant="filled"
              sx={{ ml: 1, mb: 2 }}
            />
          )}
        </Box>

        <Typography
          variant="h2"
          component="h1"
          gutterBottom
          sx={{
            fontWeight: 700,
            lineHeight: 1.2,
            mb: 3,
            fontSize: { xs: '2rem', md: '3rem' },
          }}
        >
          {article.title}
        </Typography>

        <Typography
          variant="h5"
          color="text.secondary"
          sx={{
            mb: 4,
            lineHeight: 1.5,
            fontWeight: 300,
          }}
        >
          {article.excerpt}
        </Typography>

        {/* Article Meta */}
        <ArticleMeta article={article} />

        {/* Featured Image */}
        {article.imageUrl && (
          <Box sx={{ mb: 4 }}>
            <img
              src={article.imageUrl}
              alt={article.title}
              style={{
                width: '100%',
                height: 'auto',
                maxHeight: '500px',
                objectFit: 'cover',
                borderRadius: '8px',
              }}
            />
          </Box>
        )}

        {/* Tags */}
        <ArticleTags tags={article.tags} />
      </Paper>
    </>
  );
};

export default ArticleHeader;

import React from 'react';
import { Paper, Typography, Box, Chip, Divider } from '@mui/material';
import { ArticleSidebarProps } from './types';

const ArticleSidebar: React.FC<ArticleSidebarProps> = ({ article }) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <Paper sx={{ p: 3, position: 'sticky', top: 24 }}>
      <Typography variant="h6" gutterBottom>
        Article Info
      </Typography>
      <Divider sx={{ mb: 2 }} />

      <Box sx={{ mb: 3 }}>
        <Typography variant="subtitle2" color="text.secondary" gutterBottom>
          Category
        </Typography>
        <Chip label={article.category} color="primary" variant="outlined" />
      </Box>

      <Box sx={{ mb: 3 }}>
        <Typography variant="subtitle2" color="text.secondary" gutterBottom>
          Published
        </Typography>
        <Typography variant="body2">
          {formatDate(article.publishedAt)}
        </Typography>
      </Box>

      <Box sx={{ mb: 3 }}>
        <Typography variant="subtitle2" color="text.secondary" gutterBottom>
          Read Time
        </Typography>
        <Typography variant="body2">
          {article.readTime} minutes
        </Typography>
      </Box>

      {article.tags.length > 0 && (
        <Box>
          <Typography variant="subtitle2" color="text.secondary" gutterBottom>
            Tags
          </Typography>
          <Box sx={{ display: 'flex', gap: 0.5, flexWrap: 'wrap' }}>
            {article.tags.map((tag) => (
              <Chip
                key={tag}
                label={tag}
                size="small"
                variant="outlined"
                sx={{ mb: 0.5 }}
              />
            ))}
          </Box>
        </Box>
      )}
    </Paper>
  );
};

export default ArticleSidebar;

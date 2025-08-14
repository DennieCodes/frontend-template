import React from 'react';
import { Box, Typography, Chip } from '@mui/material';
import { ArticleTagsProps } from './types';

const ArticleTags: React.FC<ArticleTagsProps> = ({ tags }) => {
  if (!tags || tags.length === 0) {
    return null;
  }

  return (
    <Box sx={{ mb: 4 }}>
      <Typography variant="subtitle2" gutterBottom>
        Tags
      </Typography>
      <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
        {tags.map((tag) => (
          <Chip
            key={tag}
            label={tag}
            size="small"
            variant="outlined"
            sx={{ cursor: 'pointer' }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default ArticleTags;

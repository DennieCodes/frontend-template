import React from 'react';
import { Box, Avatar, Typography, IconButton, Tooltip } from '@mui/material';
import { AccessTime, CalendarToday, BookmarkBorder, Share } from '@mui/icons-material';
import { ArticleMetaProps } from './types';

const ArticleMeta: React.FC<ArticleMetaProps> = ({ article }) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, mb: 3, flexWrap: 'wrap' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <Avatar sx={{ width: 40, height: 40 }}>
          {article.author.charAt(0)}
        </Avatar>
        <Box>
          <Typography variant="body1" fontWeight={600}>
            {article.author}
          </Typography>
          <Typography variant="caption" color="text.secondary">
            Author
          </Typography>
        </Box>
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <CalendarToday sx={{ fontSize: 20, color: 'text.secondary' }} />
        <Typography variant="body2" color="text.secondary">
          {formatDate(article.publishedAt)}
        </Typography>
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <AccessTime sx={{ fontSize: 20, color: 'text.secondary' }} />
        <Typography variant="body2" color="text.secondary">
          {article.readTime} min read
        </Typography>
      </Box>

      <Box sx={{ ml: 'auto', display: 'flex', gap: 1 }}>
        <Tooltip title="Bookmark">
          <IconButton>
            <BookmarkBorder />
          </IconButton>
        </Tooltip>
        <Tooltip title="Share">
          <IconButton>
            <Share />
          </IconButton>
        </Tooltip>
      </Box>
    </Box>
  );
};

export default ArticleMeta;

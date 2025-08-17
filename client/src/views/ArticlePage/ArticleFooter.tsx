import React from 'react';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

interface ArticleFooterProps {
  article?: {
    author?: string;
    publishedDate?: string;
    tags?: string[];
  };
}

const ArticleFooter: React.FC<ArticleFooterProps> = ({ article }) => {
  return (
    <Paper elevation={1} sx={{ p: 3, mt: 3 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 2 }}>
        <Box>
          {article?.author && (
            <Typography variant="body2" color="text.secondary">
              By {article.author}
            </Typography>
          )}
          {article?.publishedDate && (
            <Typography variant="body2" color="text.secondary">
              Published on {article.publishedDate}
            </Typography>
          )}
        </Box>
        {article?.tags && article.tags.length > 0 && (
          <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
            {article.tags.map((tag, index) => (
              <Typography key={index} variant="body2" color="primary">
                #{tag}
              </Typography>
            ))}
          </Box>
        )}
      </Box>
    </Paper>
  );
};

export default ArticleFooter;

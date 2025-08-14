import React from 'react';
import { Paper, Typography, Box } from '@mui/material';
import { ArticleContentProps } from './types';

const ArticleContent: React.FC<ArticleContentProps> = ({ content }) => {
  return (
    <Paper sx={{ p: 4 }}>
      <Typography
        variant="body1"
        sx={{
          lineHeight: 1.8,
          fontSize: '1.1rem',
          '& p': {
            mb: 2,
          },
          '& h2': {
            mt: 4,
            mb: 2,
            fontWeight: 600,
          },
          '& h3': {
            mt: 3,
            mb: 2,
            fontWeight: 600,
          },
          '& ul, & ol': {
            mb: 2,
            pl: 3,
          },
          '& li': {
            mb: 1,
          },
          '& blockquote': {
            borderLeft: '4px solid',
            borderColor: 'primary.main',
            pl: 3,
            ml: 0,
            my: 3,
            fontStyle: 'italic',
            color: 'text.secondary',
          },
        }}
      >
        {content.split('\n\n').map((paragraph, index) => (
          <Box key={index} sx={{ mb: 2 }}>
            {paragraph}
          </Box>
        ))}
      </Typography>
    </Paper>
  );
};

export default ArticleContent;

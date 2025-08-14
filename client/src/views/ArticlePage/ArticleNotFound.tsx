import React from 'react';
import { Container, Typography, Box, Button } from '@mui/material';
import { ArticleNotFoundProps } from './types';

const ArticleNotFound: React.FC<ArticleNotFoundProps> = ({ onBackToArticles }) => {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ textAlign: 'center', py: 8 }}>
        <Typography variant="h4" gutterBottom>
          Article Not Found
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
          The article you're looking for doesn't exist.
        </Typography>
        <Button variant="contained" onClick={onBackToArticles}>
          Back to Articles
        </Button>
      </Box>
    </Container>
  );
};

export default ArticleNotFound;

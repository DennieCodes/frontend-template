import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/GridLegacy';
import ArticleHeader from './ArticleHeader';
import ArticleContent from './ArticleContent';
import ArticleSidebar from './ArticleSidebar';
import ArticleFooter from './ArticleFooter';
import { ArticlePageProps } from './types';

const ArticlePage: React.FC<ArticlePageProps> = ({ article }) => {
  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Grid container spacing={4}>
        <Grid xs={12} md={8}>
          <ArticleHeader article={article} />
          <ArticleContent article={article} />
          <ArticleFooter article={article} />
        </Grid>
        <Grid xs={12} md={4}>
          <ArticleSidebar article={article} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default ArticlePage;

import React from 'react';
import { Container, Grid } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { sampleArticles } from './mockData';
import ArticleHeader from './ArticleHeader';
import ArticleContent from './ArticleContent';
import ArticleSidebar from './ArticleSidebar';
import ArticleNotFound from './ArticleNotFound';

const ArticlePage: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  // Find the article by ID
  const article = sampleArticles.find(a => a.id === id);

  const handleBack = () => {
    navigate(-1);
  };

  const handleBackToArticles = () => {
    navigate('/articles');
  };

  // Show loading or error state if article not found
  if (!article) {
    return <ArticleNotFound onBackToArticles={handleBackToArticles} />;
  }

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <ArticleHeader article={article} onBack={handleBack} />

      {/* Article Content and Sidebar */}
      <Grid container spacing={4}>
        <Grid item xs={12} md={8}>
          <ArticleContent content={article.content} />
        </Grid>

        <Grid item xs={12} md={4}>
          <ArticleSidebar article={article} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default ArticlePage;

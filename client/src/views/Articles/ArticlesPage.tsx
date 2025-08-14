import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';
import ArticlesHeader from './ArticlesHeader';
import ArticlesFilters from './ArticlesFilters';
import ArticlesSummary from './ArticlesSummary';
import ArticlesResults from './ArticlesResults';
import { Article } from './types';
import { sampleArticles } from './mockData';

const ArticlesPage: React.FC = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  // Get unique categories and tags
  const categories = useMemo(() => {
    const uniqueCategories = [...new Set(sampleArticles.map(article => article.category))];
    return uniqueCategories.sort();
  }, []);

  const allTags = useMemo(() => {
    const tags = sampleArticles.flatMap(article => article.tags);
    const uniqueTags = [...new Set(tags)];
    return uniqueTags.sort();
  }, []);

  // Filter articles based on search, category, and tags
  const filteredArticles = useMemo(() => {
    return sampleArticles.filter(article => {
      const matchesSearch = searchTerm === '' ||
        article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.author.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;

      const matchesTags = selectedTags.length === 0 ||
        selectedTags.some(tag => article.tags.includes(tag));

      return matchesSearch && matchesCategory && matchesTags;
    });
  }, [searchTerm, selectedCategory, selectedTags]);

  const handleTagToggle = (tag: string) => {
    setSelectedTags(prev =>
      prev.includes(tag)
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategory('all');
    setSelectedTags([]);
  };

  const hasActiveFilters = searchTerm !== '' || selectedCategory !== 'all' || selectedTags.length > 0;

  const handleArticleClick = (article: Article) => {
    navigate(`/articles/${article.id}`);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <ArticlesHeader
        title="Articles"
        subtitle="Discover our latest articles and insights on web development, design, and technology"
      />

      <ArticlesFilters
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        selectedTags={selectedTags}
        onTagToggle={handleTagToggle}
        categories={categories}
        allTags={allTags}
        hasActiveFilters={hasActiveFilters}
        onClearFilters={clearFilters}
      />

      <ArticlesSummary
        filteredCount={filteredArticles.length}
        totalCount={sampleArticles.length}
        hasActiveFilters={hasActiveFilters}
      />

      <ArticlesResults
        filteredArticles={filteredArticles}
        onArticleClick={handleArticleClick}
      />
    </Box>
  );
};

export default ArticlesPage;

import React, { useState, useMemo } from 'react';
import {
  Container,
  Typography,
  Box,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Chip,
  Button,
  Paper,
} from '@mui/material';
import { Search, FilterList, Clear } from '@mui/icons-material';
import ArticleGrid from '../ArticleGrid';
import { ArticleDirectoryProps } from '../../types/article';
import { LAYOUT_CONSTANTS, layoutUtils, typographyStyles } from '../../constants/layout';

const ArticleDirectory: React.FC<ArticleDirectoryProps> = ({
  articles,
  title = 'Articles',
  subtitle = 'Discover our latest articles and insights',
  showFilters = true,
  onArticleClick,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  // Get unique categories and tags
  const categories = useMemo(() => {
    const uniqueCategories = [...new Set(articles.map(article => article.category))];
    return uniqueCategories.sort();
  }, [articles]);

  const allTags = useMemo(() => {
    const tags = articles.flatMap(article => article.tags);
    const uniqueTags = [...new Set(tags)];
    return uniqueTags.sort();
  }, [articles]);

  // Filter articles based on search, category, and tags
  const filteredArticles = useMemo(() => {
    return articles.filter(article => {
      const matchesSearch = searchTerm === '' ||
        article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.author.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;

      const matchesTags = selectedTags.length === 0 ||
        selectedTags.some(tag => article.tags.includes(tag));

      return matchesSearch && matchesCategory && matchesTags;
    });
  }, [articles, searchTerm, selectedCategory, selectedTags]);

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

  return (
    <Box sx={{ width: '100%' }}>
      {/* Header Section - Centered with whitespace */}
      <Box sx={{
        ...layoutUtils.getContentLayout('centered'),
        py: LAYOUT_CONSTANTS.CONTAINER.PADDING.MD,
        textAlign: 'center',
        mb: LAYOUT_CONSTANTS.SPACING.LG,
      }}>
        <Typography
          variant="h3"
          component="h1"
          gutterBottom
          sx={{
            ...typographyStyles.heading,
            mb: LAYOUT_CONSTANTS.SPACING.SM,
            maxWidth: layoutUtils.getContentWidth('standard'),
            mx: 'auto',
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="h6"
          sx={{
            ...typographyStyles.body,
            mb: LAYOUT_CONSTANTS.SPACING.MD,
            maxWidth: layoutUtils.getContentWidth('standard'),
            mx: 'auto',
          }}
        >
          {subtitle}
        </Typography>
      </Box>

      {/* Filters Section - Full width with constrained content */}
      {showFilters && (
        <Box sx={{
          ...layoutUtils.getContentLayout('full-width'),
          mb: LAYOUT_CONSTANTS.SPACING.LG,
        }}>
          <Paper sx={{
            p: LAYOUT_CONSTANTS.SPACING.MD,
            maxWidth: layoutUtils.getContentWidth('wide'),
            mx: 'auto',
          }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: LAYOUT_CONSTANTS.SPACING.SM, mb: LAYOUT_CONSTANTS.SPACING.MD }}>
              <FilterList color="primary" />
              <Typography variant="h6" component="h2">
                Filters
              </Typography>
              {hasActiveFilters && (
                <Button
                  startIcon={<Clear />}
                  onClick={clearFilters}
                  variant="outlined"
                  size="small"
                  sx={{ ml: 'auto' }}
                >
                  Clear Filters
                </Button>
              )}
            </Box>

          <Box sx={{ display: 'flex', gap: LAYOUT_CONSTANTS.SPACING.SM, mb: LAYOUT_CONSTANTS.SPACING.MD, flexWrap: 'wrap' }}>
            <TextField
              label="Search articles"
              variant="outlined"
              size="small"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              InputProps={{
                startAdornment: <Search sx={{ mr: 1, color: 'text.secondary' }} />,
              }}
              sx={{ minWidth: 250 }}
            />

            <FormControl size="small" sx={{ minWidth: 200 }}>
              <InputLabel>Category</InputLabel>
              <Select
                value={selectedCategory}
                label="Category"
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <MenuItem value="all">All Categories</MenuItem>
                {categories.map((category) => (
                  <MenuItem key={category} value={category}>
                    {category}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>

          {/* Tags */}
          {allTags.length > 0 && (
            <Box>
              <Typography variant="subtitle2" gutterBottom>
                Tags
              </Typography>
              <Box sx={{ display: 'flex', gap: LAYOUT_CONSTANTS.SPACING.XS, flexWrap: 'wrap' }}>
                {allTags.map((tag) => (
                  <Chip
                    key={tag}
                    label={tag}
                    size="small"
                    variant={selectedTags.includes(tag) ? "filled" : "outlined"}
                    color={selectedTags.includes(tag) ? "primary" : "default"}
                    onClick={() => handleTagToggle(tag)}
                    sx={{ cursor: 'pointer' }}
                  />
                ))}
              </Box>
            </Box>
          )}
        </Paper>
      </Box>
      )}

      {/* Results Summary - Centered with whitespace */}
      <Box sx={{
        ...layoutUtils.getContentLayout('centered'),
        mb: LAYOUT_CONSTANTS.SPACING.MD,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        <Typography variant="body1" color="text.secondary">
          Showing {filteredArticles.length} of {articles.length} articles
        </Typography>
        {hasActiveFilters && (
          <Typography variant="body2" color="primary">
            Filtered results
          </Typography>
        )}
      </Box>

      {/* Articles Grid - Full width with constrained content */}
      <Box sx={{
        ...layoutUtils.getContentLayout('full-width'),
      }}>
        {filteredArticles.length > 0 ? (
          <Box sx={{
            maxWidth: layoutUtils.getContentWidth('wide'),
            mx: 'auto',
          }}>
            <ArticleGrid
              articles={filteredArticles}
              columns={3}
              spacing={LAYOUT_CONSTANTS.GRID.SPACING.MD}
              variant="default"
              onArticleClick={onArticleClick}
            />
          </Box>
        ) : (
          <Box sx={{
            maxWidth: layoutUtils.getContentWidth('standard'),
            mx: 'auto',
          }}>
            <Paper sx={{ p: LAYOUT_CONSTANTS.SPACING.LG, textAlign: 'center' }}>
              <Typography variant="h6" color="text.secondary" gutterBottom>
                No articles found
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Try adjusting your search criteria or filters
              </Typography>
            </Paper>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default ArticleDirectory;
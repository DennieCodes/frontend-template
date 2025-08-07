import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  InputAdornment,
  Grid,
  Card,
  CardContent,
  Chip,
  Stack,
  Pagination,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Paper,
  IconButton,
  Tooltip,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import ClearIcon from '@mui/icons-material/Clear';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import ShareIcon from '@mui/icons-material/Share';
import SearchFilters from '../components/SearchFilters/SearchFilters';
import { LAYOUT_CONSTANTS, layoutUtils, typographyStyles } from '../constants/layout';

interface SearchResult {
  id: string;
  title: string;
  description: string;
  type: 'article' | 'resource' | 'page';
  tags: string[];
  author: string;
  date: string;
  readTime: string;
  image?: string;
}

const mockSearchResults: SearchResult[] = [
  {
    id: '1',
    title: 'Getting Started with React Development',
    description: 'A comprehensive guide to setting up your first React project with modern tooling and best practices.',
    type: 'article',
    tags: ['React', 'JavaScript', 'Frontend', 'Development'],
    author: 'John Doe',
    date: '2024-01-15',
    readTime: '5 min read',
  },
  {
    id: '2',
    title: 'Advanced TypeScript Patterns',
    description: 'Explore advanced TypeScript patterns and techniques for building scalable applications.',
    type: 'article',
    tags: ['TypeScript', 'Programming', 'Advanced'],
    author: 'Jane Smith',
    date: '2024-01-10',
    readTime: '8 min read',
  },
  {
    id: '3',
    title: 'UI Component Library',
    description: 'A collection of reusable UI components built with Material-UI and React.',
    type: 'resource',
    tags: ['UI', 'Components', 'Material-UI', 'React'],
    author: 'Design Team',
    date: '2024-01-08',
    readTime: '3 min read',
  },
  {
    id: '4',
    title: 'API Integration Best Practices',
    description: 'Learn the best practices for integrating external APIs into your applications.',
    type: 'article',
    tags: ['API', 'Integration', 'Backend', 'REST'],
    author: 'Mike Johnson',
    date: '2024-01-05',
    readTime: '6 min read',
  },
  {
    id: '5',
    title: 'Performance Optimization Guide',
    description: 'Comprehensive guide to optimizing React application performance.',
    type: 'resource',
    tags: ['Performance', 'Optimization', 'React', 'Frontend'],
    author: 'Performance Team',
    date: '2024-01-03',
    readTime: '10 min read',
  },
  {
    id: '6',
    title: 'State Management with Redux Toolkit',
    description: 'Modern state management using Redux Toolkit for React applications.',
    type: 'article',
    tags: ['Redux', 'State Management', 'React', 'Toolkit'],
    author: 'Sarah Wilson',
    date: '2024-01-01',
    readTime: '7 min read',
  },
];

const SearchPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<SearchResult[]>(mockSearchResults);
  const [currentPage, setCurrentPage] = useState(1);
  const [resultsPerPage] = useState(6);
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState('relevance');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    // Mock search functionality - in real app, this would call an API
    const filtered = mockSearchResults.filter(result =>
      result.title.toLowerCase().includes(query.toLowerCase()) ||
      result.description.toLowerCase().includes(query.toLowerCase()) ||
      result.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
    );
    setSearchResults(filtered);
    setCurrentPage(1);
  };

  const handleClearSearch = () => {
    setSearchQuery('');
    setSearchResults(mockSearchResults);
    setCurrentPage(1);
  };

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
  };

  const handleSortChange = (event: any) => {
    setSortBy(event.target.value);
  };

  const handleTagFilter = (tags: string[]) => {
    setSelectedTags(tags);
    // Mock filtering by tags
    if (tags.length === 0) {
      setSearchResults(mockSearchResults);
    } else {
      const filtered = mockSearchResults.filter(result =>
        tags.some(tag => result.tags.includes(tag))
      );
      setSearchResults(filtered);
    }
    setCurrentPage(1);
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'article':
        return 'primary';
      case 'resource':
        return 'secondary';
      case 'page':
        return 'info';
      default:
        return 'default';
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'article':
        return 'Article';
      case 'resource':
        return 'Resource';
      case 'page':
        return 'Page';
      default:
        return type;
    }
  };

  // Calculate pagination
  const indexOfLastResult = currentPage * resultsPerPage;
  const indexOfFirstResult = indexOfLastResult - resultsPerPage;
  const currentResults = searchResults.slice(indexOfFirstResult, indexOfLastResult);
  const totalPages = Math.ceil(searchResults.length / resultsPerPage);

  return (
    <Box sx={{ width: '100%' }}>
      {/* Search Header - Centered with whitespace */}
      <Box sx={{
        ...layoutUtils.getContentLayout('centered'),
        py: LAYOUT_CONSTANTS.CONTAINER.PADDING.MD,
        mb: LAYOUT_CONSTANTS.SPACING.LG,
      }}>
        <Typography
          variant="h3"
          component="h1"
          gutterBottom
          sx={{
            ...typographyStyles.heading,
            maxWidth: layoutUtils.getContentWidth('standard'),
            mx: 'auto',
          }}
        >
          Search
        </Typography>
        <Typography
          variant="body1"
          sx={{
            mb: LAYOUT_CONSTANTS.SPACING.MD,
            ...typographyStyles.body,
            maxWidth: layoutUtils.getContentWidth('standard'),
            mx: 'auto',
          }}
        >
          Find articles, resources, and pages across our platform
        </Typography>

        {/* Search Input - Constrained width */}
        <Box sx={{
          mb: LAYOUT_CONSTANTS.SPACING.MD,
          maxWidth: layoutUtils.getContentWidth('wide'),
          mx: 'auto',
        }}>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Search for articles, resources, or topics..."
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
              endAdornment: searchQuery && (
                <InputAdornment position="end">
                  <IconButton onClick={handleClearSearch} size="small">
                    <ClearIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: 2,
                fontSize: '1.1rem',
              },
            }}
          />
        </Box>

        {/* Search Controls - Constrained width */}
        <Box sx={{
          maxWidth: layoutUtils.getContentWidth('wide'),
          mx: 'auto',
        }}>
          <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 2 }}>
            <Button
              variant="outlined"
              startIcon={<FilterListIcon />}
              onClick={() => setShowFilters(!showFilters)}
              sx={{ minWidth: 120 }}
            >
              {showFilters ? 'Hide' : 'Show'} Filters
            </Button>

            <FormControl size="small" sx={{ minWidth: 150 }}>
              <InputLabel>Sort by</InputLabel>
              <Select
                value={sortBy}
                label="Sort by"
                onChange={handleSortChange}
              >
                <MenuItem value="relevance">Relevance</MenuItem>
                <MenuItem value="date">Date</MenuItem>
                <MenuItem value="title">Title</MenuItem>
                <MenuItem value="author">Author</MenuItem>
              </Select>
            </FormControl>

            <Typography variant="body2" color="text.secondary">
              {searchResults.length} results found
            </Typography>
          </Stack>
        </Box>
      </Box>

      {/* Search Results Section - Full width with constrained content */}
      <Box sx={{
        ...layoutUtils.getContentLayout('full-width'),
      }}>
        <Box sx={{
          maxWidth: layoutUtils.getContentWidth('wide'),
          mx: 'auto',
        }}>
          <Grid container spacing={3}>
            {/* Filters Sidebar */}
            {showFilters && (
              <Grid item xs={12} md={3}>
                <SearchFilters
                  selectedTags={selectedTags}
                  onTagFilter={handleTagFilter}
                />
              </Grid>
            )}

            {/* Search Results */}
            <Grid item xs={12} md={showFilters ? 9 : 12}>
              {currentResults.length === 0 ? (
                <Box sx={{
                  maxWidth: layoutUtils.getContentWidth('standard'),
                  mx: 'auto',
                }}>
                  <Paper sx={{ p: LAYOUT_CONSTANTS.SPACING.LG, textAlign: 'center' }}>
                    <Typography variant="h6" color="text.secondary" gutterBottom>
                      No results found
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Try adjusting your search terms or filters
                    </Typography>
                  </Paper>
                </Box>
              ) : (
                <>
                  <Grid container spacing={3}>
                    {currentResults.map((result) => (
                      <Grid
                        item
                        xs={12}
                        key={result.id}
                        sx={layoutUtils.getGridItemStyles()}
                      >
                        <Card
                          sx={{
                            ...layoutUtils.getCardStyles('default'),
                            cursor: 'pointer',
                          }}
                        >
                          <CardContent>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                              <Box sx={{ flex: 1 }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                                  <Chip
                                    label={getTypeLabel(result.type)}
                                    color={getTypeColor(result.type)}
                                    size="small"
                                  />
                                  <Typography variant="body2" color="text.secondary">
                                    {result.readTime}
                                  </Typography>
                                </Box>
                                <Typography
                                  variant="h6"
                                  component="h2"
                                  gutterBottom
                                  sx={{ ...typographyStyles.title }}
                                >
                                  {result.title}
                                </Typography>
                                <Typography
                                  variant="body2"
                                  sx={{
                                    mb: 2,
                                    ...typographyStyles.excerpt,
                                  }}
                                >
                                  {result.description}
                                </Typography>
                                <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
                                  {result.tags.map((tag) => (
                                    <Chip
                                      key={tag}
                                      label={tag}
                                      size="small"
                                      variant="outlined"
                                      onClick={() => handleTagFilter([tag])}
                                      sx={{ cursor: 'pointer' }}
                                    />
                                  ))}
                                </Stack>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                  <Typography variant="body2" color="text.secondary">
                                    By {result.author} • {new Date(result.date).toLocaleDateString()}
                                  </Typography>
                                  <Stack direction="row" spacing={1}>
                                    <Tooltip title="Bookmark">
                                      <IconButton size="small">
                                        <BookmarkIcon />
                                      </IconButton>
                                    </Tooltip>
                                    <Tooltip title="Share">
                                      <IconButton size="small">
                                        <ShareIcon />
                                      </IconButton>
                                    </Tooltip>
                                  </Stack>
                                </Box>
                              </Box>
                            </Box>
                          </CardContent>
                        </Card>
                      </Grid>
                    ))}
                  </Grid>

                  {/* Pagination */}
                  {totalPages > 1 && (
                    <Box sx={{ display: 'flex', justifyContent: 'center', mt: LAYOUT_CONSTANTS.SPACING.LG }}>
                      <Pagination
                        count={totalPages}
                        page={currentPage}
                        onChange={handlePageChange}
                        color="primary"
                        size="large"
                        showFirstButton
                        showLastButton
                      />
                    </Box>
                  )}
                </>
              )}
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default SearchPage;
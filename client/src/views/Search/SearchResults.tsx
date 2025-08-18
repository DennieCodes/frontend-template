import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/GridLegacy';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import { SearchResultsProps } from './types';

const SearchResults: React.FC<SearchResultsProps> = ({
  results,
  searchTerm,
  showFilters = false,
  onResultClick,
}) => {
  const groupedResults = {
    articles: results.filter(result => result.type === 'article'),
    resources: results.filter(result => result.type === 'resource'),
    events: results.filter(result => result.type === 'event'),
    products: results.filter(result => result.type === 'product'),
  };

  const renderResultCard = (result: SearchResult) => (
    <Card
      key={result.id}
      sx={{
        height: '100%',
        cursor: 'pointer',
        transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: 4,
        },
      }}
      onClick={() => onResultClick(result)}
    >
      <CardMedia
        component="img"
        height="200"
        image={result.image}
        alt={result.title}
      />
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
          <Chip label={result.type} size="small" color="primary" />
          <Typography variant="caption" color="text.secondary" sx={{ ml: 1 }}>
            {result.category}
          </Typography>
        </Box>
        <Typography variant="h6" component="h3" gutterBottom>
          {result.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          {result.description}
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
          {result.tags.slice(0, 3).map((tag: string, index: number) => (
            <Chip key={index} label={tag} size="small" />
          ))}
        </Box>
      </CardContent>
    </Card>
  );

  return (
    <Box sx={{ py: 4 }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Search Results
        </Typography>
        <Typography variant="h6" color="text.secondary" paragraph>
          Found {results.length} results for "{searchTerm}"
        </Typography>
      </Box>

      <Grid container spacing={3}>
        {showFilters && (
          <Grid xs={12} md={3}>
            <Paper elevation={2} sx={{ p: 3 }}>
              <Typography variant="h6" component="h2" gutterBottom>
                Filters
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Filter options will go here
              </Typography>
            </Paper>
          </Grid>
        )}

        <Grid xs={12} md={showFilters ? 9 : 12}>
          {results.length === 0 ? (
            <Paper elevation={2} sx={{ p: 4, textAlign: 'center' }}>
              <Typography variant="h6" color="text.secondary" gutterBottom>
                No results found
              </Typography>
              <Typography variant="body2" color="text.secondary" paragraph>
                Try adjusting your search terms or browse our categories
              </Typography>
              <Button variant="contained">
                Browse All Content
              </Button>
            </Paper>
          ) : (
            <Grid container spacing={3}>
              {results.map((result) => (
                <Grid
                  key={result.id}
                  xs={12}
                  sm={6}
                  md={4}
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                  }}
                >
                  {renderResultCard(result)}
                </Grid>
              ))}
            </Grid>
          )}
        </Grid>
      </Grid>

      {/* Grouped Results by Type */}
      {results.length > 0 && (
        <Box sx={{ mt: 6 }}>
          {Object.entries(groupedResults).map(([type, typeResults]) => {
            if (typeResults.length === 0) return null;

            return (
              <Box key={type} sx={{ mb: 4 }}>
                <Typography variant="h5" component="h2" gutterBottom>
                  {type.charAt(0).toUpperCase() + type.slice(1)} ({typeResults.length})
                </Typography>
                <Grid container spacing={3}>
                  {typeResults.map((result) => (
                    <Grid
                      key={result.id}
                      xs={12}
                      sm={6}
                      md={4}
                    >
                      {renderResultCard(result)}
                    </Grid>
                  ))}
                </Grid>
              </Box>
            );
          })}
        </Box>
      )}
    </Box>
  );
};

export default SearchResults;

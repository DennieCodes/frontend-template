import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Chip,
  Stack,
  Box,
  IconButton,
  Tooltip,
} from '@mui/material';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import ShareIcon from '@mui/icons-material/Share';
import { SearchResultCardProps } from './types';
import { layoutUtils, typographyStyles } from '../../constants/layout';

const SearchResultCard: React.FC<SearchResultCardProps> = ({ result, onTagFilter }) => {
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

  return (
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
                  onClick={() => onTagFilter([tag])}
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
  );
};

export default SearchResultCard;

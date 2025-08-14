import React from 'react';
import { Paper, Box, Typography, Avatar, IconButton, Chip, Rating } from '@mui/material';
import { Verified, Bookmark, BookmarkBorder, LocationOn, AttachMoney } from '@mui/icons-material';
import { ResourceHeaderProps } from './types';

const ResourceHeader: React.FC<ResourceHeaderProps> = ({
  resource,
  isBookmarked,
  onBookmarkToggle
}) => {
  return (
    <Paper sx={{ p: 3, mb: 3 }}>
      <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 2 }}>
        {resource.imageUrl && (
          <Avatar
            src={resource.imageUrl}
            alt={resource.name}
            sx={{ width: 80, height: 80, mr: 2 }}
          />
        )}
        <Box sx={{ flexGrow: 1 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
            <Typography variant="h4" component="h1" sx={{ flexGrow: 1 }}>
              {resource.name}
            </Typography>
            {resource.verified && (
              <Verified color="primary" sx={{ ml: 1 }} />
            )}
            <IconButton onClick={onBookmarkToggle} sx={{ ml: 1 }}>
              {isBookmarked ? <Bookmark color="primary" /> : <BookmarkBorder />}
            </IconButton>
          </Box>

          <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
            {resource.description}
          </Typography>

          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
            <LocationOn fontSize="small" color="action" sx={{ mr: 0.5 }} />
            <Typography variant="body2" color="text.secondary">
              {resource.location.city}, {resource.location.state}, {resource.location.country}
            </Typography>
          </Box>

          {resource.rating && (
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Rating value={resource.rating} readOnly />
              <Typography variant="body2" color="text.secondary" sx={{ ml: 0.5 }}>
                ({resource.reviewCount || 0} reviews)
              </Typography>
            </Box>
          )}

          <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
            <Chip
              label={resource.category}
              color="primary"
              variant="outlined"
            />
            {resource.subcategory && (
              <Chip
                label={resource.subcategory}
                variant="outlined"
              />
            )}
            {resource.pricing && (
              <Chip
                icon={<AttachMoney />}
                label={resource.pricing.range}
                variant="outlined"
              />
            )}
          </Box>
        </Box>
      </Box>
    </Paper>
  );
};

export default ResourceHeader;

import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/GridLegacy';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LanguageIcon from '@mui/icons-material/Language';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { ResourceCardProps } from '../../types/resource';

const ResourceCard: React.FC<ResourceCardProps> = ({
  resource,
  variant = 'default',
  onClick,
}) => {
  const handleClick = () => {
    if (onClick) {
      onClick(resource);
    }
  };

  const getCardHeight = () => {
    switch (variant) {
      case 'compact':
        return 200;
      case 'detailed':
        return 400;
      default:
        return 300;
    }
  };

  const renderCompactView = () => (
    <Card
      sx={{
        height: getCardHeight(),
        cursor: onClick ? 'pointer' : 'default',
        transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
        '&:hover': onClick ? {
          transform: 'translateY(-4px)',
          boxShadow: 4,
        } : {},
      }}
      onClick={handleClick}
    >
      <CardMedia
        component="img"
        height="140"
        image={resource.images?.[0] || ''}
        alt={resource.name}
      />
      <CardContent>
        <Typography variant="h6" component="h3" gutterBottom noWrap>
          {resource.name}
        </Typography>
        <Typography variant="body2" color="text.secondary" noWrap>
          {resource.description}
        </Typography>
        <Box sx={{ mt: 2, display: 'flex', gap: 1, flexWrap: 'wrap' }}>
          {resource.tags.slice(0, 2).map((tag, index) => (
            <Chip key={index} label={tag} size="small" />
          ))}
        </Box>
      </CardContent>
    </Card>
  );

  const renderDetailedView = () => (
    <Card
      sx={{
        height: getCardHeight(),
        cursor: onClick ? 'pointer' : 'default',
        transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
        '&:hover': onClick ? {
          transform: 'translateY(-4px)',
          boxShadow: 4,
        } : {},
      }}
      onClick={handleClick}
    >
      <CardMedia
        component="img"
        height="200"
        image={resource.images?.[0] || ''}
        alt={resource.name}
      />
      <CardContent>
        <Typography variant="h5" component="h3" gutterBottom>
          {resource.name}
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          {resource.description}
        </Typography>

        <Box sx={{ mb: 2 }}>
          <Rating value={resource.rating} readOnly size="small" />
          <Typography variant="body2" color="text.secondary" component="span" sx={{ ml: 1 }}>
            ({resource.reviewCount} reviews)
          </Typography>
        </Box>

        <Grid container spacing={2}>
          <Grid xs={12} sm={6}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <LocationOnIcon sx={{ fontSize: 16, mr: 1, color: 'text.secondary' }} />
              <Typography variant="body2" color="text.secondary">
                {typeof resource.location === 'string'
                  ? resource.location
                  : `${resource.location?.city || ''}, ${resource.location?.state || ''}`
                }
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <PhoneIcon sx={{ fontSize: 16, mr: 1, color: 'text.secondary' }} />
              <Typography variant="body2" color="text.secondary">
                {resource.contact?.phone || 'N/A'}
              </Typography>
            </Box>
          </Grid>
          <Grid xs={12} sm={6}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <EmailIcon sx={{ fontSize: 16, mr: 1, color: 'text.secondary' }} />
              <Typography variant="body2" color="text.secondary">
                {resource.contact?.email || 'N/A'}
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <LanguageIcon sx={{ fontSize: 16, mr: 1, color: 'text.secondary' }} />
              <Typography variant="body2" color="text.secondary">
                {resource.contact?.website || 'N/A'}
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <Box sx={{ mt: 2, display: 'flex', gap: 1, flexWrap: 'wrap' }}>
          {resource.tags.map((tag, index) => (
            <Chip key={index} label={tag} size="small" />
          ))}
        </Box>

        <Box sx={{ mt: 2 }}>
          <Button variant="contained" size="small" fullWidth>
            View Details
          </Button>
        </Box>
      </CardContent>
    </Card>
  );

  return variant === 'compact' ? renderCompactView() : renderDetailedView();
};

export default ResourceCard;
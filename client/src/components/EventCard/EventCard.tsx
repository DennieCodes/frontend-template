import React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Chip,
} from '@mui/material';
import {
  CalendarToday,
  LocationOn,
  AccessTime,
  People,
} from '@mui/icons-material';
import { EventCardProps } from '../../types/event';
import { LAYOUT_CONSTANTS, layoutUtils, typographyStyles } from '../../constants/layout';

const EventCard: React.FC<EventCardProps> = ({
  event,
  variant = 'default',
  onClick,
}) => {
  const handleClick = () => {
    onClick?.(event);
  };

  const formatPrice = (price: { type: string; currency?: string; amount?: number }) => {
    if (price.type === 'free') {
      return 'Free';
    }
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: price.currency,
    }).format(price.amount);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  const formatTime = (timeString: string) => {
    return new Date(`2000-01-01T${timeString}`).toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'upcoming':
        return 'primary';
      case 'ongoing':
        return 'success';
      case 'completed':
        return 'default';
      case 'cancelled':
        return 'error';
      default:
        return 'default';
    }
  };

  const renderCompactCard = () => (
    <Card
      sx={{
        ...layoutUtils.getCardStyles('compact'),
        cursor: 'pointer',
        position: 'relative',
      }}
      onClick={handleClick}
    >
      {event.featured && (
        <Chip
          label="Featured"
          color="secondary"
          size="small"
          sx={{
            position: 'absolute',
            top: 8,
            left: 8,
            zIndex: 1,
          }}
        />
      )}
      <CardMedia
        component="img"
        height={layoutUtils.getImageHeight('compact')}
        image={event.thumbnail}
        alt={event.title}
        sx={{ objectFit: 'cover' }}
      />
      <CardContent sx={{
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        p: LAYOUT_CONSTANTS.CARD.CONTENT.PADDING,
      }}>
        <Box sx={{ mb: LAYOUT_CONSTANTS.CARD.CONTENT.TITLE_MARGIN }}>
          <Chip
            label={event.category}
            size="small"
            color="primary"
            variant="outlined"
            sx={{ mb: 1 }}
          />
          <Chip
            label={event.status}
            size="small"
            color={getStatusColor(event.status)}
            variant="outlined"
            sx={{ ml: 1 }}
          />
        </Box>
        <Typography
          variant="h6"
          component="h3"
          gutterBottom
          sx={{
            ...typographyStyles.title,
            mb: LAYOUT_CONSTANTS.CARD.CONTENT.TITLE_MARGIN,
            fontSize: '1rem',
          }}
        >
          {event.title}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            ...typographyStyles.excerpt,
            mb: LAYOUT_CONSTANTS.CARD.CONTENT.EXCERPT_MARGIN,
            flexGrow: 1,
            fontSize: '0.875rem',
          }}
        >
          {event.shortDescription}
        </Typography>
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          mt: 'auto',
          pt: LAYOUT_CONSTANTS.CARD.CONTENT.FOOTER_MARGIN,
        }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <CalendarToday sx={{ fontSize: 16 }} />
            <Typography variant="caption" color="text.secondary">
              {formatDate(event.startDate)}
            </Typography>
          </Box>
          <Typography variant="h6" color="primary" fontWeight={600}>
            {formatPrice(event.price)}
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mt: 1 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <LocationOn sx={{ fontSize: 16 }} />
            <Typography variant="caption" color="text.secondary">
              {event.location.city}
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <People sx={{ fontSize: 16 }} />
            <Typography variant="caption" color="text.secondary">
              {event.registeredAttendees}/{event.capacity}
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );

  const renderDefaultCard = () => (
    <Card
      sx={{
        ...layoutUtils.getCardStyles('default'),
        cursor: 'pointer',
        position: 'relative',
      }}
      onClick={handleClick}
    >
      {event.featured && (
        <Chip
          label="Featured"
          color="secondary"
          size="small"
          sx={{
            position: 'absolute',
            top: 8,
            left: 8,
            zIndex: 1,
          }}
        />
      )}
      <CardMedia
        component="img"
        height={layoutUtils.getImageHeight('default')}
        image={event.thumbnail}
        alt={event.title}
        sx={{ objectFit: 'cover' }}
      />
      <CardContent sx={{
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        p: LAYOUT_CONSTANTS.CARD.CONTENT.PADDING,
      }}>
        <Box sx={{ mb: LAYOUT_CONSTANTS.CARD.CONTENT.TITLE_MARGIN, display: 'flex', gap: 1, flexWrap: 'wrap' }}>
          <Chip
            label={event.category}
            size="small"
            color="primary"
            variant="outlined"
          />
          <Chip
            label={event.status}
            size="small"
            color={getStatusColor(event.status)}
            variant="outlined"
          />
          {event.subcategory && (
            <Chip
              label={event.subcategory}
              size="small"
              variant="outlined"
            />
          )}
        </Box>
        <Typography
          variant="h5"
          component="h3"
          gutterBottom
          sx={{
            ...typographyStyles.title,
            mb: LAYOUT_CONSTANTS.CARD.CONTENT.TITLE_MARGIN,
          }}
        >
          {event.title}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            ...typographyStyles.excerpt,
            mb: LAYOUT_CONSTANTS.CARD.CONTENT.EXCERPT_MARGIN,
            flexGrow: 1,
          }}
        >
          {event.shortDescription}
        </Typography>
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          mt: 'auto',
          pt: LAYOUT_CONSTANTS.CARD.CONTENT.FOOTER_MARGIN,
        }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <CalendarToday sx={{ fontSize: 18 }} />
              <Typography variant="body2" color="text.secondary">
                {formatDate(event.startDate)}
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <AccessTime sx={{ fontSize: 18 }} />
              <Typography variant="body2" color="text.secondary">
                {formatTime(event.startTime)}
              </Typography>
            </Box>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <People sx={{ fontSize: 18 }} />
            <Typography variant="body2" color="text.secondary">
              {event.registeredAttendees}/{event.capacity}
            </Typography>
          </Box>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mt: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <LocationOn sx={{ fontSize: 18 }} />
            <Typography variant="body2" color="text.secondary">
              {event.location.venue}, {event.location.city}
            </Typography>
          </Box>
          <Typography variant="h5" color="primary" fontWeight={600}>
            {formatPrice(event.price)}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );

  const renderFeaturedCard = () => (
    <Card
      sx={{
        ...layoutUtils.getCardStyles('featured'),
        cursor: 'pointer',
        position: 'relative',
        border: event.featured ? '2px solid' : '1px solid',
        borderColor: event.featured ? 'secondary.main' : 'divider',
      }}
      onClick={handleClick}
    >
      {event.featured && (
        <Chip
          label="Featured"
          color="secondary"
          size="small"
          sx={{
            position: 'absolute',
            top: 12,
            left: 12,
            zIndex: 1,
          }}
        />
      )}
      <CardMedia
        component="img"
        height={layoutUtils.getImageHeight('featured')}
        image={event.thumbnail}
        alt={event.title}
        sx={{ objectFit: 'cover' }}
      />
      <CardContent sx={{
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        p: LAYOUT_CONSTANTS.CARD.CONTENT.PADDING,
      }}>
        <Box sx={{ mb: LAYOUT_CONSTANTS.CARD.CONTENT.TITLE_MARGIN, display: 'flex', gap: 1, flexWrap: 'wrap' }}>
          <Chip
            label={event.category}
            size="small"
            color="primary"
            variant="outlined"
          />
          <Chip
            label={event.status}
            size="small"
            color={getStatusColor(event.status)}
            variant="outlined"
          />
          {event.subcategory && (
            <Chip
              label={event.subcategory}
              size="small"
              variant="outlined"
            />
          )}
          <Chip
            label={event.organizer.name}
            size="small"
            variant="outlined"
          />
        </Box>
        <Typography
          variant="h4"
          component="h3"
          gutterBottom
          sx={{
            ...typographyStyles.title,
            mb: LAYOUT_CONSTANTS.CARD.CONTENT.TITLE_MARGIN,
          }}
        >
          {event.title}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            ...typographyStyles.excerpt,
            mb: LAYOUT_CONSTANTS.CARD.CONTENT.EXCERPT_MARGIN,
            flexGrow: 1,
          }}
        >
          {event.shortDescription}
        </Typography>
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          mt: 'auto',
          pt: LAYOUT_CONSTANTS.CARD.CONTENT.FOOTER_MARGIN,
        }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <CalendarToday />
              <Typography variant="body1" color="text.secondary">
                {formatDate(event.startDate)} at {formatTime(event.startTime)}
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <LocationOn />
              <Typography variant="body1" color="text.secondary">
                {event.location.venue}
              </Typography>
            </Box>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <People />
            <Typography variant="body1" color="text.secondary">
              {event.registeredAttendees}/{event.capacity} registered
            </Typography>
          </Box>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mt: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Typography variant="body2" color="text.secondary">
              {event.location.city}, {event.location.state}
            </Typography>
          </Box>
          <Typography variant="h4" color="primary" fontWeight={600}>
            {formatPrice(event.price)}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );

  switch (variant) {
    case 'compact':
      return renderCompactCard();
    case 'featured':
      return renderFeaturedCard();
    default:
      return renderDefaultCard();
  }
};

export default EventCard;

import React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Chip,
  Rating,
  Grid,
  Divider,
  Tooltip,
} from '@mui/material';
import {
  LocationOn,
  Phone,
  Email,
  Language,
  Verified,
  AttachMoney,
} from '@mui/icons-material';
import { ResourceCardProps } from '../../types/resource';
import { LAYOUT_CONSTANTS, layoutUtils, typographyStyles } from '../../constants/layout';

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

  const renderCompact = () => (
    <Card
      sx={{
        ...layoutUtils.getCardStyles('compact'),
        cursor: onClick ? 'pointer' : 'default',
        '&:hover': onClick ? { boxShadow: 4 } : {},
      }}
      onClick={handleClick}
    >
      {resource.imageUrl && (
        <CardMedia
          component="img"
          height={layoutUtils.getImageHeight('compact')}
          image={resource.imageUrl}
          alt={resource.name}
        />
      )}
      <CardContent sx={{
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        p: LAYOUT_CONSTANTS.CARD.CONTENT.PADDING,
      }}>
        <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: LAYOUT_CONSTANTS.CARD.CONTENT.TITLE_MARGIN }}>
          <Typography variant="h6" component="h3" sx={{
            flexGrow: 1,
            ...typographyStyles.title,
          }}>
            {resource.name}
          </Typography>
          {resource.verified && (
            <Tooltip title="Verified">
              <Verified color="primary" sx={{ ml: 1 }} />
            </Tooltip>
          )}
        </Box>

        <Typography variant="body2" sx={{
          mb: LAYOUT_CONSTANTS.CARD.CONTENT.TITLE_MARGIN,
          ...typographyStyles.excerpt,
        }}>
          {resource.description}
        </Typography>

        <Box sx={{ display: 'flex', alignItems: 'center', mb: LAYOUT_CONSTANTS.CARD.CONTENT.TITLE_MARGIN }}>
          <LocationOn fontSize="small" color="action" sx={{ mr: 0.5 }} />
          <Typography variant="body2" color="text.secondary">
            {resource.location.city}, {resource.location.state}
          </Typography>
        </Box>

        {resource.rating && (
          <Box sx={{ display: 'flex', alignItems: 'center', mb: LAYOUT_CONSTANTS.CARD.CONTENT.TITLE_MARGIN }}>
            <Rating value={resource.rating} size="small" readOnly />
            <Typography variant="body2" color="text.secondary" sx={{ ml: 0.5 }}>
              ({resource.reviewCount || 0})
            </Typography>
          </Box>
        )}

        <Box sx={{ mt: 'auto', pt: LAYOUT_CONSTANTS.CARD.CONTENT.FOOTER_MARGIN }}>
          <Chip
            label={resource.category}
            size="small"
            color="primary"
            variant="outlined"
          />
        </Box>
      </CardContent>
    </Card>
  );

  const renderDefault = () => (
    <Card
      sx={{
        ...layoutUtils.getCardStyles('default'),
        cursor: onClick ? 'pointer' : 'default',
        '&:hover': onClick ? { boxShadow: 4 } : {},
      }}
      onClick={handleClick}
    >
      {resource.imageUrl && (
        <CardMedia
          component="img"
          height={layoutUtils.getImageHeight('default')}
          image={resource.imageUrl}
          alt={resource.name}
        />
      )}
      <CardContent sx={{
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        p: LAYOUT_CONSTANTS.CARD.CONTENT.PADDING,
      }}>
        <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: LAYOUT_CONSTANTS.CARD.CONTENT.TITLE_MARGIN }}>
          <Typography variant="h6" component="h3" sx={{
            flexGrow: 1,
            ...typographyStyles.title,
          }}>
            {resource.name}
          </Typography>
          {resource.verified && (
            <Tooltip title="Verified">
              <Verified color="primary" sx={{ ml: 1 }} />
            </Tooltip>
          )}
        </Box>

        <Typography variant="body2" sx={{
          mb: LAYOUT_CONSTANTS.CARD.CONTENT.EXCERPT_MARGIN,
          ...typographyStyles.excerpt,
        }}>
          {resource.description}
        </Typography>

        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
          <LocationOn fontSize="small" color="action" sx={{ mr: 0.5 }} />
          <Typography variant="body2" color="text.secondary">
            {resource.location.city}, {resource.location.state}
          </Typography>
        </Box>

        {resource.rating && (
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
            <Rating value={resource.rating} size="small" readOnly />
            <Typography variant="body2" color="text.secondary" sx={{ ml: 0.5 }}>
              ({resource.reviewCount || 0})
            </Typography>
          </Box>
        )}

        <Box sx={{ mt: 'auto', pt: 1 }}>
          <Box sx={{ display: 'flex', gap: 0.5, flexWrap: 'wrap', mb: 1 }}>
            <Chip
              label={resource.category}
              size="small"
              color="primary"
              variant="outlined"
            />
            {resource.subcategory && (
              <Chip
                label={resource.subcategory}
                size="small"
                variant="outlined"
              />
            )}
          </Box>

          {resource.services.slice(0, 3).map((service, index) => (
            <Chip
              key={index}
              label={service}
              size="small"
              variant="outlined"
              sx={{ mr: 0.5, mb: 0.5 }}
            />
          ))}
        </Box>
      </CardContent>
    </Card>
  );

  const renderDetailed = () => (
    <Card
      sx={{
        ...layoutUtils.getCardStyles('tall'),
        cursor: onClick ? 'pointer' : 'default',
        '&:hover': onClick ? { boxShadow: 4 } : {},
      }}
      onClick={handleClick}
    >
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 2 }}>
          {resource.imageUrl && (
            <CardMedia
              component="img"
              sx={{ width: 80, height: 80, borderRadius: 1, mr: 2 }}
              image={resource.imageUrl}
              alt={resource.name}
            />
          )}
          <Box sx={{ flexGrow: 1 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <Typography variant="h6" component="h3" sx={{ flexGrow: 1 }}>
                {resource.name}
              </Typography>
              {resource.verified && (
                <Tooltip title="Verified">
                  <Verified color="primary" sx={{ ml: 1 }} />
                </Tooltip>
              )}
            </Box>

            <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
              {resource.description}
            </Typography>

            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <LocationOn fontSize="small" color="action" sx={{ mr: 0.5 }} />
              <Typography variant="body2" color="text.secondary">
                {resource.location.city}, {resource.location.state}
              </Typography>
            </Box>

            {resource.rating && (
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Rating value={resource.rating} size="small" readOnly />
                <Typography variant="body2" color="text.secondary" sx={{ ml: 0.5 }}>
                  ({resource.reviewCount || 0})
                </Typography>
              </Box>
            )}
          </Box>
        </Box>

        <Divider sx={{ my: 2 }} />

        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Typography variant="subtitle2" gutterBottom>
              Services
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {resource.services.slice(0, 4).map((service, index) => (
                <Chip
                  key={index}
                  label={service}
                  size="small"
                  variant="outlined"
                />
              ))}
            </Box>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Typography variant="subtitle2" gutterBottom>
              Contact
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
              {resource.contact.phone && (
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Phone fontSize="small" sx={{ mr: 0.5 }} />
                  <Typography variant="body2">{resource.contact.phone}</Typography>
                </Box>
              )}
              {resource.contact.email && (
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Email fontSize="small" sx={{ mr: 0.5 }} />
                  <Typography variant="body2">{resource.contact.email}</Typography>
                </Box>
              )}
              {resource.contact.website && (
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Language fontSize="small" sx={{ mr: 0.5 }} />
                  <Typography variant="body2">{resource.contact.website}</Typography>
                </Box>
              )}
            </Box>
          </Grid>
        </Grid>

        <Box sx={{ mt: 2, display: 'flex', gap: 1, flexWrap: 'wrap' }}>
          <Chip
            label={resource.category}
            size="small"
            color="primary"
            variant="outlined"
          />
          {resource.subcategory && (
            <Chip
              label={resource.subcategory}
              size="small"
              variant="outlined"
            />
          )}
          {resource.pricing && (
            <Chip
              icon={<AttachMoney />}
              label={resource.pricing.range}
              size="small"
              variant="outlined"
            />
          )}
        </Box>
      </CardContent>
    </Card>
  );

  const renderFeatured = () => (
    <Card
      sx={{
        ...layoutUtils.getCardStyles('featured'),
        cursor: onClick ? 'pointer' : 'default',
        '&:hover': onClick ? { boxShadow: 4 } : {},
        position: 'relative',
        overflow: 'visible'
      }}
      onClick={handleClick}
    >
      {resource.featured && (
        <Chip
          label="Featured"
          color="secondary"
          size="small"
          sx={{
            position: 'absolute',
            top: -10,
            right: 16,
            zIndex: 1,
          }}
        />
      )}

      {resource.imageUrl && (
        <CardMedia
          component="img"
          height={layoutUtils.getImageHeight('featured')}
          image={resource.imageUrl}
          alt={resource.name}
        />
      )}

      <CardContent sx={{
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        p: LAYOUT_CONSTANTS.CARD.CONTENT.PADDING,
      }}>
        <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: LAYOUT_CONSTANTS.CARD.CONTENT.TITLE_MARGIN }}>
          <Typography variant="h5" component="h3" sx={{
            flexGrow: 1,
            ...typographyStyles.heading,
          }}>
            {resource.name}
          </Typography>
          {resource.verified && (
            <Tooltip title="Verified">
              <Verified color="primary" sx={{ ml: 1 }} />
            </Tooltip>
          )}
        </Box>

        <Typography variant="body1" sx={{
          mb: LAYOUT_CONSTANTS.CARD.CONTENT.EXCERPT_MARGIN,
          ...typographyStyles.excerpt,
        }}>
          {resource.description}
        </Typography>

        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
          <LocationOn fontSize="small" color="action" sx={{ mr: 0.5 }} />
          <Typography variant="body2" color="text.secondary">
            {resource.location.city}, {resource.location.state}
          </Typography>
        </Box>

        {resource.rating && (
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <Rating value={resource.rating} readOnly />
            <Typography variant="body2" color="text.secondary" sx={{ ml: 0.5 }}>
              ({resource.reviewCount || 0})
            </Typography>
          </Box>
        )}

        <Box sx={{ mt: 'auto', pt: 1 }}>
          <Box sx={{ display: 'flex', gap: 0.5, flexWrap: 'wrap', mb: 1 }}>
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
          </Box>

          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
            {resource.services.slice(0, 4).map((service, index) => (
              <Chip
                key={index}
                label={service}
                size="small"
                variant="outlined"
              />
            ))}
          </Box>
        </Box>
      </CardContent>
    </Card>
  );

  switch (variant) {
    case 'compact':
      return renderCompact();
    case 'detailed':
      return renderDetailed();
    case 'featured':
      return renderFeatured();
    default:
      return renderDefault();
  }
};

export default ResourceCard;
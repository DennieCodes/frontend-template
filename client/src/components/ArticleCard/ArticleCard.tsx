import React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Chip,
  Avatar,
  IconButton,
  Tooltip,
} from '@mui/material';
import {
  AccessTime,
  BookmarkBorder,
  Share,
} from '@mui/icons-material';
import { ArticleCardProps } from '../../types/article';

const ArticleCard: React.FC<ArticleCardProps> = ({
  article,
  variant = 'default',
  onClick,
}) => {
  const handleClick = () => {
    onClick?.(article);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  const renderCompactCard = () => (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
        },
      }}
      onClick={handleClick}
    >
      {article.imageUrl && (
        <CardMedia
          component="img"
          height="140"
          image={article.imageUrl}
          alt={article.title}
          sx={{ objectFit: 'cover' }}
        />
      )}
      <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ mb: 1 }}>
          <Chip
            label={article.category}
            size="small"
            color="primary"
            variant="outlined"
            sx={{ mb: 1 }}
          />
        </Box>
        <Typography
          variant="h6"
          component="h3"
          gutterBottom
          sx={{
            fontWeight: 600,
            lineHeight: 1.3,
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {article.title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            mb: 2,
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            flexGrow: 1,
          }}
        >
          {article.excerpt}
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mt: 'auto' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Avatar sx={{ width: 24, height: 24, fontSize: '0.75rem' }}>
              {article.author.charAt(0)}
            </Avatar>
            <Typography variant="caption" color="text.secondary">
              {article.author}
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <AccessTime sx={{ fontSize: 16 }} />
            <Typography variant="caption" color="text.secondary">
              {article.readTime} min
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );

  const renderDefaultCard = () => (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
        },
      }}
      onClick={handleClick}
    >
      {article.imageUrl && (
        <CardMedia
          component="img"
          height="200"
          image={article.imageUrl}
          alt={article.title}
          sx={{ objectFit: 'cover' }}
        />
      )}
      <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ mb: 1, display: 'flex', gap: 1, flexWrap: 'wrap' }}>
          <Chip
            label={article.category}
            size="small"
            color="primary"
            variant="outlined"
          />
          {article.featured && (
            <Chip
              label="Featured"
              size="small"
              color="secondary"
              variant="filled"
            />
          )}
        </Box>
        <Typography
          variant="h5"
          component="h3"
          gutterBottom
          sx={{
            fontWeight: 600,
            lineHeight: 1.3,
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {article.title}
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{
            mb: 2,
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            flexGrow: 1,
          }}
        >
          {article.excerpt}
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mt: 'auto' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Avatar sx={{ width: 32, height: 32 }}>
              {article.author.charAt(0)}
            </Avatar>
            <Box>
              <Typography variant="body2" fontWeight={500}>
                {article.author}
              </Typography>
              <Typography variant="caption" color="text.secondary">
                {formatDate(article.publishedAt)}
              </Typography>
            </Box>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <AccessTime sx={{ fontSize: 16 }} />
              <Typography variant="caption" color="text.secondary">
                {article.readTime} min
              </Typography>
            </Box>
            <Tooltip title="Bookmark">
              <IconButton size="small">
                <BookmarkBorder />
              </IconButton>
            </Tooltip>
            <Tooltip title="Share">
              <IconButton size="small">
                <Share />
              </IconButton>
            </Tooltip>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );

  const renderFeaturedCard = () => (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        border: '2px solid',
        borderColor: 'primary.main',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
        },
      }}
      onClick={handleClick}
    >
      {article.imageUrl && (
        <CardMedia
          component="img"
          height="250"
          image={article.imageUrl}
          alt={article.title}
          sx={{ objectFit: 'cover' }}
        />
      )}
      <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ mb: 1, display: 'flex', gap: 1, flexWrap: 'wrap' }}>
          <Chip
            label={article.category}
            size="small"
            color="primary"
            variant="filled"
          />
          <Chip
            label="Featured"
            size="small"
            color="secondary"
            variant="filled"
          />
        </Box>
        <Typography
          variant="h4"
          component="h3"
          gutterBottom
          sx={{
            fontWeight: 700,
            lineHeight: 1.2,
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {article.title}
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{
            mb: 2,
            display: '-webkit-box',
            WebkitLineClamp: 4,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            flexGrow: 1,
            fontSize: '1.1rem',
          }}
        >
          {article.excerpt}
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mt: 'auto' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Avatar sx={{ width: 40, height: 40 }}>
              {article.author.charAt(0)}
            </Avatar>
            <Box>
              <Typography variant="body1" fontWeight={600}>
                {article.author}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {formatDate(article.publishedAt)}
              </Typography>
            </Box>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <AccessTime sx={{ fontSize: 18 }} />
              <Typography variant="body2" color="text.secondary">
                {article.readTime} min read
              </Typography>
            </Box>
            <Tooltip title="Bookmark">
              <IconButton>
                <BookmarkBorder />
              </IconButton>
            </Tooltip>
            <Tooltip title="Share">
              <IconButton>
                <Share />
              </IconButton>
            </Tooltip>
          </Box>
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

export default ArticleCard;
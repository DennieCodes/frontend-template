import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Card,
  CardContent,
  CardActions,
  Avatar,
  Typography,
  Button,
  Chip,
  Stack,
  Box,
  Tooltip,
} from '@mui/material';
import {
  PersonAdd as FollowIcon,
  PersonRemove as UnfollowIcon,
  Verified as VerifiedIcon,
  Circle as OnlineIcon,
  LocationOn as LocationIcon,
} from '@mui/icons-material';
import { UserCardProps } from './types';

const UserCard: React.FC<UserCardProps> = ({
  user,
  variant = 'default',
  showActions = true,
  onUserClick,
  onFollowUser,
  onUnfollowUser,
}) => {
  const navigate = useNavigate();
  const formatNumber = (num: number): string => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
  };

  const formatJoinDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
    });
  };

  const handleCardClick = () => {
    if (onUserClick) {
      onUserClick(user);
    } else {
      navigate(`/users/${user.id}`);
    }
  };

  const handleFollowClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onFollowUser?.(user.id);
  };

  const handleUnfollowClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onUnfollowUser?.(user.id);
  };

  const isCompact = variant === 'compact';
  const isDetailed = variant === 'detailed';

  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        cursor: onUserClick ? 'pointer' : 'default',
        transition: 'all 0.2s ease-in-out',
        '&:hover': {
          transform: 'translateY(-2px)',
          boxShadow: 3,
        },
      }}
      onClick={handleCardClick}
    >
      <CardContent sx={{ flexGrow: 1, p: isCompact ? 1.5 : 2 }}>
        {/* Header with Avatar and Basic Info */}
                <Stack direction="row" spacing={isCompact ? 1.5 : 2} alignItems="center" sx={{ mb: isCompact ? 1 : 2 }}>
          <Box sx={{ position: 'relative' }}>
            <Avatar
              src={user.avatar}
              alt={`${user.firstName} ${user.lastName}`}
              sx={{
                width: isCompact ? 40 : 64,
                height: isCompact ? 40 : 64,
                fontSize: isCompact ? '1.25rem' : '2rem',
              }}
            >
              {user.firstName.charAt(0)}{user.lastName.charAt(0)}
            </Avatar>

            {user.isOnline && (
              <Box
                sx={{
                  position: 'absolute',
                  bottom: 1,
                  right: 1,
                  width: isCompact ? 8 : 12,
                  height: isCompact ? 8 : 12,
                  bgcolor: 'success.main',
                  borderRadius: '50%',
                  border: 1,
                  borderColor: 'background.paper',
                }}
              />
            )}
          </Box>

          <Box sx={{ flex: 1, minWidth: 0 }}>
            <Stack direction="row" alignItems="center" spacing={0.5}>
              <Typography
                variant={isCompact ? 'body2' : 'h6'}
                component="h3"
                fontWeight="bold"
                noWrap
              >
                {user.firstName} {user.lastName}
              </Typography>

              {user.isVerified && (
                <Tooltip title="Verified Account">
                  <VerifiedIcon color="primary" sx={{ fontSize: isCompact ? 14 : 20 }} />
                </Tooltip>
              )}
            </Stack>

            <Typography
              variant={isCompact ? 'caption' : 'body2'}
              color="text.secondary"
              sx={{ mb: 0.5 }}
              noWrap
            >
              @{user.username}
            </Typography>

            {user.location && !isCompact && (
              <Stack direction="row" alignItems="center" spacing={0.5}>
                <LocationIcon sx={{ fontSize: 14, color: 'text.secondary' }} />
                <Typography variant="caption" color="text.secondary" noWrap>
                  {user.location}
                </Typography>
              </Stack>
            )}
          </Box>
        </Stack>

        {/* Bio */}
        {!isCompact && user.bio && (
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              mb: 2,
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              lineHeight: 1.4,
            }}
          >
            {user.bio}
          </Typography>
        )}

        {/* Stats */}
        {!isCompact && (
          <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
            <Typography variant="caption" color="text.secondary">
              <strong>{formatNumber(user.followersCount)}</strong> followers
            </Typography>
            <Typography variant="caption" color="text.secondary">
              <strong>{formatNumber(user.postsCount)}</strong> posts
            </Typography>
            <Typography variant="caption" color="text.secondary">
              <strong>{formatNumber(user.reputation)}</strong> reputation
            </Typography>
          </Stack>
        )}

        {/* Badges */}
        {isDetailed && user.badges.length > 0 && (
          <Stack direction="row" spacing={0.5} sx={{ mb: 2 }}>
            {user.badges.slice(0, 3).map((badge) => (
              <Tooltip key={badge.id} title={badge.name}>
                <Typography variant="h6" sx={{ filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.1))' }}>
                  {badge.icon}
                </Typography>
              </Tooltip>
            ))}
            {user.badges.length > 3 && (
              <Typography variant="caption" color="text.secondary">
                +{user.badges.length - 3} more
              </Typography>
            )}
          </Stack>
        )}

        {/* Role and Join Date */}
        <Stack direction="row" spacing={1} alignItems="center">
          <Chip
            label={user.role}
            size="small"
            color={user.role === 'admin' ? 'error' : user.role === 'moderator' ? 'warning' : 'default'}
            variant="outlined"
            sx={{ fontSize: '0.75rem' }}
          />
          {!isCompact && (
            <Typography variant="caption" color="text.secondary">
              Joined {formatJoinDate(user.joinDate)}
            </Typography>
          )}
        </Stack>
      </CardContent>

      {/* Actions */}
      {showActions && (
        <CardActions sx={{ p: isCompact ? 1 : 2, pt: 0 }}>
          <Button
            variant="contained"
            size={isCompact ? "small" : "small"}
            fullWidth
            startIcon={<FollowIcon />}
            onClick={handleFollowClick}
            sx={{
              minWidth: isCompact ? 80 : 100,
              fontSize: isCompact ? '0.75rem' : '0.875rem',
              py: isCompact ? 0.5 : 1
            }}
          >
            Follow
          </Button>
        </CardActions>
      )}
    </Card>
  );
};

export default UserCard;

import React from 'react';
import {
  Box,
  Avatar,
  Typography,
  Button,
  Chip,
  Stack,
  Tooltip,
} from '@mui/material';
import {
  Edit as EditIcon,
  PersonAdd as FollowIcon,
  Verified as VerifiedIcon,
  Circle as OnlineIcon,
} from '@mui/icons-material';
import { UserProfileHeaderProps } from './types';
import { LAYOUT_CONSTANTS } from '../../constants/layout';

const UserProfileHeader: React.FC<UserProfileHeaderProps> = ({
  user,
  isOwnProfile = false,
  onEditProfile,
  onFollowUser,
  _onUnfollowUser,
}) => {
  const formatJoinDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
    });
  };

  const formatLastActive = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));

    if (diffInHours < 1) return 'Just now';
    if (diffInHours < 24) return `${diffInHours}h ago`;
    if (diffInHours < 168) return `${Math.floor(diffInHours / 24)}d ago`;
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: { xs: 'column', md: 'row' },
      alignItems: { xs: 'center', md: 'flex-start' },
      gap: LAYOUT_CONSTANTS.SPACING.MD,
      mb: LAYOUT_CONSTANTS.SPACING.XL,
      p: LAYOUT_CONSTANTS.SPACING.MD,
      borderRadius: 2,
      bgcolor: 'background.paper',
      boxShadow: 1,
    }}>
      {/* Avatar Section */}
      <Box sx={{ position: 'relative' }}>
        <Avatar
          src={user.avatar}
          alt={`${user.firstName} ${user.lastName}`}
          sx={{
            width: { xs: 120, md: 150 },
            height: { xs: 120, md: 150 },
            fontSize: { xs: '3rem', md: '4rem' },
            border: 3,
            borderColor: 'background.paper',
            boxShadow: 2,
          }}
        >
          {user.firstName.charAt(0)}{user.lastName.charAt(0)}
        </Avatar>

        {/* Online Status Indicator */}
        {user.isOnline && (
          <Box
            sx={{
              position: 'absolute',
              bottom: 8,
              right: 8,
              width: 20,
              height: 20,
              bgcolor: 'success.main',
              borderRadius: '50%',
              border: 2,
              borderColor: 'background.paper',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <OnlineIcon sx={{ fontSize: 12, color: 'white' }} />
          </Box>
        )}
      </Box>

      {/* User Info Section */}
      <Box sx={{ flex: 1, textAlign: { xs: 'center', md: 'left' } }}>
        <Stack direction="row" alignItems="center" justifyContent={{ xs: 'center', md: 'flex-start' }} spacing={1} sx={{ mb: 1 }}>
          <Typography variant="h4" component="h1" fontWeight="bold">
            {user.firstName} {user.lastName}
          </Typography>

          {user.isVerified && (
            <Tooltip title="Verified Account">
              <VerifiedIcon color="primary" sx={{ fontSize: 28 }} />
            </Tooltip>
          )}
        </Stack>

        <Typography variant="h6" color="text.secondary" sx={{ mb: 1 }}>
          @{user.username}
        </Typography>

        {user.location && (
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            📍 {user.location}
          </Typography>
        )}

        <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
          <Chip
            label={user.role}
            size="small"
            color={user.role === 'admin' ? 'error' : user.role === 'moderator' ? 'warning' : 'default'}
            variant="outlined"
          />
          <Chip
            label={`Joined ${formatJoinDate(user.joinDate)}`}
            size="small"
            variant="outlined"
          />
          {!user.isOnline && (
            <Chip
              label={`Last active ${formatLastActive(user.lastActive)}`}
              size="small"
              variant="outlined"
            />
          )}
        </Stack>

        {/* Action Buttons */}
        <Stack direction="row" spacing={2} justifyContent={{ xs: 'center', md: 'flex-start' }}>
          {isOwnProfile ? (
            <Button
              variant="contained"
              startIcon={<EditIcon />}
              onClick={onEditProfile}
              sx={{ minWidth: 120 }}
            >
              Edit Profile
            </Button>
          ) : (
            <Button
              variant="contained"
              startIcon={<FollowIcon />}
              onClick={() => onFollowUser?.(user.id)}
              sx={{ minWidth: 120 }}
            >
              Follow
            </Button>
          )}

          {user.website && (
            <Button
              variant="outlined"
              href={user.website}
              target="_blank"
              rel="noopener noreferrer"
              sx={{ minWidth: 120 }}
            >
              Website
            </Button>
          )}
        </Stack>
      </Box>
    </Box>
  );
};

export default UserProfileHeader;

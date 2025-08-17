import React from 'react';
import { Box } from '@mui/material';
import UserProfileHeader from './UserProfileHeader';
import UserProfileStats from './UserProfileStats';
import UserProfileBio from './UserProfileBio';
import UserProfileBadges from './UserProfileBadges';
import UserProfileSocialLinks from './UserProfileSocialLinks';
import UserProfileActivity from './UserProfileActivity';
import { User } from './types';
import { LAYOUT_CONSTANTS, layoutUtils } from '../../constants/layout';

interface UserProfilePageProps {
  user: User;
  isOwnProfile?: boolean;
}

const UserProfilePage: React.FC<UserProfilePageProps> = ({ user, isOwnProfile = false }) => {
  const handleEditProfile = () => {
    console.log('Edit profile clicked');
    // TODO: Implement edit profile functionality
  };

  const handleFollowUser = (userId: string) => {
    console.log('Follow user:', userId);
    // TODO: Implement follow user functionality
  };

  const handleUnfollowUser = (userId: string) => {
    console.log('Unfollow user:', userId);
    // TODO: Implement unfollow user functionality
  };

  const handleEditBio = () => {
    console.log('Edit bio clicked');
    // TODO: Implement edit bio functionality
  };

  return (
    <Box sx={{
      ...layoutUtils.getContentLayout('centered'),
      py: LAYOUT_CONSTANTS.SPACING.LG,
    }}>
      {/* User Profile Header */}
      <UserProfileHeader
        user={user}
        isOwnProfile={isOwnProfile}
        onEditProfile={handleEditProfile}
        onFollowUser={handleFollowUser}
        onUnfollowUser={handleUnfollowUser}
      />

      {/* User Profile Stats */}
      <UserProfileStats user={user} />

      {/* User Profile Bio */}
      <UserProfileBio
        user={user}
        isOwnProfile={isOwnProfile}
        onEditBio={handleEditBio}
      />

      {/* User Profile Badges */}
      {user.badges.length > 0 && (
        <UserProfileBadges badges={user.badges} />
      )}

      {/* User Profile Social Links */}
      {user.socialLinks.length > 0 && (
        <UserProfileSocialLinks socialLinks={user.socialLinks} />
      )}

      {/* User Profile Activity */}
      <UserProfileActivity userId={user.id} activityType="all" />
    </Box>
  );
};

export default UserProfilePage;

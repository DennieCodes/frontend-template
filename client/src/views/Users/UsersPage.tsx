import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import UserDirectory from './UserDirectory';
import { mockUsers } from './mockData';
import { LAYOUT_CONSTANTS, layoutUtils } from '../../constants/layout';
import { BaseUser } from '../../types/common';

const UsersPage: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleUserClick = (user: BaseUser) => {
    navigate(`/users/${user.id}`);
  };

  const handleFollowUser = (userId: string) => {
    console.log('Follow user:', userId);
    // TODO: Implement follow user functionality
  };

  const handleUnfollowUser = (userId: string) => {
    console.log('Unfollow user:', userId);
    // TODO: Implement unfollow user functionality
  };

  return (
    <Box sx={{
      ...layoutUtils.getContentLayout('centered'),
      py: LAYOUT_CONSTANTS.SPACING.LG,
    }}>
      <UserDirectory
        users={mockUsers}
        title={t('pages.users.title')}
        subtitle={t('pages.users.subtitle')}
        showFilters={true}
        onUserClick={handleUserClick}
        onFollowUser={handleFollowUser}
        onUnfollowUser={handleUnfollowUser}
      />
    </Box>
  );
};

export default UsersPage;

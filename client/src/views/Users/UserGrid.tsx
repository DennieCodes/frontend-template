import React from 'react';
import { Grid } from '@mui/material';
import UserCard from './UserCard';
import { UserGridProps } from './types';

const UserGrid: React.FC<UserGridProps> = ({
  users,
  columns = 3,
  spacing = 2,
  variant = 'default',
  showActions = true,
  onUserClick,
  onFollowUser,
  onUnfollowUser,
}) => {
  const getGridSize = () => {
    switch (columns) {
      case 1:
        return { xs: 12 };
      case 2:
        return { xs: 12, sm: 6 };
      case 3:
        return { xs: 12, sm: 6, md: 4 };
      case 4:
        return { xs: 12, sm: 6, md: 4, lg: 3 };
      case 6:
        return { xs: 12, sm: 6, md: 4, lg: 2 };
      default:
        return { xs: 12, sm: 6, md: 4 };
    }
  };

  return (
    <Grid container spacing={spacing}>
      {users.map((user) => (
        <Grid item key={user.id} {...getGridSize()}>
          <UserCard
            user={user}
            variant={variant}
            showActions={showActions}
            onUserClick={onUserClick}
            onFollowUser={onFollowUser}
            onUnfollowUser={onUnfollowUser}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default UserGrid;

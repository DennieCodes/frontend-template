import React, { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Box,
  Typography,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Stack,
  Chip,
  Button,
} from '@mui/material';
import {
  Search as SearchIcon,
  FilterList as FilterIcon,
  Clear as ClearIcon,
} from '@mui/icons-material';
import UserGrid from './UserGrid';
import { UserDirectoryProps, UserFilters } from './types';
import { LAYOUT_CONSTANTS } from '../../constants/layout';

const UserDirectory: React.FC<UserDirectoryProps> = ({
  users,
  title = 'Users',
  subtitle,
  showFilters = true,
  onUserClick,
  onFollowUser,
  onUnfollowUser,
}) => {
  const { t } = useTranslation();
  const [filters, setFilters] = useState<UserFilters>({
    search: '',
    role: '',
    sortBy: 'name',
    sortOrder: 'asc',
  });

  const filteredAndSortedUsers = useMemo(() => {
    const filtered = users.filter(user => {
      const matchesSearch = !filters.search ||
        user.firstName.toLowerCase().includes(filters.search.toLowerCase()) ||
        user.lastName.toLowerCase().includes(filters.search.toLowerCase()) ||
        user.username.toLowerCase().includes(filters.search.toLowerCase()) ||
        user.bio?.toLowerCase().includes(filters.search.toLowerCase());

      const matchesRole = !filters.role || user.role === filters.role;

      return matchesSearch && matchesRole;
    });

    // Sort users
    filtered.sort((a, b) => {
      let aValue: string | number;
      let bValue: string | number;

      switch (filters.sortBy) {
        case 'name':
          aValue = `${a.firstName} ${a.lastName}`.toLowerCase();
          bValue = `${b.firstName} ${b.lastName}`.toLowerCase();
          break;
        case 'joinDate':
          aValue = new Date(a.joinDate).getTime();
          bValue = new Date(b.joinDate).getTime();
          break;
        case 'reputation':
          aValue = a.reputation;
          bValue = b.reputation;
          break;
        case 'followers':
          aValue = a.followersCount;
          bValue = b.followersCount;
          break;
        default:
          aValue = `${a.firstName} ${a.lastName}`.toLowerCase();
          bValue = `${b.firstName} ${b.lastName}`.toLowerCase();
      }

      if (filters.sortOrder === 'asc') {
        return aValue > bValue ? 1 : -1;
      } else {
        return aValue < bValue ? 1 : -1;
      }
    });

    return filtered;
  }, [users, filters]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilters(prev => ({ ...prev, search: event.target.value }));
  };

  const handleRoleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilters(prev => ({ ...prev, role: event.target.value }));
  };

  const handleSortByChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilters(prev => ({ ...prev, sortBy: event.target.value }));
  };

  const handleSortOrderChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilters(prev => ({ ...prev, sortOrder: event.target.value }));
  };

  const clearFilters = () => {
    setFilters({
      search: '',
      role: '',
      sortBy: 'name',
      sortOrder: 'asc',
    });
  };

  const hasActiveFilters = filters.search || filters.role;

  return (
    <Box>
      {/* Header */}
      <Box sx={{ mb: LAYOUT_CONSTANTS.SPACING.XL }}>
        <Typography variant="h3" component="h1" sx={{ mb: 1 }}>
          {title || t('pages.users.title')}
        </Typography>
        {subtitle && (
          <Typography variant="h6" color="text.secondary" sx={{ mb: 2 }}>
            {subtitle || t('pages.users.subtitle')}
          </Typography>
        )}
        <Typography variant="body1" color="text.secondary">
          {t('pages.users.usersFound', { count: filteredAndSortedUsers.length, total: users.length })}
        </Typography>
      </Box>

      {/* Filters */}
      {showFilters && (
        <Box sx={{ mb: LAYOUT_CONSTANTS.SPACING.XL }}>
          <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 2 }}>
            <FilterIcon color="action" />
            <Typography variant="h6">{t('pages.users.filters')}</Typography>
            {hasActiveFilters && (
              <Button
                size="small"
                startIcon={<ClearIcon />}
                onClick={clearFilters}
                sx={{ ml: 'auto' }}
              >
                {t('pages.users.clearFilters')}
              </Button>
            )}
          </Stack>

          <Stack
            direction={{ xs: 'column', md: 'row' }}
            spacing={2}
            sx={{ mb: 2 }}
          >
            <TextField
              label={t('pages.users.searchPlaceholder')}
              value={filters.search}
              onChange={handleSearchChange}
              placeholder={t('pages.users.searchPlaceholder')}
              startIcon={<SearchIcon />}
              sx={{ flex: 1 }}
            />

            <FormControl sx={{ minWidth: 120 }}>
              <InputLabel>{t('pages.users.role')}</InputLabel>
              <Select
                value={filters.role}
                label={t('pages.users.role')}
                onChange={handleRoleChange}
              >
                <MenuItem value="">{t('pages.users.allRoles')}</MenuItem>
                <MenuItem value="user">User</MenuItem>
                <MenuItem value="moderator">Moderator</MenuItem>
                <MenuItem value="admin">Admin</MenuItem>
              </Select>
            </FormControl>

            <FormControl sx={{ minWidth: 120 }}>
              <InputLabel>{t('pages.users.sortBy')}</InputLabel>
              <Select
                value={filters.sortBy}
                label={t('pages.users.sortBy')}
                onChange={handleSortByChange}
              >
                <MenuItem value="name">{t('pages.users.name')}</MenuItem>
                <MenuItem value="joinDate">{t('pages.users.joinDate')}</MenuItem>
                <MenuItem value="reputation">{t('pages.users.reputation')}</MenuItem>
                <MenuItem value="followers">{t('pages.users.followers')}</MenuItem>
              </Select>
            </FormControl>

            <FormControl sx={{ minWidth: 100 }}>
              <InputLabel>{t('pages.users.order')}</InputLabel>
              <Select
                value={filters.sortOrder}
                label={t('pages.users.order')}
                onChange={handleSortOrderChange}
              >
                <MenuItem value="asc">{t('pages.users.ascending')}</MenuItem>
                <MenuItem value="desc">{t('pages.users.descending')}</MenuItem>
              </Select>
            </FormControl>
          </Stack>

          {/* Active Filters Display */}
          {hasActiveFilters && (
            <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
              {filters.search && (
                <Chip
                  label={`Search: "${filters.search}"`}
                  onDelete={() => setFilters(prev => ({ ...prev, search: '' }))}
                  color="primary"
                  variant="outlined"
                />
              )}
              {filters.role && (
                <Chip
                  label={`Role: ${filters.role}`}
                  onDelete={() => setFilters(prev => ({ ...prev, role: '' }))}
                  color="secondary"
                  variant="outlined"
                />
              )}
            </Stack>
          )}
        </Box>
      )}

      {/* User Grid */}
      <UserGrid
        users={filteredAndSortedUsers}
        columns={4}
        spacing={2}
        variant="compact"
        showActions={true}
        onUserClick={onUserClick}
        onFollowUser={onFollowUser}
        onUnfollowUser={onUnfollowUser}
      />
    </Box>
  );
};

export default UserDirectory;

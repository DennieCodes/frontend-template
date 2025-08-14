import React from 'react';
import {
  Stack,
  Button,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useTranslation } from 'react-i18next';

import { NavigationItem } from './types';

interface HeaderNavigationProps {
  onNavigationClick: (path: string) => void;
  onAboutMenuClick: (event: React.MouseEvent<HTMLElement>) => void;
  onContentMenuClick: (event: React.MouseEvent<HTMLElement>) => void;
}

const HeaderNavigation: React.FC<HeaderNavigationProps> = ({
  onNavigationClick,
  onAboutMenuClick,
  onContentMenuClick,
}) => {
  const { t } = useTranslation();

  // Navigation items grouped by category
  const mainNavigation: NavigationItem[] = [
    { label: t('navigation.search'), path: '/search', icon: <SearchIcon /> },
  ];

  return (
    <Stack
      direction="row"
      spacing={1}
      sx={{ flexGrow: 1, alignItems: 'center' }}
    >
      {/* Main Navigation */}
      {mainNavigation.map((item) => (
        <Button
          key={item.path}
          startIcon={item.icon}
          onClick={() => onNavigationClick(item.path)}
          size="small"
          sx={{ minWidth: 'auto', px: 1 }}
        >
          {item.label}
        </Button>
      ))}

      {/* About & Info Dropdown */}
      <Button
        endIcon={<ExpandMoreIcon />}
        onClick={onAboutMenuClick}
        size="small"
        sx={{ minWidth: 'auto', px: 1 }}
      >
        {t('navigation.about')}
      </Button>

      {/* Content Dropdown */}
      <Button
        endIcon={<ExpandMoreIcon />}
        onClick={onContentMenuClick}
        size="small"
        sx={{ minWidth: 'auto', px: 1 }}
      >
        {t('navigation.content')}
      </Button>
    </Stack>
  );
};

export default HeaderNavigation;

import React from 'react';
import {
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Box,
  Typography,
  Divider,
} from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import MailIcon from '@mui/icons-material/Mail';
import ArticleIcon from '@mui/icons-material/Article';
import BusinessIcon from '@mui/icons-material/Business';
import PersonIcon from '@mui/icons-material/Person';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import LogoutIcon from '@mui/icons-material/Logout';
import HelpIcon from '@mui/icons-material/Help';
import MapIcon from '@mui/icons-material/Map';
import DashboardIcon from '@mui/icons-material/Dashboard';
import QuizIcon from '@mui/icons-material/Quiz';
import AssignmentIcon from '@mui/icons-material/Assignment';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector } from 'react-redux';
import { User } from '../../slice/authSlice';
import { RootState } from '../../store';
import { useTranslation } from 'react-i18next';

import { NavigationItem } from './types';

interface HeaderDropdownMenusProps {
  navigationAnchorEl: HTMLElement | null;
  resourcesAnchorEl: HTMLElement | null;
  accountAnchorEl: HTMLElement | null;
  onClose: () => void;
  onNavigationClick: (path: string) => void;
  onLogoutClick: () => void;
}

const HeaderDropdownMenus: React.FC<HeaderDropdownMenusProps> = ({
  navigationAnchorEl,
  resourcesAnchorEl,
  accountAnchorEl,
  onClose,
  onNavigationClick,
  onLogoutClick,
}) => {
  const { t } = useTranslation();
  const { user, isAuthenticated } = useSelector((state: RootState) => state.auth) as { user: User | null; isAuthenticated: boolean };

  const aboutNavigation: NavigationItem[] = [
    { label: t('navigation.about'), path: '/about', icon: <InfoIcon /> },
    { label: t('navigation.contact'), path: '/contact', icon: <MailIcon /> },
    { label: t('navigation.faq'), path: '/faq', icon: <HelpIcon /> },
    { label: t('navigation.sitemap'), path: '/sitemap', icon: <MapIcon /> },
  ];

  const contentNavigation: NavigationItem[] = [
    { label: t('navigation.articles'), path: '/articles', icon: <ArticleIcon /> },
    { label: t('navigation.resources'), path: '/resources', icon: <BusinessIcon /> },
    { label: t('navigation.products'), path: '/products', icon: <ShoppingCartIcon /> },
    { label: t('navigation.quiz'), path: '/quiz', icon: <QuizIcon /> },
    { label: t('navigation.survey'), path: '/survey', icon: <AssignmentIcon /> },
  ];

  const accountNavigation: NavigationItem[] = [
    { label: t('navigation.dashboard'), path: '/dashboard', icon: <DashboardIcon />, requiresAuth: true },
    { label: 'Admin', path: '/admin', icon: <AdminPanelSettingsIcon />, requiresAuth: true },
    { label: t('common.account'), path: '/account', icon: <PersonIcon />, requiresAuth: true },
  ];

  return (
    <>
      {/* About & Info Menu */}
      <Menu
        anchorEl={navigationAnchorEl}
        open={Boolean(navigationAnchorEl)}
        onClose={onClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        {aboutNavigation.map((item) => (
          <MenuItem key={item.path} onClick={() => onNavigationClick(item.path)}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.label} />
          </MenuItem>
        ))}
      </Menu>

      {/* Content Menu */}
      <Menu
        anchorEl={resourcesAnchorEl}
        open={Boolean(resourcesAnchorEl)}
        onClose={onClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        {contentNavigation.map((item) => (
          <MenuItem key={item.path} onClick={() => onNavigationClick(item.path)}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.label} />
          </MenuItem>
        ))}
      </Menu>

      {/* Account Menu */}
      <Menu
        anchorEl={accountAnchorEl}
        open={Boolean(accountAnchorEl)}
        onClose={onClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <Box sx={{ px: 2, py: 1 }}>
          <Typography variant="subtitle2" color="text.secondary">
            {t('common.welcome')}
          </Typography>
          <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
            {user?.name || user?.email || t('common.user')}
          </Typography>
        </Box>
        <Divider />
        {accountNavigation.map((item) => (
          <MenuItem key={item.path} onClick={() => onNavigationClick(item.path)}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.label} />
          </MenuItem>
        ))}
        <Divider />
        <MenuItem onClick={onLogoutClick}>
          <ListItemIcon><LogoutIcon /></ListItemIcon>
          <ListItemText primary={t('common.logout')} />
        </MenuItem>
      </Menu>
    </>
  );
};

export default HeaderDropdownMenus;

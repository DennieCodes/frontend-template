import React from 'react';
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Typography,
} from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import MailIcon from '@mui/icons-material/Mail';
import ArticleIcon from '@mui/icons-material/Article';
import BusinessIcon from '@mui/icons-material/Business';
import PersonIcon from '@mui/icons-material/Person';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import LogoutIcon from '@mui/icons-material/Logout';
import SearchIcon from '@mui/icons-material/Search';
import HelpIcon from '@mui/icons-material/Help';
import MapIcon from '@mui/icons-material/Map';
import DashboardIcon from '@mui/icons-material/Dashboard';
import QuizIcon from '@mui/icons-material/Quiz';
import { useSelector } from 'react-redux';
import { User } from '../../slice/authSlice';
import { RootState } from '../../store';
import { useTranslation } from 'react-i18next';

import { NavigationItem } from './types';

interface HeaderMobileDrawerProps {
  onNavigationClick: (path: string) => void;
  onLogoutClick: () => void;
}

const HeaderMobileDrawer: React.FC<HeaderMobileDrawerProps> = ({
  onNavigationClick,
  onLogoutClick,
}) => {
  const { t } = useTranslation();
  const { user, isAuthenticated } = useSelector((state: RootState) => state.auth) as { user: User | null; isAuthenticated: boolean };

  // Navigation items grouped by category
  const mainNavigation: NavigationItem[] = [
    { label: t('navigation.search'), path: '/search', icon: <SearchIcon /> },
  ];

  const aboutNavigation: NavigationItem[] = [
    { label: t('navigation.about'), path: '/about', icon: <InfoIcon /> },
    { label: t('navigation.contact'), path: '/contact', icon: <MailIcon /> },
    { label: t('navigation.faq'), path: '/faq', icon: <HelpIcon /> },
    { label: t('navigation.sitemap'), path: '/sitemap', icon: <MapIcon /> },
  ];

  const contentNavigation: NavigationItem[] = [
    { label: t('navigation.articles'), path: '/articles', icon: <ArticleIcon /> },
    { label: t('navigation.resources'), path: '/resources', icon: <BusinessIcon /> },
    { label: t('navigation.quiz'), path: '/quiz', icon: <QuizIcon /> },
  ];

  const accountNavigation: NavigationItem[] = [
    { label: t('navigation.dashboard'), path: '/dashboard', icon: <DashboardIcon />, requiresAuth: true },
    { label: 'Admin', path: '/admin', icon: <AdminPanelSettingsIcon />, requiresAuth: true },
    { label: t('common.account'), path: '/account', icon: <PersonIcon />, requiresAuth: true },
  ];

  return (
    <Box sx={{ width: 280, pt: 2 }}>
      <Box sx={{ px: 2, pb: 2 }}>
        <Typography variant="h6" color="primary" gutterBottom>
          {t('common.navigation')}
        </Typography>
      </Box>

      <List>
        {/* Main Navigation */}
        {mainNavigation.map((item) => (
          <ListItem key={item.path} disablePadding>
            <ListItemButton onClick={() => onNavigationClick(item.path)}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}

        <Divider />

        {/* About & Info */}
        <ListItem>
          <ListItemText
            primary={t('navigation.about')}
            primaryTypographyProps={{ variant: 'subtitle2', color: 'text.secondary' }}
          />
        </ListItem>
        {aboutNavigation.map((item) => (
          <ListItem key={item.path} disablePadding sx={{ pl: 2 }}>
            <ListItemButton onClick={() => onNavigationClick(item.path)}>
              <ListItemIcon sx={{ minWidth: 36 }}>{item.icon}</ListItemIcon>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}

        <Divider />

        {/* Content */}
        <ListItem>
          <ListItemText
            primary={t('navigation.content')}
            primaryTypographyProps={{ variant: 'subtitle2', color: 'text.secondary' }}
          />
        </ListItem>
        {contentNavigation.map((item) => (
          <ListItem key={item.path} disablePadding sx={{ pl: 2 }}>
            <ListItemButton onClick={() => onNavigationClick(item.path)}>
              <ListItemIcon sx={{ minWidth: 36 }}>{item.icon}</ListItemIcon>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}

        {isAuthenticated && (
          <>
            <Divider />
            {/* Account Section */}
            <ListItem>
              <ListItemText
                primary={t('common.account')}
                primaryTypographyProps={{ variant: 'subtitle2', color: 'text.secondary' }}
              />
            </ListItem>
            {accountNavigation.map((item) => (
              <ListItem key={item.path} disablePadding sx={{ pl: 2 }}>
                <ListItemButton onClick={() => onNavigationClick(item.path)}>
                  <ListItemIcon sx={{ minWidth: 36 }}>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.label} />
                </ListItemButton>
              </ListItem>
            ))}
            <ListItem disablePadding sx={{ pl: 2 }}>
              <ListItemButton onClick={onLogoutClick}>
                <ListItemIcon sx={{ minWidth: 36 }}><LogoutIcon /></ListItemIcon>
                <ListItemText primary={t('common.logout')} />
              </ListItemButton>
            </ListItem>
          </>
        )}
      </List>
    </Box>
  );
};

export default HeaderMobileDrawer;

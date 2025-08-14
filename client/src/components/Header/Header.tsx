import React from 'react';
import {
  AppBar,
  Toolbar,
  Button,
  Stack,
  Avatar,
  Menu,
  MenuItem,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Box,
  Typography,
  useTheme,
  useMediaQuery,
  MenuList,
  ListItemAvatar,
  Chip
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import MailIcon from '@mui/icons-material/Mail';
import ArticleIcon from '@mui/icons-material/Article';
import BusinessIcon from '@mui/icons-material/Business';
import PersonIcon from '@mui/icons-material/Person';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';
import HelpIcon from '@mui/icons-material/Help';
import MapIcon from '@mui/icons-material/Map';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SettingsIcon from '@mui/icons-material/Settings';
import QuizIcon from '@mui/icons-material/Quiz';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout, User } from '../../slice/authSlice';
import { RootState } from '../../store';
import { ThemeToggle } from '../ThemeToggle';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import { useTranslation } from 'react-i18next';

const Header: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isTablet = useMediaQuery(theme.breakpoints.down('lg'));

  const { user, isAuthenticated } = useSelector((state: RootState) => state.auth) as { user: User | null; isAuthenticated: boolean };

  // State for mobile drawer
  const [mobileOpen, setMobileOpen] = React.useState(false);

  // State for dropdown menus
  const [accountAnchorEl, setAccountAnchorEl] = React.useState<null | HTMLElement>(null);
  const [navigationAnchorEl, setNavigationAnchorEl] = React.useState<null | HTMLElement>(null);
  const [resourcesAnchorEl, setResourcesAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleMobileDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleAccountMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAccountAnchorEl(event.currentTarget);
  };

  const handleNavigationMenu = (event: React.MouseEvent<HTMLElement>) => {
    setNavigationAnchorEl(event.currentTarget);
  };

  const handleResourcesMenu = (event: React.MouseEvent<HTMLElement>) => {
    setResourcesAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAccountAnchorEl(null);
    setNavigationAnchorEl(null);
    setResourcesAnchorEl(null);
  };

  const handleLogout = () => {
    dispatch(logout());
    handleClose();
    setMobileOpen(false);
    navigate('/login');
  };

  const handleNavigation = (path: string) => {
    navigate(path);
    handleClose();
    setMobileOpen(false);
  };

  // Navigation items grouped by category
  const mainNavigation = [
    { label: t('common.home'), path: '/', icon: <HomeIcon /> },
    { label: t('navigation.search'), path: '/search', icon: <SearchIcon /> },
  ];

  const aboutNavigation = [
    { label: t('navigation.about'), path: '/about', icon: <InfoIcon /> },
    { label: t('navigation.contact'), path: '/contact', icon: <MailIcon /> },
    { label: t('navigation.faq'), path: '/faq', icon: <HelpIcon /> },
    { label: t('navigation.sitemap'), path: '/sitemap', icon: <MapIcon /> },
  ];

  const contentNavigation = [
    { label: t('navigation.articles'), path: '/articles', icon: <ArticleIcon /> },
    { label: t('navigation.resources'), path: '/resources', icon: <BusinessIcon /> },
    { label: t('navigation.quiz'), path: '/quiz', icon: <QuizIcon /> },
  ];

  const accountNavigation = [
    { label: t('navigation.dashboard'), path: '/dashboard', icon: <DashboardIcon />, requiresAuth: true },
    { label: 'Admin', path: '/admin', icon: <AdminPanelSettingsIcon />, requiresAuth: true },
    { label: t('common.account'), path: '/account', icon: <AccountCircleIcon />, requiresAuth: true },
  ];

  // Mobile drawer content
  const mobileDrawerContent = (
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
            <ListItemButton onClick={() => handleNavigation(item.path)}>
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
            <ListItemButton onClick={() => handleNavigation(item.path)}>
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
            <ListItemButton onClick={() => handleNavigation(item.path)}>
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
                <ListItemButton onClick={() => handleNavigation(item.path)}>
                  <ListItemIcon sx={{ minWidth: 36 }}>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.label} />
                </ListItemButton>
              </ListItem>
            ))}
            <ListItem disablePadding sx={{ pl: 2 }}>
              <ListItemButton onClick={handleLogout}>
                <ListItemIcon sx={{ minWidth: 36 }}><LogoutIcon /></ListItemIcon>
                <ListItemText primary={t('common.logout')} />
              </ListItemButton>
            </ListItem>
          </>
        )}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="static"
        color="default"
        elevation={1}
        sx={{
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        }}
      >
        <Toolbar sx={{ px: { xs: 1, sm: 2 } }}>
          {/* Mobile Menu Button */}
          {isMobile && (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleMobileDrawerToggle}
              sx={{ mr: 1 }}
            >
              <MenuIcon />
            </IconButton>
          )}

          {/* Logo/Brand */}
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 0,
              mr: { xs: 1, sm: 3 },
              cursor: 'pointer',
              fontWeight: 'bold'
            }}
            onClick={() => navigate('/')}
          >
            {t('common.brand')}
          </Typography>

          {/* Desktop Navigation */}
          {!isMobile && (
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
                  onClick={() => handleNavigation(item.path)}
                  size="small"
                  sx={{ minWidth: 'auto', px: 1 }}
                >
                  {item.label}
                </Button>
              ))}

              {/* About & Info Dropdown */}
              <Button
                endIcon={<ExpandMoreIcon />}
                onClick={handleNavigationMenu}
                size="small"
                sx={{ minWidth: 'auto', px: 1 }}
              >
                {t('navigation.about')}
              </Button>

              {/* Content Dropdown */}
              <Button
                endIcon={<ExpandMoreIcon />}
                onClick={handleResourcesMenu}
                size="small"
                sx={{ minWidth: 'auto', px: 1 }}
              >
                {t('navigation.content')}
              </Button>
            </Stack>
          )}

          {/* Right Side Controls */}
          <Stack
            direction="row"
            spacing={1}
            sx={{ alignItems: 'center' }}
          >
            <LanguageSwitcher variant="dropdown" size="small" />
            <ThemeToggle />

            {isAuthenticated ? (
              <>
                {/* Account Dropdown for Desktop */}
                {!isMobile && (
                  <>
                    <Button
                      startIcon={<PersonIcon />}
                      endIcon={<ExpandMoreIcon />}
                      onClick={handleAccountMenu}
                      variant="outlined"
                      size="small"
                    >
                      {user?.name || t('common.account')}
                    </Button>
                  </>
                )}

                {/* Avatar for Mobile */}
                {isMobile && (
                  <Avatar
                    sx={{
                      cursor: 'pointer',
                      bgcolor: 'primary.main',
                      width: 32,
                      height: 32,
                    }}
                    onClick={handleAccountMenu}
                  >
                    {user?.name?.charAt(0)?.toUpperCase() || 'U'}
                  </Avatar>
                )}
              </>
            ) : (
              <>
                <Button
                  startIcon={<LoginIcon />}
                  onClick={() => navigate('/login')}
                  variant="outlined"
                  size="small"
                  sx={{ display: { xs: 'none', sm: 'flex' } }}
                >
                  {t('pages.login.title')}
                </Button>
                <Button
                  onClick={() => navigate('/register')}
                  variant="contained"
                  size="small"
                  sx={{ display: { xs: 'none', sm: 'flex' } }}
                >
                  {t('pages.register.title')}
                </Button>
              </>
            )}
          </Stack>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        anchor="left"
        open={mobileOpen}
        onClose={handleMobileDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 280 },
        }}
      >
        {mobileDrawerContent}
      </Drawer>

      {/* Desktop Dropdown Menus */}

      {/* About & Info Menu */}
      <Menu
        anchorEl={navigationAnchorEl}
        open={Boolean(navigationAnchorEl)}
        onClose={handleClose}
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
          <MenuItem key={item.path} onClick={() => handleNavigation(item.path)}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.label} />
          </MenuItem>
        ))}
      </Menu>

      {/* Content Menu */}
      <Menu
        anchorEl={resourcesAnchorEl}
        open={Boolean(resourcesAnchorEl)}
        onClose={handleClose}
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
          <MenuItem key={item.path} onClick={() => handleNavigation(item.path)}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.label} />
          </MenuItem>
        ))}
      </Menu>

      {/* Account Menu */}
      <Menu
        anchorEl={accountAnchorEl}
        open={Boolean(accountAnchorEl)}
        onClose={handleClose}
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
          <MenuItem key={item.path} onClick={() => handleNavigation(item.path)}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.label} />
          </MenuItem>
        ))}
        <Divider />
        <MenuItem onClick={handleLogout}>
          <ListItemIcon><LogoutIcon /></ListItemIcon>
          <ListItemText primary={t('common.logout')} />
        </MenuItem>
      </Menu>
    </>
  );
};

export default Header;
import React from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  Stack,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../../slice/authSlice';
import { ThemeToggle } from '../ThemeToggle';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';

// Import modular components
import HeaderBrand from './HeaderBrand';
import HeaderNavigation from './HeaderNavigation';
import HeaderUserControls from './HeaderUserControls';
import HeaderMobileDrawer from './HeaderMobileDrawer';
import HeaderDropdownMenus from './HeaderDropdownMenus';

const Header: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

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
          <HeaderBrand />

          {/* Desktop Navigation */}
          {!isMobile && (
            <HeaderNavigation
              onNavigationClick={handleNavigation}
              onAboutMenuClick={handleNavigationMenu}
              onContentMenuClick={handleResourcesMenu}
            />
          )}

          {/* Right Side Controls */}
          <Stack
            direction="row"
            spacing={1}
            sx={{ alignItems: 'center' }}
          >
            <LanguageSwitcher variant="dropdown" size="small" />
            <ThemeToggle />
            <HeaderUserControls onAccountMenuClick={handleAccountMenu} />
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
        <HeaderMobileDrawer
          onNavigationClick={handleNavigation}
          onLogoutClick={handleLogout}
        />
      </Drawer>

      {/* Desktop Dropdown Menus */}
      <HeaderDropdownMenus
        navigationAnchorEl={navigationAnchorEl}
        resourcesAnchorEl={resourcesAnchorEl}
        accountAnchorEl={accountAnchorEl}
        onClose={handleClose}
        onNavigationClick={handleNavigation}
        onLogoutClick={handleLogout}
      />
    </>
  );
};

export default Header;
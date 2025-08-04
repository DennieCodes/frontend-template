import React from 'react';
import { AppBar, Toolbar, Button, Stack, Avatar, Menu, MenuItem, Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import MailIcon from '@mui/icons-material/Mail';
import PersonIcon from '@mui/icons-material/Person';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout, User } from '../../slice/authSlice';
import { RootState } from '../../store';
import { ThemeToggle } from '../ThemeToggle';

const Header: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, isAuthenticated } = useSelector((state: RootState) => state.auth) as { user: User | null; isAuthenticated: boolean };
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    dispatch(logout());
    handleClose();
    navigate('/login');
  };

  const handleDashboard = () => {
    handleClose();
    navigate('/dashboard');
  };

  const handleAdmin = () => {
    handleClose();
    navigate('/admin');
  };

  const handleAccount = () => {
    handleClose();
    navigate('/account');
  };

  return (
    <AppBar
      position="static"
      color="default"
      elevation={1}
      sx={{
        padding: '0 16px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Toolbar disableGutters>
        <Stack
          direction="row"
          spacing={2}
          sx={{
            width: '100%',
            alignItems: 'center',
            gap: { xs: 1, sm: 2 },
          }}
          justifyContent="space-between"
        >
          <Stack
            direction="row"
            spacing={2}
            sx={{
              alignItems: 'center',
              gap: { xs: 1, sm: 2 },
            }}
          >
            <Button startIcon={<HomeIcon />} onClick={() => navigate('/')}>Home</Button>
            <Button startIcon={<InfoIcon />} onClick={() => navigate('/about')}>About</Button>
            <Button startIcon={<MailIcon />} onClick={() => navigate('/contact')}>Contact</Button>
            {/* <Button startIcon={<PaletteIcon />} onClick={() => navigate('/theme-demo')}>Theme Demo</Button> */}
          </Stack>

          <Stack
            direction="row"
            spacing={2}
            sx={{
              alignItems: 'center',
              gap: { xs: 1, sm: 2 },
            }}
          >
            <ThemeToggle />

            {isAuthenticated ? (
              <>
                <Button
                  startIcon={<PersonIcon />}
                  onClick={() => navigate('/dashboard')}
                  variant="outlined"
                >
                  Dashboard
                </Button>
                <Button
                  startIcon={<AdminPanelSettingsIcon />}
                  onClick={() => navigate('/admin')}
                  variant="outlined"
                >
                  Admin
                </Button>
                <Button
                  startIcon={<AccountCircleIcon />}
                  onClick={() => navigate('/account')}
                  variant="outlined"
                >
                  Account
                </Button>
                <Avatar
                  sx={{
                    cursor: 'pointer',
                    bgcolor: 'primary.main',
                    width: 40,
                    height: 40,
                  }}
                  onClick={handleMenu}
                >
                  {user?.name?.charAt(0)?.toUpperCase() || 'U'}
                </Avatar>
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
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
                  <MenuItem onClick={handleDashboard}>
                    <PersonIcon sx={{ mr: 1 }} />
                    Dashboard
                  </MenuItem>
                  <MenuItem onClick={handleAdmin}>
                    <AdminPanelSettingsIcon sx={{ mr: 1 }} />
                    Admin
                  </MenuItem>
                  <MenuItem onClick={handleAccount}>
                    <AccountCircleIcon sx={{ mr: 1 }} />
                    Account
                  </MenuItem>
                  <MenuItem onClick={handleLogout}>
                    <LogoutIcon sx={{ mr: 1 }} />
                    Logout
                  </MenuItem>
                </Menu>
              </>
            ) : (
              <>
                <Button
                  startIcon={<LoginIcon />}
                  onClick={() => navigate('/login')}
                  variant="outlined"
                >
                  Login
                </Button>
                <Button
                  onClick={() => navigate('/register')}
                  variant="contained"
                >
                  Sign Up
                </Button>
              </>
            )}
          </Stack>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
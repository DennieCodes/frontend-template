import React from 'react';
import { AppBar, Toolbar, Button, Stack } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import MailIcon from '@mui/icons-material/Mail';
// import PaletteIcon from '@mui/icons-material/Palette';
import { useNavigate } from 'react-router-dom';
import { ThemeToggle } from '../ThemeToggle';

const Header: React.FC = () => {
  const navigate = useNavigate();

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

          <ThemeToggle />
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
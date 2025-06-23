import { useState } from 'react';
import { AppBar, Toolbar, Button, Stack } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import MailIcon from '@mui/icons-material/Mail';
import { useStyles } from './Header.Styles';
import { useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const styles = useStyles();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <AppBar position="static" className={styles.header} color="default" elevation={1}>
      <Toolbar>
        <Stack direction="row" spacing={2} sx={{ width: '100%' }} justifyContent="flex-end" alignItems="center">
          <Button startIcon={<HomeIcon />} onClick={() => navigate('/')}>Home</Button>
          <Button startIcon={<InfoIcon />} onClick={() => navigate('/about')}>About</Button>
          <Button startIcon={<MailIcon />} onClick={() => navigate('/contact')}>Contact</Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
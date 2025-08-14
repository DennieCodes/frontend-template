import React from 'react';
import {
  Button,
  Stack,
  Avatar,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import LoginIcon from '@mui/icons-material/Login';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { User } from '../../slice/authSlice';
import { RootState } from '../../store';
import { useTranslation } from 'react-i18next';

interface HeaderUserControlsProps {
  onAccountMenuClick: (event: React.MouseEvent<HTMLElement>) => void;
}

const HeaderUserControls: React.FC<HeaderUserControlsProps> = ({
  onAccountMenuClick,
}) => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const { user, isAuthenticated } = useSelector((state: RootState) => state.auth) as { user: User | null; isAuthenticated: boolean };

  return (
    <Stack
      direction="row"
      spacing={1}
      sx={{ alignItems: 'center' }}
    >
      {isAuthenticated ? (
        <>
          {/* Account Dropdown for Desktop */}
          {!isMobile && (
            <Button
              startIcon={<PersonIcon />}
              endIcon={<ExpandMoreIcon />}
              onClick={onAccountMenuClick}
              variant="outlined"
              size="small"
            >
              {user?.name || t('common.account')}
            </Button>
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
              onClick={onAccountMenuClick}
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
  );
};

export default HeaderUserControls;

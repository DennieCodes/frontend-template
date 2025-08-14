import React from 'react';
import { Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface HeaderBrandProps {
  variant?: 'h6' | 'h5' | 'h4' | 'h3' | 'h2' | 'h1';
}

const HeaderBrand: React.FC<HeaderBrandProps> = ({ variant = 'h6' }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <Typography
      variant={variant}
      component="div"
      sx={{
        flexGrow: 0,
        mr: { xs: 1, sm: 3 },
        cursor: 'pointer',
        fontWeight: 'bold',
        color: 'primary.main',
        '&:hover': {
          color: 'primary.dark',
          textDecoration: 'underline',
        },
        transition: 'color 0.2s ease-in-out, text-decoration 0.2s ease-in-out',
      }}
      onClick={() => navigate('/')}
      title={t('common.home')}
    >
      {t('common.brand')}
    </Typography>
  );
};

export default HeaderBrand;

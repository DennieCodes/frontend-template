import React from 'react';
import {
  Container,
  Typography,
  Box,
  Breadcrumbs,
  Link,
} from '@mui/material';
import {
  Home as HomeIcon,
  Assignment as SurveyIcon,
} from '@mui/icons-material';
import { SurveyHeaderProps } from './types';
import { LAYOUT_CONSTANTS, layoutUtils } from '../../constants/layout';

const SurveyHeader: React.FC<SurveyHeaderProps> = ({ title, subtitle }) => {
  return (
    <Box sx={{
      backgroundColor: 'background.paper',
      borderBottom: 1,
      borderColor: 'divider',
      py: 3,
    }}>
      <Container maxWidth="lg">
        <Breadcrumbs sx={{ mb: 2 }}>
          <Link href="/" color="inherit" sx={{ display: 'flex', alignItems: 'center' }}>
            <HomeIcon sx={{ mr: 0.5 }} fontSize="small" />
            Home
          </Link>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <SurveyIcon sx={{ mr: 0.5 }} fontSize="small" />
            <Typography color="text.primary">Survey</Typography>
          </Box>
        </Breadcrumbs>

        <Typography variant="h3" component="h1" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 600 }}>
          {subtitle}
        </Typography>
      </Container>
    </Box>
  );
};

export default SurveyHeader;

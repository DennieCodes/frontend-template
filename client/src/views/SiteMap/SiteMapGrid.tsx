import React from 'react';
import { Grid } from '@mui/material';
import SiteMapSectionCard from './SiteMapSectionCard';
import { SiteMapGridProps } from './types';
import { LAYOUT_CONSTANTS, layoutUtils } from '../../constants/layout';

const SiteMapGrid: React.FC<SiteMapGridProps> = ({ sections }) => {
  return (
    <Grid container spacing={LAYOUT_CONSTANTS.GRID.SPACING.LG} sx={{
      maxWidth: layoutUtils.getContentWidth('wide'),
      mx: 'auto',
    }}>
      {sections.map((section, sectionIndex) => (
        <Grid item xs={12} md={6} key={sectionIndex}>
          <SiteMapSectionCard section={section} />
        </Grid>
      ))}
    </Grid>
  );
};

export default SiteMapGrid;

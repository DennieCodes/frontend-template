import React from 'react';
import { Box } from '@mui/material';
import SiteMapHeader from './SiteMapHeader';
import SiteMapGrid from './SiteMapGrid';
import SiteMapFooter from './SiteMapFooter';
import { siteMapData } from './mockData';
import { LAYOUT_CONSTANTS, layoutUtils } from '../../constants/layout';

const SiteMapPage: React.FC = () => {
  return (
    <Box sx={{
      ...layoutUtils.getContentLayout('centered'),
      py: LAYOUT_CONSTANTS.SPACING.XL,
    }}>
      {/* Header */}
      <SiteMapHeader
        title="Site Map"
        subtitle="Complete overview of all pages and sections available on our platform"
      />

      {/* Site Map Grid */}
      <SiteMapGrid sections={siteMapData} />

      {/* Footer */}
      <SiteMapFooter
        helpText="Can't find what you're looking for?"
        supportText="Check our FAQ page or contact our support team for assistance"
      />
    </Box>
  );
};

export default SiteMapPage;

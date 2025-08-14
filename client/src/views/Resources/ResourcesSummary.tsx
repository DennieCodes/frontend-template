import React from 'react';
import { Box, Typography } from '@mui/material';
import { ResourcesSummaryProps } from './types';
import { LAYOUT_CONSTANTS, layoutUtils } from '../../constants/layout';

const ResourcesSummary: React.FC<ResourcesSummaryProps> = ({
  filteredCount,
  totalCount,
  hasActiveFilters,
}) => {
  return (
    <Box sx={{
      ...layoutUtils.getContentLayout('centered'),
      mb: LAYOUT_CONSTANTS.SPACING.MD,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    }}>
      <Typography variant="body1" color="text.secondary">
        Showing {filteredCount} of {totalCount} resources
      </Typography>
      {hasActiveFilters && (
        <Typography variant="body2" color="primary">
          Filtered results
        </Typography>
      )}
    </Box>
  );
};

export default ResourcesSummary;

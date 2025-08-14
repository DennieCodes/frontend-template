import React from 'react';
import { Box, Paper, Typography } from '@mui/material';
import ResourceGrid from '../../components/ResourceGrid';
import { ResourcesResultsProps } from './types';
import { LAYOUT_CONSTANTS, layoutUtils } from '../../constants/layout';

const ResourcesResults: React.FC<ResourcesResultsProps> = ({
  filteredResources,
  onResourceClick,
}) => {
  return (
    <Box sx={{
      ...layoutUtils.getContentLayout('full-width'),
    }}>
      {filteredResources.length > 0 ? (
        <Box sx={{
          maxWidth: layoutUtils.getContentWidth('wide'),
          mx: 'auto',
        }}>
          <ResourceGrid
            resources={filteredResources}
            columns={3}
            spacing={LAYOUT_CONSTANTS.GRID.SPACING.MD}
            variant="default"
            onResourceClick={onResourceClick}
          />
        </Box>
      ) : (
        <Box sx={{
          maxWidth: layoutUtils.getContentWidth('standard'),
          mx: 'auto',
        }}>
          <Paper sx={{ p: LAYOUT_CONSTANTS.SPACING.LG, textAlign: 'center' }}>
            <Typography variant="h6" color="text.secondary" gutterBottom>
              No resources found
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Try adjusting your search criteria or filters
            </Typography>
          </Paper>
        </Box>
      )}
    </Box>
  );
};

export default ResourcesResults;

import React from 'react';
import Grid from '@mui/material/GridLegacy';
import ResourceCard from '../ResourceCard';
import { ResourceGridProps } from '../../types/resource';
import { layoutUtils, LAYOUT_CONSTANTS } from '../../constants/layout';

const ResourceGrid: React.FC<ResourceGridProps> = ({
  resources,
  columns = 3,
  _spacing = 3,
  variant = 'default',
  onResourceClick,
}) => {
  const getGridSize = () => {
    return layoutUtils.getGridColumns(columns);
  };

  return (
    <Grid container spacing={LAYOUT_CONSTANTS.GRID.SPACING.MD}>
      {resources.map((resource) => (
        <Grid
          key={resource.id}
          {...getGridSize()}
          sx={layoutUtils.getGridItemStyles()}
        >
          <ResourceCard
            resource={resource}
            variant={variant}
            onClick={onResourceClick}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default ResourceGrid;
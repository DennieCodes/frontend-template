import React from 'react';
import { Grid } from '@mui/material';
import ResourceCard from '../ResourceCard';
import { ResourceGridProps } from '../../types/resource';

const ResourceGrid: React.FC<ResourceGridProps> = ({
  resources,
  columns = 3,
  spacing = 3,
  variant = 'default',
  onResourceClick,
}) => {
  const getGridSize = () => {
    switch (columns) {
      case 1:
        return { xs: 12 };
      case 2:
        return { xs: 12, sm: 6 };
      case 3:
        return { xs: 12, sm: 6, md: 4 };
      case 4:
        return { xs: 12, sm: 6, md: 3 };
      case 6:
        return { xs: 12, sm: 6, md: 4, lg: 2 };
      default:
        return { xs: 12, sm: 6, md: 4 };
    }
  };

  return (
    <Grid container spacing={spacing}>
      {resources.map((resource) => (
        <Grid item key={resource.id} {...getGridSize()}>
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
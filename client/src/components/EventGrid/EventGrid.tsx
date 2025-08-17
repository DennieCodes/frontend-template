import React from 'react';
import Grid from '@mui/material/GridLegacy';
import Box from '@mui/material/Box';
import EventCard from '../EventCard';
import { EventGridProps } from '../../types/event';
import { layoutUtils, LAYOUT_CONSTANTS } from '../../constants/layout';

const EventGrid: React.FC<EventGridProps> = ({
  events,
  columns = 3,
  spacing = 3,
  variant = 'default',
  onEventClick,
}) => {
  const getGridSize = () => {
    return layoutUtils.getGridColumns(columns);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Grid container spacing={LAYOUT_CONSTANTS.GRID.SPACING.MD}>
        {events.map((event) => (
          <Grid
            key={event.id}
            {...getGridSize()}
            sx={layoutUtils.getGridItemStyles()}
          >
            <EventCard
              event={event}
              variant={variant}
              onClick={onEventClick}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default EventGrid;

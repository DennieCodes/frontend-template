import { Event, EventFilters } from '../../types/event';

export interface EventDirectoryProps {
  events?: Event[];
  categories?: string[];
  title?: string;
  subtitle?: string;
  showFilters?: boolean;
  onEventClick?: (event: Event) => void;
}

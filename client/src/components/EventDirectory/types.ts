import { BaseEvent, BaseCategory } from '../../types/common';

export interface EventDirectoryProps {
  events?: BaseEvent[];
  categories?: BaseCategory[];
  title?: string;
  subtitle?: string;
  showFilters?: boolean;
  onEventClick?: (event: BaseEvent) => void;
}

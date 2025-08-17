export interface EventDirectoryProps {
  events?: any[];
  categories?: any[];
  title?: string;
  subtitle?: string;
  showFilters?: boolean;
  onEventClick?: (event: any) => void;
}

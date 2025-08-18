import { Resource } from '../../types/resource';

export interface ResourceDirectoryProps {
  resources?: Resource[];
  categories?: string[];
  onResourceClick?: (resource: Resource) => void;
}

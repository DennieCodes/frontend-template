import { BaseResource, BaseCategory } from '../../types/common';

export interface ResourceDirectoryProps {
  resources?: BaseResource[];
  categories?: BaseCategory[];
  onResourceClick?: (resource: BaseResource) => void;
}

import { BaseProduct, BaseCategory } from '../../types/common';

export interface ProductDirectoryProps {
  products?: BaseProduct[];
  categories?: BaseCategory[];
  title?: string;
  subtitle?: string;
  showFilters?: boolean;
  onProductClick?: (product: BaseProduct) => void;
}

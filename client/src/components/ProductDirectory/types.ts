import { Product } from '../../types/product';

export interface ProductDirectoryProps {
  products?: Product[];
  categories?: string[];
  title?: string;
  subtitle?: string;
  showFilters?: boolean;
  onProductClick?: (product: Product) => void;
}

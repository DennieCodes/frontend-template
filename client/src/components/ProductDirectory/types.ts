export interface ProductDirectoryProps {
  products?: any[];
  categories?: any[];
  title?: string;
  subtitle?: string;
  showFilters?: boolean;
  onProductClick?: (product: any) => void;
}

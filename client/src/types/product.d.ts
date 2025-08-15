export interface Product {
  id: string;
  name: string;
  description: string;
  shortDescription: string;
  price: number;
  originalPrice?: number;
  currency: string;
  category: string;
  subcategory?: string;
  brand: string;
  images: string[];
  thumbnail: string;
  rating: number;
  reviewCount: number;
  inStock: boolean;
  stockQuantity?: number;
  tags: string[];
  features: string[];
  specifications: Record<string, string>;
  variants?: ProductVariant[];
  featured?: boolean;
  onSale?: boolean;
  discountPercentage?: number;
  createdAt: string;
  updatedAt: string;
}

export interface ProductVariant {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  inStock: boolean;
  stockQuantity?: number;
  attributes: Record<string, string>;
}

export interface ProductCardProps {
  product: Product;
  variant?: 'default' | 'featured' | 'compact';
  onClick?: (product: Product) => void;
}

export interface ProductGridProps {
  products: Product[];
  columns?: number;
  spacing?: number;
  variant?: 'default' | 'featured' | 'compact';
  onProductClick?: (product: Product) => void;
}

export interface ProductDirectoryProps {
  products: Product[];
  title?: string;
  subtitle?: string;
  showFilters?: boolean;
  onProductClick?: (product: Product) => void;
}

export interface ProductPageProps {
  product: Product;
  onAddToCart?: (product: Product, quantity: number) => void;
  onAddToWishlist?: (product: Product) => void;
}

export interface ProductFilters {
  searchTerm: string;
  selectedCategory: string;
  selectedBrand: string;
  selectedTags: string[];
  priceRange: [number, number];
  inStockOnly: boolean;
  sortBy: 'name' | 'price' | 'rating' | 'newest' | 'popular';
  sortOrder: 'asc' | 'desc';
}

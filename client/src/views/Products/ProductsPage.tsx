import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ProductDirectory from '../../components/ProductDirectory';
import { sampleProducts } from './mockData';
import { Product } from '../../types/product';

const ProductsPage: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleProductClick = (product: Product) => {
    navigate(`/products/${product.id}`);
  };

  return (
    <ProductDirectory
      products={sampleProducts}
      title={t('pages.products.title', 'Our Products')}
      subtitle={t('pages.products.subtitle', 'Discover our amazing collection of high-quality products')}
      showFilters={true}
      onProductClick={handleProductClick}
    />
  );
};

export default ProductsPage;

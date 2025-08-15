import { Product } from '../../types/product';

export const sampleProducts: Product[] = [
  {
    id: '1',
    name: 'Wireless Bluetooth Headphones',
    description: 'Premium wireless headphones with noise cancellation, 30-hour battery life, and crystal-clear sound quality. Perfect for music lovers and professionals alike.',
    shortDescription: 'Premium wireless headphones with noise cancellation',
    price: 199.99,
    originalPrice: 249.99,
    currency: 'USD',
    category: 'Electronics',
    subcategory: 'Audio',
    brand: 'SoundMaster',
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800',
      'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800',
      'https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=800'
    ],
    thumbnail: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400',
    rating: 4.8,
    reviewCount: 1247,
    inStock: true,
    stockQuantity: 45,
    tags: ['wireless', 'bluetooth', 'noise-cancelling', 'audio', 'headphones'],
    features: [
      'Active Noise Cancellation',
      '30-hour battery life',
      'Quick charge (10 min = 5 hours)',
      'Built-in microphone',
      'Touch controls',
      'Water resistant'
    ],
    specifications: {
      'Driver Size': '40mm',
      'Frequency Response': '20Hz - 20kHz',
      'Impedance': '32 ohms',
      'Weight': '250g',
      'Connectivity': 'Bluetooth 5.0',
      'Battery Life': '30 hours'
    },
    featured: true,
    onSale: true,
    discountPercentage: 20,
    createdAt: '2024-01-15T10:00:00Z',
    updatedAt: '2024-01-20T14:30:00Z'
  },
  {
    id: '2',
    name: 'Smart Fitness Watch',
    description: 'Advanced fitness tracking with heart rate monitoring, GPS, sleep tracking, and 7-day battery life. Compatible with iOS and Android devices.',
    shortDescription: 'Advanced fitness tracking with heart rate monitoring',
    price: 299.99,
    currency: 'USD',
    category: 'Electronics',
    subcategory: 'Wearables',
    brand: 'FitTech',
    images: [
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800',
      'https://images.unsplash.com/photo-1544117519-31a4b719223d?w=800',
      'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=800'
    ],
    thumbnail: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400',
    rating: 4.6,
    reviewCount: 892,
    inStock: true,
    stockQuantity: 23,
    tags: ['fitness', 'smartwatch', 'health', 'tracking', 'wearable'],
    features: [
      'Heart rate monitoring',
      'GPS tracking',
      'Sleep analysis',
      '7-day battery life',
      'Water resistant (5ATM)',
      '50+ sport modes'
    ],
    specifications: {
      'Display': '1.4" AMOLED',
      'Battery Life': '7 days',
      'Water Resistance': '5ATM',
      'Weight': '45g',
      'Compatibility': 'iOS 12+, Android 6+',
      'Sensors': 'Heart rate, GPS, Accelerometer'
    },
    featured: false,
    onSale: false,
    createdAt: '2024-01-10T09:00:00Z',
    updatedAt: '2024-01-18T16:45:00Z'
  },
  {
    id: '3',
    name: 'Organic Cotton T-Shirt',
    description: 'Comfortable and sustainable organic cotton t-shirt. Available in multiple colors and sizes. Perfect for everyday wear.',
    shortDescription: 'Comfortable and sustainable organic cotton t-shirt',
    price: 29.99,
    originalPrice: 39.99,
    currency: 'USD',
    category: 'Clothing',
    subcategory: 'T-Shirts',
    brand: 'EcoWear',
    images: [
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800',
      'https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=800',
      'https://images.unsplash.com/photo-1562157873-818bc0726f68?w=800'
    ],
    thumbnail: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400',
    rating: 4.4,
    reviewCount: 567,
    inStock: true,
    stockQuantity: 120,
    tags: ['organic', 'cotton', 'sustainable', 'clothing', 't-shirt'],
    features: [
      '100% organic cotton',
      'Sustainable production',
      'Multiple colors available',
      'Sizes XS-XXL',
      'Machine washable',
      'Pre-shrunk fabric'
    ],
    specifications: {
      'Material': '100% Organic Cotton',
      'Weight': '180 gsm',
      'Fit': 'Regular',
      'Care': 'Machine wash cold',
      'Origin': 'Made in USA',
      'Certification': 'GOTS Certified'
    },
    variants: [
      {
        id: '3-1',
        name: 'White - Small',
        price: 29.99,
        inStock: true,
        stockQuantity: 25,
        attributes: { color: 'White', size: 'S' }
      },
      {
        id: '3-2',
        name: 'White - Medium',
        price: 29.99,
        inStock: true,
        stockQuantity: 30,
        attributes: { color: 'White', size: 'M' }
      },
      {
        id: '3-3',
        name: 'Black - Large',
        price: 29.99,
        inStock: true,
        stockQuantity: 20,
        attributes: { color: 'Black', size: 'L' }
      }
    ],
    featured: false,
    onSale: true,
    discountPercentage: 25,
    createdAt: '2024-01-05T11:00:00Z',
    updatedAt: '2024-01-22T10:15:00Z'
  },
  {
    id: '4',
    name: 'Stainless Steel Water Bottle',
    description: 'Insulated stainless steel water bottle that keeps drinks cold for 24 hours or hot for 12 hours. BPA-free and eco-friendly.',
    shortDescription: 'Insulated stainless steel water bottle',
    price: 24.99,
    currency: 'USD',
    category: 'Home & Garden',
    subcategory: 'Kitchen',
    brand: 'HydroLife',
    images: [
      'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=800',
      'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800',
      'https://images.unsplash.com/photo-1589365278144-c9e705f843ba?w=800'
    ],
    thumbnail: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400',
    rating: 4.7,
    reviewCount: 2341,
    inStock: true,
    stockQuantity: 89,
    tags: ['water-bottle', 'insulated', 'stainless-steel', 'eco-friendly', 'bpa-free'],
    features: [
      '24-hour cold retention',
      '12-hour hot retention',
      'BPA-free construction',
      'Leak-proof design',
      'Easy-clean wide mouth',
      'Multiple colors available'
    ],
    specifications: {
      'Capacity': '32 oz (946ml)',
      'Material': '18/8 Stainless Steel',
      'Insulation': 'Double-wall vacuum',
      'Weight': '450g',
      'Dimensions': '3.5" x 11.5"',
      'Warranty': 'Lifetime'
    },
    featured: true,
    onSale: false,
    createdAt: '2024-01-12T08:30:00Z',
    updatedAt: '2024-01-19T13:20:00Z'
  },
  {
    id: '5',
    name: 'Wireless Charging Pad',
    description: 'Fast wireless charging pad compatible with all Qi-enabled devices. Sleek design with LED indicator and overcharge protection.',
    shortDescription: 'Fast wireless charging pad for Qi-enabled devices',
    price: 49.99,
    originalPrice: 69.99,
    currency: 'USD',
    category: 'Electronics',
    subcategory: 'Charging',
    brand: 'PowerTech',
    images: [
      'https://images.unsplash.com/photo-1609592806598-04c4d7e5c1e8?w=800',
      'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800',
      'https://images.unsplash.com/photo-1609592806598-04c4d7e5c1e8?w=800'
    ],
    thumbnail: 'https://images.unsplash.com/photo-1609592806598-04c4d7e5c1e8?w=400',
    rating: 4.5,
    reviewCount: 756,
    inStock: true,
    stockQuantity: 34,
    tags: ['wireless-charging', 'qi', 'fast-charging', 'electronics', 'charging-pad'],
    features: [
      '15W fast wireless charging',
      'Qi-certified compatibility',
      'LED charging indicator',
      'Overcharge protection',
      'Non-slip surface',
      'Compact design'
    ],
    specifications: {
      'Output Power': '15W Max',
      'Input': '5V/2A, 9V/1.67A',
      'Efficiency': '85%',
      'Dimensions': '3.5" x 3.5" x 0.3"',
      'Weight': '120g',
      'Compatibility': 'All Qi-enabled devices'
    },
    featured: false,
    onSale: true,
    discountPercentage: 29,
    createdAt: '2024-01-08T14:00:00Z',
    updatedAt: '2024-01-21T09:30:00Z'
  },
  {
    id: '6',
    name: 'Yoga Mat Premium',
    description: 'Non-slip yoga mat made from eco-friendly TPE material. Perfect thickness for comfort and stability during practice.',
    shortDescription: 'Non-slip yoga mat made from eco-friendly TPE material',
    price: 79.99,
    currency: 'USD',
    category: 'Sports & Fitness',
    subcategory: 'Yoga',
    brand: 'ZenFlow',
    images: [
      'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
      'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800'
    ],
    thumbnail: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400',
    rating: 4.9,
    reviewCount: 432,
    inStock: true,
    stockQuantity: 67,
    tags: ['yoga', 'mat', 'non-slip', 'eco-friendly', 'fitness', 'tpe'],
    features: [
      '6mm thickness for comfort',
      'Non-slip surface',
      'Eco-friendly TPE material',
      'Lightweight and portable',
      'Includes carrying strap',
      'Alignment lines'
    ],
    specifications: {
      'Material': 'TPE (Thermoplastic Elastomer)',
      'Thickness': '6mm',
      'Dimensions': '72" x 24" (183cm x 61cm)',
      'Weight': '2.2kg',
      'Surface': 'Non-slip textured',
      'Care': 'Wipe clean with damp cloth'
    },
    featured: true,
    onSale: false,
    createdAt: '2024-01-03T16:00:00Z',
    updatedAt: '2024-01-17T12:45:00Z'
  }
];

export const productCategories = [
  'Electronics',
  'Clothing',
  'Home & Garden',
  'Sports & Fitness',
  'Books',
  'Beauty & Health',
  'Toys & Games',
  'Automotive'
];

export const productBrands = [
  'SoundMaster',
  'FitTech',
  'EcoWear',
  'HydroLife',
  'PowerTech',
  'ZenFlow',
  'TechPro',
  'GreenLiving'
];

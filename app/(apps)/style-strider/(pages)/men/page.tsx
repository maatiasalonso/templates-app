'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { CollectionHeader } from '@/app/(apps)/style-strider/components/collection-header';
import { ProductCard } from '@/app/(apps)/style-strider/components/product-card';
import { FilterSidebar } from '@/app/(apps)/style-strider/components/filter-sidebar';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const menProducts = [
  {
    id: 'm1',
    name: 'Nike Air Max 270',
    price: 149.99,
    images: [
      '/images/style-strider/men/air-max-270-1.png',
      '/images/style-strider/men/air-max-270-2.png',
      '/images/style-strider/men/air-max-270-3.png',
      '/images/style-strider/men/air-max-270-4.png',
    ],
    colors: ['Black', 'White', 'Red'],
    sizes: ['7', '8', '9', '10', '11'],
  },
  {
    id: 'm2',
    name: 'Adidas Ultraboost 21',
    price: 179.99,
    images: [
      '/images/style-strider/men/adidas-ultraboost-21-1.png',
      '/images/style-strider/men/adidas-ultraboost-21-2.png',
      '/images/style-strider/men/adidas-ultraboost-21-3.png',
      '/images/style-strider/men/adidas-ultraboost-21-4.png',
    ],
    colors: ['Gray', 'Blue', 'Black'],
    sizes: ['7', '8', '9', '10', '11'],
  },
  {
    id: 'm3',
    name: 'Nike Sportswear Windrunner',
    price: 99.99,
    images: [
      '/images/style-strider/men/nike-windrunner-1.png',
      '/images/style-strider/men/nike-windrunner-2.png',
      '/images/style-strider/men/nike-windrunner-3.png',
      '/images/style-strider/men/nike-windrunner-4.png',
    ],
    colors: ['Black', 'Green'],
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: 'm4',
    name: 'Casual Sneakers',
    price: 89.99,
    images: [
      '/images/style-strider/men/sneaker-1.png',
      '/images/style-strider/men/sneaker-2.png',
      '/images/style-strider/men/sneaker-3.png',
      '/images/style-strider/men/sneaker-4.png',
    ],
    colors: ['White', 'Black', 'Red'],
    sizes: ['7', '8', '9', '10', '11'],
  },
  {
    id: 'm5',
    name: 'Adidas Essentials 3-Stripes Tracksuit',
    price: 129.99,
    images: [
      '/images/style-strider/men/adidas-tracksuit-1.png',
      '/images/style-strider/men/adidas-tracksuit-2.png',
      '/images/style-strider/men/adidas-tracksuit-3.png',
      '/images/style-strider/men/adidas-tracksuit-4.png',
      '/images/style-strider/men/adidas-tracksuit-1.png',
      '/images/style-strider/men/adidas-tracksuit-2.png',
      '/images/style-strider/men/adidas-tracksuit-3.png',
      '/images/style-strider/men/adidas-tracksuit-4.png',
    ],
    colors: ['Black', 'Navy'],
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: 'm6',
    name: 'Nike Club Fleece Hoodie',
    price: 69.99,
    images: [
      '/images/style-strider/men/nike-club-fleece-hoodie-1.png',
      '/images/style-strider/men/nike-club-fleece-hoodie-2.png',
      '/images/style-strider/men/nike-club-fleece-hoodie-3.png',
      '/images/style-strider/men/nike-club-fleece-hoodie-4.png',
    ],
    colors: ['Gray', 'Black', 'Blue'],
    sizes: ['S', 'M', 'L', 'XL'],
  },
];

export default function MenCollection() {
  const [filteredProducts, setFilteredProducts] = useState(menProducts);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('featured');

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleFilterChange = (filters: any) => {
    const filtered = menProducts.filter((product) => {
      const colorMatch =
        filters.colors.length === 0 ||
        filters.colors.some((color: string) => product.colors.includes(color));
      const sizeMatch =
        filters.sizes.length === 0 ||
        filters.sizes.some((size: string) => product.sizes.includes(size));
      const priceMatch =
        product.price >= filters.priceRange[0] &&
        product.price <= filters.priceRange[1];
      return colorMatch && sizeMatch && priceMatch;
    });
    setFilteredProducts(filtered);
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);
    const searched = menProducts.filter((product) =>
      product.name.toLowerCase().includes(term)
    );
    setFilteredProducts(searched);
  };

  const handleSort = (value: string) => {
    setSortOrder(value);
    const sorted = [...filteredProducts].sort((a, b) => {
      if (value === 'price-asc') return a.price - b.price;
      if (value === 'price-desc') return b.price - a.price;
      return 0;
    });
    setFilteredProducts(sorted);
  };

  return (
    <div className='container mx-auto px-4 py-12'>
      <CollectionHeader
        title="Men's Collection"
        description='Discover our latest styles for the modern man'
      />
      <div className='flex flex-col md:flex-row gap-8'>
        <FilterSidebar onFilterChange={handleFilterChange} />
        <div className='flex-1'>
          <div className='flex justify-between items-center mb-6'>
            <Input
              type='text'
              placeholder='Search products...'
              value={searchTerm}
              onChange={handleSearch}
              className='max-w-xs'
            />
            <Select onValueChange={handleSort} defaultValue={sortOrder}>
              <SelectTrigger className='w-[180px]'>
                <SelectValue placeholder='Sort by' />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='featured'>Featured</SelectItem>
                <SelectItem value='price-asc'>Price: Low to High</SelectItem>
                <SelectItem value='price-desc'>Price: High to Low</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <motion.div
            className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            role='region'
            aria-label='Product Collection'
          >
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))
            ) : (
              <div className='col-span-full text-center'>
                <p className='text-lg text-gray-500'>No products found.</p>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

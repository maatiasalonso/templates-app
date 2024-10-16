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

const performanceProducts = [
  {
    id: 'p1',
    name: 'Moisture-Wicking T-Shirt',
    price: 39.99,
    images: ['/performance-tshirt.jpg', '/performance-tshirt-2.jpg'],
    colors: ['Black', 'White', 'Blue'],
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: 'p2',
    name: 'Compression Leggings',
    price: 59.99,
    images: ['/performance-leggings.jpg', '/performance-leggings-2.jpg'],
    colors: ['Black', 'Navy', 'Gray'],
    sizes: ['XS', 'S', 'M', 'L'],
  },
  {
    id: 'p3',
    name: 'Lightweight Running Shoes',
    price: 129.99,
    images: ['/performance-shoes.jpg', '/performance-shoes-2.jpg'],
    colors: ['Neon Green', 'Black', 'Red'],
    sizes: ['7', '8', '9', '10', '11', '12'],
  },
  {
    id: 'p4',
    name: 'Breathable Windbreaker',
    price: 89.99,
    images: ['/performance-windbreaker.jpg', '/performance-windbreaker-2.jpg'],
    colors: ['Blue', 'Black', 'Red'],
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: 'p5',
    name: 'Sweat-Resistant Headband',
    price: 19.99,
    images: ['/performance-headband.jpg', '/performance-headband-2.jpg'],
    colors: ['Black', 'White', 'Gray'],
    sizes: ['One Size'],
  },
  {
    id: 'p6',
    name: 'High-Impact Sports Bra',
    price: 49.99,
    images: ['/performance-sportsbra.jpg', '/performance-sportsbra-2.jpg'],
    colors: ['Black', 'White', 'Pink'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
  },
];

export default function PerformanceGear() {
  const [filteredProducts, setFilteredProducts] = useState(performanceProducts);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('featured');

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleFilterChange = (filters: any) => {
    const filtered = performanceProducts.filter((product) => {
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
    const searched = performanceProducts.filter((product) =>
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
        title='Performance Gear'
        description='Engineered for peak performance and comfort'
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
            className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

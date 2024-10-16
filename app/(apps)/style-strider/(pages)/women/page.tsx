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

const womenProducts = [
  {
    id: 'w1',
    name: 'Floral Summer Dress',
    price: 89.99,
    images: ['/women-dress.jpg', '/women-dress-2.jpg'],
    colors: ['Blue', 'Pink', 'Yellow'],
    sizes: ['XS', 'S', 'M', 'L'],
  },
  {
    id: 'w2',
    name: 'High-Waisted Jeans',
    price: 69.99,
    images: ['/women-jeans.jpg', '/women-jeans-2.jpg'],
    colors: ['Blue', 'Black', 'White'],
    sizes: ['24', '26', '28', '30', '32'],
  },
  {
    id: 'w3',
    name: 'Elegant Blouse',
    price: 59.99,
    images: ['/women-blouse.jpg', '/women-blouse-2.jpg'],
    colors: ['White', 'Cream', 'Black'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
  },
  {
    id: 'w4',
    name: 'Leather Handbag',
    price: 129.99,
    images: ['/women-handbag.jpg', '/women-handbag-2.jpg'],
    colors: ['Black', 'Brown', 'Red'],
    sizes: ['One Size'],
  },
  {
    id: 'w5',
    name: 'Stylish Sunglasses',
    price: 49.99,
    images: ['/women-sunglasses.jpg', '/women-sunglasses-2.jpg'],
    colors: ['Black', 'Tortoise', 'Gold'],
    sizes: ['One Size'],
  },
  {
    id: 'w6',
    name: 'Comfortable Sneakers',
    price: 79.99,
    images: ['/women-sneakers.jpg', '/women-sneakers-2.jpg'],
    colors: ['White', 'Black', 'Pink'],
    sizes: ['5', '6', '7', '8', '9', '10'],
  },
];

export default function WomenCollection() {
  const [filteredProducts, setFilteredProducts] = useState(womenProducts);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('featured');

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleFilterChange = (filters: any) => {
    const filtered = womenProducts.filter((product) => {
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
    const searched = womenProducts.filter((product) =>
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
        title="Women's Collection"
        description='Elevate your style with our curated selection for women'
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

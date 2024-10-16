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
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const kidsProducts = [
  {
    id: 'k1',
    name: 'Dinosaur T-Shirt',
    price: 24.99,
    images: ['/kids-tshirt.jpg', '/kids-tshirt-2.jpg'],
    colors: ['Green', 'Blue', 'Red'],
    sizes: ['3T', '4T', '5T', '6T'],
    category: 'boys',
  },
  {
    id: 'k2',
    name: 'Unicorn Dress',
    price: 34.99,
    images: ['/kids-dress.jpg', '/kids-dress-2.jpg'],
    colors: ['Pink', 'Purple', 'White'],
    sizes: ['3T', '4T', '5T', '6T'],
    category: 'girls',
  },
  {
    id: 'k3',
    name: 'Adventure Sneakers',
    price: 39.99,
    images: ['/kids-sneakers.jpg', '/kids-sneakers-2.jpg'],
    colors: ['Blue', 'Red', 'Black'],
    sizes: ['10', '11', '12', '13', '1', '2'],
    category: 'unisex',
  },
  {
    id: 'k4',
    name: 'Superhero Hoodie',
    price: 29.99,
    images: ['/kids-hoodie.jpg', '/kids-hoodie-2.jpg'],
    colors: ['Red', 'Blue', 'Black'],
    sizes: ['S', 'M', 'L'],
    category: 'boys',
  },
  {
    id: 'k5',
    name: 'Sparkle Leggings',
    price: 19.99,
    images: ['/kids-leggings.jpg', '/kids-leggings-2.jpg'],
    colors: ['Purple', 'Pink', 'Silver'],
    sizes: ['3T', '4T', '5T', '6T'],
    category: 'girls',
  },
  {
    id: 'k6',
    name: 'Cozy Pajama Set',
    price: 27.99,
    images: ['/kids-pajamas.jpg', '/kids-pajamas-2.jpg'],
    colors: ['Blue', 'Green', 'Yellow'],
    sizes: ['3T', '4T', '5T', '6T'],
    category: 'unisex',
  },
];

export default function KidsCollection() {
  const [filteredProducts, setFilteredProducts] = useState(kidsProducts);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('featured');
  const [activeCategory, setActiveCategory] = useState('all');

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleFilterChange = (filters: any) => {
    const filtered = kidsProducts.filter((product) => {
      const colorMatch =
        filters.colors.length === 0 ||
        filters.colors.some((color: string) => product.colors.includes(color));
      const sizeMatch =
        filters.sizes.length === 0 ||
        filters.sizes.some((size: string) => product.sizes.includes(size));
      const priceMatch =
        product.price >= filters.priceRange[0] &&
        product.price <= filters.priceRange[1];
      const categoryMatch =
        activeCategory === 'all' || product.category === activeCategory;
      return colorMatch && sizeMatch && priceMatch && categoryMatch;
    });
    setFilteredProducts(filtered);
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);
    const searched = kidsProducts.filter(
      (product) =>
        product.name.toLowerCase().includes(term) &&
        (activeCategory === 'all' || product.category === activeCategory)
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

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    const filtered = kidsProducts.filter(
      (product) => category === 'all' || product.category === category
    );
    setFilteredProducts(filtered);
  };

  return (
    <div className='container mx-auto px-4 py-12'>
      <CollectionHeader
        title='Kids Collection'
        description='Fun and comfortable styles for your little ones'
      />
      <Tabs defaultValue='all' className='w-full mb-8'>
        <TabsList className='grid w-full grid-cols-4 rounded-xl bg-muted p-1'>
          <TabsTrigger value='all' onClick={() => handleCategoryChange('all')}>
            All
          </TabsTrigger>
          <TabsTrigger
            value='boys'
            onClick={() => handleCategoryChange('boys')}
          >
            Boys
          </TabsTrigger>
          <TabsTrigger
            value='girls'
            onClick={() => handleCategoryChange('girls')}
          >
            Girls
          </TabsTrigger>
          <TabsTrigger
            value='unisex'
            onClick={() => handleCategoryChange('unisex')}
          >
            Unisex
          </TabsTrigger>
        </TabsList>
      </Tabs>
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
          <div className='mt-12 text-center'>
            <h3 className='text-2xl font-bold mb-4'>
              Discover More Kids&apos; Favorites
            </h3>
            <div className='flex justify-center space-x-4'>
              <Button variant='outline'>
                Back to School <ArrowRight className='ml-2 h-4 w-4' />
              </Button>
              <Button variant='outline'>
                Playtime Essentials <ArrowRight className='ml-2 h-4 w-4' />
              </Button>
              <Button variant='outline'>
                Seasonal Trends <ArrowRight className='ml-2 h-4 w-4' />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

'use client';

import { useState, useEffect } from 'react';
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
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { Clock, Percent } from 'lucide-react';

const saleProducts = [
  {
    id: 's1',
    name: 'Limited Edition Sneakers',
    originalPrice: 129.99,
    salePrice: 89.99,
    images: ['/sale-sneakers.jpg', '/sale-sneakers-2.jpg'],
    colors: ['Black', 'White'],
    sizes: ['7', '8', '9', '10', '11'],
    discount: 30,
    stock: 75,
  },
  {
    id: 's2',
    name: 'Designer Handbag',
    originalPrice: 199.99,
    salePrice: 149.99,
    images: ['/sale-handbag.jpg', '/sale-handbag-2.jpg'],
    colors: ['Brown', 'Black'],
    sizes: ['One Size'],
    discount: 25,
    stock: 50,
  },
  {
    id: 's3',
    name: 'Cozy Winter Jacket',
    originalPrice: 149.99,
    salePrice: 99.99,
    images: ['/sale-jacket.jpg', '/sale-jacket-2.jpg'],
    colors: ['Navy', 'Green'],
    sizes: ['S', 'M', 'L', 'XL'],
    discount: 33,
    stock: 60,
  },
  {
    id: 's4',
    name: 'Stylish Sunglasses',
    originalPrice: 79.99,
    salePrice: 59.99,
    images: ['/sale-sunglasses.jpg', '/sale-sunglasses-2.jpg'],
    colors: ['Black', 'Tortoise'],
    sizes: ['One Size'],
    discount: 25,
    stock: 40,
  },
  {
    id: 's5',
    name: 'Comfortable Yoga Pants',
    originalPrice: 69.99,
    salePrice: 49.99,
    images: ['/sale-yogapants.jpg', '/sale-yogapants-2.jpg'],
    colors: ['Black', 'Gray'],
    sizes: ['XS', 'S', 'M', 'L'],
    discount: 28,
    stock: 80,
  },
  {
    id: 's6',
    name: 'Classic Dress Watch',
    originalPrice: 159.99,
    salePrice: 119.99,
    images: ['/sale-watch.jpg', '/sale-watch-2.jpg'],
    colors: ['Silver', 'Gold'],
    sizes: ['One Size'],
    discount: 25,
    stock: 30,
  },
];

const SaleTimer = ({ timeLeft }: { timeLeft: number }) => {
  const formatTime = (seconds: number) => {
    const days = Math.floor(seconds / (24 * 60 * 60));
    const hours = Math.floor((seconds % (24 * 60 * 60)) / (60 * 60));
    const minutes = Math.floor((seconds % (60 * 60)) / 60);
    const secs = seconds % 60;
    return `${days > 0 ? `${days} days ` : ''}${hours
      .toString()
      .padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs
      .toString()
      .padStart(2, '0')}`;
  };

  return (
    <div className='bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-8 rounded-r-lg flex items-center justify-between'>
      <div className='flex items-center'>
        <Clock className='h-6 w-6 mr-2' />
        <span className='font-semibold'>
          Sale Ends In: {formatTime(timeLeft)}
        </span>
      </div>
      <Badge variant='destructive' className='text-lg px-3 py-1'>
        Up to 50% OFF
      </Badge>
    </div>
  );
};

const ProductList = ({ products }: { products: typeof saleProducts }) => (
  <motion.div
    className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.3 }}
  >
    {products.map((product) => (
      <div key={product.id} className='relative'>
        <ProductCard
          id={product.id}
          name={product.name}
          price={product.salePrice}
          images={product.images}
          colors={product.colors}
          sizes={product.sizes}
        />
        <div className='absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-sm font-bold'>
          {product.discount}% OFF
        </div>
        <div className='mt-2'>
          <div className='flex justify-between items-center mb-1'>
            <span className='text-sm text-gray-500 line-through'>
              ${product.originalPrice.toFixed(2)}
            </span>
            <span className='text-lg font-bold  text-red-500'>
              ${product.salePrice.toFixed(2)}
            </span>
          </div>
          <div className='flex items-center'>
            <Progress value={product.stock} className='flex-grow mr-2' />
            <span className='text-sm text-gray-500'>{product.stock} left</span>
          </div>
        </div>
      </div>
    ))}
  </motion.div>
);

const NewsletterSubscription = () => (
  <div className='mt-12 text-center'>
    <h3 className='text-2xl font-bold mb-4'>Don&apos;t Miss Out!</h3>
    <p className='text-gray-600 mb-6'>
      Subscribe to our newsletter for exclusive early access to future sales.
    </p>
    <div className='flex justify-center items-center space-x-4'>
      <Input type='email' placeholder='Enter your email' className='max-w-xs' />
      <Button>
        Subscribe <Percent className='ml-2 h-4 w-4' />
      </Button>
    </div>
  </div>
);

export default function SalePage() {
  const [filteredProducts, setFilteredProducts] = useState(saleProducts);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('discount');
  const [timeLeft, setTimeLeft] = useState(
    2 * 24 * 60 * 60 + 14 * 60 * 60 + 35 * 60 + 22
  ); // 2 days 14:35:22 in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTimeLeft) => {
        if (prevTimeLeft <= 0) {
          return 14 * 60 * 60 + 35 * 60 + 22; // Reset to 14:35:22
        }
        return prevTimeLeft - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleFilterChange = (filters: any) => {
    const filtered = saleProducts.filter((product) => {
      const colorMatch =
        filters.colors.length === 0 ||
        filters.colors.some((color: string) => product.colors.includes(color));
      const sizeMatch =
        filters.sizes.length === 0 ||
        filters.sizes.some((size: string) => product.sizes.includes(size));
      const priceMatch =
        product.salePrice >= filters.priceRange[0] &&
        product.salePrice <= filters.priceRange[1];
      return colorMatch && sizeMatch && priceMatch;
    });
    setFilteredProducts(filtered);
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);
    const searched = saleProducts.filter((product) =>
      product.name.toLowerCase().includes(term)
    );
    setFilteredProducts(searched);
  };

  const handleSort = (value: string) => {
    setSortOrder(value);
    const sorted = [...filteredProducts].sort((a, b) => {
      if (value === 'price-asc') return a.salePrice - b.salePrice;
      if (value === 'price-desc') return b.salePrice - a.salePrice;
      if (value === 'discount') return b.discount - a.discount;
      return 0;
    });
    setFilteredProducts(sorted);
  };

  return (
    <div className='container mx-auto px-4 py-12'>
      <CollectionHeader
        title='Flash Sale'
        description='Incredible deals on top styles - Limited time only!'
      />
      <SaleTimer timeLeft={timeLeft} />
      <div className='flex flex-col md:flex-row gap-8'>
        <FilterSidebar onFilterChange={handleFilterChange} />
        <div className='flex-1'>
          <div className='flex justify-between items-center mb-6'>
            <Input
              type='text'
              placeholder='Search sale items...'
              value={searchTerm}
              onChange={handleSearch}
              className='max-w-xs'
            />
            <Select onValueChange={handleSort} defaultValue={sortOrder}>
              <SelectTrigger className='w-[180px]'>
                <SelectValue placeholder='Sort by' />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='discount'>Biggest Discount</SelectItem>
                <SelectItem value='price-asc'>Price: Low to High</SelectItem>
                <SelectItem value='price-desc'>Price: High to Low</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <ProductList products={filteredProducts} />
          <NewsletterSubscription />
        </div>
      </div>
    </div>
  );
}

'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  CartState,
  useCartStore,
} from '@/app/(apps)/style-strider/store/cartStore';
import { useState } from 'react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  images: string[]; // Changed to handle multiple images
  colors: string[];
  sizes: string[];
}

export function ProductCard({
  id,
  name,
  price,
  images, // Updated prop name
  colors,
  sizes,
}: ProductCardProps) {
  const addToCart = useCartStore((state: CartState) => state.addToCart);
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // State to track the current image

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Please select a size before adding to cart.');
      return;
    }
    addToCart({
      id,
      name,
      price,
      image: images[currentImageIndex], // Use the currently selected image
      colors,
      sizes,
      size: selectedSize,
      quantity: 1,
    });
  };

  return (
    <motion.div
      whileHover={{
        y: -10,
        boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.2)',
        borderRadius: '15px',
      }}
      transition={{ duration: 0.3 }}
    >
      <Card className='overflow-hidden'>
        <CardContent className='p-0'>
          <div className='relative h-64'>
            <Image
              src={
                images[currentImageIndex] || 'https://via.placeholder.com/300'
              }
              alt={name}
              width={800}
              height={800}
              objectFit='cover'
              className='transition-transform duration-300 ease-in-out'
            />
          </div>
          <div className='flex justify-center mt-2'>
            {images.slice(0, 4).map((image, index) => (
              <button
                key={index}
                className={`w-10 h-10 rounded-full overflow-hidden border-2 ${
                  currentImageIndex === index
                    ? 'border-blue-500'
                    : 'border-gray-300'
                }`}
                onClick={() => setCurrentImageIndex(index)}
              >
                <Image
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  width={300}
                  height={300}
                  className='transition-transform duration-300 ease-in-out'
                />
              </button>
            ))}
            {images.length > 4 && (
              <TooltipProvider delayDuration={50}>
                <Tooltip>
                  <TooltipTrigger>
                    <Link
                      href={`/product/${id}`}
                      className='w-10 h-10 flex items-center justify-center rounded-full border-2 border-gray-300'
                    >
                      <span className='text-lg font-bold'>+</span>
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>View more images</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            )}
          </div>
        </CardContent>
        <CardFooter className='flex flex-col items-start p-6'>
          <h3 className='text-lg font-semibold mb-2'>{name}</h3>
          <p className='text-sm text-gray-500 mb-4'>${price.toFixed(2)}</p>
          <div className='flex flex-wrap gap-2 mb-4'>
            {colors.map((color) => (
              <Badge key={color} variant='secondary' className='text-xs'>
                {color}
              </Badge>
            ))}
          </div>
          <div className='flex flex-wrap gap-2 mb-4'>
            {sizes.map((size) => (
              <Badge
                key={size}
                variant={selectedSize === size ? 'default' : 'outline'}
                className={`text-sm cursor-pointer px-3 py-1 ${
                  selectedSize === size ? 'text-white' : 'text-gray-700'
                }`}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </Badge>
            ))}
          </div>
          <div className='mt-4 flex justify-between w-full'>
            <Button asChild variant='outline' size='sm' className='font-bold'>
              <Link href={`/product/${id}`}>View Details</Link>
            </Button>
            <Button
              size='sm'
              onClick={handleAddToCart}
              disabled={!selectedSize}
              className='font-bold'
            >
              Add to Cart
            </Button>
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
}

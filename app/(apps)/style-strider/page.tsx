'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className='bg-white'>
      <div className='relative'>
        <div className='absolute inset-x-0 bottom-0 bg-gray-100' />
        <div className='max-w-7xl mx-auto sm:px-6 lg:px-8'>
          <div className='relative shadow-xl sm:rounded-2xl sm:overflow-hidden'>
            <div className='absolute inset-0'>
              <Image
                src='/images/style-strider/style-strider-hero.png'
                alt='People wearing StyleStrider shoes'
                layout='fill'
                objectFit='cover'
                className='h-full w-full object-cover'
              />
              <div className='absolute inset-0 bg-gradient-to-r from-purple-800 to-indigo-700 mix-blend-multiply' />
            </div>
            <div className='relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8'>
              <motion.h1
                className='text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <span className='block text-white'>Step into the Future</span>
                <span className='block text-indigo-200'>with StyleStrider</span>
              </motion.h1>
              <motion.p
                className='mt-6 max-w-lg mx-auto text-center text-xl text-indigo-200 sm:max-w-3xl'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Discover the perfect blend of style and comfort with our
                innovative footwear and apparel.
              </motion.p>
              <div className='mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center'>
                <motion.div
                  className='space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5'
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <Button asChild size='lg' className='w-full'>
                    <Link href='/shop'>
                      Shop Now
                      <ArrowRight className='ml-2 h-4 w-4' />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant='outline'
                    size='lg'
                    className='w-full'
                  >
                    <Link href='/about'>Learn More</Link>
                  </Button>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
        <motion.h2
          className='text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Featured Collections
        </motion.h2>
        <div className='mt-6 grid gap-6 lg:grid-cols-3'>
          <FeaturedCollection
            title="Men's Collection"
            description="Elevate your style with our latest men's shoes and apparel."
            image='/mens-collection.jpg'
            link='/style-strider/men'
          />
          <FeaturedCollection
            title="Women's Collection"
            description='Discover trendsetting designs for the modern woman.'
            image='/womens-collection.jpg'
            link='/style-strider/women'
          />
          <FeaturedCollection
            title='Performance Gear'
            description='Push your limits with our high-performance athletic wear.'
            image='/performance-gear.jpg'
            link='/style-strider/performance'
          />
        </div>
      </div>
    </div>
  );
}

function FeaturedCollection({
  title,
  description,
  image,
  link,
}: {
  title: string;
  description: string;
  image: string;
  link: string;
}) {
  return (
    <motion.div
      className='relative rounded-lg overflow-hidden'
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className='relative h-64'>
        <Image
          src={image}
          alt={title}
          layout='fill'
          objectFit='cover'
          className='w-full h-full object-center object-cover'
        />
      </div>
      <div className='absolute inset-0 bg-gradient-to-t from-black opacity-60' />
      <div className='absolute inset-0 flex flex-col justify-end p-6'>
        <h3 className='text-xl font-semibold text-white'>{title}</h3>
        <p className='mt-2 text-sm text-gray-300'>{description}</p>
        <Link
          href={link}
          className='mt-4 text-sm font-medium text-white hover:underline'
        >
          Shop Collection
          <ArrowRight className='ml-2 h-4 w-4 inline' />
        </Link>
      </div>
    </motion.div>
  );
}

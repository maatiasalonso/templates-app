'use client';

import { motion } from 'framer-motion';

interface CollectionHeaderProps {
  title: string;
  description: string;
}

export function CollectionHeader({
  title,
  description,
}: CollectionHeaderProps) {
  return (
    <div className='text-center mb-12'>
      <motion.h1
        className='text-4xl font-bold mb-4'
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {title}
      </motion.h1>
      <motion.p
        className='text-xl text-gray-600'
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {description}
      </motion.p>
    </div>
  );
}

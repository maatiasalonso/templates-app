'use client';

import { motion } from 'framer-motion';

interface PageHeaderProps {
  title: string;
  description: string;
}

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className='text-center space-y-4'
    >
      <h1 className='text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl'>
        {title}
      </h1>
      <p className='mx-auto max-w-[700px] text-muted-foreground md:text-xl'>
        {description}
      </p>
    </motion.div>
  );
}

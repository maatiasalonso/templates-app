'use client';

import { motion } from 'framer-motion';

interface LegalSectionProps {
  title: string;
  children: React.ReactNode;
}

export function LegalSection({ title, children }: LegalSectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className='mb-8'
    >
      <h2 className='text-2xl font-bold mb-4'>{title}</h2>
      <div className='prose prose-sm max-w-none'>{children}</div>
    </motion.section>
  );
}

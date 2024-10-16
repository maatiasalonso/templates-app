'use client';

import { motion } from 'framer-motion';

interface ContentSectionProps {
  children: React.ReactNode;
  className?: string;
}

export function ContentSection({
  children,
  className = '',
}: ContentSectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`py-12 sm:py-16 ${className}`}
    >
      {children}
    </motion.section>
  );
}

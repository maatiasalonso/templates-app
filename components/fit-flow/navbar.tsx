'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { Dumbbell, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navItems = [
  { name: 'Home', path: '/fit-flow' },
  { name: 'Features', path: '/fit-flow/features' },
  { name: 'Workouts', path: '/fit-flow/workouts' },
  { name: 'Profile', path: '/fit-flow/profile' },
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className='bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b flex justify-center'>
      <div className='container flex h-16 items-center justify-between'>
        <Link href='/fit-flow' className='flex items-center space-x-2'>
          <Dumbbell className='h-6 w-6' />
          <span className='font-bold text-xl'>FitFlow</span>
        </Link>
        <nav className='hidden md:flex space-x-6'>
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                pathname === item.path
                  ? 'text-primary'
                  : 'text-muted-foreground'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
        <div className='md:hidden'>
          <Button
            variant='ghost'
            size='icon'
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className='h-6 w-6' />
            ) : (
              <Menu className='h-6 w-6' />
            )}
          </Button>
        </div>
      </div>
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className='md:hidden absolute top-16 left-0 right-0 bg-background border-b z-40'
        >
          <nav className='container py-4'>
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className={`block py-2 text-sm font-medium transition-colors hover:text-primary ${
                  pathname === item.path
                    ? 'text-primary'
                    : 'text-muted-foreground'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </motion.div>
      )}
    </header>
  );
}

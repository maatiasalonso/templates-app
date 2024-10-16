'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ShoppingBag,
  Menu,
  X,
  ArrowRight,
  Trash2,
  Plus,
  Minus,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  CartState,
  useCartStore,
} from '@/app/(apps)/style-strider/store/cartStore';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet';
import { Card } from '../ui/card';
import Image from 'next/image';

const navItems = [
  { href: '/style-strider/men', label: 'Men' },
  { href: '/style-strider/women', label: 'Women' },
  { href: '/style-strider/kids', label: 'Kids' },
  { href: '/style-strider/sale', label: 'Sale' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const items = useCartStore((state: CartState) => state.items);
  const removeFromCart = useCartStore(
    (state: CartState) => state.removeFromCart
  );
  const increaseQuantity = useCartStore(
    (state: CartState) => state.increaseQuantity
  );
  const decreaseQuantity = useCartStore(
    (state: CartState) => state.decreaseQuantity
  );

  const subtotal = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <>
      <nav className='bg-white shadow-md'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex justify-between h-16'>
            <div className='flex'>
              <Link
                href='/style-strider'
                className='flex-shrink-0 flex items-center'
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <span className='text-2xl font-bold text-gray-900'>
                    StyleStrider
                  </span>
                </motion.div>
              </Link>
              <div className='hidden sm:ml-6 sm:flex sm:space-x-8'>
                {navItems.map((item) => (
                  <NavLink key={item.href} href={item.href}>
                    {item.label}
                  </NavLink>
                ))}
              </div>
            </div>
            <div className='hidden sm:ml-6 sm:flex sm:items-center'>
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant='ghost' size='icon' className='relative'>
                    <ShoppingBag className='h-5 w-5' />
                    {items.length > 0 && (
                      <Badge className='absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center'>
                        {items.reduce((acc, item) => acc + item.quantity, 0)}
                      </Badge>
                    )}
                  </Button>
                </SheetTrigger>
                <SheetContent side='right'>
                  <SheetHeader>
                    <SheetTitle>Shopping Cart</SheetTitle>
                    <SheetDescription>
                      Review your selected items.
                    </SheetDescription>
                  </SheetHeader>
                  <div className='p-4'>
                    {items.length > 0 ? (
                      <>
                        <div className='space-y-4'>
                          {items.map((item) => (
                            <Card
                              key={item.id}
                              className='flex items-center space-x-4 p-4'
                            >
                              <div className='w-16 h-16 relative'>
                                <Image
                                  src={item.image}
                                  alt={item.name}
                                  fill
                                  className='object-cover rounded'
                                />
                              </div>
                              <div className='flex-1'>
                                <h4 className='font-semibold'>{item.name}</h4>
                                <p className='text-gray-600'>
                                  Size: {item.size}
                                </p>
                                <p className='text-gray-600'>
                                  ${item.price.toFixed(2)}
                                </p>
                                <div className='flex items-center mt-2 justify-between'>
                                  <div className='flex items-center'>
                                    <Button
                                      variant='ghost'
                                      size='sm'
                                      onClick={() => decreaseQuantity(item.id)}
                                      disabled={item.quantity <= 1}
                                    >
                                      <Minus className='h-4 w-4' />
                                    </Button>
                                    <span className='mx-2'>
                                      {item.quantity}
                                    </span>
                                    <Button
                                      variant='ghost'
                                      size='sm'
                                      onClick={() => increaseQuantity(item.id)}
                                    >
                                      <Plus className='h-4 w-4' />
                                    </Button>
                                  </div>
                                  <Button
                                    variant='ghost'
                                    size='icon'
                                    className='ml-4 text-red-500'
                                    onClick={() =>
                                      removeFromCart(item.id, item.size)
                                    }
                                  >
                                    <Trash2 className='h-4 w-4' />
                                  </Button>
                                </div>
                              </div>
                            </Card>
                          ))}
                        </div>
                        <div className='mt-4 flex justify-between font-semibold'>
                          <span>Subtotal:</span>
                          <span>${subtotal.toFixed(2)}</span>
                        </div>
                        <div className='mt-6 flex flex-col space-y-4'>
                          <Link href='/checkout'>
                            <Button className='w-full flex items-center justify-center'>
                              <ArrowRight className='mr-2 h-4 w-4' />
                              Proceed to Checkout
                            </Button>
                          </Link>
                          <SheetClose asChild>
                            <Button
                              variant='ghost'
                              className='w-full flex items-center justify-center'
                            >
                              <X className='mr-2 h-4 w-4' />
                              Close Cart
                            </Button>
                          </SheetClose>
                        </div>
                      </>
                    ) : (
                      <p className='text-center text-gray-500'>
                        Your cart is empty.
                      </p>
                    )}
                  </div>
                </SheetContent>
              </Sheet>
            </div>
            <div className='-mr-2 flex items-center sm:hidden'>
              <Button
                variant='ghost'
                size='icon'
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? (
                  <X className='h-5 w-5' />
                ) : (
                  <Menu className='h-5 w-5' />
                )}
              </Button>
            </div>
          </div>
        </div>

        {isOpen && (
          <motion.div
            className='sm:hidden'
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className='pt-2 pb-3 space-y-1'>
              {navItems.map((item) => (
                <MobileNavLink key={item.href} href={item.href}>
                  {item.label}
                </MobileNavLink>
              ))}
            </div>
          </motion.div>
        )}
      </nav>
    </>
  );
}

const NavLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <Link
      href={href}
      className='inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700 transition duration-150 ease-in-out'
    >
      {children}
    </Link>
  );
};

const MobileNavLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <Link
      href={href}
      className='block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 transition duration-150 ease-in-out'
    >
      {children}
    </Link>
  );
};

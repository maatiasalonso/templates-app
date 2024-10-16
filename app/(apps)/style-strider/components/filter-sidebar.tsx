'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

interface FilterSidebarProps {
  onFilterChange: (filters: FilterState) => void;
}

interface FilterState {
  colors: string[];
  sizes: string[];
  priceRange: [number, number];
}

const initialFilters: FilterState = {
  colors: [],
  sizes: [],
  priceRange: [0, 300],
};

export function FilterSidebar({ onFilterChange }: FilterSidebarProps) {
  const [filters, setFilters] = useState<FilterState>(initialFilters);

  const handleColorChange = (color: string) => {
    const updatedColors = filters.colors.includes(color)
      ? filters.colors.filter((c) => c !== color)
      : [...filters.colors, color];
    const updatedFilters = { ...filters, colors: updatedColors };
    setFilters(updatedFilters);
    onFilterChange(updatedFilters);
  };

  const handleSizeChange = (size: string) => {
    const updatedSizes = filters.sizes.includes(size)
      ? filters.sizes.filter((s) => s !== size)
      : [...filters.sizes, size];
    const updatedFilters = { ...filters, sizes: updatedSizes };
    setFilters(updatedFilters);
    onFilterChange(updatedFilters);
  };

  const handlePriceChange = (value: number[]) => {
    const updatedFilters = {
      ...filters,
      priceRange: value as [number, number],
    };
    setFilters(updatedFilters);
    onFilterChange(updatedFilters);
  };

  const handleReset = () => {
    setFilters(initialFilters);
    onFilterChange(initialFilters);
  };

  return (
    <motion.div
      className='w-full sm:w-64 bg-white p-6 rounded-lg shadow-md'
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className='text-xl font-semibold mb-4'>Filters</h2>

      <div className='mb-6'>
        <h3 className='text-lg font-medium mb-2'>Colors</h3>
        {['Red', 'Blue', 'Green', 'Black', 'White'].map((color) => (
          <div key={color} className='flex items-center mb-2'>
            <Checkbox
              id={`color-${color}`}
              checked={filters.colors.includes(color)}
              onCheckedChange={() => handleColorChange(color)}
            />
            <Label htmlFor={`color-${color}`} className='ml-2'>
              {color}
            </Label>
          </div>
        ))}
      </div>

      <div className='mb-6'>
        <h3 className='text-lg font-medium mb-2'>Sizes</h3>
        {['XS', 'S', 'M', 'L', 'XL'].map((size) => (
          <div key={size} className='flex items-center mb-2'>
            <Checkbox
              id={`size-${size}`}
              checked={filters.sizes.includes(size)}
              onCheckedChange={() => handleSizeChange(size)}
            />
            <Label htmlFor={`size-${size}`} className='ml-2'>
              {size}
            </Label>
          </div>
        ))}
      </div>

      <div className='mb-6'>
        <h3 className='text-lg font-medium mb-2'>Price Range</h3>
        <Slider
          min={0}
          max={300}
          step={10}
          value={filters.priceRange}
          onValueChange={handlePriceChange}
          className='mb-2'
        />
        <div className='flex justify-between text-sm text-gray-600'>
          <span>${filters.priceRange[0]}</span>
          <span>${filters.priceRange[1]}</span>
        </div>
      </div>

      <Button onClick={handleReset} variant='outline' className='w-full'>
        Reset Filters
      </Button>
    </motion.div>
  );
}

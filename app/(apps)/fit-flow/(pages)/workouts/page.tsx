'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { PageTransition } from '@/components/shared/page-transition';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { CheckCircle, Loader } from 'lucide-react';

const workoutTypes = ['Strength', 'Cardio', 'Yoga', 'HIIT'];

export default function WorkoutsPage() {
  const [selectedType, setSelectedType] = useState('Strength');
  const [isLoading, setIsLoading] = useState(false);
  const [isCreated, setIsCreated] = useState(false);

  const handleCreateWorkout = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsCreated(true);
      setTimeout(() => setIsCreated(false), 2000); // Reset after 2 seconds
    }, 2000); // Simulate API call delay
  };

  return (
    <PageTransition>
      <div className='container py-24 sm:py-32 mx-auto'>
        <h1 className='text-4xl font-bold tracking-tighter sm:text-5xl text-center mb-8'>
          Create Your Perfect Workout
        </h1>
        <p className='text-muted-foreground text-center mb-16 max-w-2xl mx-auto'>
          Customize your workout plan based on your preferences and fitness
          goals.
        </p>
        <div className='max-w-md mx-auto space-y-8'>
          <div>
            <Label htmlFor='workout-name'>Workout Name</Label>
            <Input
              id='workout-name'
              placeholder='Enter workout name'
              className='mt-1'
            />
          </div>
          <div>
            <Label>Workout Type</Label>
            <RadioGroup
              value={selectedType}
              onValueChange={setSelectedType}
              className='mt-2'
            >
              {workoutTypes.map((type) => (
                <div key={type} className='flex items-center space-x-2'>
                  <RadioGroupItem value={type} id={type} />
                  <Label htmlFor={type}>{type}</Label>
                </div>
              ))}
            </RadioGroup>
          </div>
          <div>
            <Label htmlFor='duration'>Duration (minutes)</Label>
            <Input
              id='duration'
              type='number'
              placeholder='Enter duration'
              className='mt-1'
            />
          </div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              className='w-full'
              onClick={handleCreateWorkout}
              disabled={isLoading}
            >
              {isLoading ? (
                <Loader className='animate-spin h-5 w-5 mx-auto' />
              ) : (
                'Create Workout'
              )}
            </Button>
          </motion.div>
          {isCreated && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className='flex items-center justify-center mt-4'
            >
              <CheckCircle className='h-6 w-6 text-green-500 mr-2' />
              <span className='text-green-500 font-bold'>Workout Created!</span>
            </motion.div>
          )}
        </div>
      </div>
    </PageTransition>
  );
}

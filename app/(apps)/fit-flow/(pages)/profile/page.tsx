'use client';

import { motion } from 'framer-motion';
import { PageTransition } from '@/components/shared/page-transition';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function ProfilePage() {
  return (
    <PageTransition>
      <div className='container py-24 sm:py-32 mx-auto'>
        <h1 className='text-4xl font-bold tracking-tighter sm:text-5xl text-center mb-8'>
          Your Profile
        </h1>
        <div className='max-w-2xl mx-auto space-y-8'>
          <div className='flex justify-center'>
            <Avatar className='w-32 h-32'>
              <AvatarImage
                src='/placeholder.svg?height=128&width=128'
                alt='Profile picture'
              />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
          </div>
          <div className='space-y-4'>
            <div>
              <Label htmlFor='name'>Name</Label>
              <Input id='name' defaultValue='John Doe' className='mt-1' />
            </div>
            <div>
              <Label htmlFor='email'>Email</Label>
              <Input
                id='email'
                type='email'
                defaultValue='john.doe@example.com'
                className='mt-1'
              />
            </div>
            <div>
              <Label htmlFor='bio'>Bio</Label>
              <Textarea
                id='bio'
                placeholder='Tell us about yourself'
                className='mt-1'
              />
            </div>
            <div>
              <Label htmlFor='fitness-goal'>Fitness Goal</Label>
              <Input
                id='fitness-goal'
                placeholder='e.g., Lose weight, Build muscle'
                className='mt-1'
              />
            </div>
          </div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button className='w-full'>Save Changes</Button>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
}

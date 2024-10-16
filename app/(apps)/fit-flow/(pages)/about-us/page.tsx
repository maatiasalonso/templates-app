'use client';

import { motion } from 'framer-motion';
import { PageTransition } from '@/components/shared/page-transition';
import { PageHeader } from '@/components/shared/page-header';
import { ContentSection } from '@/components/shared/content-section';
import { Card, CardContent } from '@/components/ui/card';
import { Dumbbell, Heart, Users } from 'lucide-react';
import Image from 'next/image';

const values = [
  {
    icon: <Dumbbell className='h-8 w-8' />,
    title: 'Empowerment',
    description:
      'We believe in empowering individuals to take control of their fitness journey.',
  },
  {
    icon: <Heart className='h-8 w-8' />,
    title: 'Passion',
    description: 'Our passion for health and fitness drives everything we do.',
  },
  {
    icon: <Users className='h-8 w-8' />,
    title: 'Community',
    description:
      'We foster a supportive community that motivates and inspires.',
  },
];

export default function AboutPage() {
  return (
    <PageTransition>
      <div className='container py-24 sm:py-32 mx-auto'>
        <PageHeader
          title='About FitFlow'
          description='Empowering your fitness journey with innovative technology and personalized experiences.'
        />
        <ContentSection>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className='text-3xl font-bold mb-4'>Our Story</h2>
              <p className='text-muted-foreground mb-4'>
                FitFlow was born from a simple idea: make fitness accessible,
                enjoyable, and effective for everyone. Our founders, fitness
                enthusiasts and tech experts, recognized the need for a more
                personalized and data-driven approach to health and wellness.
              </p>
              <p className='text-muted-foreground'>
                Since our launch in 2020, we&apos;ve been on a mission to
                revolutionize the way people approach their fitness goals. With
                cutting-edge AI technology and a passion for health, we&apos;re
                helping thousands of users achieve their dreams and live
                healthier lives.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src='/placeholder.svg?height=400&width=600'
                alt='FitFlow team'
                className='rounded-lg shadow-lg'
                width={600}
                height={400}
              />
            </motion.div>
          </div>
        </ContentSection>
        <ContentSection>
          <h2 className='text-3xl font-bold mb-8 text-center'>Our Values</h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className='min-h-[220px]'>
                  <CardContent className='p-6 text-center'>
                    <div className='rounded-full p-3 inline-block mb-4'>
                      {value.icon}
                    </div>
                    <h3 className='text-xl font-bold mb-2'>{value.title}</h3>
                    <p className='text-muted-foreground'>{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </ContentSection>
      </div>
    </PageTransition>
  );
}

'use client';

import { motion } from 'framer-motion';
import { PageTransition } from '@/components/shared/page-transition';
import { PageHeader } from '@/components/shared/page-header';
import { ContentSection } from '@/components/shared/content-section';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dumbbell, Utensils, Heart, Brain } from 'lucide-react';

const guides = [
  {
    title: "Beginner's Workout Guide",
    description:
      'Start your fitness journey with our comprehensive guide for beginners.',
    icon: <Dumbbell className='h-8 w-8' />,
  },
  {
    title: 'Nutrition 101',
    description:
      'Learn the basics of nutrition and how to fuel your body for optimal performance.',
    icon: <Utensils className='h-8 w-8' />,
  },
  {
    title: 'Cardio Mastery',
    description:
      'Improve your cardiovascular health with our expert cardio training guide.',
    icon: <Heart className='h-8 w-8' />,
  },
  {
    title: 'Mindfulness and Fitness',
    description:
      'Discover how to integrate mindfulness practices into your fitness routine.',
    icon: <Brain className='h-8 w-8' />,
  },
];

export default function GuidesPage() {
  return (
    <PageTransition>
      <div className='container py-24 sm:py-32 mx-auto'>
        <PageHeader
          title='FitFlow Guides'
          description='Comprehensive resources to help you achieve your fitness goals and live a healthier life.'
        />
        <ContentSection>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            {guides.map((guide, index) => (
              <motion.div
                key={guide.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className='h-full flex flex-col'>
                  <CardHeader>
                    <CardTitle className='flex items-center'>
                      <div className='rounded-full p-2 mr-4'>{guide.icon}</div>
                      {guide.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className='flex-grow'>
                    <p className='text-muted-foreground mb-4'>
                      {guide.description}
                    </p>
                  </CardContent>
                  <CardContent>
                    <Button variant='outline' className='w-full'>
                      Read Guide
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </ContentSection>
        <ContentSection>
          <Card>
            <CardContent className='p-8'>
              <h2 className='text-2xl font-bold mb-4'>
                Need Personalized Guidance?
              </h2>
              <p className='text-muted-foreground mb-6'>
                Our expert trainers are here to help you create a customized
                fitness plan tailored to your specific goals and needs.
              </p>
              <Button size='lg'>Schedule a Consultation</Button>
            </CardContent>
          </Card>
        </ContentSection>
      </div>
    </PageTransition>
  );
}

'use client';

import { motion } from 'framer-motion';
import { PageTransition } from '@/components/shared/page-transition';
import {
  Dumbbell,
  Zap,
  Calendar,
  TrendingUp,
  Users,
  Award,
  BarChart,
  Smartphone,
} from 'lucide-react';

const features = [
  {
    icon: <Dumbbell className='h-8 w-8' />,
    title: 'Personalized Workouts',
    description: 'AI-powered routines tailored to your goals and fitness level',
  },
  {
    icon: <Zap className='h-8 w-8' />,
    title: 'Real-time Tracking',
    description: 'Monitor your progress with advanced analytics and insights',
  },
  {
    icon: <Calendar className='h-8 w-8' />,
    title: 'Smart Scheduling',
    description:
      'Optimize your workout calendar effortlessly with AI assistance',
  },
  {
    icon: <TrendingUp className='h-8 w-8' />,
    title: 'Progress Insights',
    description:
      'Visualize your fitness journey with detailed reports and charts',
  },
  {
    icon: <Users className='h-8 w-8' />,
    title: 'Community Challenges',
    description:
      'Join fitness challenges and compete with friends for motivation',
  },
  {
    icon: <Award className='h-8 w-8' />,
    title: 'Achievement System',
    description: 'Earn badges and rewards as you reach your fitness milestones',
  },
  {
    icon: <BarChart className='h-8 w-8' />,
    title: 'Nutrition Tracking',
    description: 'Log your meals and track your nutritional intake seamlessly',
  },
  {
    icon: <Smartphone className='h-8 w-8' />,
    title: 'Mobile App',
    description:
      'Access your workouts and track progress on-the-go with our mobile app',
  },
];

export default function FeaturesPage() {
  return (
    <PageTransition>
      <div className='container py-24 sm:py-32 mx-auto'>
        <h1 className='text-4xl font-bold tracking-tighter sm:text-5xl text-center mb-8'>
          Powerful Features for Your Fitness Journey
        </h1>
        <p className='text-muted-foreground text-center mb-16 max-w-2xl mx-auto'>
          Discover how FitFlow&apos;s innovative features can help you achieve
          your fitness goals faster and more efficiently.
        </p>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12'>
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className='flex flex-col items-center text-center'
            >
              <div className='rounded-full p-4 mb-4'>{feature.icon}</div>
              <h3 className='text-xl font-bold mb-2'>{feature.title}</h3>
              <p className='text-muted-foreground'>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </PageTransition>
  );
}

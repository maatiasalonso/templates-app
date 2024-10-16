'use client';
import { PageTransition } from '@/components/shared/page-transition';
import { Dumbbell, Zap, Calendar, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

function Hero() {
  return (
    <section className='container py-24 sm:py-32 mx-auto'>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className='text-center space-y-8'
      >
        <h1 className='text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl'>
          Your Personal
          <span className='text-primary'> Fitness Journey</span>
          <br />
          Starts Here
        </h1>
        <p className='mx-auto max-w-[700px] text-muted-foreground md:text-xl'>
          FitFlow adapts to your schedule, goals, and progress. Experience the
          future of fitness planning and tracking.
        </p>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button size='lg' className='rounded-full'>
            Start Your Free Trial
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}

const features = [
  {
    icon: <Dumbbell className='h-6 w-6' />,
    title: 'Personalized Workouts',
    description: 'AI-powered routines tailored to your goals',
  },
  {
    icon: <Zap className='h-6 w-6' />,
    title: 'Real-time Tracking',
    description: 'Monitor your progress with advanced analytics',
  },
  {
    icon: <Calendar className='h-6 w-6' />,
    title: 'Smart Scheduling',
    description: 'Optimize your workout calendar effortlessly',
  },
  {
    icon: <TrendingUp className='h-6 w-6' />,
    title: 'Progress Insights',
    description: 'Visualize your fitness journey with detailed reports',
  },
];

function FeatureGrid() {
  return (
    <section id='features' className='container py-24 sm:py-32 mx-auto'>
      <div className='w-full'>
        <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12'>
          Revolutionize Your Fitness Routine
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className='flex flex-col items-center text-center p-6 bg-muted rounded-lg'
            >
              <div className='rounded-full p-3 mb-4'>{feature.icon}</div>
              <h3 className='text-xl font-bold mb-2'>{feature.title}</h3>
              <p className='text-muted-foreground'>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const testimonials = [
  {
    name: 'Sarah L.',
    quote:
      "FitFlow transformed my workout routine. I've never been more consistent!",
    image: '/placeholder.svg?height=100&width=100',
  },
  {
    name: 'Mike T.',
    quote:
      "The personalized plans are amazing. It's like having a personal trainer in my pocket.",
    image: '/placeholder.svg?height=100&width=100',
  },
  {
    name: 'Emma R.',
    quote:
      "I love how FitFlow adapts to my schedule. It's made staying fit so much easier.",
    image: '/placeholder.svg?height=100&width=100',
  },
];

export function TestimonialSection() {
  return (
    <section className='bg-muted py-24 sm:py-32 flex justify-center'>
      <div className='container'>
        <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12'>
          What Our Users Say
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className='bg-background p-6 rounded-lg shadow-lg'
            >
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                width={100}
                height={100}
                className='w-20 h-20 rounded-full mx-auto mb-4'
              />
              <p className='text-muted-foreground mb-4'>
                &quot;{testimonial.quote}&quot;
              </p>
              <p className='font-bold text-right'>- {testimonial.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <PageTransition>
      <Hero />
      <FeatureGrid />
      <TestimonialSection />
    </PageTransition>
  );
}

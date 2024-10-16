'use client';

import { motion } from 'framer-motion';
import { PageTransition } from '@/components/shared/page-transition';
import { PageHeader } from '@/components/shared/page-header';
import { ContentSection } from '@/components/shared/content-section';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const blogPosts = [
  {
    title: '10 Tips for Effective Home Workouts',
    excerpt:
      'Maximize your home workout routine with these expert tips and tricks.',
    author: 'Jane Doe',
    date: 'May 15, 2024',
    image: '/placeholder.svg?height=200&width=400',
  },
  {
    title: 'The Science Behind High-Intensity Interval Training',
    excerpt:
      'Discover why HIIT is so effective and how to incorporate it into your fitness routine.',
    author: 'John Smith',
    date: 'May 10, 2024',
    image: '/placeholder.svg?height=200&width=400',
  },
  {
    title: 'Nutrition Myths Debunked: Separating Fact from Fiction',
    excerpt:
      'Learn the truth about common nutrition myths and make informed decisions about your diet.',
    author: 'Emily Johnson',
    date: 'May 5, 2024',
    image: '/placeholder.svg?height=200&width=400',
  },
];

export default function BlogPage() {
  return (
    <PageTransition>
      <div className='container py-24 sm:py-32 mx-auto'>
        <PageHeader
          title='FitFlow Blog'
          description='Stay informed with the latest fitness tips, nutrition advice, and wellness trends.'
        />
        <ContentSection>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className='h-full flex flex-col'>
                  <Image
                    src={post.image}
                    alt={post.title}
                    className='w-full h-48 object-cover'
                    width={400}
                    height={200}
                  />
                  <CardHeader>
                    <CardTitle>{post.title}</CardTitle>
                  </CardHeader>
                  <CardContent className='flex-grow'>
                    <p className='text-muted-foreground mb-4'>{post.excerpt}</p>
                    <div className='flex justify-between items-center text-sm text-muted-foreground'>
                      <span>{post.author}</span>
                      <span>{post.date}</span>
                    </div>
                  </CardContent>
                  <CardContent>
                    <Button variant='outline' className='w-full'>
                      Read More
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </ContentSection>
        <div className='text-center mt-12'>
          <Button size='lg'>View All Posts</Button>
        </div>
      </div>
    </PageTransition>
  );
}

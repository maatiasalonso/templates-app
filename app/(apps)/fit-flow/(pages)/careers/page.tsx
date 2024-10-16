'use client';

import { motion } from 'framer-motion';
import { PageTransition } from '@/components/shared/page-transition';
import { PageHeader } from '@/components/shared/page-header';
import { ContentSection } from '@/components/shared/content-section';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const jobOpenings = [
  {
    title: 'Senior Full Stack Developer',
    department: 'Engineering',
    location: 'Remote',
  },
  { title: 'UX/UI Designer', department: 'Design', location: 'New York, NY' },
  {
    title: 'Data Scientist',
    department: 'Data & Analytics',
    location: 'San Francisco, CA',
  },
  { title: 'Product Manager', department: 'Product', location: 'Remote' },
  {
    title: 'Customer Success Specialist',
    department: 'Customer Support',
    location: 'London, UK',
  },
];

export default function CareersPage() {
  return (
    <PageTransition>
      <div className='container py-24 sm:py-32 mx-auto'>
        <PageHeader
          title='Join Our Team'
          description="Help us revolutionize the fitness industry and make a positive impact on people's lives."
        />
        <ContentSection>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className='text-3xl font-bold mb-4'>Why Work at FitFlow?</h2>
              <ul className='space-y-4 text-muted-foreground'>
                <li>• Innovative and challenging work environment</li>
                <li>• Competitive salary and benefits package</li>
                <li>• Opportunities for professional growth and development</li>
                <li>• Flexible work arrangements and work-life balance</li>
                <li>• Collaborative and inclusive company culture</li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src='/placeholder.svg?height=400&width=600'
                alt='FitFlow office'
                className='rounded-lg shadow-lg'
                width={600}
                height={400}
              />
            </motion.div>
          </div>
        </ContentSection>
        <ContentSection>
          <h2 className='text-3xl font-bold mb-8 text-center'>
            Current Openings
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            {jobOpenings.map((job, index) => (
              <motion.div
                key={job.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle>{job.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className='text-muted-foreground mb-4'>
                      {job.department} • {job.location}
                    </p>
                    <Button>Apply Now</Button>
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

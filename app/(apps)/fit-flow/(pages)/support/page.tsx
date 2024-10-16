'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { PageTransition } from '@/components/shared/page-transition';
import { PageHeader } from '@/components/shared/page-header';
import { ContentSection } from '@/components/shared/content-section';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'How do I reset my password?',
    answer:
      'To reset your password, go to the login page and click on the "Forgot Password" link. Follow the instructions sent to your email to create a new password.',
  },
  {
    question: 'Can I sync FitFlow with my smartwatch?',
    answer:
      'Yes, FitFlow is compatible with most popular smartwatches. Go to the "Integrations" section in your account settings to connect your device.',
  },
  {
    question: 'How often should I update my fitness goals?',
    answer:
      'We recommend reviewing and updating your fitness goals every 4-6 weeks to ensure they remain challenging and aligned with your progress.',
  },
  {
    question: 'Is there a mobile app available?',
    answer:
      'Yes, FitFlow has mobile apps available for both iOS and Android devices. You can download them from the App Store or Google Play Store.',
  },
];

export default function SupportPage() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <PageTransition>
      <div className='container py-24 sm:py-32 mx-auto'>
        <PageHeader
          title='Support Center'
          description='Find answers to common questions and get the help you need to make the most of FitFlow.'
        />
        <ContentSection>
          <Card className='mb-12'>
            <CardContent className='p-8'>
              <h2 className='text-2xl font-bold mb-4'>How can we help you?</h2>
              <div className='flex gap-4'>
                <Input
                  placeholder='Search for answers...'
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className='flex-grow'
                />
                <Button>Search</Button>
              </div>
            </CardContent>
          </Card>
          <h2 className='text-2xl font-bold mb-6'>
            Frequently Asked Questions
          </h2>
          <Accordion type='single' collapsible className='w-full'>
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <AccordionItem value={`item-${index}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </ContentSection>
        <ContentSection>
          <Card>
            <CardHeader>
              <CardTitle>Still Need Help?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className='text-muted-foreground mb-4'>
                If you couldn&apos;t find the answer you were looking for, our
                support team is here to help.
              </p>
              <Button>Contact Support</Button>
            </CardContent>
          </Card>
        </ContentSection>
      </div>
    </PageTransition>
  );
}

'use client';

import { motion } from 'framer-motion';
import { PageTransition } from '@/components/shared/page-transition';
import { PageHeader } from '@/components/shared/page-header';
import { ContentSection } from '@/components/shared/content-section';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactPage() {
  return (
    <PageTransition>
      <div className='container py-24 sm:py-32 mx-auto'>
        <PageHeader
          title='Get in Touch'
          description="We're here to help. Reach out to us for any questions or support you need."
        />
        <ContentSection>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className='text-3xl font-bold mb-6'>Contact Us</h2>
              <form className='space-y-6'>
                <div>
                  <Label htmlFor='name'>Name</Label>
                  <Input id='name' placeholder='Your name' />
                </div>
                <div>
                  <Label htmlFor='email'>Email</Label>
                  <Input id='email' type='email' placeholder='Your email' />
                </div>
                <div>
                  <Label htmlFor='message'>Message</Label>
                  <Textarea id='message' placeholder='Your message' rows={4} />
                </div>
                <Button type='submit'>Send Message</Button>
              </form>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className='space-y-6'
            >
              <Card>
                <CardHeader>
                  <CardTitle className='flex items-center'>
                    <Mail className='mr-2' /> Email
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className='text-muted-foreground'>support@fitflow.com</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className='flex items-center'>
                    <Phone className='mr-2' /> Phone
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className='text-muted-foreground'>+1 (555) 123-4567</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className='flex items-center'>
                    <MapPin className='mr-2' /> Address
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className='text-muted-foreground'>
                    123 Fitness Street
                    <br />
                    New York, NY 10001
                    <br />
                    United States
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </ContentSection>
      </div>
    </PageTransition>
  );
}

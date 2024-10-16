'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', { name, email, subject, message });
    // Reset form fields
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
  };

  return (
    <div className='container mx-auto px-4 py-12'>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className='text-4xl font-bold mb-8 text-center'>Contact Us</h1>
        <div className='grid md:grid-cols-2 gap-12'>
          <Card>
            <CardHeader>
              <CardTitle>Get in Touch</CardTitle>
              <CardDescription>
                We&apos;d love to hear from you. Fill out the form below and
                we&apos;ll get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className='space-y-4'>
                <Input
                  placeholder='Your Name'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                <Input
                  type='email'
                  placeholder='Your Email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <Select value={subject} onValueChange={setSubject}>
                  <SelectTrigger>
                    <SelectValue placeholder='Subject' />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value='general'>General Inquiry</SelectItem>
                    <SelectItem value='order'>Order Status</SelectItem>
                    <SelectItem value='return'>Returns</SelectItem>
                    <SelectItem value='feedback'>Feedback</SelectItem>
                  </SelectContent>
                </Select>
                <Textarea
                  placeholder='Your Message'
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  rows={5}
                />
                <Button type='submit' className='w-full'>
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
          <div className='space-y-8'>
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className='space-y-4'>
                <div className='flex items-center space-x-4'>
                  <Mail className='h-6 w-6 text-primary' />
                  <span>support@stylestrider.com</span>
                </div>
                <div className='flex items-center space-x-4'>
                  <Phone className='h-6 w-6 text-primary' />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className='flex items-center space-x-4'>
                  <MapPin className='h-6 w-6 text-primary' />
                  <span>123 Fashion Ave, Style City, ST 12345</span>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Customer Service Hours</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Monday - Friday: 9:00 AM - 8:00 PM EST</p>
                <p>Saturday - Sunday: 10:00 AM - 6:00 PM EST</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

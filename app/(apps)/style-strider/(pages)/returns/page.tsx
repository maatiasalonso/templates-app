'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeftRight, Clock, AlertCircle, CheckCircle } from 'lucide-react';

export default function ReturnsPage() {
  return (
    <div className='container mx-auto px-4 py-12'>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className='text-4xl font-bold mb-8 text-center'>
          Returns & Exchanges
        </h1>
        <div className='grid md:grid-cols-2 gap-8 mb-12'>
          <Card>
            <CardHeader>
              <CardTitle className='flex items-center'>
                <ArrowLeftRight className='mr-2 h-6 w-6' />
                Our Return Policy
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                We offer a 30-day return policy for all unworn items in their
                original condition with tags attached. If you&apos;re not
                completely satisfied with your purchase, we&apos;re here to
                help.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className='flex items-center'>
                <Clock className='mr-2 h-6 w-6' />
                Return Window
              </CardTitle>
            </CardHeader>

            <CardContent>
              <p>
                You have 30 days from the date of delivery to initiate a return
                or exchange. After 30 days, all sales are considered final.
              </p>
            </CardContent>
          </Card>
        </div>
        <Card className='mb-12'>
          <CardHeader>
            <CardTitle>How to Return an Item</CardTitle>
          </CardHeader>
          <CardContent className='space-y-4'>
            <ol className='list-decimal list-inside space-y-2'>
              <li>Log in to your account and go to your order history.</li>
              <li>
                Select the item(s) you wish to return and choose a reason for
                the return.
              </li>
              <li>Print the prepaid return label provided.</li>
              <li>
                Pack the item(s) securely in their original packaging if
                possible.
              </li>
              <li>
                Attach the return label to your package and drop it off at any
                authorized shipping location.
              </li>
            </ol>
            <Button className='mt-4'>Initiate a Return</Button>
          </CardContent>
        </Card>
        <div className='grid md:grid-cols-2 gap-8 mb-12'>
          <Card>
            <CardHeader>
              <CardTitle className='flex items-center'>
                <AlertCircle className='mr-2 h-6 w-6' />
                Non-Returnable Items
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className='list-disc list-inside space-y-2'>
                <li>Intimates and swimwear</li>
                <li>Items marked as final sale</li>
                <li>Gift cards</li>
                <li>Personalized or custom-made items</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className='flex items-center'>
                <CheckCircle className='mr-2 h-6 w-6' />
                Refund Process
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Once we receive and process your return, a refund will be issued
                to your original payment method. Please allow 5-10 business days
                for the refund to appear on your statement.
              </p>
            </CardContent>
          </Card>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Exchanges</CardTitle>
          </CardHeader>
          <CardContent className='space-y-4'>
            <p>
              If you need a different size or color, we recommend returning the
              item for a refund and placing a new order for the desired item.
              This ensures the fastest processing time and guarantees item
              availability.
            </p>
            <p>
              If you have any questions about returns or exchanges, please
              don&apos;t hesitate to contact our customer service team.
            </p>
            <Button variant='outline'>Contact Customer Service</Button>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}

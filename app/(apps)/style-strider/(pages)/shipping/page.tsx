'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Truck, Clock, Globe } from 'lucide-react';

export default function ShippingPage() {
  const shippingMethods = [
    { method: 'Standard Shipping', time: '3-5 business days', cost: '$5.99' },
    { method: 'Express Shipping', time: '2-3 business days', cost: '$12.99' },
    { method: 'Next Day Delivery', time: '1 business day', cost: '$24.99' },
  ];

  return (
    <div className='container mx-auto px-4 py-12'>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className='text-4xl font-bold mb-8 text-center'>
          Shipping Information
        </h1>
        <div className='grid md:grid-cols-3 gap-8 mb-12'>
          <Card>
            <CardHeader>
              <CardTitle className='flex items-center'>
                <Truck className='mr-2 h-6 w-6' />
                Free Shipping
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Enjoy free standard shipping on all orders over $75 within the
                continental US.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className='flex items-center'>
                <Clock className='mr-2 h-6 w-6' />
                Processing Time
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Orders are typically processed within 1-2 business days before
                shipping.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className='flex items-center'>
                <Globe className='mr-2 h-6 w-6' />
                International Shipping
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                We ship to over 100 countries. International rates are
                calculated at checkout.
              </p>
            </CardContent>
          </Card>
        </div>
        <Card className='mb-12'>
          <CardHeader>
            <CardTitle>Domestic Shipping Rates</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Shipping Method</TableHead>
                  <TableHead>Estimated Delivery Time</TableHead>
                  <TableHead>Cost</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {shippingMethods.map((method, index) => (
                  <TableRow key={index}>
                    <TableCell>{method.method}</TableCell>
                    <TableCell>{method.time}</TableCell>
                    <TableCell>{method.cost}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Shipping Policies</CardTitle>
          </CardHeader>
          <CardContent className='space-y-4'>
            <p>
              <strong>Order Tracking:</strong> Once your order has shipped, you
              will receive a confirmation email with tracking information.
            </p>
            <p>
              <strong>Shipping Restrictions:</strong> Some items may be
              restricted from shipping to certain locations due to local laws
              and regulations.
            </p>
            <p>
              <strong>Address Accuracy:</strong> Please ensure your shipping
              address is accurate to avoid delays. We are not responsible for
              packages sent to incorrect addresses provided by customers.
            </p>
            <p>
              <strong>Customs and Import Duties:</strong> International
              customers may be subject to customs and import duties upon arrival
              of their package. These fees are the responsibility of the
              customer.
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}

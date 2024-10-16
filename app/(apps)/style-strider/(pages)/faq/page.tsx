'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

const faqs = [
  {
    question: "What is StyleStrider's return policy?",
    answer:
      'We offer a 30-day return policy for all unworn items in their original condition with tags attached. Please visit our Returns page for more information on how to initiate a return.',
  },
  {
    question: 'How long does shipping take?',
    answer:
      'Standard shipping typically takes 3-5 business days within the continental US. Expedited shipping options are available at checkout. International shipping times may vary.',
  },
  {
    question: 'Do you offer international shipping?',
    answer:
      'Yes, we ship to many countries worldwide. Shipping costs and delivery times vary depending on the destination. You can view available shipping options during checkout.',
  },
  {
    question: 'How can I track my order?',
    answer:
      "Once your order has shipped, you will receive a confirmation email with a tracking number. You can use this number to track your package on our website or the carrier's site.",
  },
  {
    question: 'What sizes do you offer?',
    answer:
      "We offer a wide range of sizes for men, women, and children. Our size charts provide detailed measurements to help you find the perfect fit. If you're unsure, feel free to contact our customer service for assistance.",
  },
  {
    question: 'How do I care for my StyleStrider products?',
    answer:
      'Care instructions are provided on the label of each item. Generally, we recommend washing in cold water and air drying to maintain the quality and longevity of your garments.',
  },
  {
    question: 'Do you offer gift cards?',
    answer:
      'Yes, we offer digital gift cards that can be purchased on our website. These can be sent via email to the recipient of your choice.',
  },
  {
    question: 'What payment methods do you accept?',
    answer:
      'We accept all major credit cards, PayPal, and Apple Pay. All transactions are securely processed to protect your personal information.',
  },
];

type SearchBarProps = {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  handleSearch: () => void;
};

const SearchBar = ({
  searchTerm,
  setSearchTerm,
  handleSearch,
}: SearchBarProps) => (
  <div className='max-w-2xl mx-auto mb-8'>
    <div className='flex space-x-2'>
      <Input
        type='text'
        placeholder='Search FAQs...'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className='flex-grow'
      />
      <Button onClick={handleSearch}>
        <Search className='h-4 w-4 mr-2' />
        Search
      </Button>
    </div>
  </div>
);

type FAQAccordionProps = {
  faqs: typeof faqs;
};

const FAQAccordion = ({ faqs }: FAQAccordionProps) => (
  <Accordion type='single' collapsible className='max-w-2xl mx-auto'>
    {faqs.map((faq, index) => (
      <AccordionItem value={`item-${index}`} key={index}>
        <AccordionTrigger>{faq.question}</AccordionTrigger>
        <AccordionContent>{faq.answer}</AccordionContent>
      </AccordionItem>
    ))}
  </Accordion>
);

export default function FAQPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredFaqs, setFilteredFaqs] = useState(faqs);

  const handleSearch = () => {
    const filtered = faqs.filter(
      (faq) =>
        faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredFaqs(filtered);
  };

  return (
    <div className='container mx-auto px-4 py-12'>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className='text-4xl font-bold mb-8 text-center'>
          Frequently Asked Questions
        </h1>
        <SearchBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          handleSearch={handleSearch}
        />
        <FAQAccordion faqs={filteredFaqs} />
        {filteredFaqs.length === 0 && (
          <p className='text-center mt-8 text-gray-500'>
            No matching FAQs found. Please try a different search term.
          </p>
        )}
      </motion.div>
    </div>
  );
}

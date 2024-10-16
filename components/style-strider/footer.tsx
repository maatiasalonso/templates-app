import Link from 'next/link';
import { Facebook, Instagram } from 'lucide-react';
import XformerlyTwitter from '@/public/icons/X';

const shopLinks = [
  { href: '/style-strider/men', label: 'Men' },
  { href: '/style-strider/women', label: 'Women' },
  { href: '/style-strider/kids', label: 'Kids' },
  { href: '/style-strider/sale', label: 'Sale' },
];

const supportLinks = [
  { href: '/style-strider/contact', label: 'Contact Us' },
  { href: '/style-strider/faq', label: 'FAQ' },
  { href: '/style-strider/shipping', label: 'Shipping' },
  { href: '/style-strider/returns', label: 'Returns' },
];

interface FooterLinksProps {
  title: string;
  links: Array<{ href: string; label: string }>;
}

const FooterLinks: React.FC<FooterLinksProps> = ({ title, links }) => (
  <div>
    <h3 className='text-sm font-semibold text-gray-400 tracking-wider uppercase'>
      {title}
    </h3>
    <ul className='mt-4 space-y-4'>
      {links.map((link) => (
        <li key={link.href}>
          <Link
            href={link.href}
            className='text-base text-gray-300 hover:text-white'
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

const Newsletter: React.FC = () => (
  <div className='mt-8 xl:mt-0'>
    <h3 className='text-sm font-semibold text-gray-400 tracking-wider uppercase'>
      Subscribe to our newsletter
    </h3>
    <p className='mt-4 text-base text-gray-300'>
      The latest news, articles, and resources, sent to your inbox weekly.
    </p>
    <form className='mt-4 sm:flex sm:max-w-md'>
      <label htmlFor='email-address' className='sr-only'>
        Email address
      </label>
      <input
        type='email'
        name='email-address'
        id='email-address'
        autoComplete='email'
        required
        className='appearance-none min-w-0 w-full bg-white border border-transparent rounded-md py-2 px-4 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white focus:border-white focus:placeholder-gray-400'
        placeholder='Enter your email'
      />
      <div className='mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0'>
        <button
          type='submit'
          className='w-full bg-indigo-500 border border-transparent rounded-md py-2 px-4 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500'
        >
          Subscribe
        </button>
      </div>
    </form>
  </div>
);

const socialMediaLinks = [
  { href: '#', label: 'Facebook', icon: <Facebook className='size-6' /> },
  { href: '#', label: 'X', icon: <XformerlyTwitter className='size-5' /> },
  { href: '#', label: 'Instagram', icon: <Instagram className='size-6' /> },
];

const SocialMediaLinks: React.FC = () => (
  <div className='flex space-x-6 md:order-2 items-center'>
    {socialMediaLinks.map((link) => (
      <Link
        key={link.label}
        href={link.href}
        className='text-gray-400 hover:text-gray-300'
      >
        <span className='sr-only'>{link.label}</span>
        {link.icon}
      </Link>
    ))}
  </div>
);

export function Footer() {
  return (
    <footer className='bg-gray-900 text-white'>
      <div className='max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8'>
        <div className='xl:grid xl:grid-cols-3 xl:gap-8'>
          <div className='grid grid-cols-2 gap-8 xl:col-span-2'>
            <div className='md:grid md:grid-cols-2 md:gap-8'>
              <FooterLinks title='Shop' links={shopLinks} />
              <FooterLinks title='Support' links={supportLinks} />
            </div>
          </div>
          <Newsletter />
        </div>
        <div className='mt-8 border-t border-gray-700 pt-8 md:flex md:items-center md:justify-between'>
          <SocialMediaLinks />
          <p className='mt-8 text-base text-gray-400 md:mt-0 md:order-1'>
            &copy; 2023 StyleStrider, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

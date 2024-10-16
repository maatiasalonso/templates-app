import Link from 'next/link';
import { Dumbbell } from 'lucide-react';

const footerSections = [
  {
    title: 'Product',
    links: [
      { name: 'Features', href: '/fit-flow/features' },
      { name: 'Pricing', href: '/fit-flow/pricing' },
      { name: 'FAQ', href: '/fit-flow/faq' },
    ],
  },
  {
    title: 'Company',
    links: [
      { name: 'About Us', href: '/fit-flow/about-us' },
      { name: 'Careers', href: '/fit-flow/careers' },
      { name: 'Contact', href: '/fit-flow/contact' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { name: 'Blog', href: '/fit-flow/blog' },
      { name: 'Guides', href: '/fit-flow/guides' },
      { name: 'Support', href: '/fit-flow/support' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { name: 'Privacy Policy', href: '/fit-flow/privacy' },
      { name: 'Terms of Service', href: '/fit-flow/terms' },
      { name: 'Cookie Policy', href: '/fit-flow/cookies' },
    ],
  },
];

export function Footer() {
  return (
    <footer className='bg-muted flex flex-col items-center px-4 md:px-14'>
      <div className='container py-12 md:py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8'>
        {footerSections.map((section) => (
          <div key={section.title}>
            <h3 className='font-bold mb-4'>{section.title}</h3>
            <ul className='space-y-2'>
              {section.links.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className='text-sm text-muted-foreground hover:text-primary'
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className='container py-6 flex flex-col md:flex-row justify-between items-center border-t'>
        <div className='flex items-center space-x-2 mb-4 md:mb-0'>
          <Dumbbell className='h-6 w-6' />
          <span className='font-bold text-xl'>FitFlow</span>
        </div>
        <p className='text-sm text-muted-foreground text-center md:text-left'>
          © {new Date().getFullYear()} FitFlow. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

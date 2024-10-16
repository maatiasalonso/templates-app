import { Navbar } from '@/components/fit-flow/navbar';
import { Footer } from '@/components/fit-flow/footer';
import { Providers } from '@/components/providers';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
      <div className='flex flex-col min-h-screen'>
        <Navbar />
        <main className='flex-grow px-4 md:px-0'>{children}</main>
        <Footer />
      </div>
    </Providers>
  );
}

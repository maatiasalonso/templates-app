import { Navbar } from '@/components/style-strider/navbar';
import { Footer } from '@/components/style-strider/footer';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='flex flex-col min-h-screen'>
      <header className='sticky top-0 z-50'>
        <Navbar />
      </header>
      <main className='flex-grow'>{children}</main>
      <Footer />
    </div>
  );
}

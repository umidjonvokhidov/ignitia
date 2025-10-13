import TopBanner from '@/components/TopBanner';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function PagesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className='relative'>
      <TopBanner />
      <Navigation />
      {children}
      <Footer />
    </main>
  );
}

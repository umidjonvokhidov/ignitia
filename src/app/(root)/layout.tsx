import TopBanner from '@/components/TopBanner';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function PagesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="relative mx-auto w-full grid grid-cols-[40px_1fr_40px] md:grid-cols-[80px_1fr_80px] xl:grid-cols-[120px_1fr_120px] max-w-[1536px] overflow-hidden">
      <div className="h-full relative w-full bg-[url(/icons/Pattern.svg)] bg-[length:120px_120px] bg-repeat border-x border-white/8" />
      <div className="w-full min-w-0 flex flex-col">
        <TopBanner />
        <Navigation />
        {children}
        <Footer />
      </div>
      <div className="h-full relative w-full bg-[url(/icons/Pattern.svg)] bg-[length:120px_120px] bg-repeat border-x border-white/8" />
    </main>
  );
}

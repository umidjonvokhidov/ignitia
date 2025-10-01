import TopBanner from "@/components/TopBanner";
import Navigation from "@/components/Navigation";
import Footer from "@/sections/Footer";

export default function PagesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <TopBanner />
      <Navigation />
      {children}
      <Footer />
    </main>
  );
}

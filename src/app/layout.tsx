import type { Metadata } from 'next';
import { Inter, Instrument_Serif } from 'next/font/google';
import './globals.css';


const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

const instrumentSerif = Instrument_Serif({
  variable: '--font-instrument-serif',
  subsets: ['latin'],
  weight: ['400'],
  style: ['italic'],
});

export const metadata: Metadata = {
  title: 'Ignitia - Modern User Management & SaaS Platform',
  description: 'Ignitia is a comprehensive user management and SaaS platform designed to streamline your business operations. Manage users, track analytics, and scale your business with our modern, intuitive interface.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${instrumentSerif.variable} antialiased grid grid-cols-[40px_1fr_40px] md:grid-cols-[80px_1fr_80px] lg:grid-cols-[120px_1fr_120px] min-h-screen`}
      >
        <div className='h-full relative w-full bg-[url(/icons/Pattern.svg)] bg-[length:120px_120px] bg-repeat border-r border-white/8' />
        {children}
        <div className='h-full relative w-full bg-[url(/icons/Pattern.svg)] bg-[length:120px_120px] bg-repeat border-l border-white/8' />
      </body>
    </html>
  );
}

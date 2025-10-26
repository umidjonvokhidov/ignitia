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
  style: ['italic', 'normal'],
});

export const metadata: Metadata = {
  title: {
    default: 'Ignitia - Modern User Management & SaaS Platform',
    template: 'Ignitia - %s',
  },
  description:
    'Ignitia is a comprehensive user management and SaaS platform designed to streamline your business operations. Manage users, track analytics, and scale your business with our modern, intuitive interface.',
  twitter: {
    card: 'summary_large_image',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${instrumentSerif.variable} antialiased min-h-screen dark`}
      >
        {children}
      </body>
    </html>
  );
}

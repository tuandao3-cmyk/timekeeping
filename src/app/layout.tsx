import type { Metadata } from 'next';
import localFont from 'next/font/local';
import Header from '@/components/header';
import Footer from '@/components/footer';
import './globals.css';
import './Partner.module.css';
import ThemeRegistry from './theme-registry';
import '@fontsource/inter';
import { HydrationBoundary } from '@tanstack/react-query';

import ClientOnlyQueryClientProvider from './ClientOnlyQueryClientProvider';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'HyraCap',
  description: 'HyraCap is a platform for managing your capital.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ThemeRegistry>
          <ClientOnlyQueryClientProvider>
            <HydrationBoundary>
              <Header />
              <div className="py-7" />
              {children}
              <Footer />
            </HydrationBoundary>
          </ClientOnlyQueryClientProvider>
        </ThemeRegistry>
      </body>
    </html>
  );
}

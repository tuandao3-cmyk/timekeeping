import '@fontsource/inter';
import { HydrationBoundary } from '@tanstack/react-query';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import ThemeRegistry from './theme-registry';

import AOSProvider from '@/components/AOSProvider';
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
          content="width=device-width, initial-scale=1.0, user-scalable=no"
        ></meta>

        <link rel="icon" href="/favicon.ico" />
        <link
          rel="preload"
          href="/fonts/GeistVF.woff"
          as="font"
          type="font/woff"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/GeistMonoVF.woff"
          as="font"
          type="font/woff"
          crossOrigin="anonymous"
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ThemeRegistry>
          <ClientOnlyQueryClientProvider>
            <HydrationBoundary>
              <AOSProvider>
                {/* <Header /> */}
                {/* <div className="pt-[70px]" /> */}
                {children}
                {/* <Footer /> */}
              </AOSProvider>
            </HydrationBoundary>
          </ClientOnlyQueryClientProvider>
        </ThemeRegistry>
      </body>
    </html>
  );
}

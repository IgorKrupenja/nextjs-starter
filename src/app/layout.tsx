import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { PropsWithChildren, ReactElement } from 'react';

import { ThemeProvider } from '@/components/common/theme-provider';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { cn } from '@/lib/utils';

const fontSans = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Next.js Starter 🚀',
  description: 'Your next billion dollar idea.',
  icons: {
    icon: '/icon.svg',
    apple: '/apple-touch-icon.png',
  },
  manifest: 'manifest.webmanifest',
};

export default function RootLayout({ children }: PropsWithChildren): ReactElement {
  return (
    <html suppressHydrationWarning lang="en">
      <body
        className={cn(
          'flex min-h-dvh min-w-full justify-center bg-background font-sans antialiased',
          fontSans.variable,
        )}
      >
        {/* Cannot add in metadata.icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="relative m-4 flex w-[40rem] flex-col items-center justify-center">
            <ThemeToggle className="absolute right-0 top-0 sm:top-3" />
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}

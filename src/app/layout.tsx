import '../styles/globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { PropsWithChildren, ReactElement } from 'react';

import { ThemeProvider } from '@/components/common/theme-provider';
import { ThemeToggle } from '@/components/common/theme-toggle';
import { Toaster } from '@/components/ui/toaster';
import { cn } from '@/lib/utils';

const fontSans = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Next.js Starter 🚀',
  description: 'Your next billion dollar idea starts here.',
  icons: {
    icon: '/icon.svg',
    apple: '/apple-touch-icon.png',
  },
  manifest: 'manifest.webmanifest',
};

export default function RootLayout({ children }: PropsWithChildren): ReactElement {
  return (
    // suppressHydrationWarning warnings with ThemeProvider
    // https://github.com/vercel/next.js/issues/49350#issuecomment-1540169181
    <html suppressHydrationWarning lang="en">
      <body
        className={cn(
          'flex min-h-dvh min-w-full justify-center bg-background font-sans antialiased',
          fontSans.variable,
        )}
      >
        {/* Cannot easily add in metadata.icons */}
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
        <Toaster />
      </body>
    </html>
  );
}

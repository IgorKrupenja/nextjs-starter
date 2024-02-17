import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { PropsWithChildren, ReactElement } from 'react';

import { ThemeProvider } from '@/components/theme-provider';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { cn } from '@/lib/utils';

const fontSans = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: '🚀🚀🚀',
  description: 'Your next billion dollar startup.',
};

export default function RootLayout({ children }: PropsWithChildren): ReactElement {
  return (
    <html suppressHydrationWarning lang="en">
      <body
        className={cn(
          'flex min-w-full justify-center bg-background font-sans antialiased',
          fontSans.variable,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="relative m-4 flex min-h-screen w-[40rem] flex-col items-center justify-center">
            <ThemeToggle className="absolute right-0 top-3" />
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}

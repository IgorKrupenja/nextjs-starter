import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { PropsWithChildren, ReactElement } from 'react';

import { ThemeProvider } from '@/components/theme-provider';
import { ModeToggle } from '@/components/ui/mode-toggle';
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
          'flex min-h-screen min-w-full items-center justify-center bg-background font-sans antialiased',
          fontSans.variable,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ModeToggle className="absolute right-5 top-5" />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

'use client';

import { ThemeProvider as NextThemeProvider } from 'next-themes';
import { type ThemeProviderProps } from 'next-themes/dist/types';
import { ReactElement } from 'react';

export function ThemeProvider({ children, ...props }: ThemeProviderProps): ReactElement {
  return <NextThemeProvider {...props}>{children}</NextThemeProvider>;
}

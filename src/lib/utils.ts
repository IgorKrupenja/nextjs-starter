import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { SafeParseReturnType } from 'zod';

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

export function getErrorsFromParseResult(
  parseResult: SafeParseReturnType<unknown, unknown>,
): Record<string, string> {
  if (parseResult.success) return {};

  const errors: Record<string, string[]> = {};

  parseResult.error.issues.forEach(({ path, message }) => {
    const key = path.join('.');
    if (!errors[key]) errors[key] = [];
    errors[key].push(message);
  });

  return Object.fromEntries(
    Object.entries(errors).map(([key, messages]) => [key, messages.join(', ')]),
  );
}

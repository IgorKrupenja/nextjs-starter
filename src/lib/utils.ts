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

  return parseResult.error.issues.reduce<Record<string, string>>((acc, { path, message }) => {
    acc[path.join('.')] = message;
    return acc;
  }, {});
}

import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { SafeParseReturnType } from 'zod';

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

export function getErrorsFromParseResult<T>(
  parseResult: SafeParseReturnType<T, T>,
): Record<string, string> {
  if (parseResult.success) {
    return {};
  }

  return parseResult.error.issues.reduce<Record<string, string>>((acc, issue) => {
    return {
      ...acc,
      [issue.path.join('.')]: issue.message,
    };
  }, {});
}

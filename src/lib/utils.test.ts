import { SafeParseReturnType } from 'zod';

import { cn, getErrorsFromParseResult } from './utils';

describe('cn', () => {
  it('should concatenate class names', () => {
    const result = cn('class1', 'class2', 'class3');
    expect(result).toBe('class1 class2 class3');
  });

  it('should handle empty inputs', () => {
    const result = cn();
    expect(result).toBe('');
  });

  it('should handle falsy inputs', () => {
    const result = cn('class1', null, undefined, false, 'class2');
    expect(result).toBe('class1 class2');
  });
});

describe('getErrorsFromParseResult', () => {
  it('should return an empty object if parse result is successful', () => {
    const parseResult = {
      success: true,
      error: null,
    } as unknown as SafeParseReturnType<unknown, unknown>;
    const result = getErrorsFromParseResult(parseResult);

    expect(result).toEqual({});
  });

  it('should return an object with error messages if parse result is not successful', () => {
    const parseResult = {
      success: false,
      error: {
        issues: [
          { path: ['name'], message: 'Name is required' },
          { path: ['email'], message: 'Email is required' },
        ],
      },
    } as unknown as SafeParseReturnType<unknown, unknown>;
    const result = getErrorsFromParseResult(parseResult);

    expect(result).toEqual({
      name: 'Name is required',
      email: 'Email is required',
    });
  });
});

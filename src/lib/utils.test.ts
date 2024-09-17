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

  it('should handle nested paths correctly', () => {
    const parseResult = {
      success: false,
      error: {
        issues: [
          { path: ['user', 'name'], message: 'Name is too short' },
          { path: ['user', 'address', 'zipCode'], message: 'Invalid zip code' },
        ],
      },
    } as unknown as SafeParseReturnType<unknown, unknown>;
    const result = getErrorsFromParseResult(parseResult);

    expect(result).toEqual({
      'user.name': 'Name is too short',
      'user.address.zipCode': 'Invalid zip code',
    });
  });

  it('should handle array indices in paths', () => {
    const parseResult = {
      success: false,
      error: {
        issues: [
          { path: ['items', 0, 'name'], message: 'Item name is required' },
          { path: ['items', 1, 'price'], message: 'Price must be positive' },
        ],
      },
    } as unknown as SafeParseReturnType<unknown, unknown>;
    const result = getErrorsFromParseResult(parseResult);

    expect(result).toEqual({
      'items.0.name': 'Item name is required',
      'items.1.price': 'Price must be positive',
    });
  });

  it('should handle multiple errors for the same path', () => {
    const parseResult = {
      success: false,
      error: {
        issues: [
          { path: ['password'], message: 'Password is too short' },
          { path: ['password'], message: 'Password must contain a number' },
        ],
      },
    } as unknown as SafeParseReturnType<unknown, unknown>;
    const result = getErrorsFromParseResult(parseResult);

    expect(result).toEqual({
      password: 'Password is too short, Password must contain a number',
    });
  });

  it('should return an empty object if there are no issues', () => {
    const parseResult = {
      success: false,
      error: {
        issues: [],
      },
    } as unknown as SafeParseReturnType<unknown, unknown>;
    const result = getErrorsFromParseResult(parseResult);

    expect(result).toEqual({});
  });
});

import { cn } from './utils';

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

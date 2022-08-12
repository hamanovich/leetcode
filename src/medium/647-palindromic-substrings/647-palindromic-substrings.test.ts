import { countSubstrings } from './647-palindromic-substrings';
import { countSubstrings as countSubstrings2 } from './647-palindromic-substrings-2';

describe('countSubstrings', () => {
  test('Input: s = "abc"; Output: 3', () => {
    expect(countSubstrings('abc')).toBe(3);
    expect(countSubstrings2('abc')).toBe(3);
  });

  test('Input: s = "aaa"; Output: 6', () => {
    expect(countSubstrings('aaa')).toBe(6);
    expect(countSubstrings2('aaa')).toBe(6);
  });
});

import { longestPalindrome } from './409-longest-palindrome';
import { longestPalindrome as longestPalindrome2 } from './409-longest-palindrome-2';

describe('longestPalindrome', () => {
  test('s = "abccccdd"', () => {
    expect(longestPalindrome('abccccdd')).toBe(7);
    expect(longestPalindrome2('abccccdd')).toBe(8);
  });

  test('s = "a"', () => {
    expect(longestPalindrome('a')).toBe(1);
    expect(longestPalindrome2('a')).toBe(1);
  });
});

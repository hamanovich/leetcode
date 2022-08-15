import { longestPalindrome } from './5-longest-palindromic-substring';

describe('longestPalindrome', () => {
  test('Input: s = "babad"; Output: "bab"', () => {
    expect(longestPalindrome('babad')).toBe('bab');
  });

  test('Input: s = "cbbd"; Output: "bb"', () => {
    expect(longestPalindrome('cbbd')).toBe('bb');
  });

  test('Input: s = "a"; Output: "a"', () => {
    expect(longestPalindrome('a')).toBe('a');
  });
});

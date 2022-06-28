import { lengthOfLongestSubstring } from './3-longest-substring-without-repeating-characters';
import { lengthOfLongestSubstring as lengthOfLongestSubstring2 } from './3-longest-substring-without-repeating-characters-2';
import { lengthOfLongestSubstring as lengthOfLongestSubstring3 } from './3-longest-substring-without-repeating-characters-3';

describe('lengthOfLongestSubstring', () => {
  test('Input: s = "abcabcbb"; Output: 3', () => {
    expect(lengthOfLongestSubstring('abcabcbb')).toBe(3);
    expect(lengthOfLongestSubstring2('abcabcbb')).toBe(3);
    expect(lengthOfLongestSubstring3('abcabcbb')).toBe(3);
  });

  test('Input: s = "bbbbb"; Output: 1', () => {
    expect(lengthOfLongestSubstring('bbbbb')).toBe(1);
    expect(lengthOfLongestSubstring2('bbbbb')).toBe(1);
    expect(lengthOfLongestSubstring3('bbbbb')).toBe(1);
  });

  test('Input: s = "pwwkew"; Output: 3', () => {
    expect(lengthOfLongestSubstring('pwwkew')).toBe(3);
    expect(lengthOfLongestSubstring2('pwwkew')).toBe(3);
    expect(lengthOfLongestSubstring3('pwwkew')).toBe(3);
  });

  test('Input: s = " "; Output: 1', () => {
    expect(lengthOfLongestSubstring('a')).toBe(1);
    expect(lengthOfLongestSubstring2('a')).toBe(1);
    expect(lengthOfLongestSubstring3('a')).toBe(1);
  });

  test('Input: s = "au"; Output: 2', () => {
    expect(lengthOfLongestSubstring('au')).toBe(2);
    expect(lengthOfLongestSubstring2('au')).toBe(2);
    expect(lengthOfLongestSubstring3('au')).toBe(2);
  });

  test('Input: s = "dvdf"; Output: 3', () => {
    expect(lengthOfLongestSubstring('dvdf')).toBe(3);
    expect(lengthOfLongestSubstring2('dvdf')).toBe(3);
    expect(lengthOfLongestSubstring3('dvdf')).toBe(3);
  });
});

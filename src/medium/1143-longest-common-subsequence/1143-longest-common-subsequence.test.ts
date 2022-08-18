import { longestCommonSubsequence } from './1143-longest-common-subsequence';

describe('longestCommonSubsequence', () => {
  test('Input: text1 = "abcde", text2 = "ace"; Output: 3', () => {
    expect(longestCommonSubsequence('abcde', 'ace')).toBe(3);
  });

  test('Input: text1 = "abc", text2 = "abc"; Output: 3', () => {
    expect(longestCommonSubsequence('abc', 'abc')).toBe(3);
  });

  test('Input: text1 = "abc", text2 = "def"; Output: 0', () => {
    expect(longestCommonSubsequence('abc', 'def')).toBe(0);
  });

  test('Input: text1 = "ezupkr", text2 = "ubmrapg"; Output: 2', () => {
    expect(longestCommonSubsequence('ezupkr', 'ubmrapg')).toBe(2);
  });
});

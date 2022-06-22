import { isSubsequence } from './392-is-subsequence';

describe('isSubsequence', () => {
  test('s = "abc", t = "ahbgdc"', () => {
    expect(isSubsequence('abc', 'ahsssbgdc')).toBeTruthy();
  });

  test('s = "axc", t = "ahbgdc"', () => {
    expect(isSubsequence('axc', 'ahbgdc')).toBeFalsy();
  });

  test('s = "acb", t = "ahbgdc"', () => {
    expect(isSubsequence('acb', 'ahbgdc')).toBeFalsy();
  });
});

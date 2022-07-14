import { removePalindromeSub } from './1332-remove-palindromic-subsequences';

describe('removePalindromeSub', () => {
  test('Input: s = "ababa"; Output: 1', () => {
    expect(removePalindromeSub('ababa')).toBe(1);
  });

  test('Input: s = "abb"; Output: 2', () => {
    expect(removePalindromeSub('abb')).toBe(2);
  });

  test('Input: s = "baabb"; Output: 2', () => {
    expect(removePalindromeSub('baabb')).toBe(2);
  });
});

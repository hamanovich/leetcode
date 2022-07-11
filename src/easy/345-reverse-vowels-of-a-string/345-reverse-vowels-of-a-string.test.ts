import { reverseVowels } from './345-reverse-vowels-of-a-string';

describe('reverseVowels', () => {
  test('Input: s = "hello"; Output: "holle"', () => {
    expect(reverseVowels('hello')).toBe('holle');
  });

  test('Input: s = "leetcode"; Output: "leotcede"', () => {
    expect(reverseVowels('leetcode')).toBe('leotcede');
  });
});

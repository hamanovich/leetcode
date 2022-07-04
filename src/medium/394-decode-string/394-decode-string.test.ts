import { decodeString } from './394-decode-string';

describe('decodeString', () => {
  test('Input: s = "3[a]2[bc]"; Output: "aaabcbc"', () => {
    expect(decodeString('3[a]2[bc]')).toBe('aaabcbc');
  });

  test('Input: s = "3[a2[c]]"; Output: "accaccacc"', () => {
    expect(decodeString('3[a2[c]]')).toBe('accaccacc');
  });

  test('Input: s = "2[abc]3[cd]ef"; Output: "abcabccdcdcdef"', () => {
    expect(decodeString('2[abc]3[cd]ef')).toBe('abcabccdcdcdef');
  });
});

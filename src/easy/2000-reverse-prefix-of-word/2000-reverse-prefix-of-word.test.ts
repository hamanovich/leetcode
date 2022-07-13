import { reversePrefix } from './2000-reverse-prefix-of-word';
import { reversePrefix as reversePrefix2 } from './2000-reverse-prefix-of-word-2';

describe('reversePrefix', () => {
  test('Input: word = "abcdefd", ch = "d"; Output: "dcbaefd"', () => {
    expect(reversePrefix('abcdefd', 'd')).toBe('dcbaefd');
    expect(reversePrefix2('abcdefd', 'd')).toBe('dcbaefd');
  });

  test('Input: word = "xyxzxe", ch = "z"; Output: "zxyxxe"', () => {
    expect(reversePrefix('xyxzxe', 'z')).toBe('zxyxxe');
    expect(reversePrefix2('xyxzxe', 'z')).toBe('zxyxxe');
  });

  test('Input: word = "abcd", ch = "z"; Output: "abcd"', () => {
    expect(reversePrefix('abcd', 'z')).toBe('abcd');
    expect(reversePrefix2('abcd', 'z')).toBe('abcd');
  });
});

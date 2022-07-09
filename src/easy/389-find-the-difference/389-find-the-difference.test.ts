import { findTheDifference } from './389-find-the-difference';

describe('findTheDifference', () => {
  test('Input: s = "abcd", t = "abcde"; Output: "e"', () => {
    expect(findTheDifference('abcd', 'abcde')).toBe('e');
  });

  test('Input: s = "", t = "y"; Output: "y"', () => {
    expect(findTheDifference('', 'y')).toBe('y');
  });

  test('Input: s = "", t = "b"; Output: ""', () => {
    expect(findTheDifference('', 'b')).toBe('b');
  });
});

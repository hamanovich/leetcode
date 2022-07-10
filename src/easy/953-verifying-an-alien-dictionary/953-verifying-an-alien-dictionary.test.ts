import { isAlienSorted } from './953-verifying-an-alien-dictionary';

describe('isAlienSorted', () => {
  test('Input: words = ["hello","leetcode"], order = "hlabcdefgijkmnopqrstuvwxyz"; Output: true', () => {
    expect(isAlienSorted(['hello', 'leetcode'], 'hlabcdefgijkmnopqrstuvwxyz')).toBeTruthy();
  });

  test('Input: words = ["word","world","row"], order = "worldabcefghijkmnpqstuvxyz"; Output: false', () => {
    expect(isAlienSorted(['word', 'world', 'row'], 'worldabcefghijkmnpqstuvxyz')).toBeFalsy();
  });

  test('Input: words = ["apple","app"], order = "abcdefghijklmnopqrstuvwxyz""; Output: false', () => {
    expect(isAlienSorted(['apple', 'app'], 'abcdefghijklmnopqrstuvwxyz')).toBeFalsy();
  });
});

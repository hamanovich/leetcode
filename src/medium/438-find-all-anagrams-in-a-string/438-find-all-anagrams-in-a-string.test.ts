import { findAnagrams } from './438-find-all-anagrams-in-a-string';
import { findAnagrams as findAnagramsSlidingWindowWhile } from './438-find-all-anagrams-in-a-string-2';
import { findAnagrams as findAnagramsSlidingWindowFor } from './438-find-all-anagrams-in-a-string-3';

describe('findAnagrams', () => {
  test('Input: s = "cbaebabacd", p = "abc"; Output: [0,6]', () => {
    expect(findAnagrams('cbaebabacd', 'abc')).toStrictEqual([0, 6]);
    expect(findAnagramsSlidingWindowWhile('cbaebabacd', 'abc')).toStrictEqual([0, 6]);
    expect(findAnagramsSlidingWindowFor('cbaebabacd', 'abc')).toStrictEqual([0, 6]);
  });

  test('Input: s = "abab", p = "ab"; Output: [0,1,2]', () => {
    expect(findAnagrams('abab', 'ab')).toStrictEqual([0, 1, 2]);
    expect(findAnagramsSlidingWindowWhile('abab', 'ab')).toStrictEqual([0, 1, 2]);
    expect(findAnagramsSlidingWindowFor('abab', 'ab')).toStrictEqual([0, 1, 2]);
  });

  test('Input: s = "asdfghasdddfghasdfgh", p = "ddf"; Output: [9]', () => {
    expect(findAnagrams('asdfghasdddfghasdfgh', 'ddf')).toStrictEqual([9]);
    expect(findAnagramsSlidingWindowWhile('asdfghasdddfghasdfgh', 'ddf')).toStrictEqual([9]);
    expect(findAnagramsSlidingWindowFor('asdfghasdddfghasdfgh', 'ddf')).toStrictEqual([9]);
  });
});

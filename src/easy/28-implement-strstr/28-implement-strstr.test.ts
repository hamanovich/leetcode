import { strStr } from './28-implement-strstr';
import { strStr as strStr2 } from './28-implement-strstr-2';

describe('strStr', () => {
  test('Input: haystack = "hello", needle = "ll"; Output: 2', () => {
    expect(strStr('hello', 'll')).toBe(2);
    expect(strStr2('hello', 'll')).toBe(2);
  });

  test('Input: haystack = "aaaaa", needle = "bba"; Output: -1', () => {
    expect(strStr('aaaaa', 'bba')).toBe(-1);
    expect(strStr2('aaaaa', 'bba')).toBe(-1);
  });

  test('Input: haystack = "a", needle = ""; Output: 0', () => {
    expect(strStr('a', '')).toBe(0);
    expect(strStr2('a', '')).toBe(0);
  });
});

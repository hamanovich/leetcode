import { firstPalindrome } from './2108-find-first-palindromic-string-in-the-array';
import { firstPalindrome as firstPalindrome2 } from './2108-find-first-palindromic-string-in-the-array-2';
import { firstPalindrome as firstPalindrome3 } from './2108-find-first-palindromic-string-in-the-array-3';

describe('firstPalindrome', () => {
  test('Input: words = ["abc","car","ada","racecar","cool"]; Output: "ada"', () => {
    expect(firstPalindrome(['abc', 'car', 'ada', 'racecar', 'cool'])).toBe('ada');
    expect(firstPalindrome2(['abc', 'car', 'ada', 'racecar', 'cool'])).toBe('ada');
    expect(firstPalindrome3(['abc', 'car', 'ada', 'racecar', 'cool'])).toBe('ada');
  });

  test('Input: words = ["notapalindrome","racecar"]; Output: "racecar"', () => {
    expect(firstPalindrome(['notapalindrome', 'racecar'])).toBe('racecar');
    expect(firstPalindrome2(['notapalindrome', 'racecar'])).toBe('racecar');
    expect(firstPalindrome3(['notapalindrome', 'racecar'])).toBe('racecar');
  });

  test('Input: words = ["xngla","e","itrn","y","s","pfp","rfd"]; Output: "e"', () => {
    expect(firstPalindrome(['xngla', 'e', 'itrn', 'y', 's', 'pfp', 'rfd'])).toBe('e');
    expect(firstPalindrome2(['xngla', 'e', 'itrn', 'y', 's', 'pfp', 'rfd'])).toBe('e');
    expect(firstPalindrome3(['xngla', 'e', 'itrn', 'y', 's', 'pfp', 'rfd'])).toBe('e');
  });

  test('Input: words = ["pfsdfvgbnp","rfd"]; Output: ""', () => {
    expect(firstPalindrome(['pfsdfvgbnp', 'rfd'])).toBe('');
    expect(firstPalindrome2(['pfsdfvgbnp', 'rfd'])).toBe('');
    expect(firstPalindrome3(['pfsdfvgbnp', 'rfd'])).toBe('');
  });

  test('Input: words = ["def","ghi"]; Output: ""', () => {
    expect(firstPalindrome(['def', 'ghi'])).toBe('');
    expect(firstPalindrome2(['def', 'ghi'])).toBe('');
    expect(firstPalindrome3(['def', 'ghi'])).toBe('');
  });
});

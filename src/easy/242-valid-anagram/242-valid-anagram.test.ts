import { isAnagram } from './242-valid-anagram';
import { isAnagram as isAnagram2 } from './242-valid-anagram';

describe('isAnagram', () => {
  test('Input: s = "anagram", t = "nagaram"; Output: true', () => {
    expect(isAnagram('anagram', 'nagaram')).toBeTruthy();
    expect(isAnagram2('anagram', 'nagaram')).toBeTruthy();
  });

  test('Input: s = "rat", t = "car"; Output: false', () => {
    expect(isAnagram('rat', 'car')).toBeFalsy();
    expect(isAnagram2('rat', 'car')).toBeFalsy();
  });
});

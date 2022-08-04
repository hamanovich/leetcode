import { letterCombinations } from './17-letter-combinations-of-a-phone-number';

describe('letterCombinations', () => {
  test('Input: digits = "23"; Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]', () => {
    expect(letterCombinations('23')).toEqual(['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf']);
  });

  test('Input: digits = ""; Output: []', () => {
    expect(letterCombinations('')).toEqual([]);
  });

  test('Input: digits = "2"; Output: ["a","b","c"]', () => {
    expect(letterCombinations('2')).toEqual(['a', 'b', 'c']);
  });
});

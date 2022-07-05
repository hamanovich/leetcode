import { characterReplacement } from './424-longest-repeating-character-replacement';

describe('characterReplacement', () => {
  test('Input: s = "ABAB", k = 2; Output: 4', () => {
    expect(characterReplacement('ABAB', 2)).toBe(4);
  });

  test('Input: s = "AABABBA", k = 1; Output: 4', () => {
    expect(characterReplacement('AABABBA', 1)).toBe(4);
  });
});

import { canConstruct } from './383-ransom-note';

describe('canConstruct', () => {
  test('Input: ransomNote = "a", magazine = "b"; Output: false', () => {
    expect(canConstruct('a', 'b')).toBeFalsy();
  });

  test('Input: ransomNote = "aa", magazine = "ab"; Output: false', () => {
    expect(canConstruct('aa', 'ab')).toBeFalsy();
  });

  test('Input: ransomNote = "aa", magazine = "aab"; Output: true', () => {
    expect(canConstruct('aa', 'aab')).toBeTruthy();
  });
});

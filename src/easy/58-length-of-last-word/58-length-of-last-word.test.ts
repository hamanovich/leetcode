import { lengthOfLastWord } from './58-length-of-last-word';

describe('lengthOfLastWord', () => {
  test('Input: s = "Hello World"; Output: 5', () => {
    expect(lengthOfLastWord('Hello World')).toBe(5);
  });

  test('Input: s = "   fly me   to   the moon  "; Output: 4', () => {
    expect(lengthOfLastWord('   fly me   to   the moon  ')).toBe(4);
  });

  test('Input: s = "luffy is still joyboy"; Output: 6', () => {
    expect(lengthOfLastWord('luffy is still joyboy')).toBe(6);
  });
});

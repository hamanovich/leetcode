import { nextGreatestLetter } from './744-find-smallest-letter-greater-than-target';

describe('nextGreatestLetter', () => {
  test('letters = ["c"], target = "a"', () => {
    expect(nextGreatestLetter(['c'], 'a')).toBe('c');
  });

  test('letters = ["c","f","j"], target = "a"', () => {
    expect(nextGreatestLetter(['c', 'f', 'j'], 'a')).toBe('c');
  });

  test('letters = ["c","f","j"], target = "c"', () => {
    expect(nextGreatestLetter(['c', 'f', 'j'], 'c')).toBe('f');
  });

  test('letters = ["c","f","j"], target = "d"', () => {
    expect(nextGreatestLetter(['c', 'f', 'j'], 'd')).toBe('f');
  });

  test('letters = ["c","c","c"], target = "d"', () => {
    expect(nextGreatestLetter(['c', 'c', 'c'], 'd')).toBe('c');
  });
});

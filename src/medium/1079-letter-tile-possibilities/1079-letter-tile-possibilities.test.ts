import { numTilePossibilities } from './1079-letter-tile-possibilities';

describe('numTilePossibilities', () => {
  test('Input: tiles = "AAB"; Output: 8', () => {
    expect(numTilePossibilities('AAB')).toBe(8);
  });

  test('Input: tiles = "AAABBC"; Output: 188', () => {
    expect(numTilePossibilities('AAABBC')).toBe(188);
  });

  test('Input: tiles = "V"; Output: 1', () => {
    expect(numTilePossibilities('V')).toBe(1);
  });
});

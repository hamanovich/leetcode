import { hammingWeight } from './191-number-of-1-bits';

describe('hammingWeight', () => {
  test('Input: n = 00000000000000000000000000001011; Output: 3', () => {
    expect(hammingWeight(0b00000000000000000000000000001011)).toBe(3);
  });

  test('Input: n = 00000000000000000000000010000000; Output: 1', () => {
    expect(hammingWeight(0b00000000000000000000000010000000)).toBe(1);
  });

  test('Input: n = 11111111111111111111111111111101; Output: 31', () => {
    expect(hammingWeight(0b11111111111111111111111111111101)).toBe(31);
  });
});

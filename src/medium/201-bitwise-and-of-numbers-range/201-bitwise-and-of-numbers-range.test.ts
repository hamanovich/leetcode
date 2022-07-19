import { rangeBitwiseAnd } from './201-bitwise-and-of-numbers-range';

describe('rangeBitwiseAnd', () => {
  test('Input: left = 5, right = 7; Output: 4', () => {
    expect(rangeBitwiseAnd(5, 7)).toBe(4);
  });

  test('Input: left = 0, right = 0; Output: 0', () => {
    expect(rangeBitwiseAnd(0, 0)).toBe(0);
  });

  test('Input: left = 1, right = 2147483647; Output: 0', () => {
    expect(rangeBitwiseAnd(1, 2147483647)).toBe(0);
  });
});

import { reverse } from './7-reverse-integer';

describe('reverse', () => {
  test('Input: x = 123; Output: 321', () => {
    expect(reverse(123)).toBe(321);
  });

  test('Input: x = -123; Output: -321', () => {
    expect(reverse(-123)).toBe(-321);
  });

  test('Input: x = 120; Output: 21', () => {
    expect(reverse(120)).toBe(21);
  });

  test('Input: x = 901000; Output: 109', () => {
    expect(reverse(901000)).toBe(109);
  });

  test('Input: x = 1534236469; Output: 0', () => {
    expect(reverse(1534236469)).toBe(0);
  });

  test('Input: x = -2147483648; Output: 0', () => {
    expect(reverse(-2147483648)).toBe(0);
  });
});

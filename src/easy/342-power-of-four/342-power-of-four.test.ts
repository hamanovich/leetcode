import { isPowerOfFour } from './342-power-of-four';

describe('isPowerOfFour', () => {
  test('Input: n = 16; Output: true', () => {
    expect(isPowerOfFour(16)).toBeTruthy();
  });

  test('Input: n = 5; Output: false', () => {
    expect(isPowerOfFour(5)).toBeFalsy();
  });

  test('Input: n = 1; Output: true', () => {
    expect(isPowerOfFour(1)).toBeTruthy();
  });
});

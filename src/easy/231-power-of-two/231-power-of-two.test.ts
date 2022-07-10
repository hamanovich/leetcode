import { isPowerOfTwo } from './231-power-of-two';

describe('isPowerOfTwo', () => {
  test('Input: n = 16; Output: true', () => {
    expect(isPowerOfTwo(16)).toBeTruthy();
  });

  test('Input: n = 5; Output: false', () => {
    expect(isPowerOfTwo(5)).toBeFalsy();
  });

  test('Input: n = 1; Output: true', () => {
    expect(isPowerOfTwo(1)).toBeTruthy();
  });
});

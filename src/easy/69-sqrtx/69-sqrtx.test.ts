import { mySqrt } from './69-sqrtx';

describe('mySqrt', () => {
  test('Input: x = 4; Output: 2', () => {
    expect(mySqrt(4)).toBe(2);
  });

  test('Input: x = 8; Output: 2', () => {
    expect(mySqrt(8)).toBe(2);
  });

  test('Input: x = 1; Output: 1', () => {
    expect(mySqrt(1)).toBe(1);
  });
});

import { tribonacci } from './1137-n-th-tribonacci-number';

describe('tribonacci', () => {
  test('Input: n = 2; Output: 2', () => {
    expect(tribonacci(2)).toBe(1);
  });

  test('Input: n = 4; Output: 4', () => {
    expect(tribonacci(4)).toBe(4);
  });

  test('Input: n = 25; Output: 1389537', () => {
    expect(tribonacci(25)).toBe(1389537);
  });
});

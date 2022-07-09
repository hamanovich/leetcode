import { isPerfectSquare } from './367-valid-perfect-square';

describe('isPerfectSquare', () => {
  test('Input: num = 16; Output: true', () => {
    expect(isPerfectSquare(16)).toBeTruthy();
  });

  test('Input: num = 14; Output: false', () => {
    expect(isPerfectSquare(14)).toBeFalsy();
  });

  test('Input: num = 1; Output: true', () => {
    expect(isPerfectSquare(1)).toBeTruthy();
  });

  test('Input: num = 9; Output: true', () => {
    expect(isPerfectSquare(9)).toBeTruthy();
  });

  test('Input: num = 4; Output: true', () => {
    expect(isPerfectSquare(4)).toBeTruthy();
  });
});

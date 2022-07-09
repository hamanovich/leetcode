import { addDigits } from './258-add-digits';

describe('addDigits', () => {
  test('Input: num = 38; Output: 2', () => {
    expect(addDigits(38)).toBe(2);
  });

  test('Input: num = 0; Output: 0', () => {
    expect(addDigits(0)).toBe(0);
  });

  test('Input: num = 9; Output: 9', () => {
    expect(addDigits(9)).toBe(9);
  });

  test('Input: num = 18; Output: 9', () => {
    expect(addDigits(18)).toBe(9);
  });
});

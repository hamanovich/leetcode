import { titleToNumber } from './171-excel-sheet-column-number';

describe('titleToNumber', () => {
  test('Input: columnTitle = "A"; Output: 1', () => {
    expect(titleToNumber('A')).toBe(1);
  });

  test('Input: columnTitle = "AB"; Output: 28', () => {
    expect(titleToNumber('AB')).toBe(28);
  });

  test('Input: columnTitle = "ZY"; Output: 701', () => {
    expect(titleToNumber('ZY')).toBe(701);
  });
});

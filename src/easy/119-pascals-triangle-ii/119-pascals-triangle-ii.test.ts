import { getRow } from './119-pascals-triangle-ii';

describe('getRow', () => {
  test('Input: rowIndex = 3; Output: [1,3,3,1]', () => {
    expect(getRow(3)).toEqual([1, 3, 3, 1]);
  });

  test('Input: rowIndex = 0; Output: [1]', () => {
    expect(getRow(0)).toEqual([1]);
  });

  test('Input: rowIndex = 1; Output: [1,1]', () => {
    expect(getRow(1)).toEqual([1, 1]);
  });
});

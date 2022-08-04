import { construct2DArray } from './2022-convert-1d-array-into-2d-array';
import { construct2DArray as construct2DArray2 } from './2022-convert-1d-array-into-2d-array-2';

describe('construct2DArray', () => {
  test('Input: original = [1,2,3,4], m = 2, n = 2;Output: [[1,2],[3,4]]', () => {
    expect(construct2DArray([1, 2, 3, 4], 2, 2)).toEqual([
      [1, 2],
      [3, 4],
    ]);

    expect(construct2DArray2([1, 2, 3, 4], 2, 2)).toEqual([
      [1, 2],
      [3, 4],
    ]);
  });

  test('Input: original = [1,2,3], m = 1, n = 3; Output: [[1,2,3]]', () => {
    expect(construct2DArray([1, 2, 3], 1, 3)).toEqual([[1, 2, 3]]);
    expect(construct2DArray2([1, 2, 3], 1, 3)).toEqual([[1, 2, 3]]);
  });

  test('Input: original = [1,2], m = 1, n = 1; Output: []', () => {
    expect(construct2DArray([1, 2], 1, 1)).toEqual([]);
    expect(construct2DArray2([1, 2], 1, 1)).toEqual([]);
  });
});

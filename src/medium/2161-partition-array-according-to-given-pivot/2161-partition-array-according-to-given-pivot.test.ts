import { pivotArray } from './2161-partition-array-according-to-given-pivot';
import { pivotArray as pivotArray2 } from './2161-partition-array-according-to-given-pivot-2';

describe('pivotArray', () => {
  test('Input: nums = [9,12,5,10,14,3,10], pivot = 10; Output: [9,5,3,10,10,12,14]', () => {
    expect(pivotArray([9, 12, 5, 10, 14, 3, 10], 10)).toStrictEqual([9, 5, 3, 10, 10, 12, 14]);
    expect(pivotArray2([9, 12, 5, 10, 14, 3, 10], 10)).toStrictEqual([9, 5, 3, 10, 10, 12, 14]);
  });

  test('Input: nums = [-3,4,3,2], pivot = 2; Output: [-3,2,4,3]', () => {
    expect(pivotArray([-3, 4, 3, 2], 2)).toStrictEqual([-3, 2, 4, 3]);
    expect(pivotArray2([-3, 4, 3, 2], 2)).toStrictEqual([-3, 2, 4, 3]);
  });

  test('Input: nums = [1,1,1,1,1,1,1,1,1,1,1], pivot = 1; Output: [1,1,1,1,1,1,1,1,1,1,1]', () => {
    expect(pivotArray([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 1)).toStrictEqual([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
    expect(pivotArray2([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 1)).toStrictEqual([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
  });
});

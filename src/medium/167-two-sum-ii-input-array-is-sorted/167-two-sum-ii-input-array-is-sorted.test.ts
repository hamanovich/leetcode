import { twoSum } from './167-two-sum-ii-input-array-is-sorted';

describe('twoSum', () => {
  test('Input: numbers = [-3,3,4,90], target = 0; Output: [1,2]', () => {
    expect(twoSum([-3, 3, 4, 90], 0)).toStrictEqual([1, 2]);
  });

  test('Input: numbers = [2,7,11,15], target = 9; Output: [1,2]', () => {
    expect(twoSum([2, 7, 11, 15], 9)).toStrictEqual([1, 2]);
  });

  test('Input: numbers = [1,2,3,6,9], target = 8; Output: [2,4]', () => {
    expect(twoSum([1, 2, 3, 6, 9], 8)).toStrictEqual([2, 4]);
  });

  test('Input: numbers = [2,3,4], target = 6; Output: [1,3]', () => {
    expect(twoSum([2, 3, 4], 6)).toStrictEqual([1, 3]);
  });

  test('Input: numbers = [-1,0], target = -1; Output: [1,2]', () => {
    expect(twoSum([-1, 0], -1)).toStrictEqual([1, 2]);
  });
});

import { twoSum, twoSum2, twoSum3 } from './1-two-sum';

describe('twoSum', () => {
  test('nums = [2,7,11,15], target = 9', () => {
    expect(twoSum([2, 7, 11, 15], 9)).toStrictEqual([0, 1]);
    expect(twoSum2([2, 7, 11, 15], 9)).toStrictEqual([0, 1]);
    expect(twoSum3([2, 7, 11, 15], 9)).toStrictEqual([0, 1]);
  });

  test('nums = [3,2,4], target = 6', () => {
    // expect(twoSum([3, 2, 4], 6)).toStrictEqual([1, 2]);
    // expect(twoSum2([3, 2, 4], 6)).toStrictEqual([1, 2]);
    expect(twoSum3([3, 2, 4], 6)).toStrictEqual([1, 2]);
  });

  test('nums = [3,3], target = 6', () => {
    expect(twoSum([3, 3], 6)).toStrictEqual([0, 1]);
    expect(twoSum2([3, 3], 6)).toStrictEqual([0, 1]);
    expect(twoSum3([3, 3], 6)).toStrictEqual([0, 1]);
  });

  // exceptional case
  test('nums = [3,3], target = 5', () => {
    expect(twoSum([3, 3], 5)).toStrictEqual([]);
    expect(twoSum2([3, 3], 5)).toStrictEqual([]);
    expect(twoSum3([3, 3], 5)).toStrictEqual([]);
  });
});

import { targetIndices } from './2089-find-target-indices-after-sorting-array';

describe('targetIndices', () => {
  test('Input: nums = [1,2,5,2,3], target = 2; Output: [1,2]', () => {
    expect(targetIndices([1, 2, 5, 2, 3], 2)).toEqual([1, 2]);
  });

  test('Input: nums = [1,2,5,2,3], target = 3; Output: [3]', () => {
    expect(targetIndices([1, 2, 5, 2, 3], 3)).toEqual([3]);
  });

  test('Input: nums = [1,2,5,2,3], target = 5; Output: [4]', () => {
    expect(targetIndices([1, 2, 5, 2, 3], 5)).toEqual([4]);
  });

  test('Input: nums = [100,1,100], target = 100; Output: [1,2]', () => {
    expect(targetIndices([100, 1, 100], 100)).toEqual([1, 2]);
  });
});

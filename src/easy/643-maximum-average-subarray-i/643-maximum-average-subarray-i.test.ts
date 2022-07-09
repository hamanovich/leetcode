import { findMaxAverage } from './643-maximum-average-subarray-i';

describe('findMaxAverage', () => {
  test('Input: nums = [1,12,-5,-6,50,3], k = 4; Output: 12.75000', () => {
    expect(findMaxAverage([1, 12, -5, -6, 50, 3], 4)).toBe(12.75);
  });

  test('Input: nums = [5], k = 1; Output: 5.00000', () => {
    expect(findMaxAverage([5], 1)).toBe(5);
  });
});

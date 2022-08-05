import { numSubarrayProductLessThanK } from './713-subarray-product-less-than-k';

describe('numSubarrayProductLessThanK', () => {
  test('Input: nums = [10,5,2,6], k = 100; Output: 8', () => {
    expect(numSubarrayProductLessThanK([10, 5, 2, 6], 100)).toBe(8);
  });

  test('Input: nums = [1,2,3], k = 0; Output: 0', () => {
    expect(numSubarrayProductLessThanK([1, 2, 3], 0)).toBe(0);
  });
});

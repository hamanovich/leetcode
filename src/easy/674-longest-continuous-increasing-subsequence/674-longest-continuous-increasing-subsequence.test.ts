import { findLengthOfLCIS } from './674-longest-continuous-increasing-subsequence';

describe('findLengthOfLCIS', () => {
  test('Input: nums = [1,3,5,4,7]; Output: 3', () => {
    expect(findLengthOfLCIS([1, 3, 5, 4, 7])).toBe(3);
  });

  test('Input: nums = [2,2,2,2,2]; Output: 1', () => {
    expect(findLengthOfLCIS([2, 2, 2, 2, 2])).toBe(1);
  });

  test('Input: nums = [1,3,5,7]; Output: 1', () => {
    expect(findLengthOfLCIS([1, 3, 5, 7])).toBe(4);
  });
});

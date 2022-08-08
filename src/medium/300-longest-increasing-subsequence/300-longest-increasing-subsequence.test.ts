import { lengthOfLIS } from './300-longest-increasing-subsequence';
import { lengthOfLIS as lengthOfLIS2 } from './300-longest-increasing-subsequence-2';

describe('lengthOfLIS', () => {
  test('Input: nums = [10,9,2,5,3,7,101,18]; Output: 4', () => {
    expect(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18])).toBe(4);
    expect(lengthOfLIS2([10, 9, 2, 5, 3, 7, 101, 18])).toBe(4);
  });

  test('Input: nums = [0,1,0,3,2,3]; Output: 4', () => {
    expect(lengthOfLIS([0, 1, 0, 3, 2, 3])).toBe(4);
    expect(lengthOfLIS2([0, 1, 0, 3, 2, 3])).toBe(4);
  });

  test('Input: nums = [7,7,7,7,7,7,7]; Output: 1', () => {
    expect(lengthOfLIS([7, 7, 7, 7, 7, 7, 7])).toBe(1);
    expect(lengthOfLIS2([7, 7, 7, 7, 7, 7, 7])).toBe(1);
  });
});

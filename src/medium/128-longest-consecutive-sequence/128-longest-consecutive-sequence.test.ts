import { longestConsecutive } from './128-longest-consecutive-sequence';
import { longestConsecutive as longestConsecutive2 } from './128-longest-consecutive-sequence-2';

describe('longestConsecutive', () => {
  test('Input: nums = [100,4,200,1,3,2]; Output: 4', () => {
    expect(longestConsecutive([100, 4, 200, 1, 3, 2])).toBe(4);
    expect(longestConsecutive2([100, 4, 200, 1, 3, 2])).toBe(4);
  });

  test('Input: nums = [0,3,7,2,5,8,4,6,0,1]; Output: 9', () => {
    expect(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1])).toBe(9);
    expect(longestConsecutive2([0, 3, 7, 2, 5, 8, 4, 6, 0, 1])).toBe(9);
  });
});

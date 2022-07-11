import { findMaxConsecutiveOnes } from './485-max-consecutive-ones';
import { findMaxConsecutiveOnes as findMaxConsecutiveOnes2 } from './485-max-consecutive-ones-2';

describe('findMaxConsecutiveOnes', () => {
  test('Input: nums = [1,1,0,1,1,1]; Output: 3', () => {
    expect(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1])).toBe(3);
    expect(findMaxConsecutiveOnes2([1, 1, 0, 1, 1, 1])).toBe(3);
  });

  test('Input: nums = [1,0,1,1,0,1]; Output: 2', () => {
    expect(findMaxConsecutiveOnes([1, 0, 1, 1, 0, 1])).toBe(2);
    expect(findMaxConsecutiveOnes2([1, 0, 1, 1, 0, 1])).toBe(2);
  });
});

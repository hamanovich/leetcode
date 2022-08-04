import { findMin } from './153-find-minimum-in-rotated-sorted-array';

describe('findMin', () => {
  test('Input: nums = [3,4,5,1,2]; Output: 1', () => {
    expect(findMin([3, 4, 5, 1, 2])).toBe(1);
  });

  test('Input: nums = [4,5,6,7,0,1,2]; Output: 0', () => {
    expect(findMin([4, 5, 6, 7, 0, 1, 2])).toBe(0);
  });

  test('Input: nums = [11,13,15,17]; Output: 11', () => {
    expect(findMin([11, 13, 15, 17])).toBe(11);
  });
});

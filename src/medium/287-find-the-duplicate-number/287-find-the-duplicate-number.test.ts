import { findDuplicate } from './287-find-the-duplicate-number';

describe('findDuplicate', () => {
  test('Input: nums = [1,3,4,2,2]; Output: 2', () => {
    expect(findDuplicate([1, 3, 4, 2, 2])).toBe(2);
  });

  test('Input: nums = [3,1,3,4,2]; Output: 3', () => {
    expect(findDuplicate([3, 1, 3, 4, 2])).toBe(3);
  });

  test('Input: nums = [3]; Output: -1', () => {
    expect(findDuplicate([3])).toBe(-1);
  });
});

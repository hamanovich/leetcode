import { intersect } from './350-intersection-of-two-arrays-ii';

describe('intersect', () => {
  test('Input: nums1 = [1,2,2,1], nums2 = [2,2]; Output: [2,2]', () => {
    expect(intersect([1, 2, 2, 1], [2, 2])).toEqual([2, 2]);
  });

  test('Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]; Output: [4,9]', () => {
    expect(intersect([4, 9, 5], [9, 4, 9, 8, 4])).toEqual([4, 9]);
  });

  test('Input: nums1 = [1,2,2,1], nums2 = [2]; Output: [2]', () => {
    expect(intersect([1, 2, 2, 1], [2])).toEqual([2]);
  });
});

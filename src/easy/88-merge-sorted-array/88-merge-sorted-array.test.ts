import { merge } from './88-merge-sorted-array';

describe('merge', () => {
  test('Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3; Output: [1,2,2,3,5,6]', () => {
    const output = [1, 2, 2, 3, 5, 6];
    const nums1 = [1, 2, 3, 0, 0, 0];
    const nums2 = [2, 5, 6];
    merge(nums1, 3, nums2);
    expect(nums1).toStrictEqual(output);
  });

  test('Input: nums1 = [1], m = 1, nums2 = [], n = 0; Output: [1]', () => {
    const output = [0, 1];
    const nums1 = [1];
    const nums2 = [0];
    merge(nums1, 1, nums2);
    expect(nums1).toStrictEqual(output);
  });

  test('Input: nums1 = [0], m = 0, nums2 = [1], n = 1; Output: [1]', () => {
    const output = [1];
    const nums1 = [0];
    const nums2 = [1];
    merge(nums1, 0, nums2);
    expect(nums1).toStrictEqual(output);
  });
});

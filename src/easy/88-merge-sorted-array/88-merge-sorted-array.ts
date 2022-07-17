// https://leetcode.com/problems/merge-sorted-array/

export const merge = (nums1: number[], m: number, nums2: number[]): void => {
  nums1.splice(m);

  let i = 0;
  let j = 0;

  while (j < nums2.length) {
    if (nums1[i] === undefined || nums1[i] > nums2[j]) {
      nums1.splice(i, 0, nums2[j]);
      j++;
      i++;
    } else i++;
  }
};

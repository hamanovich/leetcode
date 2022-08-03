// https://leetcode.com/problems/intersection-of-two-arrays-ii/

export const intersect = (nums1: number[], nums2: number[]): number[] => {
  const output: number[] = [];

  nums1.sort((a: number, b: number) => a - b);
  nums2.sort((a: number, b: number) => a - b);

  while (nums1.length && nums2.length) {
    if (nums1[0] === nums2[0]) {
      output.push(nums1.shift() as number);
      nums2.shift();
    } else if (nums1[0] > nums2[0]) {
      nums2.shift();
    } else {
      nums1.shift();
    }
  }
  return output;
};

// https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/

export const findMin = (nums: number[]): number => {
  let l = 0;
  let r = nums.length - 1;

  while (l < r) {
    const mid = Math.floor((l + r) / 2);

    if (nums[mid] > nums[r]) l = mid + 1;
    else r = mid;
  }

  return nums[l];
};

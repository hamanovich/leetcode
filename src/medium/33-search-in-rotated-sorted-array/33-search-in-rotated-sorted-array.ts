// https://leetcode.com/problems/search-in-rotated-sorted-array/

export const search = (nums: number[], target: number): number => {
  let l = 0;
  let r = nums.length - 1;

  while (l <= r) {
    const mid = Math.floor((l + r) / 2);

    if (nums[mid] === target) return mid;

    if (nums[l] <= nums[mid]) {
      if (target >= nums[l] && target < nums[mid]) r = mid - 1;
      else l = mid + 1;
    } else {
      if (target <= nums[r] && target > nums[mid]) l = mid + 1;
      else r = mid - 1;
    }
  }

  return -1;
};

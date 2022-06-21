/**
 * @param {number[]} nums
 * @return {number}
 */
export const findPeakElement = nums => {
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] > nums[i + 1]) return i;
  }
  return nums.length - 1;
};

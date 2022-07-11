// https://leetcode.com/problems/remove-duplicates-from-sorted-array/

export const removeDuplicates = (nums: number[]): number => {
  let i = 0;

  for (let j = 0; j < nums.length; j++) {
    if (nums[j] !== nums[i]) nums[++i] = nums[j];
  }

  return ++i;
};

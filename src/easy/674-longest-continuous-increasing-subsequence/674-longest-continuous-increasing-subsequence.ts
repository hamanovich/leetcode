// https://leetcode.com/problems/longest-continuous-increasing-subsequence/

export const findLengthOfLCIS = (nums: number[]): number => {
  let max = 0;
  let curr = 0;

  for (let i = 0; i < nums.length; i++) {
    curr++;

    if (nums[i] >= nums[i + 1]) {
      max = Math.max(max, curr);
      curr = 0;
    }
  }

  return Math.max(max, curr);
};

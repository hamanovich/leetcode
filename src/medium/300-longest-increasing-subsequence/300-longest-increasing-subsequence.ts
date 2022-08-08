// https://leetcode.com/problems/longest-increasing-subsequence/

export const lengthOfLIS = (nums: number[]): number => {
  const result = [nums[0]];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > result[i - 1]) result.push(nums[i]);
    else {
      let j = 0;
      while (nums[i] > result[j]) j++;
      result[j] = nums[i];
    }
  }

  return result.length;
};

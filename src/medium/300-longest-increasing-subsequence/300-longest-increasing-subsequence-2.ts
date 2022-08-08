// https://leetcode.com/problems/longest-increasing-subsequence/

export const lengthOfLIS = (nums: number[]): number => {
  const dp = new Array(nums.length).fill(1);
  let count = 1;

  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
        count = Math.max(count, dp[i]);
      }
    }
  }

  return count;
};

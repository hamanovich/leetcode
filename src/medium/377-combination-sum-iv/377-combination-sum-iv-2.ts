// https://leetcode.com/problems/combination-sum-iv/

export const combinationSum4 = (nums: number[], target: number): number => {
  const dp = Array(target + 1).fill(0);
  dp[0] = 1;

  for (let i = 1; i <= target; i++) {
    for (const num of nums) {
      if (num <= i) dp[i] += dp[i - num];
    }
  }

  return dp[target];
};

combinationSum4([1, 2, 3], 4);

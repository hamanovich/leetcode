// https://leetcode.com/problems/n-th-tribonacci-number/

export const tribonacci = (n: number): number => {
  const dp = [0, 1, 1];

  if (n < 3) return dp[n];

  for (let i = 3; i <= n; i++) dp.push(dp[i - 3] + dp[i - 2] + dp[i - 1]);

  return dp[n];
};

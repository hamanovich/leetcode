// https://leetcode.com/problems/longest-increasing-subsequence/

export const coinChange = (coins: number[], amount: number): number => {
  const dp = Array(amount + 1).fill(Infinity);
  dp[0] = 0;

  for (const coin of coins) {
    for (let i = coin; i <= amount; i++) dp[i] = Math.min(dp[i], dp[i - coin] + 1);
  }

  return dp[amount] === Infinity ? -1 : dp[amount];
};

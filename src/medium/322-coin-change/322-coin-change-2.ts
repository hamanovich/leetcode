// https://leetcode.com/problems/longest-increasing-subsequence/

export const coinChange = (coins: number[], amount: number): number => {
  const memo = new Map();

  const calc = (left: number): number => {
    if (memo.has(left)) return memo.get(left);
    if (left === 0) return 0;

    let min = Infinity;

    for (const coin of coins) if (left - coin >= 0) min = Math.min(min, calc(left - coin));

    memo.set(left, min + 1);

    return min + 1;
  };

  return calc(amount) === Infinity ? -1 : calc(amount);
};

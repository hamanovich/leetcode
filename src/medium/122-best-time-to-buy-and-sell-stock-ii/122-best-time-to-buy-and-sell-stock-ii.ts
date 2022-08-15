// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/

export const maxProfit = (prices: number[]): number => {
  let result = 0;

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) result += prices[i] - prices[i - 1];
  }

  return result;
};

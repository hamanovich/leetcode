export const maxProfit = (prices: number[]): number => {
  let max = 0;
  let min = prices[0];

  for (const price of prices) {
    min = Math.min(min, price);
    max = Math.max(max, price - min);
  }

  return max;
};

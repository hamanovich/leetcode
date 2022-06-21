/**
 * @param {number[]} prices
 * @return {number}
 */
export const maxProfit = prices => {
  let max = 0;
  let min = prices[0];

  for (let price of prices) {
    min = Math.min(min, price);
    max = Math.max(max, price - min);
  }

  return max;
};

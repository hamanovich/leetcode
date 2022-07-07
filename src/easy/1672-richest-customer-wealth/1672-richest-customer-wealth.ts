// https://leetcode.com/problems/richest-customer-wealth/

export const maximumWealth = (accounts: number[][]): number => {
  let max = 0;

  for (let i = 0; i < accounts.length; i++) {
    const sum = accounts[i].reduce((a, b) => a + b);
    if (sum > max) max = sum;
  }

  return max;
};

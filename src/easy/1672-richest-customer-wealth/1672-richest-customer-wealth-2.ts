// https://leetcode.com/problems/richest-customer-wealth/

export const maximumWealth = (accounts: number[][]): number =>
  Math.max(...accounts.map(x => x.reduce((a, c) => a + c)));

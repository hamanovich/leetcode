// https://leetcode.com/problems/house-robber/

export const rob = (nums: number[]): number =>
  nums.reduce((prev, curr) => [prev[1], Math.max(prev[0] + curr, prev[1])], [0, 0])[1];

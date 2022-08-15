// https://leetcode.com/problems/unique-paths

export const uniquePaths = (m: number, n: number): number =>
  m === 1 || n === 1 ? 1 : uniquePaths(m - 1, n) + uniquePaths(m, n - 1);

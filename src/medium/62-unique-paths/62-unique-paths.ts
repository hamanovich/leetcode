// https://leetcode.com/problems/unique-paths/

export const uniquePaths = (m: number, n: number): number => {
  const count = new Array(n).fill(1);

  for (let row = m - 1; row > 0; row--) {
    for (let col = n - 2; col >= 0; col--) {
      count[col] = count[col] + count[col + 1];
    }
  }
  return count[0];
};

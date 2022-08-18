// https://leetcode.com/problems/pascals-triangle-ii/

export const getRow = (rowIndex: number): number[] => {
  const dp = [[1], [1, 1]];

  if (rowIndex < 2) return dp[rowIndex];

  for (let i = 2; i <= rowIndex; i++) {
    const row = [1];

    for (let j = 1; j < i; j++) {
      row.push(dp[i - 1][j - 1] + dp[i - 1][j]);
    }

    row.push(1);
    dp.push(row);
  }

  return dp[rowIndex];
};

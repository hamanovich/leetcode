// https://leetcode.com/problems/pascals-triangle/

export const generate = (numRows: number): number[][] => {
  const dp = [[1], [1, 1]];

  if (numRows < 3) return dp.splice(0, numRows);

  for (let i = 2; i < numRows; i++) {
    const row = [1];

    for (let j = 1; j < i; j++) {
      row.push(dp[i - 1][j - 1] + dp[i - 1][j]);
    }

    row.push(1);
    dp.push(row);
  }

  return dp;
};

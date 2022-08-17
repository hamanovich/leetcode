// https://leetcode.com/problems/set-matrix-zeroes/

export const setZeroes = (matrix: number[][]): void => {
  const temp: number[][] = [];

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === 0) temp.push([i, j]);
    }
  }

  for (let i = 0; i < temp.length; i++) {
    const [x, y] = temp[i];

    for (let j = 0; j < matrix[0].length; j++) matrix[x][j] = 0;
    for (let j = 0; j < matrix.length; j++) matrix[j][y] = 0;
  }
};

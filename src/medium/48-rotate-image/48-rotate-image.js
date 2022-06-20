/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
export const rotate = matrix => {
  matrix.reverse();

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < i; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }

  return matrix;
};

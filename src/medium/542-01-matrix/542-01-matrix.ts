// https://leetcode.com/problems/01-matrix/

export const updateMatrix = (mat: number[][]): number[][] => {
  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[0].length; j++) {
      if (mat[i][j] === 0) continue;
      mat[i][j] = Infinity;
      /* istanbul ignore else */
      if (i - 1 >= 0) mat[i][j] = Math.min(mat[i][j], 1 + mat[i - 1][j]);
      if (j - 1 >= 0) mat[i][j] = Math.min(mat[i][j], 1 + mat[i][j - 1]);
    }
  }

  for (let i = mat.length - 1; i >= 0; i--) {
    for (let j = mat[0].length - 1; j >= 0; j--) {
      if (mat[i][j] === 0) continue;
      if (i + 1 < mat.length) mat[i][j] = Math.min(mat[i][j], 1 + mat[i + 1][j]);
      if (j + 1 < mat[0].length) mat[i][j] = Math.min(mat[i][j], 1 + mat[i][j + 1]);
    }
  }

  return mat;
};

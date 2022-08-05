// https://leetcode.com/problems/search-a-2d-matrix/

export const searchMatrix = (matrix: number[][], target: number): boolean => {
  let start = 0;
  let end = matrix.length * matrix[0].length - 1;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    const midNum = matrix[Math.floor(mid / matrix[0].length)][mid % matrix[0].length];

    if (midNum === target) return true;
    else if (midNum < target) start = mid + 1;
    else end = mid - 1;
  }

  return false;
};

// https://leetcode.com/problems/valid-perfect-square/

export const isPerfectSquare = (num: number): boolean => {
  if (num === 1) return true;

  let left = 1;
  let right = num / 2;

  while (left <= right) {
    const middle = Math.floor((left + right) / 2);
    const square = middle * middle;

    if (square === num) return true;

    if (square < num) left = middle + 1;
    else right = middle - 1;
  }

  return false;
};

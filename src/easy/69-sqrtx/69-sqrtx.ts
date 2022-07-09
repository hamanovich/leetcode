// https://leetcode.com/problems/sqrtx/

export const mySqrt = (x: number): number => {
  let left = 0;
  let right = Math.floor(x / 2);

  if (x < 2) return x;

  while (left <= right) {
    const middle = Math.floor((left + right) / 2);
    const sq = middle * middle;

    if (sq === x) return middle;
    if (sq > x) right = middle - 1;
    else left = middle + 1;
  }

  return right;
};

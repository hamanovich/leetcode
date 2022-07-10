// https://leetcode.com/problems/power-of-four/

export const isPowerOfFour = (n: number): boolean => {
  if (n < 1) return false;
  if (n === 1) return true;
  return isPowerOfFour(n / 4);
};

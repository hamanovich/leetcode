// https://leetcode.com/problems/power-of-two/

export const isPowerOfTwo = (n: number): boolean => {
  if (n < 1) return false;
  if (n === 1) return true;
  return isPowerOfTwo(n / 2);
};

// https://leetcode.com/problems/number-of-1-bits/

export const hammingWeight = (n: number): number => {
  let sum = 0;

  while (n) {
    sum += n & 1;
    n = n >>> 1;
  }

  return sum;
};

// https://leetcode.com/problems/reverse-bits/

export const reverseBits = (n: number): number => {
  let result = 0;
  let count = 32;

  while (count--) {
    result *= 2;
    result += n & 1;
    n = n >> 1;
  }

  return result;
};

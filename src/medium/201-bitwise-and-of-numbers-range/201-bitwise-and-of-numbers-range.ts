// https://leetcode.com/problems/bitwise-and-of-numbers-range/

export const rangeBitwiseAnd = (left: number, right: number): number => {
  let i = 0;

  while (left !== right) {
    i++;
    left >>= 1;
    right >>= 1;
  }

  return left << i;
};

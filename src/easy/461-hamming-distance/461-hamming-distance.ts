// https://leetcode.com/problems/hamming-distance/

export const hammingDistance = (x: number, y: number): number => {
  let result = 0;

  while (x || y) {
    result += Number((x & 1) !== (y & 1));
    x >>= 1;
    y >>= 1;
  }

  return result;
};

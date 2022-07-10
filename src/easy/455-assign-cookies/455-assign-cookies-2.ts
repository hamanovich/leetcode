// https://leetcode.com/problems/assign-cookies/

export const findContentChildren = (g: number[], s: number[]): number => {
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);

  let j = 0;
  let count = 0;

  for (const num of s) {
    if (num >= g[j]) {
      count++;
      j++;
    }
  }

  return count;
};

// https://leetcode.com/problems/assign-cookies/

export const findContentChildren = (g: number[], s: number[]): number => {
  let count = 0;

  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);

  for (let i = 0; i < g.length; i++) {
    for (let j = 0; j < s.length; j++) {
      if (s[j] >= g[i]) {
        s.splice(j, 1);
        count++;
        break;
      }
    }
  }

  return count;
};

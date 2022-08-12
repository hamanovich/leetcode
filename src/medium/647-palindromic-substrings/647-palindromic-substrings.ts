// https://leetcode.com/problems/palindromic-substrings/

export const countSubstrings = (s: string): number => {
  let count = 0;

  const f = (l: number, r: number): void => {
    while (l >= 0 && r < s.length && s[l] === s[r]) {
      count++;
      l--;
      r++;
    }
  };

  for (let i = 0; i < s.length; i++) f(i, i), f(i, i + 1);

  return count;
};

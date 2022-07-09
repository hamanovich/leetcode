// https://leetcode.com/problems/find-the-difference/

export const findTheDifference = (s: string, t: string): string => {
  if (!s) return t;

  let sum = 0;

  for (let i = 0; i < t.length; i++) {
    sum = sum + t[i].charCodeAt(0) - (s[i] ? s[i].charCodeAt(0) : 0);
  }

  return String.fromCharCode(sum);
};

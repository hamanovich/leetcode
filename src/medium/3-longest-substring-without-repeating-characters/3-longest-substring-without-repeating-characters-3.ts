export const lengthOfLongestSubstring = (s: string): number => {
  const map = new Map();
  let start = 0;
  let max = 0;

  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) start = Math.max(map.get(s[i]) + 1, start);
    map.set(s[i], i);
    max = Math.max(i - start + 1, max);
  }

  return max;
};

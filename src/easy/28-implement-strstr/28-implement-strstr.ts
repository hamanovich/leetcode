// https://leetcode.com/problems/implement-strstr/

export const strStr = (haystack: string, needle: string): number => {
  if (!needle.length) return 0;
  if (!haystack.includes(needle)) return -1;

  return haystack.split(needle)[0].length;
};

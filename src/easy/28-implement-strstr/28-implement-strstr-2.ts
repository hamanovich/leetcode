// https://leetcode.com/problems/implement-strstr/

export const strStr = (haystack: string, needle: string): number => {
  const hl = haystack.length;
  const nl = needle.length;

  if (needle === '' || needle === haystack) return 0;
  if (hl < nl) return -1;

  for (let i = 0; i <= hl - nl; i++) {
    if (haystack[i] !== needle[0]) continue;

    for (let j = 0; j < nl; j++) {
      if (needle[j] !== haystack[i + j]) break;
      else if (j === nl - 1) return i;
    }
  }

  return -1;
};

// https://leetcode.com/problems/verifying-an-alien-dictionary/

export const isAlienSorted = (words: string[], order: string): boolean => {
  const chars: Record<string, number> = {};

  for (let i = 0; i < order.length; ++i) chars[order[i]] = i;

  const lexicographical = (a: string, b: string) => {
    for (let i = 0; i < Math.min(a.length, b.length); ++i) {
      if (chars[a[i]] < chars[b[i]]) return true;
      if (chars[a[i]] > chars[b[i]]) return false;
    }
    return a.length <= b.length;
  };

  for (let i = 0; i < words.length - 1; ++i) {
    if (!lexicographical(words[i], words[i + 1])) return false;
  }

  return true;
};

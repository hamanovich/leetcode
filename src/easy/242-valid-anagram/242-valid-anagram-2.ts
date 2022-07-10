// https://leetcode.com/problems/valid-anagram/

export const isAnagram = (s: string, t: string): boolean => {
  const map: Record<string, number> = {};

  s.split('').map(c => (map[c] = map[c] ? map[c] + 1 : 1));
  t.split('').map(c => (map[c] = map[c] ? map[c] - 1 : -1));

  return Object.keys(map).every(k => map[k] === 0);
};

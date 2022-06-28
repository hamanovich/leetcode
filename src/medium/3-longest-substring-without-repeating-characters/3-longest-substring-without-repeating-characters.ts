export const lengthOfLongestSubstring = (s: string): number => {
  const table: Record<string, number> = {};
  let index = 0;

  return s.split('').reduce((max, v, i) => {
    index = table[v] >= index ? table[v] + 1 : index;
    table[v] = i;
    return Math.max(max, 1 + i - index);
  }, 0);
};

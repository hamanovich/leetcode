// https://leetcode.com/problems/find-all-anagrams-in-a-string

export const findAnagrams = (s: string, p: string): number[] => {
  const output: number[] = [];

  for (let i = 0; i < s.length; i++) {
    if (
      s
        .substring(i, i + p.length)
        .split('')
        .sort()
        .join('') === p.split('').sort().join('')
    )
      output.push(i);
  }

  return output;
};

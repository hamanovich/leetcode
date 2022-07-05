// https://leetcode.com/problems/find-all-anagrams-in-a-string

export const findAnagrams = (s: string, p: string): number[] => {
  const hash: Record<string, number> = {};
  let uniqueChars = 0;

  for (const c of p) {
    if (!hash[c]) {
      uniqueChars++;
      hash[c] = 1;
    } else hash[c]++;
  }

  const output = [];
  let left = 0;
  let right = 0;

  for (right; right < s.length; right++) {
    if (hash[s[right]] != null) hash[s[right]]--;
    if (hash[s[right]] == 0) uniqueChars--;
    if (uniqueChars == 0) output.push(left);
    if (right - left + 1 == p.length) {
      if (hash[s[left]] != null) hash[s[left]]++;
      if (hash[s[left++]] == 1) uniqueChars++;
    }
  }
  return output;
};

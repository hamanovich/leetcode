// https://leetcode.com/problems/find-all-anagrams-in-a-string/

export const findAnagrams = (s: string, p: string): number[] => {
  const chars: Record<string, number> = {};
  let unique = 0;

  for (const c of p) {
    if (!chars[c]) {
      unique++;
      chars[c] = 1;
    } else chars[c]++;
  }

  const output = [];
  let left = 0;

  for (let right = 0; right < s.length; right++) {
    if (!isNaN(chars[s[right]])) chars[s[right]]--;
    if (chars[s[right]] === 0) unique--;
    if (unique === 0) output.push(left);

    if (right - left + 1 === p.length) {
      if (!isNaN(chars[s[left]])) chars[s[left]]++;
      if (chars[s[left++]] === 1) unique++;
    }
  }

  return output;
};

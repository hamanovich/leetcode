// https://leetcode.com/problems/find-all-anagrams-in-a-string

export const findAnagrams = (s: string, p: string): number[] => {
  const output: number[] = [];
  const chars: Record<string, number> = {};

  for (const char of p) chars[char] = chars[char] + 1 || 1;

  let left = 0;
  let right = 0;
  let len = p.length;

  while (right < s.length) {
    if (chars[s[right]] > 0) len--;

    chars[s[right]]--;
    right++;

    if (len === 0) output.push(left);

    if (right - left === p.length) {
      if (chars[s[left]] >= 0) len++;

      chars[s[left]]++;
      left++;
    }
  }

  return output;
};

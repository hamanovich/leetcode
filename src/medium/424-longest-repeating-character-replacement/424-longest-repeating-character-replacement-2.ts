// https://leetcode.com/problems/longest-repeating-character-replacement/

export const characterReplacement = (s: string, k: number): number => {
  const chars: Record<string, number> = {};
  let left = 0;
  let right = 0;
  let max = 0;

  while (right < s.length) {
    chars[s[right]] = chars[s[right]] ? chars[s[right]] + 1 : 1;

    if (chars[s[right]] > max) max = chars[s[right]];

    if (right - left + 1 - max > k) {
      chars[s[left]]--;
      left++;
    }

    right++;
  }

  return right - left;
};

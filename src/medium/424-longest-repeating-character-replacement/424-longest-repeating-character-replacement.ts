// https://leetcode.com/problems/longest-repeating-character-replacement/

export const characterReplacement = (s: string, k: number): number => {
  let left = 0;
  let max = 0;
  let most = 0;
  const chars: Record<string, number> = {};

  for (let i = 0; i < s.length; i++) {
    chars[s[i]] = chars[s[i]] + 1 || 1;
    most = Math.max(most, chars[s[i]]);

    while (i - left + 1 - most > k) {
      chars[s[left]] -= 1;
      left++;
    }

    max = Math.max(max, i - left + 1);
  }

  return max;
};

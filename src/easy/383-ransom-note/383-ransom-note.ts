// https://leetcode.com/problems/ransom-note/

export const canConstruct = (ransomNote: string, magazine: string): boolean => {
  const hash: Record<string, number> = {};

  for (const char of magazine) hash[char] = hash[char] + 1 || 1;

  for (const char of ransomNote) {
    if (!hash[char]) return false;
    hash[char]--;
  }

  return true;
};

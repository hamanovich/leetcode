export const firstUniqChar = (s: string): number => {
  const hash: Record<string, number> = {};

  for (const char of s) {
    if (hash[char]) hash[char]++;
    else hash[char] = 1;
  }

  for (let i = 0; i < s.length; i++) {
    if (hash[s[i]] === 1) {
      return i;
    }
  }

  return -1;
};

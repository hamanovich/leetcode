export const longestPalindrome = (s: string): number => {
  let result = 0;
  const keys: Record<string, number> = {};

  for (const char of s) {
    keys[char] = (keys[char] || 0) + 1;

    if (keys[char] % 2 === 0) result += 2;
  }

  return result + Number(s.length > result);
};

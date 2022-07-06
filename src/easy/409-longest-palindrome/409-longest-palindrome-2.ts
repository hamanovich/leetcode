export const longestPalindrome = (s: string): number => {
  const set = new Set();
  let count = 0;

  for (const char of s) {
    if (set.has(char)) {
      count += 2;
      set.delete(char);
    } else set.add(char);
    // set.delete(char);
  }

  console.log('set.size:', set.size);

  return count + set.size;
};

/**
 * @param {string} s
 * @return {number}
 */
export const longestPalindrome = s => {
  const set = new Set();
  let count = 0;

  for (const char of s) {
    if (set.has(char)) {
      count += 2;
      set.delete(char);
    } else set.add(char);
  }

  return count + !!set.size;
};

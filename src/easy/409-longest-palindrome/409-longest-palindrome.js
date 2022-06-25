/**
 * @param {string} s
 * @return {number}
 */
export const longestPalindrome = s => {
  let result = 0;
  const keys = {};

  for (let char of s) {
    keys[char] = (keys[char] || 0) + 1;

    if (keys[char] % 2 === 0) result += 2;
  }

  return result + !!(s.length > result);
};

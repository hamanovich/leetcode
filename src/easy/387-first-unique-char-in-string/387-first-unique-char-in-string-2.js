/**
 * @param {string} s
 * @return {number}
 */
export const firstUniqChar = s => {
  const hash = {};

  for (let char of s) {
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

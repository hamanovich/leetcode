/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
export const isSubsequence = (s, t) => {
  let count = 0;

  for (let char of t) {
    if (char === s[count]) count++;
  }

  return count === s.length;
};

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
export const isSubsequence = (s, t) => {
  let count = 0;

  if (!s.length && !t.length) return true;

  for (let char of t) {
    if (char === s[count]) count++;
    if (count === s.length) return true;
  }

  return false;
};
